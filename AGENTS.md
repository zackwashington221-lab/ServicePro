# ServicePro project notes

This repository contains three applications that can be developed independently:

| Area | Location | Purpose |
| --- | --- | --- |
| Web and admin dashboard | `website/` | TanStack Start/Vite customer website and admin tools. |
| API | `backend/` | Express, MongoDB, Socket.IO, uploads, and authentication. |
| Technician app | `mobile/` | Expo React Native app for technician onboarding and day-to-day work. |

## Working conventions

- Keep changes scoped to the application being worked on. Do not assume the web,
  backend, and mobile apps share build tooling or environment variables.
- The web application is in `website/`; its source is `website/src/`. Use the
  scripts in `website/package.json` for it.
- The mobile app uses the `@/` alias for `mobile/src/`. Its explicit Expo entry
  is `mobile/index.ts`, which registers `mobile/App.tsx`.
- `App.tsx` is deliberately small: providers are composed there and routing is
  owned by `mobile/src/navigation/RootNavigator.tsx`. Keep new screens and
  routes out of the entry component.
- Before handing off mobile TypeScript changes, run `cd mobile && npm run
  typecheck`. Before handing off backend changes, run the relevant backend test
  or typecheck script when available.
- Treat `API-INTEGRATION.md` as the source of truth for which web flows are
  connected to live API endpoints versus demo/static data. Update it whenever
  that status changes.
- Preserve existing worktree changes that are unrelated to the request,
  especially generated iOS files, unless the requested task explicitly targets
  them.
