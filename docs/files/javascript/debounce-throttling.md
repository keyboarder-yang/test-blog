# 防抖和节流

## 背景

如果频繁的调用一个事件，可能会影响浏览器或者服务器的性能。防抖和节流可以减少调用频率，减少对性能的影响

## 防抖

### 定义

> 对于在事件被触发n秒后再执行的回调，如果在这n秒的时间间隔内再触发事件，重新开始计时

### 类别

+ 首次执行

  > 当提交数据发送请求时，我们希望首次是不需要进行防抖的，直接发送请求，再次请求时再去进行防抖操作。

+ 首次不执行

  > 首次不需要进行防抖，如：检查输入的合法性时

### 应用场景

> 当输入框输入完之后n秒之后才进行搜索

### 代码

```javascript
/*
 * @param {function} fn - 需要防抖的函数
 * @param {number} time - 多长时间执行一次(ms)
 * @param {boolean} flag - 第一次是否执行
 */
function debounce(fn, time = 3000, flag = false) {
    let timer;
    return function (...args) {
        // 在time时间段内重复执行，会清空之前的定时器，然后重新计时
        timer && clearTimeout(timer);
        if (flag && !timer) {
            fn(...args)
        }
        timer = setTimeout(() => {
            fn(...args)
        }, time);
    };
}
```

## 节流

### 定义

> 执行多次事件，单位时间间隔内只执行一次

### 应用场景

> 下拉滚动加载

### 代码

```javascript
/*
 * @param {function} fn - 需要防抖的函数
 * @param {number} time - 多长时间执行一次(ms)
 * @param {boolean} flag - 第一次是否执行
 */
function throttle(fn, time = 3000, flag = false) {
    let timer;
    return function (...args) {
        // flag控制第一次是否立即执行
        if (flag) {
            fn(...args);
            // 第一次执行完后，flag变为false；否则以后每次都会执行
            flag = false;
        }
        if (!timer) {
            timer = setTimeout(() => {
                fn(...args);
                // 每次执行完重置timer
                timer = null;
            }, time);
        }
    };
}
```
## 助记
::: tip 助记
+ 防抖：假如电梯10s后会关门并运行，当10s期间再有人按下上下按键并进入时，则会再重新计时。在10s的时间间隔后才会运行
+ 节流：不管有没有人进入，都是10s运行一次
:::
