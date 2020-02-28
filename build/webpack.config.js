
var HtmlWebpackPlugin = require('html-webpack-plugin');

Util = require('./util/index');
// console.log('__dirname:', __dirname);
// console.log('resolve:', resolve('../'));
// console.log('join:--:', join('../'));

module.exports = {
    mode: "development",
    // devtool:"cheap-module-eval-source-map",
    devtool: "cheap-module-eval-source-map",// 开发环境配置
    // devtool:"cheap-module-source-map",   // 线上生成配置

    entry: Util.resolve("../src/index.js"),
    output: {
        // 输出目录
        path: Util.resolve("../dist"),
        // 文件名称
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader',//loader的名称（必须）
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader', // 创建 <style></style>
                    },
                    {
                        loader: 'css-loader',  // 转换css
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader', // 编译 Less -> CSS
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: Util.resolve('../dist/index.html'), // html模板的生成路径
            template: Util.resolve('../src/index.html'),//html模板
            inject: true, // true：默认值，script标签位于html文件的 body 底部
            hash: true, // 在打包的资源插入html会加上hash
            //  html 文件进行压缩
            minify: {
                removeComments: false,               //去注释 只去掉html中的注释
                collapseWhitespace: true,           //压缩空格
                removeAttributeQuotes: true         //去除属性引用
            }
        }),
        // new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true, // 
        contentBase: Util.resolve("../dist"),
        host: "0.0.0.0", // 可以使用手机访问
        port: 8080,
        historyApiFallback: true, // 该选项的作用所有的404都连接到index.html
        proxy: {
            // 代理到后端的服务地址，会拦截所有以api开头的请求地址
            "/api": "http://localhost:3000" // 后端IP:端口号
        }
    }
}