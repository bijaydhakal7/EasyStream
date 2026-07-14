import { IMAGE_BASE_URL } from "../constants";

export function getBadgeUrl(badge?: string) {
  if (!badge) {
    return "/images/placeholder-team.webp";
  }

  return `${IMAGE_BASE_URL}/badge/${badge}.webp`;
}