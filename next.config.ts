import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/fahrwerk-muenster',
  assetPrefix: '/fahrwerk-muenster',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
