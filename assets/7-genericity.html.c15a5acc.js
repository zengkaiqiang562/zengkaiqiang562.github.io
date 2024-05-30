import{_ as a,e as n}from"./app.2a01fc36.js";var s="/assets/01.cc0c7330.png";const o={},e=n(`<h2 id="_1-\u6CDB\u578B\u7684\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#_1-\u6CDB\u578B\u7684\u58F0\u660E" aria-hidden="true">#</a> 1. \u6CDB\u578B\u7684\u58F0\u660E</h2><h3 id="_1-1-\u5728\u51FD\u6570\u5B9A\u4E49\u4E2D\u58F0\u660E\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5728\u51FD\u6570\u5B9A\u4E49\u4E2D\u58F0\u660E\u6CDB\u578B" aria-hidden="true">#</a> 1.1 \u5728\u51FD\u6570\u5B9A\u4E49\u4E2D\u58F0\u660E\u6CDB\u578B</h3><div class="language-kotlin ext-kt"><pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> <span class="token function">func</span><span class="token punctuation">(</span>p1<span class="token operator">:</span> T<span class="token punctuation">,</span> p2<span class="token operator">:</span> T<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u5176\u4E2D\uFF1A<code>&lt;T&gt;</code> \u8868\u793A\u58F0\u660E\u4E86\u4E00\u4E2A\u6CDB\u578B <code>T</code>\u3002</p><p>\u4E8E\u662F\u5728\u51FD\u6570 <code>func</code> \u7684\u5B9A\u4E49\u4E2D\uFF08\u5982\uFF1A\u5F62\u53C2\u5217\u8868\u4E0A\u3001\u51FD\u6570\u4F53\u4E2D\u3001\u8FD4\u56DE\u503C\u7C7B\u578B\u4E0A\uFF09\u624D\u53EF\u4EE5\u4F7F\u7528\u6CDB\u578B <code>T</code> \u8868\u793A\u4E00\u4E2A\u4E0D\u786E\u5B9A\u7684\u7C7B\u578B\u3002</p></blockquote><p>\u51FD\u6570\u8C03\u7528\u65F6\uFF0C\u6CDB\u578B\u652F\u6301\u81EA\u52A8\u7C7B\u578B\u63A8\u5BFC\uFF08\u5373\u53EF\u4EE5\u6839\u636E\u4F20\u5165\u7684\u5B9E\u53C2\u7C7B\u578B\u63A8\u5BFC\u6CDB\u578B\u7684\u5177\u4F53\u7C7B\u578B\uFF09\uFF1A</p><div class="language-kotlin ext-kt"><pre class="language-kotlin"><code><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// \u6B64\u65F6\u6CDB\u578B T \u8868\u793A Int \u578B\u3002</span>
func<span class="token operator">&lt;</span>Int<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u6B64\u65F6\u65E0\u6CD5\u6839\u636E\u5B9E\u53C2\u8FDB\u884C\u7C7B\u578B\u63A8\u5BFC\uFF0C\u5E94\u8BE5\u5728\u51FD\u6570\u8C03\u7528\u65F6\u624B\u52A8\u6307\u5B9A\u6CDB\u578B\u7684\u5177\u4F53\u7C7B\u578B\u3002</span>
</code></pre></div><h3 id="_1-2-\u5728\u7C7B\u5B9A\u4E49\u4E2D\u58F0\u660E\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5728\u7C7B\u5B9A\u4E49\u4E2D\u58F0\u660E\u6CDB\u578B" aria-hidden="true">#</a> 1.2 \u5728\u7C7B\u5B9A\u4E49\u4E2D\u58F0\u660E\u6CDB\u578B</h3><div class="language-kotlin ext-kt"><pre class="language-kotlin"><code><span class="token keyword">class</span> Foo<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span>
</code></pre></div><blockquote><p>\u5176\u4E2D\uFF1A<code>&lt;T&gt;</code> \u8868\u793A\u58F0\u660E\u4E86\u4E00\u4E2A\u6CDB\u578B <code>T</code>\u3002</p><p>\u4E8E\u662F\u5728\u7C7B\u4E2D\uFF08\u5982\uFF1A\u6210\u5458\u65B9\u6CD5\u5B9A\u4E49\u3001\u5C5E\u6027\u5B9A\u4E49\u3001\u5185\u90E8\u7C7B\u5B9A\u4E49\u3001\u6784\u9020\u5668\u5B9A\u4E49\u4E0A\uFF09\u624D\u53EF\u4EE5\u4F7F\u7528\u6CDB\u578B <code>T</code> \u8868\u793A\u4E00\u4E2A\u4E0D\u786E\u5B9A\u7684\u7C7B\u578B\u3002</p></blockquote><h2 id="_2-\u6CDB\u578B\u7EA6\u675F-where-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_2-\u6CDB\u578B\u7EA6\u675F-where-\u8BED\u53E5" aria-hidden="true">#</a> 2. \u6CDB\u578B\u7EA6\u675F &amp; <code>where</code> \u8BED\u53E5</h2><p>\u6CDB\u578B\u7EA6\u675F\u5C31\u662F\u5728\u6CDB\u578B\u58F0\u660E\u65F6\u4E3A\u6CDB\u578B\u6307\u5B9A\u7EE7\u627F\u5173\u7CFB\u548C\u4F9D\u8D56\u5173\u7CFB\uFF1A</p><div class="language-kotlin ext-kt"><pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token operator">&lt;</span>T<span class="token operator">:</span>Comparable<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token operator">&gt;</span> <span class="token function">func</span><span class="token punctuation">(</span>p1<span class="token operator">:</span> T<span class="token punctuation">,</span> p2<span class="token operator">:</span> T<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u5176\u4E2D\uFF1A\u6CDB\u578B\u58F0\u660E <code>&lt;T:Comparable&lt;T&gt;&gt;</code> \u8868\u793A\u6CDB\u578B <code>T</code> \u9700\u8981\u5B9E\u73B0 <code>Comparable</code> \u63A5\u53E3\uFF0C\u4E14 <code>Comparable</code> \u63A5\u53E3\u4E2D\u7684\u6CDB\u578B\u53C8\u4F9D\u8D56\u8BE5\u6CDB\u578B <code>T</code>\u3002</p></blockquote><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>where</code> \u8BED\u53E5\u6765\u6307\u5B9A\u6CDB\u578B\u7EA6\u675F\uFF08\u4F7F\u7528 <code>where</code> \u8BED\u53E5\u53EF\u4EE5\u65B9\u4FBF\u5730\u4E3A\u4E00\u4E2A\u6CDB\u578B\u6DFB\u52A0\u591A\u4E2A\u7EA6\u675F\uFF0C\u6216\u4E3A\u591A\u4E2A\u6CDB\u578B\u6DFB\u52A0\u7EA6\u675F\uFF09\uFF1A</p><div class="language-kotlin ext-kt"><pre class="language-kotlin"><code><span class="token comment">/*
    \u6307\u5B9A\u6CDB\u578B T \u65E2\u8981\u5B9E\u73B0 Comparable \u63A5\u53E3\uFF0C\u53C8\u662F\u4E00\u4E2A\u51FD\u6570\u7C7B\u578B\u3002
*/</span>
<span class="token keyword">fun</span> <span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> <span class="token function">func</span><span class="token punctuation">(</span>p1<span class="token operator">:</span> T<span class="token punctuation">,</span> p2<span class="token operator">:</span> T<span class="token punctuation">)</span> <span class="token keyword">where</span> T<span class="token operator">:</span>Comparable<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">,</span> T<span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span>Unit <span class="token punctuation">{</span><span class="token operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>

<span class="token comment">/*
    \u58F0\u660E\u4E86\u4E24\u4E2A\u6CDB\u578B\uFF1AT \u548C R\uFF0C\u4E14\uFF1A
    1. \u6307\u5B9A\u6CDB\u578B T \u65E2\u8981\u5B9E\u73B0 Comparable \u63A5\u53E3\uFF0C\u53C8\u662F\u4E00\u4E2A\u51FD\u6570\u7C7B\u578B\uFF1B 
    2. \u6307\u5B9A\u6CDB\u578B R \u662F Number \u7C7B\u578B\u6216\u5176\u5B50\u7C7B\u578B\u3002
*/</span>    
<span class="token keyword">fun</span> <span class="token operator">&lt;</span>T<span class="token punctuation">,</span> R<span class="token operator">&gt;</span> <span class="token function">func</span><span class="token punctuation">(</span>p1<span class="token operator">:</span> T<span class="token punctuation">,</span> p2<span class="token operator">:</span> T<span class="token punctuation">)</span><span class="token operator">:</span> R <span class="token keyword">where</span> T<span class="token operator">:</span>Comparable<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">,</span> T<span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span>R<span class="token punctuation">,</span> R<span class="token operator">:</span> Number <span class="token punctuation">{</span><span class="token operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre></div><h2 id="_3-\u6CDB\u578B\u7684\u578B\u53D8" tabindex="-1"><a class="header-anchor" href="#_3-\u6CDB\u578B\u7684\u578B\u53D8" aria-hidden="true">#</a> 3. \u6CDB\u578B\u7684\u578B\u53D8</h2><h3 id="_3-1-\u7C7B\u548C\u7C7B\u578B\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7C7B\u548C\u7C7B\u578B\u7684\u533A\u522B" aria-hidden="true">#</a> 3.1 \u7C7B\u548C\u7C7B\u578B\u7684\u533A\u522B</h3><p>\u5728 <code>Java</code> \u4E2D\uFF1A</p><ol><li><p>\u5BF9\u4E8E\u975E\u6CDB\u578B\u7C7B <code>Foo</code>\uFF0C\u7C7B\u540D <code>Foo</code> \u5373\u53EF\u4F5C\u4E3A\u7C7B\u578B\u540D <code>Foo</code> \u4F7F\u7528\uFF1B</p></li><li><p>\u5BF9\u4E8E\u6CDB\u578B\u7C7B <code>Foo&lt;T&gt;</code>\uFF0C \u7C7B\u540D <code>Foo&lt;T&gt;</code> \u4E0D\u53EF\u4F5C\u4E3A\u7C7B\u578B\u540D\u4F7F\u7528\u3002\u7C7B\u540D <code>Foo&lt;T&gt;</code> \u5BF9\u5E94\u591A\u4E2A\u7C7B\u578B\u540D\uFF0C\u5982\uFF1A<code>Foo&lt;String&gt;</code>\u3001<code>Foo&lt;Person&gt;</code>\u3001...</p></li></ol><p>\u5728 <code>Kotlin</code> \u4E2D\uFF1A</p><ol><li><p>\u5BF9\u4E8E\u975E\u6CDB\u578B\u7C7B <code>Foo</code>\uFF0C\u7C7B\u540D <code>Foo</code> \u5BF9\u5E94\u4E0D\u53EF\u7A7A\u7C7B\u578B <code>Foo</code>\uFF0C\u800C\u53EF\u7A7A\u7C7B\u578B\u4E3A <code>Foo?</code></p></li><li><p>\u5BF9\u4E8E\u6CDB\u578B\u7C7B <code>Foo&lt;T&gt;</code>\uFF0C \u540C <code>Java</code> \u4E00\u6837\uFF0C\u4E0D\u53EF\u4F5C\u4E3A\u7C7B\u578B\u540D\u4F7F\u7528\uFF0C\u800C\u662F\u5BF9\u5E94\u591A\u4E2A\u7C7B\u578B\u3002</p></li></ol><h3 id="_3-2-\u4EC0\u4E48\u662F\u6CDB\u578B\u7684\u578B\u53D8" tabindex="-1"><a class="header-anchor" href="#_3-2-\u4EC0\u4E48\u662F\u6CDB\u578B\u7684\u578B\u53D8" aria-hidden="true">#</a> 3.2 \u4EC0\u4E48\u662F\u6CDB\u578B\u7684\u578B\u53D8</h3><p>\u5BF9\u4E8E\u6CDB\u578B\u7C7B <code>Foo&lt;T&gt;</code>\uFF0C\u5373\u4F7F\u5F53\u6CDB\u578B\u53C2\u6570 <code>T</code> \u53D6\u5177\u6709\u7EE7\u627F\u5173\u7CFB\u7684\u5177\u4F53\u7C7B\u578B\u65F6\uFF0C\u5982\uFF1A<code>Person</code> \u548C <code>Son</code>\uFF08\u5176\u4E2D <code>Son extends Person</code>\uFF09\u3002\u5BF9\u5E94\u7684\u6CDB\u578B\u7C7B\u578B <code>Foo&lt;Person&gt;</code> \u548C <code>Foo&lt;Son&gt;</code> \u4E5F\u4E0D\u5177\u5907\u7EE7\u627F\u5173\u7CFB\u3002</p><p>\u6240\u8C13\u6CDB\u578B\u7684\u578B\u53D8\u5C31\u662F\uFF1A\u5F53\u6CDB\u578B\u53C2\u6570 <code>T</code> \u53D6\u5177\u6709\u7EE7\u627F\u5173\u7CFB\u7684\u5177\u4F53\u7C7B\u578B\u65F6\uFF0C\u4F7F\u5F97\u5BF9\u5E94\u7684\u6CDB\u578B\u7C7B\u578B\u4E5F\u5177\u5907\u67D0\u79CD\u7EE7\u627F\u5173\u7CFB\u3002</p><blockquote><p>\u6CDB\u578B\u7684\u578B\u53D8\u53EF\u4EE5\u5206\u4E3A\u58F0\u660E\u5904\u578B\u53D8\u548C\u4F7F\u7528\u5904\u578B\u53D8\u3002</p></blockquote><h3 id="_3-3-\u578B\u53D8\u7684\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-3-\u578B\u53D8\u7684\u5206\u7C7B" aria-hidden="true">#</a> 3.3 \u578B\u53D8\u7684\u5206\u7C7B</h3><h4 id="_3-3-1-\u58F0\u660E\u5904\u578B\u53D8" tabindex="-1"><a class="header-anchor" href="#_3-3-1-\u58F0\u660E\u5904\u578B\u53D8" aria-hidden="true">#</a> 3.3.1 \u58F0\u660E\u5904\u578B\u53D8</h4><p>\u58F0\u660E\u5904\u578B\u53D8\u53C8\u53EF\u5206\u4E3A\u4E09\u79CD\uFF1A\u534F\u53D8\u3001\u9006\u53D8\u3001\u4E0D\u53D8\u3002</p><h5 id="_3-3-1-1-\u534F\u53D8-out" tabindex="-1"><a class="header-anchor" href="#_3-3-1-1-\u534F\u53D8-out" aria-hidden="true">#</a> 3.3.1.1 \u534F\u53D8\uFF08<code>out</code>\uFF09</h5><p>\u4F7F\u7528\u5173\u952E\u5B57 <code>out</code> \u6807\u8BB0\uFF0C\u5982 <code>Foo&lt;out T&gt;</code>\u3002</p><h6 id="_3-3-1-1-1-\u6CDB\u578B\u7C7B\u578B\u4E0E\u6CDB\u578B\u53C2\u6570\u5177\u6709\u76F8\u540C\u7684\u7EE7\u627F\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_3-3-1-1-1-\u6CDB\u578B\u7C7B\u578B\u4E0E\u6CDB\u578B\u53C2\u6570\u5177\u6709\u76F8\u540C\u7684\u7EE7\u627F\u5173\u7CFB" aria-hidden="true">#</a> 3.3.1.1.1 \u6CDB\u578B\u7C7B\u578B\u4E0E\u6CDB\u578B\u53C2\u6570\u5177\u6709\u76F8\u540C\u7684\u7EE7\u627F\u5173\u7CFB</h6><p>\u5BF9\u7EE7\u627F\u5173\u7CFB\u7684\u5F71\u54CD\uFF1A\u5F53\u6CDB\u578B\u53C2\u6570 <code>T</code> \u53D6\u5177\u6709\u7EE7\u627F\u5173\u7CFB\u7684\u5177\u4F53\u7C7B\u578B\u65F6\uFF0C\u5BF9\u5E94\u7684\u6CDB\u578B\u7C7B\u578B\u4E5F\u5177\u6709\u76F8\u540C\u7684\u7EE7\u627F\u5173\u7CFB\u3002\u5373\uFF1A</p><div class="language-kotlin ext-kt"><pre class="language-kotlin"><code>\u82E5 T \u53D6 Son \u6216 Person\uFF08\u5176\u4E2D Son extends Person\uFF09
\u5219 Foo<span class="token operator">&lt;</span>Son<span class="token operator">&gt;</span> extends Foo<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span>
</code></pre></div><h6 id="_3-3-1-1-2-\u6CDB\u578B\u4E0D\u53EF\u4F5C\u4E3A\u65B9\u6CD5\u5F62\u53C2\u4F7F\u7528-unsafevariance-\u89E3\u9664\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#_3-3-1-1-2-\u6CDB\u578B\u4E0D\u53EF\u4F5C\u4E3A\u65B9\u6CD5\u5F62\u53C2\u4F7F\u7528-unsafevariance-\u89E3\u9664\u9650\u5236" aria-hidden="true">#</a> 3.3.1.1.2 \u6CDB\u578B\u4E0D\u53EF\u4F5C\u4E3A\u65B9\u6CD5\u5F62\u53C2\u4F7F\u7528 &amp; <code>@UnsafeVariance</code> \u89E3\u9664\u9650\u5236</h6><p>\u9650\u5236\uFF1A\u5BF9\u4E8E\u4F7F\u7528\u4E86\u534F\u53D8\u7684\u6CDB\u578B\u7C7B <code>Foo&lt;out T&gt;</code>\uFF0C\u8981\u6C42\u6CDB\u578B\u7C7B\u7684\u6210\u5458\u65B9\u6CD5\uFF08\u5305\u62EC\u5C5E\u6027\u7684 <code>setter</code>/<code>getter</code> \u65B9\u6CD5\uFF09\u7684\u5F62\u53C2\u7C7B\u578B\u4E0D\u53EF\u4EE5\u4F7F\u7528\u6CDB\u578B <code>T</code>\uFF0C\u4E5F\u4E0D\u53EF\u4EE5\u4F7F\u7528\u4F9D\u8D56\u4E86\u6CDB\u578B <code>T</code> \u7684\u5176\u4ED6\u6CDB\u578B\u7C7B\u578B\uFF08\u5982 <code>List&lt;T&gt;</code>\uFF09\u3002</p><blockquote><p>\u53EF\u4EE5\u5728\u4F7F\u7528\u6CDB\u578B <code>T</code> \u65F6\uFF0C\u5728\u6CDB\u578B <code>T</code> \u524D\u9762\u76F4\u63A5\u6DFB\u52A0\u6CE8\u89E3 <code>@UnsafeVariance</code> \u89E3\u9664\u8FD9\u4E00\u9650\u5236\u3002</p></blockquote><h5 id="_3-3-1-2-\u9006\u53D8-in" tabindex="-1"><a class="header-anchor" href="#_3-3-1-2-\u9006\u53D8-in" aria-hidden="true">#</a> 3.3.1.2 \u9006\u53D8\uFF08<code>in</code>\uFF09</h5><p>\u4F7F\u7528\u5173\u952E\u5B57 <code>in</code> \u6807\u8BB0\uFF0C\u5982 <code>Foo&lt;in T&gt;</code>\u3002</p><h6 id="_3-3-1-2-1-\u6CDB\u578B\u7C7B\u578B\u4E0E\u6CDB\u578B\u53C2\u6570\u5177\u6709\u76F8\u53CD\u7684\u7EE7\u627F\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_3-3-1-2-1-\u6CDB\u578B\u7C7B\u578B\u4E0E\u6CDB\u578B\u53C2\u6570\u5177\u6709\u76F8\u53CD\u7684\u7EE7\u627F\u5173\u7CFB" aria-hidden="true">#</a> 3.3.1.2.1 \u6CDB\u578B\u7C7B\u578B\u4E0E\u6CDB\u578B\u53C2\u6570\u5177\u6709\u76F8\u53CD\u7684\u7EE7\u627F\u5173\u7CFB</h6><p>\u5BF9\u7EE7\u627F\u5173\u7CFB\u7684\u5F71\u54CD\uFF1A\u5F53\u6CDB\u578B\u53C2\u6570 <code>T</code> \u53D6\u5177\u6709\u7EE7\u627F\u5173\u7CFB\u7684\u5177\u4F53\u7C7B\u578B\u65F6\uFF0C\u5BF9\u5E94\u7684\u6CDB\u578B\u7C7B\u578B\u5219\u5177\u6709\u76F8\u53CD\u7684\u7EE7\u627F\u5173\u7CFB\u3002\u5373\uFF1A</p><div class="language-kotlin ext-kt"><pre class="language-kotlin"><code>\u82E5 T \u53D6 Son \u6216 Person\uFF08\u5176\u4E2D Son extends Person\uFF09
\u5219 Foo<span class="token operator">&lt;</span>Son<span class="token operator">&gt;</span> <span class="token keyword">super</span> Foo<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span>
</code></pre></div><h6 id="_3-3-1-2-2-\u6CDB\u578B\u4E0D\u53EF\u4F5C\u4E3A\u65B9\u6CD5\u8FD4\u56DE\u503C\u4F7F\u7528-unsafevariance-\u89E3\u9664\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#_3-3-1-2-2-\u6CDB\u578B\u4E0D\u53EF\u4F5C\u4E3A\u65B9\u6CD5\u8FD4\u56DE\u503C\u4F7F\u7528-unsafevariance-\u89E3\u9664\u9650\u5236" aria-hidden="true">#</a> 3.3.1.2.2 \u6CDB\u578B\u4E0D\u53EF\u4F5C\u4E3A\u65B9\u6CD5\u8FD4\u56DE\u503C\u4F7F\u7528 &amp; <code>@UnsafeVariance</code> \u89E3\u9664\u9650\u5236</h6><p>\u9650\u5236\uFF1A\u5BF9\u4E8E\u4F7F\u7528\u4E86\u9006\u53D8\u7684\u6CDB\u578B\u7C7B <code>Foo&lt;in T&gt;</code>\uFF0C\u8981\u6C42\u6CDB\u578B\u7C7B\u7684\u6210\u5458\u65B9\u6CD5\uFF08\u5305\u62EC\u5C5E\u6027\u7684 <code>setter</code>/<code>getter</code> \u65B9\u6CD5\uFF09\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u4E0D\u53EF\u4EE5\u4F7F\u7528\u6CDB\u578B <code>T</code>\uFF0C\u4E5F\u4E0D\u53EF\u4EE5\u4F7F\u7528\u4F9D\u8D56\u4E86\u6CDB\u578B <code>T</code> \u7684\u5176\u4ED6\u6CDB\u578B\u7C7B\u578B\uFF08\u5982 <code>List&lt;T&gt;</code>\uFF09\u3002</p><blockquote><p>\u53EF\u4EE5\u5728\u4F7F\u7528\u6CDB\u578B <code>T</code> \u65F6\uFF0C\u5728\u6CDB\u578B <code>T</code> \u524D\u9762\u76F4\u63A5\u6DFB\u52A0\u6CE8\u89E3 <code>@UnsafeVariance</code> \u89E3\u9664\u8FD9\u4E00\u9650\u5236\u3002</p></blockquote><h5 id="_3-3-1-3-\u4E0D\u53D8-\u9ED8\u8BA4" tabindex="-1"><a class="header-anchor" href="#_3-3-1-3-\u4E0D\u53D8-\u9ED8\u8BA4" aria-hidden="true">#</a> 3.3.1.3 \u4E0D\u53D8\uFF08\u9ED8\u8BA4\uFF09</h5><p>\u9ED8\u8BA4\u5C31\u662F\u4E0D\u53D8\uFF0C\u5373 <code>Foo&lt;T&gt;</code>\u3002</p><h6 id="_3-3-1-3-1-\u6CDB\u578B\u7C7B\u578B\u4E0E\u6CDB\u578B\u53C2\u6570\u4E0D\u5B58\u5728\u7EE7\u627F\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_3-3-1-3-1-\u6CDB\u578B\u7C7B\u578B\u4E0E\u6CDB\u578B\u53C2\u6570\u4E0D\u5B58\u5728\u7EE7\u627F\u5173\u7CFB" aria-hidden="true">#</a> 3.3.1.3.1 \u6CDB\u578B\u7C7B\u578B\u4E0E\u6CDB\u578B\u53C2\u6570\u4E0D\u5B58\u5728\u7EE7\u627F\u5173\u7CFB</h6><p>\u5BF9\u7EE7\u627F\u5173\u7CFB\u7684\u5F71\u54CD\uFF1A\u5373\u4F7F\u6CDB\u578B\u53C2\u6570 <code>T</code> \u53D6\u5177\u6709\u7EE7\u627F\u5173\u7CFB\u7684\u5177\u4F53\u7C7B\u578B\uFF0C\u5BF9\u5E94\u7684\u6CDB\u578B\u7C7B\u578B\u4E5F\u4E0D\u4F1A\u5177\u6709\u4EFB\u4F55\u7684\u7EE7\u627F\u5173\u7CFB\u3002</p><h6 id="_3-3-1-3-2-\u6CDB\u578B\u65E2\u53EF\u4F5C\u4E3A\u65B9\u6CD5\u8FD4\u56DE\u503C\u53C8\u53EF\u4F5C\u4E3A\u65B9\u6CD5\u5F62\u53C2" tabindex="-1"><a class="header-anchor" href="#_3-3-1-3-2-\u6CDB\u578B\u65E2\u53EF\u4F5C\u4E3A\u65B9\u6CD5\u8FD4\u56DE\u503C\u53C8\u53EF\u4F5C\u4E3A\u65B9\u6CD5\u5F62\u53C2" aria-hidden="true">#</a> 3.3.1.3.2 \u6CDB\u578B\u65E2\u53EF\u4F5C\u4E3A\u65B9\u6CD5\u8FD4\u56DE\u503C\u53C8\u53EF\u4F5C\u4E3A\u65B9\u6CD5\u5F62\u53C2</h6><h4 id="_3-3-2-\u4F7F\u7528\u5904\u578B\u53D8-\u53C8\u79F0\u7C7B\u578B\u6295\u5F71" tabindex="-1"><a class="header-anchor" href="#_3-3-2-\u4F7F\u7528\u5904\u578B\u53D8-\u53C8\u79F0\u7C7B\u578B\u6295\u5F71" aria-hidden="true">#</a> 3.3.2 \u4F7F\u7528\u5904\u578B\u53D8\uFF08\u53C8\u79F0\u7C7B\u578B\u6295\u5F71\uFF09</h4><p>\u4F7F\u7528\u5904\u578B\u53D8\u53C8\u79F0\u4E3A\u7C7B\u578B\u6295\u5F71\u3002\u6240\u8C13\u7C7B\u578B\u6295\u5F71\u5C31\u662F <strong>\u7C7B\u578B\u53D7\u5230\u9650\u5236</strong> \uFF0C\u5982\uFF1A</p><div class="language-kotlin ext-kt"><pre class="language-kotlin"><code><span class="token comment">/*
    \u5176\u4E2D Array&lt;out Person&gt; \u5C31\u662F\u7C7B\u578B\u6295\u5F71\uFF08\u5411\u4E0B\u6295\u5F71\uFF09\uFF0C
    \u5373\u9650\u5236 Array \u7684\u6CDB\u578B\u5B9E\u53C2\u7C7B\u578B\u53EA\u80FD\u662F Person \u53CA\u5176\u5B50\u7C7B\u7C7B\u578B
*/</span>
<span class="token keyword">fun</span> <span class="token function">copy</span><span class="token punctuation">(</span>from<span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token keyword">out</span> Person<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token keyword">to</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre></div><div class="language-kotlin ext-kt"><pre class="language-kotlin"><code><span class="token comment">/*
    \u5176\u4E2D Array&lt;in String&gt; \u5C31\u662F\u7C7B\u578B\u6295\u5F71\uFF08\u5411\u4E0A\u6295\u5F71\uFF09\uFF0C
    \u5373\u9650\u5236 Array \u7684\u6CDB\u578B\u5B9E\u53C2\u7C7B\u578B\u53EA\u80FD\u662F String \u53CA\u5176\u7236\u7C7B\u7C7B\u578B
*/</span>
<span class="token keyword">fun</span> <span class="token function">fill</span><span class="token punctuation">(</span>dest<span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token keyword">in</span> String<span class="token operator">&gt;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre></div><h2 id="_4-\u661F\u6295\u5F71-foo-\u4E0D\u786E\u5B9A\u6CDB\u578B\u5B9E\u53C2-\u4F46\u4ECD\u60F3\u5B89\u5168\u5730\u4F7F\u7528\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#_4-\u661F\u6295\u5F71-foo-\u4E0D\u786E\u5B9A\u6CDB\u578B\u5B9E\u53C2-\u4F46\u4ECD\u60F3\u5B89\u5168\u5730\u4F7F\u7528\u6CDB\u578B" aria-hidden="true">#</a> 4. \u661F\u6295\u5F71\uFF08<code>Foo&lt;*&gt;</code>\uFF09\uFF1A\u4E0D\u786E\u5B9A\u6CDB\u578B\u5B9E\u53C2\uFF0C\u4F46\u4ECD\u60F3\u5B89\u5168\u5730\u4F7F\u7528\u6CDB\u578B</h2><p>\u661F\u6295\u5F71\u5C31\u662F\u4F7F\u7528\u661F\u53F7 &quot;<code>*</code>&quot; \u4EE3\u66FF\u6CDB\u578B\u53C2\u6570\u7684\u5177\u4F53\u5B9E\u53C2\u3002</p><p>\u8868\u793A\u867D\u7136\u4E0D\u77E5\u9053\u6CDB\u578B\u7C7B\u578B\u4F7F\u7528\u7684\u6CDB\u578B\u5B9E\u53C2\u662F\u4EC0\u4E48\uFF0C\u4F46\u4ECD\u7136\u5E0C\u671B\u4EE5\u5B89\u5168\u7684\u65B9\u5F0F\u4F7F\u7528\u8FD9\u4E2A\u6CDB\u578B\u7C7B\u578B\u3002</p><p><img src="`+s+`" alt="" loading="lazy"></p><h2 id="_5-\u7C7B\u578B\u64E6\u9664-\u7F16\u8BD1\u540E\u7684\u5B57\u8282\u7801\u6587\u4EF6\u4E2D\u4E0D\u5B58\u5728\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#_5-\u7C7B\u578B\u64E6\u9664-\u7F16\u8BD1\u540E\u7684\u5B57\u8282\u7801\u6587\u4EF6\u4E2D\u4E0D\u5B58\u5728\u6CDB\u578B" aria-hidden="true">#</a> 5. \u7C7B\u578B\u64E6\u9664\uFF1A\u7F16\u8BD1\u540E\u7684\u5B57\u8282\u7801\u6587\u4EF6\u4E2D\u4E0D\u5B58\u5728\u6CDB\u578B</h2><p><code>Java</code> \u548C <code>Kotlin</code> \u7684\u6CDB\u578B\u90FD\u662F <strong>\u4F2A\u6CDB\u578B</strong>\u3002\u5373\uFF1A\u6CDB\u578B\u58F0\u660E\u5728\u7F16\u8BD1\u540E\u5C31\u4F1A\u88AB\u64E6\u9664\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u7F16\u8BD1\u540E\u7684\u5B57\u8282\u7801\u6587\u4EF6\u4E2D\u662F\u4E0D\u5B58\u5728\u6CDB\u578B\u7684\u3002</p><blockquote><p><code>c++</code>\u3001<code>c#</code> \u4E2D\u7684\u6CDB\u578B\u5219\u662F\u771F\u6CDB\u578B\uFF0C\u4E0D\u5B58\u5728\u7C7B\u578B\u64E6\u9664\u7684\u8BF4\u6CD5\u3002</p></blockquote><h2 id="_6-\u5185\u8054\u7279\u5316-reified-\u907F\u514D\u56E0\u7C7B\u578B\u64E6\u9664\u5BFC\u81F4\u6CDB\u578B\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u65E0\u6CD5\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_6-\u5185\u8054\u7279\u5316-reified-\u907F\u514D\u56E0\u7C7B\u578B\u64E6\u9664\u5BFC\u81F4\u6CDB\u578B\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u65E0\u6CD5\u4F7F\u7528" aria-hidden="true">#</a> 6. \u5185\u8054\u7279\u5316\uFF08<code>reified</code>\uFF09\uFF1A\u907F\u514D\u56E0\u7C7B\u578B\u64E6\u9664\u5BFC\u81F4\u6CDB\u578B\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u65E0\u6CD5\u4F7F\u7528</h2><p>\u4E3A\u4E86\u907F\u514D\u56E0\u4E3A\u7C7B\u578B\u64E6\u9664\u5BFC\u81F4\u7684\u6CDB\u578B\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u65E0\u6CD5\u4F7F\u7528\u7684\u95EE\u9898\uFF0C\u5728\u5185\u8054\u51FD\u6570\u4E2D\uFF0C\u53EF\u4EE5\u5728\u58F0\u660E\u6CDB\u578B\u65F6\u4F7F\u7528\u5173\u952E\u5B57 <code>reified</code> \u5BF9\u6CDB\u578B\u8FDB\u884C\u5185\u8054\u7279\u5316\uFF0C\u5982\uFF1A</p><div class="language-kotlin ext-kt"><pre class="language-kotlin"><code><span class="token keyword">inline</span> <span class="token keyword">fun</span> <span class="token operator">&lt;</span><span class="token keyword">reified</span> T<span class="token operator">&gt;</span> <span class="token function">parseJson</span><span class="token punctuation">(</span>json<span class="token operator">:</span> String<span class="token punctuation">)</span><span class="token operator">:</span> T <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fromJson</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> T<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>java<span class="token punctuation">)</span> <span class="token comment">// T::class.java \u5982\u679C\u4E0D\u8FDB\u884C\u5185\u8054\u7279\u5316\u5219\u65E0\u6CD5\u4F7F\u7528</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_7-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#_7-\u53C2\u8003" aria-hidden="true">#</a> 7. \u53C2\u8003</h2><p><code>http://www.kotlincn.net/docs/kotlin-docs.pdf</code></p><p><code>https://www.jianshu.com/p/1715f0483768</code></p>`,67);function t(p,c){return e}var d=a(o,[["render",t],["__file","7-genericity.html.vue"]]);export{d as default};