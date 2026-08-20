"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";
import { aboutTabs, profile } from "@/database";
import SectionHeading from "./SectionHeading";

const AboutSection = () => {
  const [activeId, setActiveId] = useState(aboutTabs[0].id);
  const tabRefs = useRef([]);
  const active = aboutTabs.find((tab) => tab.id === activeId) ?? aboutTabs[0];

  /* Arrow-key navigation, per the WAI-ARIA tabs pattern. */
  const onKeyDown = (event, index) => {
    const last = aboutTabs.length - 1;
    let next = null;

    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;

    if (next === null) return;
    event.preventDefault();
    setActiveId(aboutTabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="about" className="container-page scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="About"
        title="Engineering systems that think for themselves."
        lead="A quick look at how I work and what I bring to a team."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* ── Portrait + bio ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface-1">
            <div className="relative aspect-[4/3]">
              <Image
                src={profile.aboutImage}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/20 to-transparent"
              />
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {profile.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-content-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* ── Tabs ───────────────────────────────────────── */}
        <div className="lg:col-span-7">
          <div
            role="tablist"
            aria-label="About me"
            className="flex flex-wrap gap-2 border-b border-line pb-4"
          >
            {aboutTabs.map((tab, index) => {
              const selected = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  ref={(el) => (tabRefs.current[index] = el)}
                  role="tab"
                  type="button"
                  id={`tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(tab.id)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={`relative min-h-[44px] cursor-pointer rounded-xl px-4 text-sm font-semibold transition-colors duration-200 ${
                    selected
                      ? "text-content"
                      : "text-content-muted hover:text-content"
                  }`}
                >
                  {selected ? (
                    <motion.span
                      layoutId="about-tab"
                      className="absolute inset-0 rounded-xl border border-line-strong bg-surface-2"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  ) : null}
                  <span className="relative">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              id={`panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${active.id}`}
              tabIndex={0}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 space-y-8 focus:outline-none"
            >
              {active.groups.map((group, groupIndex) => (
                <div key={group.title ?? groupIndex}>
                  {group.title ? (
                    <h3 className="mb-4 font-mono text-2xs font-semibold uppercase tracking-[0.18em] text-accent-light">
                      {group.title}
                    </h3>
                  ) : null}

                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-line bg-surface-1/50 px-3.5 py-3"
                      >
                        <CheckIcon
                          className="mt-0.5 h-4 w-4 shrink-0 text-spark"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-snug text-content-muted">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
