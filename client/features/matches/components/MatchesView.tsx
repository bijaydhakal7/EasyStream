"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

import { useMatches } from "../hooks/useMatches";
import { useLiveMatches } from "../hooks/useLiveMatches";

import { MatchGrid } from "./MatchGrid";
import { MatchSkeleton } from "./MatchSkeleton";

interface MatchesViewProps {
  selectedSport: string;
}

export function MatchesView({
  selectedSport,
}: MatchesViewProps) {
  const {
    data: matches = [],
    isLoading,
    isError,
  } = useMatches();

  const {
    data: liveMatchIds = new Set(),
  } = useLiveMatches();

  const filteredMatches = useMemo(() => {

    if (selectedSport === "all") {
      return matches;
    }

    return matches.filter(
      (match) => match.category === selectedSport
    );

  }, [matches, selectedSport]);

  if (isLoading) {
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
        "
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <MatchSkeleton />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  if (isError) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-20 text-muted-foreground"
      >
        Failed to load matches.
      </motion.p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MatchGrid
        matches={filteredMatches}
        liveMatchIds={liveMatchIds}
      />
    </motion.div>
  );
}