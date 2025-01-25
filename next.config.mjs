/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.json$/,
            type: "json",
            use: ["json-loader"],
        });
        return config;
    },
    images: {
        domains: ['picsum.photos'],
    },
}

export default nextConfig
