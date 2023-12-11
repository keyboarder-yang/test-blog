# treeFilter

## 介绍
treeFilter 根据条件过滤树结构，返回新的树结构。

## 源码

::: code-group

```javascript
/**
 * @description 对树结构数据的过滤，返回新的树结构数据
 * @param { Array } list - 源数组
 * @param { Function } callback - 回调函数，接收当前节点数据，返回结束条件
 * @return { Object }
 */
// 树形数据的过滤
const deepFilter = (list, callback) => {
    // 拷贝当前数据---不修改原数组
    list = JSON.parse(JSON.stringify(list));
    // 返回过滤后的结果
    return list.filter(item => {
        // 若当前节点存在children 则进行递归调用
        // 否则执行回调
        if (item.children) {
            item.children = this.deepFilter(item.children, callback)
        }
        // 最后判断当前节点是否符合过滤要求
        return callback(item)
    })
}
```
```typescript
/**
 * @description 对树结构数据的过滤，返回新的树结构数据
 * @param { Array } list - 源数组
 * @param { Function } callback - 回调函数，接收当前节点数据，返回结束条件
 * @return { Object }
 */
// 树形数据的过滤
const deepFilter = (list: any[], callback: (item: any) => boolean): any[] => {
    // 拷贝当前数据---不修改原数组
    list = JSON.parse(JSON.stringify(list));
    // 返回过滤后的结果
    return list.filter(item => {
        // 若当前节点存在children 则进行递归调用
        // 否则执行回调
        if (item.children) {
            item.children = this.deepFilter(item.children, callback)
        }
        // 最后判断当前节点是否符合过滤要求
        return callback(item)
    })
}
```

:::

## 使用示例

### 示例1

```javascript
const treeData = [
    {
        id: 1,
        name: '1',
        children: [
            {
                id: 2,
                name: '1-1'
            },
            {
                id: 3,
                name: '1-2'
            }
        ]
    },
    {
        id: 2,
        name: '2',
        children: [
            {
                id: 4,
                name: '2-1'
            },
            {
                id: 5,
                name: '2-2'
            }
        ]
    }
];
const newTreeData = deepFilter(treeData, node => node.id !==5)
```

