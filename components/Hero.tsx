'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HeartPulse } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2314B8A6' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-primary-teal">Take care of your</span>
              <br />
              <span className="text-secondary-gray">heart with care</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-secondary-gray-light leading-relaxed max-w-xl"
            >
              Cardiac Services: Offering the highest quality of diagnostic imaging services in Canada, delivered by highly qualified licensed staff with fast report turnaround times.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#why-choose"
                  className="inline-flex justify-center bg-primary-green text-secondary-gray px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-teal hover:text-white transition-all duration-200 shadow-lg"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-teal border-2 border-primary-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-green-light transition-all duration-200"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Heartbeat Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            {/* Background Decorative Shapes */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-10 right-10 w-32 h-32 bg-primary-green-light rounded-full opacity-50"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-20 left-10 w-24 h-24 bg-primary-green rounded-3xl opacity-40"
              />
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/2 right-5 w-20 h-20 bg-primary-teal rounded-full opacity-30"
              />
            </div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-teal-dark via-primary-teal to-primary-green shadow-2xl"
              >
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent)]"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-6 border border-white/20 rounded-2xl"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-10">
                  <motion.svg
                    viewBox="0 0 600 200"
                    className="w-full max-w-3xl text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                  >
                    <motion.path
                      d="M0 110 L60 110 L90 60 L120 150 L150 110 L210 110 L230 90 L250 130 L280 40 L300 160 L330 110 L380 110 L410 60 L440 140 L470 110 L530 110 L560 80 L600 110"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.svg>
                  <motion.div
                    className="flex items-center justify-center w-32 h-32 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    <HeartPulse className="w-20 h-20 text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.6)]" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Animated Heart Overlay */}
              <motion.div
                className="absolute -bottom-10 -left-8 md:-left-16 bg-white rounded-2xl shadow-2xl p-6 w-64 border border-primary-teal/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
              <motion.div
                className="flex items-center justify-center mb-2"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <HeartPulse className="w-14 h-14 text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
              </motion.div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary-teal/60 animate-pulse" />
                <div
                  className="w-3 h-3 rounded-full bg-primary-green/60 animate-pulse"
                  style={{ animationDelay: '0.2s' }}
                />
                <div
                  className="w-3 h-3 rounded-full bg-secondary-gray/60 animate-pulse"
                  style={{ animationDelay: '0.4s' }}
                />
              </div>
              </motion.div>

              {/* Overlay Card 1 - Healthy Patients */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-20 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px]"
              >
                <h3 className="font-bold text-secondary-gray text-sm mb-1">
                  Healthy Patients
                </h3>
                <p className="text-2xl font-bold text-primary-teal mb-2">1000+</p>
                <div className="flex gap-1">
                  <div className="w-8 h-2 bg-primary-green rounded"></div>
                  <div className="w-6 h-2 bg-primary-teal rounded"></div>
                  <div className="w-4 h-2 bg-secondary-gray rounded"></div>
                </div>
              </motion.div>

              {/* Overlay Card 2 - Cardiac Services */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute top-32 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[220px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-teal rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-gray text-sm">
                      Cardiac Services
                    </h3>
                    <p className="text-primary-teal text-xs flex items-center gap-1 mt-1">
                      Learn more
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

