const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashBoardPlugin = require('webpack-dashboard/plugin');
const srcDir = resolve(__dirname, 'src');
module.exports = {
    entry: `${srcDir}/index.js`,
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader'],
            exclude: /node_modules/
        }, {
            test: /\.svg$/,
            loader: ['svg-inline-loader','react-svg-loader'],
             exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `public/index.html`
        }),
        new DashBoardPlugin()
    ]
}