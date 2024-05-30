import{_ as e,e as a}from"./app.2a01fc36.js";var n="/assets/01.2b34bbdb.png",s="/assets/02.7f0d90f0.png",o="/assets/03.2f41402d.png",t="/assets/04.7306be41.png",r="/assets/05.248b42c6.png",c="/assets/06.ae629c6d.png",d="/assets/07.19f8541b.png",l="/assets/08.36a1ff57.png",i="/assets/09.0631b174.png",p="/assets/10.0317d58a.png",u="/assets/11.93f99f21.png",h="/assets/12.9a78625a.png",g="/assets/14.fd314ddb.png",_="/assets/13.5a86f5b5.png",v="/assets/15.320f276a.png",x="/assets/16.fe0a2906.png",f="/assets/17.5365cc65.png";const b={},k=a('<h2 id="_1-\u95ED\u5305\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#_1-\u95ED\u5305\u57FA\u7840" aria-hidden="true">#</a> 1. \u95ED\u5305\u57FA\u7840</h2><h3 id="_1-1-\u4EC0\u4E48\u662F\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4EC0\u4E48\u662F\u95ED\u5305" aria-hidden="true">#</a> 1.1 \u4EC0\u4E48\u662F\u95ED\u5305\uFF1F</h3><p>\u95ED\u5305\uFF08<code>closure</code>\uFF09\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u4EE3\u7801\u5757\uFF0C\u4F5C\u7528\u7C7B\u4F3C\u4E8E\u51FD\u6570\u3002</p><h3 id="_1-2-\u95ED\u5305\u7684\u5B9A\u4E49\u4E0E\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#_1-2-\u95ED\u5305\u7684\u5B9A\u4E49\u4E0E\u8C03\u7528" aria-hidden="true">#</a> 1.2 \u95ED\u5305\u7684\u5B9A\u4E49\u4E0E\u8C03\u7528</h3><p>\u95ED\u5305\u7684\u5B9A\u4E49\u548C\u95ED\u5305\u7684\u8C03\u7528\u5982\u4E0B\u56FE\uFF1A</p><blockquote><p>\u53EF\u4EE5\u53D1\u73B0 <code>groovy.lang.Closure</code> \u662F\u95ED\u5305\u57FA\u7C7B\u3002</p></blockquote><p><img src="'+n+`" alt="" loading="lazy"></p><h3 id="_1-3-\u95ED\u5305\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-3-\u95ED\u5305\u7684\u53C2\u6570" aria-hidden="true">#</a> 1.3 \u95ED\u5305\u7684\u53C2\u6570</h3><h4 id="_1-3-1-\u5E26\u666E\u901A\u53C2\u6570\u7684\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#_1-3-1-\u5E26\u666E\u901A\u53C2\u6570\u7684\u95ED\u5305" aria-hidden="true">#</a> 1.3.1 \u5E26\u666E\u901A\u53C2\u6570\u7684\u95ED\u5305</h4><p>\u5E26\u666E\u901A\u53C2\u6570\u7684\u95ED\u5305\u7684\u5B9A\u4E49\u65B9\u5F0F\uFF1A</p><div class="language-groovy ext-groovy"><pre class="language-groovy"><code><span class="token keyword">def</span> closure <span class="token operator">=</span> <span class="token punctuation">{</span> T1 t1<span class="token punctuation">,</span> T2 t2<span class="token punctuation">,</span> T3 t3<span class="token punctuation">,</span> <span class="token punctuation">...</span> <span class="token operator">-&gt;</span> \u6267\u884C\u8BED\u53E5 <span class="token punctuation">}</span>
</code></pre></div><p>\u5E26\u666E\u901A\u53C2\u6570\u7684\u95ED\u5305\u7684\u8C03\u7528\u65B9\u5F0F\uFF1A</p><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>closure<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">,</span> v3<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">)</span>
<span class="token function">closure</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">,</span> v3<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="_1-3-2-\u5E26\u9690\u5F0F\u53C2\u6570\u7684\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#_1-3-2-\u5E26\u9690\u5F0F\u53C2\u6570\u7684\u95ED\u5305" aria-hidden="true">#</a> 1.3.2 \u5E26\u9690\u5F0F\u53C2\u6570\u7684\u95ED\u5305</h4><p>\u5F53\u5B9A\u4E49\u95ED\u5305\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u663E\u793A\u5B9A\u4E49\u95ED\u5305\u53C2\u6570\uFF0C\u90A3\u4E48\u95ED\u5305\u4E2D\u9ED8\u8BA4\u4F1A\u5B58\u5728\u4E00\u4E2A\u540D\u4E3A <code>it</code> \u7684\u9690\u5F0F\u53C2\u6570\u3002</p><blockquote><p>\u5982\u679C\u663E\u793A\u5B9A\u4E49\u4E86\u53C2\u6570\uFF0C\u90A3\u4E48\u9690\u5F0F\u53C2\u6570 <code>it</code> \u5C31\u4E0D\u5B58\u5728\u4E86\u3002</p></blockquote><p><img src="`+s+`" alt="" loading="lazy"></p><h3 id="_1-4-\u95ED\u5305\u7684\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#_1-4-\u95ED\u5305\u7684\u8FD4\u56DE\u503C" aria-hidden="true">#</a> 1.4 \u95ED\u5305\u7684\u8FD4\u56DE\u503C</h3><p>\u5982\u4E0B\u56FE\u4EE3\u7801\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>1. \u4ECE closure2 \u4E2D\u53EF\u4EE5\u53D1\u73B0\uFF1A\u95ED\u5305\u4E00\u5B9A\u6709\u8FD4\u56DE\u503C\uFF0C\u5C31\u7B97\u6CA1\u6709\u5199 return \u8BED\u53E5\u4E5F\u8FD4\u56DE null\uFF1B
2. \u7ED3\u5408 closure3 \u548C closure4 \u53EF\u4EE5\u53D1\u73B0\uFF1A\u95ED\u5305\u7684\u8FD4\u56DE\u503C\u5C31\u662F\u6700\u540E\u4E00\u6761\u6267\u884C\u8BED\u53E5\u7ED3\u679C\u503C\uFF0C\u5982\u679C\u6700\u540E\u4E00\u6761\u6267\u884C\u8BED\u53E5\u6CA1\u6709\u7ED3\u679C\u503C\uFF0C\u5C31\u8FD4\u56DE null\u3002
</code></pre></div><p><img src="`+o+`" alt="" loading="lazy"></p><h2 id="_2-\u95ED\u5305\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u95ED\u5305\u7684\u4F7F\u7528" aria-hidden="true">#</a> 2. \u95ED\u5305\u7684\u4F7F\u7528</h2><h3 id="_2-1-\u4E0E\u57FA\u672C\u7C7B\u578B\u7ED3\u5408\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4E0E\u57FA\u672C\u7C7B\u578B\u7ED3\u5408\u4F7F\u7528" aria-hidden="true">#</a> 2.1 \u4E0E\u57FA\u672C\u7C7B\u578B\u7ED3\u5408\u4F7F\u7528</h3><h4 id="_2-1-1-\u95ED\u5305\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570-\u9012\u589E\u51FD\u6570-upto-number-closure" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u95ED\u5305\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570-\u9012\u589E\u51FD\u6570-upto-number-closure" aria-hidden="true">#</a> 2.1.1 \u95ED\u5305\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570 &amp; \u9012\u589E\u51FD\u6570\uFF1A<code>upto(Number, Closure)</code></h4><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>Number<span class="token punctuation">.</span><span class="token function">upto</span><span class="token punctuation">(</span>Number<span class="token punctuation">,</span> Closure<span class="token punctuation">)</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u5B9E\u73B0\u4ECE\u8C03\u7528\u8005 Number \u5230\u53C2\u6570 Number \u7684\u5FAA\u73AF\u9012\u589E\uFF0C\u5FAA\u73AF\u56E0\u5B50\u4F5C\u4E3A\u95ED\u5305 Closure \u7684\u53C2\u6570\u3002
</code></pre></div><p><img src="`+t+`" alt="" loading="lazy"></p><h4 id="_2-1-2-\u95ED\u5305\u5199\u5728-\u540E\u9762-\u9012\u51CF\u51FD\u6570-downto-number-closure" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u95ED\u5305\u5199\u5728-\u540E\u9762-\u9012\u51CF\u51FD\u6570-downto-number-closure" aria-hidden="true">#</a> 2.1.2 \u95ED\u5305\u5199\u5728 &quot;<code>()</code>&quot; \u540E\u9762 &amp; \u9012\u51CF\u51FD\u6570\uFF1A<code>downto(Number, Closure)</code></h4><p>\u5F53\u95ED\u5305\u4F5C\u4E3A\u5176\u4ED6\u51FD\u6570\u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u65F6\uFF0C\u5728\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u65F6\uFF0C\u53EF\u4EE5\u628A\u6700\u540E\u7684\u5B9E\u53C2\u95ED\u5305\u5199\u5728\u51FD\u6570\u8C03\u7528\u8FD0\u7B97\u7B26 &quot;<code>()</code>&quot; \u7684\u540E\u9762\u3002\u5982\u4E0B\u56FE\u4EE3\u7801\u6240\u793A\uFF1A</p><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>Number<span class="token punctuation">.</span><span class="token function">downto</span><span class="token punctuation">(</span>Number<span class="token punctuation">,</span> Closure<span class="token punctuation">)</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code> \u5B9E\u73B0\u4ECE\u8C03\u7528\u8005 Number \u5230\u53C2\u6570 Number \u7684\u5FAA\u73AF\u9012\u51CF\uFF0C\u5FAA\u73AF\u56E0\u5B50\u4F5C\u4E3A\u95ED\u5305 Closure \u7684\u53C2\u6570\u3002
</code></pre></div><p><img src="`+r+`" alt="" loading="lazy"></p><h4 id="_2-1-3-\u5982\u4F55\u786E\u5B9A\u5B9E\u53C2\u95ED\u5305\u4E2D\u7684\u53C2\u6570\u4E2A\u6570\u548C\u53C2\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-1-3-\u5982\u4F55\u786E\u5B9A\u5B9E\u53C2\u95ED\u5305\u4E2D\u7684\u53C2\u6570\u4E2A\u6570\u548C\u53C2\u6570\u7C7B\u578B" aria-hidden="true">#</a> 2.1.3 \u5982\u4F55\u786E\u5B9A\u5B9E\u53C2\u95ED\u5305\u4E2D\u7684\u53C2\u6570\u4E2A\u6570\u548C\u53C2\u6570\u7C7B\u578B</h4><p>\u901A\u8FC7\u67E5\u770B\u5E26\u53C2\u6570\u95ED\u5305\u7684\u51FD\u6570\u7684\u6E90\u7801\u6765\u786E\u5B9A\u53C2\u6570\u95ED\u5305\u5728\u51FD\u6570\u4F53\u4E2D\u6267\u884C\u65F6\u6240\u63A5\u6536\u7684\u53C2\u6570\u4E2A\u6570\u548C\u53C2\u6570\u7C7B\u578B\u3002</p><h4 id="_2-1-4-\u5B9E\u53C2\u95ED\u5305\u4E2D\u53EF\u7701\u7565\u53C2\u6570\u7C7B\u578B-\u9012\u589E\u51FD\u6570-times-closure" tabindex="-1"><a class="header-anchor" href="#_2-1-4-\u5B9E\u53C2\u95ED\u5305\u4E2D\u53EF\u7701\u7565\u53C2\u6570\u7C7B\u578B-\u9012\u589E\u51FD\u6570-times-closure" aria-hidden="true">#</a> 2.1.4 \u5B9E\u53C2\u95ED\u5305\u4E2D\u53EF\u7701\u7565\u53C2\u6570\u7C7B\u578B &amp; \u9012\u589E\u51FD\u6570\uFF1A<code>times(Closure)</code></h4><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>Number<span class="token punctuation">.</span><span class="token function">times</span><span class="token punctuation">(</span>Closure<span class="token punctuation">)</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u4ECE 0 \u5230\u8C03\u7528\u8005 Number-1 \u5FAA\u73AF\u9012\u589E\uFF0C\u5FAA\u73AF\u56E0\u5B50\u4F5C\u4E3A\u95ED\u5305\u53C2\u6570\u3002
</code></pre></div><p><img src="`+c+`" alt="" loading="lazy"></p><blockquote><p>\u6CE8\u610F\uFF1A\u5728\u5B9A\u4E49\u5B9E\u53C2\u95ED\u5305\u65F6\uFF0C\u53EF\u4EE5\u7701\u7565\u95ED\u5305\u53C2\u6570\u7684\u7C7B\u578B\u3002</p></blockquote><h3 id="_2-2-\u4E0E-string-\u7ED3\u5408\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4E0E-string-\u7ED3\u5408\u4F7F\u7528" aria-hidden="true">#</a> 2.2 \u4E0E <code>String</code> \u7ED3\u5408\u4F7F\u7528</h3><h4 id="_2-2-1-\u904D\u5386\u5B57\u7B26\u4E32\u4E2D\u7684\u5B57\u7B26-each-closure" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u904D\u5386\u5B57\u7B26\u4E32\u4E2D\u7684\u5B57\u7B26-each-closure" aria-hidden="true">#</a> 2.2.1 \u904D\u5386\u5B57\u7B26\u4E32\u4E2D\u7684\u5B57\u7B26\uFF1A<code>each(Closure)</code></h4><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>String str<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span>Closure<span class="token punctuation">)</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u4F5C\u7528\uFF1A \u904D\u5386\u8C03\u7528\u5B57\u7B26\u4E32 str \u7684\u6BCF\u4E2A\u5B57\u7B26\uFF0C\u5C06\u6BCF\u6B21\u904D\u5386\u5230\u7684\u5B57\u7B26\u4F5C\u4E3A\u95ED\u5305\u53C2\u6570\u4F20\u7ED9\u95ED\u5305\u5904\u7406\u3002
\u8FD4\u56DE\u503C\uFF1A\u8FD4\u56DE\u8C03\u7528\u5B57\u7B26\u4E32 str \u672C\u8EAB\u3002
\u6CE8\u610F\uFF1A\u6BCF\u6B21\u904D\u5386\u5F97\u5230\u7684\u5B57\u7B26\u5B9E\u9645\u662F\u4F5C\u4E3A java.lang.String \u7C7B\u578B\u5904\u7406\u7684\u3002
</code></pre></div><h4 id="_2-2-2-\u5B57\u7B26\u4E32\u591A\u6B21\u62FC\u63A5-multiply-number" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u5B57\u7B26\u4E32\u591A\u6B21\u62FC\u63A5-multiply-number" aria-hidden="true">#</a> 2.2.2 \u5B57\u7B26\u4E32\u591A\u6B21\u62FC\u63A5\uFF1A<code>multiply(Number)</code></h4><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>String str<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u4F5C\u7528\uFF1A\u5C06 Number \u4E2A\u8C03\u7528\u5B57\u7B26\u4E32 str \u62FC\u63A5\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32\u8FD4\u56DE\uFF0C\u5982\uFF1A&quot;hello&quot;.multiply(2) \u8FD4\u56DE &quot;hellohello&quot;
</code></pre></div><p><img src="`+d+`" alt="" loading="lazy"></p><h4 id="_2-2-3-\u5B57\u7B26\u4E32\u4E2D\u67E5\u627E\u67D0\u4E2A\u5B57\u7B26-find-closure" tabindex="-1"><a class="header-anchor" href="#_2-2-3-\u5B57\u7B26\u4E32\u4E2D\u67E5\u627E\u67D0\u4E2A\u5B57\u7B26-find-closure" aria-hidden="true">#</a> 2.2.3 \u5B57\u7B26\u4E32\u4E2D\u67E5\u627E\u67D0\u4E2A\u5B57\u7B26\uFF1A<code>find(Closure)</code></h4><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>String str<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>Closure<span class="token punctuation">)</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u4F5C\u7528\uFF1A
    \u904D\u5386\u8C03\u7528\u5B57\u7B26\u4E32 str \u7684\u6BCF\u4E2A\u5B57\u7B26\uFF0C\u5C06\u6BCF\u6B21\u904D\u5386\u5230\u7684\u5B57\u7B26\u4F5C\u4E3A\u95ED\u5305\u53C2\u6570\u4F20\u7ED9\u95ED\u5305\u5904\u7406\u3002
    \u95ED\u5305\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u7528\u4E8E\u5224\u65AD\u5F53\u524D\u4F20\u5165\u7684\u5B57\u7B26\u662F\u5426\u662F\u6211\u4EEC\u8981\u67E5\u627E\u7684\u3002
    \u5F53\u95ED\u5305\u8FD4\u56DE true\uFF0C\u90A3\u4E48\u5F53\u524D\u904D\u5386\u5230\u7684\u5B57\u7B26\u5C31\u4F5C\u4E3A find \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u3002

\u6CE8\u610F\uFF1A
    \u904D\u5386\u5230\u7684\u5B57\u7B26\u5B9E\u9645\u662F\u4F5C\u4E3A java.lang.String \u7C7B\u578B\u5904\u7406\u7684\u3002
</code></pre></div><p><img src="`+l+`" alt="" loading="lazy"></p><h4 id="_2-2-4-\u5B57\u7B26\u4E32\u4E2D\u67E5\u627E\u67D0\u4E9B\u5B57\u7B26-findall-closure" tabindex="-1"><a class="header-anchor" href="#_2-2-4-\u5B57\u7B26\u4E32\u4E2D\u67E5\u627E\u67D0\u4E9B\u5B57\u7B26-findall-closure" aria-hidden="true">#</a> 2.2.4 \u5B57\u7B26\u4E32\u4E2D\u67E5\u627E\u67D0\u4E9B\u5B57\u7B26\uFF1A<code>findAll(Closure)</code></h4><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Collection str<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span>Closure<span class="token punctuation">)</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u4F5C\u7528\uFF1A
    \u904D\u5386\u8C03\u7528\u5B57\u7B26\u4E32 str \u7684\u6BCF\u4E2A\u5B57\u7B26\uFF0C\u5C06\u6BCF\u6B21\u904D\u5386\u5230\u7684\u5B57\u7B26\u4F5C\u4E3A\u95ED\u5305\u53C2\u6570\u4F20\u7ED9\u95ED\u5305\u5904\u7406\u3002
    \u95ED\u5305\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u7528\u4E8E\u5224\u65AD\u5F53\u524D\u4F20\u5165\u7684\u5B57\u7B26\u662F\u5426\u662F\u6211\u4EEC\u8981\u67E5\u627E\u7684\u3002
    \u5F53\u95ED\u5305\u8FD4\u56DE true\uFF0C\u90A3\u4E48\u5F53\u524D\u904D\u5386\u5230\u7684\u5B57\u7B26\u653E\u5165\u5230\u4E00\u4E2A\u521B\u5EFA\u597D\u7684\u96C6\u5408\u4E2D\uFF0C\u5F53\u5168\u90E8\u904D\u5386\u5B8C\u6BD5\u540E\uFF0C\u8FD4\u56DE\u8FD9\u4E2A\u96C6\u5408\u3002

\u6CE8\u610F\uFF1A
    \u904D\u5386\u5230\u7684\u5B57\u7B26\u5B9E\u9645\u662F\u4F5C\u4E3A java.lang.String \u7C7B\u578B\u5904\u7406\u7684\u3002
</code></pre></div><h4 id="_2-2-5-\u96C6\u5408\u5143\u7D20\u62FC\u63A5\u6210\u5B57\u7B26\u4E32-toliststring" tabindex="-1"><a class="header-anchor" href="#_2-2-5-\u96C6\u5408\u5143\u7D20\u62FC\u63A5\u6210\u5B57\u7B26\u4E32-toliststring" aria-hidden="true">#</a> 2.2.5 \u96C6\u5408\u5143\u7D20\u62FC\u63A5\u6210\u5B57\u7B26\u4E32\uFF1A<code>toListString()</code></h4><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>String collection<span class="token punctuation">.</span><span class="token function">toListString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u4F5C\u7528\uFF1A \u5C06\u96C6\u5408\u5143\u7D20\u62FC\u63A5\u6210\u5B57\u7B26\u4E32 &quot;[ele1, ele2, ele3, ...]&quot; \u7684\u5F62\u5F0F\u8FD4\u56DE
</code></pre></div><p><img src="`+i+`" alt="" loading="lazy"></p><h4 id="_2-2-6-\u5224\u65AD\u5B57\u7B26\u4E32\u4E2D\u7684\u4EFB\u4E00\u5B57\u7B26\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6-any-closure" tabindex="-1"><a class="header-anchor" href="#_2-2-6-\u5224\u65AD\u5B57\u7B26\u4E32\u4E2D\u7684\u4EFB\u4E00\u5B57\u7B26\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6-any-closure" aria-hidden="true">#</a> 2.2.6 \u5224\u65AD\u5B57\u7B26\u4E32\u4E2D\u7684\u4EFB\u4E00\u5B57\u7B26\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6\uFF1A<code>any(Closure)</code></h4><div class="language-groovy ext-groovy"><pre class="language-groovy"><code><span class="token keyword">boolean</span> str<span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span>Closure<span class="token punctuation">)</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u4F5C\u7528\uFF1A 
    \u904D\u5386\u5B57\u7B26\u4E32 str \u4E2D\u7684\u6BCF\u4E2A\u5B57\u7B26\uFF0C\u5C06\u5B57\u7B26\u4F5C\u4E3A\u53C2\u6570\u4EA4\u7ED9\u95ED\u5305\u5904\u7406\u3002
    \u95ED\u5305\u5FC5\u987B\u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u7528\u4E8E\u5224\u65AD\u53C2\u6570\u5B57\u7B26\u662F\u5426\u6EE1\u8DB3\u67D0\u79CD\u9700\u6C42\u3002
    \u53EA\u8981\u5B57\u7B26\u4E32 str \u4E2D\u6709\u4E00\u4E2A\u5B57\u7B26\u6EE1\u8DB3\u95ED\u5305\u4E2D\u7684\u4E1A\u52A1\u9700\u6C42\uFF0C\u5219\u65B9\u6CD5 any \u8FD4\u56DE true\uFF1B\u5426\u5219\u8FD4\u56DE false\u3002
</code></pre></div><h4 id="_2-2-7-\u5224\u65AD\u5B57\u7B26\u4E32\u4E2D\u7684\u6240\u6709\u5B57\u7B26\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6-every-closure" tabindex="-1"><a class="header-anchor" href="#_2-2-7-\u5224\u65AD\u5B57\u7B26\u4E32\u4E2D\u7684\u6240\u6709\u5B57\u7B26\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6-every-closure" aria-hidden="true">#</a> 2.2.7 \u5224\u65AD\u5B57\u7B26\u4E32\u4E2D\u7684\u6240\u6709\u5B57\u7B26\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6\uFF1A<code>every(Closure)</code></h4><div class="language-groovy ext-groovy"><pre class="language-groovy"><code><span class="token keyword">boolean</span> str<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>Closure<span class="token punctuation">)</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u4F5C\u7528\uFF1A 
    \u904D\u5386\u5B57\u7B26\u4E32 str \u4E2D\u7684\u6BCF\u4E2A\u5B57\u7B26\uFF0C\u5C06\u5B57\u7B26\u4F5C\u4E3A\u53C2\u6570\u4EA4\u7ED9\u95ED\u5305\u5904\u7406\u3002
    \u95ED\u5305\u5FC5\u987B\u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u7528\u4E8E\u5224\u65AD\u53C2\u6570\u5B57\u7B26\u662F\u5426\u6EE1\u8DB3\u67D0\u79CD\u9700\u6C42\u3002
    \u5F53\u5B57\u7B26\u4E32 str \u4E2D\u6240\u6709\u7684\u5B57\u7B26\u90FD\u6EE1\u8DB3\u95ED\u5305\u4E2D\u7684\u4E1A\u52A1\u9700\u6C42\u65F6\uFF0C\u5219\u65B9\u6CD5 every \u8FD4\u56DE true\uFF1B\u5426\u5219\u8FD4\u56DE false\u3002
</code></pre></div><p><img src="`+p+`" alt="" loading="lazy"></p><h4 id="_2-2-8-\u8FD4\u56DE\u6839\u636E\u5B57\u7B26\u4E32\u4E2D\u5B57\u7B26\u8F6C\u6362\u6210\u7684\u96C6\u5408-collect-closure" tabindex="-1"><a class="header-anchor" href="#_2-2-8-\u8FD4\u56DE\u6839\u636E\u5B57\u7B26\u4E32\u4E2D\u5B57\u7B26\u8F6C\u6362\u6210\u7684\u96C6\u5408-collect-closure" aria-hidden="true">#</a> 2.2.8 \u8FD4\u56DE\u6839\u636E\u5B57\u7B26\u4E32\u4E2D\u5B57\u7B26\u8F6C\u6362\u6210\u7684\u96C6\u5408\uFF1A<code>collect(Closure)</code></h4><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>List str<span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span>Closure<span class="token punctuation">)</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u4F5C\u7528\uFF1A
    \u904D\u5386 str \u4E2D\u7684\u6BCF\u4E2A\u5B57\u7B26\uFF0C\u5C06\u5B57\u7B26\u4F5C\u4E3A\u53C2\u6570\u4F20\u7ED9\u95ED\u5305\u5904\u7406\u3002
    \u95ED\u5305\u5904\u7406\u540E\uFF0C\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u8FD4\u56DE\u67D0\u79CD\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u7136\u540E\u5C06\u95ED\u5305\u8FD4\u56DE\u7684\u6570\u636E\u5B58\u5165\u4E00\u4E2A\u521B\u5EFA\u597D\u7684\u96C6\u5408\u4E2D\uFF0Ccollect \u6267\u884C\u5B8C\u6BD5\u540E\u8FD4\u56DE\u8BE5\u96C6\u5408\u3002
</code></pre></div><p><img src="`+u+`" alt="" loading="lazy"></p><h3 id="_2-3-\u4E0E\u6570\u636E\u7ED3\u6784\u7ED3\u5408\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4E0E\u6570\u636E\u7ED3\u6784\u7ED3\u5408\u4F7F\u7528" aria-hidden="true">#</a> 2.3 \u4E0E\u6570\u636E\u7ED3\u6784\u7ED3\u5408\u4F7F\u7528</h3><blockquote><p>\u5728\u8BB2\u6570\u636E\u7ED3\u6784\u65F6\u8BB2\u89E3\u3002</p></blockquote><h3 id="_2-4-\u4E0E\u6587\u4EF6\u7B49\u7ED3\u5408\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-4-\u4E0E\u6587\u4EF6\u7B49\u7ED3\u5408\u4F7F\u7528" aria-hidden="true">#</a> 2.4 \u4E0E\u6587\u4EF6\u7B49\u7ED3\u5408\u4F7F\u7528</h3><blockquote><p>\u4E0E\u6587\u4EF6\u7684\u7ED3\u5408\u4F7F\u7528\u5728\u8BB2\u6587\u4EF6\u65F6\u8BB2\u89E3\u3002</p></blockquote><h2 id="_3-\u95ED\u5305\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#_3-\u95ED\u5305\u8FDB\u9636" aria-hidden="true">#</a> 3. \u95ED\u5305\u8FDB\u9636</h2><h3 id="_3-1-\u95ED\u5305\u4E2D\u7684\u4E09\u4E2A\u91CD\u8981\u53D8\u91CF-this\u3001owner\u3001delegate" tabindex="-1"><a class="header-anchor" href="#_3-1-\u95ED\u5305\u4E2D\u7684\u4E09\u4E2A\u91CD\u8981\u53D8\u91CF-this\u3001owner\u3001delegate" aria-hidden="true">#</a> 3.1 \u95ED\u5305\u4E2D\u7684\u4E09\u4E2A\u91CD\u8981\u53D8\u91CF\uFF1A<code>this</code>\u3001<code>owner</code>\u3001<code>delegate</code></h3><p><strong><code>this</code></strong></p><div class="language-text ext-text"><pre class="language-text"><code>\u4EE3\u8868\u95ED\u5305\u5B9A\u4E49\u5904\u7684\u7C7B\u6216\u7C7B\u5BF9\u8C61
\uFF08\u95ED\u5305\u4F5C\u4E3A\u9759\u6001\u53D8\u91CF\u65F6\uFF0Cthis \u4EE3\u8868\u7C7B\uFF1B\u95ED\u5305\u4F5C\u4E3A\u975E\u9759\u6001\u53D8\u91CF\u65F6\uFF0Cthis \u4EE3\u8868\u7C7B\u5BF9\u8C61\uFF09
</code></pre></div><p><strong><code>owner</code></strong></p><div class="language-text ext-text"><pre class="language-text"><code>\u5F53\u95ED\u5305\u5728\u7C7B\u4E2D\u5B9A\u4E49\u65F6\uFF0C\u4EE3\u8868\u7C7B\u6216\u7C7B\u5BF9\u8C61\u3002
\u5F53\u95ED\u5305\u5728\u7C7B\u4E2D\u7684\u5176\u4ED6\u95ED\u5305\u4E2D\u5B9A\u4E49\u65F6\uFF0C\u4EE3\u8868\u5176\u4ED6\u95ED\u5305\u5BF9\u8C61\uFF08\u5982\uFF1A\u5F53\u95ED\u5305\u5D4C\u5957\u5B9A\u4E49\u65F6\uFF0C\u5185\u5C42\u95ED\u5305\u7684 owner \u5C31\u662F\u5916\u5C42\u95ED\u5305\u5BF9\u8C61\uFF09
</code></pre></div><p><strong><code>delegate</code></strong></p><div class="language-text ext-text"><pre class="language-text"><code>\u53EF\u4EE5\u662F\u4EFB\u610F\u5BF9\u8C61\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u540C owner
</code></pre></div><p><img src="`+h+'" alt="" loading="lazy"></p><p><strong>\u6CE8\u610F\uFF1A</strong> \u53EA\u80FD\u4FEE\u6539 <code>delegate</code>\uFF0C\u4E0D\u80FD\u624B\u52A8\u4FEE\u6539 <code>this</code> \u548C <code>owner</code>\u3002</p><h4 id="_3-1-1-\u9759\u6001\u95ED\u5305\u4E2D\u7684-this-\u4EE3\u8868\u7C7B-\u975E\u9759\u6001\u95ED\u5305\u4E2D\u7684-this-\u4EE3\u8868\u7C7B\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_3-1-1-\u9759\u6001\u95ED\u5305\u4E2D\u7684-this-\u4EE3\u8868\u7C7B-\u975E\u9759\u6001\u95ED\u5305\u4E2D\u7684-this-\u4EE3\u8868\u7C7B\u5BF9\u8C61" aria-hidden="true">#</a> 3.1.1 \u9759\u6001\u95ED\u5305\u4E2D\u7684 <code>this</code> \u4EE3\u8868\u7C7B\uFF1B\u975E\u9759\u6001\u95ED\u5305\u4E2D\u7684 <code>this</code> \u4EE3\u8868\u7C7B\u5BF9\u8C61</h4><p>\u95ED\u5305\u4F5C\u4E3A\u9759\u6001\u53D8\u91CF\u65F6 <code>this</code> \u4EE3\u8868\u7C7B\uFF1B\u95ED\u5305\u4F5C\u4E3A\u975E\u9759\u6001\u53D8\u91CF\u65F6 <code>this</code> \u4EE3\u8868\u7C7B\u5BF9\u8C61\u3002</p><p><img src="'+g+'" alt="" loading="lazy"></p><h4 id="_3-1-2-\u95ED\u5305\u5D4C\u5957\u5B9A\u4E49\u65F6\u5185\u5C42\u95ED\u5305\u7684-owner-\u5C31\u662F\u5916\u5C42\u95ED\u5305\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_3-1-2-\u95ED\u5305\u5D4C\u5957\u5B9A\u4E49\u65F6\u5185\u5C42\u95ED\u5305\u7684-owner-\u5C31\u662F\u5916\u5C42\u95ED\u5305\u5BF9\u8C61" aria-hidden="true">#</a> 3.1.2 \u95ED\u5305\u5D4C\u5957\u5B9A\u4E49\u65F6\u5185\u5C42\u95ED\u5305\u7684 <code>owner</code> \u5C31\u662F\u5916\u5C42\u95ED\u5305\u5BF9\u8C61</h4><p><img src="'+_+'" alt="" loading="lazy"></p><h4 id="_3-1-3-\u5728\u8C03\u7528\u95ED\u5305\u524D\u53EF\u4EE5\u5C06\u95ED\u5305\u7684-delegate-\u53D8\u91CF\u8BBE\u7F6E\u4E3A\u5176\u4ED6\u4EFB\u610F\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_3-1-3-\u5728\u8C03\u7528\u95ED\u5305\u524D\u53EF\u4EE5\u5C06\u95ED\u5305\u7684-delegate-\u53D8\u91CF\u8BBE\u7F6E\u4E3A\u5176\u4ED6\u4EFB\u610F\u5BF9\u8C61" aria-hidden="true">#</a> 3.1.3 \u5728\u8C03\u7528\u95ED\u5305\u524D\u53EF\u4EE5\u5C06\u95ED\u5305\u7684 <code>delegate</code> \u53D8\u91CF\u8BBE\u7F6E\u4E3A\u5176\u4ED6\u4EFB\u610F\u5BF9\u8C61</h4><p><img src="'+v+'" alt="" loading="lazy"></p><h3 id="_3-2-\u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_3-2-\u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565" aria-hidden="true">#</a> 3.2 \u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565</h3><h4 id="_3-2-1-\u95ED\u5305\u7684\u59D4\u6258\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_3-2-1-\u95ED\u5305\u7684\u59D4\u6258\u5BF9\u8C61" aria-hidden="true">#</a> 3.2.1 \u95ED\u5305\u7684\u59D4\u6258\u5BF9\u8C61</h4><p>\u95ED\u5305\u4E2D\u7684 <code>owner</code> \u548C <code>delegate</code> \u53D8\u91CF\u6307\u5B9A\u7684\u5BF9\u8C61\u5C31\u662F\u95ED\u5305\u7684\u59D4\u6258\u5BF9\u8C61\u3002</p><p>\u95ED\u5305\u4E2D\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u59D4\u6258\u5BF9\u8C61\u7684\u6210\u5458\u65B9\u6CD5\u548C\u6210\u5458\u5C5E\u6027\u3002</p><h4 id="_3-2-2-\u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565\u5305\u62EC\u4E24\u4E2A\u65B9\u9762" tabindex="-1"><a class="header-anchor" href="#_3-2-2-\u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565\u5305\u62EC\u4E24\u4E2A\u65B9\u9762" aria-hidden="true">#</a> 3.2.2 \u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565\u5305\u62EC\u4E24\u4E2A\u65B9\u9762</h4><h5 id="_3-2-2-1-\u4FEE\u6539\u95ED\u5305\u7684-delegate-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_3-2-2-1-\u4FEE\u6539\u95ED\u5305\u7684-delegate-\u53D8\u91CF" aria-hidden="true">#</a> 3.2.2.1 \u4FEE\u6539\u95ED\u5305\u7684 <code>delegate</code> \u53D8\u91CF</h5><p>\u901A\u8FC7\u4FEE\u6539\u95ED\u5305\u7684 <code>delegate</code> \u53D8\u91CF\u6765\u6307\u5B9A\u7684\u59D4\u6258\u5BF9\u8C61\u3002</p><h5 id="_3-2-2-2-\u4FEE\u6539\u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-2-2-2-\u4FEE\u6539\u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565\u65B9\u5F0F" aria-hidden="true">#</a> 3.2.2.2 \u4FEE\u6539\u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565\u65B9\u5F0F</h5><p>\u901A\u8FC7\u4FEE\u6539\u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565\u65B9\u5F0F\uFF0C\u4ECE\u800C\u6539\u53D8\u7531\u54EA\u4E2A\u59D4\u6258\u5BF9\u8C61\u6765\u63D0\u4F9B\u95ED\u5305\u4E2D\u8BBF\u95EE\u7684\u6210\u5458\u5C5E\u6027\u6216\u6210\u5458\u65B9\u6CD5\u3002</p><h4 id="_3-2-3-closure-\u7C7B\u4E2D\u5B9A\u4E49\u7684\u51E0\u79CD\u59D4\u6258\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-2-3-closure-\u7C7B\u4E2D\u5B9A\u4E49\u7684\u51E0\u79CD\u59D4\u6258\u65B9\u5F0F" aria-hidden="true">#</a> 3.2.3 <code>Closure</code> \u7C7B\u4E2D\u5B9A\u4E49\u7684\u51E0\u79CD\u59D4\u6258\u65B9\u5F0F</h4><h5 id="_3-2-3-1-closure-owner-first-\u9ED8\u8BA4\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-2-3-1-closure-owner-first-\u9ED8\u8BA4\u65B9\u5F0F" aria-hidden="true">#</a> 3.2.3.1 <code>Closure.OWNER_FIRST</code>\uFF08\u9ED8\u8BA4\u65B9\u5F0F\uFF09</h5><p>\u95ED\u5305\u6267\u884C\u65F6\uFF0C\u95ED\u5305\u4E2D\u6240\u8BBF\u95EE\u7684\u6210\u5458\u5C5E\u6027\u6216\u6210\u5458\u65B9\u6CD5\u5148\u4ECE <code>owner</code> \u53D8\u91CF\u6307\u5B9A\u7684\u59D4\u6258\u5BF9\u8C61\u4E2D\u67E5\u627E\uFF1B</p><p>\u67E5\u627E\u4E0D\u5230\uFF0C\u518D\u4ECE <code>delegate</code> \u53D8\u91CF\u6307\u5B9A\u7684\u59D4\u6258\u5BF9\u8C61\u4E2D\u67E5\u770B\uFF1B</p><p>\u518D\u67E5\u627E\u4E0D\u5230\u5219\u62A5\u9519\uFF0C\u63D0\u793A\u627E\u4E0D\u5230\u6240\u8BBF\u95EE\u7684\u6210\u5458\u5C5E\u6027\u6216\u6210\u5458\u65B9\u6CD5\u3002</p><h5 id="_3-2-3-2-closure-delegate-first" tabindex="-1"><a class="header-anchor" href="#_3-2-3-2-closure-delegate-first" aria-hidden="true">#</a> 3.2.3.2 <code>Closure.DELEGATE_FIRST</code></h5><p>\u95ED\u5305\u6267\u884C\u65F6\uFF0C\u95ED\u5305\u4E2D\u6240\u8BBF\u95EE\u7684\u6210\u5458\u5C5E\u6027\u6216\u6210\u5458\u65B9\u6CD5\u5148\u4ECE <code>delegate</code> \u53D8\u91CF\u6307\u5B9A\u7684\u59D4\u6258\u5BF9\u8C61\u4E2D\u67E5\u627E\uFF1B</p><p>\u67E5\u627E\u4E0D\u5230\uFF0C\u518D\u4ECE <code>owner</code> \u53D8\u91CF\u6307\u5B9A\u7684\u59D4\u6258\u5BF9\u8C61\u4E2D\u67E5\u627E\uFF1B</p><p>\u518D\u67E5\u627E\u4E0D\u5230\u5219\u62A5\u9519\uFF0C\u63D0\u793A\u627E\u4E0D\u5230\u6240\u8BBF\u95EE\u7684\u6210\u5458\u5C5E\u6027\u6216\u6210\u5458\u65B9\u6CD5\u3002</p><h5 id="_3-2-3-3-closure-owner-only" tabindex="-1"><a class="header-anchor" href="#_3-2-3-3-closure-owner-only" aria-hidden="true">#</a> 3.2.3.3 <code>Closure.OWNER_ONLY</code></h5><p>\u95ED\u5305\u6267\u884C\u65F6\uFF0C\u95ED\u5305\u4E2D\u6240\u8BBF\u95EE\u7684\u6210\u5458\u5C5E\u6027\u6216\u6210\u5458\u65B9\u6CD5\u4EC5\u4ECE <code>owner</code> \u53D8\u91CF\u6307\u5B9A\u7684\u59D4\u6258\u5BF9\u8C61\u4E2D\u67E5\u627E\uFF1B</p><p>\u67E5\u627E\u4E0D\u5230\u5219\u62A5\u9519\uFF0C\u63D0\u793A\u627E\u4E0D\u5230\u6240\u8BBF\u95EE\u7684\u6210\u5458\u5C5E\u6027\u6216\u6210\u5458\u65B9\u6CD5\u3002</p><h5 id="_3-2-3-4-closure-delegate-only" tabindex="-1"><a class="header-anchor" href="#_3-2-3-4-closure-delegate-only" aria-hidden="true">#</a> 3.2.3.4 <code>Closure.DELEGATE_ONLY</code></h5><p>\u95ED\u5305\u6267\u884C\u65F6\uFF0C\u95ED\u5305\u4E2D\u6240\u8BBF\u95EE\u7684\u6210\u5458\u5C5E\u6027\u6216\u6210\u5458\u65B9\u6CD5\u4EC5\u4ECE <code>delegate</code> \u53D8\u91CF\u6307\u5B9A\u7684\u59D4\u6258\u5BF9\u8C61\u4E2D\u67E5\u627E\uFF1B</p><p>\u67E5\u627E\u4E0D\u5230\u5219\u62A5\u9519\uFF0C\u63D0\u793A\u627E\u4E0D\u5230\u6240\u8BBF\u95EE\u7684\u6210\u5458\u5C5E\u6027\u6216\u6210\u5458\u65B9\u6CD5\u3002</p><h5 id="_3-2-3-5-closure-to-self-\u4E86\u89E3\u5373\u53EF" tabindex="-1"><a class="header-anchor" href="#_3-2-3-5-closure-to-self-\u4E86\u89E3\u5373\u53EF" aria-hidden="true">#</a> 3.2.3.5 <code>Closure.TO_SELF</code>\uFF08\u4E86\u89E3\u5373\u53EF\uFF09</h5><p>\u95ED\u5305\u6267\u884C\u65F6\uFF0C\u95ED\u5305\u4E2D\u6240\u8BBF\u95EE\u7684\u6210\u5458\u5C5E\u6027\u6216\u6210\u5458\u65B9\u6CD5\u4E0D\u76F4\u63A5\u4ECE <code>owner</code> \u53D8\u91CF\u548C <code>delegate</code> \u53D8\u91CF\u6307\u5B9A\u7684\u59D4\u6258\u5BF9\u8C61\u4E2D\u67E5\u627E\uFF1B</p><p>\u800C\u662F\u4ECE <code>MetaClass</code> \u5BF9\u8C61\u4E2D\u67E5\u627E\u3002</p><h4 id="_3-2-4-\u8BBE\u7F6E\u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-2-4-\u8BBE\u7F6E\u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565\u65B9\u5F0F" aria-hidden="true">#</a> 3.2.4 \u8BBE\u7F6E\u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565\u65B9\u5F0F</h4><p>\u901A\u8FC7\u5F62\u5982 <code>closure.resolveStrategy = Closure.DELEGATE_FIRST</code> \u7684\u65B9\u5F0F\u6765\u8BBE\u7F6E\u95ED\u5305\u7684\u59D4\u6258\u7B56\u7565\u65B9\u5F0F\u3002</p><p><strong>\u6CE8\u610F\uFF1A</strong> \u4ECE\u4E0B\u4E00\u6B21\u8C03\u7528\u95ED\u5305\u5F00\u59CB\u751F\u6548\u3002</p><h4 id="_3-2-5-\u95ED\u5305\u4E2D\u7684\u5C40\u90E8\u53D8\u91CF\u4E0E\u59D4\u6258\u5BF9\u8C61\u7684\u6210\u5458\u53D8\u91CF\u540C\u540D\u65F6\u91C7\u7528\u5C31\u8FD1\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#_3-2-5-\u95ED\u5305\u4E2D\u7684\u5C40\u90E8\u53D8\u91CF\u4E0E\u59D4\u6258\u5BF9\u8C61\u7684\u6210\u5458\u53D8\u91CF\u540C\u540D\u65F6\u91C7\u7528\u5C31\u8FD1\u539F\u5219" aria-hidden="true">#</a> 3.2.5 \u95ED\u5305\u4E2D\u7684\u5C40\u90E8\u53D8\u91CF\u4E0E\u59D4\u6258\u5BF9\u8C61\u7684\u6210\u5458\u53D8\u91CF\u540C\u540D\u65F6\u91C7\u7528\u5C31\u8FD1\u539F\u5219</h4><p><strong>\u6CE8\u610F\uFF1A</strong> \u5F53\u95ED\u5305\u4E2D\u8BBF\u95EE\u7684\u6210\u5458\u5C5E\u6027\u548C\u95ED\u5305\u4E2D\u5B9A\u4E49\u7684\u5C40\u90E8\u53D8\u91CF\u540C\u540D\u65F6\uFF0C\u91C7\u7528\u5C31\u8FD1\u539F\u5219\uFF0C\u5373\u6B64\u65F6\u8BBF\u95EE\u7684\u5E94\u8BE5\u662F\u95ED\u5305\u4E2D\u7684\u5C40\u90E8\u53D8\u91CF\u3002</p><h4 id="_3-2-6-\u4EE3\u7801\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-2-6-\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a> 3.2.6 \u4EE3\u7801\u793A\u4F8B</h4><h5 id="_3-2-6-1-\u4FEE\u6539-delegate-\u5E76\u8BBE\u7F6E\u59D4\u6258\u65B9\u5F0F\u4E3A-delegate-first" tabindex="-1"><a class="header-anchor" href="#_3-2-6-1-\u4FEE\u6539-delegate-\u5E76\u8BBE\u7F6E\u59D4\u6258\u65B9\u5F0F\u4E3A-delegate-first" aria-hidden="true">#</a> 3.2.6.1 \u4FEE\u6539 <code>delegate</code> \u5E76\u8BBE\u7F6E\u59D4\u6258\u65B9\u5F0F\u4E3A <code>DELEGATE_FIRST</code></h5><p><img src="'+x+'" alt="" loading="lazy"></p><h5 id="_3-2-6-2-\u4FEE\u6539-delegate-\u5E76\u8BBE\u7F6E\u59D4\u6258\u65B9\u5F0F\u4E3A-delegate-only" tabindex="-1"><a class="header-anchor" href="#_3-2-6-2-\u4FEE\u6539-delegate-\u5E76\u8BBE\u7F6E\u59D4\u6258\u65B9\u5F0F\u4E3A-delegate-only" aria-hidden="true">#</a> 3.2.6.2 \u4FEE\u6539 <code>delegate</code> \u5E76\u8BBE\u7F6E\u59D4\u6258\u65B9\u5F0F\u4E3A <code>DELEGATE_ONLY</code></h5><p><img src="'+f+'" alt="" loading="lazy"></p>',127);function y(m,C){return k}var N=e(b,[["render",y],["__file","_02_closure.html.vue"]]);export{N as default};