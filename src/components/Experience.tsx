"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Software Developer & Product Manager",
    company: "Bermer Software",
    period: "May 2023 – Mar 2026",
    points: [
      "Architected high-performance backends using Golang, optimizing for high concurrency and low-latency API responses.",
      "Developed cross-platform mobile apps and web dashboards using React Native and React JS, ensuring a unified user experience across devices.",
      "Full-Stack Ownership: Acted as the primary engineer for the entire stack, managing Golang services, React frontends, and Dockerized deployments on AWS and GCP.",
      "Database Design: Implemented and maintained scalable schemas using AWS RDS and MongoDB, ensuring high data integrity and performance.",
    ],
  },
  {
    title: "Team Lead",
    company: "Inode Technologies",
    period: "Dec 2021 – May 2023",
    points: [
      "Led the development of C# WinForms desktop applications for enterprise ERP solutions, utilizing Win32 APIs for local system integration and hardware interfacing.",
      "Successfully integrated C# desktop modules with modern web-based React JS components, improving legacy system accessibility.",
      "Supervised a team of developers, conducting code reviews and debugging complex system-level issues in C# and PHP.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Inode Technologies",
    period: "Jun 2021 – Dec 2021",
    points: [
      "Enhanced the performance of WinForms-based ERP modules by refactoring business logic and optimizing local data caching.",
      "Developed RESTful APIs to facilitate communication between C# desktop clients and cloud-based backend services.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Inode Technologies",
    period: "Jun 2020 – Jun 2021",
    points: [
      "Maintained and expanded features for WinForms desktop tools and PHP CodeIgniter web services.",
      "Wrote complex SQL queries and stored procedures to handle large-scale enterprise data processing.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-muted max-w-2xl mx-auto">
            A journey through building enterprise software, leading teams, and shipping products
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-card-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-card-bg border-2 border-accent rounded-full flex items-center justify-center z-10">
                <FaBriefcase className="text-accent text-xs" />
              </div>

              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card-bg border border-card-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300"
                >
                  <span className="inline-block px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-accent-light text-sm mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-muted text-sm leading-relaxed flex gap-2">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
