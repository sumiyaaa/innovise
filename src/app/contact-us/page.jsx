// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import illustration from "../../../public/images/illustration.png";
// import Footer from "../../components/AboutPage/Footer";

// export default function ContactUs() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message submitted!");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <>
//     <section className="min-h-screen bg-black text-white px-6 py-24">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//         {/* Left: Contact Form */}
//         <motion.form
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           onSubmit={handleSubmit}
//           className="space-y-6"
//         >
//           <h1 className="text-4xl font-bold text-[#8CC63F] mb-4">Contact Us</h1>
//           <p className="text-gray-300 mb-6">
//             Have questions about our ServiceNow training, solutions, or services?
//             Reach out — we're here to help!
//           </p>

//           <div>
//             <label className="block text-sm text-gray-400 mb-1">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-[#8CC63F] transition"
//               placeholder="Your name"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-400 mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-[#8CC63F] transition"
//               placeholder="you@example.com"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-400 mb-1">Message</label>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               required
//               rows="5"
//               className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-[#8CC63F] transition"
//               placeholder="Type your message here..."
//             />
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full bg-[#8CC63F] hover:bg-green-500 text-black py-3 px-6 rounded-lg font-bold transition"
//           >
//             Send Message
//           </motion.button>
//         </motion.form>

//         {/* Right: Illustration */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//           className="flex justify-center"
//         >
//           <Image
//             src={illustration}
//             alt="Contact Illustration"
//             width={500}
//             height={400}
//             className="w-full h-auto object-contain"
//           />
//         </motion.div>
//       </div>

//     </section>
//     <Footer/>
//     </>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import illustration from "../../../public/images/illustration.png";
// import Footer from "../../components/AboutPage/Footer";
// import GradientBackground from "@/components/GradientBackground/page";

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// // };

// export default function ContactUs() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message submitted!");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <>
//       {/* ✅ Hero Section */}
//       <section className="relative min-h-[70vh] px-6 flex items-center justify-center bg-black pt-[100px] sm:pt-0 overflow-hidden">
//         <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
//           <GradientBackground />
//         </div>

//         <div className="relative z-10 text-center max-w-3xl mx-auto px-4 backdrop-blur-sm">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
//             Get in <span className="text-[#8CC63F]">Touch</span>
//           </h1>
//           <p className="text-gray-300 text-base sm:text-lg">
//             Have questions about our ServiceNow solutions or need support?
//             <br className="hidden sm:block" />
//             We're here to help you every step of the way.
//           </p>
//         </div>
//       </section>

//       {/* ✅ Contact Form Section */}
//       <section className="bg-black text-white px-6 py-24">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           {/* Left: Contact Form */}
//           <motion.form
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             onSubmit={handleSubmit}
//             className="space-y-6"
//           >
//             <h2 className="text-3xl font-bold text-[#8CC63F] mb-4">Contact Us</h2>
//             <p className="text-gray-300 mb-6">
//               Fill out the form and we’ll get back to you as soon as possible.
//             </p>

//             <div>
//               <label className="block text-sm text-gray-400 mb-1">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-[#8CC63F] transition"
//                 placeholder="Your name"
//               />
//             </div>

//             <div>
//               <label className="block text-sm text-gray-400 mb-1">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-[#8CC63F] transition"
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div>
//               <label className="block text-sm text-gray-400 mb-1">Message</label>
//               <textarea
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//                 rows="5"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-[#8CC63F] transition"
//                 placeholder="Type your message here..."
//               />
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="w-full bg-[#8CC63F] hover:bg-green-500 text-black py-3 px-6 rounded-lg font-bold transition"
//             >
//               Send Message
//             </motion.button>
//           </motion.form>

//           {/* Right: Illustration */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.7 }}
//             className="flex justify-center"
//           >
//             <Image
//               src={illustration}
//               alt="Contact Illustration"
//               width={500}
//               height={400}
//               className="w-full h-auto object-contain"
//             />
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import Footer from "../../components/AboutPage/Footer";
import GradientBackground from "@/components/GradientBackground/page";
import { Linkedin } from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[600px] px-6 flex items-center justify-center bg-black pt-[100px] sm:pt-0 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
          <GradientBackground />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 backdrop-blur-sm">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in <span className="text-[#8CC63F]">Touch</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Have questions about our ServiceNow solutions or need support?
            <br className="hidden sm:block" />
            We're here to help you every step of the way.
          </p>
        </div>
      </section>

      <section className="bg-black py-12 px-4 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
          <div className="flex flex-col items-center">
            <MapPin className="text-[#8CC63F] mb-2" size={32} />
            <p className="font-semibold">Address</p>
            <p className="text-sm mt-1">Hyderabad</p>
          </div>

          <div className="flex flex-col items-center">
            <Phone className="text-[#8CC63F] mb-2" size={32} />
            <p className="font-semibold">Phone</p>
            <p className="text-sm mt-1 text-white hover:underline cursor-pointer">
              +92 304 3673951
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Mail className="text-[#8CC63F] mb-2" size={32} />
            <p className="font-semibold">Email</p>
            <p className="text-sm mt-1 text-white hover:underline cursor-pointer">
              hrinnovise@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Linkedin className="text-[#8CC63F] mb-2" size={32} />
            <p className="font-semibold">LinkedIn</p>
            <a
              href="https://www.linkedin.com/company/innoviseltd/posts/?feedView=all" //
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mt-1 text-white-600 hover:underline cursor-pointer"
            >
              linkedin.com
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 bg-[#0d0c11] shadow-lg rounded-xl overflow-hidden">
          {/* Form */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#8CC63F]"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#8CC63F]"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#8CC63F]"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#8CC63F]"
              />

              <button
                type="submit"
                className="bg-[#8CC63F] hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="w-full h-full">
            <iframe
              title="Google Map - Latifabad Unit 8"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24157.48356802168!2d68.3520856!3d25.3676477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c705c3fea8583%3A0xe613bf128b88647e!2sLatifabad%20Unit%20No.%208%20Latifabad%20Unit%208%20Latifabad%2C%20Hyderabad%2C%2071000%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1625036317204!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Info Bottom Section */}
      {/* <section className="bg-black py-12 px-4 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
          <div className="flex flex-col items-center">
            <MapPin className="text-[#8CC63F] mb-2" size={32} />
            <p className="font-semibold">Address</p>
            <p className="text-sm mt-1">Hyderabad</p>
          </div>

          <div className="flex flex-col items-center">
            <Phone className="text-[#8CC63F] mb-2" size={32} />
            <p className="font-semibold">Phone</p>
            <p className="text-sm mt-1 text-white hover:underline cursor-pointer">
              +1 235 2355 98
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Mail className="text-[#8CC63F] mb-2" size={32} />
            <p className="font-semibold">Email</p>
            <p className="text-sm mt-1 text-white hover:underline cursor-pointer">
              hrinnovise@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Linkedin className="text-[#8CC63F] mb-2" size={32} />
            <p className="font-semibold">LinkedIn</p>
            <a
              href="https://www.linkedin.com/company/innoviseltd/posts/?feedView=all" //
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mt-1 text-white-600 hover:underline cursor-pointer"
            >
              linkedin.com
            </a>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
}
