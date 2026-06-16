# everything

Monorepo with a Next.js web app and an Express API that calls Gemini.

## Setup

1. Install dependencies from the repo root:

   ```bash
   npm install
   ```

2. Add your Gemini key in [apps/server/.env](apps/server/.env):

   ```bash
   GEMINI_API_KEY=your_key_here
   ```

## Run (dev)

```bash
npm run dev
```

- Web app: http://localhost:3000
- API: http://localhost:3001

## Build

```bash
npm run build
```

## Run API (prod)

```bash
npm run start
```
