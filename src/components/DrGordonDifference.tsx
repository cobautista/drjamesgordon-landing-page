'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Dr. Gordon Difference Section
 *
 * Features:
 * - Trust-focused minimalist design
 * - "Dr Gordon Difference" logo/branding
 * - "2,000+ Five-Star Reviews" headline with animated counter
 * - Clean, no-clutter aesthetic
 * - Burgundy accent colors
 * - Scroll-triggered animations
 */

export default function DrGordonDifference() {
  return (
    <section className="relative bg-white py-20 sm:py-28 lg:py-32">
      {/* Subtle Background Accent */}
      <div className="absolute left-0 right-0 top-1/2 h-1/2 -translate-y-1/2 bg-gradient-to-b from-gray-50 via-gray-50 to-transparent opacity-50" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Dr. Gordon Difference Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mb-12"
          >
            {/* Logo Placeholder - Replace with actual logo */}
            <div className="mx-auto flex max-w-2xl flex-col items-center">
              {/* "The" in script font */}
              <span className="font-bhineka text-4xl italic text-gray-600 sm:text-5xl">
                The
              </span>

              {/* "DR. GORDON" in bold */}
              <h2 className="mt-2 font-azosans text-5xl font-black tracking-tight text-gray-dark sm:text-6xl lg:text-7xl">
                DR. GORDON
              </h2>

              {/* "Difference" in script font with burgundy */}
              <span className="mt-2 font-bhineka text-5xl italic text-burgundy sm:text-6xl lg:text-7xl">
                Difference
              </span>
            </div>
          </motion.div>

          {/* Divider Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mx-auto h-0.5 w-24 bg-burgundy"
          />

          {/* Main Stat: Animated Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-12"
          >
            <AnimatedCounter />
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mx-auto mt-8 max-w-3xl font-poppins text-lg leading-relaxed text-gray-600 sm:text-xl"
          >
            Our patients consistently choose Dr. Gordon for his exceptional
            surgical skill, artistic eye, and compassionate care. Every review
            reflects our commitment to natural-looking results and personalized
            attention.
          </motion.p>

          {/* Trust Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <TrustPillar
              title="Surgical Excellence"
              description="Board-certified expertise in oculofacial plastic surgery with advanced fellowship training"
            />
            <TrustPillar
              title="Artistic Vision"
              description="Natural-looking results that enhance your unique features while maintaining facial harmony"
            />
            <TrustPillar
              title="Patient-Centered"
              description="Personalized treatment plans, attentive care, and support throughout your journey"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/**
 * Animated Counter Component
 * Counts up from 0 to 2000+ when in view
 */
function AnimatedCounter() {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const duration = 2000 // 2 seconds
    const targetCount = 2000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth acceleration/deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * targetCount)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(targetCount)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView])

  return (
    <div ref={ref} className="inline-block">
      {/* Animated Number */}
      <div className="flex items-baseline justify-center gap-2">
        <span className="font-azosans text-7xl font-black text-burgundy sm:text-8xl lg:text-9xl">
          {count.toLocaleString()}
        </span>
        <span className="font-azosans text-5xl font-black text-burgundy sm:text-6xl lg:text-7xl">
          +
        </span>
      </div>

      {/* Label */}
      <p className="mt-4 font-poppins text-2xl font-semibold text-gray-dark sm:text-3xl">
        Five-Star Reviews
      </p>

      {/* Star Rating Visual */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {[...Array(5)].map((_, index) => (
          <motion.svg
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 1.2 + index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="h-8 w-8 fill-current text-[#FFB800] sm:h-10 sm:w-10"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>

      {/* Subtext */}
      <p className="mt-4 font-poppins text-sm text-gray-500">
        Based on verified patient reviews across multiple platforms
      </p>
    </div>
  )
}

/**
 * Trust Pillar Component
 * Simple text block highlighting key differentiators
 */
function TrustPillar({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="rounded-xl bg-gray-50 p-8 transition-all duration-300 hover:bg-white hover:shadow-lg">
      <h3 className="font-azosans text-xl font-black text-gray-dark sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 font-poppins text-base leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  )
}
