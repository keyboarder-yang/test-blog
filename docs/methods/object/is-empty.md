# isEmpty

## 介绍
isEmpty 判断一个对象是否为空。

## 源码

::: code-group

```javascript
/**
 * @description 判断对象是否未空对象
 * @param { Object } obj - 源对象
 * @return { boolean }
 */
function isEmpty(obj) {
    return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
}
```
```typescript
/**
 * @description 判断对象是否未空对象
 * @param { Object } obj - 源对象
 * @return { boolean }
 */
function isEmpty(obj: object): boolean {
    return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
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
const info2 = {};
console.log(isEmpty(info))  // false
console.log(isEmpty(info2)) // true
```
