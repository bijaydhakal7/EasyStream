import { motion } from "framer-motion";

import { Match } from "../types/match";

import { MatchCard } from "./MatchCard";

interface MatchGridProps {
  matches: Match[];

  liveMatchIds: Set<string>;
}

export function MatchGrid({
  matches,
  liveMatchIds,
}: MatchGridProps) {
  if (!matches.length) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 text-center text-muted-foreground"
      >
        No matches found.
      </motion.p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
      grid
      gap-6

      sm:grid-cols-2

      lg:grid-cols-3

      xl:grid-cols-4
      mx-3
      "
    >
      {matches.map((match, index) => (
        <motion.div
          key={match.id}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.03,
            ease: "easeOut",
          }}
        >
          <MatchCard
            match={match}
            isLive={liveMatchIds.has(match.id)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}