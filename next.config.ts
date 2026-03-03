import type { NextConfig } from "next";

const nextConfig: NextConfig = {
reactStrictMode: true,
experimental:{
turbopackFileSystemCacheFofDev: true,
}

};

export default nextConfig;
