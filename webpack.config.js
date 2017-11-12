const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const config = {
    context: path.join(__dirname, 'assets'),
    entry: {
        main: './index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        // Special compilation rules
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // in that case css in the separate file and hot push does not work need F5
                // but it looks like normal
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                    },
                }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        port: 3000,
        contentBase: './dist',
        hot: true
    }
};

module.exports = config;

// in that case all styles in the html style tag and hot push works properly
/* use: [
'style-loader',
'css-loader'
]
*/