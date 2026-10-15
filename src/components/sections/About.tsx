"use client";

import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/profile";

const journeyMilestones = {
  id: [
    { year: "Awal", text: "Mulai tertarik pada teknologi dan logika pemrograman." },
    { year: "2024+", text: "Memulai competitive programming dan persiapan OSN Informatika." },
    { year: "2025", text: "Partisipasi OSN tingkat kota & provinsi, serta kompetisi matematika internasional." },
    { year: "2026", text: "Melanjutkan kompetisi OSN dan eksplorasi Python serta minat AI." },
  ],
  en: [
    { year: "Early", text: "Became interested in technology and programming logic." },
    { year: "2024+", text: "Started competitive programming and OSN Informatics preparation." },
    { year: "2025", text: "Participated in city & provincial OSN, plus international math competitions." },
    { year: "2026", text: "Continuing OSN competitions and exploring Python and AI interests." },
  ],
};

export function About() {
  const { t, locale } = useLanguage();
  const milestones = journeyMilestones[locale];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-10">
          {t.about.title}
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              {locale === "id"
                ? `Saya ${profile.fullName}, siswa ${profile.education.grade} di ${profile.education.school}, ${profile.location}.`
                : `I am ${profile.fullName}, a ${profile.education.grade} student at ${profile.education.school}, ${profile.location}.`}
            </p>
            <p>
              {locale === "id"
                ? "Ketertarikan saya pada Informatika tumbuh dari rasa ingin tahu terhadap cara kerja algoritma dan bagaimana logika dapat digunakan untuk memecahkan masalah secara sistematis. Saya aktif berlatih competitive programming, terutama menggunakan C++."
                : "My interest in Informatics grew from curiosity about how algorithms work and how logic can be used to solve problems systematically. I actively practice competitive programming, primarily using C++."}
            </p>
            <p>
              {locale === "id"
                ? "Selain kompetisi, saya juga tertarik mengeksplorasi Python, pengembangan web, serta area Artificial Intelligence dan computer vision di masa depan. Saya percaya pada pembelajaran berkelanjutan dan berbagi pengetahuan dengan rekan serta junior."
                : "Beyond competitions, I am also interested in exploring Python, web development, and future areas of Artificial Intelligence and computer vision. I believe in continuous learning and sharing knowledge with peers and juniors."}
            </p>
          </div>

          {/* Journey timeline */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">
              {t.about.journey}
            </h3>
            <ol className="relative border-l border-border space-y-6 pl-6">
              {milestones.map((m, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
                  <p className="text-xs font-mono text-accent mb-1">{m.year}</p>
                  <p className="text-sm text-muted-foreground">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
