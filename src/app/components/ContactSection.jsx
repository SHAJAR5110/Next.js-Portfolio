"use client";

import React from "react";
import { motion } from "framer-motion";
import { profile, socials } from "@/database";
import SectionHeading from "./SectionHeading";
import SocialIcon from "./SocialIcon";
import BookingButton from "./BookingButton";

const ContactSection = () => {
  return (
    <section id="contact" className="container-page scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something that runs itself."
        lead="Got an automation problem, an AI product idea, or a role to fill? Grab a slot in my calendar — no back-and-forth email needed."
        align="center"
      />

      {/* ── Booking panel ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto mt-12 max-w-2xl"
      >
        {/* Ambient glow behind the panel — decorative. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-8 -top-8 h-40 rounded-full bg-accent-strong/20 blur-[80px]"
        />

        <div className="glass relative rounded-3xl px-6 py-12 text-center sm:px-12">
          <BookingButton />
        </div>
      </motion.div>

      {/* ── Other ways to reach me ───────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-12 max-w-3xl"
      >
        <div className="flex items-center gap-4">
          <span className="rule flex-1" aria-hidden="true" />
          <span className="text-2xs font-semibold uppercase tracking-[0.18em] text-content-faint">
            Or find me here
          </span>
          <span className="rule flex-1" aria-hidden="true" />
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex min-h-[72px] items-center gap-3.5 rounded-2xl border border-line bg-surface-1/50 px-4 transition-colors duration-200 hover:border-accent-light hover:bg-surface-2"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-content-muted transition-colors duration-200 group-hover:bg-accent-strong group-hover:text-white">
                  <SocialIcon name={social.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-content">
                    {social.label}
                  </span>
                  <span className="block truncate font-mono text-xs text-content-faint">
                    {social.handle}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-content-muted">
          Prefer email? Reach me at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-accent-light underline underline-offset-4 transition-colors hover:text-content"
          >
            {profile.email}
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
