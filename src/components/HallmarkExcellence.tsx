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
 * Hallmark of Excellence Section
 *
 * Features:
 * - Infinite marquee with accreditation logos
 * - Right-to-left continuous scroll
 * - Pause on hover
 * - 10 professional accreditation logos
 * - Clean, trust-focused design
 * - Responsive layout
 */

interface Accreditation {
  id: string
  name: string
  abbreviation: string
  logo: string
  description: string
}

const accreditations: Accreditation[] = [
  {
    id: 'abos',
    name: 'American Board of Ophthalmology',
    abbreviation: 'ABO',
    logo: '/images/accreditations/abos.svg',
    description: 'Board Certified in Ophthalmology',
  },
  {
    id: 'abfprs',
    name: 'American Board of Facial Plastic and Reconstructive Surgery',
    abbreviation: 'ABFPRS',
    logo: '/images/accreditations/abfprs.svg',
    description: 'Board Certified Facial Plastic Surgery',
  },
  {
    id: 'asoprs',
    name: 'American Society of Ophthalmic Plastic and Reconstructive Surgery',
    abbreviation: 'ASOPRS',
    logo: '/images/accreditations/asoprs.svg',
    description: 'Member of ASOPRS',
  },
  {
    id: 'aao',
    name: 'American Academy of Ophthalmology',
    abbreviation: 'AAO',
    logo: '/images/accreditations/aao.svg',
    description: 'Fellow of AAO',
  },
  {
    id: 'acs',
    name: 'American College of Surgeons',
    abbreviation: 'FACS',
    logo: '/images/accreditations/acs.svg',
    description: 'Fellow of ACS',
  },
  {
    id: 'aafprs',
    name: 'American Academy of Facial Plastic and Reconstructive Surgery',
    abbreviation: 'AAFPRS',
    logo: '/images/accreditations/aafprs.svg',
    description: 'Member of AAFPRS',
  },
  {
    id: 'nybos',
    name: 'New York Board of Ophthalmology',
    abbreviation: 'NYBO',
    logo: '/images/accreditations/nybos.svg',
    description: 'New York State Licensed',
  },
  {
    id: 'castle-connolly',
    name: 'Castle Connolly Top Doctors',
    abbreviation: 'Castle Connolly',
    logo: '/images/accreditations/castle-connolly.svg',
    description: 'Top Doctor Recognition',
  },
  {
    id: 'super-doctors',
    name: 'Super Doctors',
    abbreviation: 'Super Doctors',
    logo: '/images/accreditations/super-doctors.svg',
    description: 'Super Doctor Recognition',
  },
  {
    id: 'harvard',
    name: 'Harvard Medical School',
    abbreviation: 'HMS',
    logo: '/images/accreditations/harvard.svg',
    description: 'Harvard Medical School Graduate',
  },
]

export default function HallmarkExcellence() {
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
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-28 lg:py-32">
      {/* Decorative Background Lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #9A2E2E 1px, transparent 1px), linear-gradient(to bottom, #9A2E2E 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-azosans text-4xl font-black tracking-tight text-gray-dark sm:text-5xl lg:text-6xl">
            A HALLMARK OF EXCELLENCE
          </h2>
          <p className="mt-4 font-poppins text-xl text-gray-600 sm:text-2xl">
            Recognized by Leading Medical Organizations
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
            spaceBetween={60}
            loop={true}
            speed={10000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true, // Right-to-left scroll
              pauseOnMouseEnter: false,
            }}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            breakpoints={{
              320: {
                spaceBetween: 40,
              },
              640: {
                spaceBetween: 50,
              },
              1024: {
                spaceBetween: 60,
              },
            }}
            className="!overflow-visible py-8"
          >
            {/* Triple duplication for seamless loop */}
            {[...accreditations, ...accreditations, ...accreditations].map(
              (accreditation, index) => (
                <SwiperSlide key={`${accreditation.id}-${index}`} className="!w-auto">
                  <AccreditationLogo accreditation={accreditation} />
                </SwiperSlide>
              )
            )}
          </Swiper>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent" />
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="font-poppins text-base text-gray-500">
            Board-certified and recognized by the most prestigious medical
            organizations in oculofacial plastic surgery
          </p>
        </div>
      </div>
    </section>
  )
}

/**
 * Accreditation Logo Component
 * Individual logo with hover effect
 */
function AccreditationLogo({
  accreditation,
}: {
  accreditation: Accreditation
}) {
  return (
    <div className="group relative cursor-pointer">
      {/* Logo Container */}
      <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-white p-6 shadow-md transition-all duration-400 hover:scale-110 hover:shadow-xl sm:h-36 sm:w-36">
        {/* Placeholder Logo */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo Circle */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-burgundy/10">
            <span className="font-azosans text-xl font-black text-burgundy">
              {accreditation.abbreviation}
            </span>
          </div>

          {/* Logo Name */}
          <p className="mt-3 font-poppins text-xs font-semibold text-gray-600">
            {accreditation.abbreviation}
          </p>
        </div>

        {/* Actual logo would go here */}
        {/* <Image
          src={accreditation.logo}
          alt={accreditation.name}
          width={120}
          height={120}
          className="object-contain"
        /> */}
      </div>

      {/* Tooltip on Hover */}
      <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="whitespace-nowrap rounded-lg bg-gray-dark px-4 py-2 text-sm font-medium text-white shadow-lg">
          <p className="font-poppins">{accreditation.name}</p>
          <p className="mt-1 text-xs text-gray-300">
            {accreditation.description}
          </p>
          {/* Tooltip Arrow */}
          <div className="absolute left-1/2 top-0 -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-dark" />
        </div>
      </div>
    </div>
  )
}
