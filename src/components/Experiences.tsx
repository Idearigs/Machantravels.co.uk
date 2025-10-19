'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const benefits = [
  'Dedicated UK-based travel concierge',
  'Handpicked luxury accommodations',
  'Expert local guides and drivers',
  'Flexible, fully customizable itineraries',
  'ATOL & ABTA protected',
  '24/7 support throughout your journey',
]

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-2xl bg-gradient-to-br from-primary-900 to-primary-600" />
                <div className="h-48 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600" />
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-48 rounded-2xl bg-gradient-to-br from-neutral-600 to-neutral-800" />
                <div className="h-64 rounded-2xl bg-gradient-to-br from-primary-800 to-neutral-900" />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold tracking-extra-wide uppercase text-neutral-600">
              Our Approach
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mt-4 mb-6">
              Bespoke Journeys,
              <br />
              Crafted for You
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              We don't believe in package tours. Every journey is meticulously designed
              around your interests, pace, and dreams.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-900 flex items-center justify-center">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-neutral-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <button className="group px-8 py-4 bg-primary-900 text-white font-medium rounded-md hover:bg-primary-800 transition-all flex items-center gap-2">
              Plan Your Journey
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
