const { defineConfig } = require('@vue/cli-service')
// const { NODE_ENV } = process.env
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: '/archives/', // 部署路径 https://a.com/mkdir/ 中的 mkdir 写到此配置
  outputDir: 'dist', // 打包时生产环境生成的目录
  assetsDir: 'static', // 存放生成的静态资源目录
  filenameHashing: false, // 是否在生成的静态资源中增加hash
  lintOnSave: 'default', // 是否在代码保存时通过lint校验
  css: {
    loaderOptions: {
      /* 向预处理器loader传递选项 */
      sass: {
        /* 针对scss语法做单独配置，以区别sass */
        prependData: `@import "@/assets/styles/_variables.scss";` // 添加项目全局变量
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: '档案管理系统' // 项目标题
    }
  }
}
