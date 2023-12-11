# timeCount

## 介绍
countdown 倒计时

## 源码

::: code-group

```javascript
/**
 * @description 倒计时
 * @param { number }ms 倒计时的时间
 * @param { Function } callback
 */
function countdown(ms, callback) {
    const storageTime = window.localStorage.getItem('startTime')
    const startTime = storageTime || new Date().getTime(); // 获取开始时间
    !storageTime && window.localStorage.setItem('startTime', startTime)
    async function tick() {
        const currentTime = new Date().getTime(); // 获取当前时间
        const elapsedTime = currentTime - startTime; // 计算已经过去的时间
        const remainingTime = Math.ceil((ms - elapsedTime)/1000) // 计算剩余时间
        callback(remainingTime, false); // 调用回调函数
        if (remainingTime > 1) {
            setTimeout(tick, 1000); // 在剩余时间后再次调用tick函数
        }else {
            setTimeout(() => {
                callback(remainingTime - 1, true)
            }, 1000)
            window.localStorage.setItem('startTime', '')
        }
    }

    tick(); // 启动倒计时
}
```
```typescript
/**
 * @description 倒计时
 * @param { number }ms 倒计时的时间
 * @param { Function } callback
 */
function countdown(ms: number, callback: (remainingTime: number, isFinished: boolean) => void): void {
  const storageTime: string | null = window.localStorage.getItem('startTime');
  const startTime: number = storageTime ? parseInt(storageTime) : new Date().getTime();
  if (!storageTime) {
    window.localStorage.setItem('startTime', startTime.toString());
  }

  async function tick(): Promise<void> {
    const currentTime: number = new Date().getTime();
    const elapsedTime: number = currentTime - startTime;
    const remainingTime: number = Math.ceil((ms - elapsedTime) / 1000);
    callback(remainingTime, false);
    if (remainingTime > 1) {
      setTimeout(tick, 1000);
    } else {
      setTimeout(() => {
        callback(remainingTime - 1, true);
      }, 1000);
      window.localStorage.setItem('startTime', '');
    }
  }

  tick();
}
```

:::

## 使用示例

### 示例1

```javascript
countdown(10000, (val, isEnd) => {
    console.log(val, isEnd)
})
```
