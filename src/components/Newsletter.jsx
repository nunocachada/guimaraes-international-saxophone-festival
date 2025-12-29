import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImageCastelo from '@/images/sax.svg'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Newsletter() {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-[#2a1f2a]/60 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute top-1/2 right-0 -translate-y-1/2 object-contain opacity-20"
            src={backgroundImageCastelo}
            alt=""
            width={400}
            height={400}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-mono text-4xl font-medium tracking-tighter text-neutral-200 sm:text-5xl">
                Mantenha-se atualizado sobre o festival
              </p>
              <p className="mt-4 text-lg tracking-tight text-neutral-300">
                Receba atualizações sobre todos os nossos eventos e seja o
                primeiro a ser notificado quando as inscrições estiverem
                disponíveis.
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-neutral-200">
                Subscreva a nossa newsletter{' '}
                <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex rounded-3xl bg-[#1a0f1a] py-2.5 pr-2.5 shadow-xl shadow-[#5C3A5C]/20 focus-within:ring-2 focus-within:ring-[#A87B3F]">
                <input
                  type="email"
                  required
                  placeholder="Endereço de email"
                  aria-label="Endereço de email"
                  className="-my-2.5 flex-auto bg-transparent pr-2.5 pl-6 text-base text-neutral-200 placeholder:text-neutral-500 focus:outline-hidden"
                />
                <Button type="submit">
                  <span className="sr-only sm:not-sr-only">Subscrever</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
