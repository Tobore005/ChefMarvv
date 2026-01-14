"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  // Three different springs for a "layered trail" effect
  const dotX = useSpring(0, { damping: 20, stiffness: 800 });
  const dotY = useSpring(0, { damping: 20, stiffness: 800 });

  const ringX = useSpring(0, { damping: 25, stiffness: 200 });
  const ringY = useSpring(0, { damping: 25, stiffness: 200 });

  const ghostX = useSpring(0, { damping: 30, stiffness: 100 });
  const ghostY = useSpring(0, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      dotX.set(e.clientX); dotY.set(e.clientY);
      ringX.set(e.clientX); ringY.set(e.clientY);
      ghostX.set(e.clientX); ghostY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [dotX, dotY, ringX, ringY, ghostX, ghostY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] hidden md:block">
      {/* Outer Ghost Trail */}
      <motion.div style={{ x: ghostX, y: ghostY, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-12 h-12 border border-[#C6A76B]/10 rounded-full" />
      
      {/* Middle Ring Trail */}
      <motion.div style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-8 h-8 border border-[#C6A76B]/40 rounded-full" />

      {/* Center Leading Dot */}
      <motion.div style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-1.5 h-1.5 bg-[#C6A76B] rounded-full" />
    </div>
  );
}