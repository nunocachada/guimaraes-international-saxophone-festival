import Link from 'next/link'
import clsx from 'clsx'

export function Button({ invert = false, className, children, ...props }) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 font-mono text-sm font-semibold transition',
    invert
      ? 'bg-white text-sax-gold hover:bg-neutral-100'
      : 'bg-sax-gold text-white hover:bg-sax-gold-dark',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
