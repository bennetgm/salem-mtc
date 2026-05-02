import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "calendar.google.com" },
      { protocol: "https", hostname: "610445.lightfolio.com" },
      { protocol: "https", hostname: "174837.lightfolio.com" }
    ]
  }
};

export default nextConfig;
