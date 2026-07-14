"use client";

import { useQuery } from "@tanstack/react-query";

import { MatchSource } from "@/features/matches/types/match";

import { streamsKeys } from "../queryKeys";

import { getStreams } from "../services/streams.service";

import { sortStreams } from "../utils/sortStreams";

interface UseStreamsProps {
  matchId: string;

  sources: MatchSource[];
}

export function useStreams({
  matchId,
  sources,
}: UseStreamsProps) {
  return useQuery({
    queryKey: streamsKeys.byMatch(
      matchId
    ),

    enabled: sources.length > 0,

    queryFn: async () => {
      const streams =
        await getStreams(sources);

      return sortStreams(streams);
    },

    staleTime: 1000 * 60,
  });
}