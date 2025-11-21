'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Heart, Activity, Shield, Stethoscope, Clock, Users, FileText, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Heart,
    title: 'Cardiac Consultation',
    description: 'Comprehensive cardiac evaluations and consultations with experienced cardiologists.',
    features: ['ECG Analysis', 'Risk Assessment', 'Treatment Planning'],
    color: 'from-red-400 to-pink-500',
  },
  {
    icon: Activity,
    title: 'Emergency Cardiac Care',
    description: '24/7 emergency cardiac services with rapid response teams for critical heart conditions.',
    features: ['24/7 Availability', 'Rapid Response', 'Critical Care'],
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Preventive Cardiology',
    description: 'Proactive heart health management through screenings, lifestyle counseling, and risk reduction.',
    features: ['Health Screenings', 'Lifestyle Counseling', 'Risk Reduction'],
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Stethoscope,
    title: 'Cardiac Diagnostics',
    description: 'Advanced diagnostic services including echocardiography, stress tests, and cardiac MRI.',
    features: ['Echocardiography', 'Stress Tests', 'Cardiac MRI'],
    color: 'from-purple-400 to-indigo-500',
  },
  {
    icon: Clock,
    title: 'Cardiac Rehabilitation',
    description: 'Comprehensive rehabilitation programs to help patients recover and improve heart health.',
    features: ['Exercise Programs', 'Nutrition Counseling', 'Support Groups'],
    color: 'from-orange-400 to-red-500',
  },
  {
    icon: Users,
    title: 'Cardiac Surgery',
    description: 'Expert cardiac surgical procedures performed by board-certified cardiac surgeons.',
    features: ['Bypass Surgery', 'Valve Replacement', 'Minimally Invasive'],
    color: 'from-teal-400 to-cyan-500',
  },
  {
    icon: FileText,
    title: 'Cardiac Monitoring',
    description: 'Continuous cardiac monitoring services including Holter monitoring and event recorders.',
    features: ['Holter Monitoring', 'Event Recorders', 'Remote Monitoring'],
    color: 'from-pink-400 to-rose-500',
  },
  {
    icon: TrendingUp,
    title: 'Heart Health Programs',
    description: 'Specialized programs for managing chronic heart conditions and improving quality of life.',
    features: ['Chronic Care Management', 'Medication Management', 'Follow-up Care'],
    color: 'from-indigo-400 to-purple-500',
  },
]

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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-secondary-gray mb-6">
                Cardiac <span className="text-primary-teal">Diagnostic Services</span>
              </h1>
              <p className="text-xl text-secondary-gray-light leading-relaxed">
                Offering the highest quality of diagnostic imaging with fully digitalized cardiac services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary-green-light">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <p className="text-sm font-semibold text-primary-teal uppercase tracking-[0.3em] mb-3">
                Diagnostic Imaging
              </p>
              <h3 className="text-2xl font-bold text-secondary-gray mb-4">
                Offering the highest quality of diagnostic imaging services
              </h3>
              <p className="text-secondary-gray-light mb-6">
                Every study is performed on fully digital equipment, interpreted
                by licensed cardiac specialists, and delivered through secure
                paperless reporting for referring physicians.
              </p>
              <ul className="space-y-3 text-secondary-gray">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary-teal" />
                  <span>Portal access for referring physicians to view reports online.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary-teal" />
                  <span>Paperless reporting available upon request.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary-teal" />
                  <span>Fast report turnaround times and walk-ins welcome.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <p className="text-sm font-semibold text-primary-teal uppercase tracking-[0.3em] mb-3">
                Cardiac Services
              </p>
              <h3 className="text-2xl font-bold text-secondary-gray mb-4">
                Fully digitized cardiac services
              </h3>
              <p className="text-secondary-gray-light mb-6">
                Comprehensive diagnostic menu backed by experienced technologists and cardiologists.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-secondary-gray">
                {[
                  'Echocardiography',
                  'ECG',
                  'Holter Monitor',
                  'Stress Echo',
                  'Stress Test',
                  'Ambulatory BP Monitor',
                  'Fast report turnaround time',
                  'Highly qualified licensed staff',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-teal" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-gray mb-3">
                      {service.title}
                    </h3>
                    <p className="text-secondary-gray-light mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-secondary-gray-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="text-primary-teal font-semibold hover:text-primary-teal-dark transition-colors inline-flex items-center gap-2"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
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
                href="/contact"
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
  )
}

