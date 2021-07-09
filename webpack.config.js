const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const contextPlugin = isProduction ? new MiniCssExtractPlugin() : () => {};

const config = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-env',
						'@babel/preset-react',
					],
				},
			},
			{
				test: /\.less$/,
				use: [
					isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					'less-loader',
				],
			},
		],
	},
	plugins: [
		contextPlugin,
		new HtmlWebpackPlugin({
			title: 'Development',
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),
	],
};

module.exports = config;