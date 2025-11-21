'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false)
      }
    }

    if (isMoreOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMoreOpen])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Facilities', href: '/facilities' },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                {/* Place your logo file in /public (e.g. /fit-cardiac-logo.png) */}
                <Image
                  src="/fit-cardiac-logo.png"
                  alt="FIT CARDIAC DIAGNOSTIC CENTRE logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs md:text-sm font-semibold tracking-[0.18em] text-secondary-gray uppercase">
                  Fit Cardiac
                </span>
                <span className="text-[10px] md:text-xs font-semibold text-primary-teal uppercase">
                  Diagnostic Centre
                </span>
                <span className="text-[9px] md:text-[10px] text-secondary-gray-light uppercase">
                  Where Every Heartbeat Matters
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="text-secondary-gray hover:text-primary-teal transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* More Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="relative"
              ref={dropdownRef}
            >
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="text-secondary-gray hover:text-primary-teal transition-colors duration-200 font-medium flex items-center"
                aria-expanded={isMoreOpen}
                aria-haspopup="true"
              >
                More
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    isMoreOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  >
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-secondary-gray hover:bg-primary-green-light hover:text-primary-teal transition-colors"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      href="/blog"
                      className="block px-4 py-2 text-secondary-gray hover:bg-primary-green-light hover:text-primary-teal transition-colors"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-4 py-2 text-secondary-gray hover:bg-primary-green-light hover:text-primary-teal transition-colors"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      FAQ
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Contact CTA (no sign-in/up) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hidden sm:flex items-center space-x-4"
          >
            <Link
              href="tel:+14165551234"
              className="text-secondary-gray hover:text-primary-teal transition-colors duration-200 font-medium"
            >
              Call: +1 (416) 555-1234
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-primary-green text-secondary-gray px-6 py-2 rounded-lg font-medium hover:bg-primary-teal hover:text-white transition-all duration-200"
              >
                Contact Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}

