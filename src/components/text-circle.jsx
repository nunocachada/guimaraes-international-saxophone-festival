'use client'

import { useState, useEffect, useRef } from 'react'
import {
  motion,
  animate,
  useMotionValue,
  useMotionValueEvent,
  useAnimationFrame,
} from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import saxCastelo from '@/images/sax-castelo.svg'

const DEFAULT_CENTER_IMAGE_WIDTH = 45
const HOVER_SPEED_FACTOR = 0.08
const SPEED_TRANSITION_DURATION_MS = 500
const SPEED_TRANSITION_EASE = [0.4, 0, 0.2, 1]

export const TextCircle = ({
  text,
  duration = 20,
  className,
  centerImageWidth = DEFAULT_CENTER_IMAGE_WIDTH,
  animateOnHover = true,
  linkHref,
  linkAriaLabel,
}) => {
  const letters = Array.from(text)
  const [currentDuration, setCurrentDuration] = useState(duration)
  const currentDurationRef = useRef(duration)
  const speedFactor = useMotionValue(1)
  const rotation = useMotionValue(0)

  useMotionValueEvent(speedFactor, 'change', (latest) => {
    const next = duration * latest
    setCurrentDuration(next)
    currentDurationRef.current = next
  })

  useEffect(() => {
    setCurrentDuration(duration)
    currentDurationRef.current = duration
    speedFactor.set(1)
  }, [duration])

  useAnimationFrame((_time, delta) => {
    const dur = currentDurationRef.current
    if (dur <= 0) return
    const degreesPerMs = 360 / (dur * 1000)
    rotation.set((rotation.get() + delta * degreesPerMs) % 360)
  })

  const handleMouseEnter = () => {
    if (!animateOnHover) return
    animate(speedFactor, HOVER_SPEED_FACTOR, {
      duration: SPEED_TRANSITION_DURATION_MS / 1000,
      ease: SPEED_TRANSITION_EASE,
    })
  }

  const handleMouseLeave = () => {
    if (!animateOnHover) return
    animate(speedFactor, 1, {
      duration: SPEED_TRANSITION_DURATION_MS / 1000,
      ease: SPEED_TRANSITION_EASE,
    })
  }

  return (
    <div
      role="img"
      aria-label={text}
      className={cn(
        'relative h-[200px] w-[200px] rounded-full text-center text-2xl text-[#ffffff]',
        className,
      )}
    >
      <motion.div className="absolute inset-0" style={{ rotate: rotation }}>
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
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div
          role={animateOnHover && !linkHref ? 'button' : undefined}
          tabIndex={animateOnHover && !linkHref ? 0 : undefined}
          aria-label={
            animateOnHover && !linkHref ? 'Speed up animation' : undefined
          }
          className="pointer-events-auto flex cursor-default items-center justify-center"
          style={{ width: centerImageWidth, height: centerImageWidth }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={animateOnHover ? handleMouseEnter : undefined}
          onBlur={animateOnHover ? handleMouseLeave : undefined}
        >
          {linkHref ? (
            <Link
              href={linkHref}
              className="inline-block rounded-sm transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sax-gold focus-visible:ring-offset-2"
              aria-label={linkAriaLabel ?? 'Página inicial'}
            >
              <Image
                src={saxCastelo}
                alt=""
                width={centerImageWidth}
                height={centerImageWidth}
                className="object-contain"
                unoptimized
              />
            </Link>
          ) : (
            <Image
              src={saxCastelo}
              alt="Saxophone"
              width={centerImageWidth}
              height={centerImageWidth}
              className="object-contain"
              unoptimized
            />
          )}
        </div>
      </div>
    </div>
  )
}
