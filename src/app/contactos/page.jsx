import { Container } from '@/components/Container'
import { BackgroundImage } from '@/components/BackgroundImage'
import { getDictionary } from '@/lib/get-dictionary'
import { resolveLocale } from '@/lib/i18n/resolveLocale'

export async function generateMetadata() {
  const locale = await resolveLocale()
  const dict = await getDictionary(locale)
  const c = dict.contactos
  return {
    title: c.metadataTitle,
    description: c.metadataDescription,
  }
}

const contactos = [
  {
    kind: 'email',
    valor: 'info@guimaraessaxfest.com',
    href: 'mailto:info@guimaraessaxfest.com',
    icone: (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    kind: 'landline',
    valor: '+351 253 517 049',
    href: 'tel:+351253517049',
    icone: (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    kind: 'mobile',
    valor: '+351 969 508 075',
    href: 'tel:+351969508075',
    icone: (
      <svg
        className="size-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
]

const labelForKind = (c, kind) => {
  if (kind === 'email') {
    return c.types.email
  }
  if (kind === 'landline') {
    return c.types.landline
  }
  return c.types.mobile
}

const hintForKind = (c, kind) => {
  if (kind === 'landline') {
    return c.callLandlineHint
  }
  if (kind === 'mobile') {
    return c.callMobileHint
  }
  return null
}

export default async function Contactos() {
  const dict = await getDictionary(await resolveLocale())
  const c = dict.contactos

  return (
    <div className="relative bg-[#000000] py-20 sm:py-32">
      <BackgroundImage
        backgroundColor="bg-[#000000]"
        className="-top-36 -bottom-14"
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="text-center">
            <h1 className="font-fonty text-4xl font-bold tracking-tight text-neutral-200 uppercase sm:text-5xl lg:text-6xl">
              {c.heading}
            </h1>
            <p className="mt-6 font-mono text-xl leading-8 text-neutral-300 sm:text-2xl">
              {c.intro}
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {contactos.map((contacto) => {
              const tipoLabel = labelForKind(c, contacto.kind)
              const hint = hintForKind(c, contacto.kind)
              const Conteudo = contacto.href ? (
                <a
                  href={contacto.href}
                  className="group flex h-full w-full flex-col items-center rounded-lg bg-[#2a1f2a]/80 p-8 text-center shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm transition-all hover:bg-[#2a1f2a] hover:shadow-[#5C3A5C]/40"
                >
                  <div className="text-sax-gold transition-colors group-hover:text-[#B8860B]">
                    {contacto.icone}
                  </div>
                  <dd className="mt-2 text-base font-medium text-neutral-200">
                    {contacto.valor}
                  </dd>
                  {hint ? (
                    <span className="mt-1 font-mono text-xs text-neutral-400">
                      {hint}
                    </span>
                  ) : null}
                </a>
              ) : (
                <div className="flex h-full w-full flex-col items-center rounded-lg bg-[#2a1f2a]/80 p-8 text-center shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm">
                  <div className="text-sax-gold">{contacto.icone}</div>
                  <dt className="mt-4 font-mono text-sm font-semibold tracking-tight text-sax-gold uppercase">
                    {tipoLabel}
                  </dt>
                  <dd className="mt-2 text-base font-medium text-neutral-200">
                    {contacto.valor}
                  </dd>
                  {hint ? (
                    <span className="mt-1 font-mono text-xs text-neutral-400">
                      {hint}
                    </span>
                  ) : null}
                </div>
              )

              return (
                <dl key={contacto.kind} className="flex h-full">
                  {Conteudo}
                </dl>
              )
            })}
          </div>

          <div className="mt-20 rounded-lg bg-[#2a1f2a]/80 p-10 shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm sm:p-12">
            <h2 className="font-mono text-2xl font-semibold tracking-tight text-neutral-200 sm:text-3xl">
              {c.addressTitle}
            </h2>
            <dl className="mt-6 space-y-4">
              <div className="flex justify-between border-b border-[#5C3A5C]/20 pb-4">
                <dt className="font-mono text-sm text-sax-gold">
                  {c.venueName}
                </dt>
                <dd className="text-base text-neutral-200">{c.venueDetail}</dd>
              </div>
              <div className="flex justify-between border-b border-[#5C3A5C]/20 pb-4">
                <dt className="font-mono text-sm text-sax-gold">
                  {c.streetLabel}
                </dt>
                <dd className="text-base text-neutral-200">{c.streetValue}</dd>
              </div>
              <div className="flex justify-between border-b border-[#5C3A5C]/20 pb-4">
                <dt className="font-mono text-sm text-sax-gold">
                  {c.postalLabel}
                </dt>
                <dd className="text-base text-neutral-200">{c.postalValue}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </div>
  )
}
