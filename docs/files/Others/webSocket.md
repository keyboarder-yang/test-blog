---
title: WebSocket 连接---前端
date: 2021-06-21 19:49:41
tags: websocket
summary: 对于websocket的一些简单理解
categories: WebSocket
---
#### WebSocket 连接---前端

> 在线测试： http://coolaf.com/tool/chattest

```js
// webSocket.js
// websocket 的封装 
let Socket = ''
let setIntervalWesocketPush = null

/**
 * 建立websocket连接
 * @param {string} url ws地址
 */
export const createSocket = url => {
  Socket && Socket.close()
  if (url) {
    if (!Socket) {
      console.log('建立websocket连接')
      Socket = new WebSocket(url)
      Socket.onopen = onopenWS
      Socket.onmessage = onmessageWS
      Socket.onerror = onerrorWS
      Socket.onclose = oncloseWS
    } else {
      console.log('websocket已连接')
    }
  }
}

/**打开WS之后发送心跳 */
const onopenWS = () => {
  sendPing()
}

/**连接失败重连 */
const onerrorWS = () => {
  Socket.close()
  clearInterval(setIntervalWesocketPush)
  console.log('连接失败重连中')
  if (Socket.readyState !== 3) {
    Socket = null
    createSocket()
  }
}

/**WS数据接收统一处理 */
const onmessageWS = e => {
  window.dispatchEvent(new CustomEvent('onmessageWS', {
    detail: {
      data: e.data
    }
  }))
}

/**
 * 发送数据但连接未建立时进行处理等待重发
 * @param {any} message 需要发送的数据
 */
const connecting = message => {
  setTimeout(() => {
    if (Socket.readyState === 0) {
      connecting(message)
    } else {
      Socket.send(JSON.stringify(message))
    }
  }, 1000)
}

/**
 * 发送数据
 * @param {any} message 需要发送的数据
 */
export const sendWSPush = message => {
  if (Socket !== null && Socket.readyState === 3) {
    Socket.close()
    createSocket()
  } else if (Socket.readyState === 1) {
    Socket.send(JSON.stringify(message))
  } else if (Socket.readyState === 0) {
    connecting(message)
  }
}
/**断开重连 */
export const oncloseWS = () => {
  clearInterval(setIntervalWesocketPush)
  console.log('websocket已断开....正在尝试重连')
  if (Socket.readyState !== 2) {
    Socket = null
    createSocket()
  }
}
/**发送心跳
 * @param {number} time 心跳间隔毫秒 默认5000
 * @param {string} ping 心跳名称 默认字符串ping
 */
export const sendPing = (time = 5000, ping = 'ping') => {
  clearInterval(setIntervalWesocketPush)
  Socket.send(ping)
  setIntervalWesocketPush = setInterval(() => {
    Socket.send(ping)
  }, time)
}

// 断开连接
export const SocketClose = () => {
  Socket.close();
}

```

```vue
// 使用方法
<script>
 	// 引入 webSocket.js 文件
    import { createSocket, SocketClose } from "../../../../utils/webSocket";
    export default {
      name: "test",
      data() {
        return {
          path: "ws://82.157.123.54:9010/ajaxchattest",// ws 地址
        };
      },
      mounted() {
        // 实例化
        createSocket(this.path);
        // 添加监听，监听onmessage，用来获取ws返回的数据
        this.addEveLis();
      },
      destroyed() {
        // 页面销毁时，移除监听
        window.removeEventListener("onmessageWS", this.handleData);
        // 关闭websocket连接
        SocketClose();
      },
      methods: {
        // 添加监听事件
        addEveLis() {
          window.addEventListener("onmessageWS", this.handleData);
        },

        // 处理接收的数据
        handleData(info) {
          console.log(info.detail);
        },
      },
    };
</script>
	
```

