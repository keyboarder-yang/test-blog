---
title: 微前端学习
date: 2023-02-14 15:49:55
tags: 微前端
summary: 微前端学习
categories: MicroFront
---

# 微前端

## 什么是微前端 :question:
> Techniques, strategies and recipes for building a **modern web app** with **multiple teams** that can **ship features independently** [ -- Micro Frontend](https://micro-frontends.org/) <br>
> 微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。<br>

## 产生原因 :page_with_curl:
> Over time the frontend layer, often developed by a separate team, grows and gets more difficult to maintain. That’s what we call a Frontend Monolith.[ -- Micro Frontend](https://micro-frontends.org/) <br>
> 随着时间的推移，项目会越来越大，越来越难以维护。这就是我们所说的巨石应用。

## 实现思想 :bulb:
+ **技术栈无关**<br>主框架不限制接入应用的技术栈，微应用具备完全自主权
+ **独立开发、独立部署**<br>微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新
+ **增量升级**<br>在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略
+ **状态隔离**<br>每个微应用之间状态隔离，运行时状态不共享
  



