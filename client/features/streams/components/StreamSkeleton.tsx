import { Skeleton } from "@/components/ui/skeleton";

export function StreamSkeleton() {
  return (
    <div className="space-y-4">

      <Skeleton
        className="
        aspect-video
        w-full
        rounded-xl
        "
      />

      {Array.from({
        length: 4,
      }).map((_, i) => (
        <Skeleton
          key={i}
          className="
          h-20
          rounded-xl
          "
        />
      ))}

    </div>
  );
}