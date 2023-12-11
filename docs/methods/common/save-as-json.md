# saveAsJson

## 介绍

saveAsJson 用于下载并保存数据为json格式。

## 源码

::: code-group

```javascript
/**
 * @description 前端数据下载为json格式
 * @param { Array } data - 待转换的数据
 * @param { string } filename - json文件的名称
 */
const saveAsJson = (data = [{}], filename = 'file.json') => {
        if (typeof data === "object") data = JSON.stringify(data)
        let blob = new Blob([data], {type: 'text/json'})
        let e = document.createEvent('MouseEvents')
        let a = document.createElement('a')
        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
```
```typescript
/**
 * @description 前端数据下载为json格式
 * @param { Array } data - 待转换的数据
 * @param { string } filename - json文件的名称
 */
const saveAsJson = (data: any[] = [{}], filename: string = 'file.json'): void => {
        if (typeof data === "object") data = JSON.stringify(data)
        let blob: Blob = new Blob([data], {type: 'text/json'})
        let e: MouseEvent = document.createEvent('MouseEvents')
        let a: HTMLAnchorElement = document.createElement('a')
        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
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
saveAsJson(info,'fileName.json')
```
