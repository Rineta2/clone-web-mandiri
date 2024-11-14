/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mandirikartukredit.com",
        pathname: "/uploads/media/banner/**",
      },
    ],
  },
};

export default nextConfig;
