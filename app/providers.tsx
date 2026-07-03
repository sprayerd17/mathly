'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  type FormEvent,
} from 'react'
import { useTranslations } from '@/src/i18n/useTranslations'

// ─── Types ──────────────────────────────────────────────────────────────────

export type Language = 'en' | 'af'

export type Package =
  | 'free'
  | 'pro'
  | 'guided'
  | 'family_pro_2'
  | 'family_pro_3'
  | 'family_guided_2'
  | 'family_guided_3'

const VALID_PACKAGES: Package[] = [
  'free', 'pro', 'guided',
  'family_pro_2', 'family_pro_3',
  'family_guided_2', 'family_guided_3',
]

export function getMaxChildren(pkg: string): number {
  if (pkg === 'family_pro_3' || pkg === 'family_guided_3') return 3
  if (pkg === 'family_pro_2' || pkg === 'family_guided_2') return 2
  return 1
}

export type User = {
  name: string
  email: string
  initial: string
  grades: number[]
  language: Language
  package: Package
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
  const t = useTranslations()
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
            {t.auth_grade_label.replace('{grade}', String(g))}
          </button>
        )
      })}
    </div>
  )
}

// ─── Language cards ───────────────────────────────────────────────────────────

// Note: language names/descriptions are intentionally NOT routed through the
// active UI locale — each card always describes itself in its own language
// (e.g. "Afrikaans" / "Studiegidse in Afrikaans" regardless of current UI language).
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
  const t = useTranslations()
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const [registerStep, setRegisterStep] = useState<1 | 2 | 3 | 4>(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedGrades, setSelectedGrades] = useState<number[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null)
  const [error, setError] = useState('')
  const [regChildren, setRegChildren] = useState<Array<{ name: string; grade: number | '' }>>([{ name: '', grade: '' }])

  function switchTab(t: 'login' | 'register') {
    setTab(t)
    setRegisterStep(1)
    setError('')
  }

  function handleStep1Submit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError(t.auth_error_fill_required)
      return
    }
    if (tab === 'register') {
      if (!name.trim()) {
        setError(t.auth_error_enter_name)
        return
      }
      setError('')
      setRegisterStep(2)
      return
    }
    onLogin(email.trim())
    onClose()
  }

  function handleComplete() {
    if (regChildren.some(c => !c.name.trim() || c.grade === '')) {
      setError(t.auth_error_fill_child_details)
      return
    }
    try {
      localStorage.setItem('mathly_children', JSON.stringify(
        regChildren.map(c => ({ name: c.name.trim(), grade: c.grade }))
      ))
    } catch { /* ignore */ }
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
              aria-label={t.auth_close_label}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Tab bar — hidden during register steps 2 & 3 */}
          {!onRegisterStep && (
            <div className="flex border-b border-gray-200">
              {(['login', 'register'] as const).map((tabOption) => (
                <button
                  key={tabOption}
                  onClick={() => switchTab(tabOption)}
                  className={`px-5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
                    tab === tabOption
                      ? 'border-[#1e40af] text-[#1e40af]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tabOption === 'login' ? t.auth_login_tab : t.auth_register_tab}
                </button>
              ))}
            </div>
          )}

          {/* Step indicator — shown during register steps 2 & 3 */}
          {onRegisterStep && (
            <div className="flex items-center gap-2.5 pb-5 border-b border-gray-100">
              <div className="flex gap-1.5">
                {([1, 2, 3, 4] as const).map((s) => (
                  <span
                    key={s}
                    className="w-6 h-1.5 rounded-full"
                    style={{ backgroundColor: s === registerStep ? '#1e40af' : '#e5e7eb' }}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400">{t.auth_step_of.replace('{step}', String(registerStep))}</span>
            </div>
          )}
        </div>

        {/* ── Step 1: details ───────────────────────────────────────────── */}
        {registerStep === 1 && (
          <form onSubmit={handleStep1Submit} className="px-8 py-6 space-y-4">
            {tab === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.auth_full_name_label}</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.auth_full_name_placeholder}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.auth_email_label}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.auth_email_placeholder}
                autoComplete="email"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.auth_password_label}</label>
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
              {tab === 'login' ? t.auth_login_submit_button : t.auth_next_button}
            </button>

            <p className="text-center text-xs text-gray-500 pt-1">
              {tab === 'login' ? (
                <>
                  {t.auth_no_account_prompt}{' '}
                  <button
                    type="button"
                    onClick={() => switchTab('register')}
                    className="text-[#1e40af] hover:underline font-medium"
                  >
                    {t.auth_register_for_free}
                  </button>
                </>
              ) : (
                <>
                  {t.auth_have_account_prompt}{' '}
                  <button
                    type="button"
                    onClick={() => switchTab('login')}
                    className="text-[#1e40af] hover:underline font-medium"
                  >
                    {t.auth_login_tab}
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
              {t.auth_grade_step_title}
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              {t.auth_grade_step_subtitle}
            </p>

            <GradeGrid selected={selectedGrades} onToggle={toggleGrade} />

            {selectedGrades.length === 0 && (
              <p className="text-xs text-gray-400 text-center mt-4">
                {t.auth_grade_step_hint}
              </p>
            )}

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setRegisterStep(1)}
                className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                {t.auth_back_button}
              </button>
              <button
                type="button"
                onClick={() => setRegisterStep(3)}
                disabled={selectedGrades.length === 0}
                className="flex-1 bg-[#1e40af] text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {t.auth_continue_button}
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3: language selection ─────────────────────────────────── */}
        {registerStep === 3 && (
          <div className="px-8 py-6">
            <h2 className="text-base font-bold mb-1" style={{ color: '#0f1f3d' }}>
              {t.auth_language_step_title}
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              {t.auth_language_step_subtitle}
            </p>

            <LanguageCards selected={selectedLanguage} onSelect={setSelectedLanguage} />

            {selectedLanguage === null && (
              <p className="text-xs text-gray-400 text-center mt-4">
                {t.auth_language_step_hint}
              </p>
            )}

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setRegisterStep(2)}
                className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                {t.auth_back_button}
              </button>
              <button
                type="button"
                onClick={() => { setError(''); setRegisterStep(4) }}
                disabled={selectedLanguage === null}
                className="flex-1 bg-[#1e40af] text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {t.auth_continue_button}
              </button>
            </div>
          </div>
        )}

        {/* ── Step 4: child profiles ─────────────────────────────────────── */}
        {registerStep === 4 && (
          <div className="px-8 py-6">
            <h2 className="text-base font-bold mb-1" style={{ color: '#0f1f3d' }}>
              {t.auth_children_step_title}
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              {t.auth_children_step_subtitle}
            </p>

            <div className="flex flex-col gap-5 mb-4">
              {regChildren.map((child, i) => (
                <div key={i}>
                  {i > 0 && (
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-gray-500">{t.auth_child_label.replace('{number}', String(i + 1))}</span>
                      <button
                        type="button"
                        onClick={() => setRegChildren(prev => prev.filter((_, idx) => idx !== i))}
                        className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                      >
                        {t.auth_remove_button}
                      </button>
                    </div>
                  )}
                  <div className="flex flex-col gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {i === 0 ? t.auth_child_name_label_first : t.auth_child_name_label_other}
                      </label>
                      <input
                        type="text"
                        value={child.name}
                        onChange={e => setRegChildren(prev => prev.map((c, idx) => idx === i ? { ...c, name: e.target.value } : c))}
                        placeholder={t.auth_child_name_placeholder}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t.auth_child_grade_label}
                      </label>
                      <select
                        value={child.grade}
                        onChange={e => setRegChildren(prev => prev.map((c, idx) => idx === i ? { ...c, grade: e.target.value === '' ? '' : Number(e.target.value) } : c))}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors bg-white"
                      >
                        <option value="">{t.auth_select_grade_placeholder}</option>
                        {selectedGrades.map(g => (
                          <option key={g} value={g}>{t.auth_grade_label.replace('{grade}', String(g))}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              {t.auth_plan_child_limit_note}
            </p>

            {regChildren.length < getMaxChildren('free') && (
              <button
                type="button"
                onClick={() => setRegChildren(prev => [...prev, { name: '', grade: '' }])}
                className="w-full mb-4 py-2.5 rounded-lg text-sm font-semibold border-2 border-dashed border-gray-200 text-gray-500 hover:border-[#1e40af] hover:text-[#1e40af] transition-colors"
              >
                {t.auth_add_another_child}
              </button>
            )}

            {error && (
              <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4">
                {error}
              </p>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => { setError(''); setRegisterStep(3) }}
                className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                {t.auth_back_button}
              </button>
              <button
                type="button"
                onClick={handleComplete}
                disabled={regChildren.some(c => !c.name.trim() || c.grade === '')}
                className="flex-1 bg-[#1e40af] text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {t.auth_complete_registration_button}
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
        const rawPkg = (parsed.package as string | undefined)?.toLowerCase() ?? 'free'
        const pkg: Package = (VALID_PACKAGES as string[]).includes(rawPkg) ? rawPkg as Package : 'free'
        setUser({
          name: parsed.name || parsed.email,
          email: parsed.email,
          initial: parsed.initial,
          grades: parsed.grades || [],
          language: parsed.language || 'en',
          package: pkg,
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
      package: 'free',
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
      package: 'free',
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
