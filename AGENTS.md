# Agent instructions

This public repo holds the CDocx tenant web app, built with Angular 21 and Angular Material. The API, platform specification and Platform Console are in a private repo.

## Commands

Run from `app`.

```bash
npm ci
npx prettier --check src
npx ng test --watch=false
npm run build
```

## Rules

- This repo is public. Never commit secrets, `.env` files, internal design documents, or real resident or staff data. Use fictional data only.
- Hiding something in the UI is for usability only. The API enforces all access, so never rely on the frontend for security.
- Keep the active tenant and OU visible, and always show when a save has failed.
- Match the existing code style. New UI must work on desktop, tablet and mobile.
- If a change needs an API behaviour that doesn't exist yet, say so instead of guessing.

## Working with other agents

Claude Code and Codex both work in this repo.

- Use one branch per task and per agent. Never work on a branch another agent is using. For parallel work, use a separate `git worktree`.
- Do not push to `main`. Open a PR, and merge only after CI passes and Jacob approves. Merging to `main` can start a deployment.
- When handing work over, say what changed, what was tested and what is unfinished.
