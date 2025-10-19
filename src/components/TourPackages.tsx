'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Star } from 'lucide-react'
import Link from 'next/link'

const packages = [
  {
    id: 'cultural-triangle',
    name: 'Cultural Triangle Explorer',
    duration: '7 Days',
    groupSize: '2-8 People',
    rating: 4.9,
    reviews: 124,
    price: '£899',
    description: 'Discover ancient kingdoms, sacred temples, and UNESCO World Heritage Sites.',
    highlights: ['Sigiriya Rock Fortress', 'Temple of the Tooth', 'Dambulla Cave Temple'],
  },
  {
    id: 'coastal-adventure',
    name: 'Coastal Paradise',
    duration: '10 Days',
    groupSize: '2-12 People',
    rating: 5.0,
    reviews: 98,
    price: '£1,199',
    description: 'Pristine beaches, whale watching, and colonial heritage along the southern coast.',
    highlights: ['Mirissa Whale Watching', 'Galle Fort', 'Unawatuna Beach'],
  },
  {
    id: 'wildlife-safari',
    name: 'Wildlife & Nature',
    duration: '8 Days',
    groupSize: '2-6 People',
    rating: 4.8,
    reviews: 156,
    price: '£1,049',
    description: 'Encounter elephants, leopards, and exotic birds in their natural habitat.',
    highlights: ['Yala National Park', 'Udawalawe Safari', 'Sinharaja Rainforest'],
  },
  {
    id: 'tea-country',
    name: 'Hill Country & Tea Trails',
    duration: '6 Days',
    groupSize: '2-10 People',
    rating: 4.9,
    reviews: 87,
    price: '£799',
    description: 'Misty mountains, emerald tea plantations, and colonial charm.',
    highlights: ['Ella Nine Arch Bridge', 'Tea Factory Visit', 'Horton Plains'],
  },
]

export default function TourPackages() {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20 text-center mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-primary-900 mb-4 tracking-tight">
            Here are some tour packages that made for you
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed font-light">
            Carefully crafted journeys designed to create unforgettable memories.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href={`/packages/${pkg.id}`}>
                <div className="group bg-neutral-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-primary-900 mb-2 tracking-tight group-hover:text-primary-800 transition-colors">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-3">
                        <Star size={16} className="text-amber-400 fill-amber-400" />
                        <span className="text-sm font-medium text-primary-900">{pkg.rating}</span>
                        <span className="text-sm text-neutral-500">({pkg.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-neutral-500 mb-1">From</div>
                      <div className="text-3xl font-semibold text-primary-900">{pkg.price}</div>
                      <div className="text-xs text-neutral-500">per person</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 leading-relaxed font-light mb-6">
                    {pkg.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6 flex-1">
                    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                      Highlights
                    </div>
                    <ul className="space-y-2">
                      {pkg.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 pt-6 border-t border-neutral-200">
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <Calendar size={16} className="text-neutral-400" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <Users size={16} className="text-neutral-400" />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary-900 group-hover:gap-3 transition-all">
                    View Details
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
