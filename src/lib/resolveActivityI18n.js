/**
 * Resolve activity copy: English from `artistas.activities.*` in locale files;
 * Portuguese (or missing keys) falls back to data from `artistasData`.
 *
 * @param {(key: string) => string} t - `useDictionary('artistas').t`
 * @param {string} [i18nKey]
 * @param {string} field - e.g. title, subtitle, description, location, schedule, moreInfo, programDescription
 * @param {string | null | undefined} fallback
 * @returns {string | null | undefined}
 */
export const resolveActivityI18n = (t, i18nKey, field, fallback) => {
  if (!i18nKey) return fallback
  const path = `activities.${i18nKey}.${field}`
  const value = t(path)
  if (value !== path) return value
  return fallback
}

/**
 * @param {(key: string) => string} t - `useDictionary('artistas').t`
 * @param {string} scope - e.g. `artists`
 * @param {string} [id]
 * @param {string} field
 * @param {string | null | undefined} fallback
 */
export const resolveByScope = (t, scope, id, field, fallback) => {
  if (!id) return fallback
  const path = `${scope}.${id}.${field}`
  const value = t(path)
  if (value !== path) return value
  return fallback
}
