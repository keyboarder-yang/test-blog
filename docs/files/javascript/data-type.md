---
title: js学习 --- 数据类型
date: 2022-06-03 15:51:37
tags: 数据类型
summary: 对于数据类型的总结
categories: JavaScript
---

# 数据类型
## 类别

1. 基本数据类型：`String`,`Number`,`Boolean`,`undefined`,`null`,`Symbol(es6)`，`BigInt(es10)`
2. 引用数据类型：`Object,Array`,`Function`,`Date`,`RegExp`,`Error`,`Set`,`Map`,`Math`

## 区别

基本类型的数据都是按值传递，引用类型的数据都是按照引用（内存地址）传递，基本类型数据存储在栈内存中，引用类型数据存储在堆内存中，在栈内存中存储的仅是引用类型数据的引用地址

[![图解](https://s1.ax1x.com/2022/06/03/XUQqvd.png)](https://imgtu.com/i/XUQqvd)

## 数据类型的检测方式

> + `typeof`
> + `instanceof`
> + `constructor`
> + `Object.prototype.toString`

### `typeof`

```js
typeof '' 			// 'string'
typeof 1 			// 'number'
typeof false 		//'boolean'
typeof null 		// 'object'
typeof undefined 	// 'undefined'
typeof Symbol('a') 	// 'symbol'
typeof 10n 			// 'bigint'

typeof {} 			// 'object'
typeof [] 			// 'object'
typeof /s/g 		// 'object'
typeof function(){} // 'function'
typeof new Date() 	// 'object' 
typeof new Map() 	// 'object'
typeof new Set() 	// 'object'
typeof new Error() 	// 'object'
```

> `typeof`能检测的类型
>
> + 基本类型中除了`null`以外的所有类型
> + 引用类型中只能判断 `function`类型

### `instanceof`

> `instanceof` 是通过检测构造函数的`prototype`属性是否出现在某个实例对象的原型链上，达到检测目的。
>
> 故：`instanceof`无法检测基本数据类型，但由于原型可能会被修改，所以通过原型的方式去检测不够安全。

```js
({}) instanceof Object;				// 'true'
[]  instanceof Array;				// 'true'
/s/g instanceof RegExp;				// 'true'
(function(){}) instanceof Function; // 'true'
new Date() instanceof Date; 		// 'true' 
new Map() instanceof Map; 			// 'true'
new Set() instanceof Set; 			// 'true'
new Error() instanceof Error; 		// 'true'
```

### `constructor`

> `constructor` 是通过获取构造函数的方式检测数据类型

```js
// 基本类型
''.constructor === String 			// true
(1).constructor === Number // true
(false).constructor === Boolean // true
Symbol('').constructor === Symbol // true
(10n).constructor === BigInt // true

// 引用类型
new Object().constructor === Object
new Array().constructor === Array
new Function().constructor === Function // true
new Date('2020').constructor === Date // true
(/s/g).constructor === RegExp // true
new Set().constructor === Set // true
new Map().constructor === Map // true
new Error().constructor === Error // true
```

### `Object.prototype.toString.call`

```js
// 基本类型
Object.prototype.toString.call('') 			// '[object String]'
Object.prototype.toString.call(null) 		// '[object Null]'
Object.prototype.toString.call(undefined) 	// '[object Undefined]'
Object.prototype.toString.call(1) 			// '[object Number]'
Object.prototype.toString.call(NaN) 		// '[object Number]'
Object.prototype.toString.call(false) 		// '[object Boolean]'
Object.prototype.toString.call(10n) 		// '[object BigInt]'
Object.prototype.toString.call(Symbol('')) 	// '[object Symbol]'

// 引用类型
Object.prototype.toString.call({}) 				// '[object Object]'
Object.prototype.toString.call([]) 				// '[object Array]'
Object.prototype.toString.call(/s/g) 			// '[object RegExp]'
Object.prototype.toString.call(new Date()) 		// '[object Date]'
Object.prototype.toString.call(Math) 			// '[object Math]'
Object.prototype.toString.call(function(){}) 	// '[object Function]'
Object.prototype.toString.call(new Map()) 		// '[object Map]'
Object.prototype.toString.call(new Set()) 		// '[object Set]'
Object.prototype.toString.call(new Error()) 	// '[object Error]'
```



> 文章出处：[哔哩哔哩视频](https://www.bilibili.com/video/BV1Eh411s72a?spm_id_from=333.337.search-card.all.click)

