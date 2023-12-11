---
title: 创建一个新的git仓库并提交代码，后续代码提交流程
date: 2021-08-13 22:13:46
tags: git仓库创建 代码提交
summary: 对于Git仓库使用的总结
categories: Git
---
#### 第一次创建仓库
```js
git init
git add .
git commit -m 'first commit'
git remote add origin git地址
git push -u origin master
```

#### 正常拉取流程

```
git add .// 添加所有文件
git commit -m ‘注释’// 提交到本地
git remote add origin git地址
git pull origin git地址
git push origin master 推送至远程
```
#### 遇到的错误以及解决方法
- `fatal: refusing to merge unrelated histories`
- 解决方法：`git pull origin master --allow-unrelated-histories`
----
- `couldn't find remote ref –allow-unrelated-histories`
- 解决方法：`git pull --rebase origin master`
---
- `src refspec master does not match any`
- 解决方法： 当前仓库为空，添加内容后再提交即可
