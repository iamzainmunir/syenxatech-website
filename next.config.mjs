/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
