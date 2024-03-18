/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'image.tmdb.org',
        port: '',
      },
    ]
  }
};

export default nextConfig;
