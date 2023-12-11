import{_ as s,o as i,c as a,R as e}from"./chunks/framework.Vrn_wj7i.js";const u=JSON.parse('{"title":"创建一个新的git仓库并提交代码，后续代码提交流程","description":"","frontmatter":{"title":"创建一个新的git仓库并提交代码，后续代码提交流程","date":"2021-08-13T22:13:46.000Z","tags":"git仓库创建 代码提交","summary":"对于Git仓库使用的总结","categories":"Git"},"headers":[],"relativePath":"files/Others/gitCreate.md","filePath":"files/Others/gitCreate.md"}'),t={name:"files/Others/gitCreate.md"},n=e(`<h4 id="第一次创建仓库" tabindex="-1">第一次创建仓库 <a class="header-anchor" href="#第一次创建仓库" aria-label="Permalink to &quot;第一次创建仓库&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git init</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git add .</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git commit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;first commit&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git remote add origin git地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git push </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">u origin master</span></span></code></pre></div><h4 id="正常拉取流程" tabindex="-1">正常拉取流程 <a class="header-anchor" href="#正常拉取流程" aria-label="Permalink to &quot;正常拉取流程&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git add .// 添加所有文件</span></span>
<span class="line"><span>git commit -m ‘注释’// 提交到本地</span></span>
<span class="line"><span>git remote add origin git地址</span></span>
<span class="line"><span>git pull origin git地址</span></span>
<span class="line"><span>git push origin master 推送至远程</span></span></code></pre></div><h4 id="遇到的错误以及解决方法" tabindex="-1">遇到的错误以及解决方法 <a class="header-anchor" href="#遇到的错误以及解决方法" aria-label="Permalink to &quot;遇到的错误以及解决方法&quot;">​</a></h4><ul><li><code>fatal: refusing to merge unrelated histories</code></li><li>解决方法：<code>git pull origin master --allow-unrelated-histories</code></li></ul><hr><ul><li><code>couldn&#39;t find remote ref –allow-unrelated-histories</code></li><li>解决方法：<code>git pull --rebase origin master</code></li></ul><hr><ul><li><code>src refspec master does not match any</code></li><li>解决方法： 当前仓库为空，添加内容后再提交即可</li></ul>`,10),l=[n];function r(p,o,h,d,c,g){return i(),a("div",null,l)}const m=s(t,[["render",r]]);export{u as __pageData,m as default};
