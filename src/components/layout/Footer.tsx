"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/profile";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-foreground">{profile.fullName}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {profile.education.grade} · {profile.education.school}
            </p>
          </div>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <a href={`mailto:${profile.email}`} className="hover:text-foreground transition-colors">
              Email
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {year} {profile.displayName}. {t.footer.rights}</p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
