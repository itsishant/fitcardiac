"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeartPulse, Heart, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, useState } from "react";

export default function Hero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 4;

  const handleScrollRight = () => {
    if (currentSection < totalSections - 1) {
      const nextSection = currentSection + 1;
      setCurrentSection(nextSection);
      scrollToSection(nextSection);
    }
  };

  const handleScrollLeft = () => {
    if (currentSection > 0) {
      const prevSection = currentSection - 1;
      setCurrentSection(prevSection);
      scrollToSection(prevSection);
    }
  };

  const scrollToSection = (sectionIndex: number) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollPosition = containerWidth * sectionIndex;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2314B8A6' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-teal/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-primary-teal to-red-500 bg-clip-text text-transparent">
                Take care of your
              </span>
              <br />
              <span className="text-secondary-gray">heart with care</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-secondary-gray-light leading-relaxed max-w-xl"
            >
              Cardiac Services: Offering the highest quality of diagnostic
              imaging services in Canada, delivered by highly qualified licensed
              staff with fast report turnaround times.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center gap-2 bg-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <HeartPulse className="w-6 h-6 animate-heartbeat" />
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Heartbeat Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                ref={scrollContainerRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-teal-dark via-primary-teal to-primary-green shadow-2xl flex items-center justify-center"
              >
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent)]"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Main Content - Multiple Scrollable Sections */}
                <div className="relative z-10 flex flex-row items-center justify-start h-full w-full">
                  {/* Section 1 - Heartbeat Chart */}
                  <div className="min-w-full flex-shrink-0 flex flex-col items-center justify-center h-full gap-10 px-8">
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
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
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

                  {/* Section 2 - Heart Rate Info */}
                  <div className="min-w-full flex-shrink-0 flex flex-col items-center justify-center h-full gap-8 px-8">
                    <div className="text-center text-white space-y-4">
                      <h2 className="text-3xl font-bold">Heart Rate Monitor</h2>
                      <p className="text-lg text-white/80">Average: 72 BPM</p>
                      <div className="flex justify-center gap-4">
                        <div className="flex flex-col items-center">
                          <span className="text-2xl font-bold text-green-300">
                            ↓
                          </span>
                          <span className="text-sm text-white/70">
                            Systolic
                          </span>
                          <span className="text-xl font-bold">120</span>
                        </div>
                        <div className="w-px bg-white/30"></div>
                        <div className="flex flex-col items-center">
                          <span className="text-2xl font-bold text-yellow-300">
                            →
                          </span>
                          <span className="text-sm text-white/70">
                            Diastolic
                          </span>
                          <span className="text-xl font-bold">80</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="w-40 h-40 rounded-full border-4 border-white/40 flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Heart className="w-24 h-24 text-red-400 fill-red-400" />
                    </motion.div>
                  </div>

                  {/* Section 3 - Wellness Info */}
                  <div className="min-w-full flex-shrink-0 flex flex-col items-center justify-center h-full gap-6 px-8">
                    <div className="text-center text-white space-y-6">
                      <h2 className="text-3xl font-bold">Cardiac Wellness</h2>
                      <div className="space-y-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <p className="text-white/80 text-sm mb-2">
                            Oxygen Level
                          </p>
                          <div className="w-full bg-white/20 rounded-full h-3">
                            <div
                              className="bg-green-400 h-3 rounded-full"
                              style={{ width: "98%" }}
                            ></div>
                          </div>
                          <p className="text-white font-bold mt-2">98%</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <p className="text-white/80 text-sm mb-2">
                            Circulation
                          </p>
                          <div className="w-full bg-white/20 rounded-full h-3">
                            <div
                              className="bg-blue-400 h-3 rounded-full"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                          <p className="text-white font-bold mt-2">Excellent</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 - Additional Content */}
                  <div className="min-w-full flex-shrink-0 flex flex-col items-center justify-center h-full gap-8 px-8">
                    <div className="text-center text-white space-y-6">
                      <h2 className="text-3xl font-bold">Comprehensive Care</h2>
                      <div className="space-y-4 max-w-md">
                        <motion.div
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                          whileHover={{ scale: 1.05 }}
                        >
                          <p className="text-white/80 text-sm mb-2">
                            🏥 Modern Facilities
                          </p>
                          <p className="text-white">
                            Latest diagnostic imaging technology
                          </p>
                        </motion.div>
                        <motion.div
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                          whileHover={{ scale: 1.05 }}
                        >
                          <p className="text-white/80 text-sm mb-2">
                            👨‍⚕️ Expert Team
                          </p>
                          <p className="text-white">
                            Highly qualified cardiac specialists
                          </p>
                        </motion.div>
                        <motion.div
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                          whileHover={{ scale: 1.05 }}
                        >
                          <p className="text-white/80 text-sm mb-2">
                            ⚡ Fast Results
                          </p>
                          <p className="text-white">
                            24-48 hour report turnaround
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Button - Right */}
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleScrollRight}
                  disabled={currentSection >= totalSections - 1}
                  className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 disabled:bg-red-500/50 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all duration-300 z-30 cursor-pointer font-bold text-2xl shadow-lg hover:shadow-xl"
                  title="Next Section"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>

                {/* Navigation Button - Left */}
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleScrollLeft}
                  disabled={currentSection <= 0}
                  className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 text-white flex items-center justify-center transition-all duration-300 z-30 cursor-pointer font-bold text-2xl shadow-lg hover:shadow-xl"
                  title="Previous Section"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                {/* Pagination Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {Array.from({ length: totalSections }).map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setCurrentSection(index);
                        scrollToSection(index);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSection === index
                          ? "bg-red-500 w-8"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      title={`Go to section ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Animated Heart Overlay - Bottom Left - REMOVED */}

              {/* Overlay Card - Top Left - REMOVED */}

              {/* Overlay Card - Top Right - REMOVED */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
