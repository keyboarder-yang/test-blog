# uuid

## 介绍
uuid 生成唯一uuid码。

## 源码

::: code-group

```javascript
/**
 * @description 生成唯一的uuid码
 * @return { string } uuid
 */
const generateUUID = () => {
    let templateString = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    let reg = /[xy]/g;
    function replace(currentString) {
        let random = Math.random() * 16 | 0;
        let replacedString = currentString === 'x' ? random : (random & 0x3 | 0x8);
        return replacedString.toString(16)
    }
    return templateString.replace(reg, replace)
}
```
```typescript
/**
 * @description 生成唯一的uuid码
 * @return { string } uuid
 */
const generateUUID = (): string => {
    let templateString: string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    let reg: RegExp = /[xy]/g;
    function replace(currentString: string): string {
        let random: number = Math.random() * 16 | 0;
        let replacedString: string = currentString === 'x' ? random.toString(16) : (random & 0x3 | 0x8).toString(16);
        return replacedString;
    }
    return templateString.replace(reg, replace);
}
```

:::

## 使用示例

### 示例1

```javascript
generateUUID()
```

