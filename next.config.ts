import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/fahrwerk-muenster',
  assetPrefix: '/fahrwerk-muenster/',
};

export default nextConfig;
