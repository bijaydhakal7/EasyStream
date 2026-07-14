"use client";

import { useQuery } from "@tanstack/react-query";

import { getSports } from "../services/sports.service";

import { sportsKeys } from "../queryKeys";

export function useSports() {
  return useQuery({
    queryKey: sportsKeys.all,

    queryFn: getSports,
  });
}