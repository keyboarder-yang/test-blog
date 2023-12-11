---
title: vue学习 --- render函数
date: 2022-05-14 15:31:49
tags: render vue
summary: 对于VUE渲染函数的一些简单理解
categories: Vue
---
# 对于vue中render函数的简单理解
## 简介

1. `render`函数和`template`的作用一样，用于渲染页面。接收一个参数```createElement```。

2. `createElement`参数同样也是一个函数，他接收三个参数，返回一个`VNode`节点。

    + 一个 HTML 标签字符串，组件选项对象，或者解析上述任何一种的一个 `async` 异步函数。类型：`String | Object | Function`。必需。

    + 一个包含模板相关属性的数据对象，你可以在 `template `中使用这些特性。类型：`Object`。可选。

    + 子虚拟节点 `VNodes`，由 `createElement() `构建而成，也可以使用字符串来生成“文本虚拟节点”。类型：`String | Array`。可选。



## 简单用法

1. [官网](https://cn.vuejs.org/v2/guide/render-function.html)示例：

   ```vue
   // 父组件中
   <div>
       <RenderVue level="1">标题1</RenderVue>
       <RenderVue level="2">标题2</RenderVue>
       <RenderVue level="3">标题3</RenderVue>
       <RenderVue level="4">标题4</RenderVue>
   </div>
   
   // 子组件中
   <script>
   export default {
     props: {
       level: {
         type: String,
       }
     },
     render(createElement) {
       return createElement('h' + this.level,this.$slots.default)
     }
   }
   </script>
   ```



## 注意

+ `Vue`文件中`Template`最终会被编译成`render`函数的形式
+ `Vue`文件中若写了```<template></template>``` ```render```函数会变的无效

## 引用地址

> + https://blog.csdn.net/weixin_43974265/article/details/112747768
