import React from "react";

/**
 * Brand + contact glyphs. Heroicons has no brand marks, so these are
 * hand-rolled to match its 24px grid and stroke language.
 *
 * To add one: drop a new entry into `paths`, then reference its key as
 * `icon` in the `socials` array in src/database/profile.js.
 */
const paths = {
  github: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.337-.012 2.416-.012 2.744 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
    />
  ),
  linkedin: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.983 3.5a2.5 2.5 0 1 1-.006 5.001A2.5 2.5 0 0 1 4.983 3.5ZM2.4 21.5h5.17V9.75H2.4V21.5Zm7.43 0H15V15.3c0-1.636.31-3.22 2.338-3.22 1.998 0 2.025 1.87 2.025 3.325V21.5H24.4v-6.79c0-3.6-.78-6.37-4.985-6.37-2.022 0-3.378 1.11-3.933 2.162h-.056V9.75H9.83V21.5Z"
      transform="translate(-0.4 0)"
    />
  ),
  mail: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 5.25h16.5c.966 0 1.75.784 1.75 1.75v10c0 .966-.784 1.75-1.75 1.75H3.75A1.75 1.75 0 0 1 2 17V7c0-.966.784-1.75 1.75-1.75Zm.53 2.28a.75.75 0 0 0-.53.72v.36l8.25 4.78 8.25-4.78V8.25a.75.75 0 0 0-.53-.72H4.28Zm15.97 2.81-7.87 4.56a.75.75 0 0 1-.76 0L3.75 10.34V17h16.5v-6.66Z"
    />
  ),
};

const SocialIcon = ({ name, className = "h-5 w-5" }) => {
  const path = paths[name];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {path}
    </svg>
  );
};

export default SocialIcon;
