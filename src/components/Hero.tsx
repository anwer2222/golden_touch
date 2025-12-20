'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="about" className="mt-8 grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Golden Touch Interiors
        </h1>
        <p className="mt-4 text-chart-5 max-w-xl">
          We design thoughtful, timeless interiors that blend form and function — every project receives our tailored approach and that signature golden touch.
        </p>

        <ul className="mt-6 space-y-3">
          <li className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center">✓</div>
            <div>
              <div className="font-semibold">Bespoke Design</div>
              <div className="text-sm text-chart-5">Solutions crafted for your brand, life, and workflow.</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-secondary text-primary-foreground flex items-center justify-center">⚙</div>
            <div>
              <div className="font-semibold">Future-Ready</div>
              <div className="text-sm text-chart-5">Modular and adaptable systems to grow with you.</div>
            </div>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        <Image
          src="/luxury-2.jpg"
          alt="Elegant interior"
          className="w-full h-80 object-cover"
          height={80}
          width={500}
        />
      </motion.div>
    </section>
  )
}