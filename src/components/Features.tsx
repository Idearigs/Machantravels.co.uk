'use client'

import { motion } from 'framer-motion'
import { Landmark, Waves, TreePine, UtensilsCrossed } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    slug: 'ancient-heritage',
    icon: Landmark,
    title: 'Ancient Heritage',
    description: 'Explore 2,500 years of history through magnificent temples and archaeological wonders.',
  },
  {
    slug: 'pristine-beaches',
    icon: Waves,
    title: 'Pristine Beaches',
    description: 'Crystal-clear waters and golden sands perfect for relaxation and adventure.',
  },
  {
    slug: 'wildlife-safari',
    icon: TreePine,
    title: 'Wildlife Safari',
    description: 'Encounter elephants, leopards, and exotic birds in their natural habitats.',
  },
  {
    slug: 'culinary-journey',
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
            <Link key={feature.slug} href={`/experiences/${feature.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <feature.icon size={28} className="text-neutral-600 group-hover:text-primary-900 transition-colors" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3 tracking-tight group-hover:text-primary-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed font-light">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary-900 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
