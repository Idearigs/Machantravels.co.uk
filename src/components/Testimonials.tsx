'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah & James Thompson',
    location: 'London',
    text: 'Our Sri Lanka adventure exceeded all expectations. The attention to detail and personal service made our journey truly unforgettable.',
  },
  {
    name: 'Michael Roberts',
    location: 'Manchester',
    text: 'Machan Travels created the perfect itinerary for us. Every accommodation was handpicked and the local guides were exceptional.',
  },
  {
    name: 'Claire Wilson',
    location: 'Birmingham',
    text: 'From ancient ruins to stunning beaches, every day brought new wonders. The flexibility and expertise made all the difference.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 text-center mx-auto"
        >
          <span className="text-xs font-semibold tracking-extra-wide uppercase text-neutral-600">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mt-4">
            Trusted by Travellers
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-8"
            >
              <Quote size={32} className="text-neutral-300 mb-6" />

              <p className="text-neutral-700 leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-900 to-primary-600" />
                <div>
                  <div className="font-semibold text-primary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
