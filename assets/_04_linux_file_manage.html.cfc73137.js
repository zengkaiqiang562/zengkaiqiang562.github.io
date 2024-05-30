import{_ as e,e as a}from"./app.2a01fc36.js";var d="/assets/01.b19cb780.png";const n={},t=a('<h2 id="_1-linux-\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-linux-\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 1. <code>linux</code> \u76EE\u5F55\u7ED3\u6784</h2><p><img src="'+d+`" alt="" loading="lazy"></p><h3 id="_1-1-\u547D\u4EE4\u76EE\u5F55-bin-usr-bin\u3001-sbin-usr-sbin" tabindex="-1"><a class="header-anchor" href="#_1-1-\u547D\u4EE4\u76EE\u5F55-bin-usr-bin\u3001-sbin-usr-sbin" aria-hidden="true">#</a> 1.1 \u547D\u4EE4\u76EE\u5F55\uFF1A<code>/bin --&gt; /usr/bin</code>\u3001<code>/sbin --&gt; /usr/sbin</code></h3><div class="language-text ext-text"><pre class="language-text"><code>/bin --&gt; /usr/bin
\u5B58\u653E\u547D\u4EE4\uFF0C\u4E00\u822C\u6765\u8BF4\uFF0C\u666E\u901A\u7528\u6237\u548C root \u7528\u6237\u90FD\u53EF\u4EE5\u8FD0\u884C\u3002

/sbin --&gt; /usr/sbin
\u5B58\u5728\u7279\u6B8A\u547D\u4EE4\uFF0C\u4E00\u822C\u6765\u8BF4\uFF0Croot \u7528\u6237\u624D\u53EF\u4EE5\u8FD0\u884C\u3002\u5F53\u7136\uFF0C\u666E\u901A\u7528\u6237\u53EF\u4EE5\u7533\u8BF7\u64CD\u4F5C\u7684\u6743\u9650\u3002
</code></pre></div><h3 id="_1-2-\u7528\u6237\u5BB6\u76EE\u5F55-home\u3001-root" tabindex="-1"><a class="header-anchor" href="#_1-2-\u7528\u6237\u5BB6\u76EE\u5F55-home\u3001-root" aria-hidden="true">#</a> 1.2 \u7528\u6237\u5BB6\u76EE\u5F55\uFF1A<code>/home</code>\u3001<code>/root</code></h3><div class="language-text ext-text"><pre class="language-text"><code>/home
\u662F\u666E\u901A\u7528\u6237\u7684\u5BB6\u76EE\u5F55

/root
\u662F\u8D85\u7EA7\u7BA1\u7406\u5458\u7684\u5BB6\u76EE\u5F55
</code></pre></div><h3 id="_1-3-\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55-etc" tabindex="-1"><a class="header-anchor" href="#_1-3-\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55-etc" aria-hidden="true">#</a> 1.3 \u914D\u7F6E\u6587\u4EF6\u76EE\u5F55\uFF1A<code>/etc</code></h3><div class="language-text ext-text"><pre class="language-text"><code>/etc
\u7528\u4E8E\u5B58\u50A8\u914D\u7F6E\u6587\u4EF6\u7684\u547D\u4EE4\uFF0C\u5982\uFF1A
1. \u4FEE\u6539 IP \u5730\u5740\uFF1A/etc/sysconfig/network-scripts/ifcfg-xxx
2. \u4FEE\u6539\u4E3B\u673A\u540D\u79F0\uFF1A/etc/hostname

\u4FEE\u6539\u5B8C\u914D\u7F6E\u6587\u4EF6\u540E\u5982\u4F55\u751F\u6548\uFF1F
1. \u6709\u7684\u914D\u7F6E\u5728\u4FEE\u6539\u540E\u7ACB\u5373\u751F\u6548\uFF0C\u5373\u8FD0\u884C\u547D\u4EE4\u7A0B\u5E8F\u65F6\u5373\u53EF\u751F\u6548\u3002
2. \u6709\u7684\u914D\u7F6E\u5728\u4FEE\u6539\u540E\u9700\u8981\u91CD\u542F\u7CFB\u7EDF\u624D\u80FD\u751F\u6548\u3002
</code></pre></div><h3 id="_1-4-\u542F\u52A8\u76EE\u5F55-boot" tabindex="-1"><a class="header-anchor" href="#_1-4-\u542F\u52A8\u76EE\u5F55-boot" aria-hidden="true">#</a> 1.4 \u542F\u52A8\u76EE\u5F55\uFF1A<code>/boot</code></h3><div class="language-text ext-text"><pre class="language-text"><code>/boot
\u5B58\u50A8\u7CFB\u7EDF\u542F\u52A8\u65F6\u52A0\u8F7D\u7684\u6587\u4EF6\uFF0C\u6BD4\u5982\uFF1A\u5185\u6838\u6587\u4EF6\u3001Grub \u83DC\u5355\u3001\u6551\u63F4\u5185\u6838\u7CFB\u7EDF\u7B49
\u6CE8\u610F\uFF1A\u5982\u679C\u5220\u9664\u542F\u52A8\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u65E0\u6CD5\u542F\u52A8\u7CFB\u7EDF\u7684\u95EE\u9898\u3002
</code></pre></div><h3 id="_1-5-\u8BBE\u5907\u76EE\u5F55-dev" tabindex="-1"><a class="header-anchor" href="#_1-5-\u8BBE\u5907\u76EE\u5F55-dev" aria-hidden="true">#</a> 1.5 \u8BBE\u5907\u76EE\u5F55\uFF1A<code>/dev</code></h3><div class="language-text ext-text"><pre class="language-text"><code>/dev
\u8BBE\u5907\u76EE\u5F55\u4E2D\u4E3B\u8981\u5B58\u653E\uFF1A\u952E\u76D8\u3001\u5149\u76D8\u3001\u78C1\u76D8\u3001\u7EC8\u7AEF\u3001/dev/null\u3001/dev/random \u7B49\u8BBE\u5907\u6587\u4EF6\u3002
</code></pre></div><h4 id="_1-5-1-\u9ED1\u6D1E-dev-null" tabindex="-1"><a class="header-anchor" href="#_1-5-1-\u9ED1\u6D1E-dev-null" aria-hidden="true">#</a> 1.5.1 \u9ED1\u6D1E\uFF1A<code>/dev/null</code></h4><div class="language-text ext-text"><pre class="language-text"><code>\u9ED1\u6D1E\u6587\u4EF6\uFF0C\u5B58\u50A8\u5728\u8FD9\u4E2A\u8BBE\u5907\u6587\u4EF6\u4E2D\u7684\u6570\u636E\u90FD\u4F1A\u4E22\u5931\u3002
</code></pre></div><h4 id="_1-5-2-\u4EA7\u751F\u968F\u673A\u6570-dev-random" tabindex="-1"><a class="header-anchor" href="#_1-5-2-\u4EA7\u751F\u968F\u673A\u6570-dev-random" aria-hidden="true">#</a> 1.5.2 \u4EA7\u751F\u968F\u673A\u6570\uFF1A<code>dev/random</code></h4><div class="language-text ext-text"><pre class="language-text"><code>\u4EA7\u751F\u968F\u673A\u6570\u3002
</code></pre></div><h3 id="_1-6-\u4E34\u65F6\u76EE\u5F55-tmp" tabindex="-1"><a class="header-anchor" href="#_1-6-\u4E34\u65F6\u76EE\u5F55-tmp" aria-hidden="true">#</a> 1.6 \u4E34\u65F6\u76EE\u5F55\uFF1A<code>/tmp</code></h3><div class="language-text ext-text"><pre class="language-text"><code>/tmp
\u8C01\u90FD\u53EF\u4EE5\u5B58\u50A8\u6570\u636E\u5728\u8BE5\u4E34\u65F6\u76EE\u5F55\u4E2D\u3002\u4F46\u662F\u81EA\u5DF1\u7684\u6570\u636E\u53EA\u80FD\u81EA\u5DF1\u79FB\u9664\uFF0C\u522B\u4EBA\u53EA\u80FD\u770B\u5374\u65E0\u6CD5\u79FB\u9664\u3002
</code></pre></div><h3 id="_1-7-\u53EF\u53D8\u76EE\u5F55-var" tabindex="-1"><a class="header-anchor" href="#_1-7-\u53EF\u53D8\u76EE\u5F55-var" aria-hidden="true">#</a> 1.7 \u53EF\u53D8\u76EE\u5F55\uFF1A<code>/var</code></h3><div class="language-text ext-text"><pre class="language-text"><code>/var
\u53EF\u53D8\u662F\u6307\u4F1A\u968F\u7740\u7CFB\u7EDF\u7684\u8FD0\u884C\uFF08\u8FD0\u884C\u4F1A\u4EA7\u751F\u4E00\u4E9B\u6570\u636E\u3001\u8BB0\u5F55\uFF09\u800C\u4E0D\u65AD\u5730\u53D1\u751F\u53D8\u5316\u3002

/var/log
\u5B58\u50A8\u65E5\u5FD7\u7684\u76EE\u5F55\uFF0C\u5982\uFF1A\u542F\u52A8\u65E5\u5FD7\u3001\u7CFB\u7EDF\u64CD\u4F5C\u65E5\u5FD7\u3001\u7CFB\u7EDF\u767B\u5F55\u65E5\u5FD7\u7B49\u3002
</code></pre></div><h3 id="_1-8-\u8FD0\u884C\u65F6\u76EE\u5F55-proc" tabindex="-1"><a class="header-anchor" href="#_1-8-\u8FD0\u884C\u65F6\u76EE\u5F55-proc" aria-hidden="true">#</a> 1.8 \u8FD0\u884C\u65F6\u76EE\u5F55\uFF1A<code>/proc</code></h3><div class="language-text ext-text"><pre class="language-text"><code>/proc
\u8BB0\u5F55\u8BBE\u5907\uFF08\u5982 CPU\u3001\u5185\u5B58\u3001\u78C1\u76D8\uFF09\u8FD0\u884C\u72B6\u6001\u3002
</code></pre></div><h3 id="_1-9-\u7CFB\u7EDF\u76EE\u5F55-usr" tabindex="-1"><a class="header-anchor" href="#_1-9-\u7CFB\u7EDF\u76EE\u5F55-usr" aria-hidden="true">#</a> 1.9 \u7CFB\u7EDF\u76EE\u5F55\uFF1A<code>/usr</code></h3><div class="language-text ext-text"><pre class="language-text"><code>/usr
\u548C windows \u4E2D\u7684 C:\\program files \u76EE\u5F55\u7C7B\u4F3C\u3002

/usr/lib, /usr/lib64
\u5B58\u653E\u7684\u662F\u5E93\u6587\u4EF6

/usr/local
\u5B58\u653E\u81EA\u884C\u5B89\u88C5\u8F6F\u4EF6\u7684\u8DEF\u5F84\uFF08\u5B89\u88C5\u540E\u7684\u4F4D\u7F6E\uFF09\u3002\u6CE8\uFF1A\u73B0\u5728\u4E0D\u7528\u8FD9\u79CD\u65B9\u5F0F\u4E86

/usr/src
\u5B58\u653E\u5B89\u88C5\u5305\uFF08\u5B89\u88C5\u524D\u7684\u8F6F\u4EF6\u5B58\u50A8\u8DEF\u5F84\uFF09\u3002\u6CE8\uFF1A\u73B0\u5728\u4E0D\u7528\u8FD9\u79CD\u65B9\u5F0F\u4E86
</code></pre></div><h2 id="_2-\u6587\u4EF6\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_2-\u6587\u4EF6\u8DEF\u5F84" aria-hidden="true">#</a> 2. \u6587\u4EF6\u8DEF\u5F84</h2><div class="language-text ext-text"><pre class="language-text"><code>\u7EDD\u5BF9\u8DEF\u5F84\uFF1A\u4E00\u5B9A\u662F\u4ECE / \u5F00\u59CB\u7684\u3002\u5373\u4ECE / \u5F00\u59CB\u7684\u8DEF\u5F84\u90FD\u662F\u7EDD\u5BF9\u8DEF\u5F84\u3002
\u76F8\u5BF9\u8DEF\u5F84\uFF1A\u76F8\u5BF9\u4E8E\u5F53\u524D\u6240\u5728\u76EE\u5F55\u7684\u8DEF\u5F84\u3002
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>.
\u8868\u793A\u5F53\u524D\u76EE\u5F55

..
\u8868\u793A\u4E0A\u4E00\u7EA7\u76EE\u5F55
</code></pre></div>`,27);function r(c,s){return t}var o=e(n,[["render",r],["__file","_04_linux_file_manage.html.vue"]]);export{o as default};
