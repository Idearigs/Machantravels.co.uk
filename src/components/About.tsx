'use client'

import { motion } from 'framer-motion'
import { Award, Heart, Users, Globe } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Passion for Travel',
    description: 'We love what we do and it shows in every journey we create.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering exceptional experiences every time.',
  },
  {
    icon: Users,
    title: 'Personal Touch',
    description: 'Small groups and personalized service for authentic connections.',
  },
  {
    icon: Globe,
    title: 'Sustainable Tourism',
    description: 'Responsible travel that benefits local communities and nature.',
  },
]

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '5,000+', label: 'Happy Travelers' },
  { number: '50+', label: 'Tour Packages' },
  { number: '4.9', label: 'Average Rating' },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
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
            About Machan Travels
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed font-light">
            Your trusted partner for unforgettable Sri Lankan adventures since 2009.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-900 to-primary-600">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-light">
                Sri Lanka
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-semibold text-primary-900 mb-6 tracking-tight">
              Our Story
            </h3>
            <div className="space-y-4 text-lg text-neutral-600 font-light leading-relaxed">
              <p>
                Machan Travels was founded in 2009 by a group of passionate Sri Lankan travel enthusiasts
                who wanted to share the magic of their homeland with the world. What started as a small
                operation has grown into one of the UK's most trusted specialists in Sri Lankan tourism.
              </p>
              <p>
                We are based in the UK but our heart is in Sri Lanka. Our team combines local expertise
                with international standards to create journeys that go beyond typical tourist experiences.
                We believe in authentic connections, sustainable practices, and creating memories that last
                a lifetime.
              </p>
              <p>
                Every tour we design is crafted with care, drawing on our deep knowledge of Sri Lanka's
                culture, history, and hidden gems. When you travel with us, you're not just a tourist –
                you're family.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 bg-neutral-50 rounded-3xl p-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-semibold text-primary-900 mb-2 tracking-tight">
                {stat.number}
              </div>
              <div className="text-sm text-neutral-600 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-semibold text-primary-900 mb-12 text-center tracking-tight">
            Our Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-100 mb-4">
                  <value.icon size={28} className="text-neutral-600" strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-semibold text-primary-900 mb-2 tracking-tight">
                  {value.title}
                </h4>
                <p className="text-neutral-600 font-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary-900 text-white rounded-3xl p-12 lg:p-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 tracking-tight">
            Our Mission
          </h3>
          <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto opacity-90">
            To create transformative travel experiences that celebrate Sri Lanka's natural beauty,
            rich heritage, and warm hospitality while supporting local communities and preserving
            the island's treasures for future generations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
