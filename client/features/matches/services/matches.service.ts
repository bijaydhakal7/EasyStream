import { api } from "@/lib/axios";
import { Match } from "../types/match";

/**
 * Returns every available match.
 */
export async function getMatches(): Promise<Match[]> {
  const { data } = await api.get<Match[]>("/matches/all");

  return data;
}

/**
 * Returns currently live matches.
 */
export async function getLiveMatches(): Promise<Match[]> {
  const { data } = await api.get<Match[]>("/matches/live");

  return data;
}

/**
 * Returns today's matches.
 */
export async function getTodayMatches(): Promise<Match[]> {
  const { data } = await api.get<Match[]>("/matches/all-today");

  return data;
}