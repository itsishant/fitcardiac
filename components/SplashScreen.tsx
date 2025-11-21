'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500) // Wait for fade out animation
    }, 5500) // 5.5 seconds total

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center justify-center">
            {/* Heartbeat Animation */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.8, 1.2, 0.8, 1.2, 0.8] }}
              transition={{
                duration: 1,
                repeat: 5,
                ease: 'easeInOut',
              }}
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary-teal"
              >
                <motion.path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="currentColor"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
              </svg>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-secondary-gray">
                FIT CARDIAC
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-secondary-gray-light">
                Diagnostic Centre
              </p>
              <p className="mt-1 text-[10px] text-secondary-gray-light">
                Where Every Heartbeat Matters
              </p>
            </motion.div>

            {/* Pulse Effect */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: 5,
                ease: 'easeOut',
              }}
            >
              <div className="w-32 h-32 rounded-full bg-primary-teal" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

