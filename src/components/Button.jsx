import Link from 'next/link'
import clsx from 'clsx'

export function Button({ className, ...props }) {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-[#5C3A5C] p-4 text-base font-semibold text-white hover:bg-[#4A2F4A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C3A5C] active:text-white/70',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
