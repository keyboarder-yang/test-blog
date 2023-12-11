# waterFall

## 介绍
waterFall 用于实现DOM元素的瀑布流排布（基于定位方式实现）。

## 源码

::: code-group

```javascript
/**
 * @description 瀑布流布局函数-定位的实现方式（父绝子相，子元素须设置宽度）
 * @param {String} className - 子元素类名
 * @param {Number} columns - 列数
 * @param {Number} columnGap - 列之间的间距
 * @param {Number} rowGap - 行之间的间距
 */
function waterFall(className, columns = 3, columnGap = 0, rowGap = 0) {
    // 获取待排序的所有DOM元素
    let items = document.getElementsByClassName(className);
    // 获取待排序的元素块的宽度
    let itemWidth = items[0].offsetWidth;
    // 用来存储每一列的高度
    let columnHeightArr = new Array(columns).fill(0);
    for (let i = 0; i < items.length; i++) {
        // 最小高度,minHeight=0 说明是第一行
        let minHeight = Math.min(...columnHeightArr);
        let newRowGap = minHeight ? rowGap : 0;
        // 最小高度列的索引
        let index = columnHeightArr.findIndex(item => item === minHeight);
        items[i].style.top = minHeight + newRowGap + 'px';
        items[i].style.left = (itemWidth + columnGap) * index + 'px';
        columnHeightArr[index] = minHeight + items[i].offsetHeight + newRowGap;
    }
}
```
```typescript
/**
 * @description 瀑布流布局函数-定位的实现方式（父绝子相，子元素须设置宽度）
 * @param {String} className - 子元素类名
 * @param {Number} columns - 列数
 * @param {Number} columnGap - 列之间的间距
 * @param {Number} rowGap - 行之间的间距
 */
function waterFall(className: string, columns: number = 3, columnGap: number = 0, rowGap: number = 0): void {
    // 获取待排序的所有DOM元素
    let items: HTMLCollectionOf<Element> = document.getElementsByClassName(className);
    // 获取待排序的元素块的宽度
    let itemWidth: number = items[0].offsetWidth;
    // 用来存储每一列的高度
    let columnHeightArr: number[] = new Array(columns).fill(0);
    for (let i = 0; i < items.length; i++) {
        // 最小高度,minHeight=0 说明是第一行
        let minHeight: number = Math.min(...columnHeightArr);
        let newRowGap: number = minHeight ? rowGap : 0;
        // 最小高度列的索引
        let index: number = columnHeightArr.findIndex(item => item === minHeight);
        items[i].style.top = minHeight + newRowGap + 'px';
        items[i].style.left = (itemWidth + columnGap) * index + 'px';
        columnHeightArr[index] = minHeight + items[i].offsetHeight + newRowGap;
    }
}
```

:::

## 使用示例

### 示例1-常规用法
::: warning
使用必要条件
1. 父元素设置了绝对定位
2. 子元素设置了相对定位
3. 子元素设置了宽度
:::
```javascript
waterFall('item', 3, 10, 10)
```

