---
title: js学习 --- 原型和原型链 
date: 2022-06-03 14:21:21 
tags: 原型链 
summary: 对于原型和原型链的总结 
categories: JavaScript
---

# 原型和原型链

[![zc0kUP.png](https://s1.ax1x.com/2022/12/07/zc0kUP.png)](https://imgse.com/i/zc0kUP)

## 原型
### 函数对象和普通对象
1. JavaScript中函数也是对象
2. 所有 Function 的实例都是函数对象，其他的均为普通对象，其中包括 Function 实例的实例。

### `__proto__`
1. `__proto__`是对象的隐式原型
2. `__proto__`是对象所独有的(函数是特殊的对象，故函数也有该属性)
3. `__proto__`指向另一个对象，也就是它的原型对象（其构造函数的原型）

### `prototype`
1. `prototype`是函数所独有的，含义就是函数的原型对象
2. 给其它对象提供共享属性的对象。`prototype`自己也是对象.
3. 任何一个对象都可以作为`prototype`属性来使用

### `constructor`
1. `constructor`是对象所独有的(函数是特殊的对象，故函数也有该属性)
2. 每一个对象都有其对应的构造函数，本身或者继承而来,并且指向构造函数

## 原型链
> 当你在访问一个对象属性的时候，如果该对象内部不存在这个属性，那么就去它的`__proto__`属性所指向的父类对象上查找，如果父类对象依旧不存在这个属性，那么就去其父类的__proto__属性所指向的父类对象上去查找。以此类推，直到找到null。而这个查找的过程，也就构成了我们常说的原型链。

## 总结
1. `__proto__`指向其构造函数的原型（`prototype`）
2. `String`、`Array`、`Number`、`Function`、`Object`等都是 `function`,其构造函数都是`Function`
3. 由1,2可知，`String`、`Array`、`Number`等的`__proto__`都指向 `Function.prototype`
4. `Function`的`__proto__`指向其自身的`prototype`
5. `Function.prototype`的`__proto__`指向`Object.prototype`
6. `Object.prototye`的`__proto__`指向顶端`null`

## 参考文献和文章出处
[【THE LAST TIME】一文吃透所有JS原型相关知识点](https://juejin.cn/post/6844903984335945736#heading-4)
