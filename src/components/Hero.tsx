"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-accent-light font-mono text-sm mb-4 tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Ajith{" "}
              <span className="gradient-text">Mogaveera</span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl text-muted font-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Senior Full Stack Developer
            </motion.h2>

            <motion.p
              className="text-muted max-w-xl text-base lg:text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              6+ years crafting scalable backends in <span className="text-accent-light font-medium">Golang</span> &{" "}
              <span className="text-accent-light font-medium">C#</span>, building modern UIs with{" "}
              <span className="text-accent-light font-medium">React</span>, and deploying
              cloud-native services on <span className="text-accent-light font-medium">AWS</span> &{" "}
              <span className="text-accent-light font-medium">GCP</span>.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="/Ajith%20Resume.pdf"
                download
                className="group flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </a>
              <a
                href="https://github.com/AjithMogaveeraSooral"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-card-bg border border-card-border hover:border-accent text-foreground rounded-xl transition-all duration-300"
              >
                <FaGithub size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ajith-mogaveera-b06146154/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-card-bg border border-card-border hover:border-accent text-foreground rounded-xl transition-all duration-300"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              {/* Rotating border ring */}
              <motion.div
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-accent via-purple-500 to-accent-light opacity-60 blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-card-bg animate-pulse-glow">
                <Image
                  src="/profile-photo.jpg"
                  alt="Ajith Mogaveera"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
              {/* Status badge */}
              <motion.div
                className="absolute bottom-4 right-4 flex items-center gap-2 bg-card-bg/90 backdrop-blur-sm border border-card-border rounded-full px-3 py-1.5"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-muted">Available</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#about" className="text-muted hover:text-accent-light transition-colors">
            <HiArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
