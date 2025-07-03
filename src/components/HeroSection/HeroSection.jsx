"use client";

import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";


const HeroSection = () => {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] w-full overflow-hidden">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://bioenergyeurope.org/wp-content/uploads/2024/11/Video_header_website.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
          Welcome To Innovice
        </h1>
        <p className="text-blue-300 text-base sm:text-lg md:text-xl mt-4 max-w-3xl">
          
Transforming Enterprise Workflows with Innovative ServiceNow Solutions Across All Domains
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
