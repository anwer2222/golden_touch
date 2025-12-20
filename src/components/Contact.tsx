'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="mt-12">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="p-6 border rounded-lg bg-background"
      >
        <div className="flex items-center justify-between">
          <div>
            <h5 className="text-lg font-semibold">Get in touch</h5>
            <p className="text-chart-5 mt-1 max-w-2xs md:max-w-2xl">Ready to start your project? We’d love to hear about it.</p>
          </div>
          <div className="text-right text-sm text-chart-5">
            <div>hello@goldentouch.com</div>
            <div className="mt-1">+1 (555) 123-4567</div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="mt-6 grid md:grid-cols-2 gap-4"
        >
          <input required placeholder="Your name" className="p-3 border rounded" />
          <input required placeholder="Email" type="email" className="p-3 border rounded" />
          <input placeholder="Company (optional)" className="p-3 border rounded md:col-span-2" />
          <textarea required placeholder="Tell us about your project" className="p-3 border rounded md:col-span-2 h-28"></textarea>

          <div className="md:col-span-2 flex items-center justify-between">
            <button className="px-5 py-2 rounded bg-primary text-primary-foreground font-semibold">Send message</button>
            {sent && <div className="text-sm text-green-600">Thanks — we received your message!</div>}
          </div>
        </form>
      </motion.div>
    </section>
  )
}