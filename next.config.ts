import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
};

export default withSentryConfig(nextConfig, {
  org: "sergios-test-org",
  project: "nextjs-app",
  authToken: process.env.SENTRY_TOKEN,
  hideSourceMaps: true
});

