/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui"],
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;