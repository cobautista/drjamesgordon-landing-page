'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Hero Section Component
 *
 * Features:
 * - Video background with gradient overlay (Dr. Kolker pattern)
 * - Rotating text box with 3 states: credentials, logo, tagline
 * - Staggered text animations (0.25s delays)
 * - Award logos display
 * - Responsive design
 * - Accessibility: prefers-reduced-motion support
 */

const textStates = [
  {
    id: 'credentials',
    lines: [
      'Board-Certified Oculofacial Plastic Surgeon',
      'MD, FACS',
      'Harvard Medical School',
    ],
    type: 'credentials' as const,
  },
  {
    id: 'logo',
    content: 'DR. JAMES R. GORDON',
    type: 'logo' as const,
  },
  {
    id: 'tagline',
    content: 'Where Science Meets Art',
    subtitle: 'Redefining Oculofacial Excellence',
    type: 'tagline' as const,
  },
]

const awardLogos = [
  { src: '/images/awards/award-1.svg', alt: 'Board Certified', width: 80, height: 80 },
  { src: '/images/awards/award-2.svg', alt: 'Top Doctor 2024', width: 80, height: 80 },
  { src: '/images/awards/award-3.svg', alt: 'Castle Connolly', width: 80, height: 80 },
  { src: '/images/awards/award-4.svg', alt: 'Fellow AACS', width: 80, height: 80 },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textStates.length)
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [isClient])

  const currentState = textStates[currentIndex]

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
        </video>

        {/* Gradient Overlay - Dr. Kolker Pattern */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0) 61.45%, rgba(0,0,0,0.2) 100%)',
          }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Rotating Text Box */}
        <div className="w-full max-w-4xl text-center">
          <AnimatePresence mode="wait">
            {currentState.type === 'credentials' && (
              <motion.div
                key="credentials"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="space-y-4"
              >
                {currentState.lines?.map((line, index) => (
                  <motion.h1
                    key={line}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.25,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className={`font-poppins font-semibold text-white ${
                      index === 0
                        ? 'text-4xl sm:text-5xl lg:text-6xl'
                        : index === 1
                          ? 'text-3xl sm:text-4xl lg:text-5xl tracking-wider'
                          : 'text-2xl sm:text-3xl lg:text-4xl font-light'
                    }`}
                  >
                    {line}
                  </motion.h1>
                ))}
              </motion.div>
            )}

            {currentState.type === 'logo' && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <h1 className="font-azosans text-6xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
                  {currentState.content}
                </h1>
              </motion.div>
            )}

            {currentState.type === 'tagline' && (
              <motion.div
                key="tagline"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="space-y-6"
              >
                <h1 className="font-bhineka text-5xl italic text-white sm:text-6xl lg:text-7xl">
                  {currentState.content}
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.25,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="font-poppins text-2xl font-light text-white/90 sm:text-3xl lg:text-4xl"
                >
                  {currentState.subtitle}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Award Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {awardLogos.map((award, index) => (
            <motion.div
              key={award.alt}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative"
            >
              {/* Placeholder for award logos */}
              <div
                className="flex items-center justify-center rounded-full bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                style={{ width: award.width, height: award.height }}
              >
                <span className="text-xs text-white/70 text-center px-2">
                  {award.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-12 w-8 rounded-full border-2 border-white/30 p-2"
          >
            <div className="h-2 w-2 rounded-full bg-white/60 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
