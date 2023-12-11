---
title: 自定义计时器
date: 2022-05-13 10:15:17
tags: js 计数器
summary: 自定义定时器，返回计时结果
categories: JavaScript
---
# 自定义计时器函数

## 说明

用于实现计时功能(可在callback中接收当前值，并执行相应操作或者结束计时)，接收两个参数 **params**(Object)和**callback**;

1. **params**: 为一个对象
   + **startVal**: 初始值-默认`60`
   + **endVal**: 结束值-默认`0`
   + **valSetp**: 步长,正数则正计时,负数倒计时-默认`-1`
   + **timerStep**: 周期定时器的时间步长-默认`1000`
2. **callback**: 为一个回调函数,接收一个当前值的参数。返回若为`true`则终止计时。
> 注意：callback若有返回值（无论什么值）,则endVal会失效
## 代码实现
```
/**
 * 描述: 计时器
 * @param {Object} params 配置参数
 * @param {Function} calback 计时器执行时的回调函数
 */
const TimeCount = (params, callback) => {
    // 设置缺省默认值
    const defaultVal = {
        startVal: 60,
        endVal: 0,
        valStep:-1,
        timerStep: 1000,
    }
    // 判断当前传入的params是否是一个对象
    let isObject = Object.prototype.toString.call(params) === '[object Object]'
    if(!isObject){
        params = Object.assign({},defaultVal)
        console.log('params type is not Object')
    }else {
        Object.keys(defaultVal).forEach((item) => {
            if(!params.hasOwnProperty(item)){
                params[item] = defaultVal[item]
            }
        })
    }
    // 从传入的对象解构出需要的值
    let { startVal,endVal,valStep, timerStep} = params;
    let currentVal = startVal;
    let timer = setInterval(() => {
        currentVal = currentVal + valStep;
        let callbackReturn = callback(currentVal);
        // 判断callback有无返回值和当前的结束值来判断是否结束计时
        if(callbackReturn!==undefined){
            callbackReturn && clearInterval(timer);
        }else{
            currentVal===endVal && clearInterval(timer);
        }
    }, timerStep)
}
```
