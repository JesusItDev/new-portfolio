import type { NextConfig } from "next";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

const nextConfig: NextConfig = {
  define: {
    "process.env": process.env,
  },
};

export default nextConfig;
