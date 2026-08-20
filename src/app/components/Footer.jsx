import React from "react";
import Link from "next/link";
import Image from "next/image";
import { profile, socials, navigation } from "@/database";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="border-t border-line bg-surface-0">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/#home" className="inline-flex items-center gap-3">
              <Image src="/logo2.svg" width={36} height={36} alt="" className="h-9 w-9" />
              <span className="font-display text-base font-semibold text-content">
                {profile.name}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-content-muted">
              {profile.roles[0]} building autonomous systems and full-stack
              products from {profile.location}.
            </p>
          </div>

          <nav aria-label="Footer" className="md:min-w-[10rem]">
            <h2 className="text-2xs font-semibold uppercase tracking-[0.18em] text-content-faint">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    className="text-sm text-content-muted transition-colors duration-200 hover:text-content"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-2xs font-semibold uppercase tracking-[0.18em] text-content-faint">
              Elsewhere
            </h2>
            <ul className="mt-4 flex gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.icon === "mail" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={`${social.label} — ${social.handle}`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-1 text-content-muted transition-colors duration-200 hover:border-accent-light hover:text-content"
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule mt-12" />

        <div className="mt-6 flex flex-col gap-2 text-xs text-content-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with Next.js, Tailwind &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
