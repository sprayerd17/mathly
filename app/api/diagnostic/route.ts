// Temporary — checking the actual Node.js runtime version used by Netlify's
// deployed function (as opposed to the build machine, which can differ) to
// diagnose an ERR_REQUIRE_ESM crash coming from firebase-admin's jwks-rsa
// dependency trying to require() the ESM-only jose v6.
export async function GET() {
  return Response.json({ nodeVersion: process.version })
}
