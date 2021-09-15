- babel-cli
  node_modules/.bin/babel
  交给 package.json script 区域
  build
- 把 arrow function 编译
  babel 是通过插件的方式来实现的 @babel/plugin-transform-arrow-functions
- 有了babel 可以使用最新的js特性
  babel 架构， plugin 任何新特性， 只要发布相应的插件， 就可以支持工作流