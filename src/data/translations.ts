export type Locale = "id" | "en";

export const translations = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      achievements: "Prestasi",
      contact: "Kontak",
    },
    hero: {
      headline: "Membangun solusi melalui kode, logika, dan rasa ingin tahu.",
      intro: "Siswa kelas 12 SMAN 10 Samarinda yang tertarik pada Informatika, competitive programming, dan pemecahan masalah algoritmik.",
      ctaPrimary: "Jelajahi Proyek",
      ctaSecondary: "Tentang Saya",
      focusLabel: "Fokus saat ini",
    },
    about: {
      title: "Tentang Saya",
      education: "Pendidikan",
      journey: "Perjalanan Belajar",
      interests: "Minat & Fokus",
    },
    projects: {
      title: "Proyek",
      subtitle: "Karya dan eksperimen yang sedang atau telah dikerjakan.",
      status: {
        completed: "Selesai",
        "in-progress": "Sedang dikerjakan",
        prototype: "Prototype",
        concept: "Konsep",
      },
      viewDetails: "Lihat Detail",
      source: "Kode Sumber",
      demo: "Demo",
      empty: "Proyek akan segera ditambahkan. Nantikan pembaruan.",
    },
    achievements: {
      title: "Prestasi & Kompetisi",
      subtitle: "Partisipasi dan hasil dalam kompetisi matematika serta OSN Informatika.",
    },
    activities: {
      title: "Kegiatan & Kontribusi",
      subtitle: "Keterlibatan di komunitas belajar dan ekstrakurikuler.",
    },
    skills: {
      title: "Keterampilan Teknis",
      subtitle: "Kemampuan yang sedang dipraktikkan dan dipelajari.",
      status: {
        "used-in-projects": "Digunakan di proyek",
        practicing: "Sedang dipraktikkan",
        "currently-learning": "Sedang dipelajari",
        exploring: "Sedang dieksplorasi",
      },
    },
    contact: {
      title: "Kontak",
      subtitle: "Silakan hubungi saya melalui email atau platform berikut.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "Hak cipta dilindungi.",
      builtWith: "Dibangun dengan Next.js & TypeScript",
    },
    common: {
      learnMore: "Pelajari lebih lanjut",
      back: "Kembali",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      achievements: "Achievements",
      contact: "Contact",
    },
    hero: {
      headline: "Building solutions through code, logic, and curiosity.",
      intro: "Grade 12 student at SMAN 10 Samarinda interested in Informatics, competitive programming, and algorithmic problem-solving.",
      ctaPrimary: "Explore Projects",
      ctaSecondary: "About Me",
      focusLabel: "Current focus",
    },
    about: {
      title: "About Me",
      education: "Education",
      journey: "Learning Journey",
      interests: "Interests & Focus",
    },
    projects: {
      title: "Projects",
      subtitle: "Works and experiments currently or previously undertaken.",
      status: {
        completed: "Completed",
        "in-progress": "In Progress",
        prototype: "Prototype",
        concept: "Concept",
      },
      viewDetails: "View Details",
      source: "Source Code",
      demo: "Demo",
      empty: "Projects will be added soon. Stay tuned for updates.",
    },
    achievements: {
      title: "Achievements & Competitions",
      subtitle: "Participation and results in mathematics competitions and OSN Informatics.",
    },
    activities: {
      title: "Activities & Contributions",
      subtitle: "Involvement in learning communities and extracurriculars.",
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Skills currently being practiced and learned.",
      status: {
        "used-in-projects": "Used in Projects",
        practicing: "Practicing",
        "currently-learning": "Currently Learning",
        exploring: "Exploring",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Feel free to reach out via email or the platforms below.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js & TypeScript",
    },
    common: {
      learnMore: "Learn more",
      back: "Back",
    },
  },
} as const;

export type TranslationKey = typeof translations.id;
