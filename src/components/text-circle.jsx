'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import saxImage from '@/images/sax.svg'
import saxCastelo from '@/images/sax-castelo.svg'

export const TextCircle = ({ text, duration = 20, className }) => {
  const letters = Array.from(text)

  return (
    <div
      className={cn(
        'relative h-[200px] w-[200px] rounded-full text-center text-2xl text-[#ffffff]',
        // text-[#4c0e40]
        className,
      )}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration,
          ease: 'linear',
        }}
        className="absolute inset-0"
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
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Image
          src={saxCastelo}
          alt="Saxophone"
          width={45}
          className="object-contain"
          unoptimized
        />
        {/* <Image
          src={saxCastelo}
          alt="Saxophone"
          width={45}
          className="object-contain"
          unoptimized
        /> */}
      </div>
    </div>
  )
}
