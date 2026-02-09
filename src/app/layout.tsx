import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. James R. Gordon, MD, FACS - Board-Certified Oculofacial Plastic Surgeon',
  description:
    'Nationally recognized board-certified oculofacial plastic surgeon specializing in eyelid surgery, facial rejuvenation, and medical eye care. Experience the Dr. Gordon Difference.',
  keywords: [
    'oculofacial plastic surgeon',
    'eyelid surgery',
    'blepharoplasty',
    'facial rejuvenation',
    'Dr. James Gordon',
    'medical eye care',
    'non-surgical rejuvenation',
    'injectables',
  ],
  authors: [{ name: 'Dr. James R. Gordon, MD, FACS' }],
  openGraph: {
    title: 'Dr. James R. Gordon - Board-Certified Oculofacial Plastic Surgeon',
    description:
      'Experience world-class oculofacial plastic surgery with Dr. James R. Gordon, a nationally recognized expert in eyelid surgery and facial rejuvenation.',
    url: 'https://drjamesgordon.com',
    siteName: 'Dr. James R. Gordon',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
