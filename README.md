This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Build & deploy notes

This app deploys to Netlify, not Vercel — the section below is
create-next-app boilerplate and doesn't reflect this project's actual
deploy target.

Two things in `package.json` look inconsistent at a glance but are both
deliberate fixes for the same underlying issue, not oversights:

- **`"build": "next build --webpack"` while `dev` uses the Turbopack
  default.** Production builds crashed on Netlify with
  `ERR_REQUIRE_ESM`: `firebase-admin/auth` pulls in `jwks-rsa`, which
  `require()`s `jose` (ESM-only since v6). Turbopack's runtime module
  loader can't handle a `require()` of a nested ESM-only dependency
  inside an externalized package; webpack can. `next dev` never
  surfaces this because dev mode bundles differently — so don't
  "fix" the dev/build split back to matching, it would reintroduce the
  crash on the next production deploy. See commit `60ec25c`.
- **`"overrides": { "jose": "^4.15.9" }`.** The webpack switch alone
  wasn't enough — `jwks-rsa`'s own code still does `require('jose')`
  regardless of bundler, and `jose` v6 has no CJS build at all. Pinning
  to the last v4 release (the last version with a real CJS `main`
  entry) fixes it at the dependency level. See commit `81a84af`.

If either `firebase-admin` or `jwks-rsa` is upgraded in a way that
changes their `jose` dependency, re-verify this — the override may
become unnecessary, or may need bumping to whatever the last CJS-built
major version is at that time.
