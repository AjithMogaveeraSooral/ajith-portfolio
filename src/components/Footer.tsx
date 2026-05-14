"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaHeart } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/AjithMogaveeraSooral",
    icon: <FaGithub size={20} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ajith-mogaveera-b06146154/",
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "Email",
    href: "mailto:ajithsmogaveera@gmail.com",
    icon: <FaEnvelope size={20} />,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative py-16 bg-card-bg border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted max-w-md mx-auto mb-6">
              Open to exciting opportunities, collaborations, and conversations about technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/Ajith%20Resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-accent/20"
              >
                <FaDownload />
                Download Resume
              </a>
              <a
                href="mailto:ajithsmogaveera@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-background border border-card-border hover:border-accent text-foreground rounded-xl transition-all duration-300"
              >
                <FaEnvelope />
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 mb-8"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-12 h-12 bg-background border border-card-border rounded-xl flex items-center justify-center text-muted hover:text-accent-light hover:border-accent transition-all duration-300 hover:-translate-y-1"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          {/* Bottom bar */}
          <div className="w-full pt-8 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} Ajith Mogaveera. All rights reserved.
            </p>
            <p className="text-xs text-muted flex items-center gap-1">
              Built with <FaHeart className="text-red-400 text-[10px]" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
