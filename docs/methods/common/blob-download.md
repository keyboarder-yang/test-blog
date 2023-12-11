# blobDownload

## 介绍
blobDownload 下载后端返回的二进制流。

## 源码

::: code-group

```javascript
/**
 * @description 下载后端返回的二进制流
 * @param {blob} blobData - 待处理的二进制数据
 * @param {string} fileName - 文件名称
 * @param {string} type - 文件类型
 */
const downloadFile = (blobData, fileName, type) => {
    let fileTypeMime = ''; // 文件 mime 类型
    const fileTypeMimeMap = {
        'png': 'image/png',
        'doc': 'application/msword',
        'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'jpg': 'image/jpeg',
        'gif': 'image/gif',
        'svg': 'image/svg+xml',
        'tif': 'image/tiff',
        'txt': 'image/plain',
        'ppt': 'application/vnd.ms-powerpoint',
        'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'xls': 'application/vnd.ms-excel',
        'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'zip': 'application/zip',
        '7z': 'application/x-7z-compressed',
    }
    fileTypeMime = fileTypeMimeMap[type]
    let blob = window.URL.createObjectURL(new Blob([blobData], { 'type': fileTypeMime }));
    let link = document.createElement('a');
    link.style.display = 'none';
    link.href = blob;
    if(fileName){
        link.setAttribute('download', fileName + '.' + type)
    }
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link) //下载完成移除元素
    window.URL.revokeObjectURL(blob) //释放掉 blob 对象
}
```
```typescript
/**
 * @description 下载后端返回的二进制流
 * @param {Blob} blobData - 待处理的二进制数据
 * @param {string} fileName - 文件名称
 * @param {string} type - 文件类型
 */
const downloadFile = (blobData: Blob, fileName: string, type: string): void => {
    let fileTypeMime: string = ''; // 文件 mime 类型
    const fileTypeMimeMap: { [key: string]: string } = {
        'png': 'image/png',
        'doc': 'application/msword',
        'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'jpg': 'image/jpeg',
        'gif': 'image/gif',
        'svg': 'image/svg+xml',
        'tif': 'image/tiff',
        'txt': 'image/plain',
        'ppt': 'application/vnd.ms-powerpoint',
        'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'xls': 'application/vnd.ms-excel',
        'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'zip': 'application/zip',
        '7z': 'application/x-7z-compressed',
    }
    fileTypeMime = fileTypeMimeMap[type]
    let blob = window.URL.createObjectURL(new Blob([blobData], { 'type': fileTypeMime }));
    let link = document.createElement('a');
    link.style.display = 'none';
    link.href = blob;
    if(fileName){
        link.setAttribute('download', fileName + '.' + type)
    }
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link) //下载完成移除元素
    window.URL.revokeObjectURL(blob) //释放掉 blob 对象
}
```

:::

## 使用示例

### 示例1-常规用法

```javascript
request(params).then(res => {
    let blobData = res.data;
    downloadFile(blobData, '自定义名称', 'xlsx');
})
```

