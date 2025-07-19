"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function StatsSection() {
  const stats = [
    { value: 80, suffix: "+", label: "Implimented Projects" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 30, suffix: "+", label: "Certified Experts" },
    { value: 15, suffix: "+", label: "Industries Served" },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-[#f1faee] text-white">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#00FF99] via-[#4D8AFF] via-[#FF6B6B] to-[#FFD166]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="text-center p-10 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-2 transition-all duration-300 shadow hover:shadow-xl"
            >
              <div className="text-5xl font-extrabold bg-gradient-to-r from-[#00FF99] to-[#4D8AFF] bg-clip-text text-transparent mb-3">
                <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>
              <div className="text-lg text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
