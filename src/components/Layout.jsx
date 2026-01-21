'use client'

import { usePathname } from 'next/navigation'
// import { Footer } from '@/components/Footer'
import Rodape from '@/components/Rodape'
import { Header } from '@/components/Header'

export function Layout({ children, showFooter = true }) {
  const pathname = usePathname()
  // Para retirar depois de testar
  const shouldShowFooter = showFooter && pathname !== '/asdasdasd'

  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      {shouldShowFooter && <Rodape />}
    </>
  )
}
