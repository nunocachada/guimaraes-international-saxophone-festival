'use client'

import { usePathname } from 'next/navigation'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children, showFooter = true }) {
  const pathname = usePathname()
  const shouldShowFooter = showFooter && pathname !== '/'

  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      {shouldShowFooter && <Footer />}
    </>
  )
}
