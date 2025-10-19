'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { name: 'Destinations', href: '#destinations' },
  { name: 'Packages', href: '#packages' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Destinations')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (name: string, href: string) => {
    setActiveLink(name)
    setIsMobileMenuOpen(false)

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-white/10 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-semibold text-xl tracking-tight text-primary-900">
              Machan Travels
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.name, link.href)
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-sm font-medium transition-colors relative text-neutral-600 hover:text-primary-900"
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-primary-900"
                  />
                )}
              </motion.a>
            ))}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-2.5 rounded-full overflow-hidden font-medium text-sm text-white"
            >
              {/* Glass Background */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20" />

              {/* Animated Liquid Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/30 via-accent-sky/30 to-accent-emerald/30 animate-gradient"
                     style={{ backgroundSize: '200% 200%' }} />
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              {/* Button Content */}
              <span className="relative flex items-center gap-2 justify-center">
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary-900"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Modern Minimal Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm"
              style={{ top: '72px' }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="lg:hidden fixed right-0 top-[72px] bottom-0 w-[280px] bg-white shadow-2xl z-50"
            >
              <div className="px-6 py-8 flex flex-col gap-2 h-full bg-white">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.name, link.href)
                    }}
                    className={`text-lg font-medium py-3 px-4 rounded-xl transition-colors ${
                      activeLink === link.name
                        ? 'text-primary-900 bg-primary-50'
                        : 'text-primary-900 hover:bg-neutral-50'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 px-6 py-3 bg-primary-900 text-white rounded-xl font-medium hover:bg-primary-800 transition-colors"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
