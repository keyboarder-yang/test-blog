---
title: vue学习 --- 插槽
date: 2022-05-13 22:31:49
tags: vue slot
summary: 对于插槽slot的一些简单理解
categories: Vue
---

### 分类

+ 具名插槽

  > 可以通过name属性给插槽绑定名称，从而达到预期想要渲染的位置
  
  ```vue
  <solt name='header'>
   	// 此处可以写一些默认内容（后备内容）
  </slot>
  ```
  
  使用时可以通过`v-solt:header`或者`#header`，`#`和`v-solt:`功能类似
  
  >  注意：`#`后必须有名字

  + 不设置名称则默认插槽名称为```default```（默认的具名插槽）

    ```vue
    ① <solt name='default'></solt>
    ② <solt></solt>
    ①和②是一样的作用
    ```

  + 自定义设置插槽名称（自定义名称的插槽）

+ 作用域插槽

  > 提供一种方式，使得插槽能够访问子组件中数据的插槽。通过在子组件中绑定值以供插槽中使用

  ```vue
  // 子组件中：
  <solt :propName="user"></solt>
  let user = {
  	name: 'yanghong',
  	age: 18
  }
  // 调用：
  <template #default="{propName}">
  	<span>{{}}</span>
  </template>
  ```

