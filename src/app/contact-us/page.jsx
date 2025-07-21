// "use client";
// import React, { useState } from "react";

// import Footer from "../../components/AboutPage/Footer";
// import { motion } from "framer-motion";

// export default function ContactUs() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Add backend handling (API or third-party service)
//     alert("Message submitted!");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <>
   

//       <section className="bg-[#f1faee] text-white py-20 px-4 min-h-screen">
//       {/* <section
//   className="text-white py-20 px-4 min-h-screen"
//   style={{
//     background: "linear-gradient(135deg, #0d0c11 0%, #1a1825 100%)",
//   }}
// > */}

//         <div className="max-w-4xl mx-auto">
//          <motion.h2
//   initial={{ opacity: 0, y: -40 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.5 }}
//   className="text-4xl font-bold text-center text-[#8CC63F] mb-10"
// >
//   Contact Us
// </motion.h2>


//           <motion.form
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             onSubmit={handleSubmit}
//             className="bg-[#111827] p-8 rounded-xl shadow-xl space-y-6 border border-gray-700"
//           >
//             <div>
//               <label className="block text-sm mb-1 text-gray-300">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="Your name"
//                 className="w-full px-4 py-2 rounded bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:border-green-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-1 text-gray-300">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="you@example.com"
//                 className="w-full px-4 py-2 rounded bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:border-green-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-1 text-gray-300">Message</label>
//               <textarea
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//                 rows="5"
//                 placeholder="Your message"
//                 className="w-full px-4 py-2 rounded bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:border-green-500"
//               ></textarea>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="bg-[#8CC63F] hover:bg-[#78b834] transition-all text-white py-2 px-6 rounded-lg font-semibold"
//             >
//               Send Message
//             </motion.button>
//           </motion.form>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

"use client";

import React, { useState } from "react";
import Footer from "../../components/AboutPage/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import illustration from "../../../public/images/illustration.png";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-tr from-[#e0f7fa] via-[#e3f2fd] to-[#e0f7fa] flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Transparent Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="p-2 space-y-6"
          >
            <h1 className="text-4xl font-extrabold text-[#8CC63F] mb-4">
              CONTACT US
            </h1>
            <p className="text-gray-700 mb-4">
              For any inquiries related to ServiceNow development, support, or integration,
              please reach out to us using the form below. We’re here to help!
            </p>

            <div>
              <label className="block text-sm text-gray-800 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-transparent text-black placeholder-gray-500 transition focus:outline-none focus:border-[#8CC63F] hover:border-[#8CC63F]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-800 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-transparent text-black placeholder-gray-500 transition focus:outline-none focus:border-[#8CC63F] hover:border-[#8CC63F]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-800 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-transparent text-black placeholder-gray-500 transition focus:outline-none focus:border-[#8CC63F] hover:border-[#8CC63F]"
                placeholder="Your message"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#8CC63F] hover:bg-[#6ca92e] text-white py-3 px-6 rounded-lg font-bold transition"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex justify-center"
          >
            <Image
              src={illustration}
              alt="Contact Illustration"
              width={500}
              height={400}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
