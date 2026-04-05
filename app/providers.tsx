'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  type FormEvent,
} from 'react'

// ─── Types ──────────────────────────────────────────────────────────────────

export type User = { email: string; initial: string }

type AuthContextType = {
  user: User | null
  login: (email: string) => void
  logout: () => void
  openModal: () => void
}

// ─── Context ─────────────────────────────────────────────────────────────────

export const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

// ─── Auth Modal ───────────────────────────────────────────────────────────────

function AuthModal({
  onClose,
  onLogin,
}: {
  onClose: () => void
  onLogin: (email: string) => void
}) {
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function switchTab(t: 'login' | 'register') {
    setTab(t)
    setError('')
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all required fields.')
      return
    }
    if (tab === 'register' && !name.trim()) {
      setError('Please enter your name.')
      return
    }
    onLogin(email.trim())
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

      {/* Card */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-8 pt-7 pb-0">
          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <rect x="11" y="1.5" width="13" height="13" rx="1.5" transform="rotate(45 11 11)" fill="#0f1f3d" />
                <rect x="11" y="5.5" width="7.8" height="7.8" rx="0.8" transform="rotate(45 11 11)" fill="white" />
                <circle cx="11" cy="11" r="1.6" fill="#1e40af" />
              </svg>
              <span
                style={{
                  color: '#0f1f3d',
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
              >
                Mathly
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Tab switcher */}
          <div className="flex border-b border-gray-200">
            {(['login', 'register'] as const).map((t) => (
              <button
                key={t}
                onClick={() => switchTab(t)}
                className={`px-5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  tab === t
                    ? 'border-[#1e40af] text-[#1e40af]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {t === 'login' ? 'Log in' : 'Register'}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
          {tab === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Smith"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete={tab === 'login' ? 'current-password' : 'new-password'}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
            />
          </div>

          {error && (
            <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#1e40af] hover:bg-[#1d3a9e] text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm"
          >
            {tab === 'login' ? 'Log in to Mathly' : 'Create your account'}
          </button>

          <p className="text-center text-xs text-gray-500 pt-1">
            {tab === 'login' ? (
              <>
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  onClick={() => switchTab('register')}
                  className="text-[#1e40af] hover:underline font-medium"
                >
                  Register for free
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => switchTab('login')}
                  className="text-[#1e40af] hover:underline font-medium"
                >
                  Log in
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  )
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('mathly_user')
      if (stored) setUser(JSON.parse(stored))
    } catch {
      // ignore corrupt storage
    }
  }, [])

  function login(email: string) {
    const u: User = { email, initial: email.charAt(0).toUpperCase() }
    setUser(u)
    localStorage.setItem('mathly_user', JSON.stringify(u))
  }

  function logout() {
    setUser(null)
    localStorage.removeItem('mathly_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, openModal: () => setModalOpen(true) }}>
      {children}
      {modalOpen && <AuthModal onClose={() => setModalOpen(false)} onLogin={login} />}
    </AuthContext.Provider>
  )
}
