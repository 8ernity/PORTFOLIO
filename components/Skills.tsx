"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../utils/motion";

// Pyramid rows — widest at top, narrowing toward bottom
const skillRows = [
  // Row 1 — 10 icons
  [
    { image: "/html.png", width: 80, height: 80, alt: "HTML5" },
    { image: "/css.png", width: 80, height: 80, alt: "CSS3" },
    { image: "/js.png", width: 65, height: 65, alt: "JavaScript" },
    { image: "/react.png", width: 80, height: 80, alt: "React" },
    { image: "/c.svg", width: 80, height: 80, alt: "C" },
    { image: "/java.svg", width: 80, height: 80, alt: "Java" },
    { image: "/kotlin.svg", width: 80, height: 80, alt: "Kotlin" },
    { image: "/python.svg", width: 80, height: 80, alt: "Python" },
    { image: "/mysql.png", width: 80, height: 80, alt: "MySQL" },
    { image: "/node-js.png", width: 80, height: 80, alt: "Node.js" },
  ],
  // Row 2 — 7 icons
  [
    { image: "/tailwind.png", width: 80, height: 80, alt: "Tailwind CSS" },
    { image: "/mongodb.png", width: 40, height: 40, alt: "MongoDB" },
    { image: "/ts.png", width: 80, height: 80, alt: "TypeScript" },
    { image: "/numpy.svg", width: 80, height: 80, alt: "NumPy" },
    { image: "/pandas.svg", width: 80, height: 80, alt: "Pandas" },
    { image: "/matlab.svg", width: 80, height: 80, alt: "MATLAB" },
    { image: "/git.svg", width: 80, height: 80, alt: "Git" },
  ],
  // Row 3 — 4 icons
  [
    { image: "/postman.svg", width: 80, height: 80, alt: "Postman" },
    { image: "/docker.webp", width: 80, height: 80, alt: "Docker" },
    { image: "/photoshop.svg", width: 80, height: 80, alt: "Photoshop" },
    { image: "/figma.png", width: 80, height: 80, alt: "Figma" },
  ],
  // Row 4 — 1 icon
  [
    { image: "/androidstudio.svg", width: 80, height: 80, alt: "Android Studio" },
  ],
];

const Skills = () => {
  let globalIndex = 0;

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] pl-[7px] pr-[16px] border border-[#7042f88b] opacity-[0.9] w-fit self-start md:w-fit"
          style={{ width: "fit-content", alignSelf: "center" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-[#b49bff] mr-[10px] h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="Welcome-text text-[13px]">My Tech Arsenal</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
        >
          Making apps with modern technologies
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
        >
          Never miss a task, deadline or idea
        </motion.div>
      </div>

      {/* Pyramid / diamond layout */}
      <div className="flex flex-col items-center mt-4 gap-8">
        {skillRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-row justify-center items-center gap-10"
          >
            {row.map((skill) => {
              const idx = globalIndex++;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: idx * 0.1, duration: 0.5 },
                    },
                  }}
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="cursor-pointer"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: -10,
                    transition: { type: "spring", stiffness: 300, damping: 10 }
                  }}
                >
                  <Image
                    src={skill.image}
                    alt={skill.alt}
                    width={skill.width}
                    height={skill.height}
                  />
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute inset-0 z-[-20] pointer-events-none">
        <div className="w-full h-full opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Skills;
