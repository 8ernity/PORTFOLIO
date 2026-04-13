"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Audio playback error:", error);
            alert("Please refresh the page or wait for audio to load.");
          });
      }
    }
  };

  return (
    <div
      onClick={togglePlay}
      className="cursor-pointer flex items-center gap-[4px] h-[20px] hover:opacity-80 transition-opacity"
      title="Play/Pause Music"
    >
      <audio ref={audioRef} src="/audio.mp3" preload="auto" loop />
      {[1, 2, 3, 4].map((bar) => (
        <motion.div
          key={bar}
          className="w-[4px] bg-[#3BE1FF] rounded-full"
          animate={{
            height: isPlaying ? ["40%", "100%", "60%", "90%", "40%"] : "4px"
          }}
          transition={{
            duration: isPlaying ? 0.8 : 0.3,
            repeat: isPlaying ? Infinity : 0,
            delay: isPlaying ? bar * 0.15 : 0,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const navLinks = [
  { label: "About me", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const socialLinks = [
  { href: "https://www.instagram.com/the_8ernity", icon: "/instagram.svg", alt: "Instagram" },
  { href: "https://in.linkedin.com/in/arpan-biswas-9a327b322", icon: "/linkedin.svg", alt: "LinkedIn" },
  { href: "https://m.facebook.com/profile.php?id=61553645707053", icon: "/facebook.svg", alt: "Facebook" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div
        className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          backgroundColor: scrolled ? "rgba(3, 0, 20, 0.85)" : "rgba(3, 0, 20, 0.09)",
          transition: "background-color 0.3s ease",
        }}
      >
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          {/* Logo and Audio */}
          <div className="flex flex-row items-center">
            <a href="#hero" className="h-auto w-auto flex flex-row items-center">
              <Image
                src="/AB_Logo.png"
                alt="logo"
                width={70}
                height={70}
                className="cursor-pointer hover:animate-slowspin"
              />
            </a>

            <div className="ml-4 mr-2">
              <AudioPlayer />
            </div>

            <a href="#hero" className="hidden md:flex flex-row items-center">
              <span className="font-bold text-xl text-gray-300">
                Arpan Biswas
              </span>
            </a>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
            <div className="flex items-center w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              {navLinks.map((link) => (
                <div key={link.href} className="flex-1 flex justify-center">
                  <a
                    href={link.href}
                    className="cursor-pointer relative group"
                  >
                    <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                      {link.label}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full rounded-full" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop social icons */}
          <div className="hidden md:flex flex-row gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <Image src={social.icon} alt={social.alt} width={24} height={24} />
              </a>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] z-[60]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-[2px] bg-gray-300 rounded-full block"
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="w-6 h-[2px] bg-gray-300 rounded-full block"
              animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-6 h-[2px] bg-gray-300 rounded-full block"
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[45] bg-[#030014]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.div
              className="flex flex-row gap-8 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-125 transition-transform duration-200"
                >
                  <Image src={social.icon} alt={social.alt} width={28} height={28} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
