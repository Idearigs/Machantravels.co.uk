'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+44 20 1234 5678',
    subdetails: 'Mon-Fri 9am-6pm GMT',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@machantravels.co.uk',
    subdetails: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: 'London, United Kingdom',
    subdetails: 'Serving UK travelers since 2009',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: 'Monday - Friday',
    subdetails: '9:00 AM - 6:00 PM GMT',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-50">
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
            Get in Touch
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed font-light">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm">
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-900 focus:ring-2 focus:ring-primary-900/20 outline-none transition-all font-light"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-900 focus:ring-2 focus:ring-primary-900/20 outline-none transition-all font-light"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-900 focus:ring-2 focus:ring-primary-900/20 outline-none transition-all font-light"
                    placeholder="+44 20 1234 5678"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-900 focus:ring-2 focus:ring-primary-900/20 outline-none transition-all resize-none font-light"
                    placeholder="Tell us about your dream Sri Lankan adventure..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-900 text-white px-6 py-4 rounded-xl font-medium hover:bg-primary-800 transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-primary-900 mb-6 tracking-tight">
                Contact Information
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed mb-8">
                We're here to help plan your perfect Sri Lankan adventure. Reach out through any of
                these channels and our friendly team will get back to you promptly.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center">
                    <info.icon size={22} className="text-neutral-600" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                      {info.title}
                    </h4>
                    <p className="text-lg font-medium text-primary-900">
                      {info.details}
                    </p>
                    <p className="text-sm text-neutral-600 font-light">
                      {info.subdetails}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why Contact Us */}
            <div className="bg-primary-900 text-white rounded-2xl p-8 mt-8">
              <h4 className="text-lg font-semibold mb-4 tracking-tight">
                Why Contact Us?
              </h4>
              <ul className="space-y-3 text-sm font-light opacity-90">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 flex-shrink-0" />
                  <span>Expert advice on Sri Lankan destinations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 flex-shrink-0" />
                  <span>Customizable tour packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 flex-shrink-0" />
                  <span>Competitive pricing and special offers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 flex-shrink-0" />
                  <span>24/7 support during your trip</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-semibold text-primary-900 mb-8 text-center tracking-tight">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h4 className="font-semibold text-primary-900 mb-2">
                How far in advance should I book?
              </h4>
              <p className="text-neutral-600 font-light text-sm leading-relaxed">
                We recommend booking at least 2-3 months in advance, especially for peak season
                (December to March). However, we can accommodate last-minute bookings based on availability.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-900 mb-2">
                Do you offer customized tours?
              </h4>
              <p className="text-neutral-600 font-light text-sm leading-relaxed">
                Absolutely! All our tours can be customized to match your interests, budget, and schedule.
                Contact us to discuss your preferences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-900 mb-2">
                What's included in the tour price?
              </h4>
              <p className="text-neutral-600 font-light text-sm leading-relaxed">
                Typically includes accommodation, transportation, guided tours, and specified meals.
                Check individual package details for specific inclusions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-900 mb-2">
                Is travel insurance required?
              </h4>
              <p className="text-neutral-600 font-light text-sm leading-relaxed">
                While not mandatory, we strongly recommend comprehensive travel insurance covering
                medical expenses, trip cancellation, and lost luggage.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
