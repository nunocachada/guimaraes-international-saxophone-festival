'use client'

import { useRouter } from 'next/navigation'

import { useDictionary } from '@/lib/i18n/DictionaryContext'
import { cn } from '@/lib/utils'

const COOKIE_NAME = 'i18next'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

// Regional indicator symbols (same visual as Papanotas: PT + GB)
const LOCALES = [
  { code: 'pt', flag: String.fromCodePoint(0x1f1f5, 0x1f1f9) },
  { code: 'en', flag: String.fromCodePoint(0x1f1ec, 0x1f1e7) },
]

const setLocaleCookie = (localeCode) => {
  document.cookie = `${COOKIE_NAME}=${localeCode}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`
}

export const LocaleSwitcher = ({ className }) => {
  const router = useRouter()
  const { locale, t } = useDictionary('common')
  const safeLocale = LOCALES.some((l) => l.code === locale)
    ? locale
    : LOCALES[0].code

  const handleChange = (e) => {
    const next = e.target.value
    setLocaleCookie(next)
    router.refresh()
  }

  return (
    <div className={cn('min-w-0 max-w-[3.25rem] shrink-0', className)}>
      <label htmlFor="locale-switcher" className="sr-only">
        {t('language.choose')}
      </label>
      <select
        id="locale-switcher"
        value={safeLocale}
        onChange={handleChange}
        title={`${t('language.choose')}: ${t(`language.${safeLocale}`)}`}
        aria-label={`${t('language.choose')}: ${t(`language.${safeLocale}`)}`}
        className="max-w-[3.25rem] cursor-pointer rounded-md border border-[#5C3A5C]/30 bg-[#1a0f1a]/80 py-1.5 text-center text-lg leading-none focus:ring-2 focus:ring-sax-gold focus:outline-none"
      >
        {LOCALES.map((l) => (
          <option key={l.code} value={l.code}>
            {l.flag}
          </option>
        ))}
      </select>
    </div>
  )
}
