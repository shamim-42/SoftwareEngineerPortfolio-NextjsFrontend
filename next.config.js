/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // enabled react-strict mode
  redirects() {
    // if  a path doesn't exist in pages folder we can redirect it like this
    return [
      {
        source: '/undefined-page-path',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [
      'shamims-world.s3.ap-southeast-1.amazonaws.com',
    ],
  },
  ...(process.env.NODE_ENV === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
  staticPageGenerationTimeout: 1000,
};

module.exports = nextConfig;
