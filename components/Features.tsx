"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Activity,
  Shield,
  Clock,
  Users,
  Stethoscope,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Cardiology Consultation",
    description:
      "Expert consultation with experienced cardiologists for comprehensive cardiac assessment and treatment planning.",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: Heart,
    title: "Internal Medicine (Cardiology)",
    description:
      "Specialized internal medicine services focusing on cardiovascular health and disease management.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Echocardiogram",
    description:
      "Advanced ultrasound imaging of your heart to assess structure, function, and blood flow patterns.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Stress Echocardiogram",
    description:
      "Comprehensive cardiac imaging during exercise to evaluate heart function under physical stress.",
    color: "from-purple-400 to-indigo-500",
  },
  {
    icon: Heart,
    title: "Exercise Stress Test",
    description:
      "Monitor heart activity and blood pressure during controlled exercise to detect cardiac abnormalities.",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: Heart,
    title: "Heart Monitor (Holter)",
    description:
      "Portable 24-hour ECG monitoring to track heart rhythm and detect irregular heartbeats.",
    color: "from-teal-400 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Resting ECG",
    description:
      "Quick and accurate electrocardiogram to measure electrical activity and rhythm of your heart.",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: Heart,
    title: "Ambulatory BP Monitor",
    description:
      "24-hour blood pressure monitoring to assess hypertension and treatment efficacy throughout your daily activities.",
    color: "from-indigo-400 to-purple-500",
  },
];

export default function Features() {
  return (
    <section
      id="why-choose"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314B8A6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
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
            Our Diagnostic{" "}
            <span className="bg-gradient-to-r from-primary-teal to-red-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-secondary-gray-light max-w-2xl mx-auto">
            Comprehensive cardiac diagnostic services with fully digital
            imaging, fast reporting, and expert licensed staff.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 h-full border-2 border-gray-100 hover:border-primary-teal/50">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-red-500/30 transition-all duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-gray mb-3 group-hover:text-primary-teal transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-gray-light leading-relaxed text-sm">
                    {feature.description}
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
