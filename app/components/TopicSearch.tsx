'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { getTopics } from '@/src/data/topic-registry'
import { useTranslations } from '@/src/i18n/useTranslations'

type SearchHit = { grade: string; slug: string; name: string }

const GRADES = ['4', '5', '6', '7', '8', '9', '10', '11', '12']

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
}

export default function TopicSearch({ language }: { language: 'en' | 'af' }) {
  const t = useTranslations()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  // Flattened once per language change — every grade's topics, searchable by name or grade.
  const allTopics = useMemo<SearchHit[]>(() => {
    return GRADES.flatMap(grade =>
      getTopics(grade, language).map(topic => ({ grade, slug: topic.slug, name: topic.name }))
    )
  }, [language])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return allTopics
      .filter(hit => hit.name.toLowerCase().includes(q) || hit.grade === q || `grade ${hit.grade}`.includes(q))
      .slice(0, 8)
  }, [query, allTopics])

  // Same click-outside-closes pattern as the sidebar and NavAuth dropdown.
  useEffect(() => {
    if (!open) return
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  return (
    <div ref={rootRef} className="relative w-full max-w-xs">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          placeholder={t.nav_search_placeholder}
          aria-label={t.nav_search_placeholder}
          className="w-full border rounded-full pl-9 pr-4 py-2 text-sm outline-none transition-colors focus:border-[#1e40af]"
          style={{ borderColor: '#e5e7eb', backgroundColor: '#f9fafb', color: '#0f1f3d' }}
        />
      </div>

      {open && query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden z-10">
          {results.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto py-1">
              {results.map(hit => (
                <li key={`${hit.grade}-${hit.slug}`}>
                  <Link
                    href={`/grade/${hit.grade}/${hit.slug}`}
                    onClick={() => { setOpen(false); setQuery('') }}
                    className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors"
                  >
                    <span className="truncate" style={{ color: '#0f1f3d' }}>{hit.name}</span>
                    <span className="shrink-0 text-xs font-medium text-gray-400">
                      {t.grade_heading.replace('{grade}', hit.grade)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-gray-500">{t.nav_search_no_results}</p>
          )}
        </div>
      )}
    </div>
  )
}
