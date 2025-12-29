import { MDXComponents } from '@/components/noticias/components/MDXComponents'

export function useMDXComponents(components) {
  return {
    ...components,
    ...MDXComponents,
  }
}
