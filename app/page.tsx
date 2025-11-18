'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import SectionPreviews from '@/components/section-previews'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SectionPreviews />
      <CTA />
      <Footer />
    </main>
  )
}
