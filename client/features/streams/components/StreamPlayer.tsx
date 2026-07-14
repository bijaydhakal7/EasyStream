"use client";

import { StreamWithProvider } from "../types/stream";

interface StreamPlayerProps {
  stream?: StreamWithProvider;
}

export function StreamPlayer({
  stream,
}: StreamPlayerProps) {
  if (!stream) {
    return (
      <div
        className="
        aspect-video
        rounded-xl
        border
        flex
        items-center
        justify-center
        text-muted-foreground
        "
      >
        Select a stream
      </div>
    );
  }

  return (
    <div className="aspect-video">

      <iframe
        src={stream.embedUrl}
        title="Live Stream"
        allowFullScreen
        className="
        h-full
        w-full
        rounded-xl
        border
        "
      />

    </div>
  );
}