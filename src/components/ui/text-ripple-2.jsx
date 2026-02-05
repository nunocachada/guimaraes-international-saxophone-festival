'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const TextRipple2 = ({
  children,
  className,
  maxScale = 2,
  falloff = 0.3,
  baseScaleX = 1,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const chars = children.split('')

  const isTargetChar = (char) => char.toUpperCase() === 'O'

  const getScaleX = (index) => {
    if (hoveredIndex === null || !isTargetChar(chars[index])) return baseScaleX
    const distance = Math.abs(index - hoveredIndex)
    return Math.max(baseScaleX, maxScale - distance * falloff)
  }

  const spring = { type: 'spring', stiffness: 400, damping: 25 }

  const isHovered = hoveredIndex !== null

  return (
    <span className={cn('relative inline text-2xl font-bold', className)}>
      {chars.map((s, index) => {
        const isO = isTargetChar(s)
        const isHoveredO = isHovered && isO && index === hoveredIndex
        const scaleX = getScaleX(index)
        const hasEffect = isHoveredO
        return (
          <motion.span
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="inline-block text-center align-baseline leading-[0.7]"
            animate={hasEffect ? { width: `${scaleX}em` } : { width: 'auto' }}
            transition={spring}
            key={`${s}-${index}`}
            role="presentation"
            aria-hidden="true"
          >
            <motion.span
              className="inline-block origin-center align-baseline"
              style={hasEffect ? { width: '1em' } : undefined}
              animate={{ scaleX: hasEffect ? scaleX : 1 }}
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
