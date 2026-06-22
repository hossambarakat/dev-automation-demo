# Demo API

A tiny Node.js + Express JSON API. Plain JavaScript (no TypeScript).

## Commands
- `npm install` — install deps
- `npm start` — run the server (port 3000)
- `npm test` — run unit tests (Node built-in test runner)
- `npm run lint` — check formatting (Biome)

## Conventions
- Plain JavaScript, ES modules (`import`/`export`), Node 18+.
- Routes live in `src/server.js`; pure helpers go in `src/lib/` as small single-purpose modules.
- Every helper in `src/lib/` has a matching `test/<name>.test.js` using `node:test` + `node:assert`.
- Keep handlers thin; put logic in `src/lib/` so it's unit-testable.
- Conventional commits (`feat:`, `fix:`, `test:`).
