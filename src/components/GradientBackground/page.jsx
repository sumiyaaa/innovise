
'use client';
import React from 'react';

const GradientBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Grid Lines - subtle green tint */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(140, 198, 63, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(140, 198, 63, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Green Glow - Bottom Left */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 0% 100%, #8CC63F33 0%, transparent 60%)',
        }}
      ></div>

      {/* Green Glow - Top Right */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 100% 0%, #8CC63F33 0%, transparent 60%)',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;
