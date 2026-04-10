import { cookies } from 'next/headers'

import { i18n } from '@/app/i18n-config'

export const resolveLocale = async () => {
  const cookieStore = await cookies()
  const raw = cookieStore.get('i18next')?.value
  if (raw && i18n.locales.includes(raw)) {
    return raw
  }
  return i18n.defaultLocale
}
