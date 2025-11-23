"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Activity,
} from "lucide-react";

const quickFacts = [
  {
    icon: Shield,
    title: "Fully Digital",
    value: "100%",
    description:
      "All cardiac imaging is fully digitalized for accuracy and speed",
  },
  {
    icon: Clock,
    title: "Fast Reports",
    value: "24-48hrs",
    description: "Quick turnaround time for diagnostic reports",
  },
  {
    icon: Activity,
    title: "Licensed Staff",
    value: "Expert",
    description: "Highly qualified and experienced cardiac technicians",
  },
  {
    icon: Shield,
    title: "Comprehensive Diagnostics",
    value: "Full",
    description: "Advanced diagnostic tools including ECG, echocardiography, and cardiac MRI for accurate assessment",
  },
  {
    icon: Activity,
    title: "Advanced Cardiac Care",
    value: "Care",
    description: "State-of-the-art cardiac treatment with cutting-edge technology and personalized care plans",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-medical-red-light to-medical-blue-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-gray mb-4">
            Why Choose{" "}
            <span className="text-primary-teal">FIT CARDIAC DIAGNOSTIC CENTRE</span>
          </h2>
          <p className="text-lg text-secondary-gray-light max-w-2xl mx-auto">
            Trusted cardiac diagnostics with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-medical transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-teal to-primary-teal-dark rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-teal mb-2">
                    {fact.value}
                  </div>
                  <h3 className="text-lg font-bold text-secondary-gray mb-2">
                    {fact.title}
                  </h3>
                  <p className="text-sm text-secondary-gray-light">
                    {fact.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
