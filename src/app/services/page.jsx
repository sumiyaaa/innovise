
"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

import Footer from "../../components/AboutPage/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "IT Consulting",
      description:
        "Strategic guidance and technology consulting to align IT with your business goals.",
    },
    {
      title: "ServiceNow Development",
      description:
        "Custom ServiceNow solutions, integrations, and automation tailored to your enterprise needs.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Enable scalable, secure, and cost-effective cloud environments with our cloud expertise.",
    },
    {
      title: "Automation & Workflows",
      description:
        "Automate your business processes using modern tools to reduce manual effort and increase efficiency.",
    },
    {
      title: "Managed IT Services",
      description:
        "We monitor, maintain, and manage your IT infrastructure 24/7 to keep your business running smoothly.",
    },
  ];

  // Animation variants for the service cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className="bg-[#0d0c11] text-white py-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // Changed text-green-500 to use custom color
            className="text-4xl font-bold text-center mb-12"
            style={{ color: '#8CC63F' }} // Inline style for heading color
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible" // Animates when the component enters the viewport
                viewport={{ once: true, amount: 0.3 }} // Only animate once and when 30% of the item is visible
                // Changed boxShadow color from rgba(0,255,0,0.4) to rgba(140,198,63,0.4)
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(140,198,63,0.4)" }} // Hover effect
                className="bg-[#111827] p-6 rounded-lg shadow-md transition duration-300 border border-gray-800 cursor-pointer" // Added cursor-pointer
              >
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: '#8CC63F' }} // Inline style for service title color
                >
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}