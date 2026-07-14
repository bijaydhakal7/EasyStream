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
      <p className="py-20 text-center text-muted-foreground">
        No matches found.
      </p>
    );
  }

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
      {matches.map((match) => (
        <MatchCard
          key={match.id}
          match={match}
          isLive={liveMatchIds.has(match.id)}
        />
      ))}
    </div>
  );
}