import { api } from "@/lib/axios";

import { MatchSource } from "@/features/matches/types/match";

import { Stream, StreamWithProvider } from "../types/stream";

export async function getStreams(
  sources: MatchSource[]
): Promise<StreamWithProvider[]> {
  const requests = sources.map(async (source) => {
    const { data } = await api.get<Stream[]>(
      `/stream/${source.source}/${source.id}`
    );

    /**
     * Tag every stream with the provider (source)
     * it was fetched from, since a match can have
     * streams coming from multiple sources.
     */
    return data.map((stream) => ({
      ...stream,
      provider: source.source,
    }));
  });

  /**
   * Some sources may fail (dead source, 404, etc).
   * Don't let one bad source take down the rest.
   */
  const results = await Promise.allSettled(requests);

  return results
    .filter(
      (result): result is PromiseFulfilledResult<StreamWithProvider[]> =>
        result.status === "fulfilled"
    )
    .flatMap((result) => result.value);
}