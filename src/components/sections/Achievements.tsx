"use client";

import { useLanguage } from "@/context/LanguageContext";
import { achievements } from "@/data/achievements";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Achievements() {
  const { t, locale } = useLanguage();

  // Sort by year descending
  const sorted = [...achievements].sort((a, b) => b.year - a.year);

  return (
    <section id="achievements" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            {t.achievements.title}
          </h2>
          <p className="mt-2 text-muted-foreground">{t.achievements.subtitle}</p>
        </div>

        <div className="space-y-4">
          {sorted.map((item) => (
            <article
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-lg border border-border bg-card px-5 py-4 hover:border-accent/30 transition-colors"
            >
              <div className="shrink-0 w-16 text-center">
                <span className="text-lg font-semibold text-accent font-mono">{item.year}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-foreground">
                  {item.title[locale]}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.level[locale]} · {item.organization}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
                  {item.result[locale]}
                </span>
                {item.evidenceUrl && (
                  <Link
                    href={item.evidenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Evidence link"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
