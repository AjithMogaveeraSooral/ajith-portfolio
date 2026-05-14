"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiGo,
  SiReact,
  SiTypescript,
  SiDocker,
  SiGooglecloud,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

const projects = [
  {
    title: "ERP Backend",
    role: "Lead Developer & Architect",
    description:
      "Complete Enterprise Resource Planning backend built in Golang. Leading the architectural decisions, API design, and deployment strategy. Handles inventory, billing, HR, and accounting modules with high-concurrency support.",
    tags: ["Golang", "Microservices", "Docker", "GCP Cloud Run", "PostgreSQL"],
    github: "https://github.com/uexcess/erp-go",
    icons: [<SiGo key="go" />, <SiDocker key="docker" />, <SiGooglecloud key="gcp" />],
    color: "from-cyan-500/20 to-blue-500/20",
    featured: true,
  },
  {
    title: "Uexcess App",
    role: "Full Stack Developer",
    description:
      "Comprehensive business management application with real-time data sync, multi-tenant architecture, and cross-platform support. Powers the core Uexcess ecosystem.",
    tags: ["React", "TypeScript", "Golang", "AWS", "MongoDB"],
    github: "https://github.com/uexcess/uexcess-app",
    icons: [<SiReact key="react" />, <SiTypescript key="ts" />, <SiGo key="go" />],
    color: "from-purple-500/20 to-pink-500/20",
    featured: true,
  },
  {
    title: "Book My Salon",
    role: "Backend Developer",
    description:
      "Salon booking platform backend built with Golang. Manages appointment scheduling, service cataloging, staff management, and real-time availability tracking with push notifications.",
    tags: ["Golang", "REST API", "Docker", "Firebase", "PostgreSQL"],
    github: "https://github.com/uexcess/book-my-salon-backend-go",
    icons: [<SiGo key="go" />, <SiFirebase key="firebase" />, <SiDocker key="docker" />],
    color: "from-orange-500/20 to-yellow-500/20",
    featured: false,
  },
  {
    title: "Hosaputa – Backend",
    role: "Backend Developer",
    description:
      "Educational platform backend powering the Hosaputa school management ecosystem. Handles student records, attendance, grading systems, and administrative workflows.",
    tags: ["Golang", "REST API", "GCP", "PostgreSQL", "Docker"],
    github: "https://github.com/uexcess/hosaputa-backend",
    icons: [<SiGo key="go" />, <SiGooglecloud key="gcp" />, <SiDocker key="docker" />],
    color: "from-green-500/20 to-emerald-500/20",
    featured: false,
  },
  {
    title: "Hosaputa – School Portal",
    role: "Frontend Developer",
    description:
      "School management dashboard for administrators and teachers. Features student enrollment, attendance tracking, grade management, and report generation with a clean, modern UI.",
    tags: ["React JS", "TypeScript", "Redux", "Tailwind CSS"],
    github: "https://github.com/uexcess/hosaputa-school",
    icons: [<SiReact key="react" />, <SiTypescript key="ts" />, <SiNextdotjs key="next" />],
    color: "from-blue-500/20 to-indigo-500/20",
    featured: false,
  },
  {
    title: "Hosaputa – Educator Portal",
    role: "Frontend Developer",
    description:
      "Dedicated educator interface with curriculum planning, assignment management, student performance analytics, and parent communication tools.",
    tags: ["React JS", "TypeScript", "Redux", "Tailwind CSS"],
    github: "https://github.com/uexcess/hosaputa-educator",
    icons: [<SiReact key="react" />, <SiTypescript key="ts" />, <SiNextdotjs key="next" />],
    color: "from-violet-500/20 to-fuchsia-500/20",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-grid relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-muted max-w-2xl mx-auto">
            Key projects I&apos;ve built and led — from enterprise ERPs to educational platforms
          </p>
        </motion.div>

        {/* Featured projects - larger cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-card-bg border border-card-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        {project.icons.map((icon, idx) => (
                          <span key={idx} className="text-accent-light text-xl">
                            {icon}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mt-3">{project.title}</h3>
                      <p className="text-accent-light text-sm">{project.role}</p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent-light transition-colors p-2"
                    >
                      <FaGithub size={22} />
                    </a>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-accent/10 text-accent-light rounded-full font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other projects - smaller grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-card-bg border border-card-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                <div className={`h-1 bg-gradient-to-r ${project.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-2 text-accent-light text-lg">
                      {project.icons.map((icon, idx) => (
                        <span key={idx}>{icon}</span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent-light transition-colors"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-accent-light text-xs mb-3">{project.role}</p>
                  <p className="text-muted text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent-light rounded-full font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
