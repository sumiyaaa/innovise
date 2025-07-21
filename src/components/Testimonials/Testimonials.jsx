
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Star } from "lucide-react";
// import { Typewriter } from "react-simple-typewriter";


// const testimonials = [
//   {
//     name: "Josh Coffee",
//     role: "Developer",
//     message:
//       "Innovise delivered beyond our expectations. Their ServiceNow solutions saved us countless hours!",
//   },
//   {
//     name: "Ahsan",
//     role: "Developer",
//     message:
//       "Professional team with great understanding of digital automation. Highly recommended!",
//   },
//   {
//     name: "K O",
//     role: "Developer",
//     message:
//       "They helped us modernize our workflow and improve efficiency across departments.",
//   },

// ];

// // Animation variants for testimonial cards (scale-in effect)
// const cardVariants = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: (i) => ({
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delay: i * 0.15, // Staggered delay for each card
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// // Animation variants for the main headline
// const headlineVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   },
// };

// export default function Testimonials() {
//   return (
    
  
//     <section className="relative bg-[#eefaf9] text-white py-20 px-4 overflow-hidden">
//       <div className="max-w-7xl mx-auto text-center relative z-10">
//         <motion.h1
//   className="text-4xl font-bold mb-14"
//   style={{ color: "#8CC63F" }}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true, amount: 0.5 }}
//   variants={headlineVariants}
// >
//   <Typewriter
//     words={["What Our Clients Say"]}
//     loop={0} // infinite loop
//     cursor
//     cursorStyle=""
//     typeSpeed={70}
//     deleteSpeed={50}
//     delaySpeed={2000}
//   />
// </motion.h1>


//         <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={cardVariants}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 0 35px rgba(140,198,63,0.6)",
//                 transition: { duration: 0.2 },
//               }}
//               className="relative bg-[#111827] p-6 rounded-xl border border-gray-800 transition-all duration-300 ease-in-out
//                          before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent
//                          hover:before:border-t-green-500 hover:before:border-r-blue-500 hover:before:border-b-purple-500 hover:before:border-l-yellow-500
//                          overflow-hidden"
//             >
//               <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-transparent hover:to-[#8CC63F]/10 transition-all duration-300 pointer-events-none"></div>

//               <div className="relative z-10">
//                 <div className="flex justify-center mb-4 text-[#8CC63F]">
//                   {Array(5)
//                     .fill()
//                     .map((_, i) => (
//                       <Star key={i} size={20} fill="#8CC63F" className="mr-1" />
//                     ))}
//                 </div>
//                 <p className="text-gray-300 italic mb-6">"{testimonial.message}"</p>
//                 <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
//                 <span className="text-sm text-gray-400">{testimonial.role}</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Decorative blurred circle in bottom-right */}
//       <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-[#8CC63F] rounded-full opacity-20 blur-3xl z-0 pointer-events-none"></div>
//     </section>
//   );
// }

 


"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const testimonials = [
  {
    name: "Josh Coffee",
    role: "Developer",
    message:
      "Innovise delivered beyond our expectations. Their ServiceNow solutions saved us countless hours!",
  },
  {
    name: "Ahsan",
    role: "Developer",
    message:
      "Professional team with great understanding of digital automation. Highly recommended!",
  },
  {
    name: "K O",
    role: "Developer",
    message:
      "They helped us modernize our workflow and improve efficiency across departments.",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const headlineVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Testimonials() {
  return (
    <section className="relative  bg-gradient-to-tr from-[#e0f7fa] via-[#e3f2fd] to-[#e0f7fa]  text-black py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-4xl font-bold mb-14"
          style={{ color: "#8CC63F" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headlineVariants}
        >
          <Typewriter
            words={["What Our Clients Say"]}
            loop={0}
            cursor
            cursorStyle=""
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h1>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 35px rgba(140,198,63,0.4)",
                transition: { duration: 0.2 },
              }}
              className="relative bg-white p-6 rounded-xl border border-[#8CC63F] transition-all duration-300 ease-in-out
                         before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent
                         hover:before:border-t-green-500 hover:before:border-r-green-400 hover:before:border-b-green-300 hover:before:border-l-green-600
                         overflow-hidden shadow-md"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-[#8CC63F]/10 transition-all duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-4 text-[#8CC63F]">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <Star key={i} size={20} fill="#8CC63F" className="mr-1" />
                    ))}
                </div>
                <p className="text-gray-800 italic mb-6">"{testimonial.message}"</p>
                <h4 className="text-lg font-semibold text-[#2e7d32]">
                  {testimonial.name}
                </h4>
                <span className="text-sm text-gray-600">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative blurred green circle */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-[#8CC63F] rounded-full opacity-20 blur-3xl z-0 pointer-events-none"></div>
    </section>
  );
}
