
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 模式 production development
    mode: 'development', 
    // 调试选项 source-map cheap-module-source-map eval-source-map cheap-module-eval-source-map
    // devtool: 'source-map',
    
    entry: './src/main.js',
    output: {
        // 输出文件目录，需要绝对路径
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名，产生哈希
        filename: 'bundle.js'
        // filename: 'bundle.[hash:8].js'
    },

    devServer: {
        // port: '8080', // 端口，默认8080
        // progress: true, // 进度条
        // compress: true, // 启动压缩

        contentBase: "./dist",  // 本地服务所加载页面的根目录
        // historyApiFallback: true, // 不跳转
        // inline: true  // 实时刷新
    },

    plugins: [
        // 该插件可以把index.html打包到bundle.js文件所属目录，跟着bundle走
        // 同时也会自动在index.html中注入script引用链接，并且引用的资源名称，也取决于打包的文件名称
        new HtmlWebpackPlugin({
            title: 'cms',
            template: './public/index.html', // 模版位置
            // filename: 'public/index.html', // 文件名

            // minify: { // 生成环境，压缩代码
            //     // 删除html双引号
            //     removeAttributeQuotes: true,
            //     // 压缩成一行
            //     collapseWhitespace: true
            // },
            // 文件哈希
            hash: true
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
            },
            {
                test: /(\.css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true  // 启用 css-modules
                        }
                    }
                ]
            }
        ]
    }

};



