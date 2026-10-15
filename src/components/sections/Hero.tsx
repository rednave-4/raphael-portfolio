"use client";

import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/profile";

export function Hero() {
  const { t, locale } = useLanguage();

  return (
    <section id="home" className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-center">
          {/* Text content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.location}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
              {t.hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              {t.hero.intro}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            {/* Focus areas */}
            <div className="pt-4">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {t.hero.focusLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center rounded-md border border-border bg-card px-2.5 py-1 text-xs text-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="lg:col-span-2 hidden sm:flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs aspect-square rounded-2xl border border-border bg-card p-6 flex flex-col justify-between shadow-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code2 className="h-5 w-5" />
                <span className="text-xs font-mono">competitive.cpp</span>
              </div>
              <pre className="text-[11px] leading-relaxed font-mono text-muted-foreground overflow-hidden">
{`#include <bits/stdc++.h>
using namespace std;

int main() {
  // Solve problems
  // with logic & curiosity
  return 0;
}`}
              </pre>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{profile.shortName}</span>
                <span className="font-mono">C++</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
