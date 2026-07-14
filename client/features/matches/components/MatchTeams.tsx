import { TeamBadge } from "@/features/images/components";

import { MatchTeams as Teams } from "../types/match";

interface MatchTeamsProps {
  teams?: Teams;
}

export function MatchTeams({
  teams,
}: MatchTeamsProps) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex flex-col items-center gap-2">

        <TeamBadge
          badge={teams?.home?.badge}
          name={teams?.home?.name}
          size={52}
        />

        <span className="text-sm font-medium">
          {teams?.home?.name}
        </span>

      </div>

      <span className="text-lg font-bold">
        VS
      </span>

      <div className="flex flex-col items-center gap-2">

        <TeamBadge
          badge={teams?.away?.badge}
          name={teams?.away?.name}
          size={52}
        />

        <span className="text-sm font-medium">
          {teams?.away?.name}
        </span>

      </div>

    </div>
  );
}