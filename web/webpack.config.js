
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');
const BOOTSTRAP_DIR = path.resolve(__dirname, './node_modules/bootstrap');
const CSS_DIRS = [ APP_DIR, BOOTSTRAP_DIR ];
const INLINE_IMAGES_DIR = path.resolve(__dirname, 'app/images/inline');
const STD_IMAGES_DIR = path.resolve(__dirname, 'app/images/files');

const server = (process.env.server ? process.env.server : 'http://localhost:8080/server');

console.log("arg server [" + server + "]");

let config = {};

if (process.env.NODE_ENV == 'production') {
    config = {
        resolve: {
            // sicherstellen dass Webpack imported Dateien entsprechend sucht und auch finden kann
            extensions: ['*', '.js', '.jsx']
        },
        plugins: [
            new (webpack.optimize.OccurenceOrderPlugin || webpack.optimize.OccurrenceOrderPlugin)(),
            new HtmlWebpackPlugin({
                hash: false,
                filename: 'index.html',
                template: './app/index-prod.html',
                environment: process.env.NODE_ENV,
                inject: 'body'
            }),
            new ExtractTextPlugin("styles.[contenthash].css"),

        ],
        entry: [
            'whatwg-fetch',
            APP_DIR + '/index-prod.js'
        ],
        output: {
            path: BUILD_DIR,
            filename: 'bundle-prod.[hash].js'
        },
        module: {
            rules: [
                {test: /\.(jpg|png)$/, use: 'file-loader?name=./images/[name].[hash].[ext]', include: STD_IMAGES_DIR},
                {test: /\.(jpg|png)$/, use: 'url-loader?limit=25000', include: INLINE_IMAGES_DIR},
                {test: /\.css$/, include: CSS_DIRS, use: ExtractTextPlugin.extract({ use: [ { loader: "css-loader"} ]}) },
                //{test: /\.css$/, include: CSS_DIRS, use: ["style-loader", "css-loader"]},
                {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, include: CSS_DIRS, use: "file-loader"},
                {
                    test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
                    include: CSS_DIRS,
                    use: "url-loader?limit=10000&mimetype=application/font-woff"
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    include: CSS_DIRS,
                    use: "url-loader?limit=10000&mimetype=application/octet-stream"
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    include: CSS_DIRS,
                    use: "url-loader?limit=10000&mimetype=image/svg+xml"
                },
                {
                    test: /\.js?/,
                    include: APP_DIR,
                    use: 'babel-loader'
                }
            ]
        },
        devtool: 'cheap-module-source-map'
    };
} else {
    config = {
        resolve: {
            // sicherstellen dass Webpack imported Dateien entsprechend sucht und auch finden kann
            extensions: ['*', '.js', '.jsx']
        },
        plugins: [
            new (webpack.optimize.OccurenceOrderPlugin || webpack.optimize.OccurrenceOrderPlugin)(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new HtmlWebpackPlugin({
                hash: false,
                filename: 'index.html',
                template: './app/index-dev.html',
                environment: process.env.NODE_ENV,
                inject: false
            })
        ],
        entry: [
            'whatwg-fetch',
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            APP_DIR + '/index-dev.js'
        ],
        output: {
            path: BUILD_DIR,
            filename: 'bundle-dev.js'
        },
        module: {
            rules: [
                {test: /\.(jpg|png)$/, use: 'file-loader?name=./images/[name].[hash].[ext]', include: STD_IMAGES_DIR},
                {test: /\.(jpg|png)$/, use: 'url-loader?limit=25000', include: INLINE_IMAGES_DIR},
                {test: /\.css$/, include: CSS_DIRS, use: ["style-loader", "css-loader"]},
                {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, include: CSS_DIRS, use: "file-loader"},
                {
                    test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
                    include: CSS_DIRS,
                    use: "url-loader?limit=10000&mimetype=application/font-woff"
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    include: CSS_DIRS,
                    use: "url-loader?limit=10000&mimetype=application/octet-stream"
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    include: CSS_DIRS,
                    use: "url-loader?limit=10000&mimetype=image/svg+xml"
                },
                {
                    test: /\.js?/,
                    include: APP_DIR,
                    use: 'babel-loader'
                }
            ]
        },
        devtool: 'source-map',
        devServer: {
            hot: true,
            port: '3000',
            host: 'localhost',
            contentBase: 'public',
            historyApiFallback: true,
            // It suppress error shown in console, so it has to be set to false.
            quiet: false,
            // It suppress everything except error, so it has to be set to false as well
            // to see success build.
            noInfo: false,
            stats: {
                // Config for minimal console.log mess.
                assets: false,
                colors: true,
                version: false,
                hash: false,
                timings: false,
                chunks: true,
                chunkModules: false
            },
            proxy: {
                '/rest': {
                    target: server,
                }
            }
        }
    };
}

// export der Konfiguration (damit das CLI, sie aufpicken kann)
module.exports = config;
