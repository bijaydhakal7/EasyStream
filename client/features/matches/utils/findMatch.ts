import { Match } from "../types/match";

export function findMatch(
  matches: Match[],
  matchId: string
) {
  return matches.find(
    (match) => match.id === matchId
  );
}