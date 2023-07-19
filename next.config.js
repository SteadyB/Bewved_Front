/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/our/api/:path*",
                destination: "http://localhost:5000/api/our/api/:path*"
            }
        ]
    }
}

module.exports = nextConfig
