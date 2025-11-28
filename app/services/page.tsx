"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Heart,
  Activity,
  Shield,
  Stethoscope,
  Clock,
  Users,
  FileText,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: Stethoscope,
    title: "Cardiology Consultation",
    description:
      "Expert consultation with experienced cardiologists for comprehensive cardiac assessment and treatment planning.",
    features: [
      "Full Cardiac Evaluation",
      "Treatment Planning",
      "Follow-up Care",
    ],
    color: "from-red-400 to-pink-500",
  },
  {
    icon: Heart,
    title: "Internal Medicine (Cardiology)",
    description:
      "Specialized internal medicine services focusing on cardiovascular health and comprehensive disease management.",
    features: [
      "Preventive Care",
      "Chronic Disease Management",
      "Risk Assessment",
    ],
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Activity,
    title: "Echocardiogram",
    description:
      "Advanced ultrasound imaging of your heart to assess structure, function, and blood flow patterns with precision.",
    features: [
      "Heart Structure Analysis",
      "Valve Function",
      "Blood Flow Assessment",
    ],
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Stress Echocardiogram",
    description:
      "Comprehensive cardiac imaging during controlled exercise to evaluate heart function under physical stress conditions.",
    features: ["Exercise Monitoring", "Real-time Imaging", "Stress Analysis"],
    color: "from-purple-400 to-indigo-500",
  },
  {
    icon: Activity,
    title: "Exercise Stress Test",
    description:
      "Monitor heart activity, blood pressure, and ECG during controlled exercise to detect cardiac abnormalities.",
    features: [
      "ECG Monitoring",
      "Blood Pressure Tracking",
      "Exercise Capacity",
    ],
    color: "from-orange-400 to-red-500",
  },
  {
    icon: Clock,
    title: "Heart Monitor (Holter)",
    description:
      "Portable 24-48 hour ECG monitoring to track heart rhythm and detect irregular heartbeats in daily activities.",
    features: [
      "24-48 Hour Monitoring",
      "Rhythm Analysis",
      "Daily Activity Tracking",
    ],
    color: "from-teal-400 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Resting ECG",
    description:
      "Quick and accurate electrocardiogram to measure electrical activity and rhythm of your heart at rest.",
    features: [
      "Quick Assessment",
      "Electrical Activity",
      "Heart Rhythm Analysis",
    ],
    color: "from-pink-400 to-rose-500",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/10 via-primary-green-light/20 to-white" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="container mx-auto relative z-10">
            <div className="flex flex-col items-center justify-center text-center gap-6 w-full">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-gray mb-4 sm:mb-6 text-center px-2">
                  Cardiac{" "}
                  <span className="text-primary-teal">Diagnostic Services</span>
                </h1>
                <p className="text-base sm:text-lg text-secondary-gray-light leading-relaxed text-center px-4">
                  Offering the highest quality of diagnostic imaging with fully
                  digitalized cardiac services.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="container mx-auto">
            {/* Diagnostic Imaging Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-teal/30 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary-teal" />
                  <p className="text-sm font-semibold text-primary-teal uppercase tracking-[0.3em]">
                    Diagnostic Imaging
                  </p>
                </div>
                <h3 className="text-3xl font-bold text-secondary-gray mb-6">
                  Offering the{" "}
                  <span className="bg-gradient-to-r from-primary-teal to-red-500 bg-clip-text text-transparent">
                    highest quality
                  </span>{" "}
                  of diagnostic imaging services
                </h3>
                <p className="text-secondary-gray-light mb-8 text-lg leading-relaxed">
                  Every study is performed on fully digital equipment,
                  interpreted by licensed cardiac specialists, and delivered
                  through secure paperless reporting for referring physicians.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-teal/50 transition-all duration-300"
                  >
                    <FileText className="w-8 h-8 text-primary-teal mb-3" />
                    <h4 className="font-semibold text-secondary-gray mb-2">
                      Portal Access
                    </h4>
                    <p className="text-sm text-secondary-gray-light">
                      Portal access for referring physicians to view reports
                      online.
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-teal/50 transition-all duration-300"
                  >
                    <FileText className="w-8 h-8 text-primary-teal mb-3" />
                    <h4 className="font-semibold text-secondary-gray mb-2">
                      Paperless Reporting
                    </h4>
                    <p className="text-sm text-secondary-gray-light">
                      Paperless reporting available upon request for
                      convenience.
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-teal/50 transition-all duration-300"
                  >
                    <Clock className="w-8 h-8 text-primary-teal mb-3" />
                    <h4 className="font-semibold text-secondary-gray mb-2">
                      Fast Turnaround
                    </h4>
                    <p className="text-sm text-secondary-gray-light">
                      Fast report turnaround times and walk-ins welcome.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Cardiac Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-teal/30 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary-teal" />
                  <p className="text-sm font-semibold text-primary-teal uppercase tracking-[0.3em]">
                    Cardiac Services
                  </p>
                </div>
                <h3 className="text-3xl font-bold text-secondary-gray mb-6">
                  <span className="bg-gradient-to-r from-primary-teal to-red-500 bg-clip-text text-transparent">
                    Fully digitized
                  </span>{" "}
                  cardiac services
                </h3>
                <p className="text-secondary-gray-light mb-8 text-lg leading-relaxed">
                  Comprehensive diagnostic menu backed by experienced
                  technologists and cardiologists.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  {/* Cardiology Consultation */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-teal/50 transition-all duration-300 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-teal to-cyan-500 flex items-center justify-center mb-4">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary-gray mb-3">
                      Cardiology Consultation
                    </h4>
                    <p className="text-sm text-secondary-gray-light mb-4 flex-grow">
                      Expert cardiac assessment and personalized treatment
                      planning by experienced cardiologists.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        "Full Cardiac Evaluation",
                        "Treatment Planning",
                        "Follow-up Care",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-secondary-gray-light"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Internal Medicine */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-teal/50 transition-all duration-300 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary-gray mb-3">
                      Internal Medicine (Cardiology)
                    </h4>
                    <p className="text-sm text-secondary-gray-light mb-4 flex-grow">
                      Specialized care for cardiovascular health and
                      comprehensive disease management.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        "Preventive Care",
                        "Chronic Disease Management",
                        "Risk Assessment",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-secondary-gray-light"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Echocardiogram */}
                 

                  {/* Stress Echocardiogram */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-teal/50 transition-all duration-300 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary-gray mb-3">
                      Stress Echocardiogram
                    </h4>
                    <p className="text-sm text-secondary-gray-light mb-4 flex-grow">
                      Advanced imaging to evaluate heart function under
                      controlled physical stress.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        "Exercise Monitoring",
                        "Real-time Imaging",
                        "Stress Analysis",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-secondary-gray-light"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Exercise Stress Test */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-teal/50 transition-all duration-300 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary-gray mb-3">
                      Exercise Stress Test
                    </h4>
                    <p className="text-sm text-secondary-gray-light mb-4 flex-grow">
                      Monitored exercise testing to detect cardiac abnormalities
                      and assess capacity.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        "ECG Monitoring",
                        "Blood Pressure Tracking",
                        "Exercise Capacity",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-secondary-gray-light"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Heart Monitor (Holter) */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-teal/50 transition-all duration-300 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary-gray mb-3">
                      Heart Monitor (Holter)
                    </h4>
                    <p className="text-sm text-secondary-gray-light mb-4 flex-grow">
                      24-48-72 hours 7-14 days portable monitoring to track heart rhythm
                      during daily activities.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        "24-48 Hour Monitoring",
                        "Rhythm Analysis",
                        "Daily Activity Tracking",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-secondary-gray-light"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Resting ECG */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-teal/50 transition-all duration-300 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary-gray mb-3">
                      Resting ECG
                    </h4>
                    <p className="text-sm text-secondary-gray-light mb-4 flex-grow">
                      Quick, accurate measurement of heart's electrical activity
                      and rhythm at rest.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        "Quick Assessment",
                        "Electrical Activity",
                        "Heart Rhythm Analysis",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-secondary-gray-light"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Ambulatory BP Monitor */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-teal/50 transition-all duration-300 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary-gray mb-3">
                      Ambulatory BP Monitor
                    </h4>
                    <p className="text-sm text-secondary-gray-light mb-4 flex-grow">
                      24-hour blood pressure monitoring to assess hypertension
                      and treatment efficacy.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        "24-Hour Monitoring",
                        "BP Variability Analysis",
                        "Hypertension Assessment",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-secondary-gray-light"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Spirometry */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-teal/50 transition-all duration-300 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary-gray mb-3">
                      Echocardiogram
                    </h4>
                    <p className="text-sm text-secondary-gray-light mb-4 flex-grow">
                      Precision ultrasound imaging to assess heart structure,
                      function, and blood flow.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        "Heart Structure Analysis",
                        "Valve Function",
                        "Blood Flow Assessment",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-secondary-gray-light"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-teal to-primary-teal-dark text-white">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Schedule a Service?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Contact us today to learn more about our cardiac care services
              </p>
              <Link
                href="/referral"
                className="inline-block bg-white text-primary-teal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-green-light transition-all duration-200 shadow-xl"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
