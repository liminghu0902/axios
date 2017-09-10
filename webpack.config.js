var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/view/index/index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader']
			}
		]
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src')
		},
		extensions: ['.css', '.js']
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'src/view/index/index.html',
			filename: 'index.html',
			title: '首页',
			inject: true
		})
	]
}