'use client'

import { useState, useEffect } from 'react'
import { TextCircle } from '@/components/text-circle'

const SIZE_CONFIG = {
  sm: {
    classes: 'max-h-[60px] font-sans text-[6px] uppercase',
    centerImageWidth: 27,
  },
  md: {
    classes: 'max-h-[100px] font-sans text-[8px] uppercase',
    centerImageWidth: 45,
  },
  lg: {
    classes: 'max-h-[140px] font-sans text-[10px] uppercase',
    centerImageWidth: 63,
  },
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)')
    setIsMobile(mediaQuery.matches)

    const handleChange = (e) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isMobile
}

export function Logo({
  size = 'md',
  text = 'Guimarães International Saxophone Festival * 2026 * ',
  className = '',
  linkHref,
  linkAriaLabel,
  ...props
}) {
  const isMobile = useIsMobile()
  const effectiveSize = size === 'sm-md' ? (isMobile ? 'sm' : 'md') : size
  const config = SIZE_CONFIG[effectiveSize] ?? SIZE_CONFIG.md
  const combinedClassName = [config.classes, className]
    .filter(Boolean)
    .join(' ')

  return (
    <TextCircle
      text={text}
      className={combinedClassName}
      centerImageWidth={config.centerImageWidth}
      linkHref={linkHref}
      linkAriaLabel={linkAriaLabel}
      {...props}
    />
  )
}
