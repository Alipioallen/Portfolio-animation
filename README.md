# Personal Portfolio

A brief guide to clone, install and run the project. If you have any questions, follow me on Instagram. 😁

[![Instagram](https://img.shields.io/badge/Instagram-@luiscortespenguin-E4405F?logo=instagram&logoColor=white)](https://instagram.com/luiscortespenguin)

## Requirements
- Node.js 18+ (recommended 20)
- npm 9+ or pnpm/yarn

## Installation
```bash
git clone <https://github.com/luisjosuecortes/Portafolio1.git>
cd personalPortfolio
npm install
```

## Development
```bash
# To run the project and see it, then go to the APP
npm run dev
```

App available at `http://localhost:3000`.

## Build and Production
```bash
npm run build
npm start
```

## Social Media (follow me and star ⭐ the repo)

Please support me by starring this repository and following me on my social networks. This helps me a lot to keep creating!

- Instagram: `https://instagram.com/luiscortespenguin`
- LinkedIn: `https://www.linkedin.com/in/luis-cort%C3%A9s-penguin/`
- GitHub: `https://github.com/luisjosuecortes`

## Folder Structure
```text
.
├─ public/
│  ├─ favicon.ico
│  ├─ proyecto1.png
│  ├─ proyecto2.png
│  ├─ proyecto3.png
│  └─ cv.pdf
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx        # Root layout (App Router)
│  │  ├─ page.tsx          # Main page
│  │  └─ globals.css       # Global styles + animations
│  └─ components/
│     ├─ header.tsx        # Fixed navigation with scroll spy
│     ├─ hero.tsx          # Main section (typing and CTA)
│     ├─ about.tsx         # About Me section
│     ├─ projects.tsx      # Projects with on-scroll animation
│     ├─ services.tsx      # Services + animated background
│     ├─ footer.tsx        # Footer
│     ├─ loading-screen.tsx# Initial loading screen
│     └─ page-wrapper.tsx  # Wrapper that manages loading/scroll
├─ eslint.config.mjs
├─ next.config.ts
├─ tsconfig.json
├─ package.json
└─ postcss.config.mjs
```

## Notes
- This project uses Next.js (App Router), Tailwind CSS and mixed client/server components.
- The images for `hero` and `about` must exist in `public/`.
- The CV PDF is served from `public/cv.pdf`.

## Deploy (Vercel suggested)
1. Import the repo in Vercel.
2. Framework: Next.js (auto-detection).
3. Environment variables (if necessary) in the Vercel dashboard.
4. Deploy.

---

If this project was useful to you or you liked the result:

- Star ⭐ the repository.
- Follow me on `Instagram`, `LinkedIn` and `GitHub` for more projects and updates.

