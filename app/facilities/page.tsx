'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Award, Activity } from 'lucide-react'

const facilities = [
  {
    name: 'FIT CARDIAC – Main Diagnostic Centre',
    location: '123 Medical Center Dr, Healthcare City',
    phone: '+1 (555) 123-4567',
    email: 'main@cardiocare.com',
    hours: '24/7 Emergency Services',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    features: ['Advanced Cardiac Surgery', 'ICU', 'Emergency Department', 'Cardiac Rehabilitation'],
    rating: 4.9,
  },
  {
    name: 'FIT CARDIAC – North Clinic',
    location: '456 Health Avenue, North District',
    phone: '+1 (555) 234-5678',
    email: 'north@cardiocare.com',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    features: ['Cardiac Consultation', 'Diagnostics', 'Preventive Care', 'Outpatient Services'],
    rating: 4.8,
  },
  {
    name: 'FIT CARDIAC – South Medical Center',
    location: '789 Wellness Blvd, South Region',
    phone: '+1 (555) 345-6789',
    email: 'south@cardiocare.com',
    hours: 'Mon-Sun: 7AM-9PM',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop',
    features: ['Cardiac Diagnostics', 'Interventional Procedures', '24/7 Emergency', 'Specialist Care'],
    rating: 4.9,
  },
  {
    name: 'FIT CARDIAC – East Outpatient Centre',
    location: '321 Care Street, East Side',
    phone: '+1 (555) 456-7890',
    email: 'east@cardiocare.com',
    hours: 'Mon-Fri: 7AM-7PM',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop',
    features: ['Routine Checkups', 'Cardiac Monitoring', 'Rehabilitation', 'Health Screenings'],
    rating: 4.7,
  },
]

export default function FacilitiesPage() {
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
                Our <span className="text-primary-teal">Facilities</span>
              </h1>
              <p className="text-xl text-secondary-gray-light leading-relaxed">
                State-of-the-art cardiac care facilities equipped with the latest technology and staffed by expert teams
              </p>
            </motion.div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-64">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Award className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-sm">{facility.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-secondary-gray mb-4">
                      {facility.name}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3 text-secondary-gray-light">
                        <MapPin className="w-5 h-5 text-primary-teal flex-shrink-0 mt-0.5" />
                        <span>{facility.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-secondary-gray-light">
                        <Phone className="w-5 h-5 text-primary-teal flex-shrink-0" />
                        <a href={`tel:${facility.phone}`} className="hover:text-primary-teal transition-colors">
                          {facility.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-secondary-gray-light">
                        <Mail className="w-5 h-5 text-primary-teal flex-shrink-0" />
                        <a href={`mailto:${facility.email}`} className="hover:text-primary-teal transition-colors">
                          {facility.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-secondary-gray-light">
                        <Clock className="w-5 h-5 text-primary-teal flex-shrink-0" />
                        <span>{facility.hours}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-secondary-gray mb-3 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-primary-teal" />
                        Services Available
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {facility.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-sm bg-primary-green-light text-primary-teal px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-primary-teal text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-teal-dark transition-colors">
                        Get Directions
                      </button>
                      <button className="px-6 py-3 border border-primary-teal text-primary-teal rounded-lg hover:bg-primary-green-light transition-colors">
                        Book Visit
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-secondary-gray mb-4">
                Find a Facility Near You
              </h2>
              <p className="text-lg text-secondary-gray-light">
                Use our interactive map to locate the nearest FIT CARDIAC facility
              </p>
            </motion.div>
            <div className="bg-white rounded-2xl shadow-lg h-96 flex items-center justify-center">
              <p className="text-secondary-gray-light">Interactive Map Integration</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

