"use client"

const WhyChooseInnovice = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white rounded-lg mx-auto  shadow-lg">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Innovice?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* USP 1 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md flex items-start space-x-4">
                        <div className="text-indigo-600 text-3xl flex-shrink-0"><i className="fas fa-award"></i></div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep ServiceNow Expertise</h3>
                            <p className="text-gray-600">Our team comprises highly certified and experienced ServiceNow professionals.</p>
                        </div>
                    </div>
                    {/* USP 2 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md flex items-start space-x-4">
                        <div className="text-indigo-600 text-3xl flex-shrink-0"><i className="fas fa-handshake"></i></div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-Centric Approach</h3>
                            <p className="text-gray-600">We prioritize understanding your unique challenges to deliver tailored solutions.</p>
                        </div>
                    </div>
                    {/* USP 3 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md flex items-start space-x-4">
                        <div className="text-indigo-600 text-3xl flex-shrink-0"><i className="fas fa-chart-line"></i></div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Methodologies</h3>
                            <p className="text-gray-600">Utilizing industry best practices for efficient and effective project delivery.</p>
                        </div>
                    </div>
                    {/* USP 4 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md flex items-start space-x-4">
                        <div className="text-indigo-600 text-3xl flex-shrink-0"><i className="fas fa-lightbulb"></i></div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation & Future-Readiness</h3>
                            <p className="text-gray-600">Staying ahead with the latest ServiceNow features and industry trends.</p>
                        </div>
                    </div>
                    {/* USP 5 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md flex items-start space-x-4">
                        <div className="text-indigo-600 text-3xl flex-shrink-0"><i className="fas fa-industry"></i></div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Specific Industry Experience</h3>
                            <p className="text-gray-600">Tailored solutions for various industries, addressing unique sector demands.</p>
                        </div>
                    </div>
                    {/* USP 6 */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md flex items-start space-x-4">
                        <div className="text-indigo-600 text-3xl flex-shrink-0"><i className="fas fa-shield-alt"></i></div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Support</h3>
                            <p className="text-gray-600">Dedicated support to ensure your ServiceNow environment runs smoothly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseInnovice;