/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [ 'ui' ],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*'
            }
        ]
    }
}

module.exports = nextConfig
