import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Destinations from '@/components/Destinations'
import TourPackages from '@/components/TourPackages'
import Experiences from '@/components/Experiences'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ContactFloat from '@/components/ContactFloat'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Destinations />
      <TourPackages />
      <Experiences />
      <About />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
      <ContactFloat />
    </main>
  )
}
