"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Contact() {
  return (
    <section className="py-24 relative z-10" id="contact">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-12 md:p-16 rounded-[3rem] bg-card border border-border relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              Let's Build Something <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Amazing Together.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Whether you have a project in mind or just want to say hi, I'm always open to discussing new opportunities and collaborations.
            </p>

            <div className="flex items-center justify-center gap-4 w-full">
              <a href="mailto:sharmamanav8958@gmail.com" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors group">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
              <a href="https://github.com/manavxsharma2007" target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors group">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
