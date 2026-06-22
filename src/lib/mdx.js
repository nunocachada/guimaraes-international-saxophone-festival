const NOTICIA_SLUGS = [
  'boas-vindas',
  'henk-van-twillert',
  'nicolas-arsenijevic',
  'ties-mellema',
]

async function loadEntries(directory, metaName, slugs) {
  return (
    await Promise.all(
      slugs.map(async (slug) => {
        const mod = await import(`../app/${directory}/${slug}/page.mdx`)
        const metadata = mod[metaName]

        return {
          ...metadata,
          metadata,
          href: `/${directory}/${slug}`,
        }
      }),
    )
  ).sort((a, b) => b.data.localeCompare(a.data))
}

export function carregarNoticias() {
  return loadEntries('noticias', 'noticia', NOTICIA_SLUGS)
}
