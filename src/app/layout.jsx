import { DM_Sans, Inter, Dancing_Script, Syne } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { Providers } from '@/app/providers'
import { getDictionary } from '@/lib/get-dictionary'
import { resolveLocale } from '@/lib/i18n/resolveLocale'

const saloAldo = localFont({
  src: [
    { path: '../fonts/salo-aldo.ttf', weight: '400' },
    { path: '../fonts/salo-aldo.otf', weight: '400' },
  ],
  display: 'swap',
  variable: '--font-salo-aldo',
  fallback: ['Syne', 'sans-serif'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-syne',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dancing-script',
})

export async function generateMetadata() {
  const locale = await resolveLocale()
  const dict = await getDictionary(locale)
  const m = dict.common.metadata
  const keywords = m.keywords.split(',').map((k) => k.trim())

  return {
    title: {
      template: m.titleTemplate,
      default: m.titleDefault,
    },
    description: m.description,
    images: [
      {
        url: 'https://www.guimaraessaxfest.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Guimarães International Saxophone Festival',
      },
    ],
    keywords,
    authors: [{ name: 'Guimarães Sax Fest' }],
    openGraph: {
      title: 'Guimarães International Saxophone Festival',
      description: m.ogDescription,
      url: 'https://www.guimaraessaxfest.com',
      siteName: 'Guimarães International Saxophone Festival',
      type: 'website',
      locale: m.openGraphLocale,
      images: [{ url: 'https://www.guimaraessaxfest.com/og-image.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Guimarães International Saxophone Festival',
      description: m.ogDescription,
      images: ['https://www.guimaraessaxfest.com/og-image.jpg'],
      locale: m.twitterLocale,
      type: 'website',
    },
    metadataBase: new URL('https://www.guimaraessaxfest.com'),
    alternates: {
      canonical: 'https://www.guimaraessaxfest.com',
    },

    other: {
      'apple-mobile-web-app-title': m.appleWebAppTitle,
    },
  }
}

export default async function RootLayout({ children }) {
  const locale = await resolveLocale()
  const dict = await getDictionary(locale)
  const htmlLang = locale === 'pt' ? 'pt' : 'en'

  return (
    <html
      lang={htmlLang}
      className={clsx(
        'h-full antialiased',
        inter.variable,
        dmSans.variable,
        dancingScript.variable,
        syne.variable,
        saloAldo.variable,
      )}
    >
      <body className="flex min-h-full">
        <Providers dict={dict} locale={locale}>
          <div className="flex w-full flex-col">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
