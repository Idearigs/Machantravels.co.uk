'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary-900 rounded-3xl px-8 py-16 lg:px-16 lg:py-20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's create your perfect Sri Lanka experience. Get in touch for a
              free, no-obligation consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group px-8 py-4 bg-white text-primary-900 font-medium rounded-md hover:bg-neutral-100 transition-all flex items-center justify-center gap-2">
                Get Your Free Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Download size={18} />
                Download Brochure
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span>ATOL Protected</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span>ABTA Member</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span>24/7 UK Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
