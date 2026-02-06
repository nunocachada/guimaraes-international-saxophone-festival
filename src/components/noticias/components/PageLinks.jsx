import Link from 'next/link'
import clsx from 'clsx'

import { Border } from '@/components/noticias/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/noticias/components/FadeIn'
import { formatDate } from '@/lib/formatDate'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

function PageLink({ page }) {
  return (
    <article key={page.href}>
      <Border
        position="left"
        className="relative flex flex-col items-start pl-8"
      >
        <h3 className="mt-6 font-mono text-base font-semibold text-sax-gold">
          {page.titulo}
        </h3>
        <time
          dateTime={page.data}
          className="order-first font-mono text-sm text-neutral-500"
        >
          {formatDate(page.data)}
        </time>
        <p className="mt-2.5 font-mono text-base text-neutral-500">
          {page.descricao}
        </p>
        <Link
          href={page.href}
          className="mt-6 flex gap-x-3 font-mono text-base font-semibold text-sax-gold transition hover:text-sax-gold-dark"
          aria-label={`Ler mais: ${page.titulo}`}
        >
          Ler mais
          <ArrowIcon className="w-6 flex-none fill-current" />
          <span className="absolute inset-0" />
        </Link>
      </Border>
    </article>
  )
}

export function PageLinks({ title, pages, intro, className }) {
  return (
    <div className={clsx('relative pt-16 sm:pt-24 lg:pt-32', className)}>
      <Container className={intro ? 'mt-16' : 'mt-12'}>
        <div className="mb-12 text-center">
          <h2 className="font-mono text-3xl font-semibold text-sax-gold sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 font-mono text-neutral-500">{intro}</p>}
        </div>
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {pages.map((page) => (
            <FadeIn key={page.href}>
              <PageLink page={page} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}
