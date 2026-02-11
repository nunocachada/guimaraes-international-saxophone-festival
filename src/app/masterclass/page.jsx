import { Container } from '@/components/Container'

export const metadata = {
  title: 'Masterclass',
  description: 'Masterclass do Guimarães International Saxophone Festival.',
}

export default function Masterclass() {
  return (
    <>
      <Container className="mt-16 mb-16 sm:mt-24 lg:mt-32">
        <div className="mb-16 text-center">
          <h1 className="font-mono text-4xl font-semibold text-sax-gold sm:text-5xl lg:text-6xl">
            Inscrições
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-mono text-lg text-neutral-500">
            Inscreva-se nas masterclasses do festival.
          </p>
        </div>
      </Container>
    </>
  )
}
