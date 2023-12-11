# concurrencyRequest

## 介绍

concurrencyRequest 并发请求控制。

## 源码

::: code-group
```javascript
/**
     * @description 并发请求控制
     * @param { Array<Function> }requestFunctions 请求的函数列表，函数返回一个Promise。Function: () => Promise
     * @param { Number }concurrencyNum 并发数量
     * @return { Promise } 响应结果
     */
    function concurrencyRequest (requestFunctions, concurrencyNum) {
        // 请求之前的操作
        function beforeRequest() {
            let validateResult = { content: '', flag: true }
            if(!requestFunctions.length){
                validateResult.content = [];
                validateResult.flag = false;
                return validateResult
            }
            if (!((Number.isInteger(concurrencyNum) || concurrencyNum === Infinity) && concurrencyNum > 0)) {
                validateResult.content = '并发数量应不小于1';
                validateResult.flag = false;
                return validateResult
            }
            concurrencyNum = Math.min(concurrencyNum, requestFunctions.length)
            return validateResult
        }
        const { content, flag } = beforeRequest()
        // 验证不通过返回验证的结果
        if(!flag){
            return Promise.resolve(content)
        }
        // 响应的结果列表
        const responseList = [];
        // 下一个请求的索引
        let nextIndex = 0;
        // 已经完成的请求数量
        let finishedCount = 0;
        return new Promise((resolve) => {
            // 发送请求的函数
            async function sendRequest() {
                if(nextIndex === requestFunctions.length) return;
                const currentIndex = nextIndex;
                nextIndex++;
                try{
                    responseList[currentIndex] = await requestFunctions[currentIndex]();
                }catch (error) {
                    responseList[currentIndex] = error;
                }finally {
                    finishedCount++;
                    if(finishedCount === requestFunctions.length){
                        resolve(responseList)
                    }
                    await sendRequest()
                }
            }

            // 根据并发数量，决定启动几个请求
            for(let i = 0; i < concurrencyNum; i++) {
                sendRequest();
            }
        })
    }
```

```typescript
/**
 * @description 并发请求控制
 * @param { Array<Function> }requestFunctions 请求的函数列表，函数返回一个Promise。Function: () => Promise
 * @param { Number }concurrencyNum 并发数量
 * @return { Promise } 响应结果
 */
function concurrencyRequest (requestFunctions: Array<Function>, concurrencyNum: number): Promise<any> {
    // 请求之前的操作
    function beforeRequest(): { content: any, flag: boolean } {
        let validateResult = { content: '', flag: true }
        if(!requestFunctions.length){
            validateResult.content = [];
            validateResult.flag = false;
            return validateResult
        }
        if (!((Number.isInteger(concurrencyNum) || concurrencyNum === Infinity) && concurrencyNum > 0)) {
            validateResult.content = '并发数量应不小于1';
            validateResult.flag = false;
            return validateResult
        }
        concurrencyNum = Math.min(concurrencyNum, requestFunctions.length)
        return validateResult
    }
    const { content, flag } = beforeRequest()
    // 验证不通过返回验证的结果
    if(!flag){
        return Promise.resolve(content)
    }
    // 响应的结果列表
    const responseList: Array<any> = [];
    // 下一个请求的索引
    let nextIndex: number = 0;
    // 已经完成的请求数量
    let finishedCount: number = 0;
    return new Promise((resolve) => {
        // 发送请求的函数
        async function sendRequest() {
            if(nextIndex === requestFunctions.length) return;
            const currentIndex: number = nextIndex;
            nextIndex++;
            try{
                responseList[currentIndex] = await requestFunctions[currentIndex]();
            }catch (error) {
                responseList[currentIndex] = error;
            }finally {
                finishedCount++;
                if(finishedCount === requestFunctions.length){
                    resolve(responseList)
                }
                await sendRequest()
            }
        }

        // 根据并发数量，决定启动几个请求
        for(let i = 0; i < concurrencyNum; i++) {
            sendRequest();
        }
    })
}
```


:::

## 使用示例

### 示例1

```javascript
function getRequestList(num) {
    let list = []
    for(let i = 1; i< num; i++){
        list.push(() => fetch(`https://jsonplaceholder.typicode.com/posts/${i}`))
    }
    return list
}
concurrencyRequest(getRequestList(20), 2).then(res =>{
    console.log(res)
})
```
