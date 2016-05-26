var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './app/app'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'eslint-loader',
          },
        ],
        loaders: [{
            test: /\.jsx?$/,
            include: [path.resolve(__dirname, "app")],
            loaders: ['react-hot', 'babel'],
        },
        {
            test: /\.scss$/,
            include: [path.resolve(__dirname, "app")],
            loader: 'style!css!postcss!sass',
        },
        {
            test: /(\.jsx|\.js)$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: './app',
        debug: true
    },
    postcss: [
       autoprefixer(),
    ],

};