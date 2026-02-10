import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import LegacyExcellence from '@/components/LegacyExcellence'
import SignatureTreatments from '@/components/SignatureTreatments'
import ConsultationCTA from '@/components/ConsultationCTA'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <LegacyExcellence />
        <SignatureTreatments />
        <ConsultationCTA />
        {/* Additional sections will be added here */}
      </main>
    </>
  )
}
