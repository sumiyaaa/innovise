"use client";
import React from "react";

const ClientTestimonials = () => {
    return (
        <section id="clients" className="py-16 md:py-24 bg-gray-100 rounded-lg mx-auto  shadow-inner">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <p className="text-gray-700 text-lg italic mb-6">
                            "Innovice transformed our IT operations with their expert ServiceNow implementation. Their team was incredibly knowledgeable and responsive."
                        </p>
                        <p className="font-semibold text-indigo-700">- Jane Doe, IT Director at TechCorp</p>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <p className="text-gray-700 text-lg italic mb-6">
                            "The consulting services from Innovice helped us streamline our workflows and achieve significant cost savings. Highly recommend!"
                        </p>
                        <p className="font-semibold text-indigo-700">- John Smith, Operations Manager at Global Solutions</p>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Trusted by Leading Companies</h3>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {/* Client Logos (Placeholders) */}
                    <img src="https://placehold.co/150x60/E0E7FF/4F46E5?text=Client+A" alt="Client A Logo" className="h-16 opacity-75 hover:opacity-100 transition duration-300 rounded-md" />
                    <img src="https://placehold.co/150x60/E0E7FF/4F46E5?text=Client+B" alt="Client B Logo" className="h-16 opacity-75 hover:opacity-100 transition duration-300 rounded-md" />
                    <img src="https://placehold.co/150x60/E0E7FF/4F46E5?text=Client+C" alt="Client C Logo" className="h-16 opacity-75 hover:opacity-100 transition duration-300 rounded-md" />
                    <img src="https://placehold.co/150x60/E0E7FF/4F46E5?text=Client+D" alt="Client D Logo" className="h-16 opacity-75 hover:opacity-100 transition duration-300 rounded-md" />
                </div>
            </div>
        </section>
    );
};


export default ClientTestimonials;