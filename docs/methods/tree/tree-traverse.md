# treeTraverse

## 介绍
treeTraverse 树结构数据的一些遍历方法。

## 源码(4种实现方式)
::: code-group
```javascript [dfs-递归-先序]
/**
 * 描述: 对树结构数据的遍历
 * @param {Array} nodes - 源数组
 * @param {Function} callback - 回调函数，接收当前节点数据
 */
function readNodes(nodes = [], callback) {
    nodes.forEach((item) => {
        let flag = item.children && item.children.length;
        callback(item);
        flag && readNodes(item.children, callback);
    })
}
```

```javascript [dfs-递归-后序]
/**
 * 描述: 对树结构数据的遍历
 * @param {Array} nodes - 源数组
 * @param {Function} callback - 回调函数，接收当前节点数据
 */
function readNodes(nodes = [], callback) {
    nodes.forEach((item) => {
        let flag = item.children && item.children.length;
        flag && readNodes(item.children, callback);
        callback(item);
    })
}
```

```javascript [dfs-循环]
/**
 * 描述: 
 * 	从首部弹出一个节点
 * 	遍历这个节点（执行回调函数）
 * 	把这个节点的子节点放入数组中去，根据放入数组中的头部
 * @param {Array} nodes - 源数组
 * @param {Function} callback - 回调函数，接收当前节点数据
 */
function readNodes(tree, callback) {
    let node, curTree = [...tree]
    while ((node = curTree.shift())) {
        callback(node)
        node.children && curTree.unshift(...node.children)
    }
}
```

```javascript [bfs-循环]
/**
 * 描述: 
 * 	从首部弹出一个节点
 * 	遍历这个节点（执行回调函数）
 * 	把这个节点的子节点放入数组中去，根据放入数组中的尾部
 * @param {Array} nodes - 源数组
 * @param {Function} callback - 回调函数，接收当前节点数据
 */
function readNodes(tree, callback) {
    let node, curTree = [...tree]
    while ((node = curTree.shift())) {
        callback(node)
        node.children && curTree.push(...node.children)
    }
}
```
:::

