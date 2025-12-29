import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children, showFooter = false }) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      {showFooter && <Footer />}
    </>
  )
}
