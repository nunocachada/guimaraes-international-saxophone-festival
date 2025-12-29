import { DM_Sans, Inter, Dancing_Script, Syne } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

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

export const metadata = {
  title: {
    template: '%s - Guimarães Sax Fest',
    default: 'Guimarães International Saxophone Festival - GISF',
  },
  description:
    'Um evento único que celebra a excelência musical e reúne alguns dos melhores saxofonistas do mundo na histórica cidade de Guimarães. Durante quatro dias, desfrute de concertos, masterclasses e workshops com artistas de renome internacional.',
  images: [
    {
      url: 'https://www.guimaraessaxfest.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Guimarães International Saxophone Festival',
    },
  ],
  keywords: [
    'Guimarães',
    'Saxophone Festival',
    'Festival de Saxofone',
    'Música',
    'Concertos',
    'Masterclasses',
    'Workshops',
    'Saxofonistas',
    'Portugal',
    'Conservatório de Guimarães',
  ],
  authors: [{ name: 'Guimarães Sax Fest' }],
  openGraph: {
    title: 'Guimarães International Saxophone Festival',
    description:
      'Um evento único que celebra a excelência musical e reúne os melhores saxofonistas do mundo na histórica cidade de Guimarães.',
    url: 'https://www.guimaraessaxfest.com',
    siteName: 'Guimarães International Saxophone Festival',
    type: 'website',
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guimarães International Saxophone Festival',
    description:
      'Um evento único que celebra a excelência musical e reúne os melhores saxofonistas do mundo na histórica cidade de Guimarães.',
    locale: 'pt_PT',
    type: 'website',
  },
  metadataBase: new URL('https://www.guimaraessaxfest.com'),
  alternates: {
    canonical: 'https://www.guimaraessaxfest.com',
  },

  other: {
    'apple-mobile-web-app-title': 'Guimarães Sax Fest',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt"
      className={clsx(
        'h-full antialiased',
        inter.variable,
        dmSans.variable,
        dancingScript.variable,
        syne.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
