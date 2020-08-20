const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    devServer: {
        historyApiFallback: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            component: path.resolve(__dirname, 'src/component/'),
            container: path.resolve(__dirname, 'src/container/'),
            service: path.resolve(__dirname, 'src/service/')
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader', options: { minimize: false } }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/index.html',
            filename: './index.html'
        })
    ]
}
