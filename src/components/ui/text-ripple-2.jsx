'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const TextRipple2 = ({
  children,
  className,
  maxScale = 2,
  falloff = 0.3,
  baseScaleX = 1.1,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const chars = children.split('')

  const getScaleX = (index) => {
    if (hoveredIndex === null) return baseScaleX
    const distance = Math.abs(index - hoveredIndex)
    return Math.max(baseScaleX, maxScale - distance * falloff)
  }

  const spring = { type: 'spring', stiffness: 400, damping: 25 }

  return (
    <span className={cn('relative inline text-2xl font-bold', className)}>
      {chars.map((s, index) => {
        const scaleX = getScaleX(index)
        return (
          <motion.span
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="inline-block text-center align-baseline leading-[0.7]"
            animate={{ width: `${scaleX}em` }}
            transition={spring}
            key={`${s}-${index}`}
            role="presentation"
            aria-hidden="true"
          >
            <motion.span
              className="inline-block origin-center align-baseline"
              style={{ width: '1em' }}
              animate={{ scaleX }}
              transition={spring}
            >
              {s === ' ' ? '\u00A0' : s}
            </motion.span>
          </motion.span>
        )
      })}
    </span>
  )
}
