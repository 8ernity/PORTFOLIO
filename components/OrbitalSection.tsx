"use client";

import React, { useEffect, useState } from "react";
import { OrbitalHeroSection } from "@/components/ui/orbital-hero-section";
import { motion } from "framer-motion";

function useNarrow(query = "(max-width: 767px)") {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const sync = () => setNarrow(m.matches);
    sync();
    m.addEventListener("change", sync);
    return () => m.removeEventListener("change", sync);
  }, [query]);
  return narrow;
}

const OrbitalSection = () => {
  const narrow = useNarrow();

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] w-full overflow-hidden my-10 rounded-2xl border border-purple-900/30">
      <OrbitalHeroSection
        focus={narrow ? [0.5, 0.75] : [0.65, 0.5]}
        scrim={narrow ? "top" : "left"}
        scrimStrength={narrow ? 0.94 : 0.88}
        viewRadius={narrow ? 2.2 : 3.2}
        lead={narrow ? 0.05 : 0.12}
        glow={narrow ? 0.6 : 1}
      >
        <div className="flex h-full min-h-[600px] md:min-h-[700px] items-center px-6 sm:px-12 lg:px-20 py-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl z-20"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/50 backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-cyan-300 tracking-wider uppercase">
                System Dynamics & Performance
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Performance &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-500">
                Security
              </span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-gray-300/80 leading-relaxed max-w-lg">
              High-concurrency systems, asynchronous rate-limiting, and real-time telemetry working together in perfect celestial motion.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(112,66,248,0.4)] hover:shadow-[0_0_25px_rgba(49,196,243,0.6)] hover:scale-105 transition-all duration-300 no-underline"
              >
                Explore Projects
              </a>
              <a
                href="#coding-stats"
                className="px-6 py-3 rounded-full text-sm font-medium border border-purple-500/40 text-purple-200 bg-purple-950/30 hover:bg-purple-900/40 hover:border-purple-400 transition-all duration-300 no-underline"
              >
                View Activity Stats
              </a>
            </div>
          </motion.div>
        </div>
      </OrbitalHeroSection>
    </section>
  );
};

export default OrbitalSection;
