export const streamsKeys = {
  all: ["streams"] as const,

  byMatch: (matchId: string) =>
    [...streamsKeys.all, matchId] as const,
};