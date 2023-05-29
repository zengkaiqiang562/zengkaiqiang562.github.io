import{_ as p,o,c,a as n,b as t,F as l,d as a,e,r as u}from"./app.625aa393.js";const r={},i=n("p",null,[n("strong",null,"Java 10"),a(" \u53D1\u5E03\u4E8E 2018 \u5E74 3 \u6708 20 \u65E5\uFF0C\u6700\u77E5\u540D\u7684\u7279\u6027\u5E94\u8BE5\u662F "),n("code",null,"var"),a(" \u5173\u952E\u5B57\uFF08\u5C40\u90E8\u53D8\u91CF\u7C7B\u578B\u63A8\u65AD\uFF09\u7684\u5F15\u5165\u4E86\uFF0C\u5176\u4ED6\u8FD8\u6709\u5783\u573E\u6536\u96C6\u5668\u6539\u5584\u3001GC \u6539\u8FDB\u3001\u6027\u80FD\u63D0\u5347\u3001\u7EBF\u7A0B\u7BA1\u63A7\u7B49\u4E00\u6279\u65B0\u7279\u6027\u3002")],-1),k=n("p",null,[n("strong",null,"\u6982\u89C8\uFF08\u7CBE\u9009\u4E86\u4E00\u90E8\u5206\uFF09"),a(" \uFF1A")],-1),d={href:"https://openjdk.java.net/jeps/286",target:"_blank",rel:"noopener noreferrer"},h=a("JEP 286\uFF1A\u5C40\u90E8\u53D8\u91CF\u7C7B\u578B\u63A8\u65AD"),v={href:"https://openjdk.java.net/jeps/304",target:"_blank",rel:"noopener noreferrer"},m=a("JEP 304\uFF1A\u5783\u573E\u56DE\u6536\u5668\u63A5\u53E3"),b={href:"https://openjdk.java.net/jeps/307",target:"_blank",rel:"noopener noreferrer"},_=a("JEP 307\uFF1AG1 \u5E76\u884C Full GC"),g={href:"https://openjdk.java.net/jeps/310",target:"_blank",rel:"noopener noreferrer"},f=a("JEP 310\uFF1A\u5E94\u7528\u7A0B\u5E8F\u7C7B\u6570\u636E\u5171\u4EAB(\u6269\u5C55 CDS \u529F\u80FD)"),j={href:"https://openjdk.java.net/jeps/317",target:"_blank",rel:"noopener noreferrer"},J=a("JEP 317\uFF1A\u5B9E\u9A8C\u6027\u7684\u57FA\u4E8E Java \u7684 JIT \u7F16\u8BD1\u5668"),w=e(`<h2 id="\u5C40\u90E8\u53D8\u91CF\u7C7B\u578B\u63A8\u65AD-var" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u53D8\u91CF\u7C7B\u578B\u63A8\u65AD-var" aria-hidden="true">#</a> \u5C40\u90E8\u53D8\u91CF\u7C7B\u578B\u63A8\u65AD(var)</h2><p>\u7531\u4E8E\u592A\u591A Java \u5F00\u53D1\u8005\u5E0C\u671B Java \u4E2D\u5F15\u5165\u5C40\u90E8\u53D8\u91CF\u63A8\u65AD\uFF0C\u4E8E\u662F Java 10 \u7684\u65F6\u5019\u5B83\u6765\u4E86\uFF0C\u4E5F\u7B97\u662F\u4F17\u671B\u6240\u5F52\u4E86\uFF01</p><p>Java 10 \u63D0\u4F9B\u4E86 <code>var</code> \u5173\u952E\u5B57\u58F0\u660E\u5C40\u90E8\u53D8\u91CF\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> codefx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;https://mp.weixin.qq.com/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;src/test/java/Java9FeaturesTest.java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> n <span class="token operator">:</span> list<span class="token punctuation">)</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>n<span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>var \u5173\u952E\u5B57\u53EA\u80FD\u7528\u4E8E\u5E26\u6709\u6784\u9020\u5668\u7684\u5C40\u90E8\u53D8\u91CF\u548C for \u5FAA\u73AF\u4E2D\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">var</span> count<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//\u274C\u7F16\u8BD1\u4E0D\u901A\u8FC7\uFF0C\u4E0D\u80FD\u58F0\u660E\u4E3A null</span>
<span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u274C\u7F16\u8BD1\u4E0D\u901A\u8FC7,\u4E0D\u80FD\u58F0\u660E\u4E3A Lambda\u8868\u8FBE\u5F0F</span>
<span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//\u274C\u7F16\u8BD1\u4E0D\u901A\u8FC7,\u4E0D\u80FD\u58F0\u660E\u6570\u7EC4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>var \u5E76\u4E0D\u4F1A\u6539\u53D8 Java \u662F\u4E00\u95E8\u9759\u6001\u7C7B\u578B\u8BED\u8A00\u7684\u4E8B\u5B9E\uFF0C\u7F16\u8BD1\u5668\u8D1F\u8D23\u63A8\u65AD\u51FA\u7C7B\u578B\u3002</p><p>\u53E6\u5916\uFF0CScala \u548C Kotlin \u4E2D\u5DF2\u7ECF\u6709\u4E86 <code>val</code> \u5173\u952E\u5B57 ( <code>final var</code> \u7EC4\u5408\u5173\u952E\u5B57)\u3002</p>`,8),C=a("\u76F8\u5173\u9605\u8BFB\uFF1A"),y={href:"https://zhuanlan.zhihu.com/p/34911982",target:"_blank",rel:"noopener noreferrer"},x=a("\u300AJava 10 \u65B0\u7279\u6027\u4E4B\u5C40\u90E8\u53D8\u91CF\u7C7B\u578B\u63A8\u65AD\u300B"),S=a("\u3002"),D=e(`<h2 id="\u5783\u573E\u56DE\u6536\u5668\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5783\u573E\u56DE\u6536\u5668\u63A5\u53E3" aria-hidden="true">#</a> \u5783\u573E\u56DE\u6536\u5668\u63A5\u53E3</h2><p>\u5728\u65E9\u671F\u7684 JDK \u7ED3\u6784\u4E2D\uFF0C\u7EC4\u6210\u5783\u573E\u6536\u96C6\u5668 (GC) \u5B9E\u73B0\u7684\u7EC4\u4EF6\u5206\u6563\u5728\u4EE3\u7801\u5E93\u7684\u5404\u4E2A\u90E8\u5206\u3002 Java 10 \u901A\u8FC7\u5F15\u5165\u4E00\u5957\u7EAF\u51C0\u7684\u5783\u573E\u6536\u96C6\u5668\u63A5\u53E3\u6765\u5C06\u4E0D\u540C\u5783\u573E\u6536\u96C6\u5668\u7684\u6E90\u4EE3\u7801\u5206\u9694\u5F00\u3002</p><h2 id="g1-\u5E76\u884C-full-gc" tabindex="-1"><a class="header-anchor" href="#g1-\u5E76\u884C-full-gc" aria-hidden="true">#</a> G1 \u5E76\u884C Full GC</h2><p>\u4ECE Java9 \u5F00\u59CB G1 \u5C31\u4E86\u9ED8\u8BA4\u7684\u5783\u573E\u56DE\u6536\u5668\uFF0CG1 \u662F\u4EE5\u4E00\u79CD\u4F4E\u5EF6\u65F6\u7684\u5783\u573E\u56DE\u6536\u5668\u6765\u8BBE\u8BA1\u7684\uFF0C\u65E8\u5728\u907F\u514D\u8FDB\u884C Full GC,\u4F46\u662F Java9 \u7684 G1 \u7684 FullGC \u4F9D\u7136\u662F\u4F7F\u7528\u5355\u7EBF\u7A0B\u53BB\u5B8C\u6210\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5,\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5783\u573E\u56DE\u6536\u671F\u5728\u65E0\u6CD5\u56DE\u6536\u5185\u5B58\u7684\u65F6\u5019\u89E6\u53D1 Full GC\u3002</p><p>\u4E3A\u4E86\u6700\u5927\u9650\u5EA6\u5730\u51CF\u5C11 Full GC \u9020\u6210\u7684\u5E94\u7528\u505C\u987F\u7684\u5F71\u54CD\uFF0C\u4ECE Java10 \u5F00\u59CB\uFF0CG1 \u7684 FullGC \u6539\u4E3A\u5E76\u884C\u7684\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\uFF0C\u540C\u65F6\u4F1A\u4F7F\u7528\u4E0E\u5E74\u8F7B\u4EE3\u56DE\u6536\u548C\u6DF7\u5408\u56DE\u6536\u76F8\u540C\u7684\u5E76\u884C\u5DE5\u4F5C\u7EBF\u7A0B\u6570\u91CF\uFF0C\u4ECE\u800C\u51CF\u5C11\u4E86 Full GC \u7684\u53D1\u751F\uFF0C\u4EE5\u5E26\u6765\u66F4\u597D\u7684\u6027\u80FD\u63D0\u5347\u3001\u66F4\u5927\u7684\u541E\u5410\u91CF\u3002</p><h2 id="\u96C6\u5408\u589E\u5F3A" tabindex="-1"><a class="header-anchor" href="#\u96C6\u5408\u589E\u5F3A" aria-hidden="true">#</a> \u96C6\u5408\u589E\u5F3A</h2><p><code>List</code>\uFF0C<code>Set</code>\uFF0C<code>Map</code> \u63D0\u4F9B\u4E86\u9759\u6001\u65B9\u6CD5<code>copyOf()</code>\u8FD4\u56DE\u5165\u53C2\u96C6\u5408\u7684\u4E00\u4E2A\u4E0D\u53EF\u53D8\u62F7\u8D1D\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">copyOf</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> coll<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">ImmutableCollections</span><span class="token punctuation">.</span><span class="token function">listCopy</span><span class="token punctuation">(</span>coll<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F7F\u7528 <code>copyOf()</code> \u521B\u5EFA\u7684\u96C6\u5408\u4E3A\u4E0D\u53EF\u53D8\u96C6\u5408\uFF0C\u4E0D\u80FD\u8FDB\u884C\u6DFB\u52A0\u3001\u5220\u9664\u3001\u66FF\u6362\u3001 \u6392\u5E8F\u7B49\u64CD\u4F5C\uFF0C\u4E0D\u7136\u4F1A\u62A5 <code>java.lang.UnsupportedOperationException</code> \u5F02\u5E38\u3002 IDEA \u4E5F\u4F1A\u6709\u76F8\u5E94\u7684\u63D0\u793A\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/image-20210816154125579.png" alt="" loading="lazy"></p><p>\u5E76\u4E14\uFF0C<code>java.util.stream.Collectors</code> \u4E2D\u65B0\u589E\u4E86\u9759\u6001\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5C06\u6D41\u4E2D\u7684\u5143\u7D20\u6536\u96C6\u4E3A\u4E0D\u53EF\u53D8\u7684\u96C6\u5408\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toUnmodifiableList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toUnmodifiableSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="optional-\u589E\u5F3A" tabindex="-1"><a class="header-anchor" href="#optional-\u589E\u5F3A" aria-hidden="true">#</a> Optional \u589E\u5F3A</h2><p><code>Optional</code> \u65B0\u589E\u4E86<code>orElseThrow()</code>\u65B9\u6CD5\u6765\u5728\u6CA1\u6709\u503C\u65F6\u629B\u51FA\u6307\u5B9A\u7684\u5F02\u5E38\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">getIfPresent</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">orElseThrow</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">PrestoException</span><span class="token punctuation">(</span><span class="token constant">NOT_FOUND</span><span class="token punctuation">,</span> <span class="token string">&quot;Missing entry found for key: &quot;</span> <span class="token operator">+</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5E94\u7528\u7A0B\u5E8F\u7C7B\u6570\u636E\u5171\u4EAB-\u6269\u5C55-cds-\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u7A0B\u5E8F\u7C7B\u6570\u636E\u5171\u4EAB-\u6269\u5C55-cds-\u529F\u80FD" aria-hidden="true">#</a> \u5E94\u7528\u7A0B\u5E8F\u7C7B\u6570\u636E\u5171\u4EAB(\u6269\u5C55 CDS \u529F\u80FD)</h2><p>\u5728 Java 5 \u4E2D\u5C31\u5DF2\u7ECF\u5F15\u5165\u4E86\u7C7B\u6570\u636E\u5171\u4EAB\u673A\u5236 (Class Data Sharing\uFF0C\u7B80\u79F0 CDS)\uFF0C\u5141\u8BB8\u5C06\u4E00\u7EC4\u7C7B\u9884\u5904\u7406\u4E3A\u5171\u4EAB\u5F52\u6863\u6587\u4EF6\uFF0C\u4EE5\u4FBF\u5728\u8FD0\u884C\u65F6\u80FD\u591F\u8FDB\u884C\u5185\u5B58\u6620\u5C04\u4EE5\u51CF\u5C11 Java \u7A0B\u5E8F\u7684\u542F\u52A8\u65F6\u95F4\uFF0C\u5F53\u591A\u4E2A Java \u865A\u62DF\u673A\uFF08JVM\uFF09\u5171\u4EAB\u76F8\u540C\u7684\u5F52\u6863\u6587\u4EF6\u65F6\uFF0C\u8FD8\u53EF\u4EE5\u51CF\u5C11\u52A8\u6001\u5185\u5B58\u7684\u5360\u7528\u91CF\uFF0C\u540C\u65F6\u51CF\u5C11\u591A\u4E2A\u865A\u62DF\u673A\u5728\u540C\u4E00\u4E2A\u7269\u7406\u6216\u865A\u62DF\u7684\u673A\u5668\u4E0A\u8FD0\u884C\u65F6\u7684\u8D44\u6E90\u5360\u7528\u3002CDS \u5728\u5F53\u65F6\u8FD8\u662F Oracle JDK \u7684\u5546\u4E1A\u7279\u6027\u3002</p><p>Java 10 \u5728\u73B0\u6709\u7684 CDS \u529F\u80FD\u57FA\u7840\u4E0A\u518D\u6B21\u62D3\u5C55\uFF0C\u4EE5\u5141\u8BB8\u5E94\u7528\u7C7B\u653E\u7F6E\u5728\u5171\u4EAB\u5B58\u6863\u4E2D\u3002CDS \u7279\u6027\u5728\u539F\u6765\u7684 bootstrap \u7C7B\u57FA\u7840\u4E4B\u4E0A\uFF0C\u6269\u5C55\u52A0\u5165\u4E86\u5E94\u7528\u7C7B\u7684 CDS \u4E3A (Application Class-Data Sharing\uFF0CAppCDS) \u652F\u6301\uFF0C\u5927\u5927\u52A0\u5927\u4E86 CDS \u7684\u9002\u7528\u8303\u56F4\u3002\u5176\u539F\u7406\u4E3A\uFF1A\u5728\u542F\u52A8\u65F6\u8BB0\u5F55\u52A0\u8F7D\u7C7B\u7684\u8FC7\u7A0B\uFF0C\u5199\u5165\u5230\u6587\u672C\u6587\u4EF6\u4E2D\uFF0C\u518D\u6B21\u542F\u52A8\u65F6\u76F4\u63A5\u8BFB\u53D6\u6B64\u542F\u52A8\u6587\u672C\u5E76\u52A0\u8F7D\u3002\u8BBE\u60F3\u5982\u679C\u5E94\u7528\u73AF\u5883\u6CA1\u6709\u5927\u7684\u53D8\u5316\uFF0C\u542F\u52A8\u901F\u5EA6\u5C31\u4F1A\u5F97\u5230\u63D0\u5347\u3002</p><h2 id="\u5B9E\u9A8C\u6027\u7684\u57FA\u4E8E-java-\u7684-jit-\u7F16\u8BD1\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C\u6027\u7684\u57FA\u4E8E-java-\u7684-jit-\u7F16\u8BD1\u5668" aria-hidden="true">#</a> \u5B9E\u9A8C\u6027\u7684\u57FA\u4E8E Java \u7684 JIT \u7F16\u8BD1\u5668</h2><p>Graal \u662F\u4E00\u4E2A\u57FA\u4E8E Java \u8BED\u8A00\u7F16\u5199\u7684 JIT \u7F16\u8BD1\u5668\uFF0C\u662F JDK 9 \u4E2D\u5F15\u5165\u7684\u5B9E\u9A8C\u6027 Ahead-of-Time (AOT) \u7F16\u8BD1\u5668\u7684\u57FA\u7840\u3002</p><p>Oracle \u7684 HotSpot VM \u4FBF\u9644\u5E26\u4E24\u4E2A\u7528 C++ \u5B9E\u73B0\u7684 JIT compiler\uFF1AC1 \u53CA C2\u3002\u5728Java 10 (Linux/x64, macOS/x64) \u4E2D\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0BHotSpot \u4ECD\u4F7F\u7528C2\uFF0C\u4F46\u901A\u8FC7\u5411java \u547D\u4EE4\u6DFB\u52A0 <code>-XX:+UnlockExperimentalVMOptions -XX:+UseJVMCICompiler</code> \u53C2\u6570\u4FBF\u53EF\u5C06 C2 \u66FF\u6362\u6210 Graal\u3002</p>`,21),G=a("\u76F8\u5173\u9605\u8BFB\uFF1A"),E={href:"https://www.infoq.cn/article/java-10-jit-compiler-graal",target:"_blank",rel:"noopener noreferrer"},q=a("\u6DF1\u5165\u6D45\u51FA Java 10 \u7684\u5B9E\u9A8C\u6027 JIT \u7F16\u8BD1\u5668 Graal - \u90D1\u96E8\u8FEA"),F=n("h2",{id:"\u5176\u4ED6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5176\u4ED6","aria-hidden":"true"},"#"),a(" \u5176\u4ED6")],-1),O=n("ul",null,[n("li",null,[n("strong",null,"\u7EBF\u7A0B-\u5C40\u90E8\u7BA1\u63A7"),a("\uFF1AJava 10 \u4E2D\u7EBF\u7A0B\u7BA1\u63A7\u5F15\u5165 JVM \u5B89\u5168\u70B9\u7684\u6982\u5FF5\uFF0C\u5C06\u5141\u8BB8\u5728\u4E0D\u8FD0\u884C\u5168\u5C40 JVM \u5B89\u5168\u70B9\u7684\u60C5\u51B5\u4E0B\u5B9E\u73B0\u7EBF\u7A0B\u56DE\u8C03\uFF0C\u7531\u7EBF\u7A0B\u672C\u8EAB\u6216\u8005 JVM \u7EBF\u7A0B\u6765\u6267\u884C\uFF0C\u540C\u65F6\u4FDD\u6301\u7EBF\u7A0B\u5904\u4E8E\u963B\u585E\u72B6\u6001\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F7F\u5F97\u505C\u6B62\u5355\u4E2A\u7EBF\u7A0B\u53D8\u6210\u53EF\u80FD\uFF0C\u800C\u4E0D\u662F\u53EA\u80FD\u542F\u7528\u6216\u505C\u6B62\u6240\u6709\u7EBF\u7A0B")]),n("li",null,[n("strong",null,"\u5907\u7528\u5B58\u50A8\u88C5\u7F6E\u4E0A\u7684\u5806\u5206\u914D"),a("\uFF1AJava 10 \u4E2D\u5C06\u4F7F\u5F97 JVM \u80FD\u591F\u4F7F\u7528\u9002\u7528\u4E8E\u4E0D\u540C\u7C7B\u578B\u7684\u5B58\u50A8\u673A\u5236\u7684\u5806\uFF0C\u5728\u53EF\u9009\u5185\u5B58\u8BBE\u5907\u4E0A\u8FDB\u884C\u5806\u5185\u5B58\u5206\u914D")]),n("li",null,"......")],-1),M=n("h2",{id:"\u53C2\u8003",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003","aria-hidden":"true"},"#"),a(" \u53C2\u8003")],-1),V=n("li",null,[n("p",null,"Java 10 Features and Enhancements : https://howtodoinjava.com/java10/java10-features/")],-1),I=a("Guide to Java10 : "),L={href:"https://www.baeldung.com/java-10-overview",target:"_blank",rel:"noopener noreferrer"},T=a("https://www.baeldung.com/java-10-overview"),A=n("li",null,[n("p",null,"4 Class Data Sharing : https://docs.oracle.com/javase/10/vm/class-data-sharing.htm#JSJVM-GUID-7EAA3411-8CF0-4D19-BD05-DF5E1780AA91")],-1);function P(U,N){const s=u("ExternalLinkIcon");return o(),c(l,null,[i,k,n("ul",null,[n("li",null,[n("a",d,[h,t(s)])]),n("li",null,[n("a",v,[m,t(s)])]),n("li",null,[n("a",b,[_,t(s)])]),n("li",null,[n("a",g,[f,t(s)])]),n("li",null,[n("a",j,[J,t(s)])])]),w,n("p",null,[C,n("a",y,[x,t(s)]),S]),D,n("p",null,[G,n("a",E,[q,t(s)])]),F,O,M,n("ul",null,[V,n("li",null,[n("p",null,[I,n("a",L,[T,t(s)])])]),A])],64)}var B=p(r,[["render",P],["__file","java10.html.vue"]]);export{B as default};