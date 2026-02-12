'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Before/After Gallery Section
 *
 * Features:
 * - 4-box grid layout (2x2)
 * - Clip-path slider for before/after comparison
 * - Draggable handle for interactive reveal
 * - Real-time percentage display
 * - Touch/mouse support
 * - Responsive design
 * - Professional medical aesthetic
 */

interface BeforeAfter {
  id: string
  procedure: string
  description: string
  beforeImage: string
  afterImage: string
}

const procedures: BeforeAfter[] = [
  {
    id: '5d-eye-bag',
    procedure: '5D Eye Bag Removal',
    description: 'Advanced technique addressing all layers of under-eye concerns',
    beforeImage: '/images/before-after/5d-eye-bag-before.jpg',
    afterImage: '/images/before-after/5d-eye-bag-after.jpg',
  },
  {
    id: 'lower-eyelid',
    procedure: 'Lower Eyelid Blepharoplasty',
    description: 'Rejuvenation of the lower eyelid with natural-looking results',
    beforeImage: '/images/before-after/lower-eyelid-before.jpg',
    afterImage: '/images/before-after/lower-eyelid-after.jpg',
  },
  {
    id: 'drop-n-lift',
    procedure: "Drop n' Lift & Upneeq",
    description: 'Non-surgical ptosis correction for a refreshed appearance',
    beforeImage: '/images/before-after/drop-n-lift-before.jpg',
    afterImage: '/images/before-after/drop-n-lift-after.jpg',
  },
  {
    id: 'tear-trough',
    procedure: 'Tear Trough Filler',
    description: 'Smoothing hollowness beneath the eyes for a rested look',
    beforeImage: '/images/before-after/tear-trough-before.jpg',
    afterImage: '/images/before-after/tear-trough-after.jpg',
  },
]

export default function BeforeAfterGallery() {
  return (
    <section className="relative bg-gray-50 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-azosans text-4xl font-black tracking-tight text-gray-dark sm:text-5xl lg:text-6xl"
          >
            REAL RESULTS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-4 font-poppins text-xl text-gray-600 sm:text-2xl"
          >
            See the artistry and precision in every procedure
          </motion.p>
        </div>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {procedures.map((procedure, index) => (
            <motion.div
              key={procedure.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <BeforeAfterCard procedure={procedure} />
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-12 text-center"
        >
          <p className="font-poppins text-sm text-gray-500">
            Results may vary. Individual results are not guaranteed and may vary
            from person to person. Photos are of actual patients.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-block rounded-full bg-burgundy px-10 py-4 font-poppins text-base font-semibold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-burgundy-light hover:shadow-xl"
          >
            Schedule Your Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/**
 * Before/After Card Component
 * Individual procedure with clip-path slider
 */
function BeforeAfterCard({ procedure }: { procedure: BeforeAfter }) {
  const [slidePosition, setSlidePosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    const bounded = Math.min(Math.max(percentage, 0), 100)
    setSlidePosition(bounded)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX, e.currentTarget)
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX, e.currentTarget)
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Slider Container */}
      <div
        className="relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden bg-gray-200"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          {/* Placeholder After Image */}
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-150 to-gray-200">
            <div className="text-center">
              <div className="mb-3 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center">
                <span className="text-4xl sm:text-5xl">👁️</span>
              </div>
              <p className="font-poppins text-sm font-semibold text-gray-600">
                After
              </p>
            </div>
          </div>
          {/* Actual after image would go here */}
          {/* <Image
            src={procedure.afterImage}
            alt={`${procedure.procedure} - After`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          /> */}
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - slidePosition}% 0 0)`,
          }}
        >
          {/* Placeholder Before Image */}
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-150 to-gray-200">
            <div className="text-center">
              <div className="mb-3 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center">
                <span className="text-4xl sm:text-5xl">👁️</span>
              </div>
              <p className="font-poppins text-sm font-semibold text-gray-600">
                Before
              </p>
            </div>
          </div>
          {/* Actual before image would go here */}
          {/* <Image
            src={procedure.beforeImage}
            alt={`${procedure.procedure} - Before`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          /> */}
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{
            left: `${slidePosition}%`,
            transform: 'translateX(-50%)',
          }}
        >
          {/* Handle Circle */}
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-burgundy shadow-xl">
            {/* Left/Right Arrows */}
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        </div>

        {/* Before/After Labels */}
        <div className="pointer-events-none absolute left-4 top-4">
          <span className="rounded-md bg-black/60 px-3 py-1 font-poppins text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            Before
          </span>
        </div>
        <div className="pointer-events-none absolute right-4 top-4">
          <span className="rounded-md bg-black/60 px-3 py-1 font-poppins text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            After
          </span>
        </div>

        {/* Percentage Indicator */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-burgundy px-4 py-2 font-poppins text-xs font-bold text-white shadow-lg">
            {Math.round(slidePosition)}%
          </span>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-6">
        <h3 className="font-azosans text-xl font-black text-gray-dark sm:text-2xl">
          {procedure.procedure}
        </h3>
        <p className="mt-2 font-poppins text-sm leading-relaxed text-gray-600">
          {procedure.description}
        </p>

        {/* Drag Instruction */}
        <p className="mt-4 flex items-center gap-2 font-poppins text-xs text-gray-500">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
          <span>Drag slider to compare results</span>
        </p>
      </div>
    </div>
  )
}
