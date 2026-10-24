# Khushal Agarwal — Modern Bento Portfolio

A responsive, dark Bento-style developer portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Features

- Responsive Bento hero grid
- Animated reveal-on-scroll sections
- Selected projects with live demo and repository links
- Skills, education, experience and contact sections
- Custom CSS project preview illustrations (no image assets required)
- Centralized profile and project data
- Keyboard focus states and reduced-motion support

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Customize before publishing

Edit `src/data.js`:

1. Add your professional email.
2. Replace the LinkedIn placeholder with your actual profile.
3. Check every project live URL.
4. Replace each GitHub placeholder with the exact repository URL for that project.
5. Add your resume PDF URL.
6. Confirm project descriptions, skills and experience dates are accurate.

The `Career Compass` live URL currently uses the interview project URL as a placeholder—replace it if needed. The Placement Analytics project has no live URL configured yet.

## Build for production

```bash
npm run build
npm run preview
```

## Deploy

Import the project into Vercel or Netlify. For Vercel, choose the Vite framework preset; the default build command is `npm run build` and output directory is `dist`.
