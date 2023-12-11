# New关键字

## 执行过程

> 1. 创建一个空对象
> 2. 将对象的`__proto__` 指向构造函数的`prototype`
> 3. 改变this指向，指向新构造的对象
> 4. 返回构造的对象

## 手写New函数
```javascript
function myNew(fn, ...args) {
  // 创建一个对象，该对象的原型是fn.prototype
  let obj = Object.create(fn.prototype);
  // 调用构造函数，使用apply，将this指向新生成的对象
  let res = fn.apply(obj, args);
  // 如果fn函数有返回值，则返回该对象，否则返回新生成的对象
  return typeof res === "object" || typeof res === "function" ? res : obj;
}
```
