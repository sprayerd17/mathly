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

export type Language = 'en' | 'af'

export type User = {
  name: string
  email: string
  initial: string
  grades: number[]
  language: Language
}

type AuthContextType = {
  user: User | null
  login: (email: string) => void
  register: (name: string, email: string, grades: number[], language: Language) => void
  logout: () => void
  updateGrades: (grades: number[]) => void
  updateLanguage: (language: Language) => void
  openModal: () => void
}

// ─── Context ─────────────────────────────────────────────────────────────────

export const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

// ─── Grade grid ───────────────────────────────────────────────────────────────

const GRADES = [4, 5, 6, 7, 8, 9, 10, 11, 12]

export function GradeGrid({
  selected,
  onToggle,
}: {
  selected: number[]
  onToggle: (g: number) => void
}) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {GRADES.map((g) => {
        const active = selected.includes(g)
        return (
          <button
            key={g}
            type="button"
            onClick={() => onToggle(g)}
            className="py-3.5 rounded-xl text-sm font-semibold transition-all border"
            style={
              active
                ? { backgroundColor: '#1e40af', color: '#fff', borderColor: '#1e40af' }
                : { backgroundColor: '#fff', color: '#374151', borderColor: '#d1d5db' }
            }
          >
            Grade {g}
          </button>
        )
      })}
    </div>
  )
}

// ─── Language cards ───────────────────────────────────────────────────────────

const LANGUAGES: { code: Language; name: string; desc: string }[] = [
  { code: 'en', name: 'English',   desc: 'Study material in English' },
  { code: 'af', name: 'Afrikaans', desc: 'Studiegidse in Afrikaans'  },
]

export function LanguageCards({
  selected,
  onSelect,
}: {
  selected: Language | null
  onSelect: (lang: Language) => void
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {LANGUAGES.map(({ code, name, desc }) => {
        const active = selected === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => onSelect(code)}
            className="flex flex-col items-start gap-1 p-5 rounded-xl border text-left transition-all"
            style={
              active
                ? { backgroundColor: '#eff6ff', borderColor: '#1e40af', borderWidth: '2px' }
                : { backgroundColor: '#fff', borderColor: '#d1d5db', borderWidth: '1px' }
            }
          >
            <span
              className="font-bold text-sm"
              style={{ color: active ? '#1e40af' : '#0f1f3d' }}
            >
              {name}
            </span>
            <span className="text-xs text-gray-500">{desc}</span>
          </button>
        )
      })}
    </div>
  )
}

// ─── Auth Modal ───────────────────────────────────────────────────────────────

function AuthModal({
  onClose,
  onLogin,
  onRegister,
}: {
  onClose: () => void
  onLogin: (email: string) => void
  onRegister: (name: string, email: string, grades: number[], language: Language) => void
}) {
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const [registerStep, setRegisterStep] = useState<1 | 2 | 3>(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedGrades, setSelectedGrades] = useState<number[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null)
  const [error, setError] = useState('')

  function switchTab(t: 'login' | 'register') {
    setTab(t)
    setRegisterStep(1)
    setError('')
  }

  function handleStep1Submit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all required fields.')
      return
    }
    if (tab === 'register') {
      if (!name.trim()) {
        setError('Please enter your name.')
        return
      }
      setError('')
      setRegisterStep(2)
      return
    }
    onLogin(email.trim())
    onClose()
  }

  function handleRegister() {
    onRegister(name.trim(), email.trim(), selectedGrades, selectedLanguage ?? 'en')
    onClose()
  }

  function toggleGrade(g: number) {
    setSelectedGrades((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    )
  }

  const onRegisterStep = tab === 'register' && registerStep > 1

  // ── Logo mark ─────────────────────────────────────────────────────────────
  const logoMark = (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="11" y="1.5" width="13" height="13" rx="1.5" transform="rotate(45 11 11)" fill="#0f1f3d" />
      <rect x="11" y="5.5" width="7.8" height="7.8" rx="0.8" transform="rotate(45 11 11)" fill="white" />
      <circle cx="11" cy="11" r="1.6" fill="#1e40af" />
    </svg>
  )

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Modal header ──────────────────────────────────────────────── */}
        <div className="px-8 pt-7 pb-0">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              {logoMark}
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

          {/* Tab bar — hidden during register steps 2 & 3 */}
          {!onRegisterStep && (
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
          )}

          {/* Step indicator — shown during register steps 2 & 3 */}
          {onRegisterStep && (
            <div className="flex items-center gap-2.5 pb-5 border-b border-gray-100">
              <div className="flex gap-1.5">
                {([1, 2, 3] as const).map((s) => (
                  <span
                    key={s}
                    className="w-6 h-1.5 rounded-full"
                    style={{ backgroundColor: s === registerStep ? '#1e40af' : '#e5e7eb' }}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400">Step {registerStep} of 3</span>
            </div>
          )}
        </div>

        {/* ── Step 1: details ───────────────────────────────────────────── */}
        {registerStep === 1 && (
          <form onSubmit={handleStep1Submit} className="px-8 py-6 space-y-4">
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
              {tab === 'login' ? 'Log in to Mathly' : 'Next →'}
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
        )}

        {/* ── Step 2: grade selection ────────────────────────────────────── */}
        {registerStep === 2 && (
          <div className="px-8 py-6">
            <h2 className="text-base font-bold mb-1" style={{ color: '#0f1f3d' }}>
              Which grade are you studying?
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Select all that apply — you can update this anytime in your profile.
            </p>

            <GradeGrid selected={selectedGrades} onToggle={toggleGrade} />

            {selectedGrades.length === 0 && (
              <p className="text-xs text-gray-400 text-center mt-4">
                Select at least one grade to continue.
              </p>
            )}

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setRegisterStep(1)}
                className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => setRegisterStep(3)}
                disabled={selectedGrades.length === 0}
                className="flex-1 bg-[#1e40af] text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3: language selection ─────────────────────────────────── */}
        {registerStep === 3 && (
          <div className="px-8 py-6">
            <h2 className="text-base font-bold mb-1" style={{ color: '#0f1f3d' }}>
              What is your language of instruction?
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              This sets the default language for your study material.
            </p>

            <LanguageCards selected={selectedLanguage} onSelect={setSelectedLanguage} />

            {selectedLanguage === null && (
              <p className="text-xs text-gray-400 text-center mt-4">
                Choose a language to complete registration.
              </p>
            )}

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setRegisterStep(2)}
                className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleRegister}
                disabled={selectedLanguage === null}
                className="flex-1 bg-[#1e40af] text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Complete Registration
              </button>
            </div>
          </div>
        )}
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
      if (stored) {
        const parsed = JSON.parse(stored)
        setUser({
          name: parsed.name || parsed.email,
          email: parsed.email,
          initial: parsed.initial,
          grades: parsed.grades || [],
          language: parsed.language || 'en',
        })
      }
    } catch {
      // ignore corrupt storage
    }
  }, [])

  function login(email: string) {
    const u: User = {
      name: email.split('@')[0],
      email,
      initial: email.charAt(0).toUpperCase(),
      grades: [],
      language: 'en',
    }
    setUser(u)
    localStorage.setItem('mathly_user', JSON.stringify(u))
  }

  function register(name: string, email: string, grades: number[], language: Language) {
    const u: User = {
      name,
      email,
      initial: name.charAt(0).toUpperCase(),
      grades,
      language,
    }
    setUser(u)
    localStorage.setItem('mathly_user', JSON.stringify(u))
  }

  function logout() {
    setUser(null)
    localStorage.removeItem('mathly_user')
  }

  function updateGrades(grades: number[]) {
    if (!user) return
    const u = { ...user, grades }
    setUser(u)
    localStorage.setItem('mathly_user', JSON.stringify(u))
  }

  function updateLanguage(language: Language) {
    if (!user) return
    const u = { ...user, language }
    setUser(u)
    localStorage.setItem('mathly_user', JSON.stringify(u))
  }

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, updateGrades, updateLanguage, openModal: () => setModalOpen(true) }}
    >
      {children}
      {modalOpen && (
        <AuthModal
          onClose={() => setModalOpen(false)}
          onLogin={login}
          onRegister={register}
        />
      )}
    </AuthContext.Provider>
  )
}
