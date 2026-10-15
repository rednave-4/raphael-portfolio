export type ProjectStatus = "completed" | "in-progress" | "prototype" | "concept";

export interface Project {
  slug: string;
  title: {
    id: string;
    en: string;
  };
  summary: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  category: string;
  status: ProjectStatus;
  technologies: string[];
  problem: {
    id: string;
    en: string;
  };
  solution: {
    id: string;
    en: string;
  };
  contribution: {
    id: string;
    en: string;
  };
  results?: {
    id: string;
    en: string;
  };
  limitations?: {
    id: string;
    en: string;
  };
  lessons?: {
    id: string;
    en: string;
  };
  image?: string;
  sourceUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  // Placeholder – user will add real projects later
  {
    slug: "coming-soon",
    title: {
      id: "Proyek akan ditambahkan",
      en: "Projects coming soon",
    },
    summary: {
      id: "Proyek nyata sedang dalam proses dokumentasi dan akan segera ditampilkan di sini.",
      en: "Real projects are being documented and will be featured here soon.",
    },
    description: {
      id: "Bagian ini akan diisi dengan proyek-proyek yang telah atau sedang dikembangkan, lengkap dengan penjelasan masalah, solusi, dan pembelajaran.",
      en: "This section will be filled with projects that have been or are being developed, complete with problem statements, solutions, and lessons learned.",
    },
    category: "Placeholder",
    status: "concept",
    technologies: [],
    problem: {
      id: "Belum ada proyek yang didokumentasikan.",
      en: "No projects documented yet.",
    },
    solution: {
      id: "Akan diisi kemudian.",
      en: "To be filled later.",
    },
    contribution: {
      id: "—",
      en: "—",
    },
    featured: false,
  },
];
