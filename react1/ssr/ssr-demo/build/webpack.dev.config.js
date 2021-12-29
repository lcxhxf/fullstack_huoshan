const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')


module.exports = merge(baseConfig, {
    devserver: {
        port: 8000
    },
    pligin: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: this.resolve('template/app.html')
        })
    ]
})