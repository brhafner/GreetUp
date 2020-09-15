const path = require('path');
const webpack = require('webpack'); // remember to require this, because we DefinePlugin is a webpack plugin
const dotenv = require('dotenv').config({
    path: path.join(__dirname, '.env')
});

console.log(process.env)

module.exports = {
    context: __dirname,
    entry: './frontend/greetup.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*'],
        alias: {
            assets: path.resolve('./app/assets'), // Makes it easier to reference our assets in jsx files
            react: path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                // Ref images in rails app/assets
                test: /\.(jpg|jpeg|png)(\?.*)?$/, // Load only .jpg .jpeg, and .png files
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name][md5:hash].[ext]', // Name of bundled asset
                        outputPath: 'webpack-assets/', // Output location for assets. Final: `app/assets/webpack/webpack-assets/`
                        publicPath: '/assets/webpack-assets/' // Endpoint asset can be found at on Rails server
                    }
                }
            }
            // {
            //     // add loader for mp4/ vids
            //     test: /\.(mp4|svg|gif)$/,
            //     use: {.
            //         loader: "file-loader",
            //         options: {
            //             name: "[name].[hash].[ext]"
            //         }
            //     }
            // }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed),
        }),
    ],
    devtool: 'source-map'
};