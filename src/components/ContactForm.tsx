'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'

/**
 * Contact Form Section
 *
 * Features:
 * - React Hook Form + Zod validation
 * - All required fields with error messages
 * - Client-side validation
 * - Loading state during submission
 * - Success/error feedback
 * - Private and respectful design
 * - Newsletter opt-in checkbox
 */

// Zod validation schema
const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^\d{10,15}$/, 'Phone must be 10-15 digits (numbers only)'),
  procedureOfInterest: z
    .string()
    .min(1, 'Please select a procedure of interest'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long (max 1000 characters)'),
  newsletter: z.boolean().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const procedureOptions = [
  'Medical Eye Care',
  'Eyelid Surgery',
  'Non-Surgical Rejuvenation',
  'Injectables',
  'General Inquiry',
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      newsletter: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // API call would go here
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log('Form submitted:', data)
      setSubmitStatus('success')
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 sm:py-32 lg:py-40">
      {/* Decorative Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L30 60 M0 30 L60 30' stroke='%239A2E2E' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* "Where Science Meets Art" Logo */}
            <p className="font-bhineka text-3xl italic text-burgundy sm:text-4xl">
              Where Science Meets Art
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-6 font-azosans text-4xl font-black tracking-tight text-gray-dark sm:text-5xl lg:text-6xl"
          >
            BEGIN YOUR JOURNEY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-4 font-poppins text-lg text-gray-600 sm:text-xl"
          >
            Schedule your complimentary consultation and discover how Dr. Gordon
            can help you achieve your aesthetic goals
          </motion.p>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="rounded-2xl bg-white p-8 shadow-xl sm:p-10 lg:p-12"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block font-poppins text-sm font-semibold text-gray-dark"
              >
                Full Name <span className="text-burgundy">*</span>
              </label>
              <input
                {...register('fullName')}
                type="text"
                id="fullName"
                className={`mt-2 block w-full rounded-lg border-2 px-4 py-3 font-poppins transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy/20 ${
                  errors.fullName
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-burgundy'
                }`}
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="mt-1 font-poppins text-sm text-red-600">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-poppins text-sm font-semibold text-gray-dark"
              >
                Email Address <span className="text-burgundy">*</span>
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className={`mt-2 block w-full rounded-lg border-2 px-4 py-3 font-poppins transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy/20 ${
                  errors.email
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-burgundy'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 font-poppins text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block font-poppins text-sm font-semibold text-gray-dark"
              >
                Phone Number <span className="text-burgundy">*</span>
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className={`mt-2 block w-full rounded-lg border-2 px-4 py-3 font-poppins transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy/20 ${
                  errors.phone
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-burgundy'
                }`}
                placeholder="9145551234"
              />
              {errors.phone && (
                <p className="mt-1 font-poppins text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
              <p className="mt-1 font-poppins text-xs text-gray-500">
                Numbers only, 10-15 digits
              </p>
            </div>

            {/* Procedure of Interest */}
            <div>
              <label
                htmlFor="procedureOfInterest"
                className="block font-poppins text-sm font-semibold text-gray-dark"
              >
                Procedure of Interest <span className="text-burgundy">*</span>
              </label>
              <select
                {...register('procedureOfInterest')}
                id="procedureOfInterest"
                className={`mt-2 block w-full rounded-lg border-2 px-4 py-3 font-poppins transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy/20 ${
                  errors.procedureOfInterest
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-burgundy'
                }`}
              >
                <option value="">Select a procedure</option>
                {procedureOptions.map((procedure) => (
                  <option key={procedure} value={procedure}>
                    {procedure}
                  </option>
                ))}
              </select>
              {errors.procedureOfInterest && (
                <p className="mt-1 font-poppins text-sm text-red-600">
                  {errors.procedureOfInterest.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block font-poppins text-sm font-semibold text-gray-dark"
              >
                Message <span className="text-burgundy">*</span>
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={5}
                className={`mt-2 block w-full rounded-lg border-2 px-4 py-3 font-poppins transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy/20 ${
                  errors.message
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-burgundy'
                }`}
                placeholder="Please share your aesthetic goals and any questions you have..."
              />
              {errors.message && (
                <p className="mt-1 font-poppins text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
              <p className="mt-1 font-poppins text-xs text-gray-500">
                Minimum 10 characters
              </p>
            </div>

            {/* Newsletter Checkbox */}
            <div className="flex items-start">
              <input
                {...register('newsletter')}
                type="checkbox"
                id="newsletter"
                className="mt-1 h-5 w-5 rounded border-gray-300 text-burgundy focus:ring-burgundy"
              />
              <label
                htmlFor="newsletter"
                className="ml-3 font-poppins text-sm text-gray-600"
              >
                I would like to receive news, updates, and special offers from
                Dr. Gordon's practice
              </label>
            </div>

            {/* Disclaimer */}
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="font-poppins text-xs leading-relaxed text-gray-600">
                <strong className="font-semibold">Privacy Notice:</strong> Your
                information is confidential and will only be used to contact you
                about your inquiry. Do not include sensitive medical information
                in this form. By submitting, you consent to being contacted by
                our office.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-burgundy px-8 py-4 font-poppins text-lg font-semibold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-burgundy-light hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <svg
                    className="h-5 w-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Schedule Consultation'
              )}
            </button>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="rounded-lg bg-green-50 border-2 border-green-500 p-4">
                <p className="font-poppins text-sm font-semibold text-green-800">
                  ✓ Thank you! We'll contact you within 24 hours to schedule
                  your consultation.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="rounded-lg bg-red-50 border-2 border-red-500 p-4">
                <p className="font-poppins text-sm font-semibold text-red-800">
                  ✗ Something went wrong. Please try again or call us at
                  914-820-0000.
                </p>
              </div>
            )}
          </form>

          {/* Alternative Contact */}
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p className="font-poppins text-sm text-gray-600">
              Prefer to speak with us directly?
            </p>
            <a
              href="tel:914-820-0000"
              className="mt-2 inline-flex items-center gap-2 font-poppins text-lg font-semibold text-burgundy transition-colors hover:text-burgundy-light"
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
              Call 914-820-0000
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
