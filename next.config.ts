import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  allowedDevOrigins: [
    "10.164.206.119",
  ],

  basePath: "/luxury-restaurant",
  assetPrefix: "/luxury-restaurant",
};

export default nextConfig;