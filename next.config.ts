
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
    images: {
    domains: ["utfs.io"], // 👈 allow UploadThing's image host
  },
};



export default nextConfig;
