// "use client";

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Settings } from 'lucide-react';

// import Footer from "../../components/AboutPage/Footer";


// const services = [
//   {
//     title: "ServiceNow Development",
//     description:
//       "Custom ServiceNow solutions, integrations, and automation tailored to your enterprise needs.",
//     isMainCategory: true,
//     subServices: [
    
//       {
//         title: "CSM (Customer Service Management)",
//         description: "Improve customer satisfaction with ServiceNow CSM.",
//       },
//       {
//         title: "SPM (Strategic Portfolio Management)",
//         description: "Deliver business value with ServiceNow SPM.",
//       },
//       {
//         title: "ITSM (IT Service Management)",
//         description: "Manage incidents, changes, and problems efficiently.",
//       },
//       {
//         title: "HRSD (Human Resource Service Delivery)",
//         description: "Streamline HR services with ServiceNow HRSD.",
//       },
//       {
//       title: "Service Portal",
//       description: "Build user-friendly, dynamic service portals for internal teams.",
//     },
//     {
//       title: "Integration",
//       description: "Connect ServiceNow with third-party systems for seamless operations.",
//     },
//     {
//       title: "ITOM (IT Operations Management)",
//       description: "Optimize IT operations with monitoring, discovery, and event management.",
//     },
//     ],
//   },
//   {
//     title: "IT Consulting",
//     description:
//       "Strategic guidance and technology consulting to align IT with your business goals.",
//   },
//   {
//     title: "Cloud Solutions",
//     description:
//       "Enable scalable, secure, and cost-effective cloud environments with our cloud expertise.",
//   },
//   {
//     title: "Automation & Workflows",
//     description:
//       "Automate your business processes using modern tools to increase efficiency.",
//   },
//   {
//     title: "Managed IT Services",
//     description:
//       "We manage your IT infrastructure 24/7 to keep your business running smoothly.",
//   },
// ];

// const ServiceCard = ({ title, description, onClick, isHighlighted, animationDirection }) => {
//   const animationVariant = {
//     hidden: { opacity: 0, x: animationDirection === 'left' ? -100 : 100 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
//   };

//   const baseClass = `
//     transition duration-300 cursor-pointer p-6 rounded-tl-[40px] rounded-br-[20px] 
//     hover:scale-105 shadow-md hover:shadow-xl
//   `;

//   const highlightedClass = isHighlighted
//     ? 'bg-green-600 text-white'
//     : 'bg-white text-gray-800';

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={animationVariant}
//       onClick={onClick}
//       className={`${baseClass} ${highlightedClass}`}
//     >
//       <div className={`${isHighlighted ? 'text-white' : 'text-green-600'} mb-2`}>
//         <Settings size={32} />
//       </div>
//       <h3 className="text-xl font-bold mb-2">{title}</h3>
//       <p className="text-sm">{description}</p>
//     </motion.div>
//   );
// };

// const App = () => {
//   const [expanded, setExpanded] = useState(false);

//   // Extract subservices from the first (ServiceNow Development) service
//   const subServices = services[0].subServices;

//   return (
//     <div className="min-h-screen  bg-gradient-to-tr from-[#e0f7fa] via-[#e3f2fd] to-[#e0f7fa]  flex flex-col">
    

//       <div className="max-w-7xl mx-auto text-center mt-12 px-4">
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
//           Explore Our <span className="text-[#8CC63F]">ServiceNow Services</span>
//         </h1>
//         <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//           Innovise provides strategic, customized ServiceNow and IT solutions to optimize your enterprise systems.
//         </p>
//       </div>

//       {/* Subcards ABOVE ServiceNow Development */}
//       {expanded && (
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-10">
//           {subServices.map((sub, index) => (
//             <ServiceCard
//               key={index}
//               title={sub.title}
//               description={sub.description}
//               animationDirection={index % 2 === 0 ? 'left' : 'right'}
//             />
//           ))}
//         </div>
//       )}

//       {/* Main Cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//         {services.map((service, index) => {
//           if (service.isMainCategory) {
//             return (
//               <ServiceCard
//                 key={index}
//                 title={service.title}
//                 description={service.description}
//                 isHighlighted={true}
//                 onClick={() => setExpanded(!expanded)}
//                 animationDirection="left"
//               />
//             );
//           }

//           return (
//             <ServiceCard
//               key={index}
//               title={service.title}
//               description={service.description}
//               animationDirection={index % 2 === 0 ? 'left' : 'right'}
//             />
//           );
//         })}
//       </div>

//       {/* Add space before Footer */}
//       <div className="h-20"></div>

//       <Footer />
//     </div>
//   );
// };

// export default App;

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Layers,
  UserCheck,
  Users,
  Globe,
  Repeat,
  Settings,
  Cloud,
  Zap,
  ShieldCheck,
} from "lucide-react";

import GradientBackground from "@/components/GradientBackground/page";
import Footer from "../../components/AboutPage/Footer";

const services = [
  {
    title: "CSM (Customer Service Management)",
    description: "Improve customer satisfaction with ServiceNow CSM.",
    icon: <UserCheck size={32} className="text-[#8CC63F]" />,
  },
  {
    title: "SPM (Strategic Portfolio Management)",
    description: "Deliver business value with ServiceNow SPM.",
    icon: <Layers size={32} className="text-[#8CC63F]" />,
  },
  {
    title: "ITSM (IT Service Management)",
    description: "Manage incidents, changes, and problems efficiently.",
    icon: <Settings size={32} className="text-[#8CC63F]" />,
  },
  {
    title: "HRSD (Human Resource Service Delivery)",
    description: "Streamline HR services with ServiceNow HRSD.",
    icon: <Users size={32} className="text-[#8CC63F]" />,
  },
  {
    title: "Service Portal",
    description: "Build user-friendly, dynamic portals for internal teams.",
    icon: <Globe size={32} className="text-[#8CC63F]" />,
  },
  {
    title: "Integration",
    description: "Connect ServiceNow with third-party systems.",
    icon: <Repeat size={32} className="text-[#8CC63F]" />,
  },
  {
    title: "ITOM (IT Operations Management)",
    description: "Optimize IT operations with discovery and monitoring.",
    icon: <Server size={32} className="text-[#8CC63F]" />,
  },
  {
    title: "IT Consulting",
    description: "Align IT strategy with your business goals.",
    icon: <ShieldCheck size={32} className="text-[#8CC63F]" />,
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud environments.",
    icon: <Cloud size={32} className="text-[#8CC63F]" />,
  },
  {
    title: "Automation & Workflows",
    description: "Automate business processes with modern tools.",
    icon: <Zap size={32} className="text-[#8CC63F]" />,
  },
  {
    title: "Managed IT Services",
    description: "24/7 IT infrastructure monitoring and support.",
    icon: <Settings size={32} className="text-[#8CC63F]" />,
  },
];

const ServiceCard = ({ title, description, icon, animationDirection }) => {
  const animationVariant = {
    hidden: { opacity: 0, y: animationDirection === "up" ? -50 : 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationVariant}
      className="bg-[#111] border border-[#222] hover:border-[#8CC63F] transition p-6 rounded-2xl text-white shadow hover:shadow-lg"
    >
      <div className="mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* ✅ Hero Section */}
      <section className="relative min-h-screen px-6 bg-black flex items-center justify-center overflow-hidden pt-[100px] sm:pt-0">
        {/* ✅ Background Gradient */}
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
          <GradientBackground />
        </div>

        {/* ✅ Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 backdrop-blur-sm">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6">
            Complete <span className="text-[#8CC63F]">ServiceNow Solutions</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8">
            Innovice offers full-cycle ServiceNow services—from strategic consulting and platform implementation to custom development, workflow automation, and cloud solutions.
          </p>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#8CC63F] text-black font-semibold px-8 py-3 rounded-lg transition shadow-lg"
          >
            Discover Our Services
          </motion.a>
        </div>
      </section>

      {/* ✅ Services Grid */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-[#8CC63F]">
            Our Offerings
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                animationDirection={index % 2 === 0 ? "up" : "down"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
