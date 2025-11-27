import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24">
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-syne">
            <span className="sr-only">
              Guimarães International Saxophone Festival -{' '}
            </span>
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight text-slate-200 uppercase sm:text-5xl">
                GUIMARÃES International
                <span className="my-2 block font-syne text-5xl font-semibold text-[#A87B3F] sm:text-7xl">
                  SAXOPHONE{' '}
                </span>
                Festival
              </span>
            </div>
          </h1>
          <div className="mt-6 space-y-6 font-syne text-2xl tracking-tight text-slate-300">
            <p>
              Um evento único que celebra a excelência musical e reúne os
              melhores saxofonistas do mundo na histórica cidade de Guimarães.
            </p>
            <p>
              Durante quatro dias, desfrute de concertos, masterclasses e
              workshops com artistas de renome internacional, numa experiência
              musical inesquecível.
            </p>
          </div>
          <Button
            href="#"
            className="mt-10 w-full bg-[#A87B3F] text-white hover:bg-[#8B6A3F] sm:hidden"
            variant="outline"
          >
            Participar
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Artistas', '18'],
              ['Participantes', '500+'],
              ['Local', 'Conservatório de Guimarães'],
              ['Data', '7 a 10 de julho de 2026'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-slate-400">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-slate-200">
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
