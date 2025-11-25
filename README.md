Go Paddie Travel Itinerary is a feature‑oriented Next.js application for planning trips, including activities, hotels, and flights.

### Project structure

- **Feature folders** live under `features/*` (for example `features/activities`, `features/hotels`, `features/flights`, `features/trips`) and typically contain their own `components`, `api`, `hooks`, `validation`, and `constants`.
- **Shared UI and layout** live in `components/*` (with `components/shared` and `components/ui` for reusable building blocks).
- **Data & state**:
  - `queries/*` – React Query hooks for shared data fetching.
  - `features/**/api/*` – feature‑specific HTTP clients.
  - `services/*` – cross‑feature service helpers.
- **Core utilities & config** live in `constants/*`, `lib/utils/*`, and `hooks/*`.

### Technology stack

- Next.js (App Router)
- React with TypeScript
- Tailwind CSS
- Tanstack Query, React Hook Form, Zod

### Running locally

```bash
npm install
npm run dev
```

The application runs on [`http://localhost:3000`](http://localhost:3000). The project uses **npm** as the package manager.
