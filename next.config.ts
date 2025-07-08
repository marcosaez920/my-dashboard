import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'previews.123rf.com'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      },
    ]
  }
};

export default nextConfig;
