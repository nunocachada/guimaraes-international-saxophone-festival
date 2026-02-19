import React from 'react'
import Image from 'next/image'
import { ProgressiveBlur } from './ui/progressive-blur'
import { InfiniteSlider } from './ui/infinite-slider'
import { Logo } from './Logo-YGM'
import logoSmg from '@/images/logos/smg2.png'
import logoMaferMusica from '@/images/logos/mafer-musica.svg'
import logoFundacao from '@/images/logos/fundacao.svg'
// import logoMotaEngil from '@/images/logos/mota-engil.svg'
import logoSonsDoClassico from '@/images/logos/sons-do-classico.png'
import logoFersanGroup from '@/images/logos/fersan-group.png'
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
import mcostas from '@/images/logos/m-costas.svg'

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
  { name: 'MCostas', logo: mcostas },
]

function Patrocinadores() {
  return (
    <>
      <section className="overflow-hidden">
        <div className="mb-8 pt-10 font-mono">
          <div className="group relative m-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-4 hidden sm:block md:mb-0 md:max-w-44 md:border-r md:border-gray-600 md:pr-6">
                <p className="text-end text-sm text-gray-400">Apoios</p>
                <p className="text-end text-sm text-gray-400">Patrocinadores</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider durationOnHover={20} duration={40} gap={112}>
                  {parceiros.map((parceiro) => (
                    <div
                      key={parceiro.name}
                      className="flex h-12 w-28 shrink-0 items-center justify-center"
                    >
                      <Image
                        src={parceiro.logo}
                        alt={parceiro.name}
                        unoptimized
                        width={112}
                        height={48}
                        className="h-full w-full object-contain opacity-60 brightness-0 invert transition-opacity hover:opacity-100"
                      />
                    </div>
                  ))}
                </InfiniteSlider>

                <ProgressiveBlur
                  className="pointer-events-none absolute top-0 left-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute top-0 right-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Patrocinadores
