'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Mail, Phone, Award, GraduationCap } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    specialization: 'Cardiologist',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    bio: 'Board-certified cardiologist specializing in preventive cardiology and heart disease management.',
    education: 'MD, Harvard Medical School',
    achievements: ['Fellow of American College of Cardiology', 'Published 50+ Research Papers'],
  },
  {
    name: 'Dr. James Anderson',
    specialization: 'Cardiac Surgeon',
    experience: '20+ Years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    bio: 'Renowned cardiac surgeon with expertise in minimally invasive cardiac procedures.',
    education: 'MD, Johns Hopkins University',
    achievements: ['Pioneer in Robotic Cardiac Surgery', 'Award-Winning Surgeon'],
  },
  {
    name: 'Dr. Emily Chen',
    specialization: 'Interventional Cardiologist',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1594824476887-46a1c0441e4a?w=400&h=400&fit=crop',
    bio: 'Expert in interventional cardiology procedures including angioplasty and stenting.',
    education: 'MD, Stanford University',
    achievements: ['Expert in Complex Interventions', 'Teaching Faculty'],
  },
  {
    name: 'Dr. Michael Rodriguez',
    specialization: 'Electrophysiologist',
    experience: '18+ Years',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop',
    bio: 'Specialist in heart rhythm disorders and advanced cardiac electrophysiology.',
    education: 'MD, Mayo Clinic',
    achievements: ['Expert in Cardiac Ablation', 'Research Leader'],
  },
  {
    name: 'Dr. Lisa Thompson',
    specialization: 'Pediatric Cardiologist',
    experience: '14+ Years',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop',
    bio: 'Dedicated to providing specialized cardiac care for children and adolescents.',
    education: 'MD, Boston Children\'s Hospital',
    achievements: ['Pediatric Heart Specialist', 'Child-Friendly Care Expert'],
  },
  {
    name: 'Dr. Robert Kim',
    specialization: 'Heart Failure Specialist',
    experience: '16+ Years',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
    bio: 'Expert in managing advanced heart failure and cardiac transplantation.',
    education: 'MD, Cleveland Clinic',
    achievements: ['Transplant Specialist', 'Advanced Heart Failure Expert'],
  },
]

export default function DoctorsPage() {
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
                Our <span className="text-primary-teal">Cardiac Specialists</span>
              </h1>
              <p className="text-xl text-secondary-gray-light leading-relaxed">
                Meet our team of experienced cardiologists and cardiac specialists dedicated to your heart health
              </p>
            </motion.div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-64 bg-gradient-to-br from-primary-teal/20 to-primary-green-light">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-secondary-gray mb-1">
                          {doctor.name}
                        </h3>
                        <p className="text-primary-teal font-semibold mb-2">
                          {doctor.specialization}
                        </p>
                        <p className="text-sm text-secondary-gray-light flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {doctor.experience} Experience
                        </p>
                      </div>
                    </div>
                    <p className="text-secondary-gray-light mb-4 leading-relaxed">
                      {doctor.bio}
                    </p>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-secondary-gray-light flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-primary-teal" />
                        {doctor.education}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex gap-2 flex-wrap">
                        {doctor.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary-green-light text-primary-teal px-3 py-1 rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <button className="flex-1 bg-primary-teal text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-teal-dark transition-colors">
                        Request Consultation
                      </button>
                      <button className="px-4 py-2 border border-primary-teal text-primary-teal rounded-lg hover:bg-primary-green-light transition-colors">
                        <Mail className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
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
                Need Help Choosing a Doctor?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Our team can help you find the right cardiac specialist for your needs
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-primary-teal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-green-light transition-all duration-200 shadow-xl"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

