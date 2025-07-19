// // components/about/ValuesSection.jsx
// import styles from './ValuesSection.module.css';

// export default function ValuesSection() {
//   const values = [
//     {
//       title: "Innovation",
//       description: "We constantly push boundaries to deliver cutting-edge ServiceNow solutions",
//       color: "#00FF99"
//     },
//     {
//       title: "Excellence",
//       description: "Quality is at the core of everything we do",
//       color: "#4D8AFF"
//     },
//     {
//       title: "Integrity",
//       description: "We build trust through transparency and ethical practices",
//       color: "#FF6B6B"
//     },
//     {
//       title: "Collaboration",
//       description: "Great solutions come from teamwork and shared vision",
//       color: "#FFD166"
//     },
//     {
//       title: "Customer Focus",
//       description: "Your success is our ultimate measure of achievement",
//       color: "#A663CC"
//     },
//     {
//       title: "Agility",
//       description: "We adapt quickly to meet evolving business needs",
//       color: "#06D6A0"
//     }
//   ];

//   return (
//     <section className={styles.values}>
//       <div className={styles.container}>
//         <h2 className={styles.sectionTitle}>Our Core Values</h2>
//         <p className={styles.sectionSubtitle}>
//           The principles that guide our work and relationships
//         </p>
        
//         <div className={styles.valuesGrid}>
//           {values.map((value, index) => (
//             <div 
//               key={index} 
//               className={styles.valueCard}
//               style={{ '--accent': value.color }}
//             >
//               <div className={styles.valueNumber}>{index + 1}</div>
//               <h3 className={styles.valueTitle}>{value.title}</h3>
//               <p className={styles.valueDescription}>{value.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ValuesSection() {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge ServiceNow solutions",
      color: "#00FF99",
    },
    {
      title: "Excellence",
      description: "Quality is at the core of everything we do",
      color: "#4D8AFF",
    },
    {
      title: "Integrity",
      description: "We build trust through transparency and ethical practices",
      color: "#FF6B6B",
    },
    {
      title: "Collaboration",
      description: "Great solutions come from teamwork and shared vision",
      color: "#FFD166",
    },
    {
      title: "Customer Focus",
      description: "Your success is our ultimate measure of achievement",
      color: "#A663CC",
    },
    {
      title: "Agility",
      description: "We adapt quickly to meet evolving business needs",
      color: "#06D6A0",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-24 px-6 bg-[#f1faee] text-[#8CC63F]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
          The principles that guide our work and relationships
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative bg-white/5 rounded-xl p-6 border-l-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group overflow-hidden"
              style={{ borderLeftColor: value.color }}
            >
              {/* Top Bar Animation */}
              <span
                className="absolute top-0 left-0 h-1 w-full transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                style={{ backgroundColor: value.color }}
              />

              {/* Large faded number */}
              <span className="absolute top-3 right-5 text-6xl font-extrabold text-white/5 select-none z-0">
                {index + 1}
              </span>

              {/* Title and Description */}
              <h3 className="text-xl font-semibold mb-3 z-10 relative">
                {value.title}
              </h3>
              <p className="text-black z-10 relative leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
