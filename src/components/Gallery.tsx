'use client'
import { motion } from 'framer-motion'

const images = [
  "/industrial.jpg","/jetcraft-office-4.jpg","/the-chamber.jpg","/Salles-de.jpg"
]

export default function Gallery() {
  return (
    <section id="gallery" className="mt-12">
      <h4 className="text-xl font-semibold">Gallery</h4>
      <p className="text-chart-5 mt-2">Selected projects and installations — a taste of our craftsmanship.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow"
          >
            <img src={src} alt={`project-${i}`} className="w-full h-56 object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}