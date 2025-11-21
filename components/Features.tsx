'use client'

import { motion } from 'framer-motion'
import { Heart, Activity, Shield, Clock, Users, Stethoscope } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Advanced Cardiac Care',
    description: 'State-of-the-art cardiac treatment with cutting-edge technology and personalized care plans.',
    color: 'from-red-400 to-pink-500',
  },
  {
    icon: Activity,
    title: '24/7 Emergency Services',
    description: 'Round-the-clock cardiac emergency care with rapid response teams ready when you need us most.',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Preventive Cardiology',
    description: 'Comprehensive heart health screenings and preventive measures to keep your heart healthy.',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Clock,
    title: 'Quick Appointments',
    description: 'Fast-track appointment booking system ensuring you get timely cardiac care consultations.',
    color: 'from-purple-400 to-indigo-500',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Board-certified cardiologists and cardiac specialists with years of experience.',
    color: 'from-orange-400 to-red-500',
  },
  {
    icon: Stethoscope,
    title: 'Comprehensive Diagnostics',
    description: 'Advanced diagnostic tools including ECG, echocardiography, and cardiac MRI for accurate assessment.',
    color: 'from-teal-400 to-cyan-500',
  },
]

export default function Features() {
  return (
    <section id="why-choose" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314B8A6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-gray mb-4">
            Why Choose{' '}
            <span className="text-primary-teal">FIT CARDIAC DIAGNOSTIC CENTRE</span>
          </h2>
          <p className="text-lg text-secondary-gray-light max-w-2xl mx-auto">
            Fully digital cardiac imaging, fast reporting, and expert staff—where every heartbeat matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-gray mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-gray-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

