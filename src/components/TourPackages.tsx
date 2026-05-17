'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Star, MapPin, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const packages = [
  {
    id: 'cultural-triangle',
    name: 'Ceylon Discovery Explorer',
    location: 'Buddhist Heritage & Adventure, Sri Lanka',
    duration: '14 Days / 13 Nights',
    rating: 4.8,
    reviews: 123,
    description: '14 Day/13 Nights comprehensive journey through Buddhist temples, ancient cities, safari adventures, mountain railways, and colonial heritage.',
    highlights: ['Sigiriya Rock Fortress', 'Temple of the Tooth', 'Dambulla Cave Temple'],
    image: 'https://images.unsplash.com/photo-1548013146-72e2a6f6e6d8?w=600&h=400&fit=crop',
  },
  {
    id: 'coastal-adventure',
    name: 'Paradise Coastal Adventure',
    location: 'Coastal Paradise, Sri Lanka',
    duration: '7 Days / 6 Nights',
    rating: 4.9,
    reviews: 203,
    description: '7 Days/6 Nights coastal discovery featuring whale watching, beach relaxation, historic Galle Fort, and vibrant marine ecosystems.',
    highlights: ['Mirissa Whale Watching', 'Galle Fort', 'Unawatuna Beach'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
  },
  {
    id: 'wildlife-safari',
    name: 'Sacred Ceylon Wellness Retreat',
    location: 'Wellness & Spirituality, Sri Lanka',
    duration: '7 Days / 6 Nights',
    rating: 4.7,
    reviews: 142,
    description: '7 Days/6 Nights spiritual journey combining Ayurvedic wellness, meditation practices, and temple visits.',
    highlights: ['Yala National Park', 'Udawalawe Safari', 'Sinharaja Rainforest'],
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
  },
]

export default function TourPackages() {
  return (
    <section id="packages" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-primary-900 mb-4 tracking-tight">
            Here are some tour packages that made for you
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed font-light">
            Carefully crafted journeys designed to create unforgettable memories.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-neutral-200">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-primary-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col h-full">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-primary-600 mb-3">
                    <MapPin size={16} className="flex-shrink-0" />
                    <span className="font-medium">{pkg.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-primary-900 mb-3 tracking-tight group-hover:text-primary-800 transition-colors">
                    {pkg.name}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 leading-relaxed font-light text-sm mb-4 flex-1">
                    {pkg.description}
                  </p>

                  {/* Rating and Duration */}
                  <div className="flex items-center justify-between py-4 border-t border-b border-neutral-200">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-amber-400 fill-amber-400" />
                      <span className="text-sm font-medium text-primary-900">{pkg.rating} ({pkg.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-primary-900 font-medium">
                      <Calendar size={14} />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-4 space-y-3">
                    <button className="w-full px-4 py-2 text-primary-900 font-medium text-sm hover:text-primary-800 transition-colors">
                      Contact Us
                    </button>
                    <Link href={`/packages/${pkg.id}`}>
                      <button className="w-full px-4 py-2 text-primary-600 font-medium text-sm flex items-center justify-center gap-1 hover:text-primary-900 transition-colors">
                        EXPLORE MORE
                        <ArrowUpRight size={14} />
                      </button>
                    </Link>
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
