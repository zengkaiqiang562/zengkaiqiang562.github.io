import{_ as a,e as n}from"./app.625aa393.js";var s="/assets/01.1d4b598f.png",e="/assets/03.3e8d85ba.png",t="/assets/02.60efbe9b.png",c="/assets/04.0eb799ae.png",o="/assets/05.abea999c.png",p="/assets/06.dbfe2508.png",r="/assets/07.02f27cb9.png",l="/assets/08.80d18391.png";const d={},i=n(`<h2 id="_1-\u6587\u4EF6\u7BA1\u7406\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-\u6587\u4EF6\u7BA1\u7406\u547D\u4EE4" aria-hidden="true">#</a> 1. \u6587\u4EF6\u7BA1\u7406\u547D\u4EE4</h2><h3 id="_1-1-\u521B\u5EFA\u547D\u4EE4-mkdir\u3001touch" tabindex="-1"><a class="header-anchor" href="#_1-1-\u521B\u5EFA\u547D\u4EE4-mkdir\u3001touch" aria-hidden="true">#</a> 1.1 \u521B\u5EFA\u547D\u4EE4\uFF1A<code>mkdir</code>\u3001<code>touch</code></h3><p><strong>\u521B\u5EFA\u76EE\u5F55\u547D\u4EE4\uFF1A<code>mkdir</code></strong></p><div class="language-text ext-text"><pre class="language-text"><code>-p: \u9012\u5F52\u521B\u5EFA\u76EE\u5F55
-v: \u663E\u793A\u8FC7\u7A0B
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA linux-76 \u76EE\u5F55</span>
<span class="token function">mkdir</span> /linux-76

<span class="token comment"># \u9012\u5F52\u521B\u5EFA\u591A\u4E2A\u4E0D\u5B58\u5728\u7684\u76EE\u5F55\uFF0C\u5E76\u663E\u793A\u521B\u5EFA\u7684\u8FC7\u7A0B</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-pv</span> /linux-76/11/22/33/44/55
</code></pre></div><p><strong>\u521B\u5EFA\u76EE\u6587\u4EF6\u547D\u4EE4\uFF1A<code>touch</code></strong></p><div class="language-text ext-text"><pre class="language-text"><code>touch \u53EF\u7528\u4E8E\u521B\u5EFA\u7A7A\u6587\u4EF6\uFF0C\u6216\u8005\u6539\u53D8\u5DF2\u521B\u5EFA\u6587\u4EF6\u7684\u65F6\u95F4\u6233\u5C5E\u6027
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6</span>
<span class="token function">touch</span> /tmp/file.txt

<span class="token comment"># \u521B\u5EFA\u591A\u4E2A\u6587\u4EF6</span>
<span class="token function">touch</span> /tmp/file1.txt /tmp/file2.txt

<span class="token comment"># \u901A\u8FC7 {} \u751F\u6210\u5E8F\u5217\uFF0C\u5E76\u521B\u5EFA\u591A\u4E2A\u6587\u4EF6</span>
<span class="token function">touch</span> /tmp/file<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span><span class="token punctuation">}</span>.txt

<span class="token comment"># {} \u4E2D\u53EF\u4EE5\u662F\u6570\u5B57\u5E8F\u5217\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5B57\u6BCD\u5E8F\u5217</span>
<span class="token function">touch</span> /tmp/file<span class="token punctuation">{</span>a<span class="token punctuation">..</span>z<span class="token punctuation">}</span>.txt
</code></pre></div><h3 id="_1-2-\u5220\u9664\u547D\u4EE4-rm" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5220\u9664\u547D\u4EE4-rm" aria-hidden="true">#</a> 1.2 \u5220\u9664\u547D\u4EE4\uFF1A<code>rm</code></h3><div class="language-text ext-text"><pre class="language-text"><code>-r: \u5220\u9664\u76EE\u5F55\u4EE5\u53CA\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\uFF0C\u5E76\u4E14\u91C7\u7528\u9012\u5F52\u65B9\u5F0F
-f: force \u5F3A\u5236\u5220\u9664\uFF0C\u4E0D\u63D0\u793A
-i: \u63D0\u793A\u662F\u5426\u5220\u9664\u3002\uFF08\u7CFB\u7EDF\u5DF2\u4E3A\u6211\u4EEC\u6DFB\u52A0\u597D\u522B\u540D\uFF0C\u6240\u4EE5\u6BCF\u6B21\u5220\u9664\u65F6\u90FD\u4F1A\u63D0\u793A\uFF09
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664 /student.txt \u6587\u4EF6</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /student.txt

<span class="token comment"># \u5220\u9664 /linux-76 \u76EE\u5F55\u3002\u8BE5\u76EE\u5F55\u4E0B\u6709\u5F88\u591A\u5B50\u76EE\u5F55\uFF0C\u5E0C\u671B\u9012\u5F52\u5220\u9664</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /linux-76/
</code></pre></div><h3 id="_1-3-\u590D\u5236\u547D\u4EE4-cp" tabindex="-1"><a class="header-anchor" href="#_1-3-\u590D\u5236\u547D\u4EE4-cp" aria-hidden="true">#</a> 1.3 \u590D\u5236\u547D\u4EE4\uFF1A<code>cp</code></h3><div class="language-text ext-text"><pre class="language-text"><code>-p: \u4FDD\u6301\u6E90\u6587\u4EF6\u7684\u5C5E\u6027\u5728\u62F7\u8D1D\u7684\u8FC7\u7A0B\u4E2D\u4E0D\u53D1\u751F\u53D8\u5316
-d: \u4FDD\u6301\u8F6F\u8FDE\u63A5\u5728\u62F7\u8D1D\u7684\u8FC7\u7A0B\u4E2D\u4E0D\u53D1\u751F\u53D8\u5316
-r: \u9012\u5F52
-i: \u63D0\u793A
-v: \u663E\u793A\u62F7\u8D1D\u7684\u8FC7\u7A0B
-a: \u76F8\u5F53\u4E8E -pdr

\u8BED\u6CD5\uFF1A
cp \u6E90\u6587\u4EF6 \u76EE\u6807\u4F4D\u7F6E
cp \u6E90\u6587\u4EF61 \u6E90\u6587\u4EF62 ... \u6E90\u6587\u4EF6n \u76EE\u6807\u4F4D\u7F6E
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u62F7\u8D1D /etc/hosts \u6587\u4EF6\u5230 /tmp \u76EE\u5F55\u4E2D</span>
<span class="token function">cp</span> /etc/hosts /tmp/
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u6CE8\u610F\uFF1A\u76EE\u6807\u4F4D\u7F6E\u662F\u4E00\u4E2A\u76EE\u5F55\u65F6\uFF0C
\u5EFA\u8BAE\u5199\u6210 /tmp/\uFF0C\u6B64\u65F6\uFF0C\u5982\u679C\u76EE\u5F55\u4E0D\u5B58\u5728\uFF0C\u4F1A\u62A5\u9519\u63D0\u793A\u3002
\u5982\u679C\u5199\u6210 /tmp\uFF0C\u90A3\u4E48\u5F53\u76EE\u5F55\u4E0D\u5B58\u5728\u65F6\uFF0C\u4F1A\u5C06\u6E90\u6587\u4EF6\u62F7\u8D1D\u81F3 / \u4E0B\uFF0C\u5E76\u6539\u540D\u4E3A tmp \u6587\u4EF6\u3002
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u62F7\u8D1D /etc \u76EE\u5F55\u5230 /tmp \u76EE\u5F55\u4E2D\uFF0C\u5E76\u6539\u76EE\u5F55\u540D\u4E3A etc_back</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> /etc /tmp/etc_back
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u6CE8\u610F\uFF1A\u5982\u679C\u6E90\u76EE\u5F55\u4E2D\u5305\u542B\u5B50\u76EE\u5F55\uFF0C\u9700\u8981\u4F7F\u7528 -r \u9009\u9879\u8FDB\u884C\u9012\u5F52\u62F7\u8D1D\u3002
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u62F7\u8D1D\u591A\u4E2A\u6587\u4EF6\uFF1A/etc/hostname /etc/fstab /var/ /home/ /tmp/ /root/ --&gt; /backup/</span>
<span class="token punctuation">\\</span>cp <span class="token parameter variable">-r</span> /etc/hostname /etc/fstab /var/ /home/ /tmp/ /root/ /backup/
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>cp \u547D\u4EE4\u662F\u7CFB\u7EDF\u4E3A &quot;cp -i&quot; \u547D\u4EE4\u8D77\u7684\u522B\u540D\uFF0C\u6240\u4EE5\u6267\u884C cp -r \u76F8\u5F53\u4E8E\u6267\u884C cp -i -r\uFF0C\u4E8E\u662F\u82E5\u5B58\u5728\u8986\u76D6\u7684\u60C5\u51B5\uFF0C\u4F1A\u63D0\u793A\u7528\u6237\u3002
\u5982\u679C\u4E0D\u60F3\u7528\u7CFB\u7EDF\u522B\u540D\uFF0C\u53EF\u4EE5\u5199\u6210 \\cp -r\uFF0C\u5373\u53BB\u6389\u4E86\u9009\u9879 -i\uFF0C\u6B64\u65F6\uFF0C\u5373\u4F7F\u5B58\u5728\u6587\u4EF6\u8986\u76D6\uFF0C\u4E5F\u4E0D\u4F1A\u63D0\u793A\u3002

\u591A\u6587\u4EF6\u62F7\u8D1D\u9700\u6CE8\u610F\uFF1A
1. /backup/ \u76EE\u5F55\u5FC5\u987B\u5B58\u5728
2. cp \u547D\u4EE4\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\u76EE\u5F55\u4E00\u5B9A\u662F\u76EE\u6807\u4F4D\u7F6E
</code></pre></div><h3 id="_1-4-\u79FB\u52A8\u547D\u4EE4-mv" tabindex="-1"><a class="header-anchor" href="#_1-4-\u79FB\u52A8\u547D\u4EE4-mv" aria-hidden="true">#</a> 1.4 \u79FB\u52A8\u547D\u4EE4\uFF1A<code>mv</code></h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5728\u7528\u6237\u5BB6\u76EE\u5F55\u521B\u5EFA test \u76EE\u5F55\uFF0C\u7136\u540E\u79FB\u52A8\u5230 /tmp \u76EE\u5F55</span>
<span class="token builtin class-name">cd</span>
<span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
<span class="token function">mv</span> test/ /tmp/

<span class="token comment"># mv \u8FD8\u53EF\u4EE5\u7528\u6765\u6539\u540D\u5B57\uFF0C\u5982\uFF1A</span>
<span class="token comment"># 1. \u5C06\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 test \u76EE\u5F55\u91CD\u547D\u540D\u4E3A abc \u6587\u4EF6\u5939</span>
<span class="token function">mv</span> test/ abc
<span class="token comment"># 2. \u5C06\u5C06\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 file1.txt \u6587\u4EF6\u91CD\u547D\u540D\u4E3A file2.txt \u6587\u4EF6</span>
<span class="token function">mv</span> file1.txt file2.txt

<span class="token comment"># \u79FB\u52A8\u591A\u4E2A\u76EE\u5F55\u5230 /tmp \u76EE\u5F55</span>
<span class="token function">mkdir</span> <span class="token punctuation">{</span>a<span class="token punctuation">..</span>z<span class="token punctuation">}</span>
<span class="token function">mkdir</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">100</span><span class="token punctuation">}</span>_pdf
<span class="token function">mv</span> \u6E90 \u6E90 \u6E90 <span class="token punctuation">..</span>. \u6E90 \u76EE\u6807
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>touch {1..100}.pdf \u547D\u4EE4\u8868\u793A\u521B\u5EFA 1.pdf \u81F3 100.pdf \u7684\u591A\u4E2A\u6587\u4EF6
</code></pre></div><h2 id="_2-\u67E5\u770B\u6587\u4EF6\u7C7B\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u6587\u4EF6\u7C7B\u547D\u4EE4" aria-hidden="true">#</a> 2. \u67E5\u770B\u6587\u4EF6\u7C7B\u547D\u4EE4\uFF1A</h2><h3 id="_2-1-cat" tabindex="-1"><a class="header-anchor" href="#_2-1-cat" aria-hidden="true">#</a> 2.1 <code>cat</code></h3><div class="language-text ext-text"><pre class="language-text"><code>cat \u547D\u4EE4\u7528\u4E8E\u67E5\u770B\u6587\u4EF6\u5185\u5BB9\u3002

\u9009\u9879\u5982\u4E0B\uFF1A
-n: \u663E\u793A\u6587\u4EF6\u7684\u884C\u6570\u3002
-A: \u663E\u793A\u6587\u4EF6\u4E2D\u7684\u7279\u6B8A\u5B57\u7B26\u3002\uFF08\u5982\u679C\u4ECE windows \u62F7\u8D1D\u914D\u7F6E\u6587\u4EF6\u5230 linux\uFF0C\u5F88\u5BB9\u6613\u51FA\u73B0\u591A\u4E86\u4E00\u4E9B\u7279\u6B8A\u5B57\u7B26\u7684\u60C5\u51B5\uFF0C\u9020\u6210\u670D\u52A1\u542F\u52A8\u5931\u8D25\uFF09
</code></pre></div><p><img src="`+s+'" alt="" loading="lazy"></p><h4 id="_2-1-1-\u5411\u6587\u4EF6\u4E2D\u8FFD\u52A0\u5185\u5BB9-cat-file-txt-eof" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u5411\u6587\u4EF6\u4E2D\u8FFD\u52A0\u5185\u5BB9-cat-file-txt-eof" aria-hidden="true">#</a> 2.1.1 \u5411\u6587\u4EF6\u4E2D\u8FFD\u52A0\u5185\u5BB9\uFF1A<code>cat &gt;&gt; file.txt &lt;&lt; EOF</code></h4><p><img src="'+e+`" alt="" loading="lazy"></p><div class="language-text ext-text"><pre class="language-text"><code>\u6CE8\u610F\uFF1A
1. \u5982\u679C file.txt \u6587\u4EF6\u4E0D\u5B58\u5728\u4F1A\u81EA\u52A8\u521B\u5EFA\uFF1B
2. \u8BE5\u547D\u4EE4\u7528\u4E8E\u5411\u6587\u4EF6\u4E2D\u8FFD\u52A0\u5185\u5BB9\uFF0C\u4E0D\u4F1A\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5185\u5BB9\uFF1B
3. \u8F93\u5165 EOF \u8868\u793A\u7ED3\u675F\u8F93\u5165\u3002
</code></pre></div><h3 id="_2-2-less\u3001more" tabindex="-1"><a class="header-anchor" href="#_2-2-less\u3001more" aria-hidden="true">#</a> 2.2 <code>less</code>\u3001<code>more</code></h3><div class="language-text ext-text"><pre class="language-text"><code>less\u3001more \u547D\u4EE4\u7528\u4E8E\u67E5\u770B\u5185\u5BB9\u6BD4\u8F83\u591A\u7684\u6587\u4EF6\u3002
less\u3001more \u90FD\u662F\u91C7\u7528\u5206\u9875\u7684\u65B9\u5F0F\u67E5\u770B\u6587\u4EF6\u5185\u5BB9\uFF0C\u533A\u522B\u662F more \u4F1A\u663E\u793A\u767E\u5206\u6BD4

\u5FEB\u6377\u952E\uFF1A
f \u4E0B\u7FFB\u9875
b \u4E0A\u7FFB\u9875
q \u9000\u51FA
g \u6587\u4EF6\u7B2C 1 \u884C
G \u6587\u4EF6\u6700\u540E 1 \u884C

\u6CE8\uFF1A\u7A7A\u683C\u4E5F\u53EF\u4EE5\u4E0B\u7FFB\u9875\u3002
</code></pre></div><h3 id="_2-3-head\u3001tail\u3001tailf" tabindex="-1"><a class="header-anchor" href="#_2-3-head\u3001tail\u3001tailf" aria-hidden="true">#</a> 2.3 <code>head</code>\u3001<code>tail</code>\u3001<code>tailf</code></h3><p><strong>\u67E5\u770B\u6587\u4EF6\u9996\u90E8\u5185\u5BB9\uFF1A<code>head</code></strong></p><div class="language-text ext-text"><pre class="language-text"><code>\u9ED8\u8BA4\u6253\u5370\u6587\u4EF6\u524D 10 \u884C\u5185\u5BB9\u3002
\u4E5F\u53EF\u4EE5\u901A\u8FC7\u9009\u9879 -&lt;N&gt; \u6307\u5B9A\u6253\u5370\u6587\u4EF6\u524D &lt;N&gt; \u884C\u5185\u5BB9\u3002

\u6CE8\uFF1A\u5982\u679C -&lt;N&gt; \u4E0D\u8D77\u4F5C\u7528\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u7528 -n&lt;N&gt;\u3002\u5982\u6253\u5370\u524D 5 \u884C: -5 \u6216 -n5
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u9ED8\u8BA4\u6253\u5370\u6587\u4EF6\u524D 10 \u884C\u5185\u5BB9</span>
<span class="token function">head</span> /etc/passwd

<span class="token comment"># \u6307\u5B9A\u6253\u5370\u6587\u4EF6\u524D 5 \u884C\u5185\u5BB9</span>
<span class="token function">head</span> <span class="token parameter variable">-5</span> /etc/passwd
</code></pre></div><p><strong>\u67E5\u770B\u6587\u4EF6\u5C3E\u90E8\u5185\u5BB9\uFF1A<code>tail</code>\u3001<code>tailf</code></strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u9ED8\u8BA4\u6253\u5370\u6587\u4EF6\u6700\u540E <span class="token number">10</span> \u884C\u5185\u5BB9\u3002
\u4E5F\u53EF\u4EE5\u901A\u8FC7\u9009\u9879 -<span class="token operator">&lt;</span>N<span class="token operator">&gt;</span> \u6307\u5B9A\u6253\u5370\u6587\u4EF6\u6700\u540E <span class="token operator">&lt;</span>N<span class="token operator">&gt;</span> \u884C\u5185\u5BB9\u3002

\u6CE8\uFF1A\u5982\u679C -<span class="token operator">&lt;</span>N<span class="token operator">&gt;</span> \u4E0D\u8D77\u4F5C\u7528\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u7528 -n<span class="token operator">&lt;</span>N<span class="token operator">&gt;</span>\u3002\u5982\u6253\u5370\u6700\u540E <span class="token number">5</span> \u884C: <span class="token parameter variable">-5</span> \u6216 <span class="token parameter variable">-n5</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u9ED8\u8BA4\u6253\u5370\u6587\u4EF6\u6700\u540E 10 \u884C\u5185\u5BB9</span>
<span class="token function">tail</span> /etc/passwd

<span class="token comment"># \u6307\u5B9A\u6253\u5370\u6587\u4EF6\u6700\u540E 20 \u884C\u5185\u5BB9</span>
<span class="token function">tail</span> <span class="token parameter variable">-20</span> /etc/passwd

<span class="token comment"># \u6253\u5370\u6587\u4EF6\u6700\u540E 20 \u884C\u5185\u5BB9\uFF0C\u5E76\u901A\u8FC7\u7BA1\u9053 | \u4F20\u9012\u7ED9 head \u547D\u4EE4\u5904\u7406\uFF0C\u6253\u5370\u51FA\u6700\u540E 20 \u884C\u5185\u5BB9\u4E2D\u7684\u524D 10 \u884C\u5185\u5BB9</span>
<span class="token function">tail</span> <span class="token parameter variable">-20</span> /etc/passwd <span class="token operator">|</span> <span class="token function">head</span>

<span class="token comment"># \u5B9E\u65F6\u8FFD\u8E2A\u6587\u4EF6\u5C3E\u90E8\u7684\u5185\u5BB9\u53D8\u5316</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> /etc/passwd
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>tail -f \u76F8\u5F53\u4E8E tailf \u547D\u4EE4\u3002
</code></pre></div><h2 id="_3-\u67E5\u627E\u53EF\u6267\u884C\u6587\u4EF6-\u547D\u4EE4-\u6240\u5728\u4F4D\u7F6E\u7684\u547D\u4EE4-which\u3001whereis" tabindex="-1"><a class="header-anchor" href="#_3-\u67E5\u627E\u53EF\u6267\u884C\u6587\u4EF6-\u547D\u4EE4-\u6240\u5728\u4F4D\u7F6E\u7684\u547D\u4EE4-which\u3001whereis" aria-hidden="true">#</a> 3. \u67E5\u627E\u53EF\u6267\u884C\u6587\u4EF6\uFF08\u547D\u4EE4\uFF09\u6240\u5728\u4F4D\u7F6E\u7684\u547D\u4EE4\uFF1A<code>which</code>\u3001<code>whereis</code></h2><div class="language-text ext-text"><pre class="language-text"><code>which \u548C whereis \u547D\u4EE4\u90FD\u53EF\u4EE5\u7528\u6765\u67E5\u770B\u547D\u4EE4\uFF08\u53EF\u6267\u884C\u6587\u4EF6\uFF09\u7684\u6240\u5728\u4F4D\u7F6E\u3002
</code></pre></div><p><img src="`+t+`" alt="" loading="lazy"></p><h2 id="_4-\u4E0B\u8F7D\u7C7B\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-\u4E0B\u8F7D\u7C7B\u547D\u4EE4" aria-hidden="true">#</a> 4. \u4E0B\u8F7D\u7C7B\u547D\u4EE4</h2><h3 id="_4-1-\u4ECE\u7F51\u7EDC\u4E0B\u8F7D-wget\u3001curl" tabindex="-1"><a class="header-anchor" href="#_4-1-\u4ECE\u7F51\u7EDC\u4E0B\u8F7D-wget\u3001curl" aria-hidden="true">#</a> 4.1 \u4ECE\u7F51\u7EDC\u4E0B\u8F7D\uFF1A<code>wget</code>\u3001<code>curl</code></h3><p><strong><code>wget</code></strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u9ED8\u8BA4\u6700\u5C0F\u5316\u7CFB\u7EDF\u6CA1\u6709 wget \u547D\u4EE4\uFF0C\u9700\u8981\u5B89\u88C5</span>
yum <span class="token function">install</span> <span class="token function">wget</span> <span class="token parameter variable">-y</span>

<span class="token comment"># \u4E0B\u8F7D\u8D44\u6E90\u5230\u5F53\u524D\u76EE\u5F55\u4E0B</span>
<span class="token function">wget</span> http://nginx.org/download/nginx-1.19.7.tar.gz

<span class="token comment"># \u4E0B\u8F7D\u8D44\u6E90\u5230\u6307\u5B9A\u8DEF\u5F84\u4E0B\uFF0C\u540C\u65F6\u5BF9\u4E0B\u8F7D\u7684\u6587\u4EF6\u8FDB\u884C\u91CD\u547D\u540D</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> /tmp/test.repo http://mirrors.aliyun.com/repo/Centos-7.repo
</code></pre></div><p><strong><code>curl</code></strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u8D44\u6E90\u5230\u6307\u5B9A\u8DEF\u5F84\u4E0B\uFF0C\u540C\u65F6\u5BF9\u4E0B\u8F7D\u7684\u6587\u4EF6\u8FDB\u884C\u91CD\u547D\u540D</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> /tmp/curl.repo http://mirrors.aliyun.com/repo/Centos-7.repo
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u6CE8\u610F\uFF1A
1. wget \u6307\u5B9A\u8DEF\u5F84\u7684\u9009\u9879\u662F -O\uFF08\u5927\u5199 O\uFF09\uFF1Bcurl \u6307\u5B9A\u8DEF\u5F84\u7684\u9009\u9879\u662F -o\uFF08\u5C0F\u5199 o\uFF09
2. curl \u8FD8\u53EF\u4EE5\u7528\u6765\u83B7\u53D6\u7F51\u9875\u7684\u6E90\u7801\u4FE1\u606F
</code></pre></div><h3 id="_4-2-\u672C\u5730-windows-\u4E0E\u8FDC\u7A0B-linux-\u4E92\u4F20-sz\u3001rz" tabindex="-1"><a class="header-anchor" href="#_4-2-\u672C\u5730-windows-\u4E0E\u8FDC\u7A0B-linux-\u4E92\u4F20-sz\u3001rz" aria-hidden="true">#</a> 4.2 \u672C\u5730 Windows \u4E0E\u8FDC\u7A0B Linux \u4E92\u4F20\uFF1A<code>sz</code>\u3001<code>rz</code></h3><p><strong><code>sz</code></strong></p><div class="language-text ext-text"><pre class="language-text"><code>sz \u547D\u4EE4\u7528\u4E8E\u4ECE linux \u670D\u52A1\u5668\u4E0B\u8F7D\u8D44\u6E90\u5230 windows \u7CFB\u7EDF\u672C\u5730\u3002

\u6CE8\u610F\uFF1A
1. \u4E0B\u8F7D\u7684\u8D44\u6E90\u53EA\u53EF\u4EE5\u662F\u6587\u4EF6\uFF0C\u4E0D\u53EF\u4EE5\u662F\u6587\u4EF6\u5939\uFF1B
2. \u4E0D\u652F\u6301\u8D85\u8FC7 4G \u7684\u6587\u4EF6\uFF1B
3. \u4E0D\u652F\u6301\u65AD\u70B9\u7EED\u4F20\uFF1B
4. \u5982\u679C\u5FC5\u987B\u4E0B\u8F7D\u6587\u4EF6\u5939\uFF0C\u53EF\u4EE5\u5148\u538B\u7F29\u3002
</code></pre></div><p><strong><code>rz</code></strong></p><div class="language-text ext-text"><pre class="language-text"><code>rz \u547D\u4EE4\u7528\u4E8E\u5C06 windows \u7684\u5185\u5BB9\u4E0A\u4F20\u5230 linux \u670D\u52A1\u5668\u3002

\u6CE8\u610F\uFF1A
1. \u4E00\u822C\u76F4\u63A5\u5C06\u6587\u4EF6\u62D6\u62FD\u5230 linux \u670D\u52A1\u5668\u4E2D\uFF1B
2. \u4E0A\u4F20\u7684\u8D44\u6E90\u53EA\u53EF\u4EE5\u662F\u6587\u4EF6\uFF0C\u4E0D\u53EF\u4EE5\u662F\u6587\u4EF6\u5939\u3002
</code></pre></div><h2 id="_5-\u5B57\u7B26\u6587\u4EF6\u5185\u5BB9\u5904\u7406\u7C7B\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_5-\u5B57\u7B26\u6587\u4EF6\u5185\u5BB9\u5904\u7406\u7C7B\u547D\u4EE4" aria-hidden="true">#</a> 5. \u5B57\u7B26\u6587\u4EF6\u5185\u5BB9\u5904\u7406\u7C7B\u547D\u4EE4</h2><h3 id="_5-1-\u6392\u5E8F-\u53BB\u91CD-sort-uniq" tabindex="-1"><a class="header-anchor" href="#_5-1-\u6392\u5E8F-\u53BB\u91CD-sort-uniq" aria-hidden="true">#</a> 5.1 \u6392\u5E8F &amp; \u53BB\u91CD\uFF1A<code>sort</code> &amp; <code>uniq</code></h3><p><strong><code>sort</code></strong></p><div class="language-text ext-text"><pre class="language-text"><code>sort \u547D\u4EE4\u7528\u4E8E\u5BF9\u6587\u4EF6\u5185\u5BB9\u6309\u884C\u6392\u5E8F\u3002

-t: \u6307\u5B9A\u6BCF\u884C\u5185\u5BB9\u7684\u5206\u5272\u7B26\u3002\uFF08\u9ED8\u8BA4\u4EE5\u7A7A\u683C\u4F5C\u4E3A\u5206\u5272\u7B26\uFF09
-r: \u53CD\u8F6C\u987A\u5E8F
-n: \u6309\u6570\u5B57\u5927\u5C0F\u6392\u5E8F\u3002\uFF08\u9ED8\u8BA4\u6309\u5B57\u7B26\u987A\u5E8F\u6392\u5217\uFF0C\u5373\uFF1A\u5148\u6BD4\u8F83\u4E24\u884C\u7684\u7B2C 1 \u4E2A\u5B57\u7B26\uFF0C\u518D\u6BD4\u8F83\u7B2C 2 \u4E2A\u5B57\u7B26\uFF0C\u4EE5\u6B64\u7C7B\u6BD4...\uFF09
-k: \u6307\u5B9A\u5206\u5272\u540E\u7684\u5217
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># -k3.1,3.1 \u8868\u793A\u6309\u7B2C 3 \u5217\u7684\u7B2C 1 \u4E2A\u5B57\u7B26\u5230\u7B2C 3 \u5217\u7684\u7B2C 1 \u4E2A\u5B57\u7B26\u6392\u5E8F\uFF08\u5373\u4EC5\u4EC5\u53EA\u6309\u7B2C 3 \u5217\u7684\u7B2C 1 \u4E2A\u5B57\u7B26\u6392\u5E8F\uFF09</span>
<span class="token comment"># -k4.1,4.3 \u8868\u793A\u6309\u7B2C 4 \u5217\u7684\u7B2C 1 \u4E2A\u5B57\u7B26\u5230\u7B2C 4 \u5217\u7684\u7B2C 3 \u4E2A\u5B57\u7B26\u6392\u5E8F\uFF08\u5373\u6309\u7B2C 4 \u5217\u7684\u524D 3 \u4E2A\u5B57\u7B26\u6392\u5E8F\uFF09</span>
<span class="token function">sort</span> <span class="token parameter variable">-t</span> <span class="token string">&quot;.&quot;</span> -k3.1,3.1 -k4.1,4.3 <span class="token parameter variable">-n</span> ip.txt
</code></pre></div><p><strong><code>uniq</code></strong></p><div class="language-text ext-text"><pre class="language-text"><code>uniq \u547D\u4EE4\u7528\u4E8E\u5BF9\u76F8\u540C\u4E14\u8FDE\u7EED\u7684\u591A\u884C\u5185\u5BB9\u8FDB\u884C\u53BB\u91CD\u3002\uFF08\u6CE8\uFF1A\u4E0D\u8FDE\u7EED\u7684\u76F8\u540C\u884C\u65E0\u6CD5\u53BB\u91CD\uFF09
\u56E0\u6B64\uFF0C\u5728\u4F7F\u7528 uniq \u53BB\u91CD\u4E4B\u524D\uFF0C\u9700\u8981\u901A\u8FC7 sort \u547D\u4EE4\u8FDB\u884C\u6392\u5E8F\uFF0C\u4F7F\u91CD\u590D\u7684\u884C\u8FDE\u7EED\u6392\u5217\u3002

uniq -c \u53EF\u4EE5\u7EDF\u8BA1\u91CD\u590D\u4E2A\u6570
</code></pre></div><h4 id="_5-1-1-\u793A\u4F8B\u4EE3\u7801\u4E00" tabindex="-1"><a class="header-anchor" href="#_5-1-1-\u793A\u4F8B\u4EE3\u7801\u4E00" aria-hidden="true">#</a> 5.1.1 \u793A\u4F8B\u4EE3\u7801\u4E00</h4><p><img src="`+c+'" alt="" loading="lazy"></p><h4 id="_5-1-2-\u793A\u4F8B\u4EE3\u7801\u4E8C-\u6253\u5370\u51FA\u8BBF\u95EE\u6700\u9AD8\u7684\u524D-10-\u4E2A-ip" tabindex="-1"><a class="header-anchor" href="#_5-1-2-\u793A\u4F8B\u4EE3\u7801\u4E8C-\u6253\u5370\u51FA\u8BBF\u95EE\u6700\u9AD8\u7684\u524D-10-\u4E2A-ip" aria-hidden="true">#</a> 5.1.2 \u793A\u4F8B\u4EE3\u7801\u4E8C\uFF1A\u6253\u5370\u51FA\u8BBF\u95EE\u6700\u9AD8\u7684\u524D <code>10</code> \u4E2A <code>IP</code></h4><p><img src="'+o+'" alt="" loading="lazy"></p><h4 id="_5-1-3-\u793A\u4F8B\u4EE3\u7801\u4E09-\u627E\u51FA\u5DE5\u8D44\u6700\u9AD8\u7684\u524D-5-\u4EBA-awk-\u548C-sort-\u7ED3\u5408\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_5-1-3-\u793A\u4F8B\u4EE3\u7801\u4E09-\u627E\u51FA\u5DE5\u8D44\u6700\u9AD8\u7684\u524D-5-\u4EBA-awk-\u548C-sort-\u7ED3\u5408\u4F7F\u7528" aria-hidden="true">#</a> 5.1.3 \u793A\u4F8B\u4EE3\u7801\u4E09\uFF1A\u627E\u51FA\u5DE5\u8D44\u6700\u9AD8\u7684\u524D <code>5</code> \u4EBA\uFF08<code>awk</code> \u548C <code>sort</code> \u7ED3\u5408\u4F7F\u7528\uFF09</h4><p><img src="'+p+`" alt="" loading="lazy"></p><h3 id="_5-2-\u7EDF\u8BA1\u6587\u4EF6\u7684\u884C\u6570-wc" tabindex="-1"><a class="header-anchor" href="#_5-2-\u7EDF\u8BA1\u6587\u4EF6\u7684\u884C\u6570-wc" aria-hidden="true">#</a> 5.2 \u7EDF\u8BA1\u6587\u4EF6\u7684\u884C\u6570\uFF1A<code>wc</code></h3><div class="language-text ext-text"><pre class="language-text"><code>wc \u547D\u4EE4\u7528\u6765\u7EDF\u8BA1\u6587\u4EF6\u7684\u884C\u6570\u3002\u5F53\u7136\u4E5F\u53EF\u4EE5\u7528\u6765\u7EDF\u8BA1\u63A7\u5236\u53F0\u8F93\u51FA\u7684\u884C\u6570\u3002

wc [OPTION]... [FILE]...

-l: \u663E\u793A\u6587\u4EF6\u884C\u6570
-c: \u663E\u793A\u6587\u4EF6\u5B57\u8282
-w: \u663E\u793A\u6587\u4EF6\u5355\u8BCD
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u7EDF\u8BA1 /etc/services \u6587\u4EF6\u7684\u51FD\u6570</span>
<span class="token function">wc</span> <span class="token parameter variable">-l</span> /etc/services
</code></pre></div><h4 id="_5-2-1-\u793A\u4F8B\u4EE3\u7801-\u7EDF\u8BA1-etc-passwd-\u6587\u4EF6\u4E2D\u4EE5-nologin-\u7ED3\u5C3E\u7684\u884C\u6570" tabindex="-1"><a class="header-anchor" href="#_5-2-1-\u793A\u4F8B\u4EE3\u7801-\u7EDF\u8BA1-etc-passwd-\u6587\u4EF6\u4E2D\u4EE5-nologin-\u7ED3\u5C3E\u7684\u884C\u6570" aria-hidden="true">#</a> 5.2.1 \u793A\u4F8B\u4EE3\u7801\uFF1A\u7EDF\u8BA1 <code>/etc/passwd</code> \u6587\u4EF6\u4E2D\u4EE5 <code>nologin</code> \u7ED3\u5C3E\u7684\u884C\u6570</h4><p><img src="`+r+'" alt="" loading="lazy"></p><h4 id="_5-2-2-\u7EDF\u8BA1\u6587\u4EF6\u884C\u53F7\u7684\u51E0\u79CD\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-2-2-\u7EDF\u8BA1\u6587\u4EF6\u884C\u53F7\u7684\u51E0\u79CD\u65B9\u6CD5" aria-hidden="true">#</a> 5.2.2 \u7EDF\u8BA1\u6587\u4EF6\u884C\u53F7\u7684\u51E0\u79CD\u65B9\u6CD5</h4><p><img src="'+l+`" alt="" loading="lazy"></p><h3 id="_5-3-\u8FC7\u6EE4\u884C-\u8FC7\u6EE4\u5217-grep-awk" tabindex="-1"><a class="header-anchor" href="#_5-3-\u8FC7\u6EE4\u884C-\u8FC7\u6EE4\u5217-grep-awk" aria-hidden="true">#</a> 5.3 \u8FC7\u6EE4\u884C &amp; \u8FC7\u6EE4\u5217\uFF1A<code>grep</code> &amp; <code>awk</code></h3><div class="language-text ext-text"><pre class="language-text"><code>\u8FC7\u6EE4\u5217\u65F6\u8981\u60F3\u5230 awk \u547D\u4EE4\uFF1B
\u8FC7\u6EE4\u884C\u65F6\u8981\u60F3\u5230 grep \u547D\u4EE4\u3002
</code></pre></div><p><strong><code>grep</code></strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5728 /etc/passwd \u6587\u4EF6\u4E2D\u8FC7\u6EE4\u51FA\u5305\u542B root \u7684\u884C</span>
<span class="token function">grep</span> <span class="token string">&quot;root&quot;</span> /etc/passwd

<span class="token comment"># \u5728 /etc/passwd \u6587\u4EF6\u4E2D\u8FC7\u6EE4\u51FA\u4EE5 root \u5F00\u5934\u7684\u884C</span>
<span class="token comment"># \u8FD9\u91CC\u9700\u8981\u7528\u5230\u6B63\u5219\u8868\u8FBE\u5F0F\u7B26\u53F7 ^</span>
<span class="token function">grep</span> <span class="token string">&quot;^root&quot;</span> /etc/passwd

<span class="token comment"># \u5728 /etc/passwd \u6587\u4EF6\u4E2D\u8FC7\u6EE4\u51FA\u4EE5 bash \u7ED3\u5C3E\u7684\u884C</span>
<span class="token comment"># \u8FD9\u91CC\u9700\u8981\u7528\u5230\u6B63\u5219\u8868\u8FBE\u5F0F\u7B26\u53F7 $</span>
<span class="token function">grep</span> <span class="token string">&quot;bash$&quot;</span> /etc/passwd

<span class="token comment"># \u5728 /etc/passwd \u6587\u4EF6\u4E2D\u8FC7\u6EE4\u51FA\u5305\u542B ftp \u7684\u884C\uFF0C\u4E14\u5FFD\u7565\u5927\u5C0F\u5199\u7684\u5339\u914D\u3002</span>
<span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;ftp&quot;</span> /etc/passwd

<span class="token comment"># \u5728 /etc/passwd \u6587\u4EF6\u4E2D\u8FC7\u6EE4\u51FA\u6392\u9664\u4E86\u5305\u542B ftp \u4E4B\u5916\u7684\u5176\u4ED6\u884C</span>
<span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;ftp&quot;</span> /etc/passwd

<span class="token comment"># \u5728 /etc/passwd \u6587\u4EF6\u4E2D\u8FC7\u6EE4\u51FA\u5305\u542B ftp\uFF0C\u6216\u8005\u4EE5 sync \u7ED3\u5C3E\u7684\u884C\uFF0C\u4E14\u5FFD\u7565\u5927\u5C0F\u5199\u7684\u5339\u914D\u3002</span>
<span class="token comment"># grep \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u7684\u6216\u7B26\u53F7 &quot;|&quot; \u65F6\uFF0C\u9700\u8981\u52A0\u9009\u9879 -E\uFF0C\u5426\u5219\u65E0\u6CD5\u8BC6\u522B\u3002</span>
<span class="token comment"># \u4E5F\u53EF\u4EE5\u4F7F\u7528 egrep \u547D\u4EE4\u4EE3\u7801 grep -E</span>
<span class="token function">grep</span> <span class="token parameter variable">-Ei</span> <span class="token string">&quot;sync$|ftp&quot;</span> /etc/passwd

<span class="token comment"># \u5728 /var/log/secure \u6587\u4EF6\u4E2D\u8FC7\u6EE4\u51FA\u5305\u542B Failed \u7684\u884C\uFF0C\u5E76\u6253\u5370\u5B83\u7684\u4E0B\u9762 2 \u884C\u3002</span>
<span class="token function">grep</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-A</span> <span class="token number">2</span> <span class="token string">&quot;Failed&quot;</span> /var/log/secure

<span class="token comment"># \u5728 /var/log/secure \u6587\u4EF6\u4E2D\u8FC7\u6EE4\u51FA\u5305\u542B Failed \u7684\u884C\uFF0C\u5E76\u6253\u5370\u5B83\u7684\u4E0A\u9762 2 \u884C\u3002</span>
<span class="token function">grep</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-B</span> <span class="token number">2</span> <span class="token string">&quot;Failed&quot;</span> /var/log/secure

<span class="token comment"># \u5728 /var/log/secure \u6587\u4EF6\u4E2D\u8FC7\u6EE4\u51FA\u5305\u542B Failed \u7684\u884C\uFF0C\u5E76\u6253\u5370\u5B83\u7684\u4E0A\u4E0B 2 \u884C\u3002</span>
<span class="token function">grep</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-C</span> <span class="token number">2</span> <span class="token string">&quot;Failed&quot;</span> /var/log/secure
</code></pre></div><p><strong><code>awk</code></strong></p><div class="language-text ext-text"><pre class="language-text"><code>awk \u547D\u4EE4\u4E2D\u53EA\u80FD\u4F7F\u7528\u5355\u5F15\u53F7\u3002

-F 
\u6307\u5B9A\u5206\u5272\u7B26\uFF0C\u5982 awk -F &#39;:&#39; \u6307\u5B9A\u5206\u5272\u7B26\u4E3A :

awk &#39;{print $&lt;N&gt;}&#39; 
\u6253\u5370\u7B2C &lt;N&gt; \u5217\uFF0C\u5982 awk &#39;{print $1}&#39; \u6253\u5370\u7B2C 1 \u5217

awk &#39;{print $NF}&#39;
\u6253\u5370\u6700\u540E\u4E00\u5217

awk &#39;NR==&lt;N&gt;&#39;
\u6253\u5370\u7B2C &lt;N&gt; \u884C\uFF0C\u5982 awk &#39;NR==1&#39; \u6253\u5370\u7B2C 1 \u884C
</code></pre></div><h4 id="_5-3-1-\u4F7F\u7528-ifconfig-\u547D\u4EE4\u9700\u8981\u5B89\u88C5-net-tools-\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-3-1-\u4F7F\u7528-ifconfig-\u547D\u4EE4\u9700\u8981\u5B89\u88C5-net-tools-\u8F6F\u4EF6" aria-hidden="true">#</a> 5.3.1 \u4F7F\u7528 <code>ifconfig</code> \u547D\u4EE4\u9700\u8981\u5B89\u88C5 <code>net-tools</code> \u8F6F\u4EF6</h4><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">install</span> net-tools <span class="token parameter variable">-y</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6267\u884C ifconfig \u547D\u4EE4\u67E5\u770B en1 \u7684\u4FE1\u606F</span>
zkqcom@zkqcomdeMac-mini _1_basic % <span class="token function">ifconfig</span> en1
en1: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">886</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST<span class="token operator">&gt;</span> mtu <span class="token number">1500</span>
    <span class="token assign-left variable">options</span><span class="token operator">=</span><span class="token number">646</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>RXCSUM,TXCSUM,TSO4,TSO6,CHANNEL_IO,PARTIAL_CSUM,ZEROINVERT_CSUM<span class="token operator">&gt;</span>
    ether 00:8a:76:e7:a9:44 
    inet6 fe80::88a:fe05:6f03:e3c0%en1 prefixlen <span class="token number">64</span> secured scopeid 0xc 
    inet <span class="token number">192.168</span>.101.10 netmask 0xffffff00 broadcast <span class="token number">192.168</span>.101.255
    nd6 <span class="token assign-left variable">options</span><span class="token operator">=</span><span class="token number">20</span><span class="token operator"><span class="token file-descriptor important">1</span>&lt;</span>PERFORMNUD,DAD<span class="token operator">&gt;</span>
    media: autoselect
    status: active
</code></pre></div><h4 id="_5-3-2-\u5C06\u7CFB\u7EDF-ip-\u5730\u5740\u6253\u5370\u51FA\u6765-grep-\u547D\u4EE4\u53D6\u884C-awk-\u547D\u4EE4\u53D6\u5217" tabindex="-1"><a class="header-anchor" href="#_5-3-2-\u5C06\u7CFB\u7EDF-ip-\u5730\u5740\u6253\u5370\u51FA\u6765-grep-\u547D\u4EE4\u53D6\u884C-awk-\u547D\u4EE4\u53D6\u5217" aria-hidden="true">#</a> 5.3.2 \u5C06\u7CFB\u7EDF <code>IP</code> \u5730\u5740\u6253\u5370\u51FA\u6765\uFF08<code>grep</code> \u547D\u4EE4\u53D6\u884C\uFF0C<code>awk</code> \u547D\u4EE4\u53D6\u5217\uFF09</h4><div class="language-bash ext-sh"><pre class="language-bash"><code>zkqcom@zkqcomdeMac-mini _1_basic % <span class="token function">ifconfig</span> en1 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;inet &quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span>
<span class="token number">192.168</span>.101.10
</code></pre></div><h4 id="_5-3-3-\u5C06\u7CFB\u7EDF-ip-\u5730\u5740\u6253\u5370\u51FA\u6765-awk-\u547D\u4EE4\u53D6\u884C-\u53D6\u5217" tabindex="-1"><a class="header-anchor" href="#_5-3-3-\u5C06\u7CFB\u7EDF-ip-\u5730\u5740\u6253\u5370\u51FA\u6765-awk-\u547D\u4EE4\u53D6\u884C-\u53D6\u5217" aria-hidden="true">#</a> 5.3.3 \u5C06\u7CFB\u7EDF <code>IP</code> \u5730\u5740\u6253\u5370\u51FA\u6765\uFF08<code>awk</code> \u547D\u4EE4\u53D6\u884C &amp; \u53D6\u5217\uFF09</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># awk &#39;NR==5&#39; \u547D\u4EE4\u8868\u793A\u53D6\u7B2C 5 \u884C\uFF08\u7D22\u5F15\u4ECE 1 \u5F00\u59CB\uFF09\u3002NR \u53EF\u4EE5\u7406\u89E3\u4E3A number of row</span>
zkqcom@zkqcomdeMac-mini _1_basic % <span class="token function">ifconfig</span> en1 <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;NR==5&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span>
<span class="token number">192.168</span>.101.10

<span class="token comment"># awk &#39;NR==5&#39; | awk &#39;{print $2}&#39; \u53EF\u4EE5\u5408\u5E76\u5199\u6210 awk &#39;NR==5 {print $2}&#39;</span>
zkqcom@zkqcomdeMac-mini _1_basic % <span class="token function">ifconfig</span> en1 <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;NR==5 {print $2}&#39;</span>
<span class="token number">192.168</span>.101.10
</code></pre></div><h4 id="_5-3-4-\u6253\u5370-etc-passwd-\u6587\u4EF6\u4E2D\u7684\u7528\u6237\u540D\u4E0E-uid-awk-\u7684\u5206\u5272\u7B26\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_5-3-4-\u6253\u5370-etc-passwd-\u6587\u4EF6\u4E2D\u7684\u7528\u6237\u540D\u4E0E-uid-awk-\u7684\u5206\u5272\u7B26\u8BBE\u7F6E" aria-hidden="true">#</a> 5.3.4 \u6253\u5370 <code>/etc/passwd</code> \u6587\u4EF6\u4E2D\u7684\u7528\u6237\u540D\u4E0E <code>UID</code>\uFF08<code>awk</code> \u7684\u5206\u5272\u7B26\u8BBE\u7F6E\uFF09</h4><div class="language-text ext-text"><pre class="language-text"><code>/etc/passwd \u6587\u4EF6\u4E2D\u7528\u6237\u540D\u4E0E\u7528\u6237\u7684 UID \u5206\u522B\u5728\u4EE5 &#39;:&#39; \u4E3A\u5206\u5272\u7B26\u7684\u7B2C 1 \u5217\u548C\u7B2C 3 \u5217\u3002
\u6B64\u65F6\uFF0C\u9700\u8981\u4F7F\u7528 -F \u9009\u9879\u8BBE\u7F6E awk \u547D\u4EE4\u7684\u5206\u5272\u7B26\u3002
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># awk \u547D\u4EE4\u9ED8\u8BA4\u4EE5\u7A7A\u683C\u4F5C\u4E3A\u5206\u5272\u7B26\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u9009\u9879 -F \u81EA\u5B9A\u4E49\u5206\u5272\u7B26\uFF0C\u5982 -F &#39;:&#39; \u8868\u793A\u5B9A\u4E49\u5206\u5272\u7B26\u4E3A :</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{print $1,$3}&#39;</span> /etc/passwd 
</code></pre></div><h2 id="_6-\u5176\u4ED6\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_6-\u5176\u4ED6\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 6. \u5176\u4ED6\u5E38\u7528\u547D\u4EE4</h2><h3 id="_6-1-\u663E\u793A\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u53CA\u76F8\u5173\u5C5E\u6027\u4FE1\u606F-ls" tabindex="-1"><a class="header-anchor" href="#_6-1-\u663E\u793A\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u53CA\u76F8\u5173\u5C5E\u6027\u4FE1\u606F-ls" aria-hidden="true">#</a> 6.1 \u663E\u793A\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u53CA\u76F8\u5173\u5C5E\u6027\u4FE1\u606F\uFF1A<code>ls</code></h3><div class="language-text ext-text"><pre class="language-text"><code>-l: \u8BE6\u7EC6\u4FE1\u606F
-a: \u6240\u6709\u6587\u4EF6\uFF08\u5305\u542B\u9690\u85CF\u6587\u4EF6\uFF09
-d: \u663E\u793A\u76EE\u5F55\u672C\u8EAB\u7684\u4FE1\u606F\uFF0C\u800C\u4E0D\u662F\u76EE\u5F55\u5185\u5BB9
-h: \u4E00\u822C\u4E0E -l \u4E00\u8D77\u4F7F\u7528\uFF0C\u8868\u793A\u4EE5\u4EBA\u7C7B\u53EF\u8BFB\u7684\u5F62\u5F0F\u663E\u793A\u6587\u4EF6\u5927\u5C0F
-r: \u9006\u5E8F\u6392\u5E8F
-t: \u6309\u7167\u6587\u4EF6\u4FEE\u6539\u65F6\u95F4\u6392\u5E8F
</code></pre></div><h3 id="_6-2-\u5207\u6362\u76EE\u5F55-cd" tabindex="-1"><a class="header-anchor" href="#_6-2-\u5207\u6362\u76EE\u5F55-cd" aria-hidden="true">#</a> 6.2 \u5207\u6362\u76EE\u5F55\uFF1A<code>cd</code></h3><div class="language-text ext-text"><pre class="language-text"><code>cd \u5373 change directory

\u5207\u6362\u5230\u5BB6\u76EE\u5F55: cd \u6216 cd ~
\u5207\u6362\u5230\u4E0A\u4E00\u7EA7\u76EE\u5F55: cd ..
\u5207\u6362\u5230\u4E0A\u4E00\u6B21\u6240\u5728\u76EE\u5F55: cd -
</code></pre></div><h3 id="_6-3-\u663E\u793A\u5F53\u524D\u6240\u5728\u7684\u4F4D\u7F6E-pwd" tabindex="-1"><a class="header-anchor" href="#_6-3-\u663E\u793A\u5F53\u524D\u6240\u5728\u7684\u4F4D\u7F6E-pwd" aria-hidden="true">#</a> 6.3 \u663E\u793A\u5F53\u524D\u6240\u5728\u7684\u4F4D\u7F6E\uFF1A<code>pwd</code></h3><div class="language-text ext-text"><pre class="language-text"><code>pwd \u5373 print working directory
</code></pre></div><h3 id="_6-4-\u4EE5\u6811\u5F62\u7ED3\u6784\u663E\u793A\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9-tree" tabindex="-1"><a class="header-anchor" href="#_6-4-\u4EE5\u6811\u5F62\u7ED3\u6784\u663E\u793A\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9-tree" aria-hidden="true">#</a> 6.4 \u4EE5\u6811\u5F62\u7ED3\u6784\u663E\u793A\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\uFF1A<code>tree</code></h3><h3 id="_6-5-\u5C06-dos-\u683C\u5F0F\u6587\u4EF6\u8F6C\u6362\u4E3A-unix-\u683C\u5F0F-dos2unix" tabindex="-1"><a class="header-anchor" href="#_6-5-\u5C06-dos-\u683C\u5F0F\u6587\u4EF6\u8F6C\u6362\u4E3A-unix-\u683C\u5F0F-dos2unix" aria-hidden="true">#</a> 6.5 \u5C06 <code>DOS</code> \u683C\u5F0F\u6587\u4EF6\u8F6C\u6362\u4E3A UNIX \u683C\u5F0F\uFF1A<code>dos2unix</code></h3><div class="language-text ext-text"><pre class="language-text"><code>\u5373\uFF1A\u5C06 windows \u7CFB\u7EDF\u4E2D\u62F7\u8D1D\u8FC7\u6765\u7684\u5E26 DOS \u683C\u5F0F\u7684\u6587\u4EF6\u8F6C\u6362\u4E3A Linux \u7CFB\u7EDF\u4E2D\u7684 UNIX \u683C\u5F0F\u7684\u6587\u4EF6\u3002
</code></pre></div><h3 id="_6-6-\u81EA\u52A8\u5316-rpm-\u5305\u7BA1\u7406\u5DE5\u5177-yum" tabindex="-1"><a class="header-anchor" href="#_6-6-\u81EA\u52A8\u5316-rpm-\u5305\u7BA1\u7406\u5DE5\u5177-yum" aria-hidden="true">#</a> 6.6 \u81EA\u52A8\u5316 <code>RPM</code> \u5305\u7BA1\u7406\u5DE5\u5177\uFF1A<code>yum</code></h3><div class="language-text ext-text"><pre class="language-text"><code>yum \u5373 Yellow Dog \uFF08\u9EC4\u72D7\uFF09

\u793A\u4F8B\uFF1A\u540C\u65F6\u5B89\u88C5 3 \u4E2A\u8F6F\u4EF6\u3002\u5176\u4E2D -y \u8868\u793A\u5B89\u88C5\u65F6\u9ED8\u8BA4\u9009\u62E9 yes
yum install -y tree wget vim
</code></pre></div>`,102);function g(u,h){return i}var m=a(d,[["render",g],["__file","_05_linux_basic_cmd.html.vue"]]);export{m as default};
