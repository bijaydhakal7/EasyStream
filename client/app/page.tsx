"use client";

import { useState } from "react";

import { SportsFilter } from "@/features/sports/components";
import { MatchesView } from "@/features/matches/components";
import { HeroSection } from "@/components/HeroSection";

export default function HomePage() {
  const [selectedSport, setSelectedSport] =
    useState("all");

  return (
    <main className="container max-w-screen-2xl py-8 space-y-10">
      <HeroSection />

      <section className="space-y-6">
        <SportsFilter
          selectedSport={selectedSport}
          onSelectSport={setSelectedSport}
        />

        <MatchesView
          selectedSport={selectedSport}
        />
      </section>
    </main>
  );
}