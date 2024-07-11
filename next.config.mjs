// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Ensure this is set for static export
    images: { unoptimized: true }
  };
  
  export default nextConfig;
  