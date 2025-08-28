const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { watchFile } = require('fs')

module.exports = {
    mode: 'development',

    entry: {
        bundle: path.resolve(__dirname, 'src/scripts/index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },

    devtool: 'source-map',

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        watchFiles: ['src/**/*.html'],
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },

            {
                test: /\.( png | jpg | jpeg | svg | gif )$/i,
                type: 'asset/resource',
            },

            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tic-Tac-Toe',
            filename: 'index.html',
            template: 'src/pages/home.html',
        }),
        new MiniCssExtractPlugin()
    ]
}