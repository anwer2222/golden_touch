'use client'
import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Bespoke Solutions',
    text: 'No templates. We listen first, then design — ensuring spaces reflect who you are and how you work.'
  },
  {
    title: 'Adaptive & Sustainable',
    text: 'Modular choices and mindful materials mean longevity for your design and a softer footprint on the planet.'
  },
  {
    title: 'Service with Precision',
    text: 'From concept to installation, our team delivers on time and on budget — delight is part of the plan.'
  }
]

export default function Pillars() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">Our Philosophy</h2>
      <p className="mt-2 text-chart-5 max-w-2xl">
        A three-pillared approach guides every project: understanding, designing, and delivering with intention.
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            viewport={{ once: true }}
            className="p-6 border rounded-lg bg-background"
          >
            <div className="text-sm uppercase text-gold font-semibold">{p.title}</div>
            <div className="mt-3 text-chart-5">{p.text}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}