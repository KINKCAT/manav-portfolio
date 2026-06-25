"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming",
    skills: ["Python", "Dart", "SQL", "HTML", "CSS"]
  },
  {
    category: "Frameworks & Databases",
    skills: ["Flutter", "Android SDK", "MySQL", "React", "Next.js"]
  },
  {
    category: "Tools & Environment",
    skills: ["Android Studio", "VS Code", "Git", "Figma", "Firebase"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 relative z-10" id="skills">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl">
            A comprehensive overview of the technologies, languages, and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border flex flex-col h-full relative overflow-hidden group hover:border-primary/30 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none" />
              
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-6 bg-gradient-to-b from-primary to-secondary rounded-full inline-block" />
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 text-sm font-medium text-white/90 bg-white/5 border border-white/10 rounded-full hover:bg-primary/20 hover:border-primary/50 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
