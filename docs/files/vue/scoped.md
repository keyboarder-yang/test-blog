---
title: vue学习 --- Scoped样式‘隔离’
date: 2022-09-15 09:11:49
tags: scoped vue
summary: scoped样式隔离的原理
categories: Vue
---

# scoped原理

## 1. 简介

当在vue组件中的style标签上添加scoped属性后，它的样式就只会在当前vue组件中生效而不会影响其他组件的样式。从而使得样式不会相互污染，实现了样式的模块化。

## 2. 原理

vue通过`scoped`实现样式隔离的本质是基于 **HTML中的自定义属性**以及**CSS中的属性选择器**。通过给HTML标签添加自定义属性，CSS中使用属性选择器。由于每个组件的自定义属性的不同，从而实现组件间的样式隔离，实现样式的模块化。

## 3. 具体实现

具体来说，它是 **通过 vue-loader 实现** 的，实现过程大致分 3 步：

1. 首先 vue-loader 会解析 .vue 组件，提取出 template、script、style 对应的代码块；
2. 然后构造组件实例，在组件实例的选项上绑定 ScopedId；
3. 最后对 style 的 CSS 代码进行编译转化，应用 ScopedId 生成选择器的属性；

> 每个 Vue 文件都将对应一个唯一的 id，该 id 根据文件路径名和内容 hash 生成，通过组合形成scopeId
