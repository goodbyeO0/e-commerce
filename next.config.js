/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.myanimelist.net',
            },
        ],
    },
}
