import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="flex-none py-10">
      <Container className="flex flex-col items-center justify-center">
        <div className="mb-10 flex items-center justify-center">
          <Logo className="mb-10 h-12 w-auto text-[#A87B3F]" />
        </div>
        <p className="mt- text-center text-base text-sm text-neutral-400 md:mt-0">
          {new Date().getFullYear()} &copy; Festival Internacional de Saxofone
          de Guimarães. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  )
}
