/**
 * ─────────────────────────────────────────────────────────────
 *  PROFILE  ·  Your personal details
 * ─────────────────────────────────────────────────────────────
 *  Everything about *you* lives here. Change the text below and
 *  the whole site updates — no component editing required.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Shajar Abbas",
  firstName: "Shajar",

  /** Shown under your name in the hero, one after another. */
  roles: [
    "AI Engineer",
    "Agentic AI Developer",
    "AI Solutions Architect",
    "Full-Stack Engineer",
  ],

  /** Small pill at the top of the hero. Set `available: false` to hide it. */
  available: true,
  availabilityText: "Available for new projects",

  location: "Karachi, Pakistan",
  email: "shajarabbas602@gmail.com",

  /** Short version — used in the hero. Keep it to 2–3 sentences. */
  tagline:
    "I build autonomous AI systems, voice agents and Digital FTEs that cut operational workload by up to 90% — then wrap them in production-grade full-stack platforms.",

  /** Long version — used in the About section. */
  bio: [
    "I'm an AI Engineer focused on Agentic AI, autonomous systems and intelligent automation. I design AI-powered workflows, voice agents and Digital FTEs that replace repetitive operational work with software that reasons, plans and acts on its own.",
    "My day-to-day toolkit is Python, the OpenAI SDK, n8n, Make, MCP and Spec-Driven Development. Alongside that I ship complete MERN and Next.js products, so the intelligence I build always arrives with a real interface, real auth and real deployments behind it.",
  ],

  /** Profile photo — drop a new file in /public and point here. */
  avatar: "/images/MyImage.png",

  /** About-section image. */
  aboutImage: "/images/about-image.png",

  /** Tech shown as chips under the hero copy. */
  focusStack: [
    "Python",
    "OpenAI SDK",
    "Next.js",
    "TypeScript",
    "n8n",
    "MCP",
    "Docker",
    "AWS",
  ],
};

/**
 * Social + contact links.
 * `icon` must be one of: "github" | "linkedin" | "mail"
 * (see src/app/components/SocialIcon.jsx to add more).
 */
export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/SHAJAR5110",
    icon: "github",
    handle: "@SHAJAR5110",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shajarabbas110/",
    icon: "linkedin",
    handle: "shajarabbas110",
  },
  {
    label: "Email",
    href: "mailto:shajarabbas602@gmail.com",
    icon: "mail",
    handle: "shajarabbas602@gmail.com",
  },
];

/**
 * ─────────────────────────────────────────────────────────────
 *  BOOKING  ·  Google Calendar appointment scheduling
 * ─────────────────────────────────────────────────────────────
 *  PASTE YOUR SCHEDULING URL BELOW.
 *
 *  Google gave you a snippet that looks like this:
 *
 *    calendar.schedulingButton.load({
 *      url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ...?gv=true',
 *      color: '#039BE5',
 *      label: 'Book an appointment',
 *      target,
 *    });
 *
 *  Copy the value of `url:` (the long one ending in `?gv=true`)
 *  and paste it as `url` here. That is the only thing needed —
 *  the button, popup and fallback are already wired up.
 *
 *  Until it is filled in, the Contact section shows an email
 *  button instead, so the page is never left with a dead control.
 * ─────────────────────────────────────────────────────────────
 */
export const booking = {
  url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0pjIkMQt9_8li5ikd9RW3z9jXAhE5WKq5H9Sc5qD7i304WuJesCMtPH5BeXU5TS1DZsVvGHS7l?gv=true",
  label: "Book an appointment",
  /** Only used by Google's own button, which we keep hidden. */
  color: "#4285F4",
  /** Small line shown under the button. */
  note: "Free 30-minute intro call — pick any slot that works for you.",
};

/** Main site navigation. Order here = order in the navbar. */
export const navigation = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default profile;
