"use client";

import { useMemo } from "react";

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
      <div
        className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        "
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <MatchSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center py-20">
        Failed to load matches.
      </p>
    );
  }

  return (
    <MatchGrid
      matches={filteredMatches}
      liveMatchIds={liveMatchIds}
    />
  );
}