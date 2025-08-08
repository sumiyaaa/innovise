"use client";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ahsan Raza",
    image: "/images/client1.jpeg",
    rating: 5,
    review:
      "Innovice helped me pass my CSA exam in just 4 weeks. The hands-on labs and mentorship were top-notch!",
  },
  {
    name: "Fatima",
    image: "/images/client2.jpg",
    rating: 4,
    review:
      "Thanks to Innovice’s expert trainers, I deployed ServiceNow ITSM in our company successfully.",
  },
  {
    name: "Josh Coffe",
    image: "/images/client3.jpg",
    rating: 5,
    review:
      "We reduced ticket handling time by 40% after Innovice restructured our workflows. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-20 text-white">
      <div className="w-[85%] mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#8CC63F] mb-4">
          Success Stories
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Real impact from our clients — hear it from them!
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[#101010] border border-[#8CC63F]/20 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-[0_0_15px_#8CC63F] transition duration-300 hover:scale-105 w-[60%] mx-auto">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full border-4 border-[#8CC63F] shadow-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#8CC63F] text-center mb-2">
                  {item.name}
                </h3>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400 text-center">
                  {item.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
