/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,

  // Send www.nextgenhr.ae to nextgenhr.ae so Google sees one version of every page.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nextgenhr.ae" }],
        destination: "https://nextgenhr.ae/:path*",
        permanent: true,
      },
      // Old addresses Google still remembers, sent to the closest page on this site.
      { source: "/career", destination: "/#jobs", permanent: true },
      { source: "/consultancy", destination: "/services/hr-consultancy", permanent: true },
      { source: "/sectors/healthcare", destination: "/sectors", permanent: true },
      { source: "/services/workforce-recruitment", destination: "/services/recruitment", permanent: true },
    ];
  },

  // Basic security headers on every response.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'; upgrade-insecure-requests" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
