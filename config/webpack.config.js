const path = require('path');
module.exports = {
    // 指定打包模式：development、production
    mode:"development",
    // entry 对象是用于 webpack 查找启动并构建 bundle。其上下文是入口文件所处的目录的绝对路径的字符串。
    entry: './src/index.js',
    // 输出文件配置
    output: {
        // 文件名称
        filename: 'main.js',
        // 文件路径
        path: path.resolve(process.cwd(), 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    }
};

