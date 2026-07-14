import { WatchContainer } from "./WatchContainer";

interface WatchPageProps {
  params: Promise<{
    matchId: string;
  }>;
}

export default async function WatchPage({
  params,
}: WatchPageProps) {
  const { matchId } = await params;

  return (
    <WatchContainer
      key={matchId}
      matchId={matchId}
    />
  );
}