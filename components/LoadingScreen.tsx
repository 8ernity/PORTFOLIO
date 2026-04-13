"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    const duration = 2500;
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "auto";
        }, 600);
      } else {
        setProgress(Math.floor(current));
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  const radius = 80;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#03000a]"
        >
          {/* Main loader container */}
          <div className="relative flex items-center justify-center w-[220px] h-[220px]">
            {/* Ambient glow behind the circle */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(59,225,255,0.05)]" />

            <svg
              className="absolute w-full h-full -rotate-90"
              viewBox="0 0 200 200"
            >
              <defs>
                <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3BE1FF" />
                  <stop offset="50%" stopColor="#1e58ff" />
                  <stop offset="100%" stopColor="#081a5a" />
                </linearGradient>
              </defs>
              
              {/* Background Path */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                stroke="#0e1222"
                strokeWidth={strokeWidth}
                fill="none"
              />
              
              {/* Progress Path */}
              <motion.circle
                cx="100"
                cy="100"
                r={radius}
                stroke="url(#blue-gradient)"
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.1, ease: "linear" }}
                style={{
                  filter: "drop-shadow(0 0 4px rgba(59,225,255,0.4))",
                }}
              />
            </svg>

            {/* Inner dark center */}
            <div className="absolute w-[148px] h-[148px] rounded-full bg-[#07070b] flex flex-col items-center justify-center pt-2 shadow-inner shadow-black/50">
              <span className="text-white text-[56px] font-bold font-sans tracking-tighter leading-none mb-1">
                {progress}
              </span>
              <span className="text-[#6277b8] text-[9px] font-bold tracking-[0.4em] uppercase">
                System
              </span>
            </div>
          </div>

          {/* Initializing Text & Dot below */}
          <div className="mt-14 flex items-center justify-center gap-3">
            <span className="text-[#7586c4] text-[10px] font-semibold tracking-[0.5em] uppercase ml-3">
              Initializing
            </span>
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#3BE1FF] shadow-[0_0_8px_rgba(59,225,255,0.8)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
