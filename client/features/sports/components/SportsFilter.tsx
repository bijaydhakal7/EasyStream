"use client";

import { useSports } from "../hooks/useSports";
import { SportButton } from "./SportsButton";
import { SportsSkeleton } from "./SportsSkeleton";

interface SportsFilterProps {
  selectedSport: string;
  onSelectSport: (sportId: string) => void;
}

export function SportsFilter({
  selectedSport,
  onSelectSport,
}: SportsFilterProps) {
  const {
    data: sports,
    isLoading,
    isError,
  } = useSports();

  if (isLoading) {
    return <SportsSkeleton />;
  }

  if (isError) {
    return <p>Failed to load sports.</p>;
  }

  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {/* All button */}
      <SportButton
        sport={{ id: "all", name: "All" }}
        active={selectedSport === "all"}
        onClick={() => onSelectSport("all")}
      />

      {sports?.map((sport) => (
        <SportButton
          key={sport.id}
          sport={sport}
          active={selectedSport === sport.id}
          onClick={() => onSelectSport(sport.id)}
        />
      ))}
    </div>
  );
}