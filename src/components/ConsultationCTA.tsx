'use client'

import { motion } from 'framer-motion'

/**
 * Consultation CTA Section
 *
 * Features:
 * - Conversion-focused design
 * - Calm and reassuring aesthetic
 * - Prominent "Book Now" CTA button
 * - Trust-building elements
 * - Scroll-triggered animations
 * - Responsive layout
 */

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-24 sm:py-32 lg:py-40">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L50 100 M0 50 L100 50' stroke='%239A2E2E' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-azosans text-4xl font-black tracking-tight text-gray-dark sm:text-5xl lg:text-6xl"
          >
            YOUR JOURNEY TO CONFIDENCE
            <br />
            <span className="text-burgundy">STARTS HERE</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mx-auto mt-6 max-w-3xl font-poppins text-xl leading-relaxed text-gray-600 sm:text-2xl"
          >
            Experience personalized care from a nationally recognized expert in
            oculofacial plastic surgery. Dr. Gordon will create a customized
            treatment plan tailored to your unique goals.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-12 flex flex-wrap items-center justify-center gap-12 sm:gap-16"
          >
            <TrustBadge
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
              text="Board-Certified"
            />
            <TrustBadge
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              }
              text="2,000+ 5-Star Reviews"
            />
            <TrustBadge
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              text="25+ Years Experience"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8"
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-burgundy px-10 py-5 font-poppins text-lg font-semibold uppercase tracking-wide text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-burgundy-light hover:shadow-2xl"
            >
              <span>Book Your Consultation</span>
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            {/* Secondary CTA - Phone */}
            <a
              href="tel:914-820-0000"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-burgundy bg-white px-10 py-5 font-poppins text-lg font-semibold uppercase tracking-wide text-burgundy transition-all duration-300 hover:-translate-y-1 hover:border-burgundy-light hover:bg-burgundy hover:text-white hover:shadow-xl"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Call 914-820-0000</span>
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-8 font-poppins text-sm text-gray-500"
          >
            Complimentary consultations available • Flexible financing options •
            Same-week appointments
          </motion.p>
        </div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-16 border-l-4 border-burgundy bg-white/50 p-8 backdrop-blur-sm"
        >
          <p className="font-bhineka text-2xl italic text-gray-dark sm:text-3xl">
            "Every patient deserves personalized care and natural-looking
            results. Your consultation is the first step toward achieving your
            aesthetic goals with confidence."
          </p>
          <p className="mt-4 font-poppins text-sm font-semibold text-burgundy">
            — Dr. James R. Gordon, MD, FACS
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/**
 * Trust Badge Component
 * Small icon + text badge for credibility
 */
function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
        {icon}
      </div>
      <span className="font-poppins text-sm font-semibold text-gray-dark sm:text-base">
        {text}
      </span>
    </div>
  )
}
