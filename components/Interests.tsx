"use client";

import { motion } from "framer-motion";

const interests = [
  "AI",
  "Mobile Apps",
  "UI/UX",
  "Software Engineering",
  "Technology",
  "Entrepreneurship"
];

export default function Interests() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Areas of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Interest</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -5,
                scale: 1.05,
                transition: { duration: 0.2 } 
              }}
              className="px-6 py-4 rounded-2xl bg-card border border-white/5 shadow-lg backdrop-blur-sm hover:border-primary/50 hover:shadow-primary/20 transition-all cursor-default relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 text-lg font-medium text-white/90">{interest}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
