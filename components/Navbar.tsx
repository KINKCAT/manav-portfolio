"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Journey", href: "#timeline" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#050505]/60 backdrop-blur-md border-b border-white/5 py-6"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-semibold tracking-tighter text-white">
            M.
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-white/50 hover:text-white transition-colors duration-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
