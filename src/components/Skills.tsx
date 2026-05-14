"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiGo,
  SiPhp,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDotnet,
  SiTailwindcss,
  SiGit,
  SiLinux,
  SiFirebase,
  SiDigitalocean,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import { FaAws, FaDatabase } from "react-icons/fa";

const skillCategories = [
  {
    title: "Backend & System",
    skills: [
      { name: "Golang", icon: <SiGo />, level: 95 },
      { name: "C#", icon: <SiDotnet />, level: 85 },
      { name: "PHP", icon: <SiPhp />, level: 95 },
    ],
  },
  {
    title: "Desktop Development",
    skills: [
      { name: "WinForms", icon: <SiDotnet />, level: 85 },
      { name: ".NET Framework", icon: <SiDotnet />, level: 80 },
      { name: "Win32 API", icon: <SiDotnet />, level: 75 },
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript />, level: 90 },
      { name: "React JS", icon: <SiReact />, level: 90 },
      { name: "React Native", icon: <SiReact />, level: 80 },
      { name: "TypeScript", icon: <SiTypescript />, level: 85 },
      { name: "Redux", icon: <SiRedux />, level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws />, level: 85 },
      { name: "GCP", icon: <SiGooglecloud />, level: 85 },
      { name: "Docker", icon: <SiDocker />, level: 90 },
      { name: "Kubernetes", icon: <SiKubernetes />, level: 70 },
      { name: "Firebase", icon: <SiFirebase />, level: 80 },
      { name: "CI/CD", icon: <SiGit />, level: 80 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql />, level: 95 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 90 },
      { name: "MongoDB", icon: <SiMongodb />, level: 80 },
      { name: "SQL Server", icon: <FaDatabase />, level: 95 },
    ],
  },
  {
    title: "Hosting & Deployment",
    skills: [
      { name: "GCP Cloud Run", icon: <SiGooglecloud />, level: 95 },
      { name: "AWS EC2/RDS", icon: <FaAws />, level: 95 },
      { name: "Digital Ocean", icon: <SiDigitalocean />, level: 80 },
      { name: "Vercel", icon: <SiVercel />, level: 80 },
      { name: "GitHub Pages", icon: <SiGithub />, level: 80 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-muted max-w-2xl mx-auto">
            Technologies and tools I work with daily to build production-grade software
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + catIdx * 0.1 }}
              className="bg-card-bg border border-card-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-5 text-accent-light">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + catIdx * 0.1 + skillIdx * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-accent text-sm">{skill.icon}</span>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-card-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + catIdx * 0.1 + skillIdx * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
