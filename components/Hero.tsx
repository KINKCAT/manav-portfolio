"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6" id="hero">
      <div className="z-10 flex flex-col items-center max-w-4xl mx-auto">


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[90px] lg:text-[110px] font-bold leading-[1.1] tracking-tight text-white mb-8"
        >
          Hi, I&apos;m Manav.
          <br />
          Build the Future.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed mb-16"
        >
          I design and build software, AI systems, and scalable digital products while preparing for an international engineering career.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link
            href="#timeline"
            className="px-8 py-4 rounded-full bg-white text-black font-medium text-sm tracking-wide hover:bg-white/90 transition-colors duration-500"
          >
            Explore My Journey
          </Link>
          <Link
            href="#projects"
            className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-medium text-sm tracking-wide hover:bg-white/5 transition-colors duration-500"
          >
            View Projects
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
