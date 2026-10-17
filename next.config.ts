import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Cloud proxies may not forward the development WebSocket debug stream.
  // Keep hydration independent of that stream; production behavior is unchanged.
  experimental: { reactDebugChannel: false },
};

export default nextConfig;
