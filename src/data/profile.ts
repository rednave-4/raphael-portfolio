export const profile = {
  fullName: "Raphael Evander Lian Rustan",
  displayName: "Ecobrahunter",
  shortName: "Raphael",
  location: "Samarinda, East Kalimantan, Indonesia",
  education: {
    school: "SMAN 10 Samarinda",
    grade: "Grade 12",
    year: "2025/2026",
  },
  email: "evander1rustan@gmail.com",
  github: "https://github.com/rednave-4",
  linkedin: "https://www.linkedin.com/in/raphael-evander-lian-rustan-763a873b3",
  // Photo: to be added later
  photo: null as string | null,
  focusAreas: [
    "Competitive Programming",
    "Algorithms",
    "C++",
    "Problem Solving",
  ],
  exploring: ["Python", "Web Development", "Artificial Intelligence", "Computer Vision"],
};

export type Profile = typeof profile;
