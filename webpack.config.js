var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/public/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist/public',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader", 
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};
