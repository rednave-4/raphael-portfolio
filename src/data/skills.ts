export type SkillStatus = "used-in-projects" | "practicing" | "currently-learning" | "exploring";

export interface Skill {
  name: string;
  category: string;
  status: SkillStatus;
  description: {
    id: string;
    en: string;
  };
  evidence?: string;
}

export const skills: Skill[] = [
  {
    name: "C++",
    category: "Programming Languages",
    status: "practicing",
    description: {
      id: "Bahasa utama untuk competitive programming dan OSN Informatika.",
      en: "Primary language for competitive programming and OSN Informatics.",
    },
    evidence: "OSN preparation & competitions",
  },
  {
    name: "Algorithms & Data Structures",
    category: "Algorithms and Problem Solving",
    status: "practicing",
    description: {
      id: "Fokus pada pemecahan masalah algoritmik untuk kompetisi.",
      en: "Focus on algorithmic problem-solving for competitions.",
    },
    evidence: "OSN Informatika training",
  },
  {
    name: "Competitive Programming",
    category: "Algorithms and Problem Solving",
    status: "practicing",
    description: {
      id: "Latihan rutin dan partisipasi dalam OSN serta kompetisi matematika terkait logika.",
      en: "Regular practice and participation in OSN and related logic competitions.",
    },
  },
  {
    name: "Python",
    category: "Programming Languages",
    status: "currently-learning",
    description: {
      id: "Sedang dipelajari untuk keperluan AI, script, dan pengembangan web.",
      en: "Currently learning for AI, scripting, and web development purposes.",
    },
  },
  {
    name: "Problem Solving",
    category: "Algorithms and Problem Solving",
    status: "practicing",
    description: {
      id: "Pendekatan sistematis dalam menganalisis dan menyelesaikan masalah teknis.",
      en: "Systematic approach in analyzing and solving technical problems.",
    },
  },
  {
    name: "Web Development",
    category: "Web Development",
    status: "exploring",
    description: {
      id: "Minat pada pengembangan aplikasi web dan portfolio.",
      en: "Interest in web application development and portfolio building.",
    },
  },
  {
    name: "Artificial Intelligence",
    category: "AI and Data",
    status: "exploring",
    description: {
      id: "Minat pada AI dan computer vision sebagai area pembelajaran selanjutnya.",
      en: "Interest in AI and computer vision as future learning areas.",
    },
  },
  {
    name: "Git & GitHub",
    category: "Tools and Workflow",
    status: "practicing",
    description: {
      id: "Version control dan kolaborasi kode.",
      en: "Version control and code collaboration.",
    },
    evidence: "github.com/rednave-4",
  },
];

export const skillCategories = [
  "Programming Languages",
  "Algorithms and Problem Solving",
  "Web Development",
  "AI and Data",
  "Tools and Workflow",
];
