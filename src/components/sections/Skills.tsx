"use client";

import { useLanguage } from "@/context/LanguageContext";
import { skills, skillCategories } from "@/data/skills";

export function Skills() {
  const { t, locale } = useLanguage();

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            {t.skills.title}
          </h2>
          <p className="mt-2 text-muted-foreground">{t.skills.subtitle}</p>
        </div>

        <div className="space-y-10">
          {skillCategories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;
            return (
              <div key={category}>
                <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  {category}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-lg border border-border bg-card p-4"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground rounded bg-muted px-1.5 py-0.5">
                          {t.skills.status[skill.status]}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {skill.description[locale]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
