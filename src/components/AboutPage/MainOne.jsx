

// components/about/AboutHero.jsx
"use client"; // Mark as a client component
import React from 'react';
import { motion } from 'framer-motion';
// import AboutHero from 

export default function AboutHero() {
  // Animation variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children animations by 0.1 seconds
        delayChildren: 0.3,   // Delay start of children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Globe animation properties
  const globePulse = {
    scale: [1, 1.1, 1], // Scale from 1 to 1.1 and back
    opacity: [0.2, 0.3, 0.2], // Opacity from 0.2 to 0.3 and back
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror", // Make the animation loop smoothly back and forth
    },
  };

  const primaryColor = '#8CC63F'; // Define your primary color here for easy updates

  return (
    <section className="relative overflow-hidden py-36 px-5 sm:px-10  bg-gradient-to-tr from-[#e0f7fa] via-[#e3f2fd] to-[#e0f7fa]  text-black min-h-[70vh] flex items-center">
      <div className="max-w-[1300px] mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-10">
        {/* Content Section */}
        <motion.div
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
        <motion.h2 className="text-5xl md:text-6xl font-extrabold mb-5 relative" variants={itemVariants}>
  About <span className="text-[#8CC63F]">Innovise</span>
</motion.h2>


          <motion.p className="text-2xl text-gray-400 mb-8 max-w-xl" variants={itemVariants}>
            We're transforming businesses with intelligent ServiceNow solutions
          </motion.p>

          <div className="flex flex-col gap-5">
            <motion.p className="text-lg leading-relaxed max-w-xl text-black" variants={itemVariants}>
              Founded in 2022, Innovise has been at the forefront of digital transformation,
              helping enterprises streamline operations and accelerate growth through our
              ServiceNow expertise.
            </motion.p>
            <motion.p className="text-lg leading-relaxed max-w-xl text-black" variants={itemVariants}>
              Our team of certified experts combines technical excellence with business
              acumen to deliver solutions that drive real results.
            </motion.p>
          </div>
        </motion.div>

        {/* Image/Animation Section */}
        <div className="flex-1 relative min-h-[300px] w-full lg:min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 z-10 rounded-xl overflow-hidden"
            style={{
              background: `linear-gradient(90deg, transparent 24px, rgba(255,255,255,0.03) 25px), linear-gradient(transparent 24px, rgba(255,255,255,0.03) 25px)`,
              backgroundSize: '25px 25px',
            }}
          ></div>
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)` }}
            animate={globePulse} // Apply the continuous pulse animation
          ></motion.div>
           <img
    src="/images/aboutHero.png" // 🔄 Replace with your image path
    alt="About Innovise"
  // className="relative z-30 w-[450px] h-[450px] object-cover rounded-full shadow-lg"
   className="relative z-30 w-[450px] h-[450px] object-cover rounded-full shadow-xl transition-transform duration-500 ease-in-out hover:scale-105  hover:shadow-[#8CC63F]/50 hover:shadow-2xl"
   // className="relative z-30 w-[450px] h-[450px] object-cover rounded-full transition-transform duration-500 ease-in-out hover:scale-105 hover:ring-8 hover:ring-[#8CC63F]/50"
  />
        </div>
      </div>
    </section>
  );
}