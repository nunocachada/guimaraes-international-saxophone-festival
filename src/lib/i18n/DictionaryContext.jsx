'use client'

import { createContext, useContext } from 'react'

const getNested = (obj, path) =>
  path.split('.').reduce((o, k) => o?.[k], obj)

const createT = (dict, defaultNs) => (key) => {
  let ns = defaultNs
  let path = key
  if (key.includes(':')) {
    ;[ns, path] = key.split(':')
  }
  return getNested(dict?.[ns], path) ?? key
}

const DictionaryContext = createContext(null)

export const DictionaryProvider = ({ dict, locale, children }) => {
  const value = { dict, locale }
  return (
    <DictionaryContext.Provider value={value}>{children}</DictionaryContext.Provider>
  )
}

/**
 * @param {string} defaultNs
 * @returns {{ t: (key: string) => string, locale: string }}
 */
export const useDictionary = (defaultNs = 'common') => {
  const ctx = useContext(DictionaryContext)
  if (!ctx) {
    throw new Error('useDictionary must be used within DictionaryProvider')
  }
  const { dict, locale } = ctx
  const t = createT(dict, defaultNs)
  return { t, locale }
}
