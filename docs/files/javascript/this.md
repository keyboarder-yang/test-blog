---
title: js学习 --- this指向问题
date: 2022-05-18 22:31:16
tags: this指向
summary: 对于This指向的一些简单理解
categories: JavaScript
---

# 介绍

+ this -> JavaScript 关键字
+ 当前环境执行期上下文对象的一个属性
+ this在不同的环境、不同作用下，表现不同
+ this是在运行时绑定的，而非编写时绑定，所以它的上下文取决于调用时的环境

## 1. 错误认识

1. 指向自身
2. 指向它的作用域

## 2. 绑定规则
1. 默认绑定
2. 隐式绑定
3. 显式绑定
4. new关键字绑定

### 2.1 默认绑定
> 函数直接调用，函数中的this指向，当非严格模式时指向window，严格模式时指向undefined
```javascript
function foo() {
    console.log(this)
}
function fooStrict() {
    'use strict'
    console.log(this)
}
foo() // Window ===> this --> Window
fooStrict() //  undefined ===> this --> undefined
```
### 2.2 隐式绑定
> 当函数作为一个对象的某个属性值被调用时，this指向方法的拥有者
```javascript
function foo() {
    console.log(this)
}
let obj = {
    name: 'Keyboarder-Yang',
    fn: foo
}
obj.fn() // obj ===> this --> obj(调用者)
```
#### 2.2.1 隐式丢失现象
> 被隐式绑定的函数丢失绑定对象的现象
```javascript
function foo() {
    console.log(this)
}
let obj = {
    name: 'Keyboarder-Yang',
    fn: foo
}
var bar = obj.fn;
bar() // obj ===> this --> Window
```
> 上述代码中引obj中fn-->foo只是定义未执行，所以obj.foo实际是foo函数本身，所以bar引用的是foo函数本身，故bar执行相当于foo执行，所以上述代码指向的是Window
### 2.3 显式绑定
> 通过修改this指向，达到绑定this的方式称为显示绑定。
#### 2.3.1 call
```javascript
function foo() {
    console.log(this)
}
let obj = {
    name: 'Keyboarder-Yang',
    fn: foo
}
foo() // obj ===> this --> Window
foo.call(obj) // obj ===> this --> obj
```
#### 2.3.2 apply
> 从this绑定的角度而言，apply和call一样，区别体现在其他参数上
### 2.4 new关键字绑定
[new的过程中做了哪些事情](New.md)
> this 指向新构造的对象

## 3. this指向优先级
new --> 显式绑定 --> 隐式绑定 --> 默认绑定

## 4. 说明
> 以上情况不包含箭头函数的情况，箭头函数的this继承与父级的this指向


## 5. 常见的this指向

> this 指向（函数在定义的时候this是不确定的，只有在调用的时候才可以确定this的指向）
>
> 1. 普通函数中、定时器和自调用函数，内部的this指向全局window（严格模式下，普通函数this指向undefined）
> 2. 函数作为一个对象的方法，该对象被调用，this指向该对象
> 3. 构造函数this指向返回的这个对象
> 4. 箭头函数，内外this一致，绑定最近的一层对象上
