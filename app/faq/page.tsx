'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is FIT CARDIAC DIAGNOSTIC CENTRE?',
        answer:
          'FIT CARDIAC DIAGNOSTIC CENTRE is a specialized cardiac imaging and stress testing centre in Canada. We provide fully digital echocardiography, ECG, Holter monitoring, stress echo, stress testing, and ambulatory BP monitoring for early detection and management of heart disease.',
      },
      {
        question: 'How do I schedule an appointment?',
        answer: 'You can schedule an appointment by calling our main line at +1 (555) 123-4567, using our online booking system, or visiting our contact page to fill out a form. Our team will help you find the right specialist and convenient time.',
      },
      {
        question: 'Do you accept insurance?',
        answer:
          'Yes, we accept most major insurance plans. Please contact your insurance provider or our billing team to confirm coverage before your visit. Flexible payment options can be discussed for patients without coverage.',
      },
      {
        question: 'What should I bring to my first appointment?',
        answer: 'Please bring a valid ID, insurance card, list of current medications, medical records from previous providers, and any relevant test results. Arrive 15 minutes early to complete registration forms.',
      },
    ],
  },
  {
    category: 'Services',
    questions: [
      {
        question: 'What cardiac services do you offer?',
        answer: 'We offer comprehensive cardiac services including consultations, diagnostics (ECG, echocardiography, stress tests, cardiac MRI), preventive cardiology, cardiac rehabilitation, interventional procedures, and cardiac surgery. Our services are available at multiple facilities across our network.',
      },
      {
        question: 'Do you provide emergency cardiac care?',
        answer: 'Yes, we provide 24/7 emergency cardiac services. Our main hospital has a dedicated cardiac emergency department with rapid response teams. In case of a cardiac emergency, call 911 or go directly to our emergency department.',
      },
      {
        question: 'What is cardiac rehabilitation?',
        answer: 'Cardiac rehabilitation is a comprehensive program designed to help patients recover from heart conditions. It includes supervised exercise, nutrition counseling, medication management, and emotional support to improve heart health and quality of life.',
      },
      {
        question: 'How long does a cardiac consultation take?',
        answer: 'A typical cardiac consultation lasts 30-60 minutes. This includes a review of your medical history, physical examination, discussion of symptoms, and development of a treatment plan. Additional time may be needed for diagnostic tests.',
      },
    ],
  },
  {
    category: 'Treatment',
    questions: [
      {
        question: 'What are the signs of a heart attack?',
        answer: 'Common signs include chest pain or discomfort, shortness of breath, pain in the arm, back, neck, or jaw, nausea, lightheadedness, or cold sweats. If you experience these symptoms, seek immediate medical attention by calling 911.',
      },
      {
        question: 'How can I prevent heart disease?',
        answer: 'Preventive measures include maintaining a healthy diet, regular exercise, managing stress, avoiding smoking, controlling blood pressure and cholesterol, maintaining a healthy weight, and regular cardiac checkups. Our preventive cardiology program can help create a personalized plan.',
      },
      {
        question: 'What is the recovery time after cardiac surgery?',
        answer: 'Recovery time varies depending on the type of surgery. Minimally invasive procedures may require 2-4 weeks, while open-heart surgery typically requires 6-8 weeks. Our cardiac rehabilitation program helps optimize recovery. Your surgeon will provide specific guidance based on your procedure.',
      },
      {
        question: 'Are there alternatives to cardiac surgery?',
        answer: 'Yes, many cardiac conditions can be treated with less invasive procedures such as angioplasty, stenting, or medication management. Our cardiologists will evaluate all options and recommend the best treatment approach for your specific condition.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<string | null>('General')
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)

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
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary-green-light rounded-full flex items-center justify-center">
                  <HelpCircle className="w-10 h-10 text-primary-teal" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-secondary-gray mb-6">
                Frequently Asked <span className="text-primary-teal">Questions</span>
              </h1>
              <p className="text-xl text-secondary-gray-light leading-relaxed">
                Find answers to common questions about our services, treatments, and cardiac care
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-6">
              {faqs.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
                    className="w-full px-6 py-4 bg-primary-green-light/50 flex items-center justify-between hover:bg-primary-green-light transition-colors"
                  >
                    <h2 className="text-2xl font-bold text-secondary-gray">
                      {category.category}
                    </h2>
                    <ChevronDown
                      className={`w-6 h-6 text-primary-teal transition-transform duration-200 ${
                        openCategory === category.category ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openCategory === category.category && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 space-y-4">
                          {category.questions.map((faq, questionIndex) => {
                            const globalIndex = categoryIndex * 100 + questionIndex
                            const isOpen = openQuestion === globalIndex
                            
                            return (
                              <div
                                key={questionIndex}
                                className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                              >
                                <button
                                  onClick={() => setOpenQuestion(isOpen ? null : globalIndex)}
                                  className="w-full text-left flex items-start justify-between gap-4 group"
                                >
                                  <h3 className="text-lg font-semibold text-secondary-gray group-hover:text-primary-teal transition-colors flex-1">
                                    {faq.question}
                                  </h3>
                                  <ChevronDown
                                    className={`w-5 h-5 text-primary-teal flex-shrink-0 transition-transform duration-200 ${
                                      isOpen ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {isOpen && (
                                    <motion.p
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="mt-3 text-secondary-gray-light leading-relaxed overflow-hidden"
                                    >
                                      {faq.answer}
                                    </motion.p>
                                  )}
                                </AnimatePresence>
                              </div>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12 bg-gradient-to-r from-primary-teal to-primary-teal-dark rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
              <p className="mb-6 text-white/90">
                Our team is here to help. Contact us for more information.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-primary-teal px-8 py-3 rounded-lg font-semibold hover:bg-primary-green-light transition-all duration-200 shadow-lg"
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

