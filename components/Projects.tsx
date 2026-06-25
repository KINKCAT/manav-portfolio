"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";
import Image from "next/image";

const projectsData: { title: string; description: string; imageUrl: string; tags: string[]; github: string; live: string }[] = [
  // Add your projects here
];

export default function Projects() {
  return (
    <section className="py-24 relative z-10" id="projects">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
            >
              
              <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden relative aspect-video border border-white/10 bg-card group-hover:border-primary/50 transition-colors duration-500">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                  unoptimized
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
