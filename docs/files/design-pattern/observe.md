---
title: 设计模式学习 --- 观察者模式
date: 2022-05-22 09:56:27
summary: 对于观察者模式的一些简单理解
tags: observe 观察者模式
categories: DesignPattern
---

#### 定义

> 观察者（`Observer`）直接订阅（`Subscribe`）主题（`Subject`），而当主题被激活的时候，会触发（`FireEvent`）观察者里的事件。
>

#### 实现

> 思想：
>
> 1. 观察者中必须要有一个事件，用于主题变化时触发。
> 2. 主题中：
>    + 一个状态存储，保存当前的主题状态用于辨别主题是否发生变化
>    + 一个修改状态的事件
>    + 一个用于存储观察者的变量
>    + 给主题添加和删除观察者的方法
>    + 通知函数，通知观察者，主题发生了变化

```javascript
// 观察者
class Observer {
    constructor(name) {
        this.name = name
    }
    fn() {
        console.log(this.name + `: 主题发生变化!`)
    }
}
//  主题
class Subject {
    constructor() {
        this.state = null // 当前主题的状态
        this.observers = [] // 保存观察者信息的数组
    }
    // 用于改变主题状态的方法
    setState(state) {
        this.state = state
        this.notifyAll()
    }
    // 用于给当前主题实例添加观察者
    addObserver(observer) {
        this.observers = this.observers.filter(item => item !== observer)
        this.observers.push(observer)
    }
    // 用于给当前主题实例删除观察者
    deleteObserver(observer) {
        this.observers = this.observers.filter(item => item !== observer)
    }
    // 通知观察者的函数
    notifyAll() {
        this.observers.forEach(item => {
            item.fn()
        })
    }
}
```

#### 使用场景

> 关联行为 场景 , 建立一套 触发机制 ;
>
> **如 :** 用户关注某个商品的价格 , 降价时进行通知 , 这样 用户 和 商品 产生了关联 , 触发机制就是 商品降价 。

