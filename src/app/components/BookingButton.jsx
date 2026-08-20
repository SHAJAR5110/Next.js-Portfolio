"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { CalendarDaysIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { booking, profile } from "@/database";

const SCRIPT_SRC =
  "https://calendar.google.com/calendar/scheduling-button-script.js";
const STYLE_SRC =
  "https://calendar.google.com/calendar/scheduling-button-script.css";
const STYLE_ID = "gcal-scheduling-styles";

/**
 * Google Calendar appointment scheduling.
 *
 * Google's script renders its own blue button, which would fight the
 * design system. So we mount that button off-screen and keep our own
 * on-brand control in front of it — clicking ours forwards the click,
 * which opens Google's real popup.
 *
 * Forwarding a click is deliberately more robust than restyling
 * Google's markup: it keeps working even if they rename their classes.
 *
 * Degradation, in order:
 *   1. Script loaded  → in-page popup (the intended experience)
 *   2. Script blocked → same button opens the booking page in a new tab
 *   3. No booking URL → an email button instead, never a dead control
 */
const BookingButton = () => {
  const hostRef = useRef(null);
  const markerRef = useRef(null);
  const buttonRef = useRef(null);
  const mountedRef = useRef(false);
  const [popupReady, setPopupReady] = useState(false);

  const configured = Boolean(booking.url);

  /* Google's stylesheet, injected imperatively so it is not duplicated. */
  useEffect(() => {
    if (!configured || document.getElementById(STYLE_ID)) return;

    const link = document.createElement("link");
    link.id = STYLE_ID;
    link.rel = "stylesheet";
    link.href = STYLE_SRC;
    document.head.appendChild(link);
  }, [configured]);

  const mountGoogleButton = useCallback(() => {
    /* React StrictMode double-invokes effects in dev — guard against
       mounting Google's button twice. */
    if (mountedRef.current || !configured) return;

    const api = window.calendar?.schedulingButton;
    const marker = markerRef.current;
    if (!api || !marker) return;

    api.load({
      url: booking.url,
      color: booking.color,
      label: booking.label,
      target: marker,
    });

    mountedRef.current = true;

    /* The injected control sits inside our hidden host. Take it out of
       the tab order so it cannot be focused while visually hidden. */
    const injected = hostRef.current?.querySelector("button, a");
    if (injected) {
      injected.setAttribute("tabindex", "-1");
      injected.setAttribute("aria-hidden", "true");
    }

    setPopupReady(true);
  }, [configured]);

  /**
   * Google closes its popup with `overlay.remove()` and then focuses the
   * button that opened it — which for us is the hidden one. Watch for the
   * overlay leaving the DOM and hand focus back to the visible button.
   *
   * The overlay is identified as "the element body gained" rather than by
   * Google's minified class name, so a class rename cannot break this.
   */
  const restoreFocusOnClose = (overlay) => {
    if (!overlay) return;

    const observer = new MutationObserver(() => {
      if (document.body.contains(overlay)) return;
      observer.disconnect();
      buttonRef.current?.focus();
    });

    observer.observe(document.body, { childList: true });
  };

  const openBooking = () => {
    const injected = hostRef.current?.querySelector("button, a");

    if (injected) {
      const before = document.body.lastElementChild;
      injected.click();

      /* Google appends the overlay synchronously inside its click handler. */
      const overlay = document.body.lastElementChild;
      if (overlay && overlay !== before) restoreFocusOnClose(overlay);
      return;
    }

    /* Script never arrived — open the booking page directly instead. */
    window.open(booking.url, "_blank", "noopener,noreferrer");
  };

  /* ── No URL configured yet: offer email rather than a dead button ── */
  if (!configured) {
    return (
      <div className="flex flex-col items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-accent-sweep px-8 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Email me directly
          <ArrowUpRightIcon
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
        <p className="text-xs text-content-faint">
          Booking link not set up yet — add it in{" "}
          <code className="font-mono text-content-muted">
            src/database/profile.js
          </code>
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <Script
        src={SCRIPT_SRC}
        strategy="afterInteractive"
        onReady={mountGoogleButton}
        onLoad={mountGoogleButton}
      />

      {/* Google's own button — visually hidden, still clickable. */}
      <div
        ref={hostRef}
        aria-hidden="true"
        className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
        style={{ clip: "rect(0 0 0 0)" }}
      >
        <span ref={markerRef} />
      </div>

      <button
        ref={buttonRef}
        type="button"
        onClick={openBooking}
        className="group inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent-sweep px-8 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
        {booking.label}
      </button>

      {booking.note ? (
        <p className="max-w-xs text-center text-xs leading-relaxed text-content-faint">
          {booking.note}
        </p>
      ) : null}

      {/* Reassures screen readers the control is live once the popup is armed. */}
      <span className="sr-only" aria-live="polite">
        {popupReady ? "Booking popup ready." : ""}
      </span>
    </div>
  );
};

export default BookingButton;
