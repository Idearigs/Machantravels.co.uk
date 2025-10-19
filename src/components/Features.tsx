'use client'

import { motion } from 'framer-motion'
import { Landmark, Waves, TreePine, UtensilsCrossed } from 'lucide-react'

const features = [
  {
    icon: Landmark,
    title: 'Ancient Heritage',
    description: 'Explore 2,500 years of history through magnificent temples and archaeological wonders.',
  },
  {
    icon: Waves,
    title: 'Pristine Beaches',
    description: 'Crystal-clear waters and golden sands perfect for relaxation and adventure.',
  },
  {
    icon: TreePine,
    title: 'Wildlife Safari',
    description: 'Encounter elephants, leopards, and exotic birds in their natural habitats.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Culinary Journey',
    description: 'Savour authentic Sri Lankan cuisine and world-famous Ceylon tea.',
  },
]

export default function Features() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20 text-center mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-primary-900 mb-4 tracking-tight">
            A Land of Wonders
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed font-light">
            Eight UNESCO World Heritage Sites, endless golden beaches,
            and warm hospitality await your discovery.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                  <feature.icon size={28} className="text-neutral-600" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
