const path = require('path');
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

module.exports = {
    // 指定打包模式：development、production
    mode: "development",
    // entry 对象是用于 webpack 查找启动并构建 bundle。其上下文是入口文件所处的目录的绝对路径的字符串。
    entry: './src/index.js',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        // 开启HMR
        hot:true,
        open:true
   },
    plugins: [
        // 输出路径下所有文件都将被清除
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "6. webpack-dev-server 简单使用"
        }),
    ],
    // 输出文件配置
    output: {
        // 文件名称
        filename: '[name].bundle.js',
        // 文件路径
        path: path.resolve(process.cwd(), 'dist')
    },
    module: {
        rules: [
            //添加 css 支持
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            //添加 图片 支持
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            //添加 字体 支持
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};

