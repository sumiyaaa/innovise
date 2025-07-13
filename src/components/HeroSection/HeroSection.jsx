// // HeroSection.jsx
// import React from 'react';
// import styles from './HeroSection.module.css';
// import Image from 'next/image';
// // import hero from '../../../public/images/hero.png'

// export default function HeroSection() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.innerContainer}>
//         <div className={styles.textContent}>
//           <p>
//             At Innovise, we deliver modern IT solutions using ServiceNow to help businesses streamline
//             workflows, automate operations, and grow smarter.
//           </p>
//           <h2>
//             Empowering Businesses <br />
//             with <span>Intelligent ServiceNow Solutions</span>
//           </h2>
//           <button>Get Started</button>
//         </div>
//         <div className={styles.imageContainer}>
//           <div className={styles.circle} />
//           {/* <Image src="hero.png" alt="AI Expert" className={styles.image} priority /> */}
         
//         </div>
//       </div>
//     </section>
//   );
// }



// HeroSection.jsx
"use client";
import React from "react";
import styles from "./HeroSection.module.css";
import { Typewriter } from 'react-simple-typewriter';

import Image from "next/image";

//import hero from "../../../public/images/hero.png";

// ✅ You need to import motion from framer-motion
import { motion } from "framer-motion";

// ✅ Example animations — replace with your actual ones or define them
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    yoyo: Infinity,
  },
};

// ✅ Replace with your actual primary color
const primaryColor = "#8CC63F";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.innerContainer}>
        <div className="max-w-[1300px] w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 relative z-10">
          {/* Text Content Section */}
          <motion.div
            className="flex-1 text-center lg:text-left text-white max-w-xl mx-auto lg:mx-0"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-xl text-gray-400 leading-relaxed mb-6"
              variants={fadeInUp}
            >
              At Innovise, we deliver modern IT solutions using ServiceNow to help businesses
              streamline workflows, automate operations, and grow smarter.
            </motion.p>

            {/* <motion.h2
              className="text-5xl md:text-6xl font-extrabold leading-tight mb-10 tracking-tight"
              variants={fadeInUp}
            >
              Empowering Businesses <br />
              with <span style={{ color: primaryColor }}>Intelligent ServiceNow Solutions</span>
            </motion.h2> */}

            <motion.h2
  className="text-5xl md:text-6xl font-extrabold leading-tight mb-10 tracking-tight"
  variants={fadeInUp}
>
  Empowering Businesses <br />
  with{" "}
  <span style={{ color: primaryColor }}>
    <Typewriter
      words={[
        "Intelligent ServiceNow Solutions",
        "Powerful IT Automation",
        "Smart Digital Workflows",
      ]}
      loop={0} // 0 = infinite loop
      cursor
      cursorStyle="" // this for _
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  </span>
</motion.h2>

            <motion.button
              className="px-9 py-4 text-lg font-semibold rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
              style={{ backgroundColor: primaryColor, color: "#0d0c11" }}
              variants={fadeInUp}
              whileHover={buttonHover}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <div className={styles.imageContainer}>
            <div className={styles.circle} />
            <Image src={""} alt="AI Expert" className={styles.image} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
