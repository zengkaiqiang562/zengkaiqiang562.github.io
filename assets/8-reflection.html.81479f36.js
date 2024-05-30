import{_ as e,e as a}from"./app.2a01fc36.js";var d="/assets/01.fec9a026.png",o="/assets/02.6147979f.png",t="/assets/03.6c8fe252.png",c="/assets/04.36ee8c1d.png",r="/assets/05.2c3e4384.png",i="/assets/06.38a0b2c5.png",s="/assets/07.dc5e2642.png",n="/assets/08.f4a5762d.png",h="/assets/09.c2a840e8.png";const l={},p=a(`<h2 id="_1-\u4EC0\u4E48\u662F\u53CD\u5C04" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u53CD\u5C04" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F\u53CD\u5C04</h2><p>\u53CD\u5C04\u662F\u5141\u8BB8\u5728\u8FD0\u884C\u65F6\u671F\u8BBF\u95EE <strong>\u7A0B\u5E8F\u7ED3\u6784</strong> \u7684\u4E00\u7C7B\u7279\u6027\uFF08\u7A0B\u5E8F\u7ED3\u6784\u5305\u62EC\uFF1A\u7C7B\u3001\u63A5\u53E3\u3001\u65B9\u6CD5\u3001\u5C5E\u6027\u7B49\uFF09\u3002</p><h2 id="_2-\u53CD\u5C04\u7684\u4F9D\u8D56\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-\u53CD\u5C04\u7684\u4F9D\u8D56\u5E93" aria-hidden="true">#</a> 2. \u53CD\u5C04\u7684\u4F9D\u8D56\u5E93</h2><p><code>Kotlin</code> \u4E2D\u4E0D\u4EC5\u81EA\u5DF1\u5B9E\u73B0\u4E86\u4E00\u5957 <code>Kotlin</code> \u53CD\u5C04\u7684 <code>API</code>\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 <code>Java</code> \u53CD\u5C04\u7684 <code>API</code>\u3002</p><p><code>Kotlin</code> \u53CD\u5C04\u7684 <code>API</code> \u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u5E93\uFF0C\u4F7F\u7528\u4E4B\u524D\u9700\u8981\u8FDB\u884C\u4F9D\u8D56\u914D\u7F6E\uFF1A</p><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>dependencies <span class="token punctuation">{</span>
    implementation <span class="token string gstring">&quot;org.jetbrains.kotlin:kotlin-reflect&quot;</span> <span class="token comment">// Kotlin\u53CD\u5C04 API \u7684\u4F9D\u8D56\u5E93</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+d+'" alt="" loading="lazy"></p><h2 id="_3-metadata-\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_3-metadata-\u6CE8\u89E3" aria-hidden="true">#</a> 3. <code>@MetaData</code> \u6CE8\u89E3</h2><p>\u5C06 <code>Kotlin</code> \u4EE3\u7801\u53CD\u7F16\u8BD1\u6210 <code>Java</code> \u4EE3\u7801\u540E\uFF0C<code>Java</code> \u4EE3\u7801\u4E2D\u6BCF\u4E2A\u7C7B\u90FD\u4F1A\u88AB\u6CE8\u89E3 <code>@MetaData</code> \u4FEE\u9970\u3002\u6CE8\u89E3 <code>@MetaData</code> \u4E2D\u4FDD\u5B58\u4E86 <code>Kotlin</code> \u53CD\u5C04\u76F8\u5173\u7684\u4FE1\u606F\u3002</p><h2 id="_4-\u53CD\u5C04\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_4-\u53CD\u5C04\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> 4. \u53CD\u5C04\u7684\u4F7F\u7528\u573A\u666F</h2><ol><li><p>\u83B7\u53D6\u7C7B\u578B\u7684\u6240\u6709\u5C5E\u6027\u3001\u65B9\u6CD5\u3001\u5185\u90E8\u7C7B\u7B49\u4FE1\u606F\uFF08\u5373\u901A\u8FC7\u53CD\u5C04\u6765\u8BBF\u95EE\u7A0B\u5E8F\u672C\u8EAB\uFF0C\u6240\u4EE5\u53C8\u53EF\u4EE5\u79F0\u4E3A\u81EA\u7701\uFF09\u3002</p></li><li><p>\u901A\u8FC7\u65B9\u6CD5\u7684\u540D\u79F0\u5B57\u7B26\u4E32\u53CA\u7B7E\u540D\u5B57\u7B26\u4E32\u6765\u8C03\u7528\u65B9\u6CD5\uFF1B\u901A\u8FC7\u5C5E\u6027\u7684\u540D\u79F0\u5B57\u7B26\u4E32\u6765\u8BBF\u95EE\u5C5E\u6027\u3002</p></li><li><p>\u901A\u8FC7\u7B7E\u540D\u4FE1\u606F\u83B7\u53D6\u6CDB\u578B\u5B9E\u53C2\u7684\u5177\u4F53\u7C7B\u578B\u3002</p></li><li><p>\u8BBF\u95EE\u8FD0\u884C\u65F6\u6CE8\u89E3\u53CA\u5176\u4FE1\u606F\u5B8C\u6210\u6CE8\u5165\u6216\u8005\u914D\u7F6E\u64CD\u4F5C\u3002</p></li></ol><h2 id="_5-\u53CD\u5C04\u4E2D\u4E0E\u7A0B\u5E8F\u7ED3\u6784\u76F8\u5173\u7684\u7C7B" tabindex="-1"><a class="header-anchor" href="#_5-\u53CD\u5C04\u4E2D\u4E0E\u7A0B\u5E8F\u7ED3\u6784\u76F8\u5173\u7684\u7C7B" aria-hidden="true">#</a> 5. \u53CD\u5C04\u4E2D\u4E0E\u7A0B\u5E8F\u7ED3\u6784\u76F8\u5173\u7684\u7C7B</h2><h3 id="_5-1-ktype" tabindex="-1"><a class="header-anchor" href="#_5-1-ktype" aria-hidden="true">#</a> 5.1 <code>KType</code></h3><p>\u63CF\u8FF0\u672A\u64E6\u9664\u7684\u7C7B\u578B\u6216\u6CDB\u578B\u53C2\u6570\u7B49\uFF0C\u4F8B\u5982 <code>Map&lt;String, Int&gt;</code>\u3002</p><p>\u53EF\u901A\u8FC7 <code>typeOf</code> \u6216\u8005\u7C7B\u578B <code>KClass</code>\u3001<code>KProperty</code>\u3001<code>KFunction</code> \u83B7\u53D6\u5BF9\u5E94\u7684\u7236\u7C7B\u3001\u5C5E\u6027\u3001\u51FD\u6570\u53C2\u6570\u7B49\u3002</p><h3 id="_5-2-kclass" tabindex="-1"><a class="header-anchor" href="#_5-2-kclass" aria-hidden="true">#</a> 5.2 <code>KClass</code></h3><p>\u63CF\u8FF0\u5BF9\u8C61\u7684\u5B9E\u9645\u7C7B\u578B\uFF0C\u4E0D\u5305\u542B\u6CDB\u578B\u53C2\u6570\uFF0C\u4F8B\u5982 <code>Map</code>\u3002</p><p>\u53EF\u901A\u8FC7\u5BF9\u8C61\u3001\u7C7B\u578B\u540D\u76F4\u63A5\u83B7\u5F97 <code>KClass</code> \u5B9E\u4F8B\u3002</p><h3 id="_5-3-kproperty" tabindex="-1"><a class="header-anchor" href="#_5-3-kproperty" aria-hidden="true">#</a> 5.3 <code>KProperty</code></h3><p>\u63CF\u8FF0\u5C5E\u6027\u3002</p><p>\u53EF\u901A\u8FC7\u5C5E\u6027\u5F15\u7528\u3001\u5C5E\u6027\u6240\u5728\u7C7B\u7684 <code>KClass</code> \u5B9E\u4F8B\u83B7\u53D6\u3002</p><h3 id="_5-4-kfunction" tabindex="-1"><a class="header-anchor" href="#_5-4-kfunction" aria-hidden="true">#</a> 5.4 <code>KFunction</code></h3><p>\u63CF\u8FF0\u51FD\u6570\u3002</p><p>\u53EF\u901A\u8FC7\u51FD\u6570\u5F15\u7528\u3001\u51FD\u6570\u6240\u5728\u7C7B\u7684 <code>KClass</code> \u5B9E\u4F8B\u83B7\u53D6\u3002</p><h3 id="_5-5-kotlin-\u4E0E-java-\u4E2D\u7A0B\u5E8F\u7ED3\u6784\u76F8\u5173\u7C7B\u7684\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_5-5-kotlin-\u4E0E-java-\u4E2D\u7A0B\u5E8F\u7ED3\u6784\u76F8\u5173\u7C7B\u7684\u5BF9\u6BD4" aria-hidden="true">#</a> 5.5 <code>Kotlin</code> \u4E0E <code>Java</code> \u4E2D\u7A0B\u5E8F\u7ED3\u6784\u76F8\u5173\u7C7B\u7684\u5BF9\u6BD4</h3><table><thead><tr><th style="text-align:left;"><code>Kotlin</code></th><th style="text-align:left;"><code>Java</code></th></tr></thead><tbody><tr><td style="text-align:left;"><code>KType</code></td><td style="text-align:left;"><code>Type</code></td></tr><tr><td style="text-align:left;"><code>KClass</code></td><td style="text-align:left;"><code>Class</code></td></tr><tr><td style="text-align:left;"><code>KProperty</code></td><td style="text-align:left;"><code>Field</code></td></tr><tr><td style="text-align:left;"><code>KFunction</code></td><td style="text-align:left;"><code>Method</code></td></tr></tbody></table><h2 id="_6-java-\u53CD\u5C04\u4E0E-kotlin-\u53CD\u5C04\u7684\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_6-java-\u53CD\u5C04\u4E0E-kotlin-\u53CD\u5C04\u7684\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 6. <code>Java</code> \u53CD\u5C04\u4E0E <code>Kotlin</code> \u53CD\u5C04\u7684\u4F18\u7F3A\u70B9</h2><p><code>Java</code> \u53CD\u5C04\uFF1A</p><ol><li><p>\u4F18\u70B9\uFF1A\u65E0\u9700\u5F15\u5165\u989D\u5916\u4F9D\u8D56\uFF0C\u9996\u6B21\u4F7F\u7528\u901F\u5EA6\u76F8\u5BF9\u8F83\u5FEB\u3002</p></li><li><p>\u7F3A\u70B9\uFF1A\u65E0\u6CD5\u8BBF\u95EE <code>Kotlin</code> \u8BED\u6CD5\u7279\u6027\uFF0C\u9700\u5BF9 <code>Kotlin</code> \u751F\u6210\u7684\u5B57\u8282\u7801\u8DB3\u591F\u4E86\u89E3\uFF08\u53EA\u6709\u4E86\u89E3\u5176\u5B57\u8282\u7801\u624D\u80FD\u77E5\u9053 <code>Java</code> \u53CD\u5C04\u4E2D\u5982\u4F55\u5904\u7406 <code>Kotlin</code> \u4EE3\u7801\uFF09\u3002</p></li></ol><p><code>Kotlin</code> \u53CD\u5C04\uFF1A</p><ol><li><p>\u4F18\u70B9\uFF1A\u652F\u6301\u8BBF\u95EE <code>Kotlin</code> \u51E0\u4E4E\u6240\u6709\u7279\u6027\uFF0C<code>API</code> \u8BBE\u8BA1\u66F4\u53CB\u597D\u3002</p></li><li><p>\u7F3A\u70B9\uFF1A\u9700\u8981\u989D\u5916\u5F15\u5165 <code>Kotlin</code> \u53CD\u5C04\u4F9D\u8D56\u5E93\uFF08<code>2.5M</code>\uFF0C\u7F16\u8BD1\u540E <code>400K</code>\uFF09\uFF0C\u9996\u6B21\u8C03\u7528\u8F83\u6162\uFF08\u9700\u8981\u89E3\u6790\u6CE8\u89E3 <code>@MetaData</code> \u4E2D\u4FDD\u5B58\u7684\u53CD\u5C04\u4FE1\u606F\uFF09\u3002</p></li></ol><h2 id="_7-\u53CD\u5C04\u7684\u4F7F\u7528\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_7-\u53CD\u5C04\u7684\u4F7F\u7528\u4E3E\u4F8B" aria-hidden="true">#</a> 7. \u53CD\u5C04\u7684\u4F7F\u7528\u4E3E\u4F8B</h2><h3 id="_7-1-\u901A\u8FC7-\u7C7B\u540D-class-\u83B7\u53D6-kclass-\u901A\u8FC7-kclass-\u83B7\u53D6\u7A0B\u5E8F\u7ED3\u6784\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_7-1-\u901A\u8FC7-\u7C7B\u540D-class-\u83B7\u53D6-kclass-\u901A\u8FC7-kclass-\u83B7\u53D6\u7A0B\u5E8F\u7ED3\u6784\u4FE1\u606F" aria-hidden="true">#</a> 7.1 \u901A\u8FC7 &quot;<code>\u7C7B\u540D::class</code>&quot; \u83B7\u53D6 <code>KClass</code> &amp; \u901A\u8FC7 <code>KClass</code> \u83B7\u53D6\u7A0B\u5E8F\u7ED3\u6784\u4FE1\u606F</h3><p>\u901A\u8FC7 <code>\u7C7B\u540D::class</code> \u53EF\u4EE5\u83B7\u53D6\u5230 <code>Kotlin</code> \u7C7B\u7684 <code>KClass</code> \u5B9E\u4F8B\u3002</p><p><code>KClass</code> \u7C7B\u4E2D\u63D0\u4F9B\u4E86\u5927\u91CF <code>API</code> \u6765\u8BBF\u95EE\u7C7B\u7684\u7A0B\u5E8F\u7ED3\u6784\u4FE1\u606F\uFF08\u5982\u5C5E\u6027\uFF0C\u65B9\u6CD5\uFF0C\u5185\u90E8\u7C7B\uFF0C\u7B49\u7B49\uFF09\u3002</p><p><img src="'+o+'" alt="" loading="lazy"></p><h3 id="_7-2-\u901A\u8FC7-typeof-\u83B7\u53D6-ktype-\u901A\u8FC7-ktype-\u83B7\u53D6\u6CDB\u578B\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_7-2-\u901A\u8FC7-typeof-\u83B7\u53D6-ktype-\u901A\u8FC7-ktype-\u83B7\u53D6\u6CDB\u578B\u4FE1\u606F" aria-hidden="true">#</a> 7.2 \u901A\u8FC7 <code>typeOf</code> \u83B7\u53D6 <code>KType</code> &amp; \u901A\u8FC7 <code>KType</code> \u83B7\u53D6\u6CDB\u578B\u4FE1\u606F</h3><p>\u901A\u8FC7 <code>Kotlin</code> \u53CD\u5C04\u4F9D\u8D56\u5E93\u63D0\u4F9B\u7684\u5168\u5C40\u51FD <code>typeOf</code> \u83B7\u53D6\u6CDB\u578B\u7C7B\u578B\u7684\u76F8\u5173\u4FE1\u606F\u3002</p><p><img src="'+t+'" alt="" loading="lazy"></p><h3 id="_7-3-\u83B7\u53D6\u7C7B\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u4E0A\u7684\u6CDB\u578B\u5B9E\u53C2" tabindex="-1"><a class="header-anchor" href="#_7-3-\u83B7\u53D6\u7C7B\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u4E0A\u7684\u6CDB\u578B\u5B9E\u53C2" aria-hidden="true">#</a> 7.3 \u83B7\u53D6\u7C7B\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u4E0A\u7684\u6CDB\u578B\u5B9E\u53C2</h3><p><img src="'+c+'" alt="" loading="lazy"></p><h3 id="_7-4-\u83B7\u53D6\u7236\u7C7B\u7C7B\u578B\u4E0A\u7684\u6CDB\u578B\u5B9E\u53C2" tabindex="-1"><a class="header-anchor" href="#_7-4-\u83B7\u53D6\u7236\u7C7B\u7C7B\u578B\u4E0A\u7684\u6CDB\u578B\u5B9E\u53C2" aria-hidden="true">#</a> 7.4 \u83B7\u53D6\u7236\u7C7B\u7C7B\u578B\u4E0A\u7684\u6CDB\u578B\u5B9E\u53C2</h3><p><img src="'+r+'" alt="" loading="lazy"></p><h3 id="_7-5-\u901A\u8FC7\u53CD\u5C04\u83B7\u53D6\u6CDB\u578B\u5B9E\u53C2\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_7-5-\u901A\u8FC7\u53CD\u5C04\u83B7\u53D6\u6CDB\u578B\u5B9E\u53C2\u7684\u539F\u7406" aria-hidden="true">#</a> 7.5 \u901A\u8FC7\u53CD\u5C04\u83B7\u53D6\u6CDB\u578B\u5B9E\u53C2\u7684\u539F\u7406</h3><p><code>Kotlin</code> \u4E2D\u7684\u6CDB\u578B\u662F <strong>\u4F2A\u6CDB\u578B</strong>\uFF0C\u5373\u7ECF\u8FC7\u7F16\u8BD1\u540E\u7684\u7C7B\u578B\u4E0A\u5C31\u4E0D\u4F1A\u5E26\u6CDB\u578B\u4E86\u3002</p><p>\u4F46\u662F\u4E3A\u4EC0\u4E48\u901A\u8FC7 <code>KType</code> \u5B9E\u4F8B\u8FD8\u80FD\u591F\u62FF\u5230\u7C7B\u578B\u7684\u6CDB\u578B\u4FE1\u606F\u5462\uFF1F</p><p>\u8FD9\u662F\u56E0\u4E3A <code>Kotlin</code> \u4EE3\u7801\u7ECF\u8FC7\u7F16\u8BD1\u540E\u4F1A\u4E3A\u64E6\u9664\u6389\u7684\u6CDB\u578B\u751F\u6210\u4E00\u4E2A\u7B7E\u540D\u4FE1\u606F\uFF08\u5982\u4E0B\u56FE\u7684 <code>Kotlin</code> \u5B57\u8282\u7801\u4E2D\u7684 <code>signature</code> \u6240\u793A\uFF09\uFF1A</p><p><img src="'+i+`" alt="" loading="lazy"></p><p>\u901A\u8FC7 <code>KType</code> \u5B9E\u4F8B\u83B7\u53D6\u5230\u7684\u6CDB\u578B\u4FE1\u606F\u5C31\u662F\u901A\u8FC7\u89E3\u6790 <code>signature</code> \u7B7E\u540D\u5F97\u5230\u7684\u3002</p><h3 id="_7-6-\u4FDD\u7559\u6CDB\u578B\u7B7E\u540D\u4FE1\u606F\u7684\u6DF7\u6DC6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_7-6-\u4FDD\u7559\u6CDB\u578B\u7B7E\u540D\u4FE1\u606F\u7684\u6DF7\u6DC6\u914D\u7F6E" aria-hidden="true">#</a> 7.6 \u4FDD\u7559\u6CDB\u578B\u7B7E\u540D\u4FE1\u606F\u7684\u6DF7\u6DC6\u914D\u7F6E</h3><p>\u5728\u6253\u5305\u6DF7\u6DC6\u65F6\uFF0C\u6CDB\u578B\u7684\u7B7E\u540D\u4FE1\u606F\u4F1A\u88AB\u6DF7\u6DC6\u3002</p><p>\u56E0\u6B64\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u901A\u8FC7 <code>KType</code> \u5B9E\u4F8B\u80FD\u591F\u83B7\u53D6\u5230\u6CDB\u578B\u4FE1\u606F\uFF0C\u5E94\u8BE5\u5728\u6DF7\u6DC6\u914D\u7F6E\u6587\u4EF6\u4E2D\u4FDD\u7559 <code>signature</code> \u7B7E\u540D\u4FE1\u606F\u4E0D\u88AB\u6DF7\u6DC6\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>//Proguard\u914D\u7F6E
-keepattributes Signature
</code></pre></div><h2 id="_8-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_8-\u6848\u4F8B" aria-hidden="true">#</a> 8. \u6848\u4F8B</h2><h3 id="_8-1-\u6570\u636E\u7C7B\u7684\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#_8-1-\u6570\u636E\u7C7B\u7684\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> 8.1 \u6570\u636E\u7C7B\u7684\u6DF1\u62F7\u8D1D</h3><h4 id="_8-1-1-\u76F8\u5173\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#_8-1-1-\u76F8\u5173\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> 8.1.1 \u76F8\u5173\u77E5\u8BC6\u70B9</h4><h5 id="_8-1-1-1-\u53CD\u5C04\u83B7\u53D6\u7C7B\u7684\u4E3B\u6784\u9020\u5668" tabindex="-1"><a class="header-anchor" href="#_8-1-1-1-\u53CD\u5C04\u83B7\u53D6\u7C7B\u7684\u4E3B\u6784\u9020\u5668" aria-hidden="true">#</a> 8.1.1.1 \u53CD\u5C04\u83B7\u53D6\u7C7B\u7684\u4E3B\u6784\u9020\u5668</h5><h5 id="_8-1-1-2-\u53CD\u5C04\u83B7\u53D6\u51FD\u6570\u7684\u5F62\u53C2\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_8-1-1-2-\u53CD\u5C04\u83B7\u53D6\u51FD\u6570\u7684\u5F62\u53C2\u5217\u8868" aria-hidden="true">#</a> 8.1.1.2 \u53CD\u5C04\u83B7\u53D6\u51FD\u6570\u7684\u5F62\u53C2\u5217\u8868</h5><h5 id="_8-1-1-3-\u53CD\u5C04\u8C03\u7528\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_8-1-1-3-\u53CD\u5C04\u8C03\u7528\u51FD\u6570" aria-hidden="true">#</a> 8.1.1.3 \u53CD\u5C04\u8C03\u7528\u51FD\u6570</h5><h5 id="_8-1-1-4-\u53CD\u5C04\u83B7\u53D6\u5BF9\u8C61\u4E2D\u5C5E\u6027\u7684\u5C5E\u6027\u503C" tabindex="-1"><a class="header-anchor" href="#_8-1-1-4-\u53CD\u5C04\u83B7\u53D6\u5BF9\u8C61\u4E2D\u5C5E\u6027\u7684\u5C5E\u6027\u503C" aria-hidden="true">#</a> 8.1.1.4 \u53CD\u5C04\u83B7\u53D6\u5BF9\u8C61\u4E2D\u5C5E\u6027\u7684\u5C5E\u6027\u503C</h5><h4 id="_8-1-2-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_8-1-2-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 8.1.2 \u4EE3\u7801\u5B9E\u73B0</h4><p><img src="`+s+'" alt="" loading="lazy"></p><h3 id="_8-2-model-\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#_8-2-model-\u6620\u5C04" aria-hidden="true">#</a> 8.2 <code>Model</code> \u6620\u5C04</h3><p>\u9700\u6C42\uFF1A\u5B9E\u73B0\u5177\u6709\u76F8\u540C\u5C5E\u6027\u5217\u8868\u7684\u4E0D\u540C\u6570\u636E\u7C7B\u4E4B\u95F4\u7684\u8F6C\u6362\u3002</p><h4 id="_8-2-1-\u76F8\u5173\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#_8-2-1-\u76F8\u5173\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> 8.2.1 \u76F8\u5173\u77E5\u8BC6\u70B9</h4><h5 id="_8-2-1-1-\u5224\u65AD\u7C7B\u578B\u662F\u5426\u4E3A\u53EF\u7A7A\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_8-2-1-1-\u5224\u65AD\u7C7B\u578B\u662F\u5426\u4E3A\u53EF\u7A7A\u7C7B\u578B" aria-hidden="true">#</a> 8.2.1.1 \u5224\u65AD\u7C7B\u578B\u662F\u5426\u4E3A\u53EF\u7A7A\u7C7B\u578B</h5><h4 id="_8-2-2-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_8-2-2-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 8.2.2 \u4EE3\u7801\u5B9E\u73B0</h4><p><img src="'+n+'" alt="" loading="lazy"></p><h3 id="_8-3-\u901A\u8FC7\u5C5E\u6027\u4EE3\u7406\u5B9E\u73B0\u5BF9\u4E0D\u53EF\u7A7A\u7C7B\u578B\u5C5E\u6027\u7684\u8D44\u6E90\u91CA\u653E" tabindex="-1"><a class="header-anchor" href="#_8-3-\u901A\u8FC7\u5C5E\u6027\u4EE3\u7406\u5B9E\u73B0\u5BF9\u4E0D\u53EF\u7A7A\u7C7B\u578B\u5C5E\u6027\u7684\u8D44\u6E90\u91CA\u653E" aria-hidden="true">#</a> 8.3 \u901A\u8FC7\u5C5E\u6027\u4EE3\u7406\u5B9E\u73B0\u5BF9\u4E0D\u53EF\u7A7A\u7C7B\u578B\u5C5E\u6027\u7684\u8D44\u6E90\u91CA\u653E</h3><h4 id="_8-3-1-\u76F8\u5173\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#_8-3-1-\u76F8\u5173\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> 8.3.1 \u76F8\u5173\u77E5\u8BC6\u70B9</h4><h5 id="_8-3-1-1-\u83B7\u53D6\u5C5E\u6027\u4EE3\u7406-kproperty-getdelegate" tabindex="-1"><a class="header-anchor" href="#_8-3-1-1-\u83B7\u53D6\u5C5E\u6027\u4EE3\u7406-kproperty-getdelegate" aria-hidden="true">#</a> 8.3.1.1 \u83B7\u53D6\u5C5E\u6027\u4EE3\u7406\uFF08<code>KProperty.getDelegate()</code>\uFF09</h5><p>\u8C03\u7528 <code>KProperty</code> \u7C7B\u7684 <code>getDelegate()</code> \u65B9\u6CD5\u83B7\u53D6\u5C5E\u6027\u4EE3\u7406\u5B9E\u4F8B\u3002</p><h5 id="_8-3-1-2-\u963B\u6B62\u5C5E\u6027\u7684\u8BBF\u95EE\u6743\u9650\u68C0\u67E5-isaccessible-true" tabindex="-1"><a class="header-anchor" href="#_8-3-1-2-\u963B\u6B62\u5C5E\u6027\u7684\u8BBF\u95EE\u6743\u9650\u68C0\u67E5-isaccessible-true" aria-hidden="true">#</a> 8.3.1.2 \u963B\u6B62\u5C5E\u6027\u7684\u8BBF\u95EE\u6743\u9650\u68C0\u67E5\uFF08<code>isAccessible = true</code>\uFF09</h5><p>\u8C03\u7528 <code>getDelegate</code> \u65B9\u6CD5\u4E4B\u524D\uFF0C\u9700\u8981\u8BBE\u7F6E <code>isAccessible = true</code>\uFF0C\u8868\u793A\u963B\u6B62\u5C5E\u6027\u7684\u8BBF\u95EE\u6743\u9650\u68C0\u67E5\u3002</p><h4 id="_8-3-2-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_8-3-2-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 8.3.2 \u4EE3\u7801\u5B9E\u73B0</h4><p><img src="'+h+'" alt="" loading="lazy"></p>',76);function _(g,f){return p}var x=e(l,[["render",_],["__file","8-reflection.html.vue"]]);export{x as default};