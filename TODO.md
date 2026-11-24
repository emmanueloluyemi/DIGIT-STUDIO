# Real Studio Assets & Production Checklist for Digit Studio

This document lists the real assets and configuration items that founder Emmanuel Oluyemi needs to supply or configure before production launch.

---

## 1. Client Portfolio Assets (Replace Studio Projects)
The current site showcases three studio-built projects designed to demonstrate capability across the studio's primary service lines:
- **Nectar Botanical Tea** (Brand Identity & Packaging)
- **Ardent Advisory** (Web Design & Development)
- **Lumina Workspace** (AI Video & 3D Motion)

### Action Items for Emmanuel:
- [ ] Provide 2–3 completed commercial client case studies with client approval.
- [ ] For each client project, provide:
  - Real client/brand name and industry
  - Problem/challenge statement
  - Studio approach and deliverables list
  - Measurable outcome or client quote
  - High-resolution visual assets (mockups, web screenshots, packaging renders)
- [ ] Update `content/projects.ts` with these client records or retain the studio projects alongside them.

---

## 2. Platform Profile Verification
- [x] **Upwork Profile**: Configured (`https://www.upwork.com/freelancers/~01c06bedf0cb7cfed6`) with 100% Job Success and 5.0 rating.
- [ ] **Fiverr Profile**: Provide exact Fiverr seller profile URL if clients will be directed to order through Fiverr gig packages.
- [ ] **LinkedIn Profile**: Confirm profile URL (`https://www.linkedin.com/in/emmanueloluyemi`).

---

## 3. Visual & Media Assets
- [ ] **Founder Headshot**: Supply a high-resolution, professional portrait photo of Emmanuel Oluyemi to be placed on `/about` and `/` (currently using clean typographic and initials framing).
- [ ] **Favicon / App Icon**: Generate finalized custom SVG/PNG brand icon for Digit Studio in `public/brand/` if different from the existing geometric mark.
- [ ] **Video Reel**: If offering AI video production, provide an MP4/WebM reel or YouTube/Vimeo embed showing recent video renders.

---

## 4. Email & Domain Configuration
The contact form delivers inquiries directly via Resend HTTP API. The following production environment variables must be configured on Cloudflare Workers / hosting dashboard:
- [ ] `RESEND_API_KEY`: Generate a live sending key from [Resend.com](https://resend.com).
- [ ] `CONTACT_TO_EMAIL`: The recipient inbox for new inquiries (`oluyemiemmanuel21@gmail.com`).
- [ ] `CONTACT_FROM_EMAIL`: Verified sender address from custom domain (e.g., `inquiries@digitstudio.com` or `studio@digitstudio.com`). Note: Sending from custom domain requires verifying DNS records (SPF, DKIM, DMARC) in Resend.
- [ ] `NEXT_PUBLIC_SITE_URL`: Production URL (e.g., `https://digitstudio.com`).
- [ ] `TURNSTILE_SECRET_KEY` & `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: (Optional) Cloudflare Turnstile keys to enable silent anti-bot verification.

---

## 5. Analytics & Privacy
- [ ] Decide on privacy-preserving analytics (e.g. Cloudflare Web Analytics, Plausible, or Google Analytics 4).
- [ ] If using cookies or tracking scripts, ensure cookie banner compliance. (Current site is 100% cookie-free and requires no consent banner).
