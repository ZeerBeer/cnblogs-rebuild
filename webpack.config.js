const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'cnblogs-next-muse.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        jquery: 'jQuery',
        themeConfig: 'themeConfig'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'custom.css',
        }),
        new OptimizeCssAssetsPlugin({})
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
};