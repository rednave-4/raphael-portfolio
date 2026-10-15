export type AchievementType = "award" | "participation" | "qualification" | "training";

export interface Achievement {
  id: string;
  title: {
    id: string;
    en: string;
  };
  organization: string;
  year: number;
  level: {
    id: string;
    en: string;
  };
  result: {
    id: string;
    en: string;
  };
  type: AchievementType;
  evidenceUrl?: string;
  description?: {
    id: string;
    en: string;
  };
}

export const achievements: Achievement[] = [
  // OSN Informatika
  {
    id: "osn-2026-kota",
    title: {
      id: "OSN Informatika 2026 – Tingkat Kota",
      en: "OSN Informatics 2026 – City Level",
    },
    organization: "OSN Informatika",
    year: 2026,
    level: { id: "Kota (Samarinda)", en: "City (Samarinda)" },
    result: { id: "Peringkat 2", en: "Rank 2" },
    type: "award",
    description: {
      id: "Mencapai peringkat 2 pada seleksi tingkat kota.",
      en: "Achieved rank 2 at the city selection stage.",
    },
  },
  {
    id: "osn-2025-provinsi",
    title: {
      id: "OSN Informatika 2025 – Tingkat Provinsi",
      en: "OSN Informatics 2025 – Provincial Level",
    },
    organization: "OSN Informatika",
    year: 2025,
    level: { id: "Provinsi (Kalimantan Timur)", en: "Provincial (East Kalimantan)" },
    result: { id: "Peringkat 4", en: "Rank 4" },
    type: "award",
    description: {
      id: "Mencapai peringkat 4 pada seleksi tingkat provinsi.",
      en: "Achieved rank 4 at the provincial selection stage.",
    },
  },
  {
    id: "osn-2025-kota",
    title: {
      id: "OSN Informatika 2025 – Tingkat Kota",
      en: "OSN Informatics 2025 – City Level",
    },
    organization: "OSN Informatika",
    year: 2025,
    level: { id: "Kota (Samarinda)", en: "City (Samarinda)" },
    result: { id: "Peringkat 4", en: "Rank 4" },
    type: "award",
  },
  // SEAMO
  {
    id: "seamo-2026-intl",
    title: {
      id: "SEAMO / SEAMO X 2026 – International",
      en: "SEAMO / SEAMO X 2026 – International",
    },
    organization: "SEAMO",
    year: 2026,
    level: { id: "Internasional", en: "International" },
    result: { id: "Bronze Medal", en: "Bronze Medal" },
    type: "award",
  },
  {
    id: "seamo-2026-nat",
    title: {
      id: "SEAMO / SEAMO X 2026 – National",
      en: "SEAMO / SEAMO X 2026 – National",
    },
    organization: "SEAMO",
    year: 2026,
    level: { id: "Nasional", en: "National" },
    result: { id: "Gold Medal", en: "Gold Medal" },
    type: "award",
  },
  {
    id: "seamo-2025-intl",
    title: {
      id: "SEAMO / SEAMO X 2025 – International",
      en: "SEAMO / SEAMO X 2025 – International",
    },
    organization: "SEAMO",
    year: 2025,
    level: { id: "Internasional", en: "International" },
    result: { id: "Bronze Medal", en: "Bronze Medal" },
    type: "award",
  },
  {
    id: "seamo-2025-nat",
    title: {
      id: "SEAMO / SEAMO X 2025 – National",
      en: "SEAMO / SEAMO X 2025 – National",
    },
    organization: "SEAMO",
    year: 2025,
    level: { id: "Nasional", en: "National" },
    result: { id: "Gold Medal", en: "Gold Medal" },
    type: "award",
  },
  // SASMO
  {
    id: "sasmo-2026",
    title: {
      id: "Singapore & Asian Schools Math Olympiad (SASMO) 2026",
      en: "Singapore & Asian Schools Math Olympiad (SASMO) 2026",
    },
    organization: "SASMO",
    year: 2026,
    level: { id: "Internasional", en: "International" },
    result: { id: "Bronze", en: "Bronze" },
    type: "award",
  },
  // SMC
  {
    id: "smc-2025",
    title: {
      id: "Singapore Mathematics Challenge (SMC) 2025",
      en: "Singapore Mathematics Challenge (SMC) 2025",
    },
    organization: "SIMCC / SMC",
    year: 2025,
    level: { id: "Internasional", en: "International" },
    result: { id: "Commendable", en: "Commendable" },
    type: "award",
    evidenceUrl: "https://smc.simcc.org/smc/2025-smc-results/",
  },
  // ASTRAMATIKA
  {
    id: "astramatika-2026",
    title: {
      id: "ASTRAMATIKA 2026",
      en: "ASTRAMATIKA 2026",
    },
    organization: "ASTRAMATIKA",
    year: 2026,
    level: { id: "Nasional", en: "National" },
    result: {
      id: "Penyisihan: 3 · Semifinal: 2 · Final: 3",
      en: "Preliminary: 3 · Semifinal: 2 · Final: 3",
    },
    type: "award",
    description: {
      id: "Hasil di tahap penyisihan, semifinal, dan final.",
      en: "Results at preliminary, semifinal, and final stages.",
    },
  },
];
