const path = require('path');
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    // 指定打包模式：development、production
    mode: "development",
    // entry 对象是用于 webpack 查找启动并构建 bundle。其上下文是入口文件所处的目录的绝对路径的字符串。
    entry: './src/main.js',
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
            //指定模板路径
            template: path.resolve(process.cwd(), 'public/index.html')
        }),
        // 这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
        // 例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
        new VueLoaderPlugin()
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
            //添加 vue 支持
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
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

