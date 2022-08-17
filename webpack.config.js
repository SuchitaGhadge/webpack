const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const webpackConfig = {
    entry : path.resolve(__dirname, "src", "index.js"),

    // add clean:true to output to keep the dist folder clean
    output : {
        filename : "[name].[contenthash].bundle.js",   // <-- small change that creates a unique hash for data. If data does not change, the hash does not change. If the hash does not change, name does not change. If the name does not change, browser will not downnload that file again.
        path : path.resolve(__dirname, "dist"),
        clean : true
    },

    module: {
        rules: [
            {
                test : /\.js$/,
                exclude : /(node_modules)/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : ["@babel/preset-env"]
                    }
                }
            },
            {
                test : /\.css$/i,
                use : ["style-loader", "css-loader"]
            },
            {
                test : /\.(png|svg|jpg|jpeg|gif)$/i,
                type : "asset"
            }
        ]
    },

    plugins : [
        new HtmlWebpackPlugin({
            title : "vanilaJS app",
            template : path.resolve(__dirname, "src", "index.html")
        })
    ],

    optimization: {
		splitChunks: {
			cacheGroups: {
				node_vendors: {
					name: "vendor",
					test: /[\\/]node_modules[\\/]/,
					chunks: "all",
					priority: 1
				}
			}
		}
	},

    mode : "production"
}

module.exports = webpackConfig