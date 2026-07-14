"use client";

import Link from "next/link";

import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import {
  MatchPoster,
  TeamBadge,
} from "@/features/images/components";

import { Match } from "../types/match";

interface MatchCardProps {
  match: Match;
  isLive: boolean;
}

export function MatchCard({
  match,
  isLive,
}: MatchCardProps) {
  return (
    <Link href={`/watch/${match.id}`}>

      <Card className="overflow-hidden transition hover:shadow-lg">

        <div className="relative">

          <MatchPoster
            poster={match.poster}
            title={match.title}
          />

          {isLive && (
            <Badge
              className="absolute left-3 top-3 bg-red-600"
            >
              LIVE
            </Badge>
          )}

        </div>

        <div className="space-y-5 p-4">

          <div className="flex items-center justify-between">

            <div className="flex flex-col items-center gap-2">

              <TeamBadge
                badge={match.teams?.home?.badge}
                name={match.teams?.home?.name}
              />

              <span className="text-xs">
                {match.teams?.home?.name}
              </span>

            </div>

            <span className="font-bold">
              VS
            </span>

            <div className="flex flex-col items-center gap-2">

              <TeamBadge
                badge={match.teams?.away?.badge}
                name={match.teams?.away?.name}
              />

              <span className="text-xs">
                {match.teams?.away?.name}
              </span>

            </div>

          </div>

          <div>

            <h3 className="font-semibold">
              {match.title}
            </h3>

            <p className="text-sm text-muted-foreground">

              {format(
                new Date(match.date),
                "EEE, MMM d • hh:mm a"
              )}

            </p>

          </div>

        </div>

      </Card>

    </Link>
  );
}