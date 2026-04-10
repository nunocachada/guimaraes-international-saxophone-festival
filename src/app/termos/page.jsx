import { Container } from '@/components/Container'
import { BackgroundImage } from '@/components/BackgroundImage'
import { TermosDocument } from '@/components/TermosDocument'
import { getDictionary } from '@/lib/get-dictionary'
import { resolveLocale } from '@/lib/i18n/resolveLocale'

export async function generateMetadata() {
  const locale = await resolveLocale()
  const dict = await getDictionary(locale)
  const t = dict.termos
  return {
    title: t.metadataTitle,
    description: t.metadataDescription,
  }
}

export default async function Termos() {
  const dict = await getDictionary(await resolveLocale())
  const t = dict.termos

  return (
    <div className="relative bg-[#1a0f1a] py-20 sm:py-32">
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="font-mono text-4xl font-bold tracking-tight text-neutral-200 uppercase sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 font-mono text-sm text-neutral-400">{t.updated}</p>
          </div>

          <TermosDocument data={t} />
        </div>
      </Container>
    </div>
  )
}
