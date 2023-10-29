/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		outputFileTracingIncludes: {
			'/*': ['./content/**/*'],
		},
		serverActions: true,
	},
};

module.exports = nextConfig
