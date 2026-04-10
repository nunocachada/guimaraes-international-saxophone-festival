'use client'

import Image from 'next/image'

import { Container } from '@/components/Container'
import logoFersanGroup from '@/images/logos/fersan-group.png'
import logoSmg from '@/images/logos/smg.png'
import logoMaferMusica from '@/images/logos/mafer-musica.svg'
import logoFundacao from '@/images/logos/fundacao.svg'
import logoSonsDoClassico from '@/images/logos/sons-do-classico.png'
import logoYamaha from '@/images/logos/yamaha.png'
import logoDaddario from '@/images/logos/daddario.png'
import logoSelmer from '@/images/logos/selmer.svg'
import logoCardosoConceicao from '@/images/logos/cardoso-conceicao.png'
import logoBuffetCrampon from '@/images/logos/buffet-crampon.png'
import logoEsmae from '@/images/logos/esmae.png'
import logoMunicipio from '@/images/logos/municipio.svg'
import logoAmNogueira from '@/images/logos/americo-nogueira.svg'
import bg from '@/images/logos/bg.svg'
import vandoren from '@/images/logos/vandoren.svg'
import eastman from '@/images/logos/eastman2.svg'
import mcostas2 from '@/images/logos/m-costas2.svg'
import { useDictionary } from '@/lib/i18n/DictionaryContext'

const parceiros = [
  { name: 'Sociedade Musical de Guimarães', logo: logoSmg },
  { name: 'Municipio de Guimarães', logo: logoMunicipio },
  { name: 'Fundação Manuel António da Mota', logo: logoFundacao },
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
  { name: 'MCostas', logo: mcostas2 },
]

export const Parceiros = () => {
  const { t } = useDictionary('parceiros')

  return (
    <section
      id="parceiros"
      aria-label={t('aria')}
      className="bg-[#000000] py-20 sm:py-32"
    >
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-fonty text-4xl font-medium tracking-tighter text-neutral-200 uppercase underline sm:text-6xl">
          {t('supports')}
        </h2>
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
          {t('sponsors')}
        </h2>
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
