"use client";

import { CheckCircle2, MonitorPlay } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { StreamWithProvider } from "../types/stream";

interface StreamCardProps {
  stream: StreamWithProvider;

  selected: boolean;

  onSelect: () => void;
}

export function StreamCard({
  stream,
  selected,
  onSelect,
}: StreamCardProps) {
  return (
    <Button
      variant={selected ? "default" : "outline"}
      onClick={onSelect}
      className="
      w-full
      justify-between
      h-auto
      py-4
      "
    >
      <div className="flex items-center gap-3">

        <MonitorPlay size={18} />

        <div className="text-left">

          <p className="font-medium">
            Stream {stream.streamNo}
          </p>

          <p className="text-xs text-muted-foreground">
            {stream.language}
          </p>

        </div>

      </div>

      <div className="flex items-center gap-2">

        {stream.hd && (
          <Badge>
            HD
          </Badge>
        )}

        <Badge
          variant="secondary"
        >
          {stream.provider}
        </Badge>

        {selected && (
          <CheckCircle2
            size={18}
          />
        )}

      </div>

    </Button>
  );
}