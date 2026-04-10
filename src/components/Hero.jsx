'use client'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'
import { TextRipple2 } from '@/components/ui/text-ripple-2'

import Patrocinadores from './Patrocinadores'
import { Button } from './Button'
import { useDictionary } from '@/lib/i18n/DictionaryContext'

export const Hero = () => {
  const { t: tHome } = useDictionary('home')
  const { t: tCommon } = useDictionary('common')

  return (
    <div className="relative bg-[#000000] p-0 pt-20 sm:pt-20 sm:pt-36 sm:pb-10 sm:pb-24">
      <BackgroundImage
        backgroundColor="bg-[#000000]"
        className="-top-36 -bottom-14"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-fonty">
            <span className="sr-only">{tHome('heroSrTitle')}</span>
            <div className="flex flex-col">
              <span className="text-5xl tracking-tight text-neutral-200 uppercase sm:text-7xl">
                {tHome('heroLine1')}
                <TextRipple2
                  className="my-2 block font-fonty text-6xl font-semibold text-sax-gold sm:text-9xl"
                  falloff={0.15}
                  maxScale={1.2}
                >
                  {tHome('heroSaxophone')}
                </TextRipple2>
                {tHome('heroLine2')}
              </span>
            </div>
          </h1>
          <div className="mt-6 space-y-6 font-mono text-xl leading-6 tracking-tight text-neutral-300 sm:block sm:text-2xl sm:leading-8">
            <p>{tHome('intro')}</p>
          </div>
          <Button
            href="https://www.guimaraessaxfest.com/masterclass/"
            className="mt-10 w-full bg-sax-gold font-fonty text-xl !text-white uppercase transition-all transition-colors duration-300 ease-in-out hover:bg-sax-gold-dark"
          >
            {tCommon('participar')}
          </Button>

          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 text-lg uppercase sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              [tHome('metaDateLabel'), tHome('metaDateValue')],
              [tHome('metaPlaceLabel'), tHome('metaPlaceValue')],
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
