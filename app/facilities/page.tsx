"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Award, Activity } from "lucide-react";

const facilities = [
  {
    name: "FIT CARDIAC – Main Diagnostic Centre",
    location: "123 Medical Center Dr, Healthcare City",
    phone: "+1 (555) 123-4567",
    email: "main@cardiocare.com",
    hours: "24/7 Emergency Services",
    image: "/center2.jpeg",
    features: [
      "Advanced Cardiac Surgery",
      "ICU",
      "Emergency Department",
      "Cardiac Rehabilitation",
    ],
    rating: 4.9,
  },
  {
    name: "FIT CARDIAC – North Clinic",
    location: "456 Health Avenue, North District",
    phone: "+1 (555) 234-5678",
    email: "north@cardiocare.com",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM",
    image: "/center1.jpeg",
    features: [
      "Cardiac Consultation",
      "Diagnostics",
      "Preventive Care",
      "Outpatient Services",
    ],
    rating: 4.8,
  },
];

export default function FacilitiesPage() {
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
              <h1 className="text-5xl md:text-6xl font-bold text-secondary-gray mb-6">
                Our <span className="text-primary-teal">Facilities</span>
              </h1>
              <p className="text-xl text-secondary-gray-light leading-relaxed">
                State-of-the-art cardiac care facilities equipped with the
                latest technology and staffed by expert teams
              </p>
            </motion.div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-[600px]">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-secondary-gray mb-4">
                Find a Facility Near You
              </h2>
              <p className="text-lg text-secondary-gray-light">
                Use our interactive map to locate the nearest FIT CARDIAC
                facility
              </p>
            </motion.div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.8!2d-79.6444!3d43.6583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f4e1b1a1a1b%3A0x1a1a1a1a1a1a1a1a!2s3530%20Derry%20Rd%20E%2C%20Mississauga%2C%20ON%20L4T%204E3%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FIT CARDIAC Facility Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
