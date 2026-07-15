import Image from "next/image";

import { getPosterUrl } from "../utils";

interface MatchPosterProps {
  poster?: string;
  title: string;
}

export function MatchPoster({
  poster,
  title,
}: MatchPosterProps) {
  return (
    <div className="relative aspect-video">

      <Image
        src={getPosterUrl(poster)}
        alt={title}
        fill
        priority={false}
        loading="lazy"
        sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
        className="object-cover"
      />

    </div>
  );
}