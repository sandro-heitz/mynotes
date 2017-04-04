
var webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({
        browsers: [ 'PhantomJS' ], //run in PhantomJS
        singleRun: true, //just run once by default
        frameworks: [ 'mocha' ], //use the mocha test framework
        files: [
            './karma.tests.js' //just load this file
        ],
        preprocessors: {
            './karma.tests.js': [ 'webpack' ] //preprocess with webpack and our sourcemap loader
        },
        reporters: ['dots', 'coverage'],
        coverageReporter: { // important!
            dir: 'coverage',
            reporters: [
                {
                    type: 'html',
                    subdir: '.'
                }]

        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: "none"
        },
    });
}


