'use client'

import { motion } from 'framer-motion'

/**
 * Meet Dr. Gordon Section
 *
 * Features:
 * - Professional bio and credentials
 * - Large headshot photo
 * - "Learn More" CTA button
 * - Scroll-triggered animations
 * - Clean, trustworthy design
 */

export default function MeetDrGordon() {
  return (
    <section className="relative bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative"
          >
            {/* Photo Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              {/* Placeholder for Dr. Gordon's photo */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-burgundy/10 via-gray-100 to-burgundy/5">
                <div className="text-center">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-burgundy/10 border-4 border-burgundy/20">
                      <span className="text-5xl font-bold text-burgundy">JG</span>
                    </div>
                  </div>
                  <p className="font-azosans text-xl font-black text-gray-dark">
                    Dr. James R. Gordon
                  </p>
                  <p className="mt-2 font-poppins text-sm text-gray-600">
                    MD, FACS
                  </p>
                  <p className="mt-1 font-poppins text-xs text-gray-500">
                    Professional Photo Placeholder
                  </p>
                </div>
              </div>

              {/* Actual image would go here */}
              {/* <Image
                src="/images/dr-gordon-headshot.jpg"
                alt="Dr. James R. Gordon, MD, FACS"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              /> */}

              {/* Credentials Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-4 backdrop-blur-sm shadow-lg">
                <p className="font-azosans text-lg font-black text-gray-dark">
                  James R. Gordon, MD, FACS
                </p>
                <p className="mt-1 font-poppins text-sm text-gray-600">
                  Board-Certified Oculofacial Plastic Surgeon
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-2xl bg-burgundy/5" />
          </motion.div>

          {/* Right Column - Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-col justify-center"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h2 className="font-azosans text-4xl font-black tracking-tight text-gray-dark sm:text-5xl lg:text-6xl">
                MEET DR. GORDON
              </h2>
              <div className="mt-4 h-1 w-24 bg-burgundy" />
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="mt-8 space-y-6"
            >
              <p className="font-poppins text-lg leading-relaxed text-gray-700">
                Dr. James R. Gordon is a double board-certified oculofacial
                plastic surgeon dedicated to providing exceptional, personalized
                care. With over 25 years of experience and advanced fellowship
                training from Harvard Medical School, Dr. Gordon combines
                surgical precision with an artistic eye to achieve
                natural-looking, beautiful results.
              </p>

              <p className="font-poppins text-lg leading-relaxed text-gray-700">
                Recognized nationally as a leader in his field, Dr. Gordon
                specializes in both reconstructive and aesthetic procedures of
                the eyelids, face, and surrounding areas. His patient-centered
                approach ensures every individual receives a customized
                treatment plan tailored to their unique goals and anatomy.
              </p>

              <p className="font-poppins text-lg leading-relaxed text-gray-700">
                Whether you're seeking to refresh your appearance or address a
                medical concern, Dr. Gordon's expertise and compassionate care
                will guide you through every step of your journey.
              </p>
            </motion.div>

            {/* Credentials List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="mt-10 space-y-4"
            >
              {[
                'Board-Certified, American Board of Ophthalmology',
                'Fellow, American Academy of Ophthalmology',
                'Fellow, American College of Surgeons (FACS)',
                'Harvard Medical School Graduate',
                'Member, American Society of Ophthalmic Plastic Surgery',
              ].map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-burgundy"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-poppins text-sm font-medium text-gray-700">
                    {credential}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="mt-12"
            >
              <a
                href="#about"
                className="inline-flex items-center gap-3 rounded-full border-2 border-burgundy bg-transparent px-8 py-4 font-poppins text-base font-semibold uppercase tracking-wide text-burgundy transition-all duration-300 hover:-translate-y-1 hover:bg-burgundy hover:text-white hover:shadow-xl"
              >
                <span>Learn More About Dr. Gordon</span>
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
