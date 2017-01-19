
const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');
const BOOTSTRAP_DIR = path.resolve(__dirname, './node_modules/bootstrap');
const CSS_DIRS = [ APP_DIR, BOOTSTRAP_DIR ];
const INLINE_IMAGES_DIR = path.resolve(__dirname, 'app/images/inline');
const STD_IMAGES_DIR = path.resolve(__dirname, 'app/images/files');


let config = {
    resolve: {
        // sicherstellen dass Webpack imported Dateien entsprechend sucht und auch finden kann
        extensions: ['', '.js', '.jsx']
    },
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename:  'bundle.js'
    },
    module: {
        loaders: [
            // AENDERUNG : bilder die wir nicht inline haben wollen
            { test: /\.(jpg|png)$/, loader: 'file-loader?name=./images/[name].[hash].[ext]', include: STD_IMAGES_DIR },
            { test: /\.(jpg|png)$/, loader: 'url-loader?limit=25000', include: INLINE_IMAGES_DIR },
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
