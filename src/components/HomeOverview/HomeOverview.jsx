// 'use client';

// import { motion } from 'framer-motion';

// export default function CompanyOverview() {
//   return (
//     <section className="py-16 px-4 bg-[white] text-white flex justify-center items-center">
//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* First Card - Who We Are */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           className="text-center border border-transparent rounded-3xl p-10 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] hover:border-[#8CC63F] transition-all duration-500 shadow-xl hover:shadow-[0_0_50px_#8CC63F88]"
//         >
//           <h2 className="text-3xl font-bold mb-6 text-[#8CC63F]">
//             Who We Are
//           </h2>
//           <p className="text-lg leading-8 text-gray-300 hover:text-white transition-all duration-300">
//             <span className="font-semibold text-white">Innovise</span> is a future-driven technology company focused on delivering <span className="text-[#8CC63F] font-semibold">AI-powered solutions</span>, <span className="text-[#8CC63F] font-semibold">IT automation</span>, and <span className="text-[#8CC63F] font-semibold">intelligent business tools</span> that help enterprises transform, scale, and succeed in the digital era.
//           </p>
//         </motion.div>

//         {/* Second Card - What We Do */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           className="text-center border border-transparent rounded-3xl p-10 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] hover:border-[#8CC63F] transition-all duration-500 shadow-xl hover:shadow-[0_0_50px_#8CC63F88]"
//         >
//           <h2 className="text-3xl font-bold mb-6 text-[#8CC63F]">
//             What We Do
//           </h2>
//           <p className="text-lg leading-8 text-gray-300 hover:text-white transition-all duration-300">
//             We offer cutting-edge solutions in <span className="text-[#8CC63F] font-semibold">software development</span>, <span className="text-[#8CC63F] font-semibold">custom AI integration</span>, <span className="text-[#8CC63F] font-semibold">cloud optimization</span>, and <span className="text-[#8CC63F] font-semibold">digital transformation consulting</span>. Our mission is to empower businesses with smart, scalable, and sustainable technology.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import { motion } from 'framer-motion';
// import GreenBackground from '@/components/GreenBackground'; // Adjust the path if needed

// export default function CompanyOverview() {
//   return (
//     <section className="relative py-16 px-4 text-white flex justify-center items-center overflow-hidden">
//       {/* 🟩 Green background shapes */}
//       <GreenBackground />

//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
//         {/* First Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           className="text-center border border-transparent rounded-3xl p-10 bg-white text-black hover:border-[#8CC63F] transition-all duration-500 shadow-xl hover:shadow-[0_0_50px_#8CC63F88]"
//         >
//           <h2 className="text-3xl font-bold mb-6 text-[#8CC63F]">
//             Who We Are
//           </h2>
//           <p className="text-lg leading-8 text-gray-700 hover:text-black transition-all duration-300">
//             <span className="font-semibold text-black">Innovise</span> is a future-driven technology company focused on delivering <span className="text-[#8CC63F] font-semibold">AI-powered solutions</span>, <span className="text-[#8CC63F] font-semibold">IT automation</span>, and <span className="text-[#8CC63F] font-semibold">intelligent business tools</span> that help enterprises transform, scale, and succeed in the digital era.
//           </p>
//         </motion.div>

//         {/* Second Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           className="text-center border border-transparent rounded-3xl p-10 bg-white text-black hover:border-[#8CC63F] transition-all duration-500 shadow-xl hover:shadow-[0_0_50px_#8CC63F88]"
//         >
//           <h2 className="text-3xl font-bold mb-6 text-[#8CC63F]">
//             What We Do
//           </h2>
//           <p className="text-lg leading-8 text-gray-700 hover:text-black transition-all duration-300">
//             We offer cutting-edge solutions in <span className="text-[#8CC63F] font-semibold">software development</span>, <span className="text-[#8CC63F] font-semibold">custom AI integration</span>, <span className="text-[#8CC63F] font-semibold">cloud optimization</span>, and <span className="text-[#8CC63F] font-semibold">digital transformation consulting</span>. Our mission is to empower businesses with smart, scalable, and sustainable technology.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }






















// 'use client';

// import { motion } from 'framer-motion';
// import GreenBackground from '@/components/GreenBackground';

// export default function CompanyOverview() {
//   return (
//     <section className="relative py-16 px-4 text-white flex justify-center items-center overflow-hidden">
//       {/* 🟩 Background shapes */}
//       <GreenBackground />

//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
//         {/* First Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.03 }}
//           className="group text-center border border-transparent rounded-3xl p-10 bg-white text-black transition-all duration-500 shadow-xl hover:shadow-[0_0_50px_#8CC63F88] hover:border-[#8CC63F] hover:cursor-pointer"
//         >
//           <h2 className="text-3xl font-bold mb-6 text-[#8CC63F] group-hover:scale-105 transition-transform duration-300">
//             Who We Are
//           </h2>
//           <p className="text-lg leading-8 text-gray-700 group-hover:text-black transition-all duration-300">
//             <span className="font-semibold text-black">Innovise</span> is a future-driven technology company focused on delivering <span className="text-[#8CC63F] font-semibold">AI-powered solutions</span>, <span className="text-[#8CC63F] font-semibold">IT automation</span>, and <span className="text-[#8CC63F] font-semibold">intelligent business tools</span> that help enterprises transform, scale, and succeed in the digital era.
//           </p>
//         </motion.div>

//         {/* Second Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.03 }}
//           className="group text-center border border-transparent rounded-3xl p-10 bg-white text-black transition-all duration-500 shadow-xl hover:shadow-[0_0_50px_#8CC63F88] hover:border-[#8CC63F] hover:cursor-pointer"
//         >
//           <h2 className="text-3xl font-bold mb-6 text-[#8CC63F] group-hover:scale-105 transition-transform duration-300">
//             What We Do
//           </h2>
//           <p className="text-lg leading-8 text-gray-700 group-hover:text-black transition-all duration-300">
//             We offer cutting-edge solutions in <span className="text-[#8CC63F] font-semibold">software development</span>, <span className="text-[#8CC63F] font-semibold">custom AI integration</span>, <span className="text-[#8CC63F] font-semibold">cloud optimization</span>, and <span className="text-[#8CC63F] font-semibold">digital transformation consulting</span>. Our mission is to empower businesses with smart, scalable, and sustainable technology.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }








// 'use client';

// import { motion } from 'framer-motion';
// import GreenBackground from '@/components/GreenBackground';

// export default function CompanyOverview() {
//   return (
//     <section className="relative py-12 px-4 text-white flex justify-center items-center overflow-hidden">
//       {/* 🟩 Background shapes */}
//       <GreenBackground />

//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
//         {/* First Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.03 }}
//           className="group text-center border border-transparent rounded-3xl p-6 md:p-10 bg-white text-black transition-all duration-500 shadow-xl hover:shadow-[0_0_50px_#8CC63F88] hover:border-[#8CC63F] hover:cursor-pointer max-w-md mx-auto md:mx-0"
//         >
//           <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#8CC63F] group-hover:scale-105 transition-transform duration-300">
//             Who We Are
//           </h2>
//           <p className="text-base md:text-lg leading-7 md:leading-8 text-gray-700 group-hover:text-black transition-all duration-300">
//             <span className="font-semibold text-black">Innovise</span> is a future-driven technology company focused on delivering <span className="text-[#8CC63F] font-semibold">AI-powered solutions</span>, <span className="text-[#8CC63F] font-semibold">IT automation</span>, and <span className="text-[#8CC63F] font-semibold">intelligent business tools</span> that help enterprises transform, scale, and succeed in the digital era.
//           </p>
//         </motion.div>

//         {/* Second Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.03 }}
//           className="group text-center border border-transparent rounded-3xl p-6 md:p-10 bg-white text-black transition-all duration-500 shadow-xl hover:shadow-[0_0_50px_#8CC63F88] hover:border-[#8CC63F] hover:cursor-pointer max-w-md mx-auto md:mx-0"
//         >
//           <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#8CC63F] group-hover:scale-105 transition-transform duration-300">
//             What We Do
//           </h2>
//           <p className="text-base md:text-lg leading-7 md:leading-8 text-gray-700 group-hover:text-black transition-all duration-300">
//             We offer cutting-edge solutions in <span className="text-[#8CC63F] font-semibold">software development</span>, <span className="text-[#8CC63F] font-semibold">custom AI integration</span>, <span className="text-[#8CC63F] font-semibold">cloud optimization</span>, and <span className="text-[#8CC63F] font-semibold">digital transformation consulting</span>. Our mission is to empower businesses with smart, scalable, and sustainable technology.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }











'use client';

import { motion } from 'framer-motion';
import GreenBackground from '@/components/GreenBackground';

export default function CompanyOverview() {
  return (
    <section className="relative py-12 px-4 text-white flex justify-center items-center overflow-hidden">
      {/* 🟩 Background shapes */}
      <GreenBackground />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
        {/* First Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="group text-center border border-transparent rounded-3xl p-6 md:p-10 bg-white text-black transition-all duration-500 shadow-xl hover:shadow-[0_0_50px_#8CC63F88] hover:border-[#8CC63F] hover:cursor-pointer md:max-w-full max-w-md mx-auto md:mx-0"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#8CC63F] group-hover:scale-105 transition-transform duration-300">
            Who We Are
          </h2>
          <p className="text-base md:text-lg leading-7 md:leading-8 text-gray-700 group-hover:text-black transition-all duration-300">
            <span className="font-semibold text-black">Innovise</span> is a future-driven technology company focused on delivering <span className="text-[#8CC63F] font-semibold">AI-powered solutions</span>, <span className="text-[#8CC63F] font-semibold">IT automation</span>, and <span className="text-[#8CC63F] font-semibold">intelligent business tools</span> that help enterprises transform, scale, and succeed in the digital era.
          </p>
        </motion.div>

        {/* Second Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="group text-center border border-transparent rounded-3xl p-6 md:p-10 bg-white text-black transition-all duration-500 shadow-xl hover:shadow-[0_0_50px_#8CC63F88] hover:border-[#8CC63F] hover:cursor-pointer md:max-w-full max-w-md mx-auto md:mx-0"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#8CC63F] group-hover:scale-105 transition-transform duration-300">
            What We Do
          </h2>
          <p className="text-base md:text-lg leading-7 md:leading-8 text-gray-700 group-hover:text-black transition-all duration-300">
            We offer cutting-edge solutions in <span className="text-[#8CC63F] font-semibold">software development</span>, <span className="text-[#8CC63F] font-semibold">custom AI integration</span>, <span className="text-[#8CC63F] font-semibold">cloud optimization</span>, and <span className="text-[#8CC63F] font-semibold">digital transformation consulting</span>. Our mission is to empower businesses with smart, scalable, and sustainable technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
