---
title: element-ui --- DatePicker
date: 2022-06-12 16:09:50
tags: element
summary: element-ui中实现DatePicker选择范围的方法
categories: ElementUi
---

#### ElementUI --- DatePicker

> 前言：在使用`element-ui`的日期选择器的过程中，经常会有设置选择日期的范围的需求。

##### 实现方式

> 通过向`picker-options`中传入`disabledDate`函数的方式可以实现禁用效果

```javascript
pickOptions: {
	disabledDate(time){
        // 1. 根据time.getTime()获取展示的每个日期的时间戳
        // 2. 获取当前日期的时间戳
        // 3. 进行比较，返回结果
        return // 返回true/false
    }
}
```

> 每次都需要去单独写逻辑，很容易出错，所以做了极简的封装,接收四个参数：
>
> + `time`：`disabledDate`函数提供的参数。必须
> + `type`: `String`类型，`before`/`after`,表示禁用今日之前的日期还是禁用今日之后的日期。默认：`before`
> + `disabledCurrent`：`Boolean`类型，表示是否禁用当前日期`divideDate`传入或者当前日期（默认）。默认：`true`
> + `divideDate`：`String` 类型，以`-`相连。分割日期，以哪一天的日期进行分割。默认当天。如：`2022-06-12`

```javascript
// 禁用函数封装
function toDisabled(time, type = 'before', disabledCurrent = true, divideDate) {
  const errorTip = '参数传入错误，期望得到：'
  // 当前type的可选项
  const typeList = ['before', 'after'];
  const checkParams = ['time', 'type', 'disabledCurrent', 'divideDate'];
  const checkMap = {
    'time': {
      name: 'time',
      check: checkTime,
      expect: 'Date'
    },
    'type': {
      name: 'type',
      check: checkType,
      expect: 'before or after'
    },
    'disabledCurrent': {
      name: 'disabledCurrent',
      check: checkDisabledCurrent,
      expect: 'Boolean'
    },
    'divideDate': {
      name: 'divideDate',
      check: checkDivideDate,
      expect: 'YYYY-MM-DD'
    }
  }
  checkAll()
  // 获取当前日期对象
  const date = new Date();
  const newTime = time.getTime();
  // 获取当前日期的时间戳
  const newDividerDate = divideDate ? divideDate : date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  const currentDate = new Date(newDividerDate).getTime()
  const returnMap = {
    'before': {
      true: newTime <= currentDate,
      false: newTime < currentDate
    },
    'after': {
      true: newTime >= currentDate,
      false: newTime > currentDate
    }
  }

  // 检查传入的参数 --- type
  function checkType() {
    return typeList.includes(type)
  }

  // 检查传入的参数 --- disabledCurrent
  function checkDisabledCurrent() {
    return typeof (disabledCurrent) === 'boolean'
  }

  // 检查传入的参数 --- divideDate
  function checkDivideDate() {
    const Reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
    return Reg.test(divideDate) || (divideDate === undefined)
  }

  // 检查传入的参数 --- time
  function checkTime() {
    return Object.prototype.toString.call(time) === '[object Date]'
  }

  // 所有的检查项
  function checkAll() {
    for (let i = 0; i < checkParams.length; i++) {
      if (!checkMap[checkParams[i]].check()) {
        console.error(checkMap[checkParams[i]].name + errorTip + checkMap[checkParams[i]].expect)
        return
      }
    }
  }
  return returnMap[type] && returnMap[type][disabledCurrent]
}
```

> 使用

```javascript
data() {
    return {
        pickerOptions: {
            disabledDate(time) {
                return toDisabled(time, 'after', true,'2022-07-13');
            }
        },
    }
}
```

