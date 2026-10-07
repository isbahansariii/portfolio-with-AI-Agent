# Isbah Ansari Portfolio

Modern Next.js App Router + TypeScript + Tailwind CSS portfolio.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

For the AI assistant, put your server-side OpenAI key in `.env.local` as `OPENAI_API_KEY`. Never expose it as a `NEXT_PUBLIC_` variable.

## Before publishing

1. Add the exact public GitHub/demo URLs for each project in `lib/data.ts`.
2. Replace/expand project descriptions only with work you can accurately claim.
3. Add your preferred domain in your deployment provider.
4. Set `OPENAI_API_KEY` as a server environment variable if you want the AI widget live.
5. Run `npm run build` before deployment.

The contact form uses `mailto:` so it does not require a separate email backend.
