import Image from 'next/image'

import { Container } from '@/components/Container'
import logoFersanGroup from '@/images/logos/fersan-group.png'
import logoSmg from '@/images/logos/smg.png'
import logoMaferMusica from '@/images/logos/mafer-musica.svg'
import logoFundacao from '@/images/logos/fundacao.svg'
import logoMotaEngil from '@/images/logos/mota-engil.svg'
import logoSonsDoClassico from '@/images/logos/sons-do-classico.png'

import Marquee from '@/components/ui/marquee'

const parceiros = [
  { name: 'Sociedade Musical de Guimarães', logo: logoSmg },
  { name: 'Fundação Manuel António da Mota', logo: logoFundacao },
  { name: 'Mota Engil Mecenas', logo: logoMotaEngil },
  { name: 'MaferMúsica', logo: logoMaferMusica },
  { name: 'Fersan Group', logo: logoFersanGroup },
  { name: 'Sons do Clássico', logo: logoSonsDoClassico },
]

export function Parceiros() {
  return (
    <section id="parceiros" aria-label="Parceiros" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-mono text-4xl font-medium tracking-tighter text-neutral-200 uppercase sm:text-5xl">
          Apoios
        </h2>
        <div className="relative mx-auto mt-20 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-20 md:shadow-xl">
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {parceiros.map((parceiro) => (
              <div
                key={parceiro.name}
                className="flex cursor-pointer items-center justify-center rounded-xl border p-8"
              >
                <Image
                  src={parceiro.logo}
                  alt={parceiro.name}
                  unoptimized
                  className="h-auto w-full max-w-[200px] brightness-0 invert"
                />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-background"></div>
        </div>
        {/* <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {parceiros.map((parceiro) => (
            <div
              key={parceiro.name}
              className="flex items-center justify-center"
            >
              <Image
                src={parceiro.logo}
                alt={parceiro.name}
                unoptimized
                className="h-auto w-full max-w-[200px] brightness-0 invert"
              />
            </div>
          ))}
        </div> */}
      </Container>
    </section>
  )
}
