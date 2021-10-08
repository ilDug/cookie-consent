
const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

/** cambiare in fase di production */
const mode = "development";

module.exports = {
    entry: './src/index.ts',
    devServer: {
        static: './',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // fallback to style-loader in development
                    // process.env.NODE_ENV !== "production"
                    //     ? "style-loader"
                    //     : MiniCssExtractPlugin.loader,
                    // MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            //{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml' },
            //{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff" },
            //{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff" },
            //{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream" },
            //{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader', options: { "mimetype": "image/svg+xml" } },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader", options: { "mimetype": "application/font-woff" } },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader", options: { "mimetype": "application/font-woff" } },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader", options: { "mimetype": "application/octet-stream" } },

        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.ProvidePlugin({
            //   $: 'jquery',
            //   jQuery: 'jquery',
            //   'window.jQuery': 'jquery',
            //   Popper: ['popper.js', 'default']
        }),
        // new MiniCssExtractPlugin({
        //     filename: "styles.css"
        // })
    ],
    watch: true,
    mode: mode
};