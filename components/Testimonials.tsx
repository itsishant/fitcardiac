"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "FIT CARDIAC DIAGNOSTIC CENTRE gave me answers when I needed them most. The team was professional, caring, and the tests were explained clearly.",
  },
  {
    name: "Michael Chen",
    role: "Patient",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "Outstanding cardiac care! The doctors took time to explain everything and made me feel comfortable throughout my treatment journey.",
  },
  {
    name: "Emily Rodriguez",
    role: "Patient",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    text: "The team at FIT CARDIAC helped me understand my heart health better. The reports were digital, easy to share with my doctor, and ready quickly.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-gray mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary-teal to-red-500 bg-clip-text text-transparent">
              Patients Say
            </span>
          </h2>
          <p className="text-lg text-secondary-gray-light max-w-2xl mx-auto">
            Real stories from patients who trusted us with their cardiac care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-red-500/15 transition-all duration-300 relative border border-gray-100 hover:border-primary-teal/30"
            >
              <Quote className="w-12 h-12 text-primary-teal/20 absolute top-4 right-4" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-secondary-gray-light mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-bold text-secondary-gray">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-secondary-gray-light">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
