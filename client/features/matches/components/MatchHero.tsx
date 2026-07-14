import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";

import { TeamBadge } from "@/features/images/components";

import { Match } from "../types/match";

interface MatchHeroProps {
  match: Match;
  isLive: boolean;
}

export function MatchHero({
  match,
  isLive,
}: MatchHeroProps) {
  const hasTeams = match.teams?.home || match.teams?.away;

  return (
    <div className="rounded-xl border bg-card p-6">

      <div className="flex items-center justify-between gap-4">

        <Badge
          variant={isLive ? "default" : "secondary"}
          className={isLive ? "bg-red-600 text-white" : undefined}
        >
          {isLive ? "LIVE" : match.category}
        </Badge>

        <span className="text-sm text-muted-foreground">
          {format(new Date(match.date), "EEE, MMM d • hh:mm a")}
        </span>

      </div>

      {hasTeams ? (
        <div className="mt-6 flex items-center justify-center gap-8 sm:gap-16">

          <div className="flex flex-col items-center gap-3">
            <TeamBadge
              badge={match.teams?.home?.badge}
              name={match.teams?.home?.name}
              size={72}
            />
            <span className="text-center text-sm font-medium sm:text-base">
              {match.teams?.home?.name}
            </span>
          </div>

          <span className="text-xl font-bold text-muted-foreground">
            VS
          </span>

          <div className="flex flex-col items-center gap-3">
            <TeamBadge
              badge={match.teams?.away?.badge}
              name={match.teams?.away?.name}
              size={72}
            />
            <span className="text-center text-sm font-medium sm:text-base">
              {match.teams?.away?.name}
            </span>
          </div>

        </div>
      ) : (
        <h1 className="mt-6 text-center text-xl font-bold sm:text-2xl">
          {match.title}
        </h1>
      )}

    </div>
  );
}
