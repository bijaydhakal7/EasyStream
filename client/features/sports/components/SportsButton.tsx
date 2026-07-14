"use client";

import { Sport } from "../types/sport";

interface Props {
  sport: Sport;

  active: boolean;

  onClick: (id: string) => void;
}

export function SportButton({
  sport,
  active,
  onClick,
}: Props) {
  return (
    <button
      onClick={() => onClick(sport.id)}
      className={`
        whitespace-nowrap
        rounded-full
        px-5
        py-2
        text-sm
        transition

        ${
          active
            ? "bg-primary text-primary-foreground"
            : "bg-muted hover:bg-accent"
        }
      `}
    >
      {sport.name}
    </button>
  );
}