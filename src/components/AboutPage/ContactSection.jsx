// // components/about/ContactSection.jsx
// import styles from './ContactSection.module.css';

// export default function ContactSection() {
//   return (
//     <section className={styles.contact}>
//       <div className={styles.container}>
//         <div className={styles.content}>
//           <h2 className={styles.title}>Ready to Transform Your Business?</h2>
//           <p className={styles.subtitle}>
//             Let's discuss how our ServiceNow solutions can help you achieve your goals
//           </p>
//           <button className={styles.contactButton}>Contact Us Today</button>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="relative text-center text-white py-24 px-6  bg-[#2E7D32]  overflow-hidden">
      {/* Radial gradient effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-80 h-80 bg-[#00ff9920] rounded-full top-[20%] left-[10%] blur-3xl" />
        <div className="absolute w-80 h-80 bg-[#4D8AFF20] rounded-full bottom-[10%] right-[10%] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg md:text-xl text-black mb-10 max-w-xl mx-auto">
          Let's discuss how our ServiceNow solutions can help you achieve your goals
        </p>
        <Link href="/contact-us">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="relative overflow-hidden px-10 py-4 text-lg font-semibold bg-[#8CC63F] text-[#0d0c11] rounded-lg shadow-md transition-all duration-300 hover:bg-[#78b834]"
  >
    <span className="relative z-10">Contact Us Today</span>
    <span className="absolute inset-0 bg-white/20 translate-x-[-100%] transition-transform duration-300 hover:translate-x-full" />
  </motion.button>
</Link>

        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative overflow-hidden px-10 py-4 text-lg font-semibold bg-[#8CC63F] text-[#0d0c11] rounded-lg shadow-md transition-all duration-300 hover:bg-[#78b834]"
        >
          <span className="relative z-10">Contact Us Today</span>
          <span className="absolute inset-0 bg-white/20 translate-x-[-100%] transition-transform duration-300 hover:translate-x-full" />
        </motion.button> */}
      </motion.div>
    </section>
  );
}
