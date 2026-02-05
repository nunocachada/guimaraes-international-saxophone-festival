import clsx from 'clsx'

import { Border } from '@/components/noticias/components/Border'
import { FadeIn, FadeInStagger } from '@/components/noticias/components/FadeIn'

export function List({ children, className }) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx('font-mono text-base text-neutral-500', className)}
      >
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function ListItem({ children, title }) {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className="font-syne font-semibold text-sax-gold">{`${title}. `}</strong>
          )}
          {children}
        </Border>
      </FadeIn>
    </li>
  )
}
