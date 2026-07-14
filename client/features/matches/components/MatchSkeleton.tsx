import { Skeleton } from "@/components/ui/skeleton";

export function MatchSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-4 space-y-4">

      <Skeleton className="h-40 w-full rounded-lg" />

      <div className="flex items-center justify-between">

        <Skeleton className="h-10 w-10 rounded-full" />

        <Skeleton className="h-5 w-20" />

        <Skeleton className="h-10 w-10 rounded-full" />

      </div>

      <Skeleton className="h-4 w-3/4" />

      <Skeleton className="h-4 w-1/2" />

    </div>
  );
}