// // components/about/TeamSection.jsx
// import styles from './TeamSection.module.css';

// export default function TeamSection() {
//   const teamMembers = [
//     {
//       name: "Hamid Laghari",
//       role: "CEO & Founder",
//       bio: "8+ years in IT transformation, ServiceNow certified master architect",
//       color: "#00FF99"
//     },
//     {
//       name: "Muhammad Shahryar",
//       role: "Technical Consultant/trainee",
//       bio: "Technology visionary with expertise in enterprise automation solutions",
//       color: "#4D8AFF"
//     },
//     {
//       name: "Yahyah Mirza",
//       role: "Director of Solutions",
//       bio: "6+ Specializes in workflow optimization and digital transformation",
//       color: "#FF6B6B"
//     },
//     {
//       name: "Hamza Jilani",
//       role: "ServiceNow Developer",
//       bio: "2+ ServiceNow certified application developer with 12+ years experience",
//       color: "#FFD166"
//     }
//   ];

//   return (
//     <section className={styles.team}>
//       <div className={styles.container}>
//         <h2 className={styles.sectionTitle}>Leadership Team</h2>
//         <p className={styles.sectionSubtitle}>
//           Our experienced leaders driving innovation and transformation
//         </p>
        
//         <div className={styles.teamGrid}>
//           {teamMembers.map((member, index) => (
//             <div 
//               key={index} 
//               className={styles.teamCard}
//               style={{ '--accent': member.color }}
//             >
//               <div className={styles.avatarPlaceholder}>
//                 <div className={styles.initials}>
//                   {member.name.split(' ').map(n => n[0]).join('')}
//                 </div>
//               </div>
//               <div className={styles.memberInfo}>
//                 <h3 className={styles.memberName}>{member.name}</h3>
//                 <p className={styles.memberRole}>{member.role}</p>
//                 <p className={styles.memberBio}>{member.bio}</p>
//               </div>
//               <div className={styles.contactButton}>Connect</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// is main button nahi hn

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// export default function TeamSection() {
//   const teamMembers = [
//     {
//       name: "Hamid Laghari",
//       role: "CEO & Founder",
//       bio: "8+ years in IT transformation, ServiceNow certified master architect",
//       color: "#00FF99",
//     },
//     {
//       name: "Muhammad Shahryar",
//       role: "Technical Consultant/trainee",
//       bio: "Technology visionary with expertise in enterprise automation solutions",
//       color: "#4D8AFF",
//     },
//     {
//       name: "Yahyah Mirza",
//       role: "Director of Solutions",
//       bio: "6+ Specializes in workflow optimization and digital transformation",
//       color: "#FF6B6B",
//     },
//     {
//       name: "Hamza Jilani",
//       role: "ServiceNow Developer",
//       bio: "2+ ServiceNow certified application developer with 12+ years experience",
//       color: "#FFD166",
//     },
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section className="py-24 px-6 bg-gradient-to-b from-[#1a1825] to-[#0d0c11] text-white">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
//         <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
//           Our experienced leaders driving innovation and transformation
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member, index) => {
//             const initials = member.name
//               .split(" ")
//               .map((n) => n[0])
//               .join("");

//             return (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={cardVariants}
//                 className="bg-white/5 border border-white/10 rounded-xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//                 style={{ borderColor: member.color }}
//               >
//                 <div
//                   className="w-28 h-28 mx-auto mb-5 rounded-full border-4 flex items-center justify-center text-4xl font-bold text-white"
//                   style={{ borderColor: member.color }}
//                 >
//                   {initials}
//                 </div>

//                 <div className="mb-3">
//                   <h3 className="text-xl font-semibold">{member.name}</h3>
//                   <p className="text-base font-medium" style={{ color: member.color }}>
//                     {member.role}
//                   </p>
//                 </div>

//                 <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>

//                 <button
//                   className="mt-5 inline-block px-5 py-2 rounded-md border border-white/10 bg-white/5 text-sm hover:bg-opacity-100 hover:text-[#0d0c11] transition-all duration-300"
//                   style={{
//                     backgroundColor: member.color + "22",
//                     borderColor: member.color,
//                     color: member.color,
//                   }}
//                 >
//                   Connect
//                 </button>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }














//with button
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function TeamSection() {
//   const teamMembers = [
//     {
//       name: "Hamid Laghari",
//       role: "CEO & Founder",
//       bio: "5+ years in IT transformation, ServiceNow certified master architect",
//       color: "#00FF99",
//     },
   
//     {
//       name: "Yahyah Mirza",
//       role: "Co Founder",
//       bio: "4+ Specializes in workflow optimization and digital transformation",
//       color: "#FF6B6B",
//     },
  
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section className="py-24 px-6 bg-gradient-to-b from-[#1a1825] to-[#0d0c11] text-white">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
//         <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
//           Our experienced leaders driving innovation and transformation
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member, index) => {
//             const initials = member.name
//               .split(" ")
//               .map((n) => n[0])
//               .join("");

//             return (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={cardVariants}
//                 className="bg-white/5 border border-white/10 rounded-xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//                 style={{ borderColor: member.color }}
//               >
//                 <div
//                   className="w-28 h-28 mx-auto mb-5 rounded-full border-4 flex items-center justify-center text-4xl font-bold text-white"
//                   style={{ borderColor: member.color }}
//                 >
//                   {initials}
//                 </div>

//                 <div className="mb-3">
//                   <h3 className="text-xl font-semibold">{member.name}</h3>
//                   <p className="text-base font-medium" style={{ color: member.color }}>
//                     {member.role}
//                   </p>
//                 </div>

//                 <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>

//                 <button
//                   className="mt-5 inline-block px-5 py-2 rounded-md border border-white/10 bg-white/5 text-sm hover:bg-opacity-100 hover:text-[#0d0c11] transition-all duration-300"
//                   style={{
//                     backgroundColor: member.color + "22",
//                     borderColor: member.color,
//                     color: member.color,
//                   }}
//                 >
//                   Connect
//                 </button>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* ✅ Button to Navigate to Full Team Page */}
        
//       </div>
//     </section>
//   );
// }










"use client";
import React from "react";
import { motion } from "framer-motion";
import GreenBackground from "@/components/GreenBackground";
import Link from "next/link";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Hamid Laghari",
      role: "CEO & Founder",
      bio: "5+ years in IT transformation, ServiceNow certified master architect",
      color: "#8CC63F", // green theme
      linkedin: "https://www.linkedin.com/in/hamidlaghari", // replace with actual
    },
    {
      name: "Yahyah Mirza",
      role: "Co Founder",
      bio: "4+ years experience in workflow optimization and digital transformation",
      color: "#8CC63F",
      linkedin: "https://www.linkedin.com/in/yahyahmirza", // replace with actual
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative py-24 px-6 text-white overflow-hidden">
      {/* ✅ Green Background Only (no blur) */}
      <div className="absolute inset-0 z-0">
        <GreenBackground />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-16">
          Our experienced leaders driving innovation and transformation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => {
            const initials = member.name
              .split(" ")
              .map((n) => n[0])
              .join("");

            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white text-black rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 max-w-md mx-auto"
              >
                {/* Initial Circle */}
                <div
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                  style={{ backgroundColor: member.color }}
                >
                  {initials}
                </div>

                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm font-medium mb-2" style={{ color: member.color }}>
                  {member.role}
                </p>

                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>

                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-5 py-2 rounded-md text-white text-sm font-medium transition-colors duration-300"
                  style={{
                    backgroundColor: "#8CC63F",
                  }}
                >
                  Connect
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
