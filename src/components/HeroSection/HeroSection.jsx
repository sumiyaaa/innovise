"use client";
import React from "react";
import styles from "./HeroSection.module.css";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import hero from "../../../public/images/hero.png";
import { motion } from "framer-motion";

// Animations
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

// Button hover effect
const buttonHover = {
  scale: 1.05,
  backgroundColor: "#7ab934",
  color: "#ffffff",
  transition: { duration: 0.3 },
};

// Primary theme color
const primaryColor = "#8CC63F";

export default function HeroSection() {
  return (
    <section className={`${styles.hero} relative min-h-screen flex items-center justify-center px-4`}>
      <div className="max-w-7xl w-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left z-10">
        <motion.div
          className="w-full max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-lg md:text-xl text-gray-500 leading-relaxed mb-6"
            variants={fadeInUp}
          >
            At Innovise, we deliver modern IT solutions using ServiceNow to
            help businesses streamline workflows, automate operations, and
            grow smarter.
          </motion.p>

          <motion.h2
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-10 tracking-tight"
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
                loop={0}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.h2>

          <motion.button
            className="px-9 py-4 text-lg font-semibold rounded-lg cursor-pointer transition-all duration-300 ease-in-out shadow-md"
            style={{ backgroundColor: primaryColor, color: "#0d0c11" }}
            variants={fadeInUp}
            whileHover={buttonHover}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
