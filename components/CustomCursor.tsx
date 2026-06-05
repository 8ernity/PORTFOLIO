"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check for touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return;

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${posX}px`;
        dotRef.current.style.top = `${posY}px`;
      }

      if (ringRef.current) {
        ringRef.current.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: "forwards" }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Detect hoverable elements for scale effect
    const handlePointerOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")
      ) {
        setIsHovering(true);
      }
    };
    const handlePointerOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseout", handlePointerOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseout", handlePointerOut);
    };
  }, []);

  // Don't render on touch devices / SSR
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isHovering ? "cursor-active" : ""}`}
      />
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isHovering ? "cursor-active" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
