# 执行上下文

## 什么是
::: tip 原文
An execution context is purely a specification mechanism and need not correspond to any particular artefact of an ECMAScript implementation. It is impossible for ECMAScript code to directly access or observe an execution context. 

执行上下文纯粹是一种规范机制，不需要对应于ECMAScript实现的任何特定代码。ECMAScript代码不可能直接访问或观察执行上下文。
:::
或者可以简单理解为：代码执行前，Js引擎创建的执行环境，环境包含当前正在运行的代码以及帮助其执行的所有内容


## 作用
::: tip 原文
that is used to track the runtime evaluation of code by an ECMAScript implementation. At any point in time, there is at most one execution context per agent that is actually executing code. This is known as the agent's running execution context.

用于跟踪ECMAScript实现对代码的运行时评估。在任何时间点，每个代理最多有一个实际执行代码的执行上下文。这称为代理的运行执行上下文。
:::

当前变量或函数的执行上下文，决定了他们可以访问到哪些数据，以及可以进行哪些操作。而且当前变量或函数都只能由一个执行上下文限制。

## 类型
1. **全局执行上下文（GEC）** ：不在任何函数中的代码都位于全局执行上下文中，只有一个，当JavaScript程序开始执行时就已经创建了全局上下文。
2. **函数执行上下文（FEC）** ：只有调用函数时，才会为该函数创建一个新的执行上下文，可以存在无数个，每当一个新的执行上下文被创建，它都会按照特定的顺序执行一系列步骤。
3. **Eval 函数执行上下文（eval代码）** ： 指的是运行在 eval 函数中的代码，很少使用。

## 生命周期
### 创建阶段
在执行上下文创建阶段会生成变量对象、建立作用域链、确定this的指向等
> 变量对象是与执行上下文相关的数据作用域，存储了上下文中定义的变量和函数声明 
> 变量对象是一个抽象的概念，在全局执行上下文中，变量对象就是全局对象。

#### 什么时候
:::tip 原文
A new execution context is created whenever control is transferred from the executable code associated with the currently running execution context to executable code that is not associated with that execution context.

当 JavaScript 代码执行一段可执行代码 executable code 时，会创建对应的执行上下文 execution context
:::

### 执行阶段
> 在执行阶段会有变量赋值、函数的引用、执行其他代码

### 销毁阶段
> 执行结束后出栈，等待回收

## 执行栈
> 执行栈是一种先进后出的数据结构，用来存储代码运行的所有执行上下文

1. 当 JS 引擎第一次遇到js脚本时，会创建一个全局的执行上下文并且压入当前执行栈 
2. 每当JS 引擎遇到一个函数调用，它会为该函数创建一个新的执行上下文并压入栈的顶部 
3. 当该函数执行结束时，执行上下文从栈中弹出，控制流程到达当前栈中的下一个上下文 
4. 一旦所有代码执行完毕，JS 引擎从当前栈中移除全局执行上下文

## 参考文献和文章出处
1. [「历时8个月」10万字前端知识体系总结（基础知识篇）](https://juejin.cn/post/7146973901166215176)

2. [JavaScript筑基（一）：执行上下文](https://juejin.cn/post/7118292682899718152)

   
