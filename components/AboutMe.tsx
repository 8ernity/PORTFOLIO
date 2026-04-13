"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

/* ── Interactive 3D tilt card ── */
const InteractiveFaceCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = ((centerY - y) / centerY) * 15;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div style={{ perspective: "800px" }} data-cursor-hover>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isHovering ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
          width: "440px",
          borderRadius: "20px",
        }}
      >
        {/* Glowing gradient border */}
        <div
          style={{
            padding: "3px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgba(112,66,248,0.5), rgba(0,212,255,0.3), rgba(112,66,248,0.15))",
            boxShadow:
              "0 0 30px rgba(112,66,248,0.2), 0 0 60px rgba(0,212,255,0.1)",
          }}
        >
          <div
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              background: "#0a0520",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Arpan Biswas"
              width={500}
              height={600}
              priority
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        </div>

        {/* Floating heart badge */}
        <motion.div
          animate={{ y: isHovering ? -5 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          style={{
            position: "absolute",
            bottom: "-24px",
            left: "-24px",
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            background:
              "linear-gradient(135deg, rgba(10,5,30,0.9), rgba(20,10,50,0.8))",
            border: "1px solid rgba(0,212,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            transform: "translateZ(40px)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "32px", height: "32px", color: "#22d3ee" }}
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 4 0 4 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-4 0-4" />
          </svg>
        </motion.div>

        {/* Shine overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "20px",
            pointerEvents: "none",
            opacity: isHovering ? 0.15 : 0,
            background: `radial-gradient(circle at ${50 + rotation.y * 2}% ${50 - rotation.x * 2
              }%, rgba(255,255,255,0.4), transparent 60%)`,
            transition: "opacity 0.3s ease",
          }}
        />
      </motion.div>
    </div>
  );
};

/* ── Goal list item ── */
const GoalItem = ({ text, delay }: { text: string; delay: number }) => (
  <motion.li
    style={{
      display: "flex",
      alignItems: "center",
      gap: "14px",
      fontSize: "17px",
      color: "#b0b0c8",
    }}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
  >
    <span style={{ color: "#7042f8", fontSize: "20px", flexShrink: 0 }}>▹</span>
    <span>{text}</span>
  </motion.li>
);

/* ── Hobby tag ── */
const HobbyTag = ({
  text,
  emoji,
  delay,
}: {
  text: string;
  emoji: string;
  delay: number;
}) => (
  <motion.span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 22px",
      border: "1px solid rgba(112,66,248,0.3)",
      borderRadius: "999px",
      fontSize: "16px",
      color: "#d0ccf0",
      background: "rgba(10,5,30,0.4)",
      backdropFilter: "blur(6px)",
      transition: "border-color 0.25s ease, background 0.25s ease",
    }}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.3 }}
    whileHover={{
      scale: 1.08,
      borderColor: "rgba(112,66,248,0.6)",
      background: "rgba(112,66,248,0.1)",
    }}
  >
    {text} {emoji}
  </motion.span>
);

/* ── Main About Me Section ── */
const AboutMe = () => {
  return (
    <section
      id="about-me"
      style={{
        position: "relative",
        zIndex: 20,
        padding: "120px 40px 140px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "80px",
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        {/* Left column – text content */}
        <motion.div
          style={{ flex: 1, minWidth: "320px", maxWidth: "800px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section badge */}
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] pl-[7px] pr-[16px] border border-[#7042f88b] opacity-[0.9] w-fit self-start md:w-fit"
            style={{ marginBottom: "24px", width: "fit-content", alignSelf: "flex-start" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#b49bff] mr-[10px] h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="Welcome-text text-[15px]">About Me</h1>
          </motion.div>

          {/* Intro card */}
          <motion.div
            variants={slideInFromLeft(0.3)}
            style={{
              background:
                "linear-gradient(135deg, rgba(10,5,30,0.7), rgba(20,10,50,0.5))",
              border: "1px solid rgba(112,66,248,0.2)",
              borderRadius: "16px",
              padding: "32px",
              backdropFilter: "blur(12px)",
              marginBottom: "32px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#b0b0c8",
              }}
            >
              Hello! I&apos;m{" "}
              <strong
                style={{
                  background: "linear-gradient(90deg, #7042f8, #00d4ff)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontWeight: 700,
                }}
              >
                Arpan Biswas
              </strong>
              , a passionate{" "}
              <strong style={{ color: "#fff" }}>
                Computer Science &amp; Engineering (AI-ML)
              </strong>{" "}
              student exploring the intersection of Artificial Intelligence,
              Machine Learning, and Frontend Development.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#b0b0c8",
                marginTop: "24px",
              }}
            >
              I enjoy turning ideas into real, usable products—whether it’s crafting intelligent AI-driven features, building responsive web interfaces, or optimizing performance for better user experience. I’m constantly learning and experimenting with new technologies, aiming to create solutions that are not only efficient but also meaningful and user-centric.
            </p>
          </motion.div>

          {/* Goals section */}
          <motion.div
            variants={slideInFromLeft(0.6)}
            style={{ marginBottom: "32px" }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "0.02em",
              }}
            >
              My Goals
            </h3>
            <div
              style={{
                width: "60px",
                height: "2px",
                background: "linear-gradient(90deg, #7042f8, transparent)",
                margin: "10px 0 18px",
                borderRadius: "2px",
              }}
            />
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <GoalItem
                text="Publish impactful AI research papers"
                delay={0.2}
              />
              <GoalItem
                text="Launch innovative AI-powered products"
                delay={0.3}
              />
              <GoalItem
                text="Contribute to open-source AI communities"
                delay={0.4}
              />
            </ul>
          </motion.div>

          {/* Hobbies section */}
          <motion.div variants={slideInFromLeft(0.9)}>
            <div
              style={{
                width: "100%",
                height: "1px",
                background:
                  "linear-gradient(90deg, rgba(112,66,248,0.3), transparent)",
                marginBottom: "20px",
              }}
            />
            <p
              style={{
                fontFamily: '"Courier New", monospace',
                fontSize: "18px",
                color: "#7042f8",
                marginBottom: "16px",
              }}
            >
              When I&apos;m not coding:
            </p>
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
            >
              <HobbyTag text="Online Gaming" emoji="🎮" delay={0.3} />
              <HobbyTag text="Gym" emoji="💪" delay={0.4} />
              <HobbyTag text="Learning new things" emoji="📚" delay={0.5} />
            </div>
          </motion.div>
        </motion.div>

        {/* Right column – interactive face card */}
        <motion.div
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "40px",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.5)}
        >
          <InteractiveFaceCard />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
