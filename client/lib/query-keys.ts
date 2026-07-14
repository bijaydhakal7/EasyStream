// lib/query-keys.ts

export const queryKeys = {
  matches: ["matches"] as const,

  match: (id: string) => ["match", id] as const,
};