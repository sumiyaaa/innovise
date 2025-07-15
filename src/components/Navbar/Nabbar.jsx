"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaPhoneAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  const navLinks = [
    {name : "Home", href: "/"},
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact Us", href: "/contact-us" },
    
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full">
      {/* <div className="bg-[#0c1525] text-white text-sm flex justify-between items-center px-4 md:px-8 py-2">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt />
          <span>+92 0000000000</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div> */}

      <nav className="bg-[#0c1525] shadow-md text-white relative z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/images/logo.png"
              alt="Pak Bioenergy"
              className="h-20 w-auto"
            />
            <div className="leading-tight">
              {/* <h1 className="text-xl font-bold text-black">Innovice</h1> */}
              <p className="text-sm text-gray-700">
              
              </p>
            </div>
          </a>

          <ul
            className={`hidden md:flex space-x-8 text-base font-normal ${poppins.className}`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`capitalize transition-colors duration-200 ${
                    pathname === link.href ? "text-green-600" : "text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden relative z-50">
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-gray-700 focus:outline-none"
            >
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        <div
          ref={menuRef}
          className={`
            fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <ul
            className={`flex flex-col mt-20 px-6 space-y-6 font-medium ${poppins.className}`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block capitalize text-lg ${
                    pathname === link.href ? "text-green-600" : "text-black"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {menuOpen && (
          <div
            className="fixed inset-0 z-30"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;









