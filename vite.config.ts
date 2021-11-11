const path = require("path")
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
export default defineConfig({
    base: "./", // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
    plugins: [
        vue(),
        styleImport({
            libs: [
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    ensureStyleFile: true,
                    resolveStyle: (name) => { // 这里这个name不能直接使用 因为element的组件文件都带有el-开头 但是样式文件并没有 所以导致引入的样式文件无法正常解析 这里只需要加上一句代码即可
                        name = name.slice(3)

                        return `element-plus/packages/theme-chalk/src/${name}.scss`;
                    },
                    resolveComponent: (name) => {
                        return `element-plus/lib/${name}`;
                    },
                }
            ]
        })
    ],
    server: {
        // port: process.env.VITE_PORT || 3000,
        port: 3000,
        open: true,
        // proxy: {
        //     '/userGateway': {
        //         target: 'https://devghodrapi.odrcloud.cn',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/userGateway/, '')
        //     },
        // },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "public": path.resolve(__dirname, "./public"),
        },
    },
    css:{
        //css预处理
        preprocessorOptions:{
            scss:{
                //引入var.scss全局预定义变量
                additionalData:'@import "./src/assets/css/global.scss";'
            }
        }
    },
    optimizeDeps: {
        include: [
            "element-plus",
            // "element-plus/lib/locale/lang/zh-cn",
            // "dayjs/locale/zh-cn",
        ],
    },
    // 打包相关规则
    build: {
        target: "es2020", //指定es版本,浏览器的兼容性
        outDir: `./dist/${process.env.VITE_ENV}`, //指定打包输出路径
        assetsDir: "assets", //指定静态资源存放路径
        minify: 'esbuild',
        cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
        sourcemap: false, //是否构建source map 文件
        terserOptions: {
            // 生产环境移除console
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
})