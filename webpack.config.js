const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    mode: "development",
    target: 'node',
    node: {
        fs: 'empty'
    },
    context: resolve('src'),
    entry:
        {
            './module': './module.js',
            'components/config': './components/config.js'
        },
    output: {
        path: resolve('dist'),
        filename: '[name].js',
        libraryTarget: 'amd'
    },
    externals: [
        // remove the line below if you don't want to use builtin versions
        'jquery', 'lodash', 'moment', 'angular',
        'react', 'react-dom', '@grafana/ui',
        function (context, request, callback) {
            var prefix = 'grafana/';
            if (request.indexOf(prefix) === 0) {
                return callback(null, request.substr(prefix.length));
            }
            callback();
        }
    ],
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CopyWebpackPlugin([
            {from: 'plugin.json'},
            //{from: 'components/*'},
            {from: 'dashboards/*'},
            //{from: 'datasource/*'},
            {from: 'img/*'},
            {from: 'panel/*'},
            {from: 'css/*'},
            {from: '../README.md'},
        ]),

    ],
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};