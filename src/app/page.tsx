import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import LegacyExcellence from '@/components/LegacyExcellence'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <LegacyExcellence />
        {/* Additional sections will be added here */}
      </main>
    </>
  )
}
