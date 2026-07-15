import Image from "next/image";

import { getBadgeUrl } from "../utils";

interface TeamBadgeProps {
  badge?: string;
  name?: string;
  size?: number;
}

export function TeamBadge({
  badge,
  name,
  size = 44,
}: TeamBadgeProps) {
  return (
    <Image
      src={getBadgeUrl(badge)}
      alt={name ?? "Team"}
      width={size}
      height={size}
      loading="lazy"
      className="rounded-full object-contain"
    />
  );
}