export interface Team {
  name: string;
  badge: string;
}

export interface MatchSource {
  source: string;
  id: string;
}

export interface MatchTeams {
  home?: Team;
  away?: Team;
}

export interface Match {
  id: string;
  title: string;
  category: string;
  date: number;
  poster?: string;
  popular: boolean;
  teams?: MatchTeams;
  sources: MatchSource[];
}