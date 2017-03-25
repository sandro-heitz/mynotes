
module.exports = function (cfg) {
    return {
        resolve: {
            // sicherstellen dass Webpack imported Dateien entsprechend sucht und auch finden kann
            extensions: ['*', '.js', '.jsx']
        },
        plugins: [
            new cfg.webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            }),
            new (cfg.webpack.optimize.OccurenceOrderPlugin || cfg.webpack.optimize.OccurrenceOrderPlugin)(),
            new cfg.HtmlWebpackPlugin({
                hash: false,
                filename: 'index.html',
                template: './app/index-prod.html',
                environment: process.env.NODE_ENV,
                inject: 'body'
            }),
            new cfg.ExtractTextPlugin("styles.[contenthash].css"),
            new cfg.OptimizeCssAssetsPlugin({
                //assetNameRegExp: /\.optimize\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: {removeAll: true } },
                canPrint: true
            }),
            new cfg.CleanWebpackPlugin([ cfg.BUILD_DIR ], {
                verbose: true,
                dry: false,
            })
        ],
        entry: [
            'whatwg-fetch',
            cfg.APP_DIR + '/index-prod.js'
        ],
        output: {
            path: cfg.BUILD_DIR,
            filename: 'bundle-prod.[hash].js'
        },
        module: {
            rules: [
                {test: /\.(jpg|png)$/, use: 'file-loader?name=./images/[name].[hash].[ext]', include: cfg.STD_IMAGES_DIR},
                {test: /\.(jpg|png)$/, use: 'url-loader?limit=25000', include: cfg.INLINE_IMAGES_DIR},
                {test: /\.css$/, include: cfg.CSS_DIRS, use: cfg.ExtractTextPlugin.extract({ use: [ { loader: "css-loader"} ]}) },
                //{test: /\.css$/, include: cfg.CSS_DIRS, use: ["style-loader", "css-loader"]},
                {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, include: cfg.CSS_DIRS, use: "file-loader"},
                {
                    test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
                    include: cfg.CSS_DIRS,
                    use: "url-loader?limit=10000&mimetype=application/font-woff"
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    include: cfg.CSS_DIRS,
                    use: "url-loader?limit=10000&mimetype=application/octet-stream"
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    include: cfg.CSS_DIRS,
                    use: "url-loader?limit=10000&mimetype=image/svg+xml"
                },
                {
                    test: /\.js?/,
                    include: cfg.APP_DIR,
                    use: 'babel-loader'
                }
            ]
        },
        devtool: 'cheap-module-source-map'
    };
};

