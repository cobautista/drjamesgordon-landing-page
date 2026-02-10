import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import LegacyExcellence from '@/components/LegacyExcellence'
import SignatureTreatments from '@/components/SignatureTreatments'
import ConsultationCTA from '@/components/ConsultationCTA'
import DrGordonDifference from '@/components/DrGordonDifference'
import HallmarkExcellence from '@/components/HallmarkExcellence'
import PressFeatures from '@/components/PressFeatures'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'

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
        <HallmarkExcellence />
        <PressFeatures />
        <BeforeAfterGallery />
        {/* Additional sections will be added here */}
      </main>
    </>
  )
}
