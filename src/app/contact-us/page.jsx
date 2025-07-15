"use client";
import React, { useState } from "react";

import Footer from "../../components/AboutPage/Footer";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add backend handling (API or third-party service)
    alert("Message submitted!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
   

      <section className="bg-[#0d0c11] text-white py-20 px-4 min-h-screen">
      {/* <section
  className="text-white py-20 px-4 min-h-screen"
  style={{
    background: "linear-gradient(135deg, #0d0c11 0%, #1a1825 100%)",
  }}
> */}

        <div className="max-w-4xl mx-auto">
         <motion.h2
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-4xl font-bold text-center text-[#8CC63F] mb-10"
>
  Contact Us
</motion.h2>


          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-[#111827] p-8 rounded-xl shadow-xl space-y-6 border border-gray-700"
          >
            <div>
              <label className="block text-sm mb-1 text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-2 rounded bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message"
                className="w-full px-4 py-2 rounded bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:border-green-500"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-green-600 hover:bg-green-700 transition-all text-white py-2 px-6 rounded-lg font-semibold"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </>
  );
}
