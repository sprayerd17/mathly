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
};

export default nextConfig;
