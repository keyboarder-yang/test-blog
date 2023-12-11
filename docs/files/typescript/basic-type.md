---
title: ts学习 --- 基本类型 
date: 2022-06-09 22:54:04 
tags: ts 
summary: ts基础类型 
categories: TypeScript
---

#### 基础类型

> 定义变量、函数参数，函数返回值等的数据类型

##### boolean

```
let isDone: boolean = false;
isDone = 5; // Type 'number' is not assignable to type 'boolean'.
```

##### number

```
let num:number = 10;
num = true; // Type 'boolean' is not assignable to type 'number'
```

##### string

```
let name:string = 'yanghong';
```

##### undefined

```
let undef:undefined = undefined;
```

##### null

```
let nullVal:null = null;
```

##### Array

```
let arr:Array = [];
let arr:number[] = [1,2,3];
let arr:Array<number> = [1,2,3]
```

##### object

```
let obj:object = {};
obj = null;
obj = {name:'yanghong'}
```

##### 元组

> 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

```
let x: [string,number] = ['yanghong',1];
```

##### any

> 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这种情况下，我们可以使用 `any`类型来标记这些变量：

```
let notSure:any = 4;
notSure = 'yanghong';
notSure = true;
```

##### 类型断言

> 简言之：告诉编译器，我知道自己是什么类型，也知道自己在干什么。有两种方式
>
> + `<type> value`
> + `value as type`

```
let someValue: any = 'yanghong';
let strLength: number = (<string>someValue).length;
// 或者
strLength: number = (someValue as string).length;
```

##### 类型推断

> 根据变量初次定义时的类型。若定义未赋值，则类型为any类型
