import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'previews.123rf.com'
      },
    ]
  }
};

export default nextConfig;
