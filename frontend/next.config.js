/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    ENABLE_PQC: process.env.NEXT_PUBLIC_ENABLE_PQC === "true",
    PQC_ALGORITHM: process.env.NEXT_PUBLIC_PQC_ALGORITHM,
    DEPLOYMENT_ENV: process.env.NEXT_PUBLIC_DEPLOYMENT_ENV
  },

  images: {
    domains: ["cdn.qcehub.com", "avatars.githubusercontent.com"]
  },

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, max-age=0" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" }
        ]
      }
    ];
  },

  i18n: {
    locales: ["en", "es", "fr", "de", "zh"],
    defaultLocale: "en"
  }
};

module.exports = nextConfig;
