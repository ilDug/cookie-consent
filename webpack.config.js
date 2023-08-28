const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
// const sass = require('sass');

module.exports = {
    entry: './src/package',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [/node_modules/] 
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    // {
                    //     loader: 'sass-loader',
                    //     options: {
                    //         implementation: require('sass')
                    //     }
                    // },
                ]
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'cookie-consent-bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new webpack.ProvidePlugin({
            //   Popper: ['popper.js', 'default']
        }),
        new MiniCssExtractPlugin({
            filename: 'cookie-consent.css'
        })
    ],
};