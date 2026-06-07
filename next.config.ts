import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        {
          hostname: "assets.aceternity.com",
          protocol: "https",
          pathname: "/**",
        },
        {
          hostname: "res.cloudinary.com",
          protocol: "https",
          pathname: "/**",
        },
        {
          hostname: "images.unsplash.com",
          protocol: "https",
          pathname: "/**",
        }
    ],
  },

};

export default nextConfig;