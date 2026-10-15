# Raphael Evander Lian Rustan — Portfolio

Personal portfolio website for BCA PPTI application.

**Display name:** Ecobrahunter  
**Location:** Samarinda, East Kalimantan, Indonesia  
**Education:** Grade 12, SMAN 10 Samarinda

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Framer Motion (optional, not heavily used yet)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Content Editing

All editable content lives in `src/data/`:

| File | Purpose |
|------|---------|
| `profile.ts` | Name, contact links, education, focus areas |
| `achievements.ts` | Competition results |
| `projects.ts` | Project case studies |
| `activities.ts` | Extracurricular & community |
| `skills.ts` | Technical skills with status |
| `translations.ts` | Indonesian & English strings |

### Fields still to verify / complete before publishing

- [ ] Personal photo (optional)
- [ ] OSN 2026 provincial result (currently incomplete)
- [ ] Real projects with descriptions, tech stack, GitHub/demo links
- [ ] Any additional achievements or activities
- [ ] Confirm all competition results are accurate

## Features

- Fully bilingual (Bahasa Indonesia default + English)
- Light / Dark theme toggle
- Responsive design (mobile → desktop)
- Accessible navigation & focus states
- SEO metadata
- Clean, maintainable data-driven architecture

## Deployment

Recommended: Vercel

1. Push to GitHub
2. Import repository in Vercel
3. Deploy (no extra configuration needed)

## License

Personal portfolio — all rights reserved.
