"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSports } from "../hooks/useSports";
import { SportButton } from "./SportsButton";
import { SportsSkeleton } from "./SportsSkeleton";
import { Button } from "@/components/ui/button";

interface SportsFilterProps {
  selectedSport: string;
  onSelectSport: (sportId: string) => void;
}

export function SportsFilter({
  selectedSport,
  onSelectSport,
}: SportsFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
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

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300 } },
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group flex items-center border-1 ">
      <Button
        variant="outline"
        size="icon"
        className="absolute bottom-15 z-10 h-8 w-8 rounded-full shadow-md bg-background/80 backdrop-blur opacity-100 group-hover:opacity-100 transition-opacity -ml-3"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <motion.div
        ref={scrollRef}
        variants={container}
        initial="hidden"
        animate="show"
        className="flex gap-3 overflow-x-auto pb-4 pt-2 no-scrollbar px-2 w-full"
      >
        {/* All button */}
        <motion.div variants={item} className="shrink-0">
          <SportButton
            sport={{ id: "all", name: "All" }}
            active={selectedSport === "all"}
            onClick={() => onSelectSport("all")}
          />
        </motion.div>

        {sports?.map((sport) => (
          <motion.div key={sport.id} variants={item} className="shrink-0">
            <SportButton
              sport={sport}
              active={selectedSport === sport.id}
              onClick={() => onSelectSport(sport.id)}
            />
          </motion.div>
        ))}
      </motion.div>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 bottom-15 z-10 h-8 w-8 rounded-full shadow-md bg-background/80 backdrop-blur opacity-100 group-hover:opacity-100 transition-opacity -mr-3"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}