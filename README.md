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

## Updating content

Primary copy, service definitions, the calendar URL, and founder information live in `src/content.js`.

To replace the founder placeholder, add a portrait to `public/` and set `founder.image` to its root-relative path, for example `/ivan-kirchev.webp`.
