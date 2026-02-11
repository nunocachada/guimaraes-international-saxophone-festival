import Image from 'next/image'

import { Container } from '@/components/Container'
import logoFersanGroup from '@/images/logos/fersan-group.png'
import logoSmg from '@/images/logos/smg.png'
import logoMaferMusica from '@/images/logos/mafer-musica.svg'
import logoFundacao from '@/images/logos/fundacao.svg'
// import logoMotaEngil from '@/images/logos/mota-engil.svg'
import logoSonsDoClassico from '@/images/logos/sons-do-classico.png'
import logoYamaha from '@/images/logos/yamaha.png'
import logoDaddario from '@/images/logos/daddario.png'
import logoSelmer from '@/images/logos/selmer.svg'
import logoCardosoConceicao from '@/images/logos/cardoso-conceicao.png'
import logoBuffetCrampon from '@/images/logos/buffet-crampon.png'
import logoEsmae from '@/images/logos/esmae.png'
import logoMunicipio from '@/images/logos/municipio.svg'
// import Marquee from '@/components/ui/marquee'
import logoAmNogueira from '@/images/logos/americo-nogueira.svg'
import bg from '@/images/logos/bg.svg'
import vandoren from '@/images/logos/vandoren.svg'
import eastman from '@/images/logos/eastman2.svg'

const parceiros = [
  { name: 'Sociedade Musical de Guimarães', logo: logoSmg },
  { name: 'Municipio de Guimarães', logo: logoMunicipio },
  { name: 'Fundação Manuel António da Mota', logo: logoFundacao },
  // { name: 'Mota Engil Mecenas', logo: logoMotaEngil },
  { name: 'MaferMúsica', logo: logoMaferMusica },
  { name: 'Fersan Group', logo: logoFersanGroup },
  { name: 'Sons do Clássico', logo: logoSonsDoClassico },
  { name: 'Yamaha', logo: logoYamaha },
  { name: 'Daddario', logo: logoDaddario },
  { name: 'Selmer', logo: logoSelmer },
  { name: 'Cardoso & Conceição', logo: logoCardosoConceicao },
  { name: 'Buffet Crampon', logo: logoBuffetCrampon },
  { name: 'Esmae', logo: logoEsmae },
  { name: 'Américo Nogueira', logo: logoAmNogueira },
  { name: 'BG', logo: bg },
  { name: 'Vandoren', logo: vandoren },
  { name: 'Eastman', logo: eastman },
]

export function Parceiros() {
  return (
    <section id="parceiros" aria-label="Parceiros" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-fonty text-4xl font-medium tracking-tighter text-neutral-200 uppercase underline sm:text-6xl">
          Apoios
        </h2>
        {/* <div className="relative mx-auto mt-20 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-20 md:shadow-xl">
          <Marquee>
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
        </div> */}
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {parceiros.slice(0, 3).map((parceiro) => (
            <div
              key={parceiro.name}
              className="flex h-20 w-40 shrink-0 items-center justify-center sm:w-44"
            >
              <Image
                src={parceiro.logo}
                alt={parceiro.name}
                unoptimized
                width={176}
                height={80}
                className="h-full w-full object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </Container>
      <Container className="mt-40">
        <h2 className="mx-auto max-w-2xl text-center font-fonty text-4xl font-medium tracking-tighter text-neutral-200 uppercase underline sm:text-5xl">
          Patrocinadores
        </h2>
        {/* <div className="relative mx-auto mt-20 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-20 md:shadow-xl">
          <Marquee>
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
        </div> */}
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {parceiros.slice(3).map((parceiro) => (
            <div
              key={parceiro.name}
              className="flex h-20 w-40 shrink-0 items-center justify-center sm:w-44"
            >
              <Image
                src={parceiro.logo}
                alt={parceiro.name}
                unoptimized
                width={176}
                height={80}
                className="h-full w-full object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
