"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Shared section header: eyebrow, title, optional lead paragraph.
 * Keeps vertical rhythm identical across every section.
 */
const SectionHeading = ({ eyebrow, title, lead, align = "left", id }) => {
  const centered = align === "center";

  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className="eyebrow">
          <span
            aria-hidden="true"
            className="h-px w-6 bg-gradient-to-r from-accent to-spark"
          />
          {eyebrow}
        </p>
      ) : null}

      <h2
        id={id}
        className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-content sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>

      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-content-muted sm:text-lg">
          {lead}
        </p>
      ) : null}
    </motion.header>
  );
};

export default SectionHeading;
