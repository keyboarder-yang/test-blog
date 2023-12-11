---
title: js学习 --- apply、bind和call
date: 2022-12-05 14:21:21
tags: this绑定
summary: 对于apply、bind和call的总结
categories: JavaScript
---
# apply、bind、call

## 异同

1. 都实现了对this指向的绑定
2. 第一个参数都是绑定的this的指向，若第一个参数非真，则指向window
3. 三者的主要区别在于参数的传递，apply传入数组，call传入列表，bind可以分多次传入（因为bind返回的是个函数）
4. apply和call立即执行，bind返回的是绑定this后的函数
   :::warning 注意 如果这个新的函数作为构造函数被调用，那么this不再指向传入给bind的第一个参数，而是指向新生成的对象
   :::

## 使用示例

```javascript
const studentA = {
    name: 'A',
    introduce(age) {
        alert(`my name is ${this.name},${age} years old!`)
    }
}
const studentB = {
    name: 'B'
}
```

假设studentB也想调用introduce方法并且显示自己的name和自己的年龄，我们就可以通过改变this指向的方式：

### apply

```javascript
studentA.introduce.apply(studentB, [28])
```

### call

```javascript
studentA.introduce.call(studentB, 28)
```

### bind

```javascript
// 1. 参数在bind中传递
studentA.introduce.bind(studentB, 28)()
// 2. 参数在bind的返回函数中传递
studentA.introduce.bind(studentB)(28)
```

## 手写apply、call、bind

> 当绑定的对象为undefined或null时，绑定到window

### apply

```javascript
// 在原型上定义自己的apply
Function.prototype.myApply = function (context, args) {
    // null 和 undefined 情形下 this指向window
    // 其他情况指向该值的实例对象（Object）
    let flag = (context === null || context === undefined)
    context = flag ? window : Object(context);
    const key = Symbol() // 唯一属性名
    context[key] = this; // 此时this指向调用apply的函数（隐式绑定）
    let result = context[key](...args); // 函数执行
    delete context[key]; // 删除上下文对象的属性
    return result; // 返回函数执行结果
}
```

### call

```javascript
// call和apply类似，只在参数传递上有差异
Function.prototype.myCall = function (context, ...args) {
    // null 和 undefined 情形下 this指向window
    // 其他情况指向该值的实例对象（Object）
    let flag = (context === null || context === undefined)
    context = flag ? window : Object(context);
    const key = Symbol() // 唯一属性名
    context[key] = this; // 此时this指向调用apply的函数（隐式绑定）
    let result = context[key](...args); // 函数执行
    delete context[key]; // 删除上下文对象的属性
    return result; // 返回函数执行结果
}
```

### bind

```javascript
Function.prototype.myBind = function (context, ...args) {
    const thisFn = this; // 存储源函数以及上方的args(函数参数)
    // 因bind返回的是一个函数，返回函数也可以进行参数传递
    let constructorFn = function (...params) {
        // this是否是constructorFn的实例 也就是返回的constructorFn是否通过new调用
        const isNew = this instanceof constructorFn
        // new调用就绑定到this上,否则就绑定到传入的context上
        const context = isNew ? this : Object(context)
        // 用call调用源函数绑定this的指向并传递参数,返回执行结果
        return thisFn.call(context, ...args, ...params);
    };
    if (thisFn.prototype) {
        // 复制源函数的prototype给constructorFn 一些情况下函数没有prototype，比如箭头函数
        constructorFn.prototype = Object.create(thisFn.prototype);
    }
    return constructorFn; // 返回拷贝的函数
};
```
