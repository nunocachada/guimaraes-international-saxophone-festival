import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/noticias/components/Border'
import { Button } from '@/components/noticias/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/noticias/components/FadeIn'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'

export const metadata = {
  title: 'Notícias',
  description:
    'Mantenha-se atualizado com as últimas notícias sobre o festival, concertos, masterclasses e workshops com os melhores saxofonistas do mundo.',
}

export default async function Noticias() {
  let articles = await loadArticles()

  return (
    <>
      <Container className="mt-16 sm:mt-24 lg:mt-32">
        <div className="mb-16 text-center">
          <h1 className="font-syne text-4xl font-semibold text-[#A87B3F] sm:text-5xl lg:text-6xl">
            Notícias
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-mono text-lg text-neutral-500">
            Mantenha-se atualizado com as últimas notícias sobre o festival.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {articles.map((article) => (
            <FadeIn key={article.href}>
              <article>
                <Border className="pt-12">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-syne text-2xl font-semibold text-[#A87B3F] transition-colors hover:text-[#8B6A3F]">
                        <Link href={article.href}>{article.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:top-0 lg:left-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute top-0 left-0 font-mono text-sm text-neutral-500 lg:static">
                          <time dateTime={article.date}>
                            {formatDate(article.date)}
                          </time>
                        </dd>
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                            <Image
                              alt=""
                              {...article.author.image}
                              className="h-12 w-12 object-cover grayscale"
                            />
                          </div>
                          <div className="font-mono text-sm text-neutral-500">
                            <div className="font-semibold text-neutral-400">
                              {article.author.name}
                            </div>
                            <div>{article.author.role}</div>
                          </div>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl font-mono text-base text-neutral-500">
                        {article.description}
                      </p>
                      <Button
                        href={article.href}
                        aria-label={`Read more: ${article.title}`}
                        className="mt-8"
                      >
                        Ler mais
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </>
  )
}
