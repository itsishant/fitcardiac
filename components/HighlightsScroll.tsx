"use client";

import { motion } from "framer-motion";
import { Heart, CheckCircle2, Users } from "lucide-react";
import { useRef, useState } from "react";

const highlights = [
  {
    icon: Heart,
    title: "Healthy Patients",
    description: "Over 1000 healthy patients trust us",
    color: "from-red-500 to-pink-500",
    stat: "1000+",
  },
  {
    icon: CheckCircle2,
    title: "Cardiac Services",
    description: "Comprehensive diagnostic services",
    color: "from-primary-teal to-cyan-500",
    stat: "Learn more",
  },
  {
    icon: Users,
    title: "Expert Specialists",
    description: "Highly qualified staff",
    color: "from-blue-500 to-indigo-500",
    stat: "100%",
  },
];

export default function HighlightsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314B8A6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-gray mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary-teal to-red-500 bg-clip-text text-transparent">
              FIT CARDIAC DIAGNOSTIC CENTRE
            </span>
          </h2>
          <p className="text-lg text-secondary-gray-light max-w-2xl mx-auto">
            Excellence in cardiac diagnostics with trusted expertise and patient
            care
          </p>
        </motion.div>

        {/* Scrollable Container */}
        <div className="relative">
          {/* Scroll buttons */}
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-12 h-12 rounded-full bg-primary-teal text-white flex items-center justify-center hover:bg-red-500 transition-colors duration-300 shadow-lg"
            >
              ←
            </motion.button>
          )}

          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-12 h-12 rounded-full bg-primary-teal text-white flex items-center justify-center hover:bg-red-500 transition-colors duration-300 shadow-lg"
            >
              →
            </motion.button>
          )}

          {/* Cards Scroll Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="flex-shrink-0 w-72 h-64"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-primary-teal/30 p-6 flex flex-col justify-between"
                  >
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    {/* Content */}
                    <div className="relative">
                      {/* Icon */}
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${highlight.color} text-white mb-3`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-secondary-gray mb-2">
                        {highlight.title}
                      </h3>

                      {/* Stat */}
                      <p
                        className={`text-2xl font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent mb-2`}
                      >
                        {highlight.stat}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-secondary-gray-light leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className={`h-1 w-8 bg-gradient-to-r ${highlight.color} rounded-full group-hover:w-full transition-all duration-300`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Scroll indicator dots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-2 mt-8"
          >
            {highlights.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-primary-teal/30"
                whileHover={{ scale: 1.5, backgroundColor: "#D62839" }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
