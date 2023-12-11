---
title: webpack打包后图片找不到-404
date: 2021-06-20 18:17:04
tags: webpack 打包
summary: 对于webpack使用问题总结
categories: WebPack
---

#### webpack 打包后 图片找不到 --404

> 一. build文件夹下 utils文件中

```js
if (options.extract) {
    return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath:'../../' //此处为新添加的项
    })
} else {
    return ['vue-style-loader'].concat(loaders)
}
```

> 二. config 文件夹下 index.js 文件

```js
assetsPublicPath: './' //此处修改
```

> 三. 图片路径不要写成绝对路径

