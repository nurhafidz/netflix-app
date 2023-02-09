/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        fontLoaders: [
            {
                loader: "@next/font/google",
                options: { subsets: ["latin"], preload: true },
            },
        ],
        compilerOptions: {
            paths: {
                "@/components/*": ["components/*"],
                "@/data/*": ["data/*"],
            },
        },
        images: {
            domains: ["cdn.discordapp.com", "avatars.githubusercontent.com"],
        },
    },
};

module.exports = nextConfig;

