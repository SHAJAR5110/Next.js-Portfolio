"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { profile, socials } from "@/database";
import SocialIcon from "./SocialIcon";

/** react-type-animation wants [text, pause, text, pause, ...]. */
const typeSequence = profile.roles.flatMap((role) => [role, 1600]);

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const HeroSection = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-40"
    >
      {/* Ambient layer — decorative only, hidden from assistive tech. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-accent-strong/20 blur-[120px] animate-drift" />
        <div className="absolute -right-24 top-24 h-[24rem] w-[24rem] rounded-full bg-spark/10 blur-[120px] animate-drift-slow" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* ── Copy ───────────────────────────────────────── */}
          <div className="lg:col-span-7">
            {profile.available ? (
              <motion.div
                variants={rise}
                initial="hidden"
                animate="show"
                className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface-1/80 px-4 py-1.5 backdrop-blur"
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-medium text-content-muted">
                  {profile.availabilityText}
                </span>
              </motion.div>
            ) : null}

            <motion.h1
              id="hero-heading"
              variants={rise}
              initial="hidden"
              animate="show"
              custom={0.08}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="block text-content">Hi, I&apos;m {profile.firstName}.</span>
              <span className="mt-2 block text-gradient">
                I build AI that
                <br className="hidden sm:block" /> does the work.
              </span>
            </motion.h1>

            <motion.p
              variants={rise}
              initial="hidden"
              animate="show"
              custom={0.16}
              className="mt-5 flex flex-wrap items-center gap-x-2 font-mono text-sm text-content-muted sm:text-base"
            >
              <span className="text-accent-light" aria-hidden="true">
                &gt;
              </span>
              <TypeAnimation
                sequence={typeSequence}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                cursor
                aria-label={profile.roles.join(", ")}
              />
            </motion.p>

            <motion.p
              variants={rise}
              initial="hidden"
              animate="show"
              custom={0.24}
              className="mt-6 max-w-xl text-base leading-relaxed text-content-muted sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            {/* ── Actions ─────────────────────────────────── */}
            <motion.div
              variants={rise}
              initial="hidden"
              animate="show"
              custom={0.32}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/#contact"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-accent-sweep px-7 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Hire me
                <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/#projects"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-line-strong bg-surface-1/60 px-7 text-sm font-semibold text-content backdrop-blur transition-colors duration-200 hover:border-accent-light hover:bg-surface-2"
              >
                View my work
                <ArrowDownIcon
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>

            {/* ── Socials ─────────────────────────────────── */}
            <motion.ul
              variants={rise}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="mt-8 flex items-center gap-2"
            >
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.icon === "mail" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={`${social.label} — ${social.handle}`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-1/60 text-content-muted transition-colors duration-200 hover:border-accent-light hover:text-content"
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ── Portrait ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
          >
            <div className="relative aspect-square w-full">
              {/* Rotating conic ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-conic from-accent-strong via-spark to-accent-strong opacity-25 blur-2xl"
              />
              <div className="absolute inset-[6%] overflow-hidden rounded-full border border-line-strong bg-surface-1">
                <Image
                  src={profile.avatar}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 320px, 420px"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating credential chip */}
              <div className="absolute -bottom-2 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-line bg-surface-1/90 px-4 py-2.5 backdrop-blur">
                <p className="font-mono text-2xs uppercase tracking-widest text-content-faint">
                  Based in
                </p>
                <p className="text-sm font-semibold text-content">{profile.location}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Tech strip ───────────────────────────────────── */}
        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="mt-16 lg:mt-24"
        >
          <p className="text-2xs font-semibold uppercase tracking-[0.18em] text-content-faint">
            Working with
          </p>
          <div className="fade-x mt-4 overflow-hidden">
            <ul className="flex w-max animate-marquee items-center gap-3">
              {[...profile.focusStack, ...profile.focusStack].map((tech, index) => (
                <li
                  key={`${tech}-${index}`}
                  aria-hidden={index >= profile.focusStack.length}
                  className="whitespace-nowrap rounded-full border border-line bg-surface-1/60 px-4 py-2 font-mono text-xs text-content-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
