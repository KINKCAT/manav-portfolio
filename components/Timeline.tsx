"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages } from "lucide-react";

export default function Timeline() {
  const timelineData = [
    {
      title: "Bachelor's Degree",
      organization: "CCSU",
      date: "Graduated",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      color: "bg-primary"
    },
    {
      title: "German Learning Journey",
      organization: "TELC B1 Certified",
      date: "Completed",
      icon: <Languages className="w-5 h-5 text-white" />,
      color: "bg-secondary"
    },
    {
      title: "Advanced German",
      organization: "B2 Certification",
      date: "In Progress",
      icon: <Languages className="w-5 h-5 text-white" />,
      color: "bg-zinc-700"
    }
  ];

  return (
    <section className="py-24 relative z-10" id="timeline">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-6 md:ml-0 md:pl-0">
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="mb-10 ml-10 md:ml-1/2 relative md:flex md:justify-between md:items-center md:even:flex-row-reverse group"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[57px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full ${item.color} border-4 border-background flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>

              {/* Content Box */}
              <div className="md:w-[45%] p-6 rounded-2xl bg-card border border-border group-hover:border-white/20 transition-colors shadow-xl">
                <span className="text-sm font-medium text-muted-foreground mb-1 block">{item.date}</span>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-primary font-medium">{item.organization}</p>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
