"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, BookOpen } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Software Development",
      description: "Building robust and scalable applications with modern architecture and clean code practices.",
      icon: <Code2 className="w-6 h-6 text-primary" />,
      delay: 0.1
    },
    {
      title: "Flutter Engineering",
      description: "Creating beautiful, natively compiled, multi-platform applications from a single codebase.",
      icon: <Smartphone className="w-6 h-6 text-secondary" />,
      delay: 0.2
    },
    {
      title: "Web Experiences",
      description: "Developing responsive and interactive front-end interfaces using React and Next.js.",
      icon: <Globe className="w-6 h-6 text-primary" />,
      delay: 0.3
    },
    {
      title: "German Language",
      description: "Currently B1 certified, actively progressing towards B2 fluency for international opportunities.",
      icon: <BookOpen className="w-6 h-6 text-secondary" />,
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 relative z-10" id="about">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-lg leading-relaxed space-y-6"
          >
            <p>
              I am a dedicated Software Developer with a strong foundation in modern software engineering principles. My journey in tech is driven by a passion for creating elegant, intuitive, and highly functional digital experiences.
            </p>
            <p>
              Specializing in <strong className="text-white font-medium">Flutter</strong> for cross-platform mobile development and <strong className="text-white font-medium">modern web technologies</strong>, I bridge the gap between design and technical implementation. I believe that great software not only works flawlessly but also feels alive and engaging to the user.
            </p>
            <p>
              Beyond coding, I am actively preparing for international opportunities by mastering the German language, demonstrating my commitment to continuous learning and global professional growth.
            </p>
          </motion.div>

          {/* Right Column - Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: card.delay }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group relative overflow-hidden"
              >
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="mb-4 p-3 bg-white/5 inline-flex rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
