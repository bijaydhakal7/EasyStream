"use client";

import { useQuery } from "@tanstack/react-query";

import { getMatches } from "../services/matches.service";
import { groupMatchesByDate } from "../utils/groupMatchesByDate";
import { matchesKeys } from "../queryKeys";

export function useScheduleMatches() {
  return useQuery({
    queryKey: matchesKeys.schedule(),

    queryFn: async () => {
      const matches = await getMatches();

      return groupMatchesByDate(matches);
    },

    staleTime: 1000 * 60 * 5,
  });
}