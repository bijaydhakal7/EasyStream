"use client";

import { useQuery } from "@tanstack/react-query";

import { getLiveMatches } from "../services/matches.service";
import { matchesKeys } from "../queryKeys";

export function useLiveMatches() {
  return useQuery({
    queryKey: matchesKeys.live(),

    queryFn: async () => {
      const matches = await getLiveMatches();

      return new Set(matches.map((match) => match.id));
    },

    staleTime: 1000 * 30,

    refetchInterval: 1000 * 30,
  });
}