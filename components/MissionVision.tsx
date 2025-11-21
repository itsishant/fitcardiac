'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

const cards = [
  {
    title: 'Mission',
    description:
      'Offering high-quality cardiovascular care experiences, including consultations and diagnostic services.',
    icon: Target,
  },
  {
    title: 'Vision',
    description:
      'Best patient outcomes: Aim to achieve the best health outcomes for patients by preventing, diagnosing, and treating cardiovascular disease.',
    icon: Eye,
  },
]

export default function MissionVision() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-green-light/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary-teal font-semibold uppercase tracking-[0.3em] text-xs mb-4">
            Purpose
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-gray mb-6">
            Mission & Vision
          </h2>
          <p className="text-secondary-gray-light text-lg">
            FIT CARDIAC DIAGNOSTIC CENTRE is dedicated to elevating heart health across Canada with
            trusted diagnostics, compassionate consultations, and proactive prevention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-primary-green/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-primary-teal/5" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary-green text-primary-teal flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary-gray mb-4">{card.title}</h3>
                  <p className="text-secondary-gray-light leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


