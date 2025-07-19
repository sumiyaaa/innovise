// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';

// const GreenBackground = () => {
//   return (
//     <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-gradient-to-br from-[#8CC63F] to-[#2E7D32]">
//       {/* Blurred glow circles */}
//       <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#A5D6A7] rounded-full blur-[100px] opacity-30 top-[10%] left-[10%] animate-pulse"></div>
//       <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#AED581] rounded-full blur-[100px] opacity-20 bottom-[10%] right-[15%] animate-pulse"></div>

//       {/* Moving wave effect */}
//       <motion.div
//         initial={{ x: '-100%' }}
//         animate={{ x: '100%' }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           repeatType: 'mirror',
//           ease: 'linear',
//         }}
//         className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#A5D6A7]/30 to-transparent"
//         style={{
//           clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 40%)',
//         }}
//       />

//       {/* Left diagonal shape */}
//       <motion.div
//         initial={{ x: -200, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="absolute left-0 top-[30%] w-[70%] h-full bg-[#2E7D32]"
//         style={{
//           clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
//         }}
//       />

//       {/* Right diagonal shape */}
//       <motion.div
//         initial={{ x: 200, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1.2 }}
//         className="absolute right-0 top-0 w-[60%] h-full bg-[#43A047]"
//         style={{
//           clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
//         }}
//       />

//       {/* White triangle for contrast */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.3 }}
//         className="hidden md:block absolute top-0 right-0 w-[20%] h-[20%] bg-white"
//         style={{
//           clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)',
//         }}
//       />

//       {/* Optional glowing particle */}
//       <div className="absolute w-16 h-16 md:w-24 md:h-24 bg-white opacity-20 rounded-full blur-2xl top-[60%] left-[60%] animate-ping"></div>
//     </div>
//   );
// };

// export default GreenBackground;




'use client';
import React from 'react';
import { motion } from 'framer-motion';

const GreenBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-gradient-to-br from-[#8CC63F] to-[#2E7D32]">
      {/* Blurred glow circles */}
      <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#A5D6A7] rounded-full blur-[100px] opacity-30 top-[10%] left-[10%] animate-pulse"></div>
      <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#AED581] rounded-full blur-[100px] opacity-20 bottom-[10%] right-[15%] animate-pulse"></div>

      {/* Moving wave effect */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'linear',
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#CDE69C]/30 to-transparent"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 40%)',
        }}
      />

      {/* Left diagonal shape */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-[30%] w-[70%] h-full bg-[#2E7D32]"
        style={{
          clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
        }}
      />

      {/* Right diagonal shape */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute right-0 top-0 w-[60%] h-full bg-[#43A047]"
        style={{
          clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
        }}
      />

      {/* Stylish triangle - now soft spring green */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="hidden md:block absolute top-0 right-0 w-[20%] h-[20%] bg-[#D0E8B5]"
        style={{
          clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)',
        }}
      />

      {/* Glowing soft green particle */}
      <div className="absolute w-16 h-16 md:w-24 md:h-24 bg-[#D0E8B5] opacity-30 rounded-full blur-2xl top-[60%] left-[60%] animate-ping"></div>
    </div>
  );
};

export default GreenBackground;
