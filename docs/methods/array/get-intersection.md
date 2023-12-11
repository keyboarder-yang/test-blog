# getIntersection

## 介绍
getIntersection 获取两个数组(字符串数组或者数字数组）的交集。

## 实现

::: code-group
```JavaScript
/**
 * 取两个数组的交集
 * @param {Array} array1
 * @param {Array} array2
 * @return {Array}
 * @example
 * getIntersection([1,2,3], [1,4])
 */
function getIntersection(array1, array2) {
    const set = new Set(array2)
    return array1.filter((value) => set.has(value));
}

```

```TypeScript
/**
 * 取两个数组的交集
 * @param {Array<number | string>} array1
 * @param {Array<number | string>} array2
 * @return {Array<number | string>}
 * @example
 * getIntersection([1,2,3], [1,4])
 */
function getIntersection(array1: Array<string | number>, array2: Array<string | number>): Array<string | number> {
    const set: Set = new Set(array2)
    return arr1.filter((value: string | number) => set.has(value));
}

```

:::


