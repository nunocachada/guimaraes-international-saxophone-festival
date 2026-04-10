import { Container } from '@/components/noticias/components/Container'
import { FadeIn } from '@/components/noticias/components/FadeIn'
import { MDXComponents } from '@/components/noticias/components/MDXComponents'
import { PageLinks } from '@/components/noticias/components/PageLinks'
import { formatDate } from '@/lib/formatDate'
import { carregarNoticias } from '@/lib/mdx'
import { getDictionary } from '@/lib/get-dictionary'
import { resolveLocale } from '@/lib/i18n/resolveLocale'

export default async function NoticiaWrapper({ noticia, children }) {
  const locale = await resolveLocale()
  const dict = await getDictionary(locale)
  const n = dict.noticias
  let todasNoticias = await carregarNoticias()
  let maisNoticias = todasNoticias
    .filter(({ metadata }) => metadata !== noticia)
    .slice(0, 2)

  return (
    <>
      <Container as="article" className="mt-16 sm:mt-24 lg:mt-32">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-mono text-4xl font-medium tracking-tight text-balance text-sax-gold sm:text-5xl lg:text-6xl">
              {noticia.titulo}
            </h1>
            <time
              dateTime={noticia.data}
              className="order-first font-mono text-sm text-neutral-400"
            >
              {formatDate(noticia.data, locale)}
            </time>
            <p className="mt-6 font-mono text-sm font-semibold text-neutral-400">
              {n.byAuthor} {noticia.autor.nome}, {noticia.autor.cargo}
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-16 sm:mt-24 lg:mt-32">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {maisNoticias.length > 0 && (
        <PageLinks
          className="mt-16 sm:mt-24 lg:mt-32"
          title={n.moreNews}
          pages={maisNoticias}
          locale={locale}
          readMoreLabel={n.readMore}
          readMoreAriaPrefix={n.readMoreAria}
        />
      )}
    </>
  )
}
