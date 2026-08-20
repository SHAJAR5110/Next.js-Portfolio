"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { getProjectImage } from "@/database";

/**
 * A single project tile.
 * `priority` should only be true for the first row — everything else
 * lazy-loads. The fixed 16/10 frame reserves space so the grid never shifts.
 */
const ProjectCard = ({ project, priority = false }) => {
  const image = getProjectImage(project);
  const hasLinks = Boolean(project.github || project.live);

  return (
    <article className="card group flex h-full flex-col">
      {/* ── Thumbnail ──────────────────────────────────── */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
        <Image
          src={image}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-cover transition-transform duration-500 ease-expo group-hover:scale-[1.04]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/10 to-transparent"
        />

        {project.year ? (
          <span className="absolute right-3 top-3 rounded-full border border-line bg-surface-0/70 px-2.5 py-1 font-mono text-2xs text-content-muted backdrop-blur">
            {project.year}
          </span>
        ) : null}

        {project.featured ? (
          <span className="absolute left-3 top-3 rounded-full bg-accent-sweep px-2.5 py-1 text-2xs font-semibold uppercase tracking-wider text-white">
            Featured
          </span>
        ) : null}
      </div>

      {/* ── Body ───────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-content">
          {project.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-content-muted">
          {project.description}
        </p>

        {project.stack?.length ? (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-2xs tracking-normal text-content-faint"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        {hasLinks ? (
          <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} live preview`}
                className="inline-flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-lg bg-surface-2 px-3 text-sm font-medium text-content transition-colors duration-200 hover:bg-accent-strong hover:text-white"
              >
                Live
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
                className="inline-flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-lg border border-line px-3 text-sm font-medium text-content-muted transition-colors duration-200 hover:border-line-strong hover:text-content"
              >
                <CodeBracketIcon className="h-4 w-4" aria-hidden="true" />
                Code
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default ProjectCard;
