'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone, Mail, Send } from 'lucide-react'

export default function ContactFloat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Contact Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-accent-teal text-white rounded-full shadow-2xl hover:bg-accent-teal/90 transition-all flex items-center justify-center group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-rose rounded-full flex items-center justify-center text-xs font-bold">
            1
          </span>
        )}
      </motion.button>

      {/* Contact Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 z-40 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent-teal to-accent-sky p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">How can we help?</h3>
              <p className="text-sm text-white/80">We typically reply within minutes</p>
            </div>

            {/* Quick Actions */}
            <div className="p-6 space-y-3">
              <a
                href="tel:+442012345678"
                className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-accent-emerald/10 flex items-center justify-center group-hover:bg-accent-emerald/20 transition-colors">
                  <Phone size={20} className="text-accent-emerald" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-primary-900">Call Us Now</div>
                  <div className="text-sm text-neutral-600">+44 (0) 20 1234 5678</div>
                </div>
              </a>

              <a
                href="mailto:hello@machantravels.co.uk"
                className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-accent-sky/10 flex items-center justify-center group-hover:bg-accent-sky/20 transition-colors">
                  <Mail size={20} className="text-accent-sky" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-primary-900">Email Us</div>
                  <div className="text-sm text-neutral-600">hello@machantravels.co.uk</div>
                </div>
              </a>

              {/* Quick Message Form */}
              <div className="pt-4">
                <p className="text-sm font-medium text-neutral-700 mb-3">Send a Quick Message</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-accent-teal text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-accent-teal text-sm"
                  />
                  <textarea
                    placeholder="Your message..."
                    rows={3}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-accent-teal text-sm resize-none"
                  />
                  <button className="w-full py-3 bg-accent-teal text-white font-medium rounded-lg hover:bg-accent-teal/90 transition-colors flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </button>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-2 justify-center pt-2">
                <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
                <span className="text-xs text-neutral-600">Usually responds in 5 minutes</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
