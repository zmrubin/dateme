import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local images only (no external domains needed)
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
