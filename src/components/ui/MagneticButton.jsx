import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Magnetic button wrapper that slightly pulls toward cursor on hover.
 */
export default function MagneticButton({
  children,
  className = "",
  style = {},
  strength = 20,
  as = "button",
  onClick,
  href,
  target,
  rel,
  download
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * (strength / 100), y: middleY * (strength / 100) });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = as === "a" ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.1 }}
      className={className}
      style={{ display: "inline-flex", textDecoration: "none", cursor: "pointer", ...style }}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      download={download}
    >
      {children}
    </Component>
  );
}
