# operate

## 介绍
operate 用于解决js中浮点数的运算产生的精度问题。

## 源码

::: code-group

```javascript
/**
 * @description 解决js中浮点数运算产生的精度问题
 * @param { string } op - 操作的类型 + - * /
 * @param { number } number1 - 操作数1
 * @param { number } number2 - 操作数2
 * @param { number } maxTimes - 对阶的倍数（非必填）
 * @return { number }
 */
const operate = (op, number1, number2, maxTimes) => {
        let timesList = [];
        let args = [number1, number2];
        args.forEach(arg => {
            let arr = arg.toString().split('.');
            let times = arr.length === 1 ? 1 : arr[1].length + 1;
            timesList.push(times)
        })
        let max = Math.max(...timesList)
        maxTimes = maxTimes ? maxTimes : Math.pow(10, max);
        let res = 0;
        switch (op) {
            case "+" :
                res = (number1 * maxTimes + number2 * maxTimes) / maxTimes
                break;
            case "-" :
                res = (number1 * maxTimes - number2 * maxTimes) / maxTimes;
                break;
            case "*" :
                res = ((number1 * maxTimes) * (number2 * maxTimes)) / (maxTimes * maxTimes);
                break;
            case "/" :
                res = (number1 * maxTimes) / (number2 * maxTimes);
                break;
        }
        let r = res.toString().split('.')[1]
        if (r && r.length > max) {
            let m = Math.pow(10, max + 1)
            return operate(op, number1, number2, m)
        }
        return res
    }
```
```typescript
/**
 * @description 解决js中浮点数运算产生的精度问题
 * @param { string } op - 操作的类型 + - * /
 * @param { number } number1 - 操作数1
 * @param { number } number2 - 操作数2
 * @param { number } maxTimes - 对阶的倍数（非必填）
 * @return { number }
 */
const operate = (op: string, number1: number, number2: number, maxTimes?: number): number => {
        let timesList: number[] = [];
        let args: number[] = [number1, number2];
        args.forEach(arg => {
            let arr = arg.toString().split('.');
            let times = arr.length === 1 ? 1 : arr[1].length + 1;
            timesList.push(times)
        })
        let max = Math.max(...timesList)
        maxTimes = maxTimes ? maxTimes : Math.pow(10, max);
        let res = 0;
        switch (op) {
            case "+" :
                res = (number1 * maxTimes + number2 * maxTimes) / maxTimes
                break;
            case "-" :
                res = (number1 * maxTimes - number2 * maxTimes) / maxTimes;
                break;
            case "*" :
                res = ((number1 * maxTimes) * (number2 * maxTimes)) / (maxTimes * maxTimes);
                break;
            case "/" :
                res = (number1 * maxTimes) / (number2 * maxTimes);
                break;
        }
        let r = res.toString().split('.')[1]
        if (r && r.length > max) {
            let m = Math.pow(10, max + 1)
            return operate(op, number1, number2, m)
        }
        return res
    }
```

:::

## 使用示例

### 示例1
```javascript
console.log(operate('+', 0.1, 0.2))
console.log(operate('+', 0.7, 0.1))
console.log(operate('+', 0.2, 0.4))
console.log(operate('-', 1.5, 1.2))
console.log(operate('-', 0.3, 0.2))
console.log(operate('*', 19.9, 100))
console.log(operate('*', 0.8, 3))
console.log(operate('*', 35.41, 100))
console.log(operate('/', 0.3, 0.1))
console.log(operate('/', 0.69, 10))
```

