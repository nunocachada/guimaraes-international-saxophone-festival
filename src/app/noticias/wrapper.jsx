import { Container } from '@/components/noticias/components/Container'
import { FadeIn } from '@/components/noticias/components/FadeIn'
import { MDXComponents } from '@/components/noticias/components/MDXComponents'
import { PageLinks } from '@/components/noticias/components/PageLinks'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'

export default async function BlogArticleWrapper({ article, children }) {
  let allArticles = await loadArticles()
  let moreArticles = allArticles
    .filter(({ metadata }) => metadata !== article)
    .slice(0, 2)

  return (
    <>
      <Container as="article" className="mt-16 sm:mt-24 lg:mt-32">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-syne text-4xl font-medium tracking-tight text-balance text-[#A87B3F] sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first font-mono text-sm text-neutral-500"
            >
              {formatDate(article.date)}
            </time>
            <p className="mt-6 font-mono text-sm font-semibold text-neutral-500">
              por {article.author.name}, {article.author.role}
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-16 sm:mt-24 lg:mt-32">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-16 sm:mt-24 lg:mt-32"
          title="Mais artigos"
          pages={moreArticles}
        />
      )}
    </>
  )
}
