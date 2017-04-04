
module.exports = function (cfg) {
    return {
        resolve: {
            // sicherstellen dass Webpack imported Dateien entsprechend sucht und auch finden kann
            extensions: ['*', '.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.(jpg|png)$/,
                    use: 'file-loader?name=./images/[name].[hash].[ext]',
                    include: cfg.STD_IMAGES_DIR
                },
                {test: /\.(jpg|png)$/, use: 'url-loader?limit=25000', include: cfg.INLINE_IMAGES_DIR},

                {test: /\.css$/, include: cfg.CSS_DIRS, use: ["style-loader", "css-loader"]},
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
                    include: [ cfg.APP_DIR, cfg.TEST_DIR ],
                    use: ['istanbul-instrumenter-loader', 'babel-loader' ]
                }

            ]
        },
        devtool: 'inline-source-map'
    };
};


