'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const titles = [
  'Ceylon',
  'Paradise Found',
  'Ancient Wonders',
  'Tropical Dreams',
  'Island of Legends',
]

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* YouTube Video Background - scaled to cover without black bars */}
        <iframe
          src="https://www.youtube.com/embed/B9wUyvZZp9c?autoplay=1&mute=1&loop=1&playlist=B9wUyvZZp9c&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Hero Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            transform: 'translate(-50%, -50%) scale(1.35)',
            pointerEvents: 'none',
            border: 'none'
          }}
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Centered Title - Slow Fade Animation */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut'
              }}
            >
              <h1
                className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight tracking-tight"
                style={{
                  textShadow: '0 4px 60px rgba(0,0,0,0.5)'
                }}
              >
                {titles[currentTitle]}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-white/80 to-transparent"
        />
      </motion.div>
    </section>
  )
}
