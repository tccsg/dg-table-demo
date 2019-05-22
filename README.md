# demo-dg-table

[演示地址](https://theputian.com/demo-dg-table/dist/index.html)

### 兼容 ie >= 8

#### vue-cli3.0解决方案
先安装```@babel/polyfill```
```npm
npm i --dev @babel/polyfill 或者 yarn add --dev @babel/polyfill
```

在入口文件```main.js```添加依赖
```js
import '@babel/polyfill'
```

修改```babel.config.js```
```js
module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry'
      }
    ]
  ]
}
```

修改```vue.config.js```
```js
module.exports = {
  ...
  transpileDependencies: ['dg-table/lib']
}
```


#### vue-cli2.0解决方案

先安装```babel-polyfill```

在入口文件```main.js```添加依赖
```js
import 'babel-polyfill'
```

在build文件夹下找到```webpack.base.conf.js```修改如下
```js
module.export = {
    entry: {
      app: ['babel-polyfill', './src/main.js']
    }
}
```

找到```webpack.base.conf.js```中的```babel-loder```添加如下
```js
module: {
  rules: [
    ....,
    ....,
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        ....,
        resolve('/node_modules/dg-table/lib')
      ]
    }
  ]
}
```
