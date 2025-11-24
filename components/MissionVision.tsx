"use client";

import { motion } from "framer-motion";
import { Target, Eye, ArrowRight } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary-teal/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary-green/10 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
      

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-white rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-teal/20 to-transparent rounded-bl-[100%] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary-teal text-white flex items-center justify-center mb-8 shadow-lg shadow-primary-teal/20 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-8 h-8" />
              </div>

              <h3 className="text-3xl font-bold text-secondary-gray mb-4 flex items-center gap-3">
                Our Mission
                <ArrowRight className="w-5 h-5 text-primary-teal opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>

              <p className="text-secondary-gray-light text-lg leading-relaxed">
                Offering high-quality cardiovascular care experiences, including
                consultations and diagnostic services.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-secondary-gray rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-teal/10 rounded-full blur-3xl -mr-16 -mt-16" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm text-primary-teal flex items-center justify-center mb-8 border border-white/10 group-hover:bg-white/20 transition-colors duration-500">
                <Eye className="w-8 h-8" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                Our Vision
                <ArrowRight className="w-5 h-5 text-primary-teal opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Best patient outcomes: Aim to achieve the best health outcomes
                for patients by preventing, diagnosing, and treating
                cardiovascular disease.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
