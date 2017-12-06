/* global __dirname, require, module*/

const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

let libraryName = 'polaris-vue';
let libraryNameCamelCase= 'PolarisVue';

let plugins = [], outputFile;

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }));
    outputFile = libraryName + '.min.js';
} else {
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }));
    outputFile = libraryName + '.js';
}

plugins.push(new ExtractTextPlugin(libraryName+".css"));

const config = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: outputFile,
        library: libraryNameCamelCase,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css-loader")
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    },
    plugins: plugins,
    externals: {
        vue: 'vue'
    }
};

module.exports = config;
