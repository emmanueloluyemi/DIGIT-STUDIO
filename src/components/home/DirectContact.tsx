"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site";

export function DirectContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("A website");
  const [budget, setBudget] = useState("$2,500 – $5,000");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          service,
          budget,
          message,
          website: honeypot,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Unable to send your inquiry. Please email directly.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Submission failed. Please email or message via WhatsApp."
      );
    }
  };

  return (
    <section className="py-16 border-t-2 border-[var(--ink)]">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--crimson)]">
                Start a conversation
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--ink)]">
                Tell me what you want to build.
              </h2>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed reading-col">
                Fill in the short form below and I will reply within 48 hours with an honest estimate and starting availability.
              </p>
            </div>

            <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-5 space-y-3 text-sm">
              <p className="font-semibold text-[var(--ink)]">Prefer a direct message?</p>
              <p className="text-xs text-[var(--muted)]">
                Message me directly on WhatsApp for preliminary questions or rapid feedback.
              </p>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--crimson)] underline decoration-1 underline-offset-4 hover:text-[var(--crimson-hover)]"
              >
                Open WhatsApp: {siteConfig.whatsappNumber} ↗
              </a>
            </div>

            <div className="text-xs text-[var(--muted)] space-y-1">
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-[var(--ink)] underline">{siteConfig.email}</a></p>
              <p>Location: {siteConfig.location}</p>
            </div>
          </div>

          {/* Right Plain Clean Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] p-6 sm:p-8">
              {status === "success" ? (
                <div className="space-y-4 py-8 text-center" role="alert">
                  <h3 className="font-serif text-2xl font-normal text-[var(--ink)]">
                    Inquiry received.
                  </h3>
                  <p className="text-sm text-[var(--muted)] reading-col mx-auto">
                    Thank you, {name}. I have received your note and will review your requirements. Expect an email reply within 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setMessage("");
                    }}
                    className="inline-flex rounded-[var(--radius)] bg-[var(--ink)] px-4 py-2 text-xs font-semibold text-[var(--paper)]"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="sr-only"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label htmlFor="form-name" className="text-xs font-semibold text-[var(--ink)]">
                        Your name *
                      </label>
                      <input
                        id="form-name"
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--paper)] px-3 py-2 text-sm text-[var(--ink)] focus:border-[var(--ink)] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="form-email" className="text-xs font-semibold text-[var(--ink)]">
                        Email address *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@example.com"
                        className="w-full rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--paper)] px-3 py-2 text-sm text-[var(--ink)] focus:border-[var(--ink)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label htmlFor="form-service" className="text-xs font-semibold text-[var(--ink)]">
                        Service needed
                      </label>
                      <select
                        id="form-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--paper)] px-3 py-2 text-sm text-[var(--ink)] focus:border-[var(--ink)] focus:outline-none"
                      >
                        <option value="Brand identity">Brand identity</option>
                        <option value="A website">A website</option>
                        <option value="AI video & animation">AI video & animation</option>
                        <option value="Social & content">Social & content</option>
                        <option value="Multiple services">Multiple services</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="form-budget" className="text-xs font-semibold text-[var(--ink)]">
                        Expected budget
                      </label>
                      <select
                        id="form-budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--paper)] px-3 py-2 text-sm text-[var(--ink)] focus:border-[var(--ink)] focus:outline-none"
                      >
                        <option value="Under $1,500">Under $1,500</option>
                        <option value="$1,500 – $2,500">$1,500 – $2,500</option>
                        <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="form-message" className="text-xs font-semibold text-[var(--ink)]">
                      Project overview *
                    </label>
                    <textarea
                      id="form-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What is your business, what are you making, and what is your desired timeline?"
                      className="w-full rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--paper)] px-3 py-2 text-sm text-[var(--ink)] focus:border-[var(--ink)] focus:outline-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="text-xs text-[var(--crimson)]" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center rounded-[var(--radius)] bg-[var(--crimson)] px-6 py-3 text-xs font-semibold text-white hover:bg-[var(--crimson-hover)] transition-colors disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending..." : "Send project inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
