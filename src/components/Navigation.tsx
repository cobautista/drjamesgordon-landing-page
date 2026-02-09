'use client'

import { useState } from 'react'
import Link from 'next/link'

/**
 * Navigation Bar Component
 *
 * Features:
 * - Fixed at top, floats over hero section
 * - Logo (left): Gordon Eye & Face
 * - Right side: Phone number, CTA button, Menu hamburger
 * - Semi-transparent background with backdrop blur
 * - Responsive design
 */

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center space-x-3 transition-opacity hover:opacity-80">
            {/* Eye Icon - Placeholder */}
            <div className="flex h-12 w-12 items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simple eye icon placeholder */}
                <ellipse cx="50" cy="50" rx="45" ry="25" stroke="#9A2E2E" strokeWidth="3" fill="none" />
                <ellipse cx="50" cy="50" rx="30" ry="15" stroke="#9A2E2E" strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="8" fill="#9A2E2E" />
                <circle cx="50" cy="50" r="4" fill="white" />
              </svg>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col leading-none">
              <span className="font-azosans text-2xl font-black tracking-tight text-burgundy">
                GORDON
              </span>
              <span className="font-poppins text-sm font-semibold tracking-wider text-[#C5A572]">
                EYE&FACE
              </span>
            </div>
          </Link>

          {/* Right Side - Desktop */}
          <div className="hidden items-center space-x-6 lg:flex">
            {/* Phone Number */}
            <a
              href="tel:914-820-0000"
              className="font-poppins text-lg font-medium text-gray-dark transition-colors hover:text-burgundy"
            >
              914-820-0000
            </a>

            {/* Book Consultation Button */}
            <Link
              href="#contact"
              className="rounded-full bg-burgundy px-8 py-3 font-poppins text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-burgundy-light hover:shadow-lg"
            >
              Book Your Consultation
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center space-x-2 font-poppins text-sm font-semibold uppercase tracking-wide text-gray-dark transition-colors hover:text-burgundy"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col space-y-1.5">
                <span className="block h-0.5 w-6 bg-gray-dark"></span>
                <span className="block h-0.5 w-6 bg-gray-dark"></span>
                <span className="block h-0.5 w-6 bg-gray-dark"></span>
              </div>
              <span>MENU</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
            {/* Phone Number - Mobile */}
            <a
              href="tel:914-820-0000"
              className="font-poppins text-base font-medium text-gray-dark"
            >
              914-820-0000
            </a>

            {/* Hamburger Menu - Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col space-y-1.5 p-2"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block h-0.5 w-6 bg-gray-dark transition-transform ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-dark transition-opacity ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-dark transition-transform ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-6">
            <Link
              href="#about"
              className="block rounded-lg px-4 py-3 font-poppins text-base font-medium text-gray-dark transition-colors hover:bg-gray-100 hover:text-burgundy"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Dr. Gordon
            </Link>
            <Link
              href="#treatments"
              className="block rounded-lg px-4 py-3 font-poppins text-base font-medium text-gray-dark transition-colors hover:bg-gray-100 hover:text-burgundy"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Signature Treatments
            </Link>
            <Link
              href="#gallery"
              className="block rounded-lg px-4 py-3 font-poppins text-base font-medium text-gray-dark transition-colors hover:bg-gray-100 hover:text-burgundy"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Before & After Gallery
            </Link>
            <Link
              href="#press"
              className="block rounded-lg px-4 py-3 font-poppins text-base font-medium text-gray-dark transition-colors hover:bg-gray-100 hover:text-burgundy"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Press & Awards
            </Link>
            <Link
              href="#contact"
              className="block rounded-lg bg-burgundy px-4 py-3 text-center font-poppins text-base font-semibold text-white transition-colors hover:bg-burgundy-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Your Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
