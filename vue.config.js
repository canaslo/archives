const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: '档案管理系统'
    }
  }
}