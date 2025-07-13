// "use client";
// import React from "react";

// import Footer from "../../components/AboutPage/Footer";
// import { motion } from "framer-motion";

// export default function SolutionsPage() {
//   const solutions = [
//     {
//       title: "ServiceNow Integration",
//       description:
//         "Seamlessly integrate ServiceNow with your internal systems for unified workflows and centralized data handling.",
//     },
//     {
//       title: "Business Process Automation",
//       description:
//         "Automate repetitive tasks across departments to improve operational efficiency and reduce costs.",
//     },
//     {
//       title: "IT Operations Management",
//       description:
//         "Enhance visibility, monitoring, and control over your IT infrastructure with intelligent operations solutions.",
//     },
//     {
//       title: "Digital Transformation",
//       description:
//         "Accelerate your digital journey with modern platforms, agile methods, and scalable tech.",
//     },
//     {
//       title: "Cloud & Infrastructure",
//       description:
//         "Design and implement cloud-first infrastructure that is secure, scalable, and future-ready.",
//     },
//     {
//       title: "AI-Powered Insights",
//       description:
//         "Leverage artificial intelligence to gain actionable insights and make informed decisions faster.",
//     },
//   ];

//   return (
//     <>
     

//       <section className="bg-[#0c1525] text-white py-20 min-h-screen">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-bold text-center text-green-500 mb-12"
//           >
//             Our Solutions
//           </motion.h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {solutions.map((solution, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className="bg-[#111827] p-6 rounded-xl shadow-lg border border-gray-700 hover:border-green-500 hover:scale-105 hover:shadow-xl transition duration-300"
//               >
//                 <h3 className="text-2xl text-green-400 font-semibold mb-3">
//                   {solution.title}
//                 </h3>
//                 <p className="text-gray-300">{solution.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }









"use client";
import React from "react";
import { motion } from "framer-motion";

import Footer from "../../components/AboutPage/Footer"; // Assuming Footer component is styled separately

export default function SolutionsPage() {
  const primaryColor = '#8CC63F'; // Define your primary brand color here

  const solutions = [
    {
      title: "ServiceNow Integration",
      description:
        "Seamlessly integrate ServiceNow with your internal systems for unified workflows and centralized data handling.",
    },
    {
      title: "Business Process Automation",
      description:
        "Automate repetitive tasks across departments to improve operational efficiency and reduce costs.",
    },
    {
      title: "IT Operations Management",
      description:
        "Enhance visibility, monitoring, and control over your IT infrastructure with intelligent operations solutions.",
    },
    {
      title: "Digital Transformation",
      description:
      "Accelerate your digital journey with modern platforms, agile methods, and scalable tech.",
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "Design and implement cloud-first infrastructure that is secure, scalable, and future-ready.",
    },
    {
      title: "AI-Powered Insights",
      description:
        "Leverage artificial intelligence to gain actionable insights and make informed decisions faster.",
    },
  ];

  // Animation variants for the solution cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 }, // Start slightly scaled down and below
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6, // Slower transition for a smoother feel
        ease: "easeOut",
      },
    },
  };

  // Hover effect for the cards
  const cardHover = {
    scale: 1.05, // Slightly larger scale on hover
    boxShadow: `0 0 30px rgba(140,198,63,0.5)`, // A more pronounced glow using the primary color
    borderColor: primaryColor, // Change border color on hover
    transition: {
      duration: 0.2, // Quick transition for hover
      ease: "easeOut",
    },
  };

  return (
    <>
      <section className="bg-[#0d0c11] text-white py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
            style={{ color: primaryColor }} // Apply primary color to heading
          >
            Our Solutions
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible" // Animates when the component enters the viewport
                viewport={{ once: true, amount: 0.3 }} // Only animate once and when 30% of the item is visible
                transition={{ delay: index * 0.1 }} // Stagger the entrance of each card
                whileHover={cardHover} // Apply the enhanced hover effect
                className="bg-[#111827] p-6 rounded-xl shadow-lg border border-gray-700 cursor-pointer transition-all duration-300 ease-in-out"
              >
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: primaryColor }} // Apply primary color to solution title
                >
                  {solution.title}
                </h3>
                <p className="text-gray-300">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
