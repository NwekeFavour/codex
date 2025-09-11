import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services"
import Footer from "@/components/footer"
import StatsSection from "@/components/stats-section"
import ProcessSection from "@/components/process"
import TestimonialsSection from "@/components/testimonial"
import QuickContactSection from "@/components/contactsUs"
import EngagementBanner from "@/components/banner"
import { AboutUs } from "@/components/aboutUs"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <EngagementBanner />
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <AboutUs/>
      <TestimonialsSection/>
      <div className="bg-card xl:py-10 lg:py-8 py-7 xl:px-50 lg:px-42 md:px-5 sm:px-10 px-0">
        <QuickContactSection  />
      </div>
      <Footer />
    </main>
  )
}
