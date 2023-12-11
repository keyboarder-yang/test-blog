---
title: js学习 --- 树的遍历
date: 2022-06-17 22:54:07
tags: 树
summary: 对树的遍历总结
categories: JavaScript
---



# 树的遍历方式

## 深度优先搜索（depth-first-search）

> 从根节点触发，尽可能深的搜索树的结点
>
> 其中二叉树又分为：

+ 先序遍历：根 、左、右

+ 中序遍历：左、根、右

+ 后序遍历：左、右、根

  > 先序、中序、后序都是以 根节点来定义的。

## 广度优先搜索（breath-first-search）

> 简单的说，广度优先搜索是从根节点开始，沿着树的宽度遍历树的节点。如果所有节点均被访问，则算法中止。

## 具体实现

> 在JavaScript中，数据一般都不会是二叉树，所以中序就没了实际的意义。所以以下都是基于整个树的遍历，而非特定的二叉树：

### 1. dfs-先序-递归

> 思想：先遍历根节点再遍历子节点（左右节点）

```javascript
function readNodes(nodes = [], callback) {
    nodes.forEach((item) => {
        let flag = item.children && item.children.length
        callback(item)
        flag && readNodes(item.children, callback)
    })
}
```

### 2. dfs-后序-递归

> 思想：先遍历子节点（左右节点）再遍历根节点

```javascript
function readNodes(nodes = [], callback) {
    nodes.forEach((item) => {
        let flag = item.children && item.children.length
        flag && readNodes(item.children, callback)
        callback(item)
    })
}
```

### 3. dfs-循环

> 思想：维护一个数组，先把所有根节点放入该数组，当数组中有值时，一直执行
>
> + 从首部弹出一个节点
> + 遍历这个节点（执行回调函数）
> + 把这个节点的子节点放入数组中去，根据放入数组中的头部或者尾部：
>   + 放入头部：深度优先遍历
>   + 放入尾部：广度优先遍历（方法4）

```javascript
function readNodes(tree, callback) {
    let node, curTree = [...tree]
    while ((node = curTree.shift())) {
        callback(node)
        node.children && curTree.unshift(...node.children)
    }
}
```

### 4. bfs-循环

```javascript
function readNodes(tree, callback) {
    let node, curTree = [...tree]
    while ((node = curTree.shift())) {
        callback(node)
        node.children && curTree.push(...node.children)
    }
}
```

