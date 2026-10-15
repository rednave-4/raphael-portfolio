export interface Activity {
  id: string;
  title: {
    id: string;
    en: string;
  };
  role: {
    id: string;
    en: string;
  };
  period: string;
  description: {
    id: string;
    en: string;
  };
  contributions: {
    id: string[];
    en: string[];
  };
}

export const activities: Activity[] = [
  {
    id: "informatics-olympiad-ec",
    title: {
      id: "Ekstrakurikuler Olympiad Informatika",
      en: "Informatics Olympiad Extracurricular",
    },
    role: {
      id: "Anggota aktif",
      en: "Active member",
    },
    period: "2024 – sekarang",
    description: {
      id: "Partisipasi dalam kegiatan persiapan OSN Informatika dan diskusi algoritma bersama anggota lain.",
      en: "Participation in OSN Informatics preparation activities and algorithm discussions with other members.",
    },
    contributions: {
      id: [
        "Latihan soal competitive programming secara rutin",
        "Diskusi konsep algoritma dengan rekan",
        "Minat membantu junior memahami dasar pemrograman dan logika",
      ],
      en: [
        "Regular competitive programming practice",
        "Discussing algorithmic concepts with peers",
        "Interest in helping juniors understand programming fundamentals and logic",
      ],
    },
  },
];
