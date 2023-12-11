# getDataFromObject

## 介绍
getDataFromObject 用于从对象中获取指定的属性值，并返回到一个新的对象中去。

## 源码

::: code-group

```javascript
/**
 * @description 从目标对象中获取指定的数据，返回一个新的对象
 * @param { Object } targetObject - 目标对象
 * @param { Array } keys - 新对象的keys eg ['a', 'b', 'c as newC', 'd as newD']
 * @param { boolean } isConsoleError - 是否打印未找到的属性名
 */
function getDataFromObject(targetObject, keys, isConsoleError = true) {
        return keys.reduce((result, key) => {
            const allKey = key.split(' as ');
            const [oKey, nKey] = allKey;
            if (targetObject.hasOwnProperty(oKey)) {
                let rKey = nKey || oKey
                result[rKey] = targetObject[oKey];
            } else {
                if (isConsoleError) {
                    console.log(`目标对象中未读取到${oKey}属性`)
                }
            }
            return result;
        }, {});
    }
```
```typescript
/**
 * @description 从目标对象中获取指定的数据，返回一个新的对象
 * @param { Object } targetObject - 目标对象
 * @param { Array } keys - 新对象的keys
 * @param { boolean } isConsoleError - 是否打印未找到的属性名
 */
function getDataFromObject(targetObject: object, keys: string[], isConsoleError: boolean = true): object {
    return keys.reduce((result: object, key: string) => {
        const allKey: string[] = key.split(' as ');
        const [oKey, nKey]: string[] = allKey;
        if (targetObject.hasOwnProperty(oKey)) {
            let rKey: string = nKey || oKey;
            result[rKey] = targetObject[oKey];
        } else {
            if (isConsoleError) {
                console.log(`目标对象中未读取到${oKey}属性`);
            }
        }
        return result;
    }, {});
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
const newInfo = getDataFromObject(info, ['name', 'age']) 
console.log(newInfo) // {name:'Keyboarder',age: 18}
```

### 示例2

```javascript
const info = {
    name: 'Keyboarder',
    age: 18,
    address: 'AnHui,HeFei',
}
const newInfo = getDataFromObject(info, ['name as userName', 'age'])
console.log(newInfo) // {userName:'Keyboarder',age: 18}
```
