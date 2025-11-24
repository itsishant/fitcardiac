"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMoreOpen(false);
      }
    };

    if (isMoreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMoreOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Facilities", href: "/facilities" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
              <div className="relative w-20 h-20 md:w-27 md:h-27">
                <Image
                  src="/logo.jpeg"
                  alt="FIT CARDIAC DIAGNOSTIC CENTRE logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs ml-7 md:text-base font-sans font-semibold  text-secondary-gray uppercase">
                  Fit Cardiac
                </span>
                <span className="text-[10px] md:text-base font-semibold text-primary-teal uppercase">
                  Diagnostic Centre
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
                  className="text-lg text-secondary-gray hover:text-primary-teal transition-colors duration-200 font-medium"
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
                className="text-lg text-secondary-gray hover:text-primary-teal transition-colors duration-200 font-medium flex items-center"
                aria-expanded={isMoreOpen}
                aria-haspopup="true"
              >
                More
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    isMoreOpen ? "rotate-180" : ""
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
                      href="/referral"
                      className="block px-4 py-2 text-secondary-gray hover:bg-primary-green-light hover:text-primary-teal transition-colors font-semibold"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      Physician Referral
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-secondary-gray hover:bg-primary-green-light hover:text-primary-teal transition-colors"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      Contact
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

          {/* Contact CTA - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hidden lg:flex items-center"
          >
            <Link
              href="tel:+14165551234"
              className="text-secondary-gray hover:text-primary-teal transition-colors duration-200 font-medium"
            >
              Call: +1 (613) 676-1191
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-secondary-gray hover:text-primary-teal transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-base text-secondary-gray hover:bg-primary-green-light hover:text-primary-teal transition-colors rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile More Section */}
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <Link
                    href="/referral"
                    className="block px-4 py-3 text-base text-secondary-gray hover:bg-primary-green-light hover:text-primary-teal transition-colors rounded-lg font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Physician Referral
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-3 text-base text-secondary-gray hover:bg-primary-green-light hover:text-primary-teal transition-colors rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/faq"
                    className="block px-4 py-3 text-base text-secondary-gray hover:bg-primary-green-light hover:text-primary-teal transition-colors rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>

                {/* Mobile Contact */}
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <Link
                    href="tel:+16136761191"
                    className="block px-4 py-3 text-base text-primary-teal hover:bg-primary-green-light transition-colors rounded-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    📞 Call: +1 (613) 676-1191
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
