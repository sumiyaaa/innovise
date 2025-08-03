'use client';

import { motion } from 'framer-motion';
import {
  Settings,
  Database,
  MonitorCheck,
  Users,
  Server,
  FileCheck,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: <Settings className="w-6 h-6 text-[#8CC63F]" />,
    title: "Incident Management",
    description: "Manage and resolve IT incidents efficiently to minimize impact on business operations.",
  },
  {
    icon: <Database className="w-6 h-6 text-[#8CC63F]" />,
    title: "CMDB",
    description: "Maintain a centralized database of IT assets and their relationships across your environment.",
  },
  {
    icon: <MonitorCheck className="w-6 h-6 text-[#8CC63F]" />,
    title: "Change Management",
    description: "Control IT changes with minimal risk through structured workflows and approvals.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#8CC63F]" />,
    title: "HR Service Delivery",
    description: "Deliver consistent and streamlined HR services through automation and self-service portals.",
  },
  {
    icon: <Server className="w-6 h-6 text-[#8CC63F]" />,
    title: "ITOM",
    description: "Optimize IT operations with proactive monitoring and infrastructure automation.",
  },
  {
    icon: <FileCheck className="w-6 h-6 text-[#8CC63F]" />,
    title: "Knowledge Management",
    description: "Create, manage, and share knowledge to improve issue resolution and employee self-service.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function ServiceTimeline() {
  return (
    <div className="relative w-full px-4 py-24 bg-black text-white">
      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl font-extrabold">
          <span className="text-white">Our </span>
          <span className="text-[#8CC63F]">ServiceNow Offerings</span>
        </h2>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto">
          Accelerate your digital transformation journey with powerful, enterprise-grade ServiceNow solutions.
        </p>
      </div>

      {/* Vertical Line - starts after paragraph */}
      <div className="absolute top-[220px] bottom-24 left-1/2 transform -translate-x-1/2 w-[2px] bg-[#8CC63F] z-0" />

      {/* Cards */}
      <div className="relative z-10 flex flex-col gap-24">
        {services.map((service, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="relative w-full flex items-center"
            >
              {isLeft && (
                <>
                  <div className="w-1/2 flex justify-end pr-4">
                    <div className="w-[80%] bg-[#111114] border border-[#2c2c2c] p-6 rounded-xl shadow-xl">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#8CC63F]/10 flex items-center justify-center">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                      <a href="#" className="text-[#8CC63F] font-medium flex items-center gap-1 hover:underline">
                        View Details <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                  <div className="w-1/2" />
                </>
              )}

              {/* Number Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#8CC63F] text-black font-bold flex items-center justify-center border-2 border-black z-20">
                {String(index + 1).padStart(2, '0')}
              </div>

              {!isLeft && (
                <>
                  <div className="w-1/2" />
                  <div className="w-1/2 flex justify-start pl-4">
                    <div className="w-[80%] bg-[#111114] border border-[#2c2c2c] p-6 rounded-xl shadow-xl">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#8CC63F]/10 flex items-center justify-center">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                      <a href="#" className="text-[#8CC63F] font-medium flex items-center gap-1 hover:underline">
                        View Details <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* More Services Button */}
      <div className="text-center mt-20 relative z-10">
        <button className="bg-[#8CC63F] hover:bg-[#7abf35] text-black font-bold py-3 px-6 rounded-full transition duration-300">
          More Services
        </button>
      </div>
    </div>
  );
}
