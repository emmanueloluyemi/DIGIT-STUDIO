"use client";

import React, { useMemo, useState } from "react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SITE } from "@/data/site";

const SERVICE_OPTIONS = [
  "Branding & Graphic Design",
  "Web Design & Development",
  "AI Video & Animation",
  "Social Media & Digital Marketing",
  "Content Creation",
  "Something Else",
] as const;

const SUBSERVICES: Record<string, string[]> = {
  "Branding & Graphic Design": [
    "Logo design & system",
    "Complete brand identity",
    "Rebranding & brand refresh",
    "Brand guidelines & tokens",
    "Packaging & label design",
    "Flyer, poster & print collateral",
    "Company profile or brochure",
    "Presentation & pitch decks",
    "Social media design kit",
    "Other branding requirement",
  ],
  "Web Design & Development": [
    "Custom business website",
    "Next.js / React web application",
    "WordPress custom build",
    "E-commerce storefront (Shopify / Woo)",
    "Frontend development & micro-interactions",
    "Backend & database integrations",
    "SaaS dashboard or portal",
    "Website redesign & speed optimisation",
    "Other web requirement",
  ],
  "AI Video & Animation": [
    "AI product commercial",
    "Cinematic brand teaser",
    "UGC-style performance ad",
    "2D / 3D motion graphics",
    "Explainer & educational video",
    "AI spokesperson video",
    "Corporate & investor video",
    "Video editing & color grade",
    "Other video requirement",
  ],
  "Social Media & Digital Marketing": [
    "End-to-end social management",
    "Content strategy & monthly calendar",
    "Paid social campaign execution (Meta / LinkedIn)",
    "Reels & short-form video distribution",
    "E-commerce store marketing support",
    "Community management & outreach",
    "Other marketing requirement",
  ],
  "Content Creation": [
    "Short-form social content pipeline",
    "Brand storytelling & scripts",
    "Educational & explanatory articles",
    "Promotional marketing assets",
    "Content repurposing suite",
    "Other content requirement",
  ],
  "Something Else": [
    "Bespoke multi-disciplinary project",
    "Creative direction consultation",
    "Exploratory scoping session",
  ],
};

const BUDGETS = [
  "Under $500",
  "$500–$1,000",
  "$1,000–$3,000",
  "$3,000–$5,000",
  "$5,000+",
  "I am not sure yet",
] as const;

interface FormValues {
  service: string;
  specific: string;
  message: string;
  budget: string;
  name: string;
  company: string;
  email: string;
  phone: string;
}

const EMPTY: FormValues = {
  service: SERVICE_OPTIONS[0],
  specific: "",
  message: "",
  budget: BUDGETS[0],
  name: "",
  company: "",
  email: "",
  phone: "",
};

const inputClass =
  "w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]";

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const initialService =
    SERVICE_OPTIONS.find(
      (item) => item.toLowerCase() === (defaultService || "").trim().toLowerCase()
    ) || EMPTY.service;

  const [values, setValues] = useState<FormValues>({
    ...EMPTY,
    service: initialService,
  });
  const [step, setStep] = useState(0); // 0 to 5 (6 steps total)
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "preview" | "error"
  >("idle");
  const [error, setError] = useState("");

  const subservices = useMemo(
    () => SUBSERVICES[values.service] || SUBSERVICES["Something Else"],
    [values.service]
  );

  const update = (key: keyof FormValues, value: string) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
      ...(key === "service" ? { specific: "" } : {}),
    }));
  };

  const validateCurrentStep = () => {
    if (step === 0 && !values.service) return "Please choose a service category.";
    if (step === 1 && !values.specific) return "Please select the specific requirement.";
    if (step === 2 && values.message.trim().length < 15) {
      return "Please provide a brief description of your project (at least 15 characters).";
    }
    if (step === 3 && !values.budget) return "Please select a budget range.";
    if (step === 4) {
      if (values.name.trim().length < 2) return "Please enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
        return "Please enter a valid email address.";
      }
    }
    return "";
  };

  const handleNext = () => {
    const err = validateCurrentStep();
    if (err) {
      setError(err);
      return;
    }
    setError("");
    setStep((curr) => Math.min(5, curr + 1));
  };

  const handleSubmit = async () => {
    setError("");
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(
          result?.error || `Could not send your enquiry. Please email ${SITE.email} directly.`
        );
      }
      setStatus(result?.provider === "dev-preview" ? "preview" : "success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : `Could not send your enquiry. Please email ${SITE.email} directly.`
      );
    }
  };

  if (status === "success" || status === "preview") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-3xl border border-[var(--accent)]/40 bg-[var(--bg-elevated)] p-8 sm:p-12 space-y-5 shadow-2xl"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
          {status === "success" ? "Enquiry Received" : "Development Preview"}
        </span>
        <h3 className="font-display text-3xl font-bold text-[var(--text-primary)]">
          {status === "success"
            ? `Thank you, ${values.name}.`
            : "Form validated successfully."}
        </h3>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
          {status === "success"
            ? "Your project details have reached Digit Studio. Emmanuel will review your requirements and respond within one business day."
            : "The progressive enquiry flow completed all six validation steps. Connect production mail provider before final public deployment."}
        </p>
        <div className="pt-2">
          <MagneticButton
            variant="secondary"
            size="md"
            onClick={() => {
              setValues(EMPTY);
              setStep(0);
              setStatus("idle");
            }}
          >
            Start another enquiry
          </MagneticButton>
        </div>
      </div>
    );
  }

  const totalSteps = 6;
  const progressPercent = Math.round(((step + 1) / totalSteps) * 100);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-10 space-y-8 shadow-2xl"
    >
      {/* Step Counter & Progress Indicator */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.14em]">
          <span className="text-[var(--text-secondary)]">
            Step 0{step + 1} of 0{totalSteps}
          </span>
          <span className="text-[var(--accent)] font-bold">{progressPercent}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--border-subtle)]">
          <div
            className="h-full rounded-full bg-[var(--accent)] transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Step 1: Select Service Category */}
      {step === 0 && (
        <section className="space-y-5">
          <div className="space-y-1">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Select a service category.
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Which core discipline does your project primarily require?
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {SERVICE_OPTIONS.map((option) => {
              const isSelected = values.service === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => update("service", option)}
                  className={`rounded-xl border p-4 text-left text-sm transition-all duration-200 flex items-center justify-between gap-3 ${
                    isSelected
                      ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--text-primary)] font-medium"
                      : "border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  <span>{option}</span>
                  <span className="text-[var(--accent)] text-xs">
                    {isSelected ? "●" : "＋"}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Step 2: Select Specific Requirement */}
      {step === 1 && (
        <section className="space-y-5">
          <div className="space-y-1">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Select your specific requirement.
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Choose the closest match for your deliverables.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {subservices.map((option) => {
              const isSelected = values.specific === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => update("specific", option)}
                  className={`rounded-xl border p-3.5 text-left text-sm transition-all duration-200 ${
                    isSelected
                      ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--text-primary)] font-medium"
                      : "border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Step 3: Describe the Project */}
      {step === 2 && (
        <section className="space-y-5">
          <div className="space-y-1">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Describe your project.
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              What are your key goals, target audience, and preferred completion timeline?
            </p>
          </div>
          <div className="space-y-2 pt-2">
            <label
              htmlFor="project-desc"
              className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]"
            >
              Project Overview *
            </label>
            <textarea
              id="project-desc"
              rows={5}
              maxLength={4000}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Tell us what you want to achieve, any reference inspiration, or specific challenges..."
              className={inputClass + " resize-y leading-relaxed"}
            />
            <p className="text-right text-xs font-mono text-[var(--text-muted)]">
              {values.message.length} / 4000
            </p>
          </div>
        </section>
      )}

      {/* Step 4: Select the Budget */}
      {step === 3 && (
        <section className="space-y-5">
          <div className="space-y-1">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Select your estimated budget.
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              This helps us frame the appropriate scope and deliverable depth for your investment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {BUDGETS.map((tier) => {
              const isSelected = values.budget === tier;
              return (
                <button
                  key={tier}
                  type="button"
                  onClick={() => update("budget", tier)}
                  className={`rounded-xl border p-4 text-left text-sm transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--text-primary)] font-semibold"
                      : "border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  <span>{tier}</span>
                  <span className="text-[var(--accent)] text-xs">
                    {isSelected ? "✓" : "○"}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Step 5: Enter Contact Information */}
      {step === 4 && (
        <section className="space-y-5">
          <div className="space-y-1">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              How can we reach you?
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Provide your direct contact details so we can follow up with a considered response.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-1.5">
              <label
                htmlFor="user-name"
                className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]"
              >
                Your Name *
              </label>
              <input
                id="user-name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Full name"
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="user-email"
                className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]"
              >
                Email Address *
              </label>
              <input
                id="user-email"
                type="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="user-company"
                className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]"
              >
                Company / Brand
              </label>
              <input
                id="user-company"
                value={values.company}
                onChange={(e) => update("company", e.target.value)}
                placeholder="Brand name (optional)"
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="user-phone"
                className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]"
              >
                Phone / WhatsApp
              </label>
              <input
                id="user-phone"
                type="tel"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+1 / +234..."
                className={inputClass}
              />
            </div>
          </div>
        </section>
      )}

      {/* Step 6: Review & Submit */}
      {step === 5 && (
        <section className="space-y-5">
          <div className="space-y-1">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Review your enquiry details.
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Confirm everything looks correct before submitting to Digit Studio.
            </p>
          </div>
          <dl className="divide-y divide-[var(--border-subtle)] rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-5 py-2">
            {[
              ["Service Category", values.service],
              ["Specific Requirement", values.specific],
              ["Estimated Budget", values.budget],
              ["Full Name", values.name],
              ["Email Address", values.email],
              ["Company / Brand", values.company || "Not provided"],
              ["Phone / WhatsApp", values.phone || "Not provided"],
            ].map(([label, val]) => (
              <div key={label} className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-3 text-sm">
                <dt className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-wider">
                  {label}
                </dt>
                <dd className="sm:col-span-2 text-[var(--text-primary)] font-medium">
                  {val}
                </dd>
              </div>
            ))}
          </dl>
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 space-y-1.5">
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Project Description
            </p>
            <p className="whitespace-pre-wrap text-sm text-[var(--text-secondary)] leading-relaxed">
              {values.message}
            </p>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            Your details will only be used by Digit Studio to review and respond to this enquiry.
          </p>
        </section>
      )}

      {/* Error message */}
      {error && (
        <p
          role="alert"
          className="rounded-lg border border-[var(--status-error)]/40 bg-[var(--status-error)]/10 p-3 text-sm text-[var(--status-error)]"
        >
          {error}
        </p>
      )}

      {/* Action Navigation Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-6">
        <div>
          {step > 0 && (
            <button
              type="button"
              onClick={() => {
                setError("");
                setStep((curr) => curr - 1);
              }}
              className="min-h-11 rounded-full border border-[var(--border-strong)] px-5 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              ← Back
            </button>
          )}
        </div>

        {step < 5 ? (
          <button
            type="button"
            onClick={handleNext}
            className="min-h-11 rounded-full bg-[var(--accent)] px-7 text-xs font-mono uppercase tracking-widest font-bold text-white hover:bg-[var(--accent-hover)] transition-all shadow-lg shadow-[var(--accent)]/20"
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            disabled={status === "submitting"}
            onClick={handleSubmit}
            className="min-h-11 rounded-full bg-[var(--accent)] px-8 text-xs font-mono uppercase tracking-widest font-bold text-white hover:bg-[var(--accent-hover)] transition-all disabled:opacity-60 shadow-lg shadow-[var(--accent)]/20"
          >
            {status === "submitting" ? "Submitting..." : "Submit Project Enquiry →"}
          </button>
        )}
      </div>

      <p className="text-xs text-[var(--text-muted)] text-center">
        Prefer direct conversation?{" "}
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] underline underline-offset-4 hover:text-[var(--text-primary)]"
        >
          Chat with us on WhatsApp ↗
        </a>
      </p>
    </form>
  );
}
