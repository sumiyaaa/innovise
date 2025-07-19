// "use client";
// import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const ParticlesBackground = () => {
//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: false },
//         background: { color: { value: "transparent" } },
//         fpsLimit: 60,
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "repulse" },
//             resize: true,
//           },
//           modes: { repulse: { distance: 100, duration: 0.4 } },
//         },
//         particles: {
//           color: { value: "#00bcd4" },
//           links: {
//             color: "#00bcd4",
//             distance: 150,
//             enable: true,
//             opacity: 0.4,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 1,
//             outModes: { default: "bounce" },
//           },
//           number: {
//             value: 40,
//             density: { enable: true, area: 800 },
//           },
//           opacity: { value: 0.5 },
//           shape: { type: "circle" },
//           size: { value: { min: 1, max: 5 } },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// };

// export default ParticlesBackground;





"use client";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundColor: "#ffffff", // ✅ White background
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
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
            color: { value: "#555555" }, // ✅ Dark gray particles
            links: {
              color: "#555555", // ✅ Dark gray lines
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: "bounce" },
            },
            number: {
              value: 50,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
