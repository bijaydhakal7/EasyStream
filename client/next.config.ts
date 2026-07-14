import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "streamed.pk",
      },
    ],
    // Poster/badge images are already served as optimized webp
    // by the upstream API, so let next/image pass them through
    // without re-encoding on every request.
    minimumCacheTTL: 60 * 60 * 24,
  },
};

export default nextConfig;
