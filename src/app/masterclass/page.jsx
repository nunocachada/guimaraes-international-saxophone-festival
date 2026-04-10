import { Container } from '@/components/Container'
import { getDictionary } from '@/lib/get-dictionary'
import { resolveLocale } from '@/lib/i18n/resolveLocale'

export async function generateMetadata() {
  const locale = await resolveLocale()
  const dict = await getDictionary(locale)
  const m = dict.masterclass
  return {
    title: m.metadataTitle,
    description: m.metadataDescription,
  }
}

export default async function Masterclass() {
  const dict = await getDictionary(await resolveLocale())
  const m = dict.masterclass

  return (
    <>
      <Container className="mt-16 mb-16 sm:mt-24 lg:mt-32">
        <div className="mb-16 text-center">
          <h1 className="font-mono text-4xl font-semibold text-sax-gold sm:text-5xl lg:text-6xl">
            {m.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-mono text-lg text-neutral-500">
            {m.subtitle}
          </p>
        </div>
      </Container>
    </>
  )
}
