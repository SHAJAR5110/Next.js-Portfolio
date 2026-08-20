"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/database";

/**
 * Counts up to `value` once the strip scrolls into view.
 * Uses rAF (not setInterval) so it stays on the frame budget, and
 * skips straight to the final number when reduced motion is requested.
 */
function useCountUp(value, active, duration = 1400) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setDisplay(value);
      return;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo — fast start, gentle settle.
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, active, duration]);

  return display;
}

const StatItem = ({ stat, active, index }) => {
  const display = useCountUp(stat.value, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-1 px-4 py-6 text-center sm:items-start sm:text-left"
    >
      <p className="tabular font-display text-3xl font-bold text-content sm:text-4xl">
        {display}
        <span className="text-accent-light">{stat.suffix}</span>
      </p>
      <p className="text-sm text-content-muted">{stat.label}</p>
    </motion.div>
  );
};

const StatsStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section aria-label="Key numbers" className="container-page">
      <div
        ref={ref}
        className="glass grid grid-cols-2 divide-line rounded-3xl sm:grid-cols-4 sm:divide-x"
      >
        {stats.map((stat, index) => (
          <StatItem key={stat.id} stat={stat} active={inView} index={index} />
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
