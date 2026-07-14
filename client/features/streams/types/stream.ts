export interface Stream {
  id: string;

  streamNo: number;

  language: string;

  hd: boolean;

  embedUrl: string;

  source: string;
}

/**
 * A stream tagged with the provider (source) it came from,
 * so the UI can group/label streams fetched from multiple
 * sources for the same match.
 */
export interface StreamWithProvider extends Stream {
  provider: string;
}