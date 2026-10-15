"use client";

import { useLanguage } from "@/context/LanguageContext";
import { activities } from "@/data/activities";

export function Activities() {
  const { t, locale } = useLanguage();

  return (
    <section id="activities" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            {t.activities.title}
          </h2>
          <p className="mt-2 text-muted-foreground">{t.activities.subtitle}</p>
        </div>

        <div className="space-y-6">
          {activities.map((activity) => (
            <article
              key={activity.id}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {activity.title[locale]}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {activity.role[locale]} · {activity.period}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {activity.description[locale]}
              </p>
              <ul className="space-y-1.5">
                {activity.contributions[locale].map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
