"use client";

import React, { useEffect, useRef } from "react";

interface TurnstileProps {
  siteKey?: string;
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  className?: string;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        params: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "auto" | "light" | "dark";
          size?: "normal" | "compact" | "flexible";
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onloadTurnstileCallback?: () => void;
  }
}

// Fallback to Cloudflare's always-pass test key in non-production environments
const DEFAULT_TEST_SITE_KEY = "1x00000000000000000000AA";

export function Turnstile({
  siteKey,
  onVerify,
  onError,
  onExpire,
  className = "",
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const resolvedSiteKey =
    siteKey ||
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
    DEFAULT_TEST_SITE_KEY;

  useEffect(() => {
    let isMounted = true;

    const renderWidget = () => {
      if (!isMounted || !containerRef.current || !window.turnstile) return;
      if (widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore removal error
        }
        widgetIdRef.current = null;
      }

      try {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: resolvedSiteKey,
          theme: "auto",
          callback: (token: string) => {
            if (isMounted) onVerify(token);
          },
          "error-callback": () => {
            if (isMounted && onError) onError();
          },
          "expired-callback": () => {
            if (isMounted && onExpire) onExpire();
          },
        });
      } catch (err) {
        console.error("Turnstile render error:", err);
      }
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[src*="challenges.cloudflare.com/turnstile"]'
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (isMounted) renderWidget();
        };
        document.head.appendChild(script);
      } else {
        const interval = window.setInterval(() => {
          if (window.turnstile) {
            window.clearInterval(interval);
            if (isMounted) renderWidget();
          }
        }, 100);
        return () => window.clearInterval(interval);
      }
    }

    return () => {
      isMounted = false;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore error on unmount
        }
      }
    };
  }, [resolvedSiteKey, onVerify, onError, onExpire]);

  return (
    <div
      ref={containerRef}
      className={`min-h-[65px] flex items-center justify-center my-2 ${className}`}
      aria-label="Security check"
    />
  );
}
