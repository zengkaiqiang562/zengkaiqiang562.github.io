import{_ as e,e as a}from"./app.625aa393.js";var o="/assets/01.40e7ac5a.png",t="/assets/02.cb6f1e7f.png",s="/assets/03.94885f49.png",d="/assets/04.32e42b1e.png",c="/assets/05.cf0efa52.png",r="/assets/06.280f2e2e.png",n="/assets/07.d2874a16.png",l="/assets/08.706fe30f.png",p="/assets/09.5452a272.png",i="/assets/10.596d789c.png",h="/assets/11.7aa42652.png",g="/assets/12.35bb4d4c.png",u="/assets/13.fd49cafe.png",m="/assets/14.1403d21d.png",_="/assets/15.c0d3a12a.png",v="/assets/16.6473b399.png";const y={},x=a('<h2 id="_1-\u521B\u5EFA-groovy-\u811A\u672C\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA-groovy-\u811A\u672C\u6587\u4EF6" aria-hidden="true">#</a> 1. \u521B\u5EFA <code>Groovy</code> \u811A\u672C\u6587\u4EF6</h2><p>\u53F3\u952E\u5305\u540D -&gt; <code>New</code> -&gt; <code>Groovy Script</code></p><blockquote><p>\u76F8\u5F53\u4E8E\u521B\u5EFA\u4E00\u4E2A <code>Groovy class</code> \u6587\u4EF6\uFF0C\u518D\u628A <code>class</code> \u7C7B\u7684\u5B9A\u4E49\u5220\u6389\u3002</p></blockquote><p><img src="'+o+'" alt="" loading="lazy"></p><h2 id="_2-\u7C7B\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u7C7B\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528" aria-hidden="true">#</a> 2. \u7C7B\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528</h2><p><code>Groovy</code> \u4E2D\u5982\u679C\u7701\u7565\u8BBF\u95EE\u6743\u9650\u4FEE\u9970\u7B26\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u662F <code>public</code>\u3002</p><p><code>Groovy</code> \u4E2D\u7684\u7C7B\u9664\u4E86\u9ED8\u8BA4\u7EE7\u627F\u81EA <code>java.lang.Object</code>, \u8FD8\u9ED8\u8BA4\u90FD\u5B9E\u73B0\u4E86 <code>groovy.lang.GroovyObject</code> \u63A5\u53E3\u3002</p><p><code>Groovy</code> \u4E2D\u8BED\u53E5\u6700\u540E\u7684\u5206\u53F7 &quot;<code>;</code>&quot; \u53EF\u4EE5\u7701\u7565\uFF08<code>for</code> \u5FAA\u73AF\u4E2D\u7684\u5206\u53F7\u4E0D\u80FD\u7701\uFF09\u3002</p><p><img src="'+t+`" alt="" loading="lazy"></p><p><code>Groovy</code> \u4E2D\u521B\u5EFA\u5BF9\u8C61\u7684\u540C\u65F6\uFF0C\u53EF\u4EE5\u5BF9\u6210\u5458\u53D8\u91CF\u8FDB\u884C\u521D\u59CB\u5316\uFF1A</p><div class="language-groovy ext-groovy"><pre class="language-groovy"><code><span class="token keyword">def</span> \u7C7B\u5BF9\u8C61 <span class="token operator">=</span> <span class="token keyword">new</span> \u7C7B\u540D<span class="token punctuation">(</span>\u6210\u5458\u53D8\u91CF\u540D<span class="token punctuation">:</span> \u6210\u5458\u53D8\u91CF\u503C<span class="token punctuation">,</span> \u6210\u5458\u53D8\u91CF\u540D<span class="token punctuation">:</span> \u6210\u5458\u53D8\u91CF\u503C<span class="token punctuation">,</span> \u6210\u5458\u53D8\u91CF\u540D<span class="token punctuation">:</span> \u6210\u5458\u53D8\u91CF\u503C<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u6CE8\u610F\uFF1A
1. \u8FD9\u8DDF\u5B9A\u4E49 Map \u65F6\u521D\u59CB\u5316\u952E\u503C\u5BF9\u5143\u7D20\u662F\u4E24\u56DE\u4E8B\uFF1B
2. \u53EF\u4EE5\u53EA\u521D\u59CB\u5316\u90E8\u5206\u6210\u5458\u53D8\u91CF\u3002
</code></pre></div><p>\u8BBF\u95EE\u7C7B\u5BF9\u8C61\u7684\u6210\u5458\u53D8\u91CF\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\uFF1A</p><ol><li><p><code>Groovy</code> \u4E2D\u7684 &quot;\u5BF9\u8C61.\u6210\u5458\u53D8\u91CF&quot; \u5E76\u4E0D\u662F\u50CF <code>Java</code> \u90A3\u6837\u76F4\u63A5\u8BBF\u95EE\u6210\u5458\u53D8\u91CF\uFF0C\u800C\u662F\u76F8\u5F53\u4E8E\u8C03\u7528\u4E86\u6210\u5458\u53D8\u91CF\u7684 <code>setter/getter</code> \u65B9\u6CD5\uFF1B</p></li><li><p>\u5F53\u6211\u4EEC\u5728\u7C7B\u4E2D\u5B9A\u4E49\u4E86\u6210\u5458\u53D8\u91CF\u540E\uFF0C\u901A\u8FC7\u7C7B\u6240\u5B9E\u73B0\u7684\u63A5\u53E3 <code>GroovyObject</code>\uFF0C\u4F1A\u4E3A\u6BCF\u4E2A\u6210\u5458\u53D8\u91CF\u81EA\u52A8\u751F\u6210 <code>setter/getter</code> \u65B9\u6CD5\uFF1B</p></li><li><p>\u5728 <code>Groovy</code> \u4E2D\u7684 &quot;\u5BF9\u8C61.\u6210\u5458\u53D8\u91CF&quot; \u5C31\u662F\u5728\u8C03\u7528\u6210\u5458\u53D8\u91CF\u7684 <code>setter/getter</code> \u65B9\u6CD5\uFF0C\u6240\u4EE5\uFF0C\u5373\u4F7F\u6210\u5458\u53D8\u91CF\u662F\u79C1\u6709 <code>private</code> \u7684\uFF0C\u5728 <code>Groovy</code> \u4E2D\u4E5F\u53EF\u4EE5\u4F7F\u7528 &quot;\u5BF9\u8C61.\u6210\u5458\u53D8\u91CF&quot; \u6765\u8BBF\u95EE\u6210\u5458\u53D8\u91CF\u3002</p></li></ol><p><img src="`+s+'" alt="" loading="lazy"></p><h2 id="_3-\u63A5\u53E3\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u63A5\u53E3\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528" aria-hidden="true">#</a> 3. \u63A5\u53E3\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528</h2><p><img src="'+d+'" alt="" loading="lazy"></p><p><code>Groovy</code> \u7684\u63A5\u53E3\u4E2D\u4E0D\u5141\u8BB8\u5B9A\u4E49\u975E <code>public</code> \u4FEE\u9970\u7684\u65B9\u6CD5\u3002</p><p><code>Groovy</code> \u7684\u63A5\u53E3\u4E2D\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>def</code> \u5B9A\u4E49\u4E0D\u786E\u5B9A\u8FD4\u56DE\u503C\u7C7B\u578B\u7684\u65B9\u6CD5\u3002</p><p><code>Groovy</code> \u7684\u63A5\u53E3\u4E2D\u5B9A\u4E49\u7684\u65B9\u6CD5\u90FD\u662F\u62BD\u8C61\u65B9\u6CD5\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u52A0 <code>abstract</code> \u4FEE\u9970\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5B9E\u73B0\u7C7B\u5FC5\u987B\u91CD\u5199\u63A5\u53E3\u4E2D\u7684\u6240\u6709\u65B9\u6CD5\u3002</p><p><img src="'+c+'" alt="" loading="lazy"></p><h2 id="_4-trait-\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_4-trait-\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528" aria-hidden="true">#</a> 4. <code>Trait</code> \u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528</h2><p><img src="'+r+'" alt="" loading="lazy"></p><p><code>Groovy</code> \u7684 <code>Trait</code> \u4E2D\u4E0D\u5141\u8BB8\u5B9A\u4E49\u975E <code>public</code> \u4FEE\u9970\u7684\u65B9\u6CD5\u3002</p><p><code>Groovy</code> \u7684 <code>Trait</code> \u4E2D\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>def</code> \u5B9A\u4E49\u4E0D\u786E\u5B9A\u8FD4\u56DE\u503C\u7C7B\u578B\u7684\u65B9\u6CD5\u3002</p><p><code>Groovy</code> \u7684 <code>Trait</code> \u4E2D\u5373\u53EF\u4EE5\u5B9A\u4E49\u62BD\u8C61\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u9ED8\u8BA4\u65B9\u6CD5\uFF0C\u4F46\u662F\uFF0C\u5B9A\u4E49\u62BD\u8C61\u65B9\u6CD5\u65F6\u5FC5\u987B\u4F7F\u7528\u5173\u952E\u5B57 <code>abstract</code> \u8FDB\u884C\u4FEE\u9970\u3002</p><p>\u5B50\u7C7B\u4E5F\u662F\u901A\u8FC7\u5173\u952E\u5B57 <code>implements</code> \u53BB\u5B9E\u73B0 <code>Trait</code>\u3002</p><p><code>Groovy</code> \u4E2D\u7684 <code>Trait</code> \u548C\u63A5\u53E3\u7684\u552F\u4E00\u533A\u522B\u5728\u4E8E\uFF1A</p><ol><li><p><code>Trait</code> \u4E2D\u53EF\u4EE5\u5B9A\u4E49\u9ED8\u8BA4\u65B9\u6CD5\uFF0C\u5B50\u7C7B\u53EA\u9700\u8981\u91CD\u5199 <code>Trait</code> \u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\u5373\u53EF\uFF1B</p></li><li><p>\u63A5\u53E3\u4E2D\u5B9A\u4E49\u7684\u65B9\u6CD5\u53EA\u80FD\u662F\u62BD\u8C61\u65B9\u6CD5\uFF0C\u5B50\u7C7B\u5FC5\u987B\u91CD\u5199\u63A5\u53E3\u4E2D\u7684\u6240\u6709\u65B9\u6CD5\u3002</p></li></ol><p><img src="'+n+'" alt="" loading="lazy"></p><h2 id="_5-\u5143\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#_5-\u5143\u7F16\u7A0B" aria-hidden="true">#</a> 5. \u5143\u7F16\u7A0B</h2><h3 id="_5-1-\u901A\u8FC7\u5143\u7F16\u7A0B\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u4E3A\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-1-\u901A\u8FC7\u5143\u7F16\u7A0B\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u4E3A\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a> 5.1 \u901A\u8FC7\u5143\u7F16\u7A0B\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u4E3A\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5</h3><p><strong>\u80CC\u666F\uFF1A</strong></p><p>\u5728 <code>Java</code> \u4E2D\u4F7F\u7528\u53CD\u5C04\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u63A2\u7D22\u7A0B\u5E8F\u7684\u7ED3\u679C\uFF0C\u7C7B\u3001\u65B9\u6CD5\u3001\u53C2\u6570\u7B49\u3002</p><p>\u4F46\u662F <code>Java</code> \u53CD\u5C04\u4ECD\u7136\u5C40\u9650\u4E8E\u6240\u521B\u5EFA\u7684\u9759\u6001\u7ED3\u679C\uFF0C\u65E0\u6CD5\u5728\u8FD0\u884C\u65F6\u4FEE\u6539\u4E00\u4E2A\u5BF9\u8C61\u7684\u7C7B\u578B\uFF0C\u6216\u662F\u8BA9\u5B83\u52A8\u6001\u83B7\u5F97\u884C\u4E3A\uFF08\u65B9\u6CD5\uFF09\u3002</p><p>\u5982\u679C\u53EF\u4EE5\u57FA\u4E8E\u5E94\u7528\u7684\u52A8\u6001\u72B6\u6001\u6216\u57FA\u4E8E\u5E94\u7528\u6240\u63A5\u53D7\u7684\u8F93\u5165\uFF0C\u52A8\u6001\u5730\uFF08\u5373\u8FD0\u884C\u65F6\uFF09\u6DFB\u52A0\u65B9\u6CD5\u548C\u884C\u4E3A\uFF0C\u90A3\u4E48\u4EE3\u7801\u4F1A\u53D8\u5F97\u66F4\u7075\u6D3B\u3002</p><p>\u5728 <code>Groovy</code> \u4E2D\u5143\u7F16\u7A0B\u5C31\u63D0\u4F9B\u4E86\u8FD9\u4E00\u529F\u80FD \u2014\u2014 \u5143\u7F16\u7A0B\u3002</p><p><strong>\u5143\u7F16\u7A0B\u7684\u6982\u5FF5\uFF1A</strong></p><p>\u5143\u7F16\u7A0B\u610F\u5473\u7740\u7F16\u5199\u80FD\u591F\u64CD\u4F5C\u7A0B\u5E8F\u7684\u7A0B\u5E8F\uFF0C\u5305\u62EC\u64CD\u4F5C\u7A0B\u5E8F\u81EA\u8EAB\u3002</p><p>\u50CF <code>Groovy</code> \u8FD9\u6837\u7684\u52A8\u6001\u8BED\u8A00\u901A\u8FC7 <strong>\u5143\u5BF9\u8C61\u534F\u8BAE</strong>\uFF08<code>MOP\uFF1AMeta Object Protocol</code>\uFF09\u63D0\u4F9B\u4E86\u8FD9\u79CD\u80FD\u529B\u3002</p><p>\u5728 <code>Groovy</code> \u4E2D\u4F7F\u7528 <code>MOP</code> \u53EF\u4EE5\u52A8\u6001\u8C03\u7528\u65B9\u6CD5\uFF0C\u751A\u81F3\u5728\u8FD0\u884C\u65F6\u5408\u6210\u7C7B\u548C\u65B9\u6CD5\u3002</p><h3 id="_5-2-groovy-\u4E2D\u6210\u5458\u65B9\u6CD5\u6216\u6210\u5458\u5C5E\u6027\u7684\u8BBF\u95EE\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_5-2-groovy-\u4E2D\u6210\u5458\u65B9\u6CD5\u6216\u6210\u5458\u5C5E\u6027\u7684\u8BBF\u95EE\u6D41\u7A0B" aria-hidden="true">#</a> 5.2 <code>Groovy</code> \u4E2D\u6210\u5458\u65B9\u6CD5\u6216\u6210\u5458\u5C5E\u6027\u7684\u8BBF\u95EE\u6D41\u7A0B</h3><p><code>Java</code> \u4E2D\u7684\u6210\u5458\u65B9\u6CD5\u6216\u6210\u5458\u5C5E\u6027\u5982\u679C\u5728\u7C7B\u6216\u7236\u7C7B\u4E2D\u627E\u4E0D\u5230\uFF0C\u90A3\u4E48\u5728\u7F16\u8BD1\u65F6\u671F\u5C31\u4F1A\u62A5\u9519\u3002</p><p><code>Groovy</code> \u4E2D\u7684\u6210\u5458\u65B9\u6CD5\u6216\u6210\u5458\u5C5E\u6027\u5982\u679C\u5728\u7C7B\u6216\u7236\u7C7B\u4E2D\u627E\u4E0D\u5230\uFF0C\u90A3\u4E48\u5728\u7F16\u8BD1\u65F6\u671F\u662F\u4E0D\u4F1A\u62A5\u9519\u7684\u3002\u800C\u662F\u5728\u8FD0\u884C\u65F6\u671F\uFF0C\u6839\u636E\u5982\u4E0B\u6D41\u7A0B\u56FE\u6240\u793A\uFF0C\u5728 <code>MetaClass</code> \u6216\u5176\u4ED6\u9014\u5F84\u4E0B\u5224\u65AD\u80FD\u5426\u8BBF\u95EE\u5230\u76F8\u5173\u7684\u65B9\u6CD5\u6216\u5C5E\u6027\u3002\u5982\u679C\u6839\u636E\u6D41\u7A0B\u56FE\u6240\u793A\uFF0C\u6700\u7EC8\u90FD\u65E0\u6CD5\u8BBF\u95EE\u5230\u65B9\u6CD5\u6216\u5C5E\u6027\uFF0C\u624D\u4F1A\u5728\u8FD0\u884C\u65F6\u671F\u62A5\u9519\u3002</p><p><img src="'+l+'" alt="" loading="lazy"></p><p><strong>\u793A\u4F8B\u4EE3\u7801\u4E00\uFF1A</strong></p><p><img src="'+p+`" alt="" loading="lazy"></p><p><strong>\u793A\u4F8B\u4EE3\u7801\u4E8C\uFF1A</strong></p><div class="language-text ext-text"><pre class="language-text"><code>\u5982\u679C Person \u5BF9\u8C61\u8C03\u7528\u4E86\u4E00\u4E2A\u6CA1\u6709\u5B9A\u4E49\u8FC7\u7684\u65B9\u6CD5\uFF0C\u4F46\u662F Person \u7C7B\u4E2D\u91CD\u5199\u4E86 &quot;def invokeMethod(String methodName, Object methodArgs)&quot; \u65B9\u6CD5\uFF0C
\u90A3\u4E48\u4F1A\u6267\u884C\u8BE5 invokeMethod \u65B9\u6CD5\uFF0C\u5176\u4E2D\uFF1A
1. \u53C2\u6570 methodName \u8868\u793A\u672A\u5B9A\u4E49\u7684\u65B9\u6CD5\u540D\uFF1B
2. \u53C2\u6570 methodArgs \u8868\u793A\u8C03\u7528\u672A\u5B9A\u4E49\u7684\u65B9\u6CD5\u65F6\u4F20\u5165\u7684\u53C2\u6570\uFF0C\u53EF\u80FD\u662F\u4E00\u4E2A\u53C2\u6570\u6570\u7EC4\uFF1B
3. invokeMethod \u7684\u8FD4\u56DE\u503C\u5C31\u662F\u8C03\u7528\u672A\u5B9A\u4E49\u65B9\u6CD5\u65F6\u7684\u8FD4\u56DE\u503C\u3002
</code></pre></div><p><img src="`+i+`" alt="" loading="lazy"></p><p><strong>\u793A\u4F8B\u4EE3\u7801\u4E09\uFF1A</strong></p><div class="language-text ext-text"><pre class="language-text"><code>\u5982\u679C Person \u5BF9\u8C61\u8C03\u7528\u4E86\u4E00\u4E2A\u6CA1\u6709\u5B9A\u4E49\u8FC7\u7684\u65B9\u6CD5\uFF0C\u4F46\u662F Person \u7C7B\u4E2D\u91CD\u5199\u4E86 &quot;def methodMissing(String methodName, Object methodArgs)&quot; \u65B9\u6CD5\uFF0C
\u90A3\u4E48\u4F1A\u6267\u884C\u8BE5 methodMissing \u65B9\u6CD5\uFF0C\u5176\u4E2D\uFF1A
1. \u53C2\u6570 methodName \u8868\u793A\u672A\u5B9A\u4E49\u7684\u65B9\u6CD5\u540D\uFF1B
2. \u53C2\u6570 methodArgs \u8868\u793A\u8C03\u7528\u672A\u5B9A\u4E49\u7684\u65B9\u6CD5\u65F6\u4F20\u5165\u7684\u53C2\u6570\uFF0C\u53EF\u80FD\u662F\u4E00\u4E2A\u53C2\u6570\u6570\u7EC4\uFF1B
3. methodMissing \u7684\u8FD4\u56DE\u503C\u5C31\u662F\u8C03\u7528\u672A\u5B9A\u4E49\u65B9\u6CD5\u65F6\u7684\u8FD4\u56DE\u503C\u3002
</code></pre></div><p><img src="`+h+`" alt="" loading="lazy"></p><h3 id="_5-3-\u4F7F\u7528-metaclass-\u52A8\u6001\u5730\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-3-\u4F7F\u7528-metaclass-\u52A8\u6001\u5730\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a> 5.3 \u4F7F\u7528 <code>MetaClass</code> \u52A8\u6001\u5730\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5</h3><h4 id="_5-3-1-groovy-\u4E2D\u6BCF\u4E2A\u7C7B\u90FD\u6709\u5BF9\u5E94\u6709\u4E00\u4E2A-metaclass" tabindex="-1"><a class="header-anchor" href="#_5-3-1-groovy-\u4E2D\u6BCF\u4E2A\u7C7B\u90FD\u6709\u5BF9\u5E94\u6709\u4E00\u4E2A-metaclass" aria-hidden="true">#</a> 5.3.1 <code>Groovy</code> \u4E2D\u6BCF\u4E2A\u7C7B\u90FD\u6709\u5BF9\u5E94\u6709\u4E00\u4E2A <code>MetaClass</code></h4><div class="language-text ext-text"><pre class="language-text"><code>\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u7C7B\uFF0C\u5F53\u6211\u4EEC\u6267\u884C &quot;\u7C7B\u540D.metaClass&quot; \u6216\u8005 &quot;\u5BF9\u8C61\u540D.metaClass&quot; \u65F6\uFF0C\u4F1A\u8C03\u7528 DefaultGroovyMethods \u7C7B\u7684 getMetaClass/setMetaClass \u65B9\u6CD5\u3002

DefaultGroovyMethods \u4E2D\u4F1A\u4E3A\u81EA\u5B9A\u4E49\u7C7B\u521B\u5EFA\u4E00\u4E2A HandleMetaClass \u7C7B\u578B\u7684 metaClass \u5BF9\u8C61\uFF0C\u4F46\u662F HandleMetaClass \u5176\u5B9E\u53EA\u662F\u4E00\u4E2A\u4EE3\u7406\u3002
\u81EA\u5B9A\u4E49\u7C7B\u771F\u6B63\u5BF9\u5E94\u7684 MetaClass \u5176\u5B9E\u662F HandleMetaClass \u4E2D\u7684 MetaClass \u7C7B\u578B\u7684\u5C5E\u6027 delegate \u6240\u6307\u5B9A\u7684 MetaClass \u5BF9\u8C61\u3002

\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u7C7B\uFF0CHandleMetaClass.delegate \u5C31\u662F\u4E00\u4E2A MetaClassImpl \u7C7B\u5BF9\u8C61\u3002
\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53\u6211\u4EEC\u8BBF\u95EE &quot;\u7C7B\u540D.metaClass&quot; \u6216\u8005 &quot;\u5BF9\u8C61\u540D.metaClass&quot; \u65F6\uFF0C\u5176\u5B9E\u5C31\u662F\u5728\u8BBF\u95EE\u4E00\u4E2A MetaClassImpl \u5BF9\u8C61\u3002

\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 &quot;\u7C7B\u540D.metaClass = otherMetaClass&quot; \u6216\u8005 &quot;\u5BF9\u8C61\u540D.metaClass = otherMetaClass&quot; \u4E3A\u81EA\u5B9A\u4E49\u7C7B\u6307\u5B9A\u5176\u4ED6\u7684 MetaClass \u5B50\u7C7B\u5BF9\u8C61\u3002
</code></pre></div><h4 id="_5-3-2-\u901A\u8FC7-metaclass-\u521B\u5EFA\u65B0\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5-3-2-\u901A\u8FC7-metaclass-\u521B\u5EFA\u65B0\u7684\u5C5E\u6027" aria-hidden="true">#</a> 5.3.2 \u901A\u8FC7 <code>MetaClass</code> \u521B\u5EFA\u65B0\u7684\u5C5E\u6027</h4><div class="language-text ext-text"><pre class="language-text"><code>\u53EF\u4EE5\u901A\u8FC7 &quot;\u7C7B\u540D.metaClass.newMemberName = newMemberValue&quot; \u6216\u8005 &quot;\u5BF9\u8C61\u540D.metaClass.newMemberName = newMemberValue&quot; 
\u5728\u7C7B\u5BF9\u5E94\u7684 MetaClass \u4E2D\u52A8\u6001\u5730\u521B\u5EFA\u4E00\u4E2A\u65B0\u5C5E\u6027\uFF0C\u4E8E\u662F\uFF0C
\u901A\u8FC7 &quot;\u7C7B\u540D.newMemberName&quot; \u6216\u8005 &quot;\u5BF9\u8C61\u540D.newMemberName&quot; \u5C31\u53EF\u4EE5\u8BBF\u95EE\u5230\u8FD9\u4E2A\u65B0\u5C5E\u6027\u3002
</code></pre></div><h4 id="_5-3-3-\u793A\u4F8B\u4EE3\u7801\u4E00" tabindex="-1"><a class="header-anchor" href="#_5-3-3-\u793A\u4F8B\u4EE3\u7801\u4E00" aria-hidden="true">#</a> 5.3.3 \u793A\u4F8B\u4EE3\u7801\u4E00</h4><p><img src="`+g+'" alt="" loading="lazy"></p><h4 id="_5-3-4-\u793A\u4F8B\u4EE3\u7801\u4E8C" tabindex="-1"><a class="header-anchor" href="#_5-3-4-\u793A\u4F8B\u4EE3\u7801\u4E8C" aria-hidden="true">#</a> 5.3.4 \u793A\u4F8B\u4EE3\u7801\u4E8C</h4><p><img src="'+u+`" alt="" loading="lazy"></p><h4 id="_5-3-5-\u901A\u8FC7-metaclass-\u521B\u5EFA\u65B0\u7684\u95ED\u5305-\u5373\u65B0\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-3-5-\u901A\u8FC7-metaclass-\u521B\u5EFA\u65B0\u7684\u95ED\u5305-\u5373\u65B0\u7684\u65B9\u6CD5" aria-hidden="true">#</a> 5.3.5 \u901A\u8FC7 <code>MetaClass</code> \u521B\u5EFA\u65B0\u7684\u95ED\u5305\uFF08\u5373\u65B0\u7684\u65B9\u6CD5\uFF09</h4><div class="language-text ext-text"><pre class="language-text"><code>\u53EF\u4EE5\u901A\u8FC7 &quot;\u7C7B\u540D.metaClass.newClosureName = {\u5F62\u53C2\u5217\u8868 -&gt; \u51FD\u6570\u4F53}&quot; \u6216\u8005 &quot;\u5BF9\u8C61\u540D.metaClass.newClosureName = {\u5F62\u53C2\u5217\u8868 -&gt; \u51FD\u6570\u4F53}&quot;
\u5728\u7C7B\u5BF9\u5E94\u7684 MetaClass \u4E2D\u52A8\u6001\u5730\u521B\u5EFA\u4E00\u4E2A\u65B0\u95ED\u5305\uFF08\u5373\u65B0\u65B9\u6CD5\uFF09\uFF0C\u4E8E\u662F\uFF0C
\u901A\u8FC7 &quot;\u7C7B\u540D.newClosureName(\u5B9E\u53C2\u5217\u8868)&quot; \u6216\u8005 &quot;\u5BF9\u8C61\u540D.newClosureName(\u5B9E\u53C2\u5217\u8868)&quot;  \u5C31\u53EF\u4EE5\u8C03\u7528\u8FD9\u4E2A\u95ED\u5305\uFF08\u5373\u65B9\u6CD5\uFF09\u3002
</code></pre></div><h4 id="_5-3-6-\u793A\u4F8B\u4EE3\u7801\u4E09" tabindex="-1"><a class="header-anchor" href="#_5-3-6-\u793A\u4F8B\u4EE3\u7801\u4E09" aria-hidden="true">#</a> 5.3.6 \u793A\u4F8B\u4EE3\u7801\u4E09</h4><p><img src="`+m+`" alt="" loading="lazy"></p><h4 id="_5-3-7-\u901A\u8FC7-metaclass-\u521B\u5EFA\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-3-7-\u901A\u8FC7-metaclass-\u521B\u5EFA\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> 5.3.7 \u901A\u8FC7 <code>MetaClass</code> \u521B\u5EFA\u9759\u6001\u65B9\u6CD5</h4><div class="language-text ext-text"><pre class="language-text"><code>\u7C7B\u540D.metaClass.static.newClosureName = {\u5F62\u53C2\u5217\u8868 -&gt; \u51FD\u6570\u4F53}
</code></pre></div><h4 id="_5-3-8-\u793A\u4F8B\u4EE3\u7801\u56DB" tabindex="-1"><a class="header-anchor" href="#_5-3-8-\u793A\u4F8B\u4EE3\u7801\u56DB" aria-hidden="true">#</a> 5.3.8 \u793A\u4F8B\u4EE3\u7801\u56DB</h4><p><img src="`+_+`" alt="" loading="lazy"></p><h4 id="_5-3-9-\u8BA9-metaclass-\u52A8\u6001\u521B\u5EFA\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u5168\u5C40\u53EF\u89C1" tabindex="-1"><a class="header-anchor" href="#_5-3-9-\u8BA9-metaclass-\u52A8\u6001\u521B\u5EFA\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u5168\u5C40\u53EF\u89C1" aria-hidden="true">#</a> 5.3.9 \u8BA9 <code>MetaClass</code> \u52A8\u6001\u521B\u5EFA\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u5168\u5C40\u53EF\u89C1</h4><div class="language-text ext-text"><pre class="language-text"><code>\u5728\u4E00\u4E2A Groovy \u6587\u4EF6\u4E2D\u901A\u8FC7 MetaClass \u4E3A\u7C7B\u52A8\u6001\u6DFB\u52A0\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5728\u53E6\u4E00\u4E2A Groovy \u6587\u4EF6\u4E2D\u9ED8\u8BA4\u662F\u65E0\u6CD5\u4F7F\u7528\u7684\u3002
\u5982\u679C\u60F3\u5728\u5404\u4E2A Groovy \u6587\u4EF6\u4E2D\u90FD\u80FD\u8BBF\u95EE\u5230\u901A\u8FC7 MetaClass \u4E3A\u7C7B\u52A8\u6001\u6DFB\u52A0\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C
\u90A3\u4E48\u9700\u8981\u5728\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5\u4E4B\u524D\u8C03\u7528 &quot;ExpandoMetaClass.enablleGlobally()&quot;\u3002
</code></pre></div><h4 id="_5-3-10-\u793A\u4F8B\u4EE3\u7801\u4E94" tabindex="-1"><a class="header-anchor" href="#_5-3-10-\u793A\u4F8B\u4EE3\u7801\u4E94" aria-hidden="true">#</a> 5.3.10 \u793A\u4F8B\u4EE3\u7801\u4E94</h4><p><img src="`+v+'" alt="" loading="lazy"></p>',74);function b(q,M){return x}var C=e(y,[["render",b],["__file","_04_oop.html.vue"]]);export{C as default};
