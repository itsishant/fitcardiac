"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeartDiseaseStats from "@/components/HeartDiseaseStats";
import Image from "next/image";
import {
  Heart,
  Target,
  Award,
  Users,
  Shield,
  Clock,
  Activity,
  AlertCircle,
} from "lucide-react";
import MissionVision from "@/components/MissionVision";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We treat every patient with empathy, respect, and personalized attention.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for the highest standards in cardiac care and patient outcomes.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We embrace cutting-edge technology and treatment methods.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work together as a team to provide comprehensive cardiac care.",
    color: "from-green-500 to-emerald-500",
  },
];

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
    icon: AlertCircle,
    title: "Walk-ins Welcome",
    value: "Always",
    description: "Flexible scheduling with walk-in appointments available",
  },
];

export default function AboutPage() {
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-gray mb-4 sm:mb-6 px-2">
                About{" "}
                <span className="text-primary-teal">
                  FIT CARDIAC DIAGNOSTIC CENTRE
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-gray-light leading-relaxed px-4">
                A dedicated cardiac diagnostic centre in Canada, where every
                heartbeat matters.
              </p>
            </motion.div>
          </div>
        </section>

        <MissionVision />

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-gray mb-6 leading-tight">
                Driven by <span className="text-primary-teal">Excellence</span>{" "}
                in Cardiac Care
              </h2>
              <p className="text-secondary-gray-light text-lg leading-relaxed">
                At FIT CARDIAC DIAGNOSTIC CENTRE, we combine advanced technology
                with compassionate care to ensure the best possible outcomes for
                every patient.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/center1.jpeg"
                    alt="Cardiac care team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-green rounded-2xl opacity-20 blur-2xl" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-secondary-gray">
                  Our Centre
                </h2>
                <p className="text-lg text-secondary-gray-light leading-relaxed">
                  FIT CARDIAC DIAGNOSTIC CENTRE is focused exclusively on
                  cardiac diagnostics and stress testing. We provide the highest
                  quality of diagnostic imaging services in a comfortable,
                  patient‑centred environment.
                </p>
                <p className="text-lg text-secondary-gray-light leading-relaxed">
                  Our fully digital cardiac services include Echocardiography,
                  ECG, Holter monitoring, Stress Echo, and Stress Testing.
                  Referring physicians can securely access reports through our
                  online portal, with paperless reporting available on request.
                </p>
                <p className="text-lg text-secondary-gray-light leading-relaxed">
                  With fast report turnaround times, highly qualified licensed
                  staff, and walk‑ins welcome, we make it easier for Canadians
                  to get the cardiac answers they need, when they need them.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-primary-green-light/20 relative overflow-hidden">
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
                Our <span className="text-primary-teal">Values</span>
              </h2>
              <p className="text-lg text-secondary-gray-light max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-gray mb-3">
                      {value.title}
                    </h3>
                    <p className="text-secondary-gray-light">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-gray text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10+", label: "Specialists" },
                { number: "20+", label: "Years of Excellence" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary-teal mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
