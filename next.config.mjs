/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Ensures all routes have a trailing slash
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
};

export default nextConfig;
