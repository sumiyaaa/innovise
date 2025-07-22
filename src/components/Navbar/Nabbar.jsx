// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaPhoneAlt,
//   FaLinkedinIn,
//   FaFacebookF,
//   FaInstagram,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { usePathname } from "next/navigation";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const menuRef = useRef(null);

//   const navLinks = [
//     {name : "Home", href: "/"},
//     { name: "About Us", href: "/about-us" },
//     { name: "Services", href: "/services" },
//     // { name: "Solutions", href: "/solutions" },
//     { name: "Contact Us", href: "/contact-us" },
    
//   ];

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     }

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen]);

//   const handleLinkClick = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header className="w-full">
//       {/* <div className="bg-[#0c1525] text-white text-sm flex justify-between items-center px-4 md:px-8 py-2">
//         <div className="flex items-center space-x-2">
//           <FaPhoneAlt />
//           <span>+92 0000000000</span>
//         </div>
//         <div className="flex space-x-4">
//           <a href="#" aria-label="LinkedIn">
//             <FaLinkedinIn />
//           </a>
//           <a href="#" aria-label="Facebook">
//             <FaFacebookF />
//           </a>
//           <a href="#" aria-label="Instagram">
//             <FaInstagram />
//           </a>
//         </div>
//       </div> */}

//       <nav className="bg-[#0c1525] shadow-md text-white relative z-50">
//         <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
//           <a href="/" className="flex items-center gap-2 cursor-pointer">
//             <img
//               src="/images/logo.png"
//               alt="Pak Bioenergy"
//               className="h-20 w-auto"
//             />
//             <div className="leading-tight">
//               {/* <h1 className="text-xl font-bold text-black">Innovice</h1> */}
//               <p className="text-sm text-gray-700">
              
//               </p>
//             </div>
//           </a>

//           <ul
//             className={`hidden md:flex space-x-8 text-base font-normal ${poppins.className}`}
//           >
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   className={`capitalize transition-colors duration-200 ${
//                     pathname === link.href ? "" : "text-white"
//                   }`}
//                   style={pathname === link.href ? { color: "#8CC63F" } : {}}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <div className="md:hidden relative z-50">
//             <button
//               aria-label="Toggle menu"
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-white hover:text-gray-700 focus:outline-none"
//             >
//               {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
//             </button>
//           </div>
//         </div>

//         <div
//           ref={menuRef}
//           className={`
//             fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
//             ${menuOpen ? "translate-x-0" : "-translate-x-full"}
//           `}
//         >
//           <ul
//             className={`flex flex-col mt-20 px-6 space-y-6 font-medium ${poppins.className}`}
//           >
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   onClick={handleLinkClick}
//                   className={`block capitalize text-lg ${
//                     pathname === link.href ? "" : "text-black"
//                   }`}
//                   style={pathname === link.href ? { color: "#8CC63F" } : {}}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {menuOpen && (
//           <div
//             className="fixed inset-0 z-30"
//             onClick={() => setMenuOpen(false)}
//           />
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;







// 'use client';
// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { usePathname } from "next/navigation";
// import { Poppins } from "next/font/google";
// import { motion } from "framer-motion";
// import GreenBackground from "@/components/GreenBackground";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const menuRef = useRef(null);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about-us" },
//     { name: "Services", href: "/services" },
//     { name: "Contact Us", href: "/contact-us" },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen]);

//   const handleLinkClick = () => setMenuOpen(false);

//   return (
//     <header className="w-full relative z-50">
//       {/* 🔲 Background Component */}
//       <div className="absolute inset-0 z-0 opacity-70">
//         <GreenBackground />
//         <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]"></div>
//       </div>

//       {/* ✅ Navbar Content */}
//       <nav className="relative z-10 text-white">
//         <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
//           {/* 🔗 Logo */}
//           <a href="/" className="flex items-center gap-2">
//             <img
//               src="/images/logo.png"
//               alt="Pak Bioenergy"
//               className="h-16 w-auto"
//             />
//           </a>

//           {/* 🖥 Desktop Menu */}
//           <ul
//             className={`hidden md:flex space-x-8 text-base font-normal ${poppins.className}`}
//           >
//             {navLinks.map((link) => (
//               <motion.li
//                 key={link.href}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <a
//                   href={link.href}
//                   className={`capitalize transition-colors duration-300 ${
//                     pathname === link.href ? "text-[#8CC63F]" : "text-white"
//                   } hover:text-[#8CC63F]`}
//                 >
//                   {link.name}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>

//           {/* 📱 Mobile Toggle */}
//           <div className="md:hidden relative z-50">
//             <button
//               aria-label="Toggle menu"
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-white hover:text-[#8CC63F] transition-colors"
//             >
//               {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* 📱 Mobile Slide-in Menu */}
//         <motion.div
//           ref={menuRef}
//           initial={{ x: "-100%" }}
//           animate={{ x: menuOpen ? 0 : "-100%" }}
//           transition={{ duration: 0.4 }}
//           className="fixed top-0 left-0 h-full w-64 bg-[#0f1f14] shadow-lg z-40"
//         >
//           <ul
//             className={`flex flex-col mt-20 px-6 space-y-6 font-medium ${poppins.className}`}
//           >
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   onClick={handleLinkClick}
//                   className={`block capitalize text-lg transition-colors duration-300 ${
//                     pathname === link.href ? "text-[#8CC63F]" : "text-white"
//                   } hover:text-[#8CC63F]`}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* 🔲 Overlay */}
//         {menuOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 z-30"
//             onClick={() => setMenuOpen(false)}
//           />
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;










// 'use client';
// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { usePathname } from "next/navigation";
// import { Poppins } from "next/font/google";
// import { motion } from "framer-motion";
// import GreenBackground from "@/components/GreenBackground";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const menuRef = useRef(null);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about-us" },
//     { name: "Services", href: "/services" },
//     { name: "Contact Us", href: "/contact-us" },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen]);

//   const handleLinkClick = () => setMenuOpen(false);

//   return (
//     <header className="w-full relative z-50">
//       {/* ✅ Background with reduced opacity for light effect */}
//       <div className="absolute inset-0 z-0 opacity-60">
//         <GreenBackground />
//         <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
//       </div>

//       {/* ✅ Main Navbar */}
//       <nav className="relative z-10 text-white">
//         <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
//           {/* 🔗 Logo */}
//           <a href="/" className="flex items-center gap-2">
//             <img
//               src="/images/logo.png"
//               alt="Pak Bioenergy"
//               className="h-16 w-auto"
//             />
//           </a>

//           {/* 🖥 Desktop Menu */}
//           <ul
//             className={`hidden md:flex space-x-8 text-base font-normal ${poppins.className}`}
//           >
//             {navLinks.map((link) => (
//               <motion.li
//                 key={link.href}
//                 whileHover={{ scale: 1.1 }}
//                 className="transition-all duration-300"
//               >
//                 <a
//                   href={link.href}
//                   className={`capitalize px-2 py-1 border-b-2 border-transparent hover:border-[#8CC63F] transition-all duration-300 ${
//                     pathname === link.href ? "text-[#8CC63F]" : "text-white"
//                   }`}
//                 >
//                   {link.name}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>

//           {/* 📱 Mobile Button */}
//           <div className="md:hidden relative z-50">
//             <button
//               aria-label="Toggle menu"
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-white hover:text-[#8CC63F] transition-colors"
//             >
//               {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* 📱 Slide-in Mobile Menu */}
//         <motion.div
//           ref={menuRef}
//           initial={{ x: "-100%" }}
//           animate={{ x: menuOpen ? 0 : "-100%" }}
//           transition={{ duration: 0.4 }}
//           className="fixed top-0 left-0 h-full w-64 bg-[#113c22] shadow-lg z-40"
//         >
//           <ul
//             className={`flex flex-col mt-20 px-6 space-y-6 font-medium ${poppins.className}`}
//           >
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   onClick={handleLinkClick}
//                   className={`block capitalize text-lg transition-colors duration-300 ${
//                     pathname === link.href ? "text-[#8CC63F]" : "text-white"
//                   } hover:text-[#8CC63F]`}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* 🔲 Blackish overlay behind mobile menu */}
//         {menuOpen && (
//           <div
//             className="fixed inset-0 bg-black/40 z-30"
//             onClick={() => setMenuOpen(false)}
//           />
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;













































// 'use client';
// import React, { useState, useEffect, useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { usePathname } from "next/navigation";
// import { Poppins } from "next/font/google";
// import { motion } from "framer-motion";
// import GreenBackground from "@/components/GreenBackground";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const menuRef = useRef(null);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about-us" },
//     { name: "Services", href: "/services" },
//     { name: "Contact Us", href: "/contact-us" },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen]);

//   const handleLinkClick = () => setMenuOpen(false);

//   return (
//     <header className="w-full relative z-50">
//       {/* ✅ Background */}
//       {/* <div className="absolute inset-0 z-0 opacity-60">
//         <GreenBackground />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0c1f17] via-[#144c2e] to-[#0c1f17] backdrop-blur-md" />
//       </div> */}
//       <div className="absolute inset-0 z-0 opacity-60">
//        <GreenBackground />
//          <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
//        </div>

//       {/* ✅ Navbar */}
//       <nav className="relative z-10 text-white">
//         <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
//           {/* 🔗 Logo */}
//           <a href="/" className="flex items-center gap-2">
//             <img
//               src="/images/logo.png"
//               alt="Pak Bioenergy"
//               className="h-20 w-auto" // ✅ Increased logo height
//             />
//           </a>

//           {/* 🖥 Desktop Menu */}
//           <ul
//             className={`hidden md:flex space-x-8 text-[19px] font-semibold ${poppins.className}`} // ✅ Larger & Bold
//           >
//             {navLinks.map((link) => (
//               <motion.li
//                 key={link.href}
//                 whileHover={{ scale: 1.1 }}
//                 className="transition-all duration-300"
//               >
//                 <a
//                   href={link.href}
//                   className={`capitalize px-2 py-1 border-b-2 border-transparent hover:border-[#8CC63F] transition-all duration-300 ${
//                     pathname === link.href ? "text-[#8CC63F]" : "text-white"
//                   }`}
//                 >
//                   {link.name}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>

//           {/* 📱 Mobile Button */}
//           <div className="md:hidden relative z-50">
//             <button
//               aria-label="Toggle menu"
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-white hover:text-[#8CC63F] transition-colors"
//             >
//               {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* 📱 Slide-in Mobile Menu */}
//         <motion.div
//           ref={menuRef}
//           initial={{ x: "-100%" }}
//           animate={{ x: menuOpen ? 0 : "-100%" }}
//           transition={{ duration: 0.4 }}
//           className="fixed top-0 left-0 h-full w-64 bg-[#113c22] shadow-lg z-40"
//         >
//           <ul
//             className={`flex flex-col mt-20 px-6 space-y-6 text-lg font-semibold ${poppins.className}`}
//           >
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   onClick={handleLinkClick}
//                   className={`block capitalize transition-colors duration-300 ${
//                     pathname === link.href ? "text-[#8CC63F]" : "text-white"
//                   } hover:text-[#8CC63F]`}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* 🔲 Overlay */}
//         {menuOpen && (
//           <div
//             className="fixed inset-0 bg-black/40 z-30"
//             onClick={() => setMenuOpen(false)}
//           />
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


















// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { usePathname } from "next/navigation";
// import { Poppins } from "next/font/google";
// import { motion, AnimatePresence } from "framer-motion";
// import GreenBackground from "@/components/GreenBackground";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const menuRef = useRef(null);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about-us" },
//     { name: "Services", href: "/services" },
//     { name: "Contact Us", href: "/contact-us" },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen]);

//   const handleLinkClick = () => setMenuOpen(false);

//   return (
//     <header className="w-full relative z-50">
//       {/* ✅ Background */}
//       <div className="absolute inset-0 z-0 opacity-60">
//         <GreenBackground />
//         <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
//       </div>

//       {/* ✅ Navbar */}
//       <nav className="relative z-10 text-white">
//         <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
//           {/* 🔗 Logo */}
//           <a href="/" className="flex items-center gap-2">
//             <img
//               src="/images/logo.png"
//               alt="Innovise"
//               className="h-20 w-auto"
//             />
//           </a>

//           {/* 🖥 Desktop Menu */}
//           <ul
//             className={`hidden md:flex space-x-8 text-[19px] font-semibold ${poppins.className}`}
//           >
//             {navLinks.map((link) => (
//               <motion.li
//                 key={link.href}
//                 whileHover={{ scale: 1.1 }}
//                 className="transition-all duration-300"
//               >
//                 <a
//                   href={link.href}
//                   className={`capitalize px-2 py-1 border-b-2 border-transparent hover:border-[#8CC63F] transition-all duration-300 ${
//                     pathname === link.href ? "text-[#8CC63F]" : "text-white"
//                   }`}
//                 >
//                   {link.name}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>

//           {/* 📱 Mobile Button */}
//           <div className="md:hidden relative z-50">
//             <button
//               aria-label="Toggle menu"
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-white hover:text-[#8CC63F] transition-colors"
//             >
//               {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* 📱 Top Slide Mobile Menu */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               ref={menuRef}
//               initial={{ y: "-100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "-100%" }}
//               transition={{ duration: 0.4 }}
//               className="fixed top-0 left-0 w-full h-screen bg-[#113c22] shadow-lg z-40 flex flex-col items-center px-6 pt-8"
//             >
//               {/* Logo on top */}
//               <div className="mb-6">
//                 <img
//                   src="/images/logo.png"
//                   alt="Innovise"
//                   className="h-16 w-auto mx-auto"
//                 />
//               </div>

//               {/* Links */}
//               <ul
//                 className={`flex flex-col items-center gap-6 text-xl font-semibold ${poppins.className}`}
//               >
//                 {navLinks.map((link) => (
//                   <li key={link.href}>
//                     <a
//                       href={link.href}
//                       onClick={handleLinkClick}
//                       className={`capitalize transition-colors duration-300 ${
//                         pathname === link.href ? "text-[#8CC63F]" : "text-white"
//                       } hover:text-[#8CC63F]`}
//                     >
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* 🔲 Overlay */}
//         {menuOpen && (
//           <div
//             className="fixed inset-0 bg-black/40 z-30"
//             onClick={() => setMenuOpen(false)}
//           />
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

















// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { usePathname } from "next/navigation";
// import { Poppins } from "next/font/google";
// import { motion, AnimatePresence } from "framer-motion";
// import GreenBackground from "@/components/GreenBackground";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const menuRef = useRef(null);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about-us" },
//     { name: "Services", href: "/services" },
//     { name: "Contact Us", href: "/contact-us" },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen]);

//   const handleLinkClick = () => setMenuOpen(false);

//   return (
//     <header className="w-full relative z-50">
//       {/* ✅ Background */}
//       <div className="absolute inset-0 z-0 opacity-60">
//         <GreenBackground />
//         <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
//       </div>

//       {/* ✅ Navbar */}
//       <nav className="relative z-10 text-white">
//         <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
//           {/* 🔗 Logo */}
//           <a href="/" className="flex items-center gap-2">
//             <img
//               src="/images/logo.png"
//               alt="Innovise"
//               className="h-20 w-auto"
//             />
//           </a>

//           {/* 🖥 Desktop Menu */}
//           <ul
//             className={`hidden md:flex space-x-8 text-[19px] font-semibold ${poppins.className}`}
//           >
//             {navLinks.map((link) => (
//               <motion.li
//                 key={link.href}
//                 whileHover={{ scale: 1.1 }}
//                 className="transition-all duration-300"
//               >
//                 <a
//                   href={link.href}
//                   className={`capitalize px-2 py-1 border-b-2 border-transparent hover:border-[#8CC63F] transition-all duration-300 ${
//                     pathname === link.href ? "text-[#8CC63F]" : "text-white"
//                   }`}
//                 >
//                   {link.name}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>

//           {/* 📱 Mobile Button */}
//           <div className="md:hidden relative z-50">
//             <button
//               aria-label="Toggle menu"
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-white hover:text-[#8CC63F] transition-colors"
//             >
//               {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* 📱 Top Slide Mobile Menu */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               ref={menuRef}
//               initial={{ y: "-100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "-100%" }}
//               transition={{ duration: 0.4 }}
//               className="fixed top-0 left-0 w-full h-screen bg-[#113c22] shadow-lg z-40 flex flex-col items-center px-6 pt-8"
//             >
//               {/* Logo on top */}
//               <div className="mb-6">
//                 <img
//                   src="/images/logo.png"
//                   alt="Innovise"
//                   className="h-16 w-auto mx-auto"
//                 />
//               </div>

//               {/* Links */}
//               <ul
//                 className={`flex flex-col items-center gap-6 text-xl font-semibold ${poppins.className}`}
//               >
//                 {navLinks.map((link) => (
//                   <motion.li
//                     key={link.href}
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <a
//                       href={link.href}
//                       onClick={handleLinkClick}
//                       className={`capitalize transition-colors duration-300 ${
//                         pathname === link.href
//                           ? "text-[#8CC63F]"
//                           : "text-white"
//                       } hover:text-[#8CC63F]`}
//                     >
//                       {link.name}
//                     </a>
//                   </motion.li>
//                 ))}
//               </ul>

//               {/* 🔗 Bottom Footer Links */}
//               <div className="mt-auto py-6 text-center text-sm text-white/80 border-t border-white/20 w-full">
//                 <p>© {new Date().getFullYear()} Innovise. All rights reserved.</p>
//                 <div className="flex justify-center gap-4 mt-2 text-white text-sm">
//                   <a
//                     href="/privacy-policy"
//                     className="hover:text-[#8CC63F] transition-colors"
//                   >
//                     Privacy Policy
//                   </a>
//                   <a
//                     href="/terms"
//                     className="hover:text-[#8CC63F] transition-colors"
//                   >
//                     Terms
//                   </a>
//                   <a
//                     href="/contact-us"
//                     className="hover:text-[#8CC63F] transition-colors"
//                   >
//                     Support
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* 🔲 Overlay */}
//         {menuOpen && (
//           <div
//             className="fixed inset-0 bg-black/40 z-30"
//             onClick={() => setMenuOpen(false)}
//           />
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;




"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import GreenBackground from "@/components/GreenBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="w-full relative z-50">
      {/* ✅ Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <GreenBackground />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
      </div>

      {/* ✅ Navbar */}
      <nav className="relative z-10 text-white">
        {/* <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center"> */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-4 flex justify-between items-center">

          {/* 🔗 Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Innovise"
              className="h-20 w-auto"
            />
          </a>

          {/* 🖥 Desktop Menu */}
          <ul
            className={`hidden md:flex space-x-8 text-[19px] font-semibold ${poppins.className}`}
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.href}
                whileHover={{ scale: 1.1 }}
                className="transition-all duration-300"
              >
                <a
                  href={link.href}
                  className={`capitalize px-2 py-1 border-b-2 border-transparent hover:border-[#8CC63F] transition-all duration-300 ${
                    pathname === link.href ? "text-[#8CC63F]" : "text-white"
                  }`}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* 📱 Mobile Button */}
          <div className="md:hidden relative z-50">
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-[#8CC63F] transition-colors"
            >
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4 }}
              className="absolute top-full left-0 w-full bg-[#113c22] shadow-lg z-40 flex flex-col items-center px-6 pt-8 "
            >
              {/* Logo on top */}
              {/* <div className="mb-6">
                <img
                  src="/images/logo.png"
                  alt="Innovise"
                  className="h-16 w-auto mx-auto"
                />
              </div> */}

              {/* Links */}
              <ul
                className={`flex flex-col items-center gap-6 text-xl font-semibold ${poppins.className}`}
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`capitalize transition-colors duration-300 ${
                        pathname === link.href
                          ? "text-[#8CC63F]"
                          : "text-white"
                      } hover:text-[#8CC63F]`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* 🔗 Bottom Footer Links */}
              <div className="py-6 text-center text-sm text-white/80 border-t border-white/20 w-full mt-8">
                {/* <p>© {new Date().getFullYear()} Innovise. All rights reserved.</p> */}
                {/* <div className="flex justify-center gap-4 mt-2 text-white text-sm">
                  <a
                    href="/privacy-policy"
                    className="hover:text-[#8CC63F] transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms"
                    className="hover:text-[#8CC63F] transition-colors"
                  >
                    Terms
                  </a>
                  <a
                    href="/contact-us"
                    className="hover:text-[#8CC63F] transition-colors"
                  >
                    Support
                  </a>
                </div> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
