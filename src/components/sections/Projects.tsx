"use client";

import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const { t, locale } = useLanguage();
  const realProjects = projects.filter((p) => p.slug !== "coming-soon");

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            {t.projects.title}
          </h2>
          <p className="mt-2 text-muted-foreground">{t.projects.subtitle}</p>
        </div>

        {realProjects.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-muted/30 p-10 text-center">
            <p className="text-sm text-muted-foreground">{t.projects.empty}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              {locale === "id"
                ? "Proyek nyata akan ditambahkan seiring waktu."
                : "Real projects will be added over time."}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {realProjects.map((project) => (
              <article
                key={project.slug}
                className="group rounded-xl border border-border bg-card p-6 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title[locale]}
                  </h3>
                  <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                    {t.projects.status[project.status]}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.summary[locale]}
                </p>
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-muted px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-3 text-xs">
                  {project.sourceUrl && (
                    <Link
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      {t.projects.source}
                    </Link>
                  )}
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {t.projects.demo}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
