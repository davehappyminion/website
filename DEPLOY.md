# DEPLOY.md

Deployment policy for this repo (`davehappyminion/website`).

## Required flow (always)

1. Make changes locally
2. Commit changes to git
3. Push to GitHub (`origin`)
4. Let Vercel deploy from the GitHub push

## Do NOT do this

- Do **not** run `vercel --prod` for normal deploys
- Do **not** deploy from uncommitted local changes

## Why

This keeps GitHub and production in sync, with a clear history of what changed.

## Exception

Only use direct `vercel --prod` if Nikil explicitly asks for a one-off emergency deploy.
