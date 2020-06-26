/*
* @vue/cli config
* */
module.exports = {
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item.use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // Provide path to the file with resources
                    // 要公用的scss的路径
                    resources: './src/assets/css/global.scss'
                })
                .end()
        });
    },
    pages: {
        index: {
            // page 的入口
            entry: 'src/pages/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    pluginOptions: {
        electronBuilder: {
            // // Use this to change the entrypoint of your app's main process
            mainProcessFile: 'electron/background.js',
            builderOptions: {
                "appId": "com.example.app",
                "productName":"aDemo",//项目名，也是生成的安装文件名，即aDemo.exe
                "copyright":"Copyright © 2019",//版权信息
                "directories":{
                    "output":"./dist"//输出文件路径
                },
                "win":{//win相关配置
                    "icon":"./public/index.ico",//图标，当前图标在根目录下，注意这里有两个坑
                    "target": [
                        {
                            "target": "nsis",//利用nsis制作安装程序
                            "arch": [
                                "x64",//64位
                                "ia32"//32位
                            ]
                        }
                    ]
                }
            },
            outputDir: "dist"
        }
    }
};
