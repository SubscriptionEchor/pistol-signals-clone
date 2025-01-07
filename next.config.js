// next.config.js
/** @type {import('next').NextConfig} */
module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        return config;
    },
    sassOptions: {
        includePaths: ['./src/styles',],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: '/wikipedia/**',
            },
        ],
    },
};