import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import LegacyExcellence from '@/components/LegacyExcellence'
import SignatureTreatments from '@/components/SignatureTreatments'
import ConsultationCTA from '@/components/ConsultationCTA'
import DrGordonDifference from '@/components/DrGordonDifference'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <LegacyExcellence />
        <SignatureTreatments />
        <ConsultationCTA />
        <DrGordonDifference />
        {/* Additional sections will be added here */}
      </main>
    </>
  )
}
