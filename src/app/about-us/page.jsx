"use client";

import { FaLinkedin } from "react-icons/fa";

import React from "react";
import {
  Briefcase,
  Users,
  ShieldCheck,
  Server,
  Settings,
  Database,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/AboutPage/Footer";
import Link from "next/link";import GradientBackground from "@/components/GradientBackground/page";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MotionLink = motion(Link);
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const services = [
  {
    icon: <Settings className="w-8 h-8 text-[#8CC63F]" />,
    title: "ServiceNow Implementation",
    description:
      "End-to-end implementation of ServiceNow platforms tailored to your business needs.",
  },
  {
    icon: <Database className="w-8 h-8 text-[#8CC63F]" />,
    title: "ITSM Solutions",
    description:
      "Comprehensive IT Service Management solutions to streamline your operations.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#8CC63F]" />,
    title: "Security Operations",
    description:
      "Enhance your security posture with our ServiceNow SecOps solutions.",
  },
  {
    icon: <Server className="w-8 h-8 text-[#8CC63F]" />,
    title: "Custom Development",
    description:
      "Bespoke ServiceNow applications developed for your unique requirements.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-black text-white">
      <section className="relative min-h-screen py-32 px-4 overflow-hidden bg-black">
         <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
          <GradientBackground />
        </div>
        {/* <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/gradient-mesh.svg')] bg-cover bg-center animate-pulse-slow"></div>
        </div> */}

        <div className="max-w-6xl mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <span className="px-4 py-2 bg-[#8CC63F]/10 text-[#8CC63F] rounded-full text-sm font-medium">
              INNOVATING SINCE 2018
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">We Are </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-[#4AAE20]">
              Innovise
            </span>
          </motion.h1>

          <motion.div
            className="flex flex-col items-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Transforming enterprises with{" "}
              <span className="text-[#8CC63F] font-medium">ServiceNow</span>{" "}
              solutions that drive:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Efficiency", "Automation", "Innovation"].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-full border border-[#2c2c2c]"
                  whileHover={{ scale: 1.05, borderColor: "#8CC63F" }}
                >
                  <CheckCircle className="w-5 h-5 text-[#8CC63F]" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <MotionLink
              href="/services"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(140, 198, 63, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#8CC63F] text-black font-bold rounded-full flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              Explore Services
            </MotionLink>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-[#8CC63F] text-white rounded-full flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              Meet Our Team
            </motion.button>
          </motion.div>

          <motion.div
            className="absolute -bottom-32 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center">
              <ChevronDown className="w-6 h-6 text-[#8CC63F] animate-bounce" />
              <span className="text-xs text-gray-400 mt-2">
                SCROLL TO EXPLORE
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-[black]" >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-3xl font-bold mb-6" variants={fadeIn}>
              Our Story
            </motion.h2>
            <motion.p className="text-gray-300 mb-4" variants={fadeIn}>
              Founded in 2018, Innovise began with a simple mission: to help
              businesses harness the power of ServiceNow to transform their
              operations.
            </motion.p>
            <motion.p className="text-gray-300 mb-4" variants={fadeIn}>
              What started as a small team of ServiceNow enthusiasts has grown
              into a recognized leader in enterprise workflow automation,
              serving clients across multiple industries.
            </motion.p>
            <motion.p className="text-gray-300" variants={fadeIn}>
              Today, we're proud to be a trusted partner for organizations
              looking to modernize their IT infrastructure and business
              processes.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-80 md:h-96 rounded-xl overflow-hidden"
          >
            <Image
              src="https://st2.depositphotos.com/3591429/5246/i/450/depositphotos_52461727-stock-photo-business-people-on-green-world.jpg"
              alt="Innovise team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

{/* Meet Our Founders */}
{/* <section className="py-20 px-4 bg-[#0d0c11]">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold mb-4">Meet Our Founders</h2>
    <p className="text-gray-300 max-w-2xl mx-auto">
      The visionary minds driving Innovise forward.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
   
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0d0c11] border border-[#2c2c2c] rounded-xl p-6 text-center hover:border-[#8CC63F]"
    >
      <Image
        src="/images/sirhamid.png" // replace with real image path
        alt="Founder 1"
        width={150}
        height={150}
        className="mx-auto rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-white">Hamid Lagari</h3>
      <p className="text-gray-400 mb-2">Founder & CEO</p>
      <p className="text-gray-500 text-sm">
        Passionate about digital transformation through ServiceNow.
      </p>
    </motion.div>

    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[#0d0c11] border border-[#2c2c2c] rounded-xl p-6 text-center hover:border-[#8CC63F]"
    >
      <Image
        src="/images/siryahya.png" // replace with real image path
        alt="Founder 2"
        width={150}
        height={150}
        className="mx-auto rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-white">Muhammad Yahya</h3>
      <p className="text-gray-400 mb-2">Co-Founder & CTO</p>
      <p className="text-gray-500 text-sm">
        Driving innovation with deep ServiceNow expertise and leadership.
      </p>
    </motion.div>
  </div>
</section> */}

    {/* <section className="relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1c1f2e"
            d="M0,160L60,176C120,192,240,224,360,240C480,256,600,256,720,240C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      <div className="bg-[black] pt-20 pb-28 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">The Executive Team</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
         
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center bg-[#0d0c11] rounded-2xl shadow-lg p-6 gap-6"
          >
            <Image
              src="/images/sirhamid.png"
              alt="Hamid Lagari"
              width={100}
              height={100}
              className="rounded-xl object-cover w-[100px] h-[100px]"
            />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white">Hamid Lagari</h3>
              <p className="text-[#8CC63F] font-medium mb-1">Founder & CEO</p>
              <p className="text-sm text-gray-500 mb-2">
                Passionate about digital transformation through ServiceNow.
              </p>
              <a
                href="https://www.linkedin.com/in/hamidlagari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#8CC63F] transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center bg-[#0d0c11] rounded-2xl shadow-lg p-6 gap-6"
          >
            <Image
              src="/images/siryahya.png"
              alt="Muhammad Yahya"
              width={100}
              height={100}
              className="rounded-xl object-cover w-[100px] h-[100px]"
            />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white">Muhammad Yahya</h3>
              <p className="text-[#8CC63F] font-medium mb-1">Co-Founder & CTO</p>
              <p className="text-sm text-gray-500 mb-2">
                Driving innovation with deep ServiceNow expertise and leadership.
              </p>
              <a
                href="https://www.linkedin.com/in/muhammadyahya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#8CC63F] transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>  */}

     <section className="relative overflow-hidden">
      {/* ✅ Top Wave */}
      <div className="absolute top-0 left-0 w-full z-0">
        <svg
          className="w-full h-40"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0d0c11"
            d="M0,160L60,176C120,192,240,224,360,240C480,256,600,256,720,240C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      {/* ✅ Content */}
      <div className="relative bg-black z-10 pt-10 pb-28 px-4">
        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">
            The <span className="text-[#8CC63F]">Executive</span> Team
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="flex items-center bg-[#0d0c11] rounded-2xl shadow-lg hover:shadow-[#8CC63F]/30 p-6 gap-6 transition duration-300"
          >
            <Image
              src="/images/sirhamid.png"
              alt="Hamid Lagari"
              width={100}
              height={100}
              className="rounded-xl object-cover w-[100px] h-[100px]"
            />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white">Hamid Lagari</h3>
              <p className="text-[#8CC63F] font-medium mb-1">Founder & CEO</p>
              <p className="text-sm text-gray-500 mb-2">
                Passionate about digital transformation through ServiceNow.
              </p>
              <a
                href="https://www.linkedin.com/in/hamid-laghari-7769801bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#8CC63F] transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="flex items-center bg-[#0d0c11] rounded-2xl shadow-lg hover:shadow-[#8CC63F]/30 p-6 gap-6 transition duration-300"
          >
            <Image
              src="/images/siryahya.png"
              alt="Muhammad Yahya"
              width={100}
              height={100}
              className="rounded-xl object-cover w-[100px] h-[100px]"
            />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white">Muhammad Yahya</h3>
              <p className="text-[#8CC63F] font-medium mb-1">Co-Founder & CTO</p>
              <p className="text-sm text-gray-500 mb-2">
                Driving innovation with deep ServiceNow expertise and leadership.
              </p>
              <a
                href="https://www.linkedin.com/in/yahyah-mirza-a2575b295/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#8CC63F] transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
   



      {/* Our Mission */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-3xl font-bold mb-4" variants={fadeIn}>
             Our <span className="text-[#8CC63F]">  Mission </span>
            </motion.h2>
            <motion.p
              className="text-gray-300 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              To deliver transformative ServiceNow solutions that empower
              businesses to work smarter, not harder.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-[#0d0c11] p-8 rounded-xl border border-[#2c2c2c] border border-[#2c2c2c] hover:border-[#8CC63F]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Briefcase className="w-10 h-10 text-[#8CC63F] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-400">
                Certified ServiceNow professionals with deep platform knowledge
                and industry experience.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#0d0c11] p-8 rounded-xl border border-[#2c2c2c] border border-[#2c2c2c] hover:border-[#8CC63F]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <Users className="w-10 h-10 text-[#8CC63F] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Client-Centric</h3>
              <p className="text-gray-400">
                Solutions tailored to your specific needs with ongoing support
                and partnership.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#0d0c11] p-8 rounded-xl border border-[#2c2c2c] border border-[#2c2c2c] hover:border-[#8CC63F]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <ShieldCheck className="w-10 h-10 text-[#8CC63F] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-400">
                Constantly evolving our approaches to leverage the latest
                ServiceNow capabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4 bg-[#0d0c11]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-3xl font-bold mb-4" variants={fadeIn}>
              Our <span className="text-[#8CC63F]">ServiceNow</span> Expertise
            </motion.h2>
            <motion.p
              className="text-gray-300 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Comprehensive solutions across the ServiceNow platform
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#111114] p-6 rounded-xl border border-[#2c2c2c] hover:border-[#8CC63F] transition-colors"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#8CC63F] text-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Let's discuss how our ServiceNow solutions can drive efficiency and
            innovation in your organization.
          </motion.p>
         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Link href="/contact-us">
    <button
      className="px-8 py-3 bg-black text-white font-semibold rounded-full  hover:bg-gray-900 transition-colors"
    >
      Contact Us Today
    </button>
  </Link>
</motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
