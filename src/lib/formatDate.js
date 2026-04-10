/**
 * @param {string} dateString
 * @param {string} [locale]
 * @param {{ includeYear?: boolean }} [options] — `includeYear: false` → só dia e mês (ex.: "7 de julho")
 */
export function formatDate(dateString, locale = 'pt', options = {}) {
  const { includeYear = true } = options
  let parts = dateString.split('-')
  let hasDay = parts.length > 2
  const tag = locale === 'en' ? 'en-GB' : 'pt-PT'

  return new Date(`${dateString}Z`).toLocaleDateString(tag, {
    day: hasDay ? 'numeric' : undefined,
    month: 'long',
    year: includeYear ? 'numeric' : undefined,
    timeZone: 'Europe/Lisbon',
  })
}
