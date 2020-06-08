
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', // production development
    // devtool: 'source-map',  // source-map cheap-module-source-map eval-source-map cheap-module-eval-source-map
    
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: "./dist",  // 本地服务所加载页面的根目录
        // historyApiFallback: true, // 不跳转
        // inline: true  // 实时刷新
    },

    plugins: [
        // 该插件可以把index.html打包到bundle.js文件所属目录，跟着bundle走
        // 同时也会自动在index.html中注入script引用链接，并且引用的资源名称，也取决于打包的文件名称
        new HtmlWebpackPlugin({
            title: 'cms',
            template: './public/index.html'
            // filename: 'public/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /(\.js)$/,
                exclude: /nodel_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }

};



