'use client'

import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'

/**
 * Legacy of Excellence Section
 *
 * Features:
 * - Infinite marquee carousel with Swiper.js
 * - 5 framed award/magazine covers
 * - Hover enlarge effect on individual cards
 * - Pause on hover (entire carousel)
 * - 35s scroll duration per PRD
 * - Responsive design
 */

interface Award {
  id: string
  title: string
  subtitle: string
  image: string
  alt: string
}

const awards: Award[] = [
  {
    id: 'new-york-magazine',
    title: 'New York Magazine',
    subtitle: "New York Metro's Top Doctors",
    image: '/images/awards/new-york-magazine.jpg',
    alt: 'New York Magazine - Top Doctors',
  },
  {
    id: 'best-westchester',
    title: 'Best of Westchester',
    subtitle: 'Best Cataract Surgeon',
    image: '/images/awards/best-westchester.jpg',
    alt: 'Best of Westchester - Cataract Surgeon',
  },
  {
    id: 'castle-connolly',
    title: 'Castle Connolly',
    subtitle: 'Top Doctors New York 2026',
    image: '/images/awards/castle-connolly-2026.jpg',
    alt: 'Castle Connolly Top Doctors 2026',
  },
  {
    id: 'super-doctors',
    title: 'Super Doctors',
    subtitle: 'Top New York Physicians 2025',
    image: '/images/awards/super-doctors-2025.jpg',
    alt: 'Super Doctors - Top NY Physicians 2025',
  },
  {
    id: 'westchester-magazine',
    title: 'Westchester Magazine',
    subtitle: 'Top Cosmetic Doctors',
    image: '/images/awards/westchester-magazine.jpg',
    alt: 'Westchester Magazine - Top Cosmetic Doctors',
  },
]

export default function LegacyExcellence() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (swiperRef.current) {
      if (isHovered) {
        swiperRef.current.autoplay.stop()
      } else {
        swiperRef.current.autoplay.start()
      }
    }
  }, [isHovered])

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
      {/* Background Pattern - Subtle Medical Texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239A2E2E' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-azosans text-4xl font-black tracking-tight text-gray-dark sm:text-5xl lg:text-6xl">
            A LEGACY OF EXCELLENCE
          </h2>
          <p className="mt-4 font-poppins text-xl font-medium tracking-wide text-[#C5A572] sm:text-2xl">
            RECOGNIZED BY PEERS AND PATIENTS FOR OVER 25 YEARS.
          </p>
        </div>

        {/* Marquee Carousel */}
        <div
          className="relative -mx-4 sm:-mx-6 lg:-mx-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={40}
            loop={true}
            speed={8000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false, // We handle this manually
            }}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            breakpoints={{
              320: {
                spaceBetween: 30,
              },
              640: {
                spaceBetween: 40,
              },
              1024: {
                spaceBetween: 60,
              },
            }}
            className="!overflow-visible py-8"
          >
            {/* Duplicate awards for seamless loop */}
            {[...awards, ...awards, ...awards].map((award, index) => (
              <SwiperSlide key={`${award.id}-${index}`} className="!w-auto">
                <AwardCard award={award} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Gradient Overlays for Fade Effect */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  )
}

/**
 * Award Card Component
 * Individual framed award with hover enlarge effect
 */
function AwardCard({ award }: { award: Award }) {
  return (
    <div className="group relative cursor-pointer">
      {/* Frame Container */}
      <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 ease-smooth hover:scale-105 hover:shadow-2xl">
        {/* Black Frame Border */}
        <div className="border-8 border-black p-2">
          {/* Award Image */}
          <div className="relative aspect-[3/4] w-72 overflow-hidden bg-gray-100 sm:w-80">
            {/* Placeholder for award image */}
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-8 text-center">
              <div className="mb-4 h-24 w-24 rounded-full bg-burgundy/10 p-6">
                <svg
                  className="h-full w-full text-burgundy"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <p className="font-azosans text-lg font-black text-gray-dark">
                {award.title}
              </p>
              <p className="mt-2 font-poppins text-sm font-medium text-gray-600">
                {award.subtitle}
              </p>
            </div>

            {/* Actual image would go here */}
            {/* <Image
              src={award.image}
              alt={award.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 288px, 320px"
            /> */}
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-lg bg-burgundy/5 blur-xl" />
      </div>
    </div>
  )
}
