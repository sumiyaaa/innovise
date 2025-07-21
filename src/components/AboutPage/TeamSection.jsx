
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import GreenBackground from "@/components/GreenBackground";
// import Link from "next/link";

// export default function TeamSection() {
//   const teamMembers = [
//     {
//       name: "Hamid Laghari",
//       role: "CEO & Founder",
//       bio: "5+ years in IT transformation, ServiceNow certified master architect",
//       color: "#8CC63F", // green theme
//       linkedin: "https://www.linkedin.com/in/hamidlaghari", // replace with actual
//     },
//     {
//       name: "Yahyah Mirza",
//       role: "Co Founder",
//       bio: "4+ years experience in workflow optimization and digital transformation",
//       color: "#8CC63F",
//       linkedin: "https://www.linkedin.com/in/yahyahmirza", // replace with actual
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
//     <section className="relative py-24 px-6 text-white overflow-hidden">
//       {/* ✅ Green Background Only (no blur) */}
//       <div className="absolute inset-0 z-0">
//         <GreenBackground />
//       </div>

//       <div className="relative z-10 max-w-5xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
//         <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-16">
//           Our experienced leaders driving innovation and transformation
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
//                 className="bg-white text-black rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 max-w-md mx-auto"
//               >
//                 {/* Initial Circle */}
//                 <div
//                   className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold text-white"
//                   style={{ backgroundColor: member.color }}
//                 >
//                   {initials}
//                 </div>

//                 <h3 className="text-xl font-semibold">{member.name}</h3>
//                 <p className="text-sm font-medium mb-2" style={{ color: member.color }}>
//                   {member.role}
//                 </p>

//                 <p className="text-gray-700 text-sm mb-4">{member.bio}</p>

//                 <Link
//                   href={member.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-2 px-5 py-2 rounded-md text-white text-sm font-medium transition-colors duration-300"
//                   style={{
//                     backgroundColor: "#8CC63F",
//                   }}
//                 >
//                   Connect
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>
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
      role: "Founder & CEO",
      bio: "5+ years in IT transformation, ServiceNow Certified Master Architect.",
      color: "#8CC63F",
      linkedin: "https://www.linkedin.com/in/hamid-laghari-7769801bb/",
      image: "/images/sirhamid.png", // ✅ optional image path
    },
    {
      name: "Yahyah Mirza",
      role: "Co Founder",
      bio: "Certified ServiceNow Administrator/Developer with over 2 years of experience in HR Service Delivery (HRSD).",
      color: "#8CC63F",
      linkedin: "https://www.linkedin.com/in/yahyah-mirza-a2575b295/",
      image: "/images/siryahya.png", // ✅ optional image path
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
                className="bg-white text-black rounded-tl-3xl rounded-br-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 max-w-md mx-auto group"
              >
                {/* Profile Image or Initials */}
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border-4 border-[#8CC63F] group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div
                    className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                    style={{ backgroundColor: member.color }}
                  >
                    {initials}
                  </div>
                )}

                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p
                  className="text-sm font-medium mb-2"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>

                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>

                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-5 py-2 rounded-md text-white text-sm font-medium transition-all duration-300 hover:bg-[#7cbf38]"
                  style={{ backgroundColor: "#8CC63F" }}
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
