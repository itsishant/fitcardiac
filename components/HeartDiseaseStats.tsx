'use client'

import { motion } from 'framer-motion'
import { HeartPulse, BarChart3, Activity, Users } from 'lucide-react'

const stats = [
  {
    icon: HeartPulse,
    label: 'Canadians with diagnosed heart disease',
    value: '2.6M',
    detail: '≈1 in 12 adults age 20+ (second leading cause of death).',
  },
  {
    icon: Activity,
    label: 'Annual deaths in Canada',
    value: '50,000+',
    detail: 'About 14 adults with diagnosed heart disease die each hour.',
  },
  {
    icon: BarChart3,
    label: 'New ischemic heart disease diagnoses (2017–2018)',
    value: '158,700',
    detail: 'Heart failure: ~92,900 new diagnoses (aged 40+) in the same period.',
  },
  {
    icon: Users,
    label: 'Men vs. women',
    value: 'Men higher',
    detail: 'Men are diagnosed earlier and have higher heart attack rates.',
  },
]

const detailData = [
  {
    title: 'Prevalence & Mortality',
    bullets: [
      'Overall prevalence: ~8.5% of adults with ischemic heart disease.',
      'Heart failure prevalence ranges from 3.09%–3.27% (2022–2023).',
      'Heart disease accounts for 50,000+ deaths annually in Canada.',
    ],
  },
  {
    title: 'Rates by Demographic',
    bullets: [
      'Men have higher diagnosis and mortality rates, especially under 65.',
      'Over 80% of Canadians with heart failure are 65 years or older.',
      'Gap between men and women narrows with increasing age for some conditions.',
    ],
  },
  {
    title: 'New Diagnoses per Year (2017–2018)',
    bullets: [
      'Ischemic heart disease: ~158,700 adults.',
      'Heart attack (acute MI): ~63,200 adults.',
      'Heart failure: ~92,900 adults aged 40+.',
    ],
  },
  {
    title: 'What Drives Risk',
    bullets: [
      'Age, sex, diabetes, high blood pressure, and high cholesterol.',
      'Lifestyle factors: smoking, inactivity, poor diet, alcohol.',
      'Early detection through imaging reduces complications.',
    ],
  },
]

export default function HeartDiseaseStats() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green-light/20 via-white to-primary-teal/5" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary-teal/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-gray mb-4">
            Heart Disease in <span className="text-primary-teal">Canada</span>
          </h2>
          <p className="text-lg text-secondary-gray-light max-w-3xl mx-auto">
            Heart disease is the second leading cause of death in Canada. Early
            diagnosis and high‑quality cardiac imaging can change the story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-green-light flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary-teal" />
                </div>
                <div className="text-3xl font-bold text-secondary-gray mb-2">
                  {item.value}
                </div>
                <p className="font-semibold text-secondary-gray mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-secondary-gray-light leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailData.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-secondary-gray mb-3">
                {card.title}
              </h3>
              <ul className="space-y-2 text-sm text-secondary-gray-light">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-primary-teal" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-12 rounded-3xl p-8 
             bg-gradient-to-br from-teal-200 to-cyan-200  
             border border-blue-300/30 
             shadow-lg shadow-blue-200/40 
             text-secondary-gray"
>
  <h4 className="text-2xl text-center font-extrabold mb-8 tracking-wide text-secondary-gray">
    Why These Numbers Matter for FIT CARDIAC DIAGNOSTIC CENTRE
  </h4>

  {/* Infographic Bullet Points */}
  <div className="space-y-4 mb-6 justify-center text-neutral-900 text-[1.05rem]">
    <div className="flex gap-3 justify-center">
      
      <p><b>Early detection leads to better outcomes</b>—faster intervention reduces long-term cardiac risk.</p>
    </div>
    
    <div className="flex gap-3 justify-center"> 
      
      <p><b>Digital echo, ECG, Holter & stress tests</b>—give physicians clearer, faster diagnostic insights.</p>
    </div>

    <div className="flex gap-3 justify-center"> 
      <p><b>ABPM & continuous monitoring</b>—help track risk factors before they become severe.</p>
    </div>
  </div>

  {/* Mini Metrics Row */}
  
</motion.div>




      </div>
    </section>
  )
}


