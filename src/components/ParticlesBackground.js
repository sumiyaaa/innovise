// // components/ParticlesBackground.js
// "use client";
// import React from "react";
// import { loadFull } from "@tsparticles/engine";
// import { Engine } from "@tsparticles/engine";
// import { tsParticles } from "@tsparticles/engine";
// import { useCallback } from "react";
// import { loadSlim } from "@tsparticles/slim";

// // ✅ Use the dynamically imported Particles component
// import dynamic from "next/dynamic";
// const Particles = dynamic(() => import("@tsparticles/react").then(mod => mod.Particles), {
//   ssr: false,
// });

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine); // or loadFull(engine)
//   }, []);

//   const options = {
//     fullScreen: { enable: true },
//     particles: {
//       number: {
//         value: 50,
//       },
//       shape: {
//         type: "circle",
//       },
//       move: {
//         enable: true,
//         speed: 2,
//       },
//     },
//   };

//   return (
//     <Particles id="tsparticles" init={particlesInit} options={options} />
//   );
// };

// export default ParticlesBackground;

"use client";
import React, { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadFull } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load full features of tsParticles
    await loadFull(engine);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "linear-gradient(to top right, #e0f7fa, #e0f7fa, #e0f7fa)",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            number: {
              value: 80,
              density: { enable: true, area: 800 },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              outModes: { default: "bounce" },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
