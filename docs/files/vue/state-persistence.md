---
title: vue中的数据持久化存储
date: 2022-06-26 10:42:05
tags: vuex
summary: 对vue中数据持久化存储的简单理解
categories: Vue
---

#### 为什么要做持久化存储

> 例如`token`、用户信息，当后端接口响应回来数据之后，我们一般会将数据存放到`vuex`中，以供其他组件方便使用，当页面刷新时，`vuex中`的数据就会消失，需要重新请求。
>
> > `JavaScript`运行过程中的数据都存储在内存中，刷新页面，内存会被清空。

#### 实现

##### 1. 通过`vue-js-cookie`

1. 安装

   > ```
   > npm install js-cookie --save
   > ```

2. 封装---`auth.js`

   > ```javascript
   > import Cookies from 'js-cookie'
   > 
   > // 统一设置 存储的名称
   > const TokenKey = 'token'
   > 
   > // 获取token
   > export function getToken() {
   >  return Cookie.get(TokenKey)
   > }
   > 
   > // 设置token
   > export function setToken() {
   >  return Cookie.set(TokenKey,token)
   > }
   > 
   > // 移除token
   > export function removeToken() {
   >  return Cookie.remove(TokenKey)
   > }
   > ```

3. 存储`store/index.js`

   > 将数据存放到本地，获取本地存储的token

   ```javascript
   import Vue from 'vue'
   import Vuex from 'vuex'
   import {getToken,setToken,removeToken} from '../utils/auth'
   Vue.use(Vuex)
   export default new Vuex.store({
   	state: {
           token: getToken(),// token直接从本地cookie中读取
       },
       mutations: {
           // 设置token
           setToken(state,token){
               state.token = data
               setToken(token)
           },
           // 移除token
           removeToken(state) {
       		state.token = null
       		removeToken()
   		}
       }
   })
   ```

4. 使用`login.vue`

   ```javascript
   import {login} from 'api/user.js'
   import {setToken} from ''
   methods: {
   	async login() {
   		let params = {account:'',password:''};
   		let res = await login(params);
   		this.$store.commit('setToken',res.data.tokenData)
   	}
   }
   ```

##### 2. 通过`localstorage`

1. 封装`storage.js`

   ```javascript
   const TokenKey = 'token'
   
   // 获取token
   export const getToken = () => {
   	return JSON.parse(localStorage.getItem(TokenKey))
   }
   
   // 设置token
   export const getToken = (token) => {
   	localStorage.setItem(TokenKey,JSON.stringify(token))
   }
   
   // 移除token
   export const removeToken = () => {
   	localStorage.removeItem(TokenKey)
   }
   ```

2. 存储和使用和方法一中一致

#### 为什么数据需要放在vuex中，而非直接从本地取

> + vuex--数据统一，全局管理，一旦数据在某组件更新，其他所有组件的数据都会同步更新，是响应式的。
> + vuex数据是存储在内存中的，而`localStorage`是存储在磁盘中的，数据从内存中读取的速度要远高于从磁盘中读取的速度，也是提升性能的一个小技巧。

   
