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












// "use client";
// import React, { useEffect } from "react";
// import "particles.js";

// export default function ParticlesBackground() {
//   useEffect(() => {
//     window.particlesJS("particles-js", {
//       particles: {
//         number: { value: 80 },
//         color: { value: "#ffffff" },
//         shape: { type: "circle" },
//         opacity: { value: 0.5 },
//         size: { value: 3 },
//         line_linked: {
//           enable: true,
//           distance: 150,
//           color: "#ffffff",
//         },
//         move: {
//           enable: true,
//           speed: 6,
//         },
//       },
//       interactivity: {
//         events: {
//           onhover: {
//             enable: true,
//             mode: "repulse",
//           },
//         },
//       },
//     });
//   }, []);

//   return (
//     <div
//       id="particles-js"
//       style={{
//         position: "absolute",
//         width: "100%",
//         height: "100vh",
//         zIndex: -1,
//         top: 0,
//         left: 0,
//         // backgroundColor: "#0d0c11",
//         //  backgroundColor: "#eefaf9",
//         background: "linear-gradient(to top right, #e0f7fa, #e0f7fa, #e0f7fa)",
//       }}
//     />
//   );
// }




"use client";

import React, { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    // Only run this code on the client
    if (typeof window !== "undefined") {
      import("particles.js").then(() => {
        if (window.particlesJS) {
          window.particlesJS("particles-js", {
            particles: {
              number: { value: 80 },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: 3 },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
              },
              move: {
                enable: true,
                speed: 6,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
            retina_detect: true,
          });
        }
      });
    }
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        zIndex: -1,
        top: 0,
        left: 0,
        background: "linear-gradient(to top right, #e0f7fa, #e0f7fa, #e0f7fa)",
      }}
    />
  );
}
