const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


//定义模式变量，区别加载plugin、loader
const mode = "development";
const devMode = mode !== "production";
module.exports = {
    // 指定打包模式：development、production
    mode: mode,
    // entry 对象是用于 webpack 查找启动并构建 bundle。其上下文是入口文件所处的目录的绝对路径的字符串。
    // entry: ["@babel/polyfill", "./src/main.js"],
    entry:"./src/main.js",
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        // 开启HMR
        hot: true,
        open: true
    },
    optimization: {
        //开发模式不提取 CSS
        minimizer: [].concat(devMode ? [] : [new OptimizeCSSAssetsPlugin({})])
    },
    plugins: [
        // 输出路径下所有文件都将被清除
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //指定模板路径
            template: path.resolve(process.cwd(), 'public/index.html'),
            minify: true
        }),
        // 这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
        // 例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
        new VueLoaderPlugin(),

    ].concat(devMode ? [] : [
        new MiniCssExtractPlugin()]),// 开发模式不提取 CSS
    // 输出文件配置
    output: {
        // 文件名称
        filename: '[name].bundle.js',
        // 文件路径
        path: path.resolve(process.cwd(), 'dist')
    },
    module: {
        rules: [
            //添加 babel 支持
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        rootMode: "upward",
                    }
                }
            },
            //添加 vue 支持
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            //添加 css 支持
            {
                test: /\.css$/i,
                // use: ['style-loader', 'css-loader']
                // 开发模式：style-loader ；生产模式：MiniCssExtractPlugin
                use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, 'css-loader', "postcss-loader"]
            },
            //添加 sass 支持
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 开发模式：style-loader ；生产模式：MiniCssExtractPlugin
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    "postcss-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            //添加 图片 支持
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //单位：bytes （icon 图片压缩后的体积2小于 25K）
                            limit: 25 * 1024,
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            // webpack@2.x and newer
                            disable: devMode,
                        },
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

{
    module: {
        rules: []
    }
}