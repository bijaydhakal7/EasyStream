import { Skeleton } from "@/components/ui/skeleton";

export function SportsSkeleton() {
  return (
    <div className="flex gap-3 overflow-hidden">
      {Array.from({ length: 7 }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-10 w-28 rounded-full"
        />
      ))}
    </div>
  );
}