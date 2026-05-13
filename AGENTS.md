# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router project. Page routes live in `src/app`, with nested folders such as `src/app/about`, `src/app/services`, and `src/app/use-cases/[slug]`. Shared UI and feature components live in `src/components`; primitives are under `src/components/ui`, and page-transition code is under `src/components/page-transition`. Shared data and helpers live in `src/lib`, using the `@/*` alias for `./src/*`. Static images, SVGs, videos, `robots.txt`, and `sitemap.xml` belong in `public`.

## Build, Test, and Development Commands

- `npm run dev`: start the local Next.js development server.
- `npm run build`: create a production build and catch build-time errors.
- `npm run start`: serve the production build locally after `npm run build`.
- `npm run lint`: run the configured Next.js ESLint checks.
- `npm install`: install dependencies from `package-lock.json`.

The repo also includes `bun.lock`; avoid switching package managers in the same change unless the lockfile strategy is being updated intentionally.

## Coding Style & Naming Conventions

Use ES modules, React function components, and existing App Router patterns. Keep route files named `page.js`, layouts named `layout.js`, and components in PascalCase or current local style, for example `FluidHeader.jsx`, `ChatbotWidget.jsx`, and `use-case-card.jsx`. Prefer the `@/` alias for imports from `src`. Use Tailwind-style utility classes and existing CSS files such as `src/app/globals.css`, `src/components/hero.css`, and `src/components/navbar.css`. Follow `eslint.config.mjs`.

## Testing Guidelines

No dedicated test framework or `npm test` script is currently configured. For changes today, run `npm run lint` and `npm run build` before handoff. If tests are added, place them near the code they cover or in a clear test directory, name them after the feature, and add a matching `test` script to `package.json`.

## Commit & Pull Request Guidelines

Recent history uses short subjects such as `feat: add dedicated contact and AI chatbots pages...` and `hero-section-video-added`. Prefer concise imperative or conventional commit-style messages, for example `feat: add services hero animation` or `fix: correct chatbot widget spacing`. Pull requests should include a brief description, validation commands, linked issue if applicable, and screenshots or recordings for UI changes.

## Security & Configuration Tips

Do not commit secrets, API keys, analytics credentials, or local environment files. Keep third-party embed configuration, form endpoints, tracking scripts, and chatbot settings reviewable in the component or route where they are used. Validate public-facing SEO files in `public` and metadata changes in `src/app` during release work.
