"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

import Footer from "../../components/AboutPage/Footer";


const services = [
  {
    title: "ServiceNow Development",
    description:
      "Custom ServiceNow solutions, integrations, and automation tailored to your enterprise needs.",
    isMainCategory: true,
    subServices: [
      // {
      //   title: "CSA (Certified System Administrator)",
      //   description: "Expert configuration and administration of ServiceNow platforms by certified professionals.",
      // },
      // {
      //   title: "CIS-HR (Certified Implementation Specialist – HR)",
      //   description: "Certified implementation expertise for HR modules within ServiceNow.",
      // },
      {
        title: "CSM (Customer Service Management)",
        description: "Improve customer satisfaction with ServiceNow CSM.",
      },
      {
        title: "SPM (Strategic Portfolio Management)",
        description: "Deliver business value with ServiceNow SPM.",
      },
      {
        title: "ITSM (IT Service Management)",
        description: "Manage incidents, changes, and problems efficiently.",
      },
      {
        title: "HRSD (Human Resource Service Delivery)",
        description: "Streamline HR services with ServiceNow HRSD.",
      },
      {
      title: "Service Portal",
      description: "Build user-friendly, dynamic service portals for internal teams.",
    },
    {
      title: "Integration",
      description: "Connect ServiceNow with third-party systems for seamless operations.",
    },
    {
      title: "ITOM (IT Operations Management)",
      description: "Optimize IT operations with monitoring, discovery, and event management.",
    },
    ],
  },
  {
    title: "IT Consulting",
    description:
      "Strategic guidance and technology consulting to align IT with your business goals.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Enable scalable, secure, and cost-effective cloud environments with our cloud expertise.",
  },
  {
    title: "Automation & Workflows",
    description:
      "Automate your business processes using modern tools to increase efficiency.",
  },
  {
    title: "Managed IT Services",
    description:
      "We manage your IT infrastructure 24/7 to keep your business running smoothly.",
  },
];

const ServiceCard = ({ title, description, onClick, isHighlighted, animationDirection }) => {
  const animationVariant = {
    hidden: { opacity: 0, x: animationDirection === 'left' ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const baseClass = `
    transition duration-300 cursor-pointer p-6 rounded-tl-[40px] rounded-br-[20px] 
    hover:scale-105 shadow-md hover:shadow-xl
  `;

  const highlightedClass = isHighlighted
    ? 'bg-green-600 text-white'
    : 'bg-white text-gray-800';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationVariant}
      onClick={onClick}
      className={`${baseClass} ${highlightedClass}`}
    >
      <div className={`${isHighlighted ? 'text-white' : 'text-green-600'} mb-2`}>
        <Settings size={32} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
};

const App = () => {
  const [expanded, setExpanded] = useState(false);

  // Extract subservices from the first (ServiceNow Development) service
  const subServices = services[0].subServices;

  return (
    <div className="min-h-screen  bg-gradient-to-tr from-[#e0f7fa] via-[#e3f2fd] to-[#e0f7fa]  flex flex-col">
    

      <div className="max-w-7xl mx-auto text-center mt-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Explore Our <span className="text-[#8CC63F]">ServiceNow Services</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Innovise provides strategic, customized ServiceNow and IT solutions to optimize your enterprise systems.
        </p>
      </div>

      {/* Subcards ABOVE ServiceNow Development */}
      {expanded && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-10">
          {subServices.map((sub, index) => (
            <ServiceCard
              key={index}
              title={sub.title}
              description={sub.description}
              animationDirection={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      )}

      {/* Main Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {services.map((service, index) => {
          if (service.isMainCategory) {
            return (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                isHighlighted={true}
                onClick={() => setExpanded(!expanded)}
                animationDirection="left"
              />
            );
          }

          return (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              animationDirection={index % 2 === 0 ? 'left' : 'right'}
            />
          );
        })}
      </div>

      {/* Add space before Footer */}
      <div className="h-20"></div>

      <Footer />
    </div>
  );
};

export default App;
