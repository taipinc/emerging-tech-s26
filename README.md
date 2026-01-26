# PSAM 2802: Photo Processes: Emerging Technologies

Course syllabus website for Spring 2026.

**Live site**: https://taipinc.github.io/emerging-tech-s26

## Development

```sh
npm install
npm run dev
```

Development server runs at `localhost:4321/emerging-tech-s26`

## Build & Deploy

```sh
npm run build
npm run preview  # preview locally
```

Deployment is automatic via GitHub Actions on push to `main` branch.

## Adding Content

**Assignments/Pages**: Add markdown files to `src/content/assignments/` and link using `[@assignments/filename]` format.

**Week Schedule**: Add/edit files in `src/content/weeks/` with frontmatter:
```yaml
---
order: 1
week: "1"
date: "Jan 27"
theme: "Introduction"
---

## Content
- [Assignment link](@assignments/week-01-a)

## Due
- Nothing yet
```

**Files**: Place PDFs in `public/files/`, images in `public/images/`. Link using `/emerging-tech-s26/files/filename.pdf` (avoid spaces in filenames).

## Tech Stack

- [Astro 5](https://astro.build)
- [marked](https://marked.js.org) for markdown parsing
- Vanilla CSS and JavaScript
- GitHub Pages
