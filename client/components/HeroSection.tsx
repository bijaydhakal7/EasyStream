"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 shadow-xl mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 pointer-events-none" />
      <div className="relative px-6 py-16 sm:px-12 sm:py-24 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Watch Your Favorite{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Sports Live I love you Dibya ❤️
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground"
        >
          Experience the thrill of the game with real-time updates, high-quality streams, and seamless access to all matches in one place.
        </motion.p>
      </div>
    </div>
  );
}
