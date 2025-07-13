import Image from "next/image";

import ParticlesBackground from "@/components/ParticlesBackground";
import HeroSection from "@/components/HeroSection/HeroSection";
// import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
   <div className=" relative h-screen">
      {/* Particles Background */}
      <ParticlesBackground />
      <HeroSection/>

   

   
     
    </div>

 
   </>
  );
}
