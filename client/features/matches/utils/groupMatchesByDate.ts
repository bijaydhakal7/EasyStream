import { format } from "date-fns";

import { Match } from "../types/match";

export interface MatchGroup {
  date: string;
  matches: Match[];
}

export function groupMatchesByDate(
  matches: Match[]
): MatchGroup[] {
  const groups = new Map<string, Match[]>();

  matches.forEach((match) => {
    const key = format(new Date(match.date), "yyyy-MM-dd");

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key)!.push(match);
  });

  return Array.from(groups.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, matches]) => ({
      date,
      matches,
    }));
}