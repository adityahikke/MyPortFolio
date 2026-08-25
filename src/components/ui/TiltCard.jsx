import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * 3D Tilt Card component with smooth physics and radial glare reflection.
 */
export default function TiltCard({
  children,
  className = "",
  style = {},
  tiltMaxAngleX = 8,
  tiltMaxAngleY = 8,
  glare = true,
  onClick
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width;
    const yPct = mouseY / height;

    const rX = (0.5 - yPct) * tiltMaxAngleX * 2;
    const rY = (xPct - 0.5) * tiltMaxAngleY * 2;

    setRotateX(rX);
    setRotateY(rY);

    if (glare) {
      setGlarePosition({
        x: xPct * 100,
        y: yPct * 100,
        opacity: 0.15
      });
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    if (glare) {
      setGlarePosition(prev => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.5
      }}
      style={{
        transformStyle: "preserve-3d",
        position: "relative",
        ...style
      }}
      className={`glass-card ${className}`}
    >
      {/* Dynamic Specular Glare */}
      {glare && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            borderRadius: "inherit",
            background: `radial-gradient(circle 300px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, ${glarePosition.opacity}), transparent 80%)`,
            transition: "opacity 0.25s ease",
            zIndex: 10
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
