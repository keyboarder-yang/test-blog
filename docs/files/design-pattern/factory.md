---
title: 设计模式学习 --- 工厂模式
date: 2022-05-29 13:33:57
tags: 工厂模式
summary: 对于工厂模式的一些简单理解
categories: DesignPattern
---

#### 定义

>  + 工厂模式是最常用的实例化对象模式，是用工厂方法代替new操作的一种模式，工厂模式适用与一个方法根据参数不同，创建不同的实例对象。不需要关心具体操作的逻辑，只关心执行哪个操作即可。
>  + 工厂模式分为三种： 简单工厂、工厂方法、抽象工厂

#### 示例

> 介绍：只做一个弹窗，根据点击不同的按钮，实现不同的弹窗样式

1. 弹窗`html`代码

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>factory-pattern</title>
       <style>
           .modal{
               position: fixed;
               width: 500px;
               height: 500px;
               box-shadow: 1px 3px 5px #999;
               top: 50%;
               left: 50%;
               margin: -250px 0 0 -250px;
           }
           .modal header{
               height: 50px;
               line-height: 50px;
               background-color: #333;
               color: white;
               padding: 5px 10px;
           }
           .modal.success header{
               background-color: green;
           }
           .modal.warning header{
               background-color: orange;
           }
           .modal.error header{
               background-color: red;
           }
       </style>
   </head>
   <body>
   <div class="modal">
       <header>modal</header>
   </div>
   <div class="btn-group">
       <button data-status="S">成功</button>
       <button data-status="W">警告</button>
       <button data-status="E">失败</button>
   </div>
   <script type="module" src="./index.js"></script>
   </body>
   </html>
   ```

2. 引入的`js`代码

   ```js
   (()=>{   
       let oModal = document.getElementsByClassName('modal')[0];    // 获取弹窗的DOM元素
       let oBtn = document.getElementsByClassName('btn-group')[0];  // 获取按钮组的DOM元素
       let init = () => {
           bindEvent() // 绑定监听事件
       }
       // 监听事件
       function bindEvent() {
           oBtn.addEventListener("click", handleBtnClick,false);
       }
   	// 处理按钮点击
       function handleBtnClick(e) {
           let tar = e.target;
           let tag = tar.tagName.toLocaleLowerCase()
   
           if(tag === 'button'){
               let status = tar.dataset.status; // 获取点击状态--区分点击的哪种按钮  S、W、E  三中状态
               statusChange(status)   // 执行状态切换
           }
       }
       // 状态切换---className切换  实现不同风格弹窗切换
       function statusChange(status) {
           let className = 'modal'
           switch (status) {
               case 'S':
                   className += ' success';
                   break;
               case 'W':
                   className += ' warning';
                   break;
               case 'E':
                   className += ' error';
                   break;
               default:
                   break;
           }
           oModal.className = className;
       }
       init()
   })()
   
   ```

3. 步骤1和步骤2很好的实现了点击切换弹窗的功能，也极大程度上实现了程序的内聚。但是最严重的问题在于`statusChange`方法上，该方法把逻辑和功能全写在一起，新增需求时，只能在statusChange中继续书写，从而使得该方法愈加臃肿。故有以下思路：

   > 1. 传入当前状态status，根据不同状态执行不同的创建弹窗方法，这样如若不同弹窗有不同需求，只需在各自的方法上追加功能即可
   > 2. 相同的功能可以提取出来放在父类上
   > 3. 不同状态的类继承该父类，又可各自拥有自己独特的方法
   > 4. 在`index.js`中，可以引入专门创建的方法，传入当前的`DOM`和`status`

4. 修改后的`index.js`文件

   ```js
   import Factory from './factory-create.js'
   (()=>{
       let oModal = document.getElementsByClassName('modal')[0]
       let oBtn = document.getElementsByClassName('btn-group')[0];
       let factory = new Factory(oModal) // 传入当前的DOM元素给工厂函数
       let init = () => {
           bindEvent()
       }
       function bindEvent() {
           oBtn.addEventListener("click", handleBtnClick,false)
       }
   
       function handleBtnClick(e) {
           let tar = e.target;
           let tag = tar.tagName.toLocaleLowerCase()
           if(tag === 'button'){
               let status = tar.dataset.status;
               let a = factory.create(status,'弹窗') // 工厂类的实例上希望有一个专门用于创建的函数（create），传入状态status和自定义内容
           }
       }
       init()
   })()
   
   ```

   

5. `factory-create.js`文件

   ```js
   /**
    * 1. 不同状态的弹窗都有的 --- 公共的方法或者属性(都接收一个status状态值)
    *
    * 2. 不同状态的弹窗 内部属性的加工和功能扩展 Success，Warning，Error
    *
    * 3. 通过传入的状态，自动实例化相应的类
    */
   
   // Modal 为公共的父类，接收一个状态，并把其放置用它创建的实例上
   class Modal {
       constructor(status) {
           this.status = status
       }
   	
       // get 类似于Object.defineProperty中的get
       // 拦截，当访问实例上的className时，会执行以下内容（根据实例状态，返回不同的类名）
       get className() {
           let classStr = 'modal'
           switch (this.status) {
               case 'S':
                   classStr += ' success'
                   break
               case 'W':
                   classStr += ' warning'
                   break
               case 'E':
                   classStr += ' error'
                   break
               default:
                   break
           }
           return classStr
       }
   }
   
   // 成功类型弹窗
   class SuccessModal extends Modal{
       constructor(status,title) {
           super(status);
           this.title = title;
       }
   }
   // 告警类型弹窗
   class WarningModal extends Modal{
       constructor(status,title) {
           super(status);
           this.title = title;
       }
   }
   // 失败类型弹窗
   class ErrorModal extends Modal{
       constructor(status,title) {
           super(status);
           this.title = title;
       }
   }
   
   // 工厂函数
   class Factory {
       constructor(dom) {
           this.dom = dom
       }
       create(status,title){
           const dom = this.dom;
           let modal = null
           switch (status) {
               case 'S':
                   modal = new SuccessModal(status,title);
                   break;
               case 'W':
                   modal = new WarningModal(status,title);
                   break;
               case 'E':
                   modal = new ErrorModal(status,title);
                   break;
               default:
                   break;
           }
           dom.getElementsByTagName('header')[0].innerText = modal.title;
           dom.className = modal.className;
       }
   }
   export default Factory
   ```

   

6. 工厂函数`Factory`接收一个`DOM`元素，内有一个create方法，create方法接收一个状态，用于创建不同的弹窗，虽然内部也是Switch分支语句，但此处分支语句只是用来实例化不同的弹窗类，具体的新需求的增加或修改，可以直接在弹窗类中实现。如新增需求：错误弹窗在控制台输出错误信息

7. 下面只把不同部分展示

   ```js
   /**
    * 1. 不同状态的弹窗都有的 --- 公共的方法或者属性(都接收一个status状态值)
    *
    * 2. 不同状态的弹窗 内部属性的加工和功能扩展 Success，Warning，Error
    *
    * 3. 通过传入的状态，自动实例化相应的类
    */
   
   class Modal {
       constructor(status) {
           this.status = status
       }
   
       get className() {
           let classStr = 'modal'
           switch (this.status) {
               case 'S':
                   classStr += ' success'
                   break
               case 'W':
                   classStr += ' warning'
                   break
               case 'E':
                   classStr += ' error'
                   break
               default:
                   break
           }
           return classStr
       }
   	// 1. 新增输出方法
       static output(info) {
           console.log(info)
       }
   }
   
   
   class ErrorModal extends Modal{
       constructor(status,title) {
           super(status);
           this.title = title;
       }
   	// 2. 错误的弹窗中定义方法，并调用父类的输出方法 
       output(info) {
           Modal.output('错误提示：'+ info)
       }
   }
   
   class Factory {
       constructor(dom) {
           this.dom = dom
       }
       create(status,title){
           const dom = this.dom;
           let modal = null
           switch (status) {
               case 'S':
                   modal = new SuccessModal(status,title);
                   break;
               case 'W':
                   modal = new WarningModal(status,title);
                   break;
               case 'E':
                   modal = new ErrorModal(status,title);
                   break;
               default:
                   break;
           }
           dom.getElementsByTagName('header')[0].innerText = modal.title;
           dom.className = modal.className;
           // 3. 此处把定义的方法返回出去即可
           return {
               handleErrorTip: modal.output
           }
       }
   }
   export default Factory
   ```

   

8. 上面代码把这种创建过程交给特定的方法的一种实现就是工厂模式，上面只是一种最简单的工厂模式。

9. Switch分支语句中根据字母去维护，显然是不利的。根据策略模式---策略类和环境类，可以对如上Switch分支语句进行优化：

   ```js
   /**
    * 1. 不同状态的弹窗都有的 --- 公共的方法或者属性(都接收一个status状态值)
    *
    * 2. 不同状态的弹窗 内部属性的加工和功能扩展 Success，Warning，Error
    *
    * 3. 通过传入的状态，自动实例化相应的类
    */
   class Modal {
       constructor(status) {
           this.status = status
       }
   
       get className() {
           return statusMap[this.status].className;
       }
   
       static output(info) {
           console.log(info)
       }
   }
   
   class SuccessModal extends Modal{
       constructor(status,title) {
           super(status);
           this.title = title;
       }
   }
   
   class WarningModal extends Modal{
       constructor(status,title) {
           super(status);
           this.title = title;
       }
   }
   
   class ErrorModal extends Modal{
       constructor(status,title) {
           super(status);
           this.title = title;
       }
       output(info) {
           Modal.output('错误提示：'+ info)
       }
   }
   
   class Factory {
       constructor(dom) {
           this.dom = dom
       }
       create(status,title){
           const dom = this.dom;
           let modal = new statusMap[status].instance(status,title);
           dom.getElementsByTagName('header')[0].innerText = modal.title;
           dom.className = modal.className;
           return {
               handleErrorTip: modal.output
           }
       }
   }
   export default Factory
   
   const statusMap = {
       'S': {
           className: 'modal success',
           instance: SuccessModal,
       },
       'W': {
           className: 'modal warning',
           instance: WarningModal,
       },
       'E': {
           className: 'modal error',
           instance: ErrorModal,
       }
   }
   ```

   > 策略类`statusMap`，定义了不同状态下的策略（`className`，`instance`),这样即使状态发生改变，也只需要更改策略类就可完成相应改变。

