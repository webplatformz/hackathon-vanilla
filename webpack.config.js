const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devServerConfig = require('./config/devServer');
const validate = require('webpack-validator');

const comonConfig = {

    entry: "./app/app.js",

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['typecheck']
                }
            }
        ]
    }
};

let config = merge(
    comonConfig,
    devServerConfig.devServer({
        host: process.env.HOST,
        port: 3000
    })
);

module.exports = validate(config);
