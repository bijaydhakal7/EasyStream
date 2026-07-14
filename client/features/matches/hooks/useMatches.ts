"use client";

import { useQuery } from "@tanstack/react-query";

import { getMatches } from "../services/matches.service";
import { matchesKeys } from "../queryKeys";

export function useMatches() {
  return useQuery({
    queryKey: matchesKeys.list(),
    queryFn: getMatches,

    staleTime: 1000 * 60 * 5,
  });
}