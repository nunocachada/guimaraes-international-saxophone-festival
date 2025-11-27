import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import Image from 'next/image'
import saxImage from '@/images/sax.svg'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="font-syne h-12 w-auto text-[#A87B3F]" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto border-b border-[#5C3A5C]/10 py-4 font-mono text-sm whitespace-nowrap text-yellow-500 md:-mx-6 lg:order-0 lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2028-07-01">7 - 10 Julho</time>{' '}
              <time dateTime="2028-07-31">2025</time>
            </p>

            <Image
              src={saxImage}
              alt=""
              width={24}
              height={24}
              className="h-4 w-4 object-contain"
              unoptimized
            />
            <p>Conservatório de Guimarães</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#">Bilhetes</Button>
        </div>
      </Container>
    </header>
  )
}
