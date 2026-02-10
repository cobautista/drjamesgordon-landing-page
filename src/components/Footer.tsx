/**
 * Footer Component
 *
 * Features:
 * - Practice information and contact details
 * - Quick links navigation
 * - Social media links
 * - Office hours
 * - Copyright and legal links
 * - Professional medical design
 */

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-dark text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Practice Info */}
          <div>
            <div className="mb-6">
              {/* Logo */}
              <h3 className="font-azosans text-2xl font-black text-white">
                GORDON
              </h3>
              <p className="font-poppins text-sm font-semibold tracking-wider text-[#C5A572]">
                EYE&FACE
              </p>
            </div>
            <p className="font-poppins text-sm leading-relaxed text-gray-300">
              Board-certified oculofacial plastic surgeon providing exceptional,
              personalized care with over 25 years of experience.
            </p>
            <p className="mt-4 font-bhineka text-lg italic text-[#C5A572]">
              Where Science Meets Art
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-6 font-azosans text-lg font-black uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Dr. Gordon', href: '#about' },
                { label: 'Procedures', href: '#treatments' },
                { label: 'Before & After', href: '#gallery' },
                { label: 'Press & Media', href: '#press' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-poppins text-sm text-gray-300 transition-colors hover:text-burgundy-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Procedures */}
          <div>
            <h4 className="mb-6 font-azosans text-lg font-black uppercase tracking-wide text-white">
              Procedures
            </h4>
            <ul className="space-y-3">
              {[
                'Medical Eye Care',
                'Eyelid Surgery',
                'Non-Surgical Rejuvenation',
                'Injectables',
                'Facial Rejuvenation',
              ].map((procedure) => (
                <li key={procedure}>
                  <a
                    href="#treatments"
                    className="font-poppins text-sm text-gray-300 transition-colors hover:text-burgundy-light"
                  >
                    {procedure}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="mb-6 font-azosans text-lg font-black uppercase tracking-wide text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              {/* Phone */}
              <li>
                <a
                  href="tel:914-820-0000"
                  className="group flex items-start gap-3"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-burgundy-light"
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
                  <span className="font-poppins text-sm text-gray-300 group-hover:text-burgundy-light">
                    914-820-0000
                  </span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:office@drjamesgordon.com"
                  className="group flex items-start gap-3"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-burgundy-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-poppins text-sm text-gray-300 group-hover:text-burgundy-light">
                    office@drjamesgordon.com
                  </span>
                </a>
              </li>

              {/* Address */}
              <li>
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-burgundy-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-poppins text-sm text-gray-300">
                    New York, NY
                    <br />
                    (Address details)
                  </span>
                </div>
              </li>

              {/* Office Hours */}
              <li>
                <div className="mt-4 rounded-lg border border-gray-600 bg-gray-800 p-4">
                  <p className="mb-2 font-poppins text-xs font-semibold uppercase tracking-wide text-burgundy-light">
                    Office Hours
                  </p>
                  <p className="font-poppins text-xs text-gray-300">
                    Mon-Fri: 9:00 AM - 5:00 PM
                    <br />
                    Sat-Sun: Closed
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 border-t border-gray-600 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { name: 'Facebook', href: '#', icon: 'facebook' },
                { name: 'Instagram', href: '#', icon: 'instagram' },
                { name: 'LinkedIn', href: '#', icon: 'linkedin' },
                { name: 'YouTube', href: '#', icon: 'youtube' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition-all duration-300 hover:border-burgundy-light hover:bg-burgundy-light"
                  aria-label={social.name}
                >
                  <span className="font-poppins text-xs font-semibold">
                    {social.icon.charAt(0).toUpperCase()}
                  </span>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="text-center sm:text-right">
              <p className="font-poppins text-sm text-gray-300">
                Stay updated with the latest news and offers
              </p>
              <a
                href="#contact"
                className="mt-2 inline-block font-poppins text-sm font-semibold text-burgundy-light hover:text-burgundy"
              >
                Subscribe to Newsletter →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            {/* Copyright */}
            <p className="font-poppins text-sm text-gray-400">
              © {currentYear} Dr. James R. Gordon, MD, FACS. All rights
              reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: 'Privacy Policy', href: '#privacy' },
                { label: 'Terms of Service', href: '#terms' },
                { label: 'HIPAA Notice', href: '#hipaa' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-poppins text-sm text-gray-400 transition-colors hover:text-burgundy-light"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 font-poppins text-xs leading-relaxed text-gray-500">
            The information on this website is for general educational purposes
            only and does not constitute medical advice. Individual results may
            vary. Consult with Dr. Gordon for personalized treatment
            recommendations.
          </p>
        </div>
      </div>
    </footer>
  )
}
