import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24">
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display">
            <span className="sr-only">
              Guimarães International Saxophone Festival -{' '}
            </span>
            <div className="flex flex-col">
              <span className="text-4xl font-bold tracking-tight text-[#5C3A5C] uppercase sm:text-6xl">
                GUIMARÃES
              </span>
              <span className="text-4xl font-medium text-[#5C3A5C] sm:text-5xl">
                International
              </span>

              <span className="font-script text-5xl font-semibold text-[#A87B3F] sm:text-7xl">
                Saxophone
              </span>

              <span className="mt-1 text-4xl font-medium text-[#5C3A5C] sm:text-5xl">
                Festival
              </span>
            </div>
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-[#5C3A5C]">
            <p>Um texto bonito aqui</p>
            <p>
              Durante quatro dias, desfrute de concertos, masterclasses e
              workshops com artistas de renome internacional, numa experiência
              musical inesquecível.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Obter bilhetes
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Artistas', '18'],
              ['Participantes', '500+'],
              ['Local', 'Conservatório de Guimarães'],
              ['Data', '7 a 10 de julho de 2026'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-[#5C3A5C]">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-[#5C3A5C]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
