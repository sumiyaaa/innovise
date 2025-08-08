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
//         {/* <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center"> */}
//         <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-4 flex justify-between items-center">

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

//         {/* 📱 Mobile Menu Dropdown */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               ref={menuRef}
//               initial={{ y: "-100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "-100%" }}
//               transition={{ duration: 0.4 }}
//               className="absolute top-full left-0 w-full bg-[#113c22] shadow-lg z-40 flex flex-col items-center px-6 pt-8 "
//             >
//               {/* Logo on top */}
//               {/* <div className="mb-6">
//                 <img
//                   src="/images/logo.png"
//                   alt="Innovise"
//                   className="h-16 w-auto mx-auto"
//                 />
//               </div> */}

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
//               <div className="py-6 text-center text-sm text-white/80 border-t border-white/20 w-full mt-8">
//                 {/* <p>© {new Date().getFullYear()} Innovise. All rights reserved.</p> */}
//                 {/* <div className="flex justify-center gap-4 mt-2 text-white text-sm">
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
//                 </div> */}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
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
//     <header className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
//       <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center text-white">
//         {/* 🔗 Logo */}
//         <a href="/" className="flex items-center gap-2">
//           <img
//             src="/images/logo.png"
//             alt="Innovice"
//             className="h-16 w-auto"
//           />
//         </a>

//         {/* 🖥 Desktop Menu */}
//         <ul
//           className={`hidden md:flex space-x-8 text-[18px] font-semibold ${poppins.className}`}
//         >
//           {navLinks.map((link) => (
//             <motion.li
//               key={link.href}
//               whileHover={{ scale: 1.05 }}
//               className="transition-all duration-300"
//             >
//               <a
//                 href={link.href}
//                 className={`capitalize px-2 py-1 border-b-2 border-transparent hover:border-[#8CC63F] transition-all duration-300 ${
//                   pathname === link.href ? "text-[#8CC63F]" : "text-white"
//                 }`}
//               >
//                 {link.name}
//               </a>
//             </motion.li>
//           ))}
//         </ul>

//         {/* 📱 Mobile Button */}
//         <div className="md:hidden relative z-50">
//           <button
//             aria-label="Toggle menu"
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-white hover:text-[#8CC63F] transition-colors"
//           >
//             {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </nav>

//       {/* 📱 Mobile Menu Dropdown */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             ref={menuRef}
//             initial={{ y: "-100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "-100%" }}
//             transition={{ duration: 0.3 }}
//             className="absolute top-full left-0 w-full bg-black text-white shadow-lg z-40 flex flex-col items-center px-6 pt-6 pb-10 border-t border-[#8CC63F]/30"
//           >
//             <ul
//               className={`flex flex-col items-center gap-6 text-xl font-semibold ${poppins.className}`}
//             >
//               {navLinks.map((link) => (
//                 <motion.li
//                   key={link.href}
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <a
//                     href={link.href}
//                     onClick={handleLinkClick}
//                     className={`capitalize transition-colors duration-300 ${
//                       pathname === link.href
//                         ? "text-[#8CC63F]"
//                         : "text-white"
//                     } hover:text-[#8CC63F]`}
//                   >
//                     {link.name}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;

"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <nav className="w-[95%] mx-auto px-4 md:px-8 py-3 flex justify-between items-center text-white">
        {/* 🔗 Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Innovise" className="h-16 w-auto" />
        </a>

        {/* 🖥 Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[18px] font-semibold">
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              whileHover={{ scale: 1.05 }}
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
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black text-white shadow-lg z-40 flex flex-col items-center px-6 pt-6 pb-10 border-t border-[#8CC63F]/30"
          >
            <ul className="flex flex-col items-center gap-6 text-xl font-semibold">
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
                      pathname === link.href ? "text-[#8CC63F]" : "text-white"
                    } hover:text-[#8CC63F]`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
