'use strict';
var path = require('path');
var webpack = require('webpack');

var config = {
    devtool: 'source-map',
    entry: {
        app: ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server', './src/index']
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/public/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loaders: ['style/useable', 'css']},
            {test: /\.(png|jpg|woff|woff2|gif)$/, loader: 'url-loader?limit=8192'},
            {test: /\.json$/, loader: "json"},
            {test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'src')},
            {test: /\.(svg)$/i, loader: 'svg-sprite-loader', include: [require.resolve('antd-mobile').replace(/warn\.js$/, '')]}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'DEBUG': true
            }
        })
    ]
};
module.exports = config;