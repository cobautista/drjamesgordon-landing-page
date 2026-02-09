import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        {/* Additional sections will be added here */}
      </main>
    </>
  )
}
