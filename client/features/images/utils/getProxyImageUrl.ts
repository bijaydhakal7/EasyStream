import { IMAGE_BASE_URL } from "../constants";

export function getProxyImageUrl(imageId: string) {
  return `${IMAGE_BASE_URL}/proxy/${imageId}.webp`;
}