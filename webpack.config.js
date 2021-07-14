const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		hot: true,
		open: true,
		port: 1080,
		clientLogLevel: 'silent',
		contentBase: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								"targets": "defaults" 
							}],
							'@babel/preset-react'
						]
					}
				}]
			},
			{ 
                test: /\.less$/,
                use: [ 
                    'style-loader',
                    'css-loader', 
                    'less-loader'
                ]
            }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	// plugins: [
	// 	new HtmlWebpackPlugin({
	// 		title: 'Development',
	// 		template: path.resolve(__dirname, 'dist', 'index.html'),
	// 	}),
	// ],
};

module.exports = config;