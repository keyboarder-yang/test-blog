# hasIntersection

## 介绍
hasIntersection 判断两个数组(字符串数组或者数字数组）是否有交集。

## 实现

::: code-group
```JavaScript
/**
 * @description 判断两个数组是否有交集
 * @param { Array } array1
 * @param { Array } array2
 * @return { Boolean }
 * @example
 * hasIntersection([1, 2, 3], [1, 4])
 * hasIntersection([1, 2, 3], [4])
 */
const hasIntersection = (array1, array2) => {
        return array1.some((value) => array2.includes(value))
    }
```

```TypeScript
/**
 * @description 判断两个数组是否有交集
 * @param { Array<number|string> } array1
 * @param { Array<number|string> } array2
 * @return { boolean }
 * @example
 * hasIntersection([1, 2, 3], [1, 4])
 * hasIntersection([1, 2, 3], [4])
 */
const hasIntersection = (array1: Array<string | number>, array2: Array<string | number>): boolean => {
        return array1.some((value: string | number) => array2.includes(value))
    }

```

:::


