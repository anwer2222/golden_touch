import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Pillars from '@/components/Pillars'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <Hero />
        <Pillars />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}