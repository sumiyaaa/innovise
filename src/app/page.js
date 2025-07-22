import Image from "next/image";

import ParticlesBackground from "@/components/ParticlesBackground";
import HeroSection from "@/components/HeroSection/HeroSection";
// import HeroSection from "@/components/HeroSection/HeroSection";
import HomeOverview from "@/components/HomeOverview/HomeOverview"
import Footer from "@/components/AboutPage/Footer";
import Testimonials from "@/components/Testimonials/Testimonials";
import GreenBackground from "@/components/GreenBackground";
export const generateMetadata = () => ({
  title:
    "Innovise",
  description: "Transforming Enterprise Workflows with Innovative ServiceNow Solutions Across All Domains",
});
export default function Home() {
  return (
    <>
   <div className=" relative h-screen">
      {/* Particles Background */}
      <ParticlesBackground />
      <HeroSection/>
      <HomeOverview/>
      <Testimonials/>
      <Footer/>
      

   

   
     
    </div>

 
   </>
  );
}
