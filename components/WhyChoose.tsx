"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Activity,
  Heart,
  Stethoscope,
  AlertCircle,
} from "lucide-react";

const quickFacts = [
  {
    icon: Heart,
    title: "Full",
    value: "Comprehensive Diagnostics",
    description:
      "Advanced diagnostic tools including ECG and echocardiography for accurate assessment",
  },
  {
    icon: Stethoscope,
    title: "Care",
    value: "Advanced Cardiac Care",
    description:
      "State-of-the-art cardiac treatment with cutting-edge personalized care plans",
  },
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
    icon: AlertCircle,
    title: "Always",
    value: "Walk-ins Welcome",
    description: "Flexible scheduling with walk-in appointments available",
  },
  {
    icon: Activity,
    title: "Expert",
    value: "Licensed Staff",
    description: "Highly qualified and experienced cardiac technicians",
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
            <span className="text-primary-teal">
              FIT CARDIAC DIAGNOSTIC CENTER
            </span>
          </h2>
          <p className="text-lg text-secondary-gray-light max-w-2xl mx-auto">
            Trusted cardiac diagnostics with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-medical transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary-teal rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary-teal  mb-2">
                    {fact.value}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-gray mb-3">
                    {fact.title}
                  </h3>
                  <p className="text-sm text-secondary-gray-light leading-relaxed">
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
