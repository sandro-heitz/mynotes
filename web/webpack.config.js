
const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');
// AENDERUNG
const BOOTSTRAP_DIR = path.resolve(__dirname, './node_modules/bootstrap');
const CSS_DIRS = [ APP_DIR, BOOTSTRAP_DIR ];

let config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename:  'bundle.js'
    },
    module: {
        loaders: [
            // AENDERUNG : css laden und transformieren
            // AENDERUNG : css und font files laden und transformieren (mit speziellen include Verzeichnissen)
            { test: /\.css$/, include: CSS_DIRS, loader: "style-loader!css-loader" },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, include: CSS_DIRS, loader: "file" },
            {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, include: CSS_DIRS, loader: "url?limit=10000&mimetype=application/font-woff" },
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, include: CSS_DIRS, loader: "url?limit=10000&mimetype=application/octet-stream" },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, include: CSS_DIRS, loader: "url?limit=10000&mimetype=image/svg+xml" },
            {
                test: /\.js?/,
                include: APP_DIR,
                loader: 'babel'
            }
        ]
    }
};

// export der Konfiguration (damit das CLI, sie aufpicken kann)
module.exports = config;
