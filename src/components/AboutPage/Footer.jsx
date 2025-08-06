// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import GreenBackground from '@/components/GreenBackground';

// export default function Footer() {
//   return (
//     <footer className="relative text-white overflow-hidden bg-[#0D1B13]">
//       {/* Background Blur Effect */}
//       <div className="absolute inset-0 z-0 opacity-50">
//         <GreenBackground />
//         <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]"></div>
//       </div>

//       {/* Footer Content */}
//       <div className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
//         {/* Top Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-5 gap-10"
//         >
//           {/* Logo & About */}
//           <div className="md:col-span-2">
//             <h3 className="text-3xl font-bold text-[#8CC63F] mb-3">Innovise</h3>
//             <p className="text-gray-300 text-sm mb-4">
//               Transforming businesses with intelligent ServiceNow solutions.
//             </p>

//             <div className="flex gap-4 mt-4">
//               {[
//                 { href: 'https://linkedin.com/company/innoviseltd', icon: '/icons/linkedin.svg' },
//                 { href: 'https://twitter.com', icon: '/icons/twitter.svg' },
//                 { href: 'https://facebook.com', icon: '/icons/facebook.svg' },
//               ].map((item, i) => (
//                 <a
//                   key={i}
//                   href={item.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="transition-transform hover:scale-110 hover:text-[#8CC63F]"
//                 >
//                   <img src={item.icon} alt="icon" width={24} height={24} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Footer Links */}
//           {[
//             {
//               title: 'Solutions',
//               links: [
//                 { text: 'IT Service Management', href: '/solutions/itsm' },
//                 { text: 'Customer Service Management', href: '/solutions/csm' },
//                 { text: 'HR Service Delivery', href: '/solutions/hr' },
//                 { text: 'Security Operations', href: '/solutions/security' },
//               ],
//             },
//             {
//               title: 'Company',
//               links: [
//                 { text: 'Home', href: '/' },
//                 { text: 'About Us', href: '/about' },
//                 { text: 'Services', href: '/services' },
//                 { text: 'Solutions', href: '/solutions' },
//                 { text: 'Contact Us', href: '/contact' },
//               ],
//             },
//             {
//               title: 'Resources',
//               links: [
//                 { text: 'Case Studies', href: '/resources/case-studies' },
//                 { text: 'Whitepapers', href: '/resources/whitepapers' },
//                 { text: 'Webinars', href: '/resources/webinars' },
//                 { text: 'FAQ', href: '/resources/faq' },
//               ],
//             },
//           ].map((section, i) => (
//             <div key={i}>
//               <h4 className="font-semibold text-lg mb-3 text-[#8CC63F]">{section.title}</h4>
//               <ul className="space-y-2 text-sm text-gray-300">
//                 {section.links.map((link, j) => (
//                   <li key={j}>
//                     <Link
//                       href={link.href}
//                       className="hover:text-white hover:underline transition-colors"
//                     >
//                       {link.text}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </motion.div>

//         {/* Newsletter */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="mt-12"
//         >
//           <h4 className="text-xl font-semibold text-[#8CC63F] mb-2">Stay Updated</h4>
//           <p className="text-sm text-gray-300 mb-4">
//             Subscribe to our newsletter for the latest insights.
//           </p>
//           <form className="flex max-w-md">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-[#8CC63F] hover:bg-[#78b62a] px-5 py-2 rounded-r-md text-white transition-all"
//             >
//               Subscribe
//             </button>
//           </form>
//         </motion.div>

//         {/* Bottom Section */}
//         <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between text-sm text-gray-400">
//           <div>&copy; {new Date().getFullYear()} Innovise. All rights reserved.</div>
//           <div className="flex gap-4 mt-3 md:mt-0">
//             <Link href="/privacy" className="hover:text-white hover:underline">Privacy Policy</Link>
//             <Link href="/terms" className="hover:text-white hover:underline">Terms of Service</Link>
//             <Link href="/cookies" className="hover:text-white hover:underline">Cookie Policy</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }




'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GreenBackground from '@/components/GreenBackground';
import { FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden bg-[#0D1B13]">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 z-0 opacity-50">
        <GreenBackground />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-10"
        >
          {/* Logo & About */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-[#8CC63F] mb-3">Innovise</h3>
            <p className="text-gray-300 text-sm mb-4">
              Transforming businesses with intelligent ServiceNow solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/innoviseltd/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#8CC63F] hover:shadow-lg transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#8CC63F] hover:shadow-lg transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:info@innovise.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#8CC63F] hover:shadow-lg transition-all duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {[
            {
              title: 'Solutions',
              links: [
                { text: 'IT Service Management', href: '/solutions/itsm' },
                { text: 'Customer Service Management', href: '/solutions/csm' },
                { text: 'HR Service Delivery', href: '/solutions/hr' },
                { text: 'Security Operations', href: '/solutions/security' },
              ],
            },
            {
              title: 'Company',
              links: [
                { text: 'Home', href: '/' },
                { text: 'About Us', href: '/about-us' },
                { text: 'Services', href: '/services' },
             
                { text: 'Contact Us', href: '/contact-us' },
              ],
            },
            {
              title: 'Resources',
              links: [
                { text: 'Case Studies', href: '/resources/case-studies' },
                { text: 'Whitepapers', href: '/resources/whitepapers' },
                { text: 'Webinars', href: '/resources/webinars' },
                { text: 'FAQ', href: '/resources/faq' },
              ],
            },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="font-semibold text-lg mb-3 text-[#8CC63F]">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="hover:text-white hover:underline transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h4 className="text-xl font-semibold text-[#8CC63F] mb-2">Stay Updated</h4>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to our newsletter for the latest insights.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 bg-white rounded-md sm:rounded-l-md sm:rounded-r-none text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#8CC63F] hover:bg-[#78b62a] px-5 py-2 mt-2 sm:mt-0 sm:rounded-r-md text-white sm:rounded-l-none rounded-md transition-all"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>&copy; {new Date().getFullYear()} Innovise. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="hover:text-white hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white hover:underline">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


