'use client'

import { useState } from 'react'

/**
 * Signature Treatments Grid Component
 *
 * Features:
 * - 4-card grid layout (responsive: 4 → 2 → 1)
 * - Hover reveal: Background fade + procedure list fade-in
 * - Box-shadow elevation on hover
 * - No aggressive scaling (per PRD)
 * - 0.4s smooth transitions (Dr. Kolker pattern)
 * - Burgundy accent colors
 */

interface Treatment {
  id: string
  category: string
  icon: string
  procedures: string[]
  backgroundImage: string
}

const treatments: Treatment[] = [
  {
    id: 'medical-eye-care',
    category: 'Medical Eye Care',
    icon: '👁️',
    backgroundImage: '/images/treatments/medical-eye-care.jpg',
    procedures: [
      'Comprehensive Eye Exams',
      'Dry Eye Treatment',
      'Eyelid Lesion Removal',
      'Thyroid Eye Disease',
      'Orbital Fracture Repair',
      'Tear Duct Surgery',
      'Ptosis Repair',
      'Ectropion/Entropion Repair',
      'Eyelid Trauma Reconstruction',
      'Orbital Tumors',
    ],
  },
  {
    id: 'eyelid-surgery',
    category: 'Eyelid Surgery',
    icon: '✨',
    backgroundImage: '/images/treatments/eyelid-surgery.jpg',
    procedures: [
      'Upper Blepharoplasty',
      'Lower Blepharoplasty',
      'Asian Blepharoplasty',
      'Revision Blepharoplasty',
      'Canthopexy',
      'Canthoplasty',
      'Lateral Tarsal Strip',
      'Fat Grafting',
    ],
  },
  {
    id: 'non-surgical',
    category: 'Non-Surgical Rejuvenation',
    icon: '💫',
    backgroundImage: '/images/treatments/non-surgical.jpg',
    procedures: [
      'Laser Skin Resurfacing',
      'Chemical Peels',
      'Microneedling',
      'PRP (Platelet-Rich Plasma)',
      'Hydrafacial',
      'Dermaplaning',
      'LED Light Therapy',
      'Medical-Grade Skincare',
      'Customized Treatment Plans',
    ],
  },
  {
    id: 'injectables',
    category: 'Injectables',
    icon: '💉',
    backgroundImage: '/images/treatments/injectables.jpg',
    procedures: [
      'Botox Cosmetic',
      'Dysport',
      'Juvéderm',
      'Restylane',
      'Sculptra',
      'Radiesse',
    ],
  },
]

export default function SignatureTreatments() {
  return (
    <section className="relative bg-gray-50 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="font-azosans text-4xl font-black tracking-tight text-gray-dark sm:text-5xl lg:text-6xl">
            SIGNATURE TREATMENTS
          </h2>
          <p className="mt-4 font-poppins text-lg text-gray-600 sm:text-xl">
            Comprehensive oculofacial plastic surgery and aesthetic services
          </p>
        </div>

        {/* Treatment Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="mb-6 font-poppins text-lg text-gray-600">
            Explore our full range of specialized procedures
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-burgundy px-8 py-4 font-poppins text-base font-semibold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-burgundy-light hover:shadow-xl"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

/**
 * Treatment Card Component
 * Individual card with hover reveal functionality
 */
function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-400 hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {/* Background Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Placeholder Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Decorative Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239A2E2E' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Actual background image would go here */}
        {/* <Image
          src={treatment.backgroundImage}
          alt={treatment.category}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        /> */}

        {/* Overlay - Fades in on hover */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-400 ${
            isHovered ? 'opacity-95' : 'opacity-0'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />

        {/* Default State: Category Title + Icon */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-400 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {/* Icon */}
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-burgundy/10 text-4xl backdrop-blur-sm">
            {treatment.icon}
          </div>

          {/* Category Name */}
          <h3 className="font-azosans text-2xl font-black text-white drop-shadow-lg">
            {treatment.category}
          </h3>

          {/* Hover Indicator */}
          <p className="mt-4 font-poppins text-sm font-medium text-white/80 drop-shadow">
            View Procedures →
          </p>
        </div>

        {/* Hover State: Procedure List */}
        <div
          className={`absolute inset-0 flex flex-col justify-center p-8 transition-opacity duration-400 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {/* Category Title - Small */}
          <h3 className="mb-6 border-b-2 border-burgundy pb-3 font-azosans text-xl font-black text-gray-dark">
            {treatment.category}
          </h3>

          {/* Procedure List */}
          <ul className="space-y-3 overflow-y-auto">
            {treatment.procedures.map((procedure, index) => (
              <li
                key={index}
                className="flex items-start font-poppins text-sm text-gray-700"
                style={{
                  animationDelay: `${index * 30}ms`,
                  animation: isHovered ? 'fadeInUp 0.4s ease forwards' : 'none',
                }}
              >
                <span className="mr-2 mt-1 text-burgundy">•</span>
                <span>{procedure}</span>
              </li>
            ))}
          </ul>

          {/* Learn More Link */}
          <a
            href={`#${treatment.id}`}
            className="mt-4 inline-flex items-center font-poppins text-sm font-semibold text-burgundy transition-colors hover:text-burgundy-light"
          >
            Learn More
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Burgundy Accent Line - Bottom */}
      <div
        className={`h-1 bg-burgundy transition-all duration-400 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />
    </div>
  )
}
