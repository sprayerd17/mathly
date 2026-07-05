import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // firebase-admin ships both CJS and ESM builds for subpaths like
  // firebase-admin/auth. Netlify's function bundler was picking the ESM
  // build while the wrapping module still called require() on it, causing
  // "Failed to load external module firebase-admin.../auth: Error
  // [ERR_REQUIRE_ESM]" in production (worked fine in `next dev`, which
  // never bundles this the same way). Being explicit here — rather than
  // relying on Next's default externals list — is what unbroke it.
  serverExternalPackages: ["firebase-admin"],
  // app/grade/[grade]/[topic]/page.tsx loads topic content via
  // import(`@/src/data/grade${grade}/${lang}/${topic}`) — a fully dynamic
  // template-literal path. Next's build-time file tracer can't statically
  // resolve which of the ~300 files under src/data this could point to, so
  // none of them were being included in the route's serverless function
  // bundle on Netlify (this worked in `next dev`, which doesn't trace/bundle
  // the same way, so every topic silently fell back to the "coming soon"
  // placeholder in production). Explicitly including the whole directory
  // fixes it without having to convert the loader to static imports.
  outputFileTracingIncludes: {
    "/grade/[grade]/[topic]": ["./src/data/**/*.ts"],
  },
};

export default nextConfig;
