import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="mt-20 flex-none py-10">
      <Container className="flex flex-col items-center justify-center font-syne">
        <div className="mb-10 flex items-center justify-center">
          <Logo className="mb-10 h-12 w-auto text-[#A87B3F]" />
        </div>
        <p className="text-center text-base text-sm text-neutral-400 md:mt-0">
          {new Date().getFullYear()} &copy; Sociedade Musical de Guimarães
        </p>
        {/* <p className="text-center text-base text-sm text-neutral-400 md:mt-0">
          Powered by{' '}
          <a
            href="https://www.linkedin.com/in/nunocachada/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 underline hover:text-neutral-300"
          >
            Sociedade Musical de Guimarães
          </a>
        </p> */}
      </Container>
    </footer>
  )
}
