const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack.config');

module.exports = merge(config, {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        hot: true,
        port: 8080,
        open: true,
        stats: {
            colors: true,
            chunks: false,
            hash: false,
            version: false,
            timings: false,
            assets: false,
            modules: false,
            reasons: false,
            source: false
        },
        historyApiFallback: true,
        contentBase: './public'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        })
    ]
});
