

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import GreenBackground from "@/components/GreenBackground"; // make sure this path is correct

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//   }),
// };

// export default function MissionSection() {
//   const goals = [
//     {
//       title: "Innovate",
//       description: "Pioneering new approaches to digital transformation",
//     },
//     {
//       title: "Transform",
//       description: "Turning complex challenges into streamlined solutions",
//     },
//     {
//       title: "Empower",
//       description: "Enabling businesses to achieve their full potential",
//     },
//   ];

//   return (
//     <section className="relative py-24 px-6 text-white overflow-hidden">
//       {/* 🟩 Green Background */}
//       <div className="absolute inset-0 z-0">
//         <GreenBackground />
//       </div>

//       <motion.div
//         className="relative z-10 max-w-6xl mx-auto"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <div className="text-center">
//           <h2 className="text-4xl font-bold relative inline-block after:block after:w-20 after:h-1 after:bg-[#8CC63F] after:mx-auto after:mt-4">
//             Our Mission
//           </h2>
//           <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed text-gray-200 font-medium">
//             To empower businesses with intelligent ServiceNow solutions that
//             streamline workflows, automate operations, and enable smarter growth.
//           </p>
//         </div>

//         <div className="mt-16 flex justify-center flex-wrap gap-8 lg:flex-nowrap">
//           {goals.map((goal, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={cardVariants}
//               className="group bg-white text-black border border-white/10 hover:border-[#8CC63F] rounded-xl p-8 w-full max-w-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-2"
//             >
//               <div className="w-14 h-14 rounded-full bg-[#8CC63F]/20 text-[#8CC63F] flex items-center justify-center text-2xl font-bold mb-5 group-hover:scale-110 transition-transform">
//                 ✓
//               </div>
//               <h3 className="text-2xl font-semibold text-[#0d0c11] mb-3 group-hover:text-[#8CC63F] transition-colors duration-300">
//                 {goal.title}
//               </h3>
//               <p className="text-gray-700 text-base leading-relaxed">{goal.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }





"use client";
import React from "react";
import { motion } from "framer-motion";
import GreenBackground from "@/components/GreenBackground"; // make sure this path is correct

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function MissionSection() {
  const goals = [
    {
      title: "Innovate",
      description: "Pioneering new approaches to digital transformation",
    },
    {
      title: "Transform",
      description: "Turning complex challenges into streamlined solutions",
    },
    {
      title: "Empower",
      description: "Enabling businesses to achieve their full potential",
    },
  ];

  return (
    <section className="relative py-24 px-6 text-white overflow-hidden">
      {/* 🟩 Green Background */}
      <div className="absolute inset-0 z-0">
        <GreenBackground />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold relative inline-block after:block after:w-20 after:h-1 after:bg-[#8CC63F] after:mx-auto after:mt-4">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed text-gray-200 font-medium">
            To empower businesses with intelligent ServiceNow solutions that
            streamline workflows, automate operations, and enable smarter growth.
          </p>
        </div>

        <div className="mt-16 flex justify-center flex-wrap gap-8 lg:flex-nowrap">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-white text-black border border-white/10 hover:border-[#8CC63F] 
                rounded-tl-3xl rounded-br-3xl 
                p-8 w-full max-w-sm transition-all duration-300 
                shadow-md hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-full bg-[#8CC63F]/20 text-[#8CC63F] flex items-center justify-center text-2xl font-bold mb-5 group-hover:scale-110 transition-transform">
                ✓
              </div>
              <h3 className="text-2xl font-semibold text-[#0d0c11] mb-3 group-hover:text-[#8CC63F] transition-colors duration-300">
                {goal.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
