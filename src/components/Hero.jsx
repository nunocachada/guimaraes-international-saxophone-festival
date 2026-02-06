import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'
import { TextRipple } from '@/components/ui/text-ripple-sax'
import { TextRipple2 } from '@/components/ui/text-ripple-2'
import { Formulario } from './Formulario'
import { ProgressiveBlur } from './ui/progressive-blur'
import { InfiniteSlider } from './ui/infinite-slider'
import { Logo } from './Logo-YGM'
import Patrocinadores from './Patrocinadores'

export function Hero() {
  return (
    <div className="relative bg-[#1a0f1a] p-0 pt-20 sm:pt-20 sm:pt-36 sm:pb-10 sm:pb-24">
      {/* <BackgroundImage className="-top-36 -bottom-14" /> */}
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-fonty">
            <span className="sr-only">
              Guimarães International Saxophone Festival -{' '}
            </span>
            <div className="flex flex-col">
              <span className="text-5xl tracking-tight text-neutral-200 uppercase sm:text-7xl">
                GUIMARÃES International
                {/* <span className="my-2 block font-mono text-5xl font-semibold text-sax-gold sm:text-7xl">
                  SAXOPHONE{' '}
                </span> */}
                {/* <TextRipple
                  className="my-2 block font-fonty text-5xl font-semibold text-sax-gold sm:text-7xl"
                  falloff={0.15}
                  maxScale={3}
                >
                  Saxophone
                </TextRipple> */}
                <TextRipple2
                  className="my-2 block font-fonty text-6xl font-semibold text-sax-gold sm:text-9xl"
                  falloff={0.15}
                  maxScale={1.2}
                >
                  SAXOPHONE
                </TextRipple2>
                Festival
              </span>
            </div>
          </h1>
          <div className="mt-6 hidden space-y-6 font-mono text-xl leading-6 tracking-tight text-neutral-300 sm:block sm:text-2xl sm:leading-8">
            {/* <p>
              Um evento único que celebra a excelência musical e reúne os
              melhores saxofonistas do mundo na histórica cidade de Guimarães.
            </p> */}
            <p>
              Durante quatro dias, desfrute de concertos, masterclasses e
              workshops com artistas de renome internacional.
            </p>
          </div>
          {/* <Button
            href="#"
            className="mt-10 w-full bg-sax-gold text-white hover:bg-sax-gold-dark sm:hidden"
          >
            Participar
          </Button> */}
          {/* <Formulario className="mt-10 sm:hidden" /> */}
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 text-lg uppercase sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              // ['Artistas', '18'],
              // ['Participantes', '500+'],

              ['Data', '7 a 10 de julho de 2026'],
              ['Local', 'Conservatório de Guimarães'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-xs text-sax-gold sm:text-sm">
                  {name}
                </dt>
                <dd className="mt-0.5 text-sm font-semibold tracking-tight text-neutral-200 sm:text-lg">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
      <Patrocinadores />
    </div>
  )
}
