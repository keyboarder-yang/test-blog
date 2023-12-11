---
title: 设计模式学习 --- 策略模式
date: 2022-05-22 15:55:57
tags: 策略模式
summary: 对于策略模式的一些简单理解
categories: DesignPattern
---

#### 定义

> 定义一系列的算法，  把他们一个一个的封装起来，并使得他们可以进行相互替换。
>
> 一个基于策略模式的程序至少由两部分组成。
>
>  + 第一个部分是：一组策略类，策略类封装了具体的算法，并负责具体的计算过程。
>  + 第二个部分是：环境类，接受客户的请求，随后把请求委托给某一个策略类。

#### 示例

```javascript
// 传统写法
function calculate(level, salary) {
    if (level === 'S') {
        return salary * 4
    } else if (level === 'A') {
        return salary * 3
    } else if (level === 'B') {
        return salary * 2
    } else if (level === 'C') {
        return salary * 1
    }
}

// 策略类写法
// 策略类算法封装
const strategies = {
    S: salary => 4 * salary,
    A: salary => 3 * salary,
    B: salary => 2 * salary,
    C: salary => salary,
}

// 环境类
function getBouns (level,salary){
    return strategies[level](salary)
}
```



#### 优点

> 可以使得项目的一个可维护度和代码的整洁度得到一个大幅度的提升

