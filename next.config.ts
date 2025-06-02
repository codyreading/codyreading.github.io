import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "https://codyreading.github.io/images",
      }
    ],
  },
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://codyreading.github.io/images/**')],
  },
}

export default nextConfig;
