import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Match } from "../types/match";

interface MatchInfoProps {
  match: Match;
}

export function MatchInfo({
  match,
}: MatchInfoProps) {
  return (
    <Card className="p-6">

      <h2 className="text-lg font-semibold">
        Match Details
      </h2>

      <dl className="mt-4 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">

        <div>
          <dt className="text-muted-foreground">Title</dt>
          <dd className="mt-1 font-medium">{match.title}</dd>
        </div>

        <div>
          <dt className="text-muted-foreground">Category</dt>
          <dd className="mt-1">
            <Badge variant="secondary" className="capitalize">
              {match.category}
            </Badge>
          </dd>
        </div>

        <div>
          <dt className="text-muted-foreground">Popular</dt>
          <dd className="mt-1 font-medium">
            {match.popular ? "Yes" : "No"}
          </dd>
        </div>

        <div>
          <dt className="text-muted-foreground">Sources</dt>
          <dd className="mt-1 font-medium">
            {match.sources.length}
          </dd>
        </div>

      </dl>

    </Card>
  );
}
