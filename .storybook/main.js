const {
	appendLoaders,
	detectLoaders,
	getNumOptimizationLoadersInstalled,
} = require('next-optimized-images/lib/loaders');
const { showWarning } = require('next-optimized-images/lib/migrater');
const { getConfig } = require('next-optimized-images/lib/config');
const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.[tj]s[x]'],
	webpackFinal: async (config, { isServer }) => {
		let enrichedConfig = config;

		enrichedConfig.module.rules = [
			{
				test: /\.(ts|tsx)$/,
				loader: require.resolve('babel-loader'),
				options: {
					presets: [require.resolve('babel-preset-react-app')],
				},
			},
			{
				test: /\.(css)$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
					'postcss-loader',
				],
			},
			{
				test: /\.(eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
				loader: require.resolve('file-loader'),
				query: {
					name: 'static/media/[name].[hash:8].[ext]',
				},
			},
		];

		// detect all installed loaders
		const detectedLoaders = detectLoaders(path.join() + '../');

		// show a warning if images should get optimized but no loader is installed
		if (getNumOptimizationLoadersInstalled(detectedLoaders) === 0 && isServer) {
			showWarning();
		}

		// append loaders
		enrichedConfig = appendLoaders(
			config,
			getConfig({
				imagesPublicPath: url => url,
				imagesOutputPath: url => url,
			}),
			detectedLoaders,
			isServer,
			true,
		);

		enrichedConfig.resolve.extensions.push('.ts', '.tsx');
		enrichedConfig.resolve.alias = {
			...enrichedConfig.resolve.alias,
			'~': path.resolve(__dirname, '../')
		};

		return enrichedConfig;
	},
	addons: [
		'@storybook/addon-knobs/register',
		'@storybook/addon-actions/register',
		'@storybook/addon-viewport/register',
	],
};
