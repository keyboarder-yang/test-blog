# hasValue

## 介绍
hasValue 判断一个对象是否有某个值。

## 源码

::: code-group

```javascript
/**
 * 描述: 判断一个对象是否有某个值
 * @param { Object } source - 源对象
 * @param { Array } valueList - 待检测的值的集合
 * @return { boolean }
 */
function hasValuesIn(source, valueList) {
    return Object.keys(source).some(key  => {
        return valueList.includes(source[key])
    })
};
```
```typescript
/**
 * 描述: 判断一个对象是否有某个值
 * @param { Object } source - 源对象
 * @param { Array } valueList - 待检测的值的集合
 * @return { boolean }
 */
function hasValuesIn(source: object, valueList: any[]): boolean {
    return Object.keys(source).some(key  => {
        return valueList.includes(source[key])
    })
};
```

:::

## 使用示例

### 示例1

```javascript
let obj = {
    a: 1,
    b: 2,
    c: undefined,
    d: null,
    e: ''
}
hasValuesIn(obj,[1]) // true
hasValuesIn(obj,[1,2]) // true
hasValuesIn(obj,[1,3]) // true
hasValuesIn(obj,[5]) // false
hasValuesIn(obj,[undefined]) // true
```
