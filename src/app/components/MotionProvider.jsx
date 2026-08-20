"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

/**
 * Framer Motion animates through inline styles, so the global
 * `prefers-reduced-motion` rule in globals.css cannot reach it.
 * `reducedMotion="user"` makes every motion component in the tree
 * honour the OS setting instead — transforms are dropped while
 * opacity changes are kept, so nothing disappears.
 */
const MotionProvider = ({ children }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
