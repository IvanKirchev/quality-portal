# Velithic AI Landing Page

Static React landing page for [velithic.com](https://velithic.com).

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy (GitHub Pages)

Pushes to `main` build with Vite and deploy via GitHub Actions. Do not commit `dist`.

In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

For a custom domain (e.g. `velithic.com`), set it under Pages and keep Vite `base` as `/` (the default).

## Updating content

Primary copy, service definitions, the calendar URL, and founder information live in `src/content.js`.

