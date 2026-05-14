"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaCloud, FaMobileAlt, FaServer } from "react-icons/fa";

const highlights = [
  {
    icon: <FaServer size={24} />,
    title: "Backend Expert",
    description: "Golang & C# specialist building high-concurrency, low-latency API services",
  },
  {
    icon: <FaCode size={24} />,
    title: "Full Stack",
    description: "End-to-end ownership from Win32 APIs to modern React frontends",
  },
  {
    icon: <FaCloud size={24} />,
    title: "Cloud Native",
    description: "Deploying containerized microservices on AWS, GCP & Docker",
  },
  {
    icon: <FaMobileAlt size={24} />,
    title: "Cross Platform",
    description: "React Native mobile apps & React JS web dashboards",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-grid relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted text-lg leading-relaxed max-w-4xl mx-auto text-center mb-16"
        >
          Senior Full Stack Developer with 6 years of experience specializing in Golang and C#.
          Proven expertise in building Windows Desktop Applications (WinForms) and scalable
          cloud-native web services. Adept at bridging the gap between low-level system development
          and modern frontend frameworks like React JS and React Native. Strong background in taking
          full ownership of product lifecycles, from Win32 API integration to deploying containerized
          microservices on AWS and GCP.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-card-bg border border-card-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300"
            >
              <div className="text-accent mb-4 group-hover:text-accent-light transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
