'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import { useAuth, getMaxChildren, type Language } from '@/app/providers'
import { QRCodeCanvas } from 'qrcode.react'
import { useTranslations } from '@/src/i18n/useTranslations'

const GRADES = [4, 5, 6, 7, 8, 9, 10, 11, 12]

const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  af: 'Afrikaans',
}

export default function ProfilePage() {
  const { user, updateGrades, updateLanguage, openModal } = useAuth()
  const t = useTranslations()

  const [editingGrades, setEditingGrades] = useState(false)
  const [draftGrades, setDraftGrades] = useState<number[]>([])

  const [editingLang, setEditingLang] = useState(false)
  const [draftLang, setDraftLang] = useState<Language>('en')

  const [refCode, setRefCode]     = useState('')
  const [linkCopied, setLinkCopied] = useState(false)
  const [codeCopied, setCodeCopied] = useState(false)

  const [children, setChildren]               = useState<Array<{ name: string; grade: number }>>([])
  const [editingChildIdx, setEditingChildIdx] = useState<number | null>(null)
  const [draftChildName, setDraftChildName]   = useState('')
  const [draftChildGrade, setDraftChildGrade] = useState<number>(4)
  const [addingChild, setAddingChild]         = useState(false)
  const [newChildName, setNewChildName]       = useState('')
  const [newChildGrade, setNewChildGrade]     = useState<number>(4)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('mathly_children')
      if (stored) setChildren(JSON.parse(stored))
    } catch { /* ignore */ }
  }, [user])

  useEffect(() => {
    if (!user) return
    const stored = localStorage.getItem('mathly_ref_code')
    if (stored) {
      setRefCode(stored)
    } else {
      const namepart = user.name.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 6) || 'USER'
      const digits   = String(Math.floor(1000 + Math.random() * 9000))
      const code     = namepart + digits
      localStorage.setItem('mathly_ref_code', code)
      setRefCode(code)
    }
  }, [user])

  const referralUrl = `mathly.co.za/join?ref=${refCode}`

  function copyLink() {
    navigator.clipboard?.writeText(`https://${referralUrl}`)
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 2000)
  }

  function copyCode() {
    navigator.clipboard?.writeText(refCode)
    setCodeCopied(true)
    setTimeout(() => setCodeCopied(false), 2000)
  }

  function downloadQR() {
    const canvas = document.getElementById('referral-qr') as HTMLCanvasElement | null
    if (!canvas) return
    const url = canvas.toDataURL('image/png')
    const a   = document.createElement('a')
    a.href     = url
    a.download = 'mathly-referral-qr.png'
    a.click()
  }

  function saveChildren(updated: Array<{ name: string; grade: number }>) {
    localStorage.setItem('mathly_children', JSON.stringify(updated))
    setChildren(updated)
  }

  function startEditChild(i: number) {
    setDraftChildName(children[i].name)
    setDraftChildGrade(children[i].grade)
    setEditingChildIdx(i)
  }

  function saveEditChild() {
    if (editingChildIdx === null || !draftChildName.trim()) return
    const updated = children.map((c, i) => i === editingChildIdx ? { name: draftChildName.trim(), grade: draftChildGrade } : c)
    saveChildren(updated)
    setEditingChildIdx(null)
  }

  function startAddChild() {
    setNewChildName('')
    setNewChildGrade(4)
    setAddingChild(true)
  }

  function saveNewChild() {
    if (!newChildName.trim() || children.length >= 3) return
    saveChildren([...children, { name: newChildName.trim(), grade: newChildGrade }])
    setAddingChild(false)
  }

  function startEditGrades() {
    setDraftGrades([...(user?.grades ?? [])])
    setEditingGrades(true)
  }

  function toggleGrade(g: number) {
    setDraftGrades((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    )
  }

  function saveGrades() {
    updateGrades(draftGrades)
    setEditingGrades(false)
  }

  function startEditLang() {
    setDraftLang(user?.language ?? 'en')
    setEditingLang(true)
  }

  function saveLang() {
    updateLanguage(draftLang)
    setEditingLang(false)
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-gray-500 mb-4">{t.profile_login_required}</p>
          <button
            onClick={openModal}
            className="text-sm font-semibold px-5 py-2.5 rounded-lg text-white"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.nav_login}
          </button>
        </div>
      </div>
    )
  }

  const sortedGrades = [...user.grades].sort((a, b) => a - b)
  const maxChildren  = getMaxChildren(user.package)
  const atChildLimit = children.length >= maxChildren

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-bold mb-8" style={{ color: '#0f1f3d' }}>
          {t.profile_my_profile_heading}
        </h1>

        {/* Identity card */}
        <div
          className="bg-white rounded-2xl shadow-sm p-7 mb-5"
          style={{ border: '1px solid #e5e7eb' }}
        >
          {/* Avatar + name + email */}
          <div
            className="flex items-center gap-5 mb-8 pb-8"
            style={{ borderBottom: '1px solid #f3f4f6' }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shrink-0"
              style={{ backgroundColor: '#1e40af' }}
            >
              {user.initial}
            </div>
            <div className="min-w-0">
              <p className="text-xl font-bold truncate" style={{ color: '#0f1f3d' }}>
                {user.name}
              </p>
              <p className="text-sm text-gray-500 mt-0.5 truncate">{user.email}</p>
            </div>
          </div>

          {/* Grades section */}
          <div className="pb-7 mb-7" style={{ borderBottom: '1px solid #f3f4f6' }}>
            <div className="flex items-center justify-between mb-3">
              <h2
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: '#6b7280' }}
              >
                {t.profile_my_grades_heading}
              </h2>
              {!editingGrades && (
                <button
                  onClick={startEditGrades}
                  className="text-xs font-semibold hover:underline underline-offset-2"
                  style={{ color: '#1e40af' }}
                >
                  {t.profile_edit_grades}
                </button>
              )}
            </div>

            {!editingGrades ? (
              sortedGrades.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {sortedGrades.map((g) => (
                    <span
                      key={g}
                      className="text-sm font-semibold px-3 py-1.5 rounded-lg"
                      style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                    >
                      {t.profile_grade_label.replace('{grade}', String(g))}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400">
                  {t.profile_no_grades_selected}{' '}
                  <button
                    onClick={startEditGrades}
                    className="font-semibold hover:underline"
                    style={{ color: '#1e40af' }}
                  >
                    {t.profile_add_grades}
                  </button>
                </p>
              )
            ) : (
              <div>
                <p className="text-xs text-gray-500 mb-4">
                  {t.profile_tap_grade_hint}
                </p>
                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  {GRADES.map((g) => {
                    const active = draftGrades.includes(g)
                    return (
                      <button
                        key={g}
                        type="button"
                        onClick={() => toggleGrade(g)}
                        className="py-3 rounded-xl text-sm font-semibold transition-all border"
                        style={
                          active
                            ? { backgroundColor: '#1e40af', color: '#fff', borderColor: '#1e40af' }
                            : { backgroundColor: '#f8fafc', color: '#374151', borderColor: '#d1d5db' }
                        }
                      >
                        {t.profile_grade_label.replace('{grade}', String(g))}
                      </button>
                    )
                  })}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingGrades(false)}
                    className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                  >
                    {t.profile_cancel}
                  </button>
                  <button
                    type="button"
                    onClick={saveGrades}
                    className="flex-1 font-semibold py-2.5 rounded-lg text-sm text-white transition-colors"
                    style={{ backgroundColor: '#1e40af' }}
                  >
                    {t.profile_save_changes}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Language section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: '#6b7280' }}
              >
                {t.profile_language_heading}
              </h2>
              {!editingLang && (
                <button
                  onClick={startEditLang}
                  className="text-xs font-semibold hover:underline underline-offset-2"
                  style={{ color: '#1e40af' }}
                >
                  {t.profile_edit_language}
                </button>
              )}
            </div>

            {!editingLang ? (
              <span
                className="inline-block text-sm font-semibold px-3 py-1.5 rounded-lg"
                style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
              >
                {LANGUAGE_LABELS[user.language]}
              </span>
            ) : (
              <div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {(['en', 'af'] as const).map((code) => {
                    const active = draftLang === code
                    return (
                      <button
                        key={code}
                        type="button"
                        onClick={() => setDraftLang(code)}
                        className="flex flex-col items-start gap-1 p-4 rounded-xl border text-left transition-all"
                        style={
                          active
                            ? { backgroundColor: '#eff6ff', borderColor: '#1e40af', borderWidth: '2px' }
                            : { backgroundColor: '#f8fafc', borderColor: '#d1d5db', borderWidth: '1px' }
                        }
                      >
                        <span
                          className="font-bold text-sm"
                          style={{ color: active ? '#1e40af' : '#0f1f3d' }}
                        >
                          {LANGUAGE_LABELS[code]}
                        </span>
                        <span className="text-xs text-gray-500">
                          {code === 'en' ? t.profile_lang_desc_en : t.profile_lang_desc_af}
                        </span>
                      </button>
                    )
                  })}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingLang(false)}
                    className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                  >
                    {t.profile_cancel}
                  </button>
                  <button
                    type="button"
                    onClick={saveLang}
                    className="flex-1 font-semibold py-2.5 rounded-lg text-sm text-white transition-colors"
                    style={{ backgroundColor: '#1e40af' }}
                  >
                    {t.profile_save_changes}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Subscription card */}
        <div
          className="bg-white rounded-2xl shadow-sm p-7"
          style={{ border: '1px solid #e5e7eb' }}
        >
          <h2
            className="text-xs font-bold uppercase tracking-widest mb-5"
            style={{ color: '#6b7280' }}
          >
            {t.profile_my_subscription_heading}
          </h2>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-bold text-lg" style={{ color: '#0f1f3d' }}>
                {user.package === 'pro' ? t.profile_plan_pro : user.package === 'guided' ? t.profile_plan_guided : t.profile_plan_free}
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                {user.package === 'free' && t.profile_plan_desc_free}
                {user.package === 'pro' && t.profile_plan_desc_pro}
                {user.package === 'guided' && t.profile_plan_desc_guided}
              </p>
            </div>
            {user.package === 'free' && (
              <Link
                href="/pricing"
                className="shrink-0 text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors"
                style={{ backgroundColor: '#1e40af' }}
              >
                {t.profile_upgrade}
              </Link>
            )}
          </div>
        </div>

        {/* My Children section */}
        <div
          className="bg-white rounded-2xl shadow-sm p-7 mt-5"
          style={{ border: '1px solid #e5e7eb' }}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6b7280' }}>
              {t.profile_my_children_heading}
            </h2>
            {!addingChild && editingChildIdx === null && (
              atChildLimit ? (
                <button
                  disabled
                  title={t.profile_upgrade_family_plan_tooltip}
                  className="text-xs font-semibold opacity-40 cursor-not-allowed"
                  style={{ color: '#6b7280' }}
                >
                  {t.profile_add_child_link}
                </button>
              ) : (
                <button
                  onClick={startAddChild}
                  className="text-xs font-semibold hover:underline underline-offset-2"
                  style={{ color: '#1e40af' }}
                >
                  {t.profile_add_child_link}
                </button>
              )
            )}
          </div>

          {children.length === 0 && !addingChild && (
            <p className="text-sm text-gray-400">
              {t.profile_no_children_added}{' '}
              {!atChildLimit && (
                <button onClick={startAddChild} className="font-semibold hover:underline" style={{ color: '#1e40af' }}>
                  {t.profile_add_a_child}
                </button>
              )}
            </p>
          )}

          <div className="flex flex-col gap-3">
            {children.map((child, i) => (
              <div key={i} className="rounded-xl border p-4" style={{ borderColor: '#e5e7eb' }}>
                {editingChildIdx === i ? (
                  <div>
                    <div className="flex flex-col gap-3 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.profile_child_name_label}</label>
                        <input
                          type="text"
                          value={draftChildName}
                          onChange={e => setDraftChildName(e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.profile_grade_field_label}</label>
                        <select
                          value={draftChildGrade}
                          onChange={e => setDraftChildGrade(Number(e.target.value))}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors bg-white"
                        >
                          {GRADES.map(g => (
                            <option key={g} value={g}>{t.profile_grade_label.replace('{grade}', String(g))}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setEditingChildIdx(null)}
                        className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                      >
                        {t.profile_cancel}
                      </button>
                      <button
                        type="button"
                        onClick={saveEditChild}
                        disabled={!draftChildName.trim()}
                        className="flex-1 font-semibold py-2.5 rounded-lg text-sm text-white transition-colors disabled:opacity-40"
                        style={{ backgroundColor: '#1e40af' }}
                      >
                        {t.profile_save}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>{child.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{t.profile_grade_label.replace('{grade}', String(child.grade))}</p>
                    </div>
                    <button
                      onClick={() => startEditChild(i)}
                      className="text-xs font-semibold hover:underline underline-offset-2"
                      style={{ color: '#1e40af' }}
                    >
                      {t.profile_edit}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {atChildLimit && user.package === 'free' && !addingChild && editingChildIdx === null && (
            <div
              className="mt-4 rounded-xl border p-4"
              style={{ backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }}
            >
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                {t.profile_family_plan_upsell}
              </p>
              <Link
                href="/pricing"
                className="inline-block text-sm font-semibold px-4 py-2 rounded-lg text-white transition-colors"
                style={{ backgroundColor: '#1e40af' }}
              >
                {t.profile_upgrade}
              </Link>
            </div>
          )}

          {addingChild && (
            <div className={`${children.length > 0 ? 'mt-3' : ''} rounded-xl border p-4`} style={{ borderColor: '#e5e7eb' }}>
              {children.length > 0 && (
                <p className="text-xs font-semibold text-gray-500 mb-3">{t.profile_new_child}</p>
              )}
              <div className="flex flex-col gap-3 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.profile_child_name_label}</label>
                  <input
                    type="text"
                    value={newChildName}
                    onChange={e => setNewChildName(e.target.value)}
                    placeholder={t.profile_child_name_placeholder}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.profile_grade_field_label}</label>
                  <select
                    value={newChildGrade}
                    onChange={e => setNewChildGrade(Number(e.target.value))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors bg-white"
                  >
                    {GRADES.map(g => (
                      <option key={g} value={g}>{t.profile_grade_label.replace('{grade}', String(g))}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setAddingChild(false)}
                  className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                >
                  {t.profile_cancel}
                </button>
                <button
                  type="button"
                  onClick={saveNewChild}
                  disabled={!newChildName.trim()}
                  className="flex-1 font-semibold py-2.5 rounded-lg text-sm text-white transition-colors disabled:opacity-40"
                  style={{ backgroundColor: '#1e40af' }}
                >
                  {t.profile_add_child_submit}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Referral section */}
        {/* TODO: Re-enable subscription check before launch */}
        {/* {(user.package === 'pro' || user.package === 'guided') ? ( */}
          <div
            className="bg-white rounded-2xl shadow-sm p-7 mt-5"
            style={{ border: '1px solid #e5e7eb' }}
          >
            {/* Heading */}
            <h2 className="text-xl font-bold mb-1.5" style={{ color: '#0f1f3d' }}>
              {t.profile_referral_heading}
            </h2>
            <p className="text-sm text-gray-500 mb-7 leading-relaxed">
              {t.profile_referral_subheading}
            </p>

            {/* Sharing options card */}
            <div className="rounded-xl border mb-6" style={{ borderColor: '#e5e7eb' }}>

              {/* Referral link */}
              <div className="p-5" style={{ borderBottom: '1px solid #f3f4f6' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#6b7280' }}>
                  {t.profile_referral_link}
                </p>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ backgroundColor: '#f8fafc', border: '1px solid #e5e7eb' }}>
                  <code className="flex-1 text-sm font-mono truncate" style={{ color: '#374151' }}>
                    {refCode ? referralUrl : '—'}
                  </code>
                  <button
                    onClick={copyLink}
                    disabled={!refCode}
                    className="shrink-0 text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                    style={
                      linkCopied
                        ? { backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' }
                        : { backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }
                    }
                  >
                    {linkCopied ? t.profile_copied : t.profile_copy_link}
                  </button>
                </div>
              </div>

              {/* Referral code */}
              <div className="p-5" style={{ borderBottom: '1px solid #f3f4f6' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#6b7280' }}>
                  {t.profile_referral_code}
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="flex-1 flex items-center justify-center py-4 rounded-xl"
                    style={{ backgroundColor: '#0f1f3d' }}
                  >
                    <span
                      className="text-2xl font-bold tracking-[0.2em]"
                      style={{ color: '#ffffff', fontFamily: 'monospace' }}
                    >
                      {refCode || '——'}
                    </span>
                  </div>
                  <button
                    onClick={copyCode}
                    disabled={!refCode}
                    className="shrink-0 text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                    style={
                      codeCopied
                        ? { backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' }
                        : { backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }
                    }
                  >
                    {codeCopied ? t.profile_copied : t.profile_copy_code}
                  </button>
                </div>
              </div>

              {/* QR code */}
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#6b7280' }}>
                  {t.profile_qr_code}
                </p>
                <div className="flex items-center gap-5">
                  <div className="p-3 rounded-xl bg-white border inline-flex" style={{ borderColor: '#e5e7eb' }}>
                    {refCode ? (
                      <QRCodeCanvas
                        id="referral-qr"
                        value={`https://${referralUrl}`}
                        size={120}
                        bgColor="#ffffff"
                        fgColor="#0f1f3d"
                      />
                    ) : (
                      <div style={{ width: 120, height: 120, backgroundColor: '#f3f4f6', borderRadius: 4 }} />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-gray-500 leading-relaxed max-w-[180px]">
                      {t.profile_qr_scan_hint}
                    </p>
                    <button
                      onClick={downloadQR}
                      disabled={!refCode}
                      className="text-xs font-semibold px-4 py-2 rounded-lg transition-colors self-start"
                      style={{ backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }}
                    >
                      {t.profile_download_qr}
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Referral stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: t.profile_stat_referrals_used,   value: t.profile_stat_referrals_used_value },
                { label: t.profile_stat_referrals_remaining, value: '12'       },
                { label: t.profile_stat_total_credit,      value: 'R0'       },
                { label: t.profile_stat_months_active,     value: '0'        },
              ].map(stat => (
                <div key={stat.label} className="rounded-xl p-4 text-center" style={{ backgroundColor: '#f3f4f6' }}>
                  <p className="text-xl font-bold mb-1" style={{ color: '#0f1f3d' }}>{stat.value}</p>
                  <p className="text-xs text-gray-400 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Referral history */}
            <div className="mb-6">
              <h3 className="text-sm font-bold mb-3" style={{ color: '#0f1f3d' }}>{t.profile_referral_history_heading}</h3>
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: '#e5e7eb' }}>
                <div
                  className="hidden sm:grid px-4 py-2.5"
                  style={{
                    gridTemplateColumns: '1fr 1fr 1fr 90px',
                    gap: '8px',
                    backgroundColor: '#f9fafb',
                    borderBottom: '1px solid #f3f4f6',
                  }}
                >
                  {[t.profile_th_date, t.profile_th_friends_plan, t.profile_th_amount_credited, t.profile_th_status].map(h => (
                    <span key={h} className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#9ca3af' }}>
                      {h}
                    </span>
                  ))}
                </div>
                <div className="px-4 py-10 text-center">
                  <p className="text-sm text-gray-400">
                    {t.profile_no_referrals_yet}
                  </p>
                </div>
              </div>
            </div>

            {/* Next year preview */}
            <div
              className="rounded-xl p-4 flex items-start gap-3"
              style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#1e40af' }} aria-hidden="true">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.profile_next_year_preview}
              </p>
            </div>

          </div>
        {/* ) : (
          <div
            className="bg-white rounded-2xl shadow-sm p-7 mt-5"
            style={{ border: '1px solid #e5e7eb' }}
          >
            <h2 className="text-xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
              Refer friends, earn free months
            </h2>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">
              Upgrade to Pro or Guided to access your referral program.
            </p>
            <Link
              href="/pricing"
              className="inline-block text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors"
              style={{ backgroundColor: '#1e40af' }}
            >
              Upgrade to Pro
            </Link>
          </div>
        )} */}
      </main>
    </div>
  )
}
