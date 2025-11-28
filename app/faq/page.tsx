"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is FIT CARDIAC DIAGNOSTIC CENTRE?",
    answer:
      "FIT CARDIAC DIAGNOSTIC CENTRE is a specialized cardiac imaging and stress testing centre in Canada. We provide fully digital echocardiography, ECG, Holter monitoring, stress echo, stress testing, and ambulatory BP monitoring for early detection and management of heart disease.",
  },
  {
    question: "What cardiac services do you offer?",
    answer:
      "We offer comprehensive cardiac services including consultations, diagnostics (ECG, echocardiography, stress tests), preventive cardiology, cardiac rehabilitation, interventional procedures, and cardiac surgery. Our services are available at multiple facilities across our network.",
  },
  {
    question: "Do you provide emergency cardiac care?",
    answer:
      "Yes, we provide 24/7 emergency cardiac services. Our main hospital has a dedicated cardiac emergency department with rapid response teams. In case of a cardiac emergency, call 911 or go directly to our emergency department.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling our main line at +1 (613) 676-1191 using our online booking system, or visiting our contact page to fill out a form. Our team will help you find the right specialist and convenient time.",
  },
];

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-gray mb-4 sm:mb-6 px-2">
                Frequently Asked{" "}
                <span className="text-primary-teal">Questions</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-gray-light leading-relaxed px-4">
                Find answers to common questions about our services and cardiac
                care
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => {
                const isOpen = openQuestion === index;
                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenQuestion(isOpen ? null : index)}
                      className="w-full px-4 sm:px-6 py-4 bg-primary-green-light/50 flex items-center justify-between hover:bg-primary-green-light transition-colors"
                    >
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-gray text-left pr-2">
                        {faq.question}
                      </h2>
                      <ChevronDown
                        className={`w-6 h-6 text-primary-teal transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6">
                            <p className="text-secondary-gray-light leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
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
  );
}
