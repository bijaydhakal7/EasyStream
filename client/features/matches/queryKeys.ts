export const matchesKeys = {
  all: ["matches"] as const,

  list: () => [...matchesKeys.all, "list"] as const,

  live: () => [...matchesKeys.all, "live"] as const,

  schedule: () => [...matchesKeys.all, "schedule"] as const,
};