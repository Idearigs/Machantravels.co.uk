'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const destinations = [
  {
    name: 'Sigiriya',
    slug: 'sigiriya',
    location: 'Cultural Triangle',
    description: 'Ancient rock fortress rising 200m above the jungle',
    image: '/images/destinations/sigiriya.jpg',
  },
  {
    name: 'Mirissa',
    slug: 'mirissa',
    location: 'South Coast',
    description: 'Pristine beaches and whale watching paradise',
    image: '/images/destinations/mirissa.jpg',
  },
  {
    name: 'Ella',
    slug: 'ella',
    location: 'Hill Country',
    description: 'Misty mountains and emerald tea plantations',
    image: '/images/destinations/ella.jpg',
  },
  {
    name: 'Yala',
    slug: 'yala',
    location: 'Southeast',
    description: 'Premier wildlife safari destination',
    image: '/images/destinations/yala.jpg',
  },
  {
    name: 'Galle Fort',
    slug: 'galle-fort',
    location: 'South Coast',
    description: 'Historic Dutch colonial architecture',
    image: '/images/destinations/galle-fort.jpg',
  },
  {
    name: 'Kandy',
    slug: 'kandy',
    location: 'Central Province',
    description: 'Sacred temple and cultural heart',
    image: '/images/destinations/kandy.jpg',
  },
]

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-extra-wide uppercase text-neutral-600">
            Destinations
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mt-4 mb-6">
            Where We'll Take You
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            From ancient fortresses to pristine coastlines, each destination tells its own story.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href={`/destinations/${destination.slug}`}>
                <div className="group cursor-pointer">
                  {/* Image */}
                  <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                    {destination.image ? (
                      <>
                        <Image
                          src={destination.image}
                          alt={destination.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </>
                    ) : (
                      <>
                        <div className="w-full h-full bg-gradient-to-br from-primary-900 to-primary-600" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </>
                    )}

                    {/* Location Badge */}
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 z-10">
                      <MapPin size={14} className="text-white" />
                      <span className="text-xs font-medium text-white">{destination.location}</span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                      <span className="text-white font-medium">View Details</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-primary-900 mb-2 group-hover:text-primary-800 transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-neutral-600 font-light">
                    {destination.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
