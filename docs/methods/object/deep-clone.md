# deepClone

## 介绍
deepClone 深克隆并返回克隆后的对象。

## 源码

::: code-group

```javascript
/**
 * 对象深克隆
 * @param { Object } target
 * @param { Object } hash
 * @return { Object }
 */
function deepClone(target, hash = new WeakMap()) {
    function isObject(target) {
        return typeof target === "object" && target !== null;
    }
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
```
```typescript
/**
 * 对象深克隆
 * @param { Object } target
 * @param { Object } hash
 * @return { Object }
 */
function deepClone(target: any, hash: WeakMap<any, any> = new WeakMap()): any {
    function isObject(target: any): boolean {
        return typeof target === "object" && target !== null;
    }
    //  如果不是对象类型，直接返回（注意null的判断，typeof null 为 ‘object’）
    if (!isObject(target)) return target;
    // 判断是否已经添加了该引用，如果有直接冲hash结构中取出
    if (hash.get(target)) return hash.get(target);
    // 判断是数组还是对象，进行特殊处理
    let newObj: any = Array.isArray(target) ? [] : {};
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
```

:::

## 使用示例

### 示例1

```javascript
const info = {
    name: 'Keyboarder',
    age: 18,
    address: 'AnHui,HeFei',
}
const newInfo = deepClone(info)
info.name = 19
console.log(newInfo.age) // 18
console.log(newInfo === info) // false
```

### 示例2-目标对象不为空的合并规则

```javascript
const info = {
    name: 'Keyboarder',
    age: 18,
    address: 'AnHui,HeFei',
}
const otherInfo = {
    company: 'fw',
    age: 20
}
const newInfo = getDataFromObject(info, otherInfo)
console.log(newInfo) // {name:'Keyboarder',age: 18,address: 'AnHui,HeFei',company:'fw'}
```