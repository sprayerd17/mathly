import { getApps, initializeApp, cert, getApp, type App } from 'firebase-admin/app'
import { getAuth, type Auth } from 'firebase-admin/auth'
import { getFirestore, type Firestore } from 'firebase-admin/firestore'

// Server-only. Never import this from a 'use client' file — it reads a private
// key from env vars that must never reach the browser bundle.
//
// Initialization is lazy and guarded: until the real FIREBASE_ADMIN_* env vars
// are set (they're blank until the service-account JSON is downloaded from
// Firebase Console), calling getAdminAuth()/getAdminDb() throws a clear error
// instead of crashing at module-import time — an eager top-level
// initializeApp(cert({...with undefined fields...})) throws synchronously on
// first import, which took down the entire dev server rather than just failing
// the one request that needed it.
let app: App | null = null

function getAdminApp(): App {
  if (app) return app
  if (getApps().length) {
    app = getApp()
    return app
  }
  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n')
  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      'Firebase Admin is not configured — set FIREBASE_ADMIN_PROJECT_ID, ' +
      'FIREBASE_ADMIN_CLIENT_EMAIL and FIREBASE_ADMIN_PRIVATE_KEY in .env.local ' +
      '(Firebase Console > Project Settings > Service Accounts > Generate new private key).'
    )
  }
  app = initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) })
  return app
}

export function getAdminAuth(): Auth {
  return getAuth(getAdminApp())
}

export function getAdminDb(): Firestore {
  return getFirestore(getAdminApp())
}
