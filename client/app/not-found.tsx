"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SearchX } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        container
        flex
        min-h-[60vh]
        flex-col
        items-center
        justify-center
        gap-6
        py-8
        text-center
      "
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 300 }}
        className="flex items-center justify-center"
      >
        <SearchX className="h-20 w-20 text-muted-foreground/50" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="text-8xl font-bold text-muted-foreground/30"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-muted-foreground max-w-md text-lg"
      >
        We couldn&apos;t find what you were looking for.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        <Link 
          href="/" 
          className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
        >
          Back to matches
        </Link>
      </motion.div>
    </motion.div>
  );
}
