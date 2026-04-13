"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/the_8ernity", icon: "/instagram.svg" },
  { label: "LinkedIn", href: "https://in.linkedin.com/in/arpan-biswas-9a327b322", icon: "/linkedin.svg" },
  { label: "GitHub", href: "https://github.com/8ernity", icon: "/github.svg" },
];

const aboutItems = [
  { label: "Become Sponsor", href: "#" },
  { label: "About Me", href: "#about-me" },
  { label: "arpanbiswas647@gmail.com", href: "mailto:arpanbiswas647@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="w-full relative z-[20]">
      {/* Top gradient border */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7042f8] to-transparent" />

      <div className="w-full bg-[#030014]/80 backdrop-blur-sm text-gray-200 pt-12 pb-8 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
            {/* Get In Touch */}
            <motion.div
              className="flex flex-col items-center md:items-start md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-semibold text-[12px] tracking-[0.3em] text-[#789bff] uppercase mb-1">
                What&apos;s Next?
              </p>
              <h2 className="font-bold text-[55px] md:text-[65px] leading-tight mb-5 font-serif">
                <span className="text-white">Get In </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b8cff] to-[#3BE1FF]">
                  Touch
                </span>
              </h2>
              <p className="text-gray-400 text-[16px] leading-[1.6] max-w-[450px] text-center md:text-left mb-6 font-serif">
                Am currently looking for new opportunities. Whether you have questions or just want to say hi, I&apos;ll do my best to get back to you!
              </p>
              <a
                href="mailto:arpanbiswas647@gmail.com"
                className="px-6 py-3 rounded-md border border-[#3BE1FF]/50 text-white hover:bg-[#3BE1FF]/10 transition-colors"
              >
                Say Hello
              </a>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-bold text-[16px] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Social Media
              </h3>
              {socialLinks.map((link) => (
                <a
                  key={link.label + "-social"}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center my-[10px] text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={18}
                    height={18}
                    className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="text-[15px] ml-[10px]">{link.label}</span>
                </a>
              ))}
            </motion.div>

            {/* About */}
            <motion.div
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold text-[16px] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                About
              </h3>
              {aboutItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex flex-row items-center my-[10px] text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span className="text-[15px]">{item.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Bottom divider + copyright */}
          <div className="mt-10 pt-6 border-t border-[#7042f8]/20 text-center">
            <p className="text-[14px] text-gray-500">
              &copy; Arpan Biswas {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
