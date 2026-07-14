"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import { matchesKeys } from "../queryKeys";
import { getMatches } from "../services/matches.service";
import { findMatch } from "../utils/findMatch";
import { Match } from "../types/match";

export function useMatch(matchId: string) {
  const queryClient = useQueryClient();

  const cachedMatches =
    queryClient.getQueryData<Match[]>(
      matchesKeys.list()
    );

  return useQuery({
    queryKey: matchesKeys.list(),

    /**
     * If matches are already cached,
     * use them immediately.
     */
    initialData: cachedMatches,

    /**
     * Only fetch if cache doesn't exist.
     */
    queryFn: getMatches,

    /**
     * Select one match.
     */
    select: (matches) =>
      findMatch(matches, matchId),

    staleTime: 1000 * 60 * 5,
  });
}