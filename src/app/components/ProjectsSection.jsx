"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { projects, categories, getCategoryCounts } from "@/database";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

/** How many cards to render before the "Load more" button appears. */
const PAGE_SIZE = 9;

const counts = getCategoryCounts();

const ProjectsSection = () => {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();

    return projects
      .filter((project) => {
        const inCategory =
          category === "all" || project.tags?.includes(category);
        if (!inCategory) return false;
        if (!term) return true;

        const haystack = [
          project.name,
          project.description,
          ...(project.stack ?? []),
          ...(project.tags ?? []),
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(term);
      });
    /* No sorting on purpose: cards appear in exactly the order they are
       written in src/database/projects.js. To move a project, move its
       block up or down in that file. */
  }, [category, query]);

  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - shown.length;

  const changeCategory = (id) => {
    setCategory(id);
    setVisible(PAGE_SIZE);
  };

  const changeQuery = (value) => {
    setQuery(value);
    setVisible(PAGE_SIZE);
  };

  return (
    <section id="projects" className="container-page scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects, shipped."
        lead={`${projects.length} builds spanning agentic AI, full-stack products, published packages and hackathon wins.`}
      />

      {/* ── Controls ─────────────────────────────────────── */}
      <div className="mt-10 flex flex-col gap-5">
        <div className="relative max-w-sm">
          <MagnifyingGlassIcon
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-content-faint"
            aria-hidden="true"
          />
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(event) => changeQuery(event.target.value)}
            placeholder="Search by name, tech or keyword"
            className="min-h-[44px] w-full rounded-xl border border-line bg-surface-1 pl-10 pr-10 text-sm text-content placeholder:text-content-faint transition-colors duration-200 focus:border-accent-light focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => changeQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-content-faint transition-colors hover:text-content"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2"
        >
          {categories.map((item) => {
            const selected = category === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => changeCategory(item.id)}
                aria-pressed={selected}
                className={`inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-200 ${
                  selected
                    ? "border-accent-light bg-accent-strong/15 text-content"
                    : "border-line bg-surface-1/50 text-content-muted hover:border-line-strong hover:text-content"
                }`}
              >
                {item.label}
                <span
                  className={`tabular rounded-full px-1.5 py-0.5 font-mono text-2xs tracking-normal ${
                    selected
                      ? "bg-accent-strong/30 text-accent-soft"
                      : "bg-surface-2 text-content-faint"
                  }`}
                >
                  {counts[item.id] ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* Announced to screen readers whenever the result set changes. */}
        <p aria-live="polite" className="text-sm text-content-faint">
          Showing {shown.length} of {filtered.length}{" "}
          {filtered.length === 1 ? "project" : "projects"}
        </p>
      </div>

      {/* ── Grid ─────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-line-strong bg-surface-1/40 px-6 py-16 text-center">
          <p className="font-display text-lg font-semibold text-content">
            No projects match that search.
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-content-muted">
            Try a different keyword, or reset the filters to browse everything.
          </p>
          <button
            type="button"
            onClick={() => {
              changeQuery("");
              changeCategory("all");
            }}
            className="mt-6 inline-flex min-h-[44px] cursor-pointer items-center rounded-full bg-accent-sweep px-6 text-sm font-semibold text-white"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {shown.map((project, index) => (
                <motion.li
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{
                    duration: 0.4,
                    /* Capped so a full grid never waits seconds to appear. */
                    delay: Math.min(index % PAGE_SIZE, 8) * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <ProjectCard project={project} priority={index < 3} />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {remaining > 0 ? (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setVisible((value) => value + PAGE_SIZE)}
                className="inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded-full border border-line-strong bg-surface-1 px-7 text-sm font-semibold text-content transition-colors duration-200 hover:border-accent-light hover:bg-surface-2"
              >
                Load {Math.min(remaining, PAGE_SIZE)} more
                <span className="tabular font-mono text-2xs text-content-faint">
                  {remaining} left
                </span>
              </button>
            </div>
          ) : null}
        </>
      )}
    </section>
  );
};

export default ProjectsSection;
