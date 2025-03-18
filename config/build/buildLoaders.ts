import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader'

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: [ '@svgr/webpack' ],
    };

    const fileLoader =  {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoader(isDev);
	
    return [
        svgLoader,
        fileLoader,
        typescriptLoader,
        cssLoader,
    ];
}