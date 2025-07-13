"use client";


const ServicesOverview = () => {
    return (
        <section id="services" className="py-16 md:py-24 bg-gray-50 rounded-lg mx-auto  shadow-inner">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Core ServiceNow Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Service Card 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-indigo-600 text-5xl mb-6"><i className="fas fa-cogs"></i></div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">ServiceNow Implementation</h3>
                        <p className="text-gray-600 mb-6">Seamless deployment and configuration of ServiceNow to meet your business needs.</p>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-center">
                            Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                        </a>
                    </div>
                    {/* Service Card 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-indigo-600 text-5xl mb-6"><i className="fas fa-comments"></i></div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">ServiceNow Consulting</h3>
                        <p className="text-gray-600 mb-6">Expert guidance to optimize your ServiceNow strategy and maximize ROI.</p>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-center">
                            Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                        </a>
                    </div>
                    {/* Service Card 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-indigo-600 text-5xl mb-6"><i className="fas fa-code"></i></div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Customization & Development</h3>
                        <p className="text-gray-600 mb-6">Tailored solutions and custom applications to extend ServiceNow capabilities.</p>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-center">
                            Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                        </a>
                    </div>
                    {/* Service Card 4 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="text-indigo-600 text-5xl mb-6"><i className="fas fa-headset"></i></div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Managed Services</h3>
                        <p className="text-gray-600 mb-6">Ongoing support, maintenance, and optimization for your ServiceNow platform.</p>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-center">
                            Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ServicesOverview;