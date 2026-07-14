"use client";

import { StreamWithProvider } from "../types/stream";

import { StreamCard } from "./StreamCard";

interface StreamSelectorProps {
  streams: StreamWithProvider[];

  selectedStream?: StreamWithProvider;

  onSelect: (
    stream: StreamWithProvider
  ) => void;
}

export function StreamSelector({
  streams,
  selectedStream,
  onSelect,
}: StreamSelectorProps) {
  return (
    <div className="space-y-3">

      {streams.map((stream) => (

        <StreamCard
          key={stream.id}
          stream={stream}
          selected={
            selectedStream?.id ===
            stream.id
          }
          onSelect={() =>
            onSelect(stream)
          }
        />

      ))}

    </div>
  );
}