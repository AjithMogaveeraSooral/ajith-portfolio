"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="bg-card-bg border border-card-border rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
              <FaGraduationCap className="text-accent text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">B.E in Mechanical Engineering</h3>
              <p className="text-accent-light text-sm mb-2">
                BMS Institute of Technology and Management
              </p>
              <span className="inline-block px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full">
                2015 – 2019
              </span>
              <p className="text-muted text-sm mt-4 leading-relaxed">
                Graduated with a strong foundation in engineering principles and analytical thinking.
                Transitioned into software development, leveraging problem-solving skills honed
                through mechanical engineering coursework to excel in full-stack development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
