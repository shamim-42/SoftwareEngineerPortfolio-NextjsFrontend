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
      'localhost:1337',
      'localhost',
      'res.cloudinary.com',
      '1.bp.blogspot.com',
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
};

module.exports = nextConfig;
