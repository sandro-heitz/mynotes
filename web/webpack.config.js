
const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');
const BOOTSTRAP_DIR = path.resolve(__dirname, './node_modules/bootstrap');
const CSS_DIRS = [ APP_DIR, BOOTSTRAP_DIR ];
const INLINE_IMAGES_DIR = path.resolve(__dirname, 'app/images/inline');
// AENDERUNG
const STD_IMAGES_DIR = path.resolve(__dirname, 'app/images/files');

let config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename:  'bundle.js'
    },
    module: {
        rules: [
            {test: /\.(jpg|png)$/, use: 'file-loader?name=./images/[name].[hash].[ext]', include: STD_IMAGES_DIR },
            {test: /\.(jpg|png)$/, use: 'url-loader?limit=25000', include: INLINE_IMAGES_DIR },
            {test: /\.css$/, include: CSS_DIRS, use: [ "style-loader", "css-loader" ] },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, include: CSS_DIRS, use: "file-loader" },
            {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, include: CSS_DIRS, use: "url-loader?limit=10000&mimetype=application/font-woff" },
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, include: CSS_DIRS, use: "url-loader?limit=10000&mimetype=application/octet-stream" },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, include: CSS_DIRS, use: "url-loader?limit=10000&mimetype=image/svg+xml" },
            {
                test: /\.js?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }
        ]
    }
};

// export der Konfiguration (damit das CLI, sie aufpicken kann)
module.exports = config;
