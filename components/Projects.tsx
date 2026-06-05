"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import HolographicCard from "@/components/ui/holographic-card";

const projects = [
  {
    title: "Unspoken",
    description:
      "An empowering tool for the deaf and mute community that translates sign language gestures into written letters and words in real-time.",
    image: "/Unspoken.jpg",
    link: "https://github.com/8ernity/UnSpoken-Landpage.git",
  },
  {
    title: "Neural Sculptor",
    description:
      "A cutting-edge platform to mold and manipulate neural networks. Shape the future of AI with intuitive architectural design.",
    image: "/NeuralSculpt.jpg",
    link: "https://github.com/8ernity",
  },
  {
    title: "Vortex",
    description:
      "Navigate the shadows of communication. Silently intercept messages unseen, unearth erased secrets from the void, and command a phantom responder in your stead.",
    image: "/Vortex.jpg",
    link: "https://github.com/8ernity",
  },
  {
    title: "Nebula Dashboard",
    description:
      "A stunning, interactive dashboard experience. Visualize data dynamically across the cosmic expanse.",
    image: "/Nebuladash.jpg",
    link: "https://github.com/8ernity",
  },
  {
    title: "W.R.A.I.T.H.",
    description:
      "A phantom in the network. An enigmatic tool that grants administrators absolute, unseen control over client screens from the shadows.",
    image: "/Wraith.jpg",
    link: "https://github.com/8ernity",
  },
  {
    title: "VideoFetch",
    description:
      "A fast and robust video downloading tool. Easily fetch videos from various platforms with high efficiency.",
    image: "/Videofetch.jpg",
    link: "https://github.com/8ernity",
  },
  {
    title: "FaceAttendance",
    description:
      "A facial recognition based attendance system. Streamline your attendance tracking process securely and efficiently.",
    image: "/FaceAttend.jpg",
    link: "https://github.com/8ernity",
  },
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

const cardVariants: Variants = {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full max-w-7xl mx-auto">
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
            whileHover={{ scale: 1.04 }}
            className="flex-1 flex flex-col cursor-pointer transition-transform duration-300 group no-underline"
          >
            <HolographicCard className="relative overflow-hidden rounded-lg shadow-[0_0_20px_rgba(49,196,243,0.1)] border border-[#2A0E61] flex-1 flex flex-col group-hover:border-purple-500/60 bg-[#0a0118]/60 transition-colors duration-300 w-full h-full">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              </div>
              <div className="relative p-4 flex-grow flex flex-col">
                <h1 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {project.title}
                </h1>
                <p className="mt-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors duration-300">
                  <span className="font-semibold text-sm">View Codebase</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </div>
              </div>
            </HolographicCard>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
