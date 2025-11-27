'use client'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export const TextCircle = ({ text, duration = 20, className }) => {
  const letters = Array.from(text)

  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration,
        ease: 'linear',
      }}
      className={cn(
        'relative h-[200px] w-[200px] rounded-full text-center text-2xl font-semibold text-[#A87B3F]',
        className,
      )}
    >
      {letters.map((letter, i) => {
        const angle = (360 / letters.length) * i

        const factor = Number((Math.PI / letters.length).toFixed(0))
        const x = factor * i
        const y = factor * i
        const transform = `rotateZ(${angle}deg) translate3d(${x}px, ${y}px, 0)`

        return (
          <span key={i} className="absolute inset-0" style={{ transform }}>
            {letter}
          </span>
        )
      })}
    </motion.div>
  )
}
