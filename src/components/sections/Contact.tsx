"use client";

import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/profile";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  const { t } = useLanguage();

  const links = [
    {
      label: t.contact.email,
      href: `mailto:${profile.email}`,
      value: profile.email,
      icon: Mail,
    },
    {
      label: t.contact.github,
      href: profile.github,
      value: "github.com/rednave-4",
      icon: Github,
    },
    {
      label: t.contact.linkedin,
      href: profile.linkedin,
      value: "linkedin.com/in/raphael-evander-lian-rustan",
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            {t.contact.title}
          </h2>
          <p className="mt-2 text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 hover:border-accent/40 transition-colors"
            >
              <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {link.label}
                </p>
                <p className="text-sm text-foreground mt-0.5 truncate group-hover:text-accent transition-colors">
                  {link.value}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
