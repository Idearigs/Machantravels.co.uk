'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const companyLinks = ['About Us', 'Our Story', 'Team', 'Careers', 'Press']
const destinationsLinks = ['Sigiriya', 'Mirissa', 'Ella', 'Yala', 'Galle Fort', 'Kandy']
const resourcesLinks = ['Travel Guide', 'Blog', 'FAQs', 'Terms & Conditions', 'Privacy Policy']

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="font-semibold text-xl mb-4">Machan Travels</h3>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              Creating extraordinary journeys to Sri Lanka for discerning UK travellers since 2009.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:hello@machantravels.co.uk" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                <Mail size={16} />
                <span>hello@machantravels.co.uk</span>
              </a>
              <a href="tel:+442012345678" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                <Phone size={16} />
                <span>+44 (0) 20 1234 5678</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin size={16} />
                <span>London, United Kingdom</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold mb-4">Destinations</h4>
            <ul className="space-y-3">
              {destinationsLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-white/60 mb-4">
              Get travel tips and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-md text-sm placeholder:text-white/40 focus:outline-none focus:border-white/40"
              />
              <button className="px-4 py-2 bg-white text-primary-900 rounded-md text-sm font-medium hover:bg-neutral-100 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2025 Machan Travels. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
