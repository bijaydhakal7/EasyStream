import { Stream } from "../types/stream";

export function sortStreams<T extends Stream>(
  streams: T[]
): T[] {
  return [...streams].sort((a, b) => {

    if (a.hd !== b.hd) {
      return Number(b.hd) - Number(a.hd);
    }

    return a.streamNo - b.streamNo;
  });
}