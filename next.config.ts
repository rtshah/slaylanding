import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // The following are optional depending on your deployment needs
  // basePath: '/your-repo-name', // Add this if your site isn't being served from the root domain
  // assetPrefix: '/your-repo-name', // Add this if your assets aren't being served correctly
};

export default nextConfig;