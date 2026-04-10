import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { getDictionary } from '@/lib/get-dictionary'
import { resolveLocale } from '@/lib/i18n/resolveLocale'

export default async function NotFound() {
  const locale = await resolveLocale()
  const dict = await getDictionary(locale)
  const n = dict.notFound

  return (
    <Layout showFooter={false}>
      <div className="relative flex h-full items-center py-20 sm:py-36">
        <BackgroundImage className="-top-36 bottom-0" />
        <Container className="relative flex w-full flex-col items-center">
          <p className="font-mono text-2xl tracking-tight text-neutral-300">
            {n.code}
          </p>
          <h1 className="mt-4 font-mono text-4xl font-medium tracking-tighter text-neutral-200 sm:text-5xl">
            {n.title}
          </h1>
          <p className="mt-4 text-lg tracking-tight text-neutral-300">
            {n.description}
          </p>
          <Button href="/" className="mt-8">
            {n.home}
          </Button>
        </Container>
      </div>
    </Layout>
  )
}
