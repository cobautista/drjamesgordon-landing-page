'use client'

import { motion } from 'framer-motion'

/**
 * Press Features Section
 *
 * Features:
 * - YouTube video embed (CBS interview)
 * - 6 magazine cover grid
 * - Hover lift animation (subtle)
 * - Light shadow on hover
 * - "Learn More" CTA
 * - Responsive layout
 */

interface PressItem {
  id: string
  title: string
  publication: string
  date: string
  image: string
  url: string
  type: 'magazine' | 'article' | 'video'
}

const pressItems: PressItem[] = [
  {
    id: 'vogue',
    title: 'The New Age of Oculofacial Surgery',
    publication: 'Vogue',
    date: 'March 2024',
    image: '/images/press/vogue.jpg',
    url: '#',
    type: 'magazine',
  },
  {
    id: 'ny-times',
    title: 'Precision in Aesthetic Medicine',
    publication: 'The New York Times',
    date: 'February 2024',
    image: '/images/press/ny-times.jpg',
    url: '#',
    type: 'article',
  },
  {
    id: 'allure',
    title: 'Top Plastic Surgeons in New York',
    publication: 'Allure',
    date: 'January 2024',
    image: '/images/press/allure.jpg',
    url: '#',
    type: 'magazine',
  },
  {
    id: 'elle',
    title: 'Natural Beauty Enhancement',
    publication: 'Elle',
    date: 'December 2023',
    image: '/images/press/elle.jpg',
    url: '#',
    type: 'magazine',
  },
  {
    id: 'harpers',
    title: 'The Art of Facial Rejuvenation',
    publication: "Harper's Bazaar",
    date: 'November 2023',
    image: '/images/press/harpers.jpg',
    url: '#',
    type: 'magazine',
  },
  {
    id: 'wsj',
    title: 'Innovation in Cosmetic Surgery',
    publication: 'Wall Street Journal',
    date: 'October 2023',
    image: '/images/press/wsj.jpg',
    url: '#',
    type: 'article',
  },
]

export default function PressFeatures() {
  return (
    <section className="relative bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-azosans text-4xl font-black tracking-tight text-gray-dark sm:text-5xl lg:text-6xl"
          >
            AS SEEN IN
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
            Featured in Leading Media & Publications
          </motion.p>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mb-16"
        >
          <div className="mx-auto max-w-4xl">
            {/* Video Container */}
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative aspect-video bg-gray-900">
                {/* YouTube Embed Placeholder */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* Play Button Placeholder */}
                  <button
                    className="group flex h-20 w-20 items-center justify-center rounded-full bg-burgundy transition-all duration-300 hover:scale-110 hover:bg-burgundy-light"
                    aria-label="Play video"
                  >
                    <svg
                      className="h-8 w-8 translate-x-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>

                  {/* Video Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="font-poppins text-sm font-medium text-white/80">
                      CBS News Interview
                    </p>
                    <h3 className="mt-1 font-azosans text-xl font-black text-white sm:text-2xl">
                      Dr. Gordon Discusses Advanced Eye Surgery Techniques
                    </h3>
                  </div>
                </div>

                {/* Actual YouTube embed would go here */}
                {/* <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="CBS Interview with Dr. Gordon"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                /> */}
              </div>
            </div>

            {/* Video Caption */}
            <p className="mt-4 text-center font-poppins text-sm text-gray-500">
              Watch Dr. Gordon's recent interview on CBS discussing the latest
              advancements in oculofacial plastic surgery
            </p>
          </div>
        </motion.div>

        {/* Magazine Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:gap-8">
            {pressItems.map((item, index) => (
              <PressCoverCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-16 text-center"
        >
          <a
            href="#press"
            className="inline-flex items-center gap-2 font-poppins text-lg font-semibold text-burgundy transition-all duration-300 hover:gap-3 hover:text-burgundy-light"
          >
            <span>View All Press Coverage</span>
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/**
 * Press Cover Card Component
 * Individual magazine cover with hover effect
 */
function PressCoverCard({
  item,
  index,
}: {
  item: PressItem
  index: number
}) {
  return (
    <motion.a
      href={item.url}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: 0.6 + index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group block cursor-pointer"
    >
      {/* Cover Container */}
      <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-400 hover:-translate-y-2 hover:shadow-xl">
        {/* Cover Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Placeholder for magazine cover */}
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
            {/* Publication Name */}
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-burgundy/10">
              <span className="font-azosans text-2xl font-black text-burgundy">
                {item.publication.charAt(0)}
              </span>
            </div>

            {/* Publication Info */}
            <p className="font-azosans text-xl font-black text-gray-dark">
              {item.publication}
            </p>
            <p className="mt-2 font-poppins text-sm text-gray-600">
              {item.date}
            </p>
            <p className="mt-4 font-poppins text-xs leading-relaxed text-gray-500">
              {item.title}
            </p>
          </div>

          {/* Actual image would go here */}
          {/* <Image
            src={item.image}
            alt={`${item.publication} - ${item.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          /> */}

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-burgundy/10 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
        </div>

        {/* Card Footer */}
        <div className="bg-white p-4">
          <p className="line-clamp-2 font-poppins text-sm font-medium text-gray-dark group-hover:text-burgundy">
            {item.title}
          </p>
          <p className="mt-1 font-poppins text-xs text-gray-500">
            {item.publication} • {item.date}
          </p>
        </div>
      </div>
    </motion.a>
  )
}
