
const cfg = {};

cfg.path = require('path');
cfg.webpack = require('webpack');
cfg.ExtractTextPlugin = require("extract-text-webpack-plugin");
cfg.HtmlWebpackPlugin = require('html-webpack-plugin');
cfg.OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
cfg.CleanWebpackPlugin = require('clean-webpack-plugin');

cfg.BUILD_DIR = cfg.path.resolve(__dirname, 'public');
cfg.APP_DIR = cfg.path.resolve(__dirname, 'app');
cfg.TEST_DIR = cfg.path.resolve(__dirname, 'test');
cfg.BOOTSTRAP_DIR = cfg.path.resolve(__dirname, './node_modules/bootstrap');
cfg.CSS_DIRS = [ cfg.APP_DIR, cfg.BOOTSTRAP_DIR ];
cfg.INLINE_IMAGES_DIR = cfg.path.resolve(__dirname, 'app/images/inline');
cfg.STD_IMAGES_DIR = cfg.path.resolve(__dirname, 'app/images/files');

cfg.env = process.env.NODE_ENV;

cfg.server = (process.env.server ? process.env.server : 'http://localhost:8080/server');

console.log("arg server [" + cfg.server + "]");
console.log("arg env [" + cfg.env + ']');

if (cfg.env == 'production') {
    config = require('./webpack.prod')(cfg);
} else if (cfg.env == 'test') {
    config = require('./webpack.test')(cfg);
} else {
    config = config = require('./webpack.dev')(cfg);
}

// export der Konfiguration (damit das CLI, sie aufpicken kann)
module.exports = config;
