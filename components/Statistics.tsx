"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function StatCard({ icon, title, description, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.2 + 0.3,
          type: "spring",
          stiffness: 200,
        }}
        className="w-16 h-16 bg-gradient-to-br from-primary-teal to-red-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/30"
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold text-secondary-gray mb-4">{title}</h3>
      <p className="text-secondary-gray-light leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Statistics() {
  const stats = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-primary-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "879 Cardiac Centers and Hospitals",
      description:
        "Access to a network of specialized cardiac care facilities and hospitals equipped with state-of-the-art technology for comprehensive heart health services.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-primary-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "2.5K+ Cardiac Specialists and Health Workers",
      description:
        "Connect with experienced cardiologists, cardiac surgeons, and dedicated healthcare professionals committed to your heart health and recovery.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-primary-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "100+ Cardiac Health Services",
      description:
        "Comprehensive range of cardiac services including diagnostics, preventive care, treatment, rehabilitation, and ongoing heart health management.",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
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
            Our Cardiac Care Network
          </h2>
          <p className="text-lg text-secondary-gray-light max-w-2xl mx-auto">
            Connecting you with the best cardiac care resources and specialists
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              description={stat.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
