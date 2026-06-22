# dev-automation-demo

A demo project used to test the integration between **Agent Core** and **GitHub**.

The repository will contain a tiny Node.js + Express JSON API ("Demo API") that acts
as a realistic but minimal codebase. An agent reads `CLAUDE.md`, follows the
project's conventions, and exercises an end-to-end automation workflow against
GitHub — for example: picking up an issue, making a code change, running tests,
opening a pull request, and responding to review feedback.

## What this demonstrates

- An agent driven by Agent Core operating on a real repository.
- The GitHub integration: reading issues, pushing branches, opening pull
  requests, and iterating on review comments.
- Deterministic, convention-driven changes guided by `CLAUDE.md`.

## The demo app

The app itself will be intentionally small so the focus stays on the automation, not
the code. See [`CLAUDE.md`](./CLAUDE.md) for the app's conventions and commands.

```
.
├── CLAUDE.md            # conventions the agent reads first
├── package.json
├── src/
│   ├── server.js        # Express routes (thin handlers)
│   └── lib/
│       └── greeting.js  # pure, unit-testable helper
└── test/
    └── greeting.test.js # node:test + node:assert
```

## Commands

- `npm install` — install deps
- `npm start` — run the server (port 3000)
- `npm test` — run unit tests (Node built-in test runner)
- `npm run lint` — check formatting (Biome)
