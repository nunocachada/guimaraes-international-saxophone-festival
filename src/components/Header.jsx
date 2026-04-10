'use client'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import Image from 'next/image'
import saxImage from '@/images/sax.svg'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import { useDictionary } from '@/lib/i18n/DictionaryContext'

export const Header = () => {
  const { t } = useDictionary('common')

  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-col items-stretch gap-0 lg:flex-row lg:flex-nowrap lg:items-center lg:justify-between">
        <div className="-mx-4 flex flex-auto basis-full overflow-x-auto border-b border-[#5C3A5C]/10 py-4 font-mono text-xs whitespace-nowrap text-sax-gold sm:text-sm md:-mx-6 lg:order-2 lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2026-07-07">{t('headerDateRange')}</time>{' '}
              <time dateTime="2026-07-10">2026</time>
            </p>

            <Image
              src={saxImage}
              alt=""
              width={24}
              height={24}
              className="h-4 w-4 object-contain"
              unoptimized
            />
            <p>{t('conservatorio')}</p>
          </div>
        </div>
        <div className="flex w-full min-w-0 items-center justify-between gap-4 lg:contents">
          <div className="mt-6 min-w-0 shrink sm:mt-10 lg:order-1 lg:mt-0 lg:grow lg:basis-0">
            <Logo
              size="sm-md"
              text={t('logoCircleText')}
              className=""
              linkHref="/"
              linkAriaLabel={t('logoAriaHome')}
            />
          </div>
          <div className="flex shrink-0 items-center justify-end gap-3 lg:order-3 lg:grow lg:basis-0">
            <LocaleSwitcher />
            {/* <Button
            className="bg-sax-gold font-fonty text-xl !text-white uppercase transition-all transition-colors duration-300 ease-in-out hover:bg-sax-gold-dark sm:inline-flex"
            href="https://www.guimaraessaxfest.com/masterclass/"
          >
            {t('participar')}
          </Button> */}
          </div>
        </div>
      </Container>
    </header>
  )
}
