// eslint-disable-next-line @typescript-eslint/no-var-requires
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            if (!options.defaultLoaders) {
                throw new Error(
                    'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade',
                );
            }

            const { dev, isServer } = options;
            const { cssModules, cssLoaderOptions, postcssLoaderOptions } = nextConfig;

            options.defaultLoaders.css = cssLoaderConfig(config, {
                extensions: ['pcss', 'css'],
                cssModules,
                cssLoaderOptions,
                postcssLoaderOptions,
                dev,
                isServer,
            });

            config.module.rules.push({
                test: /\.(css|pcss)$/,
                use: options.defaultLoaders.css,
            });

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options);
            }

            return config;
        },
    });
};
