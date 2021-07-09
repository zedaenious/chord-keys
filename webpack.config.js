const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                    'style-loader',
                    'css-loader', 
                    'less-loader'
                ],
            },
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),
	],
};

module.exports = config;