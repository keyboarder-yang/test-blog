# deDuplication

## 介绍
deDuplication 数组去重，返回去重后的数组

## 实现

::: code-group
```JavaScript
/**
 * @description 数组去重
 * @param {Array} array - 源数组
 * @param {String} attr - 根据此属性进行去重（非必传，不传则为简单类型数组去重）
 * @return {Array} 去重后的数组
 * @example 
 * deDuplication([1,2,2,3])
 * deDuplication([{name: 'yanghong', age: 18}, {name: 'yanghong', age: 19}], 'name')
 */
const deDuplication = (array, attr) => {
        if (attr){
            const res = new Map();
            return array.filter((item) => !res.has(item[attr]) && res.set(item[attr], 1));
        }else{
            return Array.from(new Set(array));
        }
    }
```

```TypeScript
/**
 * @description 数组去重
 * @param {Array} array - 源数组
 * @param {String} attr - 根据此属性进行去重（非必传，不传则为简单类型数组去重）
 * @return {Array} 去重后的数组
 * @example
 * deDuplication([1,2,2,3])
 * deDuplication([{name: 'yanghong', age: 18}, {name: 'yanghong', age: 19}], 'name')
 */
const deDuplication = (array: Array = [], attr: string = '') => {
        if (attr){
            const res: Map = new Map();
            return array.filter((item: any) => !res.has(item[attr]) && res.set(item[attr], 1));
        }else{
            return Array.from(new Set(array));
        }
    }
```

:::


