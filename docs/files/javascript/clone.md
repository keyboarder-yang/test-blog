---
date: 2022-12-10 11:56:53
title: js学习 --- 数据拷贝
summary: 对于数据拷贝的一些简单理解
tags: clone 深拷贝 浅拷贝 
categories: JavaScript 
---



# 数据拷贝

`JavaScript`中数据类型分为基本类型和引用类型，其中基本类型的数据存放在栈中，引用类型的数据存放在堆中，栈中存放的是该引用类型数据在堆中的引用地址。

## 浅拷贝

> 浅拷贝只复制某个对象的引用地址，而不复制对象本身，新旧对象还是共享同一块内存，两者存在连接，修改其一的值，另一值也会发生改变（两者为同一引用，指向同一块内存空间）

### `Object.assign`

`Object.assign()`方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。`Object.assign()`拷贝的是对象的属性的引用，而不是对象本身。

## 深拷贝

> 深拷贝会创造和源对象值相同但引用地址不用的数据，两者不共享存储空间。

### `JSON.parse(JSON.stringify())`

缺点：

+ 无法拷贝函数
+ 无法拷贝对象原型链上的属性和方法
+ 当数据的层次很深，栈会溢出

## 手写深拷贝

目的：

+ 解决循环引用问题(属性对应的属性值是对象本身)
+ 解决递归栈溢出问题(当递归的层数较深时，栈会溢出)
+ 解决重复拷贝的问题(两个属性对应一个引用时，会被拷贝两次的问题)

```javascript
// 使用hash存储已拷贝过的对象，避免循环拷贝和重复拷贝
function deepClone(target, hash = new WeakMap()) {
    //  如果不是对象类型，直接返回（注意null的判断，typeof null 为 ‘object’）
    if (!isObject(target)) return target;
    // 判断是否已经添加了该引用，如果有直接冲hash结构中取出
    if (hash.get(target)) return hash.get(target);
    // 判断是数组还是对象，进行特殊处理
    let newObj = Array.isArray(target) ? [] : {};
    // 将值（引用地址）存入hash结构，解决重复拷贝的问题
    hash.set(target, newObj);
    for (let key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
            if (isObject(target[key])) {
                newObj[key] = deepClone(target[key], hash); // 递归拷贝
            } else {
                newObj[key] = target[key];
            }
        }
    }
    return newObj;
}

function isObject(target) {
    return typeof target === "object" && target !== null;
}
```

