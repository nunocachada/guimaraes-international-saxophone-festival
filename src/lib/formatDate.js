export function formatDate(dateString, locale = 'pt') {
  let parts = dateString.split('-')
  let hasDay = parts.length > 2
  const tag = locale === 'en' ? 'en-GB' : 'pt-PT'

  return new Date(`${dateString}Z`).toLocaleDateString(tag, {
    day: hasDay ? 'numeric' : undefined,
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Lisbon',
  })
}
