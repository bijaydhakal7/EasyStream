export function getPosterUrl(poster?: string) {
  if (!poster) {
    return "/images/placeholder-poster.webp";
  }

  /**
   * API returns something like:
   *
   * /api/images/proxy/abc123
   */

  if (poster.startsWith("/")) {
    return `https://streamed.pk${poster}.webp`;
  }

  return `https://streamed.pk/${poster}.webp`;
}