import React from 'react'
import { motion } from 'framer-motion' // make sure you're using the right import

export function SafeColourfulText({ text, className }) {
  const colors = [
    'rgb(131, 179, 32)',
    'rgb(33, 157, 85)',
    'rgb(42, 169, 210)',
    'rgb(4, 112, 202)',
    'rgb(107, 10, 255)',
    'rgb(183, 0, 218)',
    'rgb(218, 0, 171)',
    'rgb(217, 38, 38)',
    'rgb(232, 98, 63)',
    'rgb(249, 129, 47)',
  ]

  const [hydrated, setHydrated] = React.useState(false)
  const [currentColors, setCurrentColors] = React.useState(colors)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    setHydrated(true) // Defer animation to after client load

    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5)
      setCurrentColors(shuffled)
      setCount((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!hydrated) {
    // Render static version immediately for LCP
    return (
      <span className={`${className} font-sans tracking-tight whitespace-pre`}>
        {text}
      </span>
    )
  }

  return (
    <>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${count}-${index}`}
          initial={{
            y: 0,
          }}
          animate={{
            color: currentColors[index % currentColors.length],
            y: [0, -3, 0],
            scale: [1, 1.01, 1],
            filter: ['blur(0px)', `blur(5px)`, 'blur(0px)'],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className={`${className} inline-block font-mono tracking-tight whitespace-pre`}
        >
          {char}
        </motion.span>
      ))}
    </>
  )
}
