import Image from "next/image";
import GradientBackground from "@/components/GradientBackground/page";
//import ParticlesBackground from "@/components/ParticlesBackground";
import HeroSection from "@/components/HeroSection/HeroSection";
// import HeroSection from "@/components/HeroSection/HeroSection";
import HomeOverview from "@/components/HomeOverview/HomeOverview"
import Footer from "@/components/AboutPage/Footer";
import Testimonials from "@/components/Testimonials/Testimonials";
import GreenBackground from "@/components/GreenBackground";
import OurServices from "@/components/OurServices/page"
import WhyChooseUs from "@/components/WhyChooseUs/page";
export const generateMetadata = () => ({
  title:
    "Innovise",
  description: "Transforming Enterprise Workflows with Innovative ServiceNow Solutions Across All Domains",
});
export default function Home() {
  return (
    <>
   <div className=" relative h-screen">
      {/* Particles Background 

      <ParticlesBackground /> */}
       <GradientBackground>
       <HeroSection/>
        </GradientBackground>
        <OurServices/>
        <WhyChooseUs/>
      {/* <HomeOverview/>
      <Testimonials/> */}
      <Footer/>
      

   

   
     
    </div>

 
   </>
  );
}
