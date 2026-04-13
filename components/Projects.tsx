"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "EyeSense",
    description:
      "Transforming interaction through intelligent eye tracking. Control your browser effortlessly with just a blink.",
    image: "/eyesense.jpg",
    link: "https://github.com/8ernity/EyeSense",
  },
  {
    title: "GitCommitBuddy",
    description:
      "Helps you track daily commits with smart reminders and a floating widget. Build better habits and stay productive.",
    image: "/gitcommitbuddy.jpg",
    link: "https://github.com/8ernity/GitCommitBuddy",
  },
  {
    title: "FingerVision",
    description:
      "Transforming gestures into Digital Interaction. Real-time AI-powered hand tracking using your webcam.",
    image: "/fingervision.jpg",
    link: "https://github.com/8ernity/Finger-vision",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 items-stretch">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 30px rgba(112, 66, 248, 0.5), 0 0 60px rgba(49, 196, 243, 0.2)",
            }}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex-1 flex flex-col cursor-pointer transition-colors duration-300 hover:border-purple-500/60 group no-underline"
          >
            <div className="relative w-full h-[220px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </div>
            <div className="relative p-4 flex-grow">
              <h1 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                {project.title}
              </h1>
              <p className="mt-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
