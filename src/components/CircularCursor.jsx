// CircularCursor.js

import React, { useEffect, useState } from 'react';

const CircularCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false); // Track if hovering over links/buttons

  const trackMouse = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleUnhover = () => {
    setHovered(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', trackMouse);

    return () => {
      document.removeEventListener('mousemove', trackMouse);
    };
  }, []);

  return (
    <div className="fixed z-50 pointer-events-none">
      {/* Outer Circle */}
      <div
        className={`w-5 h-5 border-2 border-white rounded-full absolute -translate-x-1/2 -translate-y-1/2 ${
          hovered ? 'transform scale-150' : '' // Apply scale if hovered
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.25s ease', // Smooth transition added
        }}
      ></div>
      {/* Inner Circle (acting as the actual cursor) */}
      <div
        className="w-2 h-2 bg-white rounded-full absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      {/* Add event listeners for hover */}
      <div onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
        {/* ... your content with links or buttons */}
      </div>
    </div>
  );
};

export default CircularCursor;
