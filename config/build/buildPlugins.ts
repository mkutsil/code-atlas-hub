import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';
import path from 'path';

export function buildPlugins({ paths, isDev, apiUrl }: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, '..', '..', 'public', 'logos'),
                to: 'logos',
              },
            ],
          }),
          
          
        new DefinePlugin({
            IS_DEV: JSON.stringify(isDev),
            API_URL: JSON.stringify(apiUrl),
        }),
        ...(isDev ? [ new HotModuleReplacementPlugin() ] : []),
        ...(isDev ? [ new ReactRefreshWebpackPlugin() ] : []),
        ...(isDev ? [ new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }), ] : []),
    ];
}