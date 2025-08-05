"use client"

import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 rounded-t-lg">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Innovice</h3>
                    <p className="text-sm">Your trusted partner for innovative ServiceNow solutions, driving efficiency and growth.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                        <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                        <li><a href="#clients" className="text-gray-400 hover:text-white transition duration-300">Clients</a></li>
                       
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                    <p className="text-sm">
                        123 ServiceNow Drive,<br />
                        Innovation City, IN 12345<br />
                        Email: <a href="mailto:info@innovice.com" className="text-gray-400 hover:text-white">info@innovice.com</a><br />
                        Phone: <a href="tel:+1234567890" className="text-gray-400 hover:text-white">+1 (234) 567-890</a>
                    </p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/company/innoviseltd/posts/?feedView=all" className="text-gray-400 hover:text-white text-2xl transition duration-300"><i className="fab fa-linkedin"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white text-2xl transition duration-300"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white text-2xl transition duration-300"><i className="fab fa-facebook"></i></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
                &copy; {currentYear} Innovice. All rights reserved.
                <div className="mt-2">
                    <a href="#" className="text-gray-500 hover:text-white mx-2">Privacy Policy</a> |
                    <a href="#" className="text-gray-500 hover:text-white mx-2">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
