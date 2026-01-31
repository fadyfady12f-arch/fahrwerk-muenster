import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fahrwerk-muenster.de',
      },
    ],
  },
};

export default nextConfig;
