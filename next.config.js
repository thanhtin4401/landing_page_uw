/** @type {import('next').NextConfig} */
const nextConfig = {
  babel: {
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          ssr: true,
          displayName: true,
        },
      ],
    ],
  },
};

module.exports = nextConfig;
