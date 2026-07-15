"use client";

import { useState } from "react";

import { SportsFilter } from "@/features/sports/components";
import { MatchesView } from "@/features/matches/components";

export default function HomePage() {
  const [selectedSport, setSelectedSport] =
    useState("all");

  return (
    <main className="container py-6 space-y-8 ">

      <SportsFilter
        selectedSport={selectedSport}
        onSelectSport={setSelectedSport}
      />

      <MatchesView
        selectedSport={selectedSport}
      />

    </main>
  );
}