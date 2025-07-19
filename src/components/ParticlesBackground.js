"use client";
import React, { useEffect } from "react";
import "particles.js";

export default function ParticlesBackground() {
  useEffect(() => {
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
    });
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
        // backgroundColor: "#0d0c11",
         backgroundColor: "#eefaf9",
      }}
    />
  );
}
