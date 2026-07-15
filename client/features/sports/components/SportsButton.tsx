"use client";

import { motion } from "framer-motion";
import { Sport } from "../types/sport";

interface Props {
  sport: Sport;

  active: boolean;

  onClick: (id: string) => void;
}

export function SportButton({
  sport,
  active,
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(sport.id)}
      className={`
        relative
        whitespace-nowrap
        rounded-full
        px-6
        py-2.5
        text-sm
        font-medium
        transition-colors
        duration-300
        overflow-hidden
        ${
          active
            ? "text-white shadow-lg"
            : "bg-muted hover:bg-accent/50 text-foreground"
        }
      `}
    >
      {active && (
        <motion.div
          layoutId="activeSport"
          className="absolute inset-0 bg-gradient-to-r from-primary to-accent -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {sport.name}
    </motion.button>
  );
}