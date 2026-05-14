"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiGooglecloud,
  SiFirebase,
  SiDigitalocean,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaServer, FaDatabase, FaEnvelope, FaHdd, FaUsers, FaBalanceScale, FaCloud } from "react-icons/fa";

const cloudServices = [
  {
    provider: "Google Cloud Platform",
    icon: <SiGooglecloud size={32} />,
    color: "text-blue-400",
    services: [
      { name: "Cloud Run", icon: <FaServer />, desc: "Serverless container deployment" },
      { name: "Firebase", icon: <SiFirebase />, desc: "Auth, Firestore & Push Notifications" },
      { name: "Load Balancer", icon: <FaBalanceScale />, desc: "Traffic distribution & SSL" },
    ],
  },
  {
    provider: "Amazon Web Services",
    icon: <FaAws size={32} />,
    color: "text-orange-400",
    services: [
      { name: "RDS Database", icon: <FaDatabase />, desc: "Managed relational databases" },
      { name: "SES Mailer", icon: <FaEnvelope />, desc: "Transactional email service" },
      { name: "S3 Storage", icon: <FaHdd />, desc: "Object storage & CDN" },
      { name: "EC2 Services", icon: <FaServer />, desc: "Virtual server instances" },
      { name: "IAM Manager", icon: <FaUsers />, desc: "Identity & access management" },
    ],
  },
  {
    provider: "Frontend Hosting",
    icon: <FaCloud size={32} />,
    color: "text-green-400",
    services: [
      { name: "Digital Ocean", icon: <SiDigitalocean />, desc: "App Platform deployment" },
      { name: "Vercel", icon: <SiVercel />, desc: "Next.js & React hosting" },
      { name: "GitHub Pages", icon: <SiGithub />, desc: "Static site hosting" },
      { name: "AWS Amplify", icon: <FaAws />, desc: "Fullstack cloud hosting" },
    ],
  },
];

export default function CloudInfra() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-grid relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Cloud & <span className="gradient-text">Infrastructure</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-muted max-w-2xl mx-auto">
            Experienced in hosting and managing production workloads across major cloud providers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cloudServices.map((cloud, idx) => (
            <motion.div
              key={cloud.provider}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-card-bg border border-card-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300"
            >
              <div className={`${cloud.color} mb-4`}>{cloud.icon}</div>
              <h3 className="text-xl font-bold mb-6">{cloud.provider}</h3>
              <div className="space-y-4">
                {cloud.services.map((service, sIdx) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 + sIdx * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <span className="text-accent mt-0.5 group-hover:text-accent-light transition-colors">
                      {service.icon}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{service.name}</p>
                      <p className="text-xs text-muted">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {["Docker", "Microservices", "CI/CD", "Load Balancing", "SSL/TLS", "Container Orchestration", "Serverless"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm bg-card-bg border border-card-border rounded-full text-muted hover:border-accent/40 hover:text-accent-light transition-all duration-200"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
