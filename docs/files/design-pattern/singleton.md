---
title: 设计模式学习 --- 单例模式
date: 2022-05-17 00:02:43
tags: 单例模式
summary: 对于单例模式的一些简单理解
categories: DesignPattern
---

### 定义

> Ensure a class has only one instance  and provide a global point of access to it.
>
> 确保一个类只有一个实例，并全局提供这个实例。

### 实现

1. 通过类的静态方法（es6）

   ```javascript
   class singleton {
       constructor(name) {
           this.name = name
       }
       static getInstance(name){
           if(!this.instance){
               this.instance = new singleton(name)
           }
           return this.instance
       }
   }
   let s1 = singleton.getInstance('zhangsan');
   let s2 = singleton.getInstance('lisi');
   console.log(s1 === s2) // true
   ```
   > 缺点：
   >
   > + 用户使用这个类的时候必须知道这是一个单例的类，必须主动调用getInstance方法
   > + 不能直接通过new 关键字进行创建单例，new出来的实例并不是一个单例
   
2. 通过构造函数（es6）

   ```
   class Singleton {
       constructor(name) {
           this.name = name
           if(!Singleton.instance) {
               // 将 this 挂载到单例上
               Singleton.instance = this
           }
           return Singleton.instance
       }
       static getInstance(){
           console.log(this.name)
       }
   }
   const a = new Singleton('zs')
   const b = new Singleton('ls')
   console.log(a === b) // true
   ```
   
   > 缺点：
   >
   > + 不符合设计模式的设计原则 ---- 单一职责原则。（共六大设计模式）
   > + 单一职责原则：对类来说的，即一个类应该只负责一项职责。（高内聚，低耦合）
   
3. 通过代理

   ```javascript
   
   function Class2SingletonClass(constructor) {
       let SingletonCreator = class {
           constructor() {
               if(!SingletonCreator.instance){
                   SingletonCreator.instance = new constructor(...arguments)
               }
               return SingletonCreator.instance
           }
       }
       return SingletonCreator
   }
   ```

#### 应用场景

- 状态存储----vuex

```javascript
class State {
    data = {}
    // 获取对象
    get(key) {
        return this.data[key] || ''
    }
    // 存储对象
    set(key, value) {
        return this.data[key] = value
    }
}
```

