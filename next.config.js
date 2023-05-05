// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

/**
* @type {import('next').NextConfig}
*/

const nextConfig = {
  experimental: {
      outputStandalone: true,
  }
}

module.exports = nextConfig