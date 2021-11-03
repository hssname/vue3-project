const path = require("path")
module.exports = {
    alias: {
        "/@/": path.resolve(__dirname,'./src'), // 设置别名
        "comps": path.resolve(__dirname,'src/components')
    },
    css: {
        preprocessorOptions: {
            // 设置 scss 公用变量文件
            sass: {
                additionalData: '@import "./src/assets/css/global.scss";'
            }
        }
    },
    // 服务器设置代理规则
    server:{
        port: '3000',
        open: true,
        proxy: {}
    },
    // 基本路径
    base: './',
    // 输出文件目录
    outDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    //  生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
};