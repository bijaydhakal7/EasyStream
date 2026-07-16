export function getPosterUrl(poster?: string) {
  if (!poster) {
    return "/images/bijay.jpg";
  }

  /**
   * API returns something like:
   *
   * /api/images/proxy/abc123
   */

  if (poster.startsWith("/")) {
    return `https://streamed.pk${poster}`;
  }

  return `https://streamed.pk/${poster}`;
}