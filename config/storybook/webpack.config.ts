import webpack, { RuleSetRule } from 'webpack';
import path from 'path';

import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths:BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
     
    const fileLoaderRule = config.module?.rules?.find(
        (rule): rule is RuleSetRule => 
            Boolean(rule && typeof rule === 'object' && 'test' in rule && rule.test instanceof RegExp && rule.test.test('.svg'))
    );
    
    if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/;
    }
    config.module?.rules?.push({
        test: /\.svg$/,
        enforce: 'pre',
        loader: require.resolve('@svgr/webpack')
    });

    config.module?.rules?.push(buildCssLoader(true));

    return config;
};