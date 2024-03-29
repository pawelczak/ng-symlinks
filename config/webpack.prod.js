const webpack = require('webpack'),
    webpackMerge = require('webpack-merge'),
    commonConfig = require('./webpack.common.js'),
    DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

const config = webpackMerge(commonConfig, {

    devtool: 'source-map',

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: { screw_ie8 : true },
            compress: { screw_ie8: true },
            comments: false
        }),
        new DefinePlugin({
            'ENV': JSON.stringify(ENV)
        })
    ]
});

module.exports = config;
