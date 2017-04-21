
module.exports = function (cfg) {
    return {
        resolve: {
            // sicherstellen dass Webpack imported Dateien entsprechend sucht und auch finden kann
            extensions: ['*', '.js', '.jsx']
        },
        plugins: [
            new cfg.webpack.NamedModulesPlugin(),
            new (cfg.webpack.optimize.OccurenceOrderPlugin || cfg.webpack.optimize.OccurrenceOrderPlugin)(),
            new cfg.webpack.HotModuleReplacementPlugin(),
            new cfg.webpack.NoEmitOnErrorsPlugin(),

            new cfg.HtmlWebpackPlugin({
                chunks: ['signin'],
                hash: false,
                filename: 'signin.html',
                template: './app/signin-dev.html',
                environment: process.env.NODE_ENV,
                inject: false
            }),
            new cfg.HtmlWebpackPlugin({
                chunks: ['index'],
                hash: false,
                filename: 'index.html',
                template: './app/index-dev.html',
                environment: process.env.NODE_ENV,
                inject: false
            }),

            new cfg.CleanWebpackPlugin([cfg.BUILD_DIR], {
                verbose: true,
                dry: false,
            })
        ],
        entry: {
            signin: [
                'whatwg-fetch',
                'webpack-dev-server/client?http://localhost:3000',
                'webpack/hot/only-dev-server',
                'react-hot-loader/patch',
                cfg.APP_DIR + '/signin-dev.js'],
            index: [
                'whatwg-fetch',
                'webpack-dev-server/client?http://localhost:3000',
                'webpack/hot/only-dev-server',
                'react-hot-loader/patch',
                cfg.APP_DIR + '/index-dev.js']
        },
        output: {
            path: cfg.BUILD_DIR,
            filename: '[name]-dev.js'
        },
        module: {
            rules: [
                {
                    test: /\.(jpg|png)$/,
                    use: 'file-loader?name=./images/[name].[hash].[ext]',
                    include: cfg.STD_IMAGES_DIR
                },
                {test: /\.(jpg|png)$/, use: 'url-loader?limit=25000', include: cfg.INLINE_IMAGES_DIR},
                //{test: /\.css$/, include: cfg.CSS_DIRS, use: cfg.ExtractTextPlugin.extract({ use: [ { loader: "css-loader"} ]}) },
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
                    include: cfg.APP_DIR,
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
                    target: cfg.server,
                }
            }
        }
    };
};
