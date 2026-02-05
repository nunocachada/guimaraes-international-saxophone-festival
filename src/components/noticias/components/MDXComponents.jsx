import clsx from 'clsx'

import { Blockquote } from '@/components/noticias/components/Blockquote'
import { Border } from '@/components/noticias/components/Border'
import { GrayscaleTransitionImage } from '@/components/noticias/components/GrayscaleTransitionImage'
import {
  StatList,
  StatListItem,
} from '@/components/noticias/components/StatList'
import { TagList, TagListItem } from '@/components/noticias/components/TagList'

export const MDXComponents = {
  Blockquote({ className, ...props }) {
    return <Blockquote className={clsx('my-32', className)} {...props} />
  },
  img: function Img({ className, ...props }) {
    return (
      <div
        className={clsx(
          'group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6',
          className,
        )}
      >
        <GrayscaleTransitionImage
          {...props}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="aspect-16/10 w-full object-cover"
        />
      </div>
    )
  },
  StatList({ className, ...props }) {
    return (
      <StatList className={clsx('my-32 max-w-none!', className)} {...props} />
    )
  },
  StatListItem,
  table: function Table({ className, ...props }) {
    return (
      <div
        className={clsx(
          'my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto',
          className,
        )}
      >
        <div className="max-sm:min-w-full max-sm:flex-none max-sm:px-6">
          <table {...props} />
        </div>
      </div>
    )
  },
  TagList({ className, ...props }) {
    return <TagList className={clsx('my-6', className)} {...props} />
  },
  TagListItem,
  TopTip({ children, className }) {
    return (
      <Border position="left" className={clsx('my-10 pl-8', className)}>
        <p className="font-mono text-sm font-bold tracking-widest text-sax-gold uppercase">
          Dica
        </p>
        <div className="mt-4">{children}</div>
      </Border>
    )
  },
  Typography({ className, ...props }) {
    return <div className={clsx('typography', className)} {...props} />
  },
  wrapper({ className, ...props }) {
    return (
      <div
        className={clsx(
          'font-mono text-base leading-7 text-neutral-500',
          '*:mx-auto *:max-w-3xl [&>:first-child]:mt-0! [&>:last-child]:mb-0!',
          '[&_h1]:mt-12 [&_h1]:mb-6 [&_h1]:font-syne [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:text-sax-gold [&_h1]:first:mt-0',
          '[&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-syne [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-sax-gold',
          '[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-syne [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-sax-gold',
          '[&_p]:mb-6 [&_p]:leading-7',
          '[&_ul]:mb-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6',
          '[&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6',
          '[&_li]:mb-2',
          '[&_strong]:font-semibold [&_strong]:text-neutral-400',
          '[&_a]:text-sax-gold [&_a]:underline [&_a]:hover:text-sax-gold-dark',
          className,
        )}
        {...props}
      />
    )
  },
}
