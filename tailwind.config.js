/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/database/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Surfaces — deliberately near-black, never #000 (OLED smear). */
        surface: {
          0: "#08080d",
          1: "#0e0e16",
          2: "#15151f",
          3: "#1c1c29",
        },
        line: {
          DEFAULT: "#22222f",
          strong: "#32324a",
        },
        content: {
          DEFAULT: "#f2f3f7",
          muted: "#a0a5b8",
          faint: "#7e8598",
        },
        /* Brand violet — `strong`/`deep` are the only ones safe behind white text. */
        accent: {
          soft: "#c4b5fd",
          light: "#a78bfa",
          DEFAULT: "#8b5cf6",
          strong: "#7c3aed",
          deep: "#4f46e5",
        },
        spark: "#22d3ee",
        blush: "#f472b6",

        /* Kept so any older markup referencing these still resolves. */
        primary: colors.violet,
        secondary: colors.fuchsia,
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.08em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      maxWidth: {
        container: "80rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        /* Interactive surfaces. Every stop clears 4.5:1 behind white text. */
        "accent-sweep":
          "linear-gradient(120deg, #7c3aed 0%, #6d28d9 35%, #4f46e5 100%)",
        /* Decorative only — the bright cyan stop is unsafe behind text. */
        "accent-line":
          "linear-gradient(120deg, #7c3aed 0%, #4f46e5 45%, #22d3ee 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139,92,246,0.18), 0 18px 60px -20px rgba(124,58,237,0.55)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -32px rgba(0,0,0,0.9)",
        lift: "0 1px 0 0 rgba(255,255,255,0.07) inset, 0 32px 80px -28px rgba(124,58,237,0.45)",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(3%, -4%, 0) scale(1.06)" },
          "66%": { transform: "translate3d(-3%, 3%, 0) scale(0.96)" },
        },
        marquee: {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-50%,0,0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translate3d(0,12px,0)" },
          to: { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        drift: "drift 22s ease-in-out infinite",
        "drift-slow": "drift 34s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        "fade-up": "fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};
