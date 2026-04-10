import 'server-only'

import { i18n } from '@/app/i18n-config'

const pt = {
  common: () => import('@/locales/pt/common.json').then((m) => m.default),
  rodape: () => import('@/locales/pt/rodape.json').then((m) => m.default),
  home: () => import('@/locales/pt/home.json').then((m) => m.default),
  artistas: () => import('@/locales/pt/artistas.json').then((m) => m.default),
  parceiros: () => import('@/locales/pt/parceiros.json').then((m) => m.default),
  patrocinadores: () =>
    import('@/locales/pt/patrocinadores.json').then((m) => m.default),
  newsletter: () => import('@/locales/pt/newsletter.json').then((m) => m.default),
  programa: () => import('@/locales/pt/programa.json').then((m) => m.default),
  contactos: () => import('@/locales/pt/contactos.json').then((m) => m.default),
  termos: () => import('@/locales/pt/termos.json').then((m) => m.default),
  masterclass: () =>
    import('@/locales/pt/masterclass.json').then((m) => m.default),
  noticias: () => import('@/locales/pt/noticias.json').then((m) => m.default),
  notFound: () => import('@/locales/pt/notFound.json').then((m) => m.default),
}

const en = {
  common: () => import('@/locales/en/common.json').then((m) => m.default),
  rodape: () => import('@/locales/en/rodape.json').then((m) => m.default),
  home: () => import('@/locales/en/home.json').then((m) => m.default),
  artistas: () => import('@/locales/en/artistas.json').then((m) => m.default),
  parceiros: () => import('@/locales/en/parceiros.json').then((m) => m.default),
  patrocinadores: () =>
    import('@/locales/en/patrocinadores.json').then((m) => m.default),
  newsletter: () => import('@/locales/en/newsletter.json').then((m) => m.default),
  programa: () => import('@/locales/en/programa.json').then((m) => m.default),
  contactos: () => import('@/locales/en/contactos.json').then((m) => m.default),
  termos: () => import('@/locales/en/termos.json').then((m) => m.default),
  masterclass: () =>
    import('@/locales/en/masterclass.json').then((m) => m.default),
  noticias: () => import('@/locales/en/noticias.json').then((m) => m.default),
  notFound: () => import('@/locales/en/notFound.json').then((m) => m.default),
}

const loaders = { pt, en }

export const getDictionary = async (locale) => {
  const validLocale = i18n.locales.includes(locale) ? locale : i18n.defaultLocale
  const loader = loaders[validLocale] ?? loaders.pt

  const [
    common,
    rodape,
    home,
    artistas,
    parceiros,
    patrocinadores,
    newsletter,
    programa,
    contactos,
    termos,
    masterclass,
    noticias,
    notFound,
  ] = await Promise.all([
    loader.common(),
    loader.rodape(),
    loader.home(),
    loader.artistas(),
    loader.parceiros(),
    loader.patrocinadores(),
    loader.newsletter(),
    loader.programa(),
    loader.contactos(),
    loader.termos(),
    loader.masterclass(),
    loader.noticias(),
    loader.notFound(),
  ])

  return {
    common,
    rodape,
    home,
    artistas,
    parceiros,
    patrocinadores,
    newsletter,
    programa,
    contactos,
    termos,
    masterclass,
    noticias,
    notFound,
  }
}
