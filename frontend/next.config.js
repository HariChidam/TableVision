module.exports = {
  experimental: {
    plugins: ["@next/plugin-rewrites"],
  },
  async rewrites() {
    return [
      {
        source: "/detect/:id/:path*",
        destination: "http://localhost:5000/detect/:id/:path*",
      },
    ];
  },
};