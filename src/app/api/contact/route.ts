import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { SITE } from "@/data/site";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(100, "Name cannot exceed 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200, "Email cannot exceed 200 characters."),
  service: z
    .string()
    .trim()
    .max(100, "Service category is too long.")
    .default("Not specified"),
  specific: z
    .string()
    .trim()
    .max(150, "Specific requirement is too long.")
    .optional()
    .default("Not specified"),
  company: z
    .string()
    .trim()
    .max(150, "Company name is too long.")
    .optional()
    .default("Not provided"),
  phone: z
    .string()
    .trim()
    .max(50, "Phone number is too long.")
    .optional()
    .default("Not provided"),
  budget: z
    .string()
    .trim()
    .max(50, "Budget tier is too long.")
    .default("Not specified"),
  message: z
    .string()
    .trim()
    .min(15, "Please share at least 15 characters about your project.")
    .max(4000, "Project description cannot exceed 4000 characters."),
  website: z.string().optional(), // Honeypot trap
  turnstileToken: z.string().optional(),
});

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sanitizeSubject(input: string): string {
  return input.replace(/[\r\n\t]/g, " ").trim();
}

export async function POST(request: NextRequest) {
  // 1. Content-Type check: reject non-JSON payloads
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { error: "Unsupported Content-Type. Expected application/json." },
      { status: 415 }
    );
  }

  // 2. Cap body size: reject > 20 KB (20,480 bytes)
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20480) {
    return NextResponse.json(
      { error: "Payload too large. Maximum allowed size is 20 KB." },
      { status: 413 }
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > 20480) {
      return NextResponse.json(
        { error: "Payload too large. Maximum allowed size is 20 KB." },
        { status: 413 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Could not read request body." },
      { status: 400 }
    );
  }

  // 3. Verify Origin header in production matches SITE.siteUrl
  if (process.env.NODE_ENV === "production") {
    const origin = request.headers.get("origin");
    if (origin) {
      try {
        const originUrl = new URL(origin);
        const siteUrl = new URL(SITE.siteUrl);
        if (originUrl.host !== siteUrl.host) {
          return NextResponse.json(
            { error: "Forbidden origin." },
            { status: 403 }
          );
        }
      } catch {
        return NextResponse.json(
          { error: "Invalid origin header." },
          { status: 403 }
        );
      }
    }
  }

  // 4. Parse JSON and validate with Zod
  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(rawBody);
  } catch {
    return NextResponse.json(
      { error: "Malformed JSON payload." },
      { status: 400 }
    );
  }

  const result = contactSchema.safeParse(parsedJson);
  if (!result.success) {
    const firstIssue = result.error.issues[0]?.message || "Validation failed.";
    return NextResponse.json({ error: firstIssue }, { status: 400 });
  }

  const data = result.data;

  // 5. Honeypot check: silently succeed if honeypot is triggered
  if (data.website && data.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  // 6. Extract client IP from Cloudflare header (fallback to x-forwarded-for only in dev)
  const clientIp =
    request.headers.get("cf-connecting-ip") ||
    (process.env.NODE_ENV !== "production"
      ? request.headers.get("x-forwarded-for")?.split(",")[0].trim()
      : null) ||
    "127.0.0.1";

  // 7. Verify Turnstile token if secret key is configured
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (turnstileSecret) {
    if (!data.turnstileToken) {
      return NextResponse.json(
        { error: "Security check required. Please complete the verification." },
        { status: 400 }
      );
    }

    try {
      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: turnstileSecret,
            response: data.turnstileToken,
            remoteip: clientIp,
          }),
        }
      );

      const verifyData = (await verifyRes.json()) as { success?: boolean };
      if (!verifyData.success) {
        return NextResponse.json(
          { error: "Security verification failed. Please try again." },
          { status: 400 }
        );
      }
    } catch (err) {
      console.error("Turnstile verification fetch error:", (err as Error).message);
      return NextResponse.json(
        { error: "Security service unavailable. Please try again." },
        { status: 502 }
      );
    }
  }

  // 8. Environment variables check
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const contactToEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL?.trim();

  if (process.env.NODE_ENV === "production") {
    const missing: string[] = [];
    if (!resendApiKey) missing.push("RESEND_API_KEY");
    if (!contactToEmail) missing.push("CONTACT_TO_EMAIL");
    if (!contactFromEmail) missing.push("CONTACT_FROM_EMAIL");

    if (missing.length > 0) {
      for (const varName of missing) {
        console.error(`Missing required environment variable: ${varName}`);
      }
      return NextResponse.json(
        {
          error: `Enquiry service is temporarily unavailable. Please email ${SITE.email} directly.`,
        },
        { status: 503 }
      );
    }
  }

  // 9. Development preview mode when credentials are not configured locally
  if (
    process.env.NODE_ENV !== "production" &&
    (!resendApiKey || !contactToEmail || !contactFromEmail)
  ) {
    console.info("[Digit Studio Dev Preview] Contact enquiry received:", {
      name: data.name,
      email: data.email,
      service: data.service,
      specific: data.specific,
      company: data.company,
      phone: data.phone,
      budget: data.budget,
      messageLength: data.message.length,
      clientIp,
    });
    return NextResponse.json({ ok: true, provider: "dev-preview" });
  }

  // 10. Send Email (a): The enquiry to CONTACT_TO_EMAIL
  const cleanName = sanitizeSubject(data.name);
  const cleanService = sanitizeSubject(data.service);
  const inquirySubject = `[${SITE.brand}] ${cleanService} enquiry from ${cleanName}`;

  const inquiryHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head><meta charset="utf-8" /></head>
      <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111;line-height:1.6;margin:0;padding:24px;background:#f7f5f3;">
        <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;padding:28px;border:1px solid #e5e2dd;">
          <h2 style="color:#8B0D1A;margin-top:0;margin-bottom:16px;font-size:22px;">New Project Enquiry — ${escapeHtml(SITE.brand)}</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px;">
            <tr style="border-bottom:1px solid #f0eee9;"><td style="padding:10px 0;width:140px;color:#77716E;"><strong>Name:</strong></td><td style="padding:10px 0;color:#111;">${escapeHtml(data.name)}</td></tr>
            <tr style="border-bottom:1px solid #f0eee9;"><td style="padding:10px 0;color:#77716E;"><strong>Email:</strong></td><td style="padding:10px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color:#8B0D1A;text-decoration:none;">${escapeHtml(data.email)}</a></td></tr>
            <tr style="border-bottom:1px solid #f0eee9;"><td style="padding:10px 0;color:#77716E;"><strong>Company:</strong></td><td style="padding:10px 0;color:#111;">${escapeHtml(data.company)}</td></tr>
            <tr style="border-bottom:1px solid #f0eee9;"><td style="padding:10px 0;color:#77716E;"><strong>Phone:</strong></td><td style="padding:10px 0;color:#111;">${escapeHtml(data.phone)}</td></tr>
            <tr style="border-bottom:1px solid #f0eee9;"><td style="padding:10px 0;color:#77716E;"><strong>Service:</strong></td><td style="padding:10px 0;color:#111;">${escapeHtml(data.service)}</td></tr>
            <tr style="border-bottom:1px solid #f0eee9;"><td style="padding:10px 0;color:#77716E;"><strong>Requirement:</strong></td><td style="padding:10px 0;color:#111;">${escapeHtml(data.specific)}</td></tr>
            <tr><td style="padding:10px 0;color:#77716E;"><strong>Budget Tier:</strong></td><td style="padding:10px 0;color:#111;">${escapeHtml(data.budget)}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #f0eee9;margin:24px 0 16px;" />
          <h3 style="font-size:15px;margin:0 0 8px;color:#111;">Project Overview:</h3>
          <div style="white-space:pre-wrap;background:#f9f8f6;padding:16px;border-radius:8px;border:1px solid #e8e5e0;font-size:14px;color:#222;line-height:1.65;">${escapeHtml(data.message)}</div>
          <p style="font-size:12px;color:#999;margin-top:24px;border-top:1px solid #eee;padding-top:12px;">Submitted via ${escapeHtml(SITE.brand)} Web Portal · IP: ${escapeHtml(clientIp)}</p>
        </div>
      </body>
    </html>
  `;

  const inquiryText = `New Project Enquiry — ${SITE.brand}\n\n` +
    `Name: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Company: ${data.company}\n` +
    `Phone: ${data.phone}\n` +
    `Service: ${data.service}\n` +
    `Specific Requirement: ${data.specific}\n` +
    `Budget Tier: ${data.budget}\n` +
    `Client IP: ${clientIp}\n\n` +
    `Project Overview:\n${data.message}\n`;

  const resendInquiryRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: contactFromEmail,
      to: [contactToEmail!],
      reply_to: data.email,
      subject: inquirySubject,
      html: inquiryHtml,
      text: inquiryText,
    }),
  });

  if (!resendInquiryRes.ok) {
    const errorJson = (await resendInquiryRes.json().catch(() => ({}))) as {
      message?: string;
    };
    console.error("Resend API inquiry error:", resendInquiryRes.status, errorJson.message || "");
    return NextResponse.json(
      {
        error: `Email delivery failed. Please reach out directly to ${SITE.email}.`,
      },
      { status: 502 }
    );
  }

  // 11. Send Email (b): Auto-reply confirmation to the visitor from CONTACT_FROM_EMAIL
  try {
    const autoReplySubject = `[${SITE.brand}] We received your project enquiry`;
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head><meta charset="utf-8" /></head>
        <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111;line-height:1.6;margin:0;padding:24px;background:#f7f5f3;">
          <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;padding:28px;border:1px solid #e5e2dd;">
            <h2 style="color:#8B0D1A;margin-top:0;margin-bottom:12px;font-size:20px;">Thank you for contacting ${escapeHtml(SITE.brand)}</h2>
            <p style="font-size:14px;color:#333;">Hi ${escapeHtml(data.name)},</p>
            <p style="font-size:14px;color:#333;">We have received your enquiry regarding <strong>${escapeHtml(data.service)}</strong>. Emmanuel Oluyemi and the studio team will review your requirements and respond within 24 to 48 hours.</p>
            <p style="font-size:14px;color:#333;">If you have additional reference materials or immediate questions, feel free to reply directly to this email or chat with us on WhatsApp at <a href="${escapeHtml(SITE.whatsappUrl)}" style="color:#8B0D1A;text-decoration:none;">${escapeHtml(SITE.phone)}</a>.</p>
            <hr style="border:none;border-top:1px solid #f0eee9;margin:24px 0;" />
            <p style="font-size:12px;color:#888;margin:0;">${escapeHtml(SITE.brand)} · ${escapeHtml(SITE.tagline)}<br />${escapeHtml(SITE.timezoneNote)}</p>
          </div>
        </body>
      </html>
    `;

    const autoReplyText = `Hi ${data.name},\n\n` +
      `Thank you for contacting ${SITE.brand}. We have received your project enquiry regarding "${data.service}".\n\n` +
      `Emmanuel Oluyemi and the studio team will review your requirements and respond within 24 to 48 hours.\n\n` +
      `If you have immediate files or questions, reply to this email or message us on WhatsApp: ${SITE.whatsappUrl}\n\n` +
      `--\n${SITE.brand} · ${SITE.tagline}\n${SITE.timezoneNote}\n`;

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactFromEmail,
        to: [data.email],
        subject: autoReplySubject,
        html: autoReplyHtml,
        text: autoReplyText,
      }),
    });
  } catch (autoErr) {
    // If auto-reply fails, log error but still report success since inquiry (a) succeeded
    console.error("Resend auto-reply confirmation error:", (autoErr as Error).message);
  }

  return NextResponse.json({ ok: true, provider: "resend" });
}
