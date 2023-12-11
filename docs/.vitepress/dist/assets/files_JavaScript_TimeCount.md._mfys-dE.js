import{_ as a,o as s,c as n,R as p}from"./chunks/framework.Vrn_wj7i.js";const g=JSON.parse('{"title":"自定义计时器","description":"","frontmatter":{"title":"自定义计时器","date":"2022-05-13T10:15:17.000Z","tags":"js 计数器","summary":"自定义定时器，返回计时结果","categories":"JavaScript"},"headers":[],"relativePath":"files/JavaScript/TimeCount.md","filePath":"files/JavaScript/TimeCount.md"}'),e={name:"files/JavaScript/TimeCount.md"},l=p(`<h1 id="自定义计时器函数" tabindex="-1">自定义计时器函数 <a class="header-anchor" href="#自定义计时器函数" aria-label="Permalink to &quot;自定义计时器函数&quot;">​</a></h1><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>用于实现计时功能(可在callback中接收当前值，并执行相应操作或者结束计时)，接收两个参数 <strong>params</strong>(Object)和<strong>callback</strong>;</p><ol><li><strong>params</strong>: 为一个对象 <ul><li><strong>startVal</strong>: 初始值-默认<code>60</code></li><li><strong>endVal</strong>: 结束值-默认<code>0</code></li><li><strong>valSetp</strong>: 步长,正数则正计时,负数倒计时-默认<code>-1</code></li><li><strong>timerStep</strong>: 周期定时器的时间步长-默认<code>1000</code></li></ul></li><li><strong>callback</strong>: 为一个回调函数,接收一个当前值的参数。返回若为<code>true</code>则终止计时。</li></ol><blockquote><p>注意：callback若有返回值（无论什么值）,则endVal会失效</p></blockquote><h2 id="代码实现" tabindex="-1">代码实现 <a class="header-anchor" href="#代码实现" aria-label="Permalink to &quot;代码实现&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 描述: 计时器</span></span>
<span class="line"><span> * @param {Object} params 配置参数</span></span>
<span class="line"><span> * @param {Function} calback 计时器执行时的回调函数</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const TimeCount = (params, callback) =&gt; {</span></span>
<span class="line"><span>    // 设置缺省默认值</span></span>
<span class="line"><span>    const defaultVal = {</span></span>
<span class="line"><span>        startVal: 60,</span></span>
<span class="line"><span>        endVal: 0,</span></span>
<span class="line"><span>        valStep:-1,</span></span>
<span class="line"><span>        timerStep: 1000,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 判断当前传入的params是否是一个对象</span></span>
<span class="line"><span>    let isObject = Object.prototype.toString.call(params) === &#39;[object Object]&#39;</span></span>
<span class="line"><span>    if(!isObject){</span></span>
<span class="line"><span>        params = Object.assign({},defaultVal)</span></span>
<span class="line"><span>        console.log(&#39;params type is not Object&#39;)</span></span>
<span class="line"><span>    }else {</span></span>
<span class="line"><span>        Object.keys(defaultVal).forEach((item) =&gt; {</span></span>
<span class="line"><span>            if(!params.hasOwnProperty(item)){</span></span>
<span class="line"><span>                params[item] = defaultVal[item]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 从传入的对象解构出需要的值</span></span>
<span class="line"><span>    let { startVal,endVal,valStep, timerStep} = params;</span></span>
<span class="line"><span>    let currentVal = startVal;</span></span>
<span class="line"><span>    let timer = setInterval(() =&gt; {</span></span>
<span class="line"><span>        currentVal = currentVal + valStep;</span></span>
<span class="line"><span>        let callbackReturn = callback(currentVal);</span></span>
<span class="line"><span>        // 判断callback有无返回值和当前的结束值来判断是否结束计时</span></span>
<span class="line"><span>        if(callbackReturn!==undefined){</span></span>
<span class="line"><span>            callbackReturn &amp;&amp; clearInterval(timer);</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            currentVal===endVal &amp;&amp; clearInterval(timer);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }, timerStep)</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,7),t=[l];function c(i,r,o,d,m,u){return s(),n("div",null,t)}const h=a(e,[["render",c]]);export{g as __pageData,h as default};
