"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 1000); // 4 seconds total

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          {/* Animated Background Circles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-teal/5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            />
          </div>

          <div className="flex flex-col items-center justify-center relative z-10">
            {/* Animated Heart */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Heart Icon with Heartbeat Animation */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center"
              >
                <Heart className="w-32 h-32 text-red-500 fill-red-500" />
              </motion.div>

              {/* Pulse Rings */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.4, 1.4],
                  opacity: [0.8, 0.4, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              >
                <div className="w-40 h-40 rounded-full border-2 border-red-500" />
              </motion.div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.4, 1.4],
                  opacity: [0.6, 0.3, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.3,
                }}
              >
                <div className="w-40 h-40 rounded-full border-2 border-primary-teal" />
              </motion.div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.4, 1.4],
                  opacity: [0.4, 0.2, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.6,
                }}
              >
                <div className="w-40 h-40 rounded-full border-2 border-red-500/50" />
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-6xl font-bold text-secondary-gray mb-2">
                FIT CARDIAC
              </h2>
              <p className="text-2xl uppercase tracking-[0.2em] text-primary-teal font-semibold">
                DIAGNOSTIC CENTRE
              </p>
              <motion.p
                className="mt-3 text-xl text-secondary-gray-light italic"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Where Every Heartbeat Matters
              </motion.p>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              className="mt-8 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-4 h-4 rounded-full bg-red-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
