'use client'

import { DictionaryProvider } from '@/lib/i18n/DictionaryContext'

export const Providers = ({ children, dict, locale }) => {
  return (
    <DictionaryProvider dict={dict} locale={locale}>
      {children}
    </DictionaryProvider>
  )
}
