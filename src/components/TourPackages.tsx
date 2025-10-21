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
    image: 'https://images.unsplash.com/photo-1548013146-72e2a6f6e6d8?w=600&h=400&fit=crop',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
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
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    color: 'from-sky-500 to-blue-600',
    bgColor: 'bg-sky-50',
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
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
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
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    color: 'from-teal-500 to-cyan-600',
    bgColor: 'bg-teal-50',
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
                <div className={`group ${pkg.bgColor} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col border border-neutral-200`}>
                  {/* Image Section */}
                  <div className={`relative h-48 bg-gradient-to-br ${pkg.color} overflow-hidden`}>
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-80"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-30`} />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold text-primary-900 mb-2 tracking-tight group-hover:text-primary-800 transition-colors">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-3">
                        <Star size={16} className="text-amber-400 fill-amber-400" />
                        <span className="text-sm font-medium text-primary-900">{pkg.rating}</span>
                        <span className="text-sm text-neutral-500">({pkg.reviews} reviews)</span>
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
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
