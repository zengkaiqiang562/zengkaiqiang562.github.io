import{_ as l,o as p,c as a,a as o,b as i,w as t,F as r,e as c,d as e,r as n}from"./app.625aa393.js";var s="/assets/01.f01d18ec.png",h="/assets/02.18a135a5.png",u="/assets/03.c804a99a.png",b="/assets/04.bfaf1b01.png";const k={},_=c('<h2 id="_1-java-\u5185\u5B58\u6A21\u578B-jmm" tabindex="-1"><a class="header-anchor" href="#_1-java-\u5185\u5B58\u6A21\u578B-jmm" aria-hidden="true">#</a> 1. <code>Java</code> \u5185\u5B58\u6A21\u578B\uFF08<code>JMM</code>\uFF09</h2><p><code>JCP</code> \u5B9A\u4E49\u4E86\u4E00\u79CD <code>Java</code> \u5185\u5B58\u6A21\u578B\uFF0C\u4EE5\u524D\u662F\u5728 <code>JVM</code> \u89C4\u8303\u4E2D\u7684\uFF0C\u540E\u6765\u72EC\u7ACB\u51FA\u6765\u6210\u4E3A <code>JSR-133</code>\uFF08<code>Java</code> \u5185\u5B58\u6A21\u578B\u548C\u7EBF\u7A0B\u89C4\u8303\u4FEE\u8BA2\uFF09\u3002</p><blockquote><p><code>JCP</code> \u8868\u793A <code>Java</code> \u793E\u533A\u7EC4\u7EC7\u3002</p><p><code>JSR</code> \u8868\u793A <code>Java</code> \u89C4\u8303\u8BF7\u6C42\u3002</p></blockquote><p><code>Java</code> \u5185\u5B58\u6A21\u578B\uFF08<code>JMM</code>\uFF09\u5C31\u662F\uFF1A\u5728\u7279\u70B9\u7684\u64CD\u4F5C\u534F\u8BAE\u4E0B\uFF0C\u5BF9\u7279\u5B9A\u7684\u5185\u5B58\u6216\u9AD8\u901F\u7F13\u5B58\u8FDB\u884C\u8BFB\u5199\u8BBF\u95EE\u7684\u8FC7\u7A0B\u62BD\u8C61\u3002</p><blockquote><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C<code>Java</code> \u5185\u5B58\u6A21\u578B\u89C4\u5B9A\u4E86\uFF1A\u600E\u4E48\u6837\u8DDF\u5185\u5B58\u8FDB\u884C\u4EA4\u4E92\uFF08\u6216\u8005\u8BF4\u600E\u4E48\u6837\u8BFB\u5199\u5185\u5B58\uFF09\u3002</p></blockquote><p><code>Java</code> \u5185\u5B58\u6A21\u578B\u7684\u8BF4\u660E\uFF1A</p><ol><li><p><code>Java</code> \u5185\u5B58\u6A21\u578B\u4E3B\u8981\u5173\u6CE8 <code>JVM</code> \u4E2D\uFF0C\u628A\u53D8\u91CF\u503C\u5B58\u50A8\u5230\u5185\u5B58\uFF0C\u548C\u4ECE\u5185\u5B58\u4E2D\u53D6\u51FA\u53D8\u91CF\u503C\uFF0C\u8FD9\u6837\u7684\u5E95\u5C42\u7EC6\u8282\u3002</p><blockquote><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5BF9\u8C61\u5728\u5806\u5185\u5B58\u4E2D\u7684\u5B58\u53D6\u8FC7\u7A0B\uFF0C\u662F <code>Java</code> \u5185\u5B58\u6A21\u578B\u6765\u89C4\u5B9A\u7684\u3002</p></blockquote></li><li><p>\u6240\u6709\u5171\u4EAB\u7684\u53D8\u91CF\u90FD\u5B58\u50A8\u5728\u4E3B\u5185\u5B58\u4E2D\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u6709\u81EA\u5DF1\u7684\u5DE5\u4F5C\u5185\u5B58\u3002</p><p><img src="'+s+'" alt="" loading="lazy"></p></li><li><p><strong>\u7EBF\u7A0B\u7684\u5DE5\u4F5C\u5185\u5B58\u4E2D\u4FDD\u5B58\u8BE5\u7EBF\u7A0B\u6240\u4F7F\u7528\u5230\u7684\u4E3B\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u7684\u526F\u672C\u62F7\u8D1D</strong>\u3002</p><blockquote><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u8981\u64CD\u4F5C\u4E3B\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u65F6\uFF0C\u5148\u628A\u8FD9\u4E2A\u53D8\u91CF\u62F7\u8D1D\u5230\u7EBF\u7A0B\u81EA\u5DF1\u7684\u5DE5\u4F5C\u5185\u5B58\u4E2D\uFF0C\u7EBF\u7A0B\u53EA\u80FD\u64CD\u4F5C\u62F7\u8D1D\u5230\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u526F\u672C\u3002</p></blockquote></li><li><p>\u7EBF\u7A0B\u5BF9\u53D8\u91CF\u7684\u6240\u6709\u64CD\u4F5C\uFF08\u8BFB\u3001\u5199\uFF09\u90FD\u5E94\u8BE5\u5728\u5DE5\u4F5C\u5185\u5B58\u4E2D\u5B8C\u6210\u3002</p></li><li><p>\u4E0D\u540C\u7EBF\u7A0B\u4E0D\u80FD\u76F8\u4E92\u8BBF\u95EE\u5DE5\u4F5C\u5185\u5B58\uFF0C\u4EA4\u4E92\u6570\u636E\u8981\u901A\u8FC7\u4E3B\u5185\u5B58\u3002</p></li></ol><h2 id="_2-\u5185\u5B58\u95F4\u7684\u4EA4\u4E92\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-\u5185\u5B58\u95F4\u7684\u4EA4\u4E92\u64CD\u4F5C" aria-hidden="true">#</a> 2. \u5185\u5B58\u95F4\u7684\u4EA4\u4E92\u64CD\u4F5C</h2><p><code>Java</code> \u5185\u5B58\u6A21\u578B\u89C4\u5B9A\u4E86\u4E00\u4E9B\u64CD\u4F5C\u6765\u5B9E\u73B0\u5185\u5B58\u95F4\u7684\u4EA4\u4E92\uFF0C<code>JVM</code> \u4F1A\u4FDD\u8BC1 <strong>\u8FD9\u4E9B\u64CD\u4F5C\u90FD\u662F\u539F\u5B50\u7684</strong>\u3002</p><blockquote><p>\u5B9E\u73B0\u5185\u5B58\u95F4\u4EA4\u4E92\u7684\u8FD9\u4E9B\u64CD\u4F5C\u5C31\u662F\u7528\u6765\u5904\u7406\u4E00\u4E2A\u53D8\u91CF\u5982\u4F55\u4ECE\u4E3B\u5185\u5B58\u62F7\u8D1D\u5230\u5DE5\u4F5C\u5185\u5B58\uFF0C\u53C8\u5982\u4F55\u4ECE\u5DE5\u4F5C\u5185\u5B58\u540C\u6B65\u5230\u4E3B\u5185\u5B58\uFF0C\u8FD9\u6837\u7684\u5DE5\u4F5C\u7EC6\u8282\u3002</p><p><code>JVM</code> \u4F1A\u4FDD\u8BC1\u8FD9\u4E9B\u64CD\u4F5C\u662F\u539F\u5B50\u64CD\u4F5C\u3002\u5728\u6BCF\u9879\u64CD\u4F5C\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u4F1A\u53D7\u5230\u5176\u4ED6\u64CD\u4F5C\u7684\u5E72\u6270\uFF0C\u4E5F\u4E0D\u4F1A\u518D\u63D2\u5165\u5176\u4ED6\u64CD\u4F5C\u3002</p></blockquote><p><img src="'+h+'" alt="" loading="lazy"></p><p>\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u5185\u5B58\u95F4\u7684\u4EA4\u4E92\u64CD\u4F5C\u6709\uFF1A</p><ol><li><p><code>lock</code>\uFF1A\u9501\u5B9A\u3002\u628A\u53D8\u91CF\u6807\u8BC6\u4E3A\u7EBF\u7A0B\u72EC\u5360\u3002\u8BE5\u64CD\u4F5C\u4F5C\u7528\u4E8E\u4E3B\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u3002</p></li><li><p><code>unlock</code>\uFF1A\u89E3\u9501\u3002\u628A\u9501\u5B9A\u7684\u53D8\u91CF\u91CA\u653E\u3002\u89E3\u9501\u540E\u7684\u53D8\u91CF\u624D\u80FD\u88AB\u522B\u7684\u7EBF\u7A0B\u4F7F\u7528\u3002\u8BE5\u64CD\u4F5C\u4F5C\u7528\u4E8E\u4E3B\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u3002</p></li><li><p><code>read</code>\uFF1A\u8BFB\u53D6\u3002\u628A\u4E3B\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u503C\uFF0C\u8BFB\u53D6\u5230\u5DE5\u4F5C\u5185\u5B58\u4E2D\u3002</p><blockquote><p><code>read</code> \u64CD\u4F5C\u53EA\u80FD\u5C06\u53D8\u91CF\u503C\u8BFB\u53D6\u5230\u5DE5\u4F5C\u5185\u5B58\u4E2D\uFF0C\u6B64\u65F6\uFF0C\u5E76\u6CA1\u6709\u4FDD\u5B58\u5230\u5DE5\u4F5C\u5185\u5B58\u7684\u53D8\u91CF\u4E2D\u3002</p><p><code>load</code> \u64CD\u4F5C\u624D\u662F\u5C06 <code>read</code> \u64CD\u4F5C\u8BFB\u5230\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u503C\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u5185\u5B58\u7684\u53D8\u91CF\u4E2D\u3002</p></blockquote></li><li><p><code>load</code>\uFF1A\u8F7D\u5165\u3002\u628A <code>read</code> \u8BFB\u53D6\u5230\u7684\u53D8\u91CF\u503C\u653E\u5165\u5DE5\u4F5C\u5185\u5B58\u7684\u53D8\u91CF\u526F\u672C\u4E2D\u3002</p></li><li><p><code>use</code>\uFF1A\u4F7F\u7528\u3002\u628A\u5DE5\u4F5C\u5185\u5B58\u4E2D\u4E00\u4E2A\u53D8\u91CF\u7684\u503C\u4F20\u9012\u7ED9\u6267\u884C\u5F15\u64CE\u3002</p><blockquote><p>\u8FD9\u91CC\u7684\u6267\u884C\u5F15\u64CE\u53EF\u4EE5\u7406\u89E3\u4E3A\u5B57\u8282\u7801\u6267\u884C\u5F15\u64CE\u3002</p><p><code>use</code> \u64CD\u4F5C\u540E\uFF0C\u5C31\u53EF\u4EE5\u5728\u6267\u884C\u5B57\u8282\u7801\u6307\u4EE4\u65F6\u4F7F\u7528\u8BE5\u53D8\u91CF\u503C\u4E86\u3002</p></blockquote></li><li><p><code>assign</code>\uFF1A\u8D4B\u503C\u3002\u628A\u4ECE\u6267\u884C\u5F15\u64CE\u4E2D\u63A5\u6536\u5230\u7684\u503C\u8D4B\u7ED9\u5DE5\u4F5C\u5185\u5B58\u91CC\u9762\u7684\u53D8\u91CF\u3002</p><blockquote><p>\u901A\u8FC7 <code>assign</code> \u64CD\u4F5C\uFF0C\u628A\u5728\u6267\u884C\u5B57\u8282\u7801\u6307\u4EE4\u65F6\u88AB\u4FEE\u6539\u7684\u53D8\u91CF\u503C\u4FDD\u5B58\u5230\u5DE5\u4F5C\u5185\u5B58\u7684\u53D8\u91CF\u4E2D\u3002</p></blockquote></li><li><p><code>store</code>\uFF1A\u5B58\u50A8\u3002\u628A\u5DE5\u4F5C\u5185\u5B58\u4E2D\u4E00\u4E2A\u53D8\u91CF\u7684\u503C\u4F20\u9012\u5230\u4E3B\u5185\u5B58\u4E2D\u3002</p><blockquote><p>\u6B64\u65F6\u8FD8\u6CA1\u6709\u4FDD\u5B58\u5230\u4E3B\u5185\u5B58\u7684\u53D8\u91CF\u4E2D\u3002</p></blockquote></li><li><p><code>write</code>\uFF1A\u5199\u5165\u3002\u628A <code>store</code> \u8FDB\u6765\u7684\u6570\u636E\u5B58\u653E\u5165\u4E3B\u5185\u5B58\u7684\u53D8\u91CF\u4E2D\u3002</p></li></ol><h3 id="_2-1-\u5185\u5B58\u95F4\u4EA4\u4E92\u64CD\u4F5C\u7684\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5185\u5B58\u95F4\u4EA4\u4E92\u64CD\u4F5C\u7684\u89C4\u5219" aria-hidden="true">#</a> 2.1 \u5185\u5B58\u95F4\u4EA4\u4E92\u64CD\u4F5C\u7684\u89C4\u5219</h3><p>\u5185\u5B58\u95F4\u4EA4\u4E92\u64CD\u4F5C\u7684\u89C4\u5219\u5982\u4E0B\uFF1A</p><ol><li><p><code>read</code> / <code>load</code>\uFF08\u4EE5\u53CA <code>store</code> / <code>write</code>\uFF09\u5FC5\u987B\u7EC4\u5408\u4F7F\u7528\uFF0C\u4E0D\u80FD\u5355\u72EC\u51FA\u73B0\u3002<code>read</code> / <code>load</code>\uFF08\u4EE5\u53CA <code>store</code> / <code>write</code>\uFF09\u5FC5\u987B\u6309\u987A\u5E8F\u6267\u884C\uFF0C\u4F46\u4E0D\u4FDD\u8BC1\u662F\u8FDE\u7EED\u6267\u884C\u7684\uFF0C\u5373 <code>read</code> \u548C <code>load</code>\uFF08<code>store</code> \u548C <code>load</code>\uFF09 \u4E4B\u95F4\u662F\u53EF\u63D2\u5165\u5176\u4ED6\u6307\u4EE4\u7684\u3002</p></li><li><p>\u4E0D\u5141\u8BB8\u4E00\u4E2A\u7EBF\u7A0B\u4E22\u5F03\u5B83\u7684\u6700\u8FD1\u7684 <code>assign</code> \u64CD\u4F5C\uFF0C\u5373\u53D8\u91CF\u5728\u5DE5\u4F5C\u5185\u5B58\u4E2D\u6539\u53D8\u4E86\u4E4B\u540E\uFF0C\u5FC5\u987B\u628A\u53D8\u5316\u540E\u7684\u503C\u540C\u6B65\u56DE\u4E3B\u5185\u5B58\u3002</p><blockquote><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53D8\u91CF\u5728\u5B57\u8282\u7801\u6267\u884C\u5F15\u64CE\u4E2D\u88AB\u4FEE\u6539\u540E\uFF0C\u5FC5\u987B\u628A\u4FEE\u6539\u540E\u7684\u53D8\u91CF\u503C\u540C\u6B65\u5230\u4E3B\u5185\u5B58\u4E2D\u3002</p><p>\u5982\u679C\u6CA1\u6709\u540C\u6B65\u5230\u4E3B\u5185\u5B58\uFF0C\u90A3\u4E48\u5176\u5B83\u7EBF\u7A0B\u7684\u5DE5\u4F5C\u5185\u5B58\u8BBF\u95EE\u4E3B\u5185\u5B58\u65F6\uFF0C\u5F97\u5230\u7684\u8FD8\u662F\u672A\u88AB\u4FEE\u6539\u524D\u7684\u503C\u3002</p><p>\u4ECE\u800C\u56E0\u6570\u636E\u4E0D\u540C\u6B65\u53EF\u80FD\u4F7F\u5F97\u540E\u7EED\u5176\u5B83\u7EBF\u7A0B\u4E2D\u6267\u884C\u7684\u6307\u4EE4\u51FA\u9519\u3002</p></blockquote></li><li><p>\u4E0D\u5141\u8BB8\u4E00\u4E2A\u7EBF\u7A0B\u65E0\u539F\u56E0\u5730\uFF08\u6CA1\u6709\u53D1\u751F\u8FC7\u4EFB\u4F55 <code>assign</code> \u64CD\u4F5C\uFF09\u628A\u6570\u636E\u4ECE\u7EBF\u7A0B\u7684\u5DE5\u4F5C\u5185\u5B58\u540C\u6B65\u56DE\u4E3B\u5185\u5B58\u4E2D\u3002</p><blockquote><p>\u5373\uFF0C\u5982\u679C\u62F7\u8D1D\u5230\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u503C\u6CA1\u6709\u88AB\u4FEE\u6539\u8FC7\uFF0C\u90A3\u4E48\u662F\u6CA1\u5FC5\u8981\u5C06\u672A\u4FEE\u6539\u7684\u53D8\u91CF\u503C\u540C\u6B65\u56DE\u4E3B\u5185\u5B58\u7684\u3002</p></blockquote></li><li><p>\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF\u53EA\u80FD\u4ECE\u4E3B\u5185\u5B58\u4E2D \u201C\u8BDE\u751F\u201D\uFF0C\u4E0D\u5141\u8BB8\u5728\u5DE5\u4F5C\u5185\u5B58\u4E2D\u76F4\u63A5\u4F7F\u7528\u4E00\u4E2A\u672A\u88AB\u521D\u59CB\u5316\u7684\u53D8\u91CF\u3002\u4E5F\u5C31\u662F\u5BF9\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5728\u6267\u884C <code>use</code> \u64CD\u4F5C\u524D\uFF0C\u5FC5\u987B\u5148\u6267\u884C\u4E86 <code>load</code> \u64CD\u4F5C\uFF1B\u5728\u6267\u884C <code>store</code> \u64CD\u4F5C\u524D\uFF0C\u5FC5\u987B\u5148\u6267\u884C <code>assign</code> \u64CD\u4F5C\u3002</p><blockquote><p>\u8FD9\u91CC\u8BF4\u7684\u53D8\u91CF\u7279\u6307\u4F1A\u88AB\u591A\u4E2A\u7EBF\u7A0B\u5171\u4EAB\u7684\u53D8\u91CF\u3002</p><p>\u5BF9\u4E8E\u7EBF\u7A0B\u4E2D\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u56E0\u4E3A\u4E0D\u4F1A\u88AB\u5176\u4ED6\u7EBF\u7A0B\u8BBF\u95EE\u5230\uFF0C\u6240\u4EE5\u5C40\u90E8\u53D8\u91CF\u662F\u53EF\u4EE5\u5728\u7EBF\u7A0B\u7684\u5DE5\u4F5C\u5185\u5B58\u4E2D \u201C\u8BDE\u751F\u201D \u7684\u3002</p></blockquote></li><li><p>\u5728\u540C\u4E00\u65F6\u523B\uFF0C\u4E00\u4E2A\u53D8\u91CF\u53EA\u5141\u8BB8\u4E00\u6761\u7EBF\u7A0B\u5BF9\u5176\u6267\u884C <code>lock</code> \u64CD\u4F5C\uFF0C\u4F46 <code>lock</code> \u64CD\u4F5C\u53EF\u4EE5\u88AB\u540C\u4E00\u6761\u7EBF\u7A0B\u91CD\u590D\u6267\u884C\u591A\u6B21\u3002\u591A\u6B21\u6267\u884C <code>lock</code> \u540E\uFF0C\u53EA\u6709\u6267\u884C\u76F8\u540C\u6B21\u6570\u7684 <code>unlock</code> \u64CD\u4F5C\uFF0C\u53D8\u91CF\u624D\u4F1A\u88AB\u89E3\u9501\u3002</p></li><li><p>\u5BF9\u4E00\u4E2A\u53D8\u91CF\u6267\u884C <code>lock</code> \u64CD\u4F5C\uFF0C\u5C06\u4F1A\u6E05\u7A7A\u6B64\u53D8\u91CF\u5728\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u503C\u3002\u6B64\u65F6\uFF0C\u5728\u6267\u884C\u5F15\u64CE\u4F7F\u7528\u8FD9\u4E2A\u53D8\u91CF\u524D\uFF0C\u9700\u8981\u91CD\u65B0\u6267\u884C <code>load</code> \u6216 <code>assign</code> \u64CD\u4F5C\u521D\u59CB\u5316\u53D8\u91CF\u7684\u503C\u3002</p><blockquote><p><code>lock</code> \u64CD\u4F5C\u4F5C\u7528\u4E8E\u4E3B\u5185\u5B58\u53D8\u91CF\uFF0C\u5F53\u5BF9\u4E3B\u5185\u5B58\u53D8\u91CF\u8FDB\u884C <code>lock</code> \u64CD\u4F5C\u65F6\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\uFF1A\u9700\u8981\u91CD\u65B0\u4F7F\u7528\u8BE5\u4E3B\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u4E86\u3002</p><p>\u6B64\u65F6\uFF0C\u4E4B\u524D\u5728\u5DE5\u4F5C\u5185\u5B58\u4E2D\u5BF9\u5E94\u7684\u53D8\u91CF\u526F\u672C\u4E2D\u4FDD\u5B58\u7684\u503C\u5C31\u5E94\u8BE5\u88AB\u6E05\u9664\u6389\u3002</p><p>\u7136\u540E\u901A\u8FC7 <code>load</code> \u64CD\u4F5C\u91CD\u65B0\u521D\u59CB\u5316\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u526F\u672C\u3002</p><p>\u6216\u8005\uFF0C\u5982\u679C\u4E4B\u524D\u6267\u884C\u5F15\u64CE\u4F7F\u7528\u8FC7\u8BE5\u53D8\u91CF\uFF0C\u90A3\u4E48\u6267\u884C\u5F15\u64CE\u4E2D\u7684\u53D8\u91CF\u503C\u80AF\u5B9A\u662F\u6700\u65B0\u7684\u3002\u4E8E\u662F\uFF0C\u4E5F\u53EF\u4EE5\u6267\u884C <code>assign</code> \u64CD\u4F5C\u6765\u521D\u59CB\u5316\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u526F\u672C\u3002</p></blockquote></li><li><p>\u5982\u679C\u4E00\u4E2A\u53D8\u91CF\u6CA1\u6709\u88AB <code>lock</code> \u64CD\u4F5C\u9501\u5B9A\uFF0C\u5219\u4E0D\u5141\u8BB8\u5BF9\u8BE5\u53D8\u91CF\u6267\u884C <code>unlock</code> \u64CD\u4F5C\uFF0C\u4E5F\u4E0D\u80FD <code>unlock</code> \u4E00\u4E2A\u88AB\u5176\u5B83\u7EBF\u7A0B\u9501\u5B9A\u7684\u53D8\u91CF\u3002</p></li><li><p>\u5BF9\u4E00\u4E2A\u53D8\u91CF\u6267\u884C <code>unlock</code> \u64CD\u4F5C\u524D\uFF0C\u5FC5\u987B\u5148\u628A\u6B64\u53D8\u91CF\u540C\u6B65\u56DE\u4E3B\u5185\u5B58\uFF0C\u5373\u5148\u6267\u884C <code>store</code> \u548C <code>write</code> \u64CD\u4F5C\u3002</p></li></ol><h2 id="_3-\u591A\u7EBF\u7A0B\u4E2D\u7684\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#_3-\u591A\u7EBF\u7A0B\u4E2D\u7684\u53EF\u89C1\u6027" aria-hidden="true">#</a> 3. \u591A\u7EBF\u7A0B\u4E2D\u7684\u53EF\u89C1\u6027</h2><p>\u53EF\u89C1\u6027\uFF1A\u5C31\u662F\u4E00\u4E2A\u7EBF\u7A0B\u4FEE\u6539\u4E86\u53D8\u91CF\uFF0C\u5176\u5B83\u7EBF\u7A0B\u53EF\u4EE5\u77E5\u9053\u3002</p><blockquote><p>\u201C\u5176\u5B83\u7EBF\u7A0B\u53EF\u4EE5\u77E5\u9053\u201D \u5C31\u662F\u6307\uFF1A\u5176\u5B83\u7EBF\u7A0B\u53EF\u4EE5\u8BBF\u95EE\u5230\u88AB\u8FD9\u4E2A\u7EBF\u7A0B\u4FEE\u6539\u4E86\u7684\u53D8\u91CF\u7684\u503C\u3002</p></blockquote><h3 id="_3-1-\u4FDD\u8BC1\u53EF\u89C1\u6027\u7684\u5E38\u89C1\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4FDD\u8BC1\u53EF\u89C1\u6027\u7684\u5E38\u89C1\u65B9\u6CD5" aria-hidden="true">#</a> 3.1 \u4FDD\u8BC1\u53EF\u89C1\u6027\u7684\u5E38\u89C1\u65B9\u6CD5</h3><p>\u4FDD\u8BC1\u53EF\u89C1\u6027\u7684\u5E38\u89C1\u65B9\u6CD5\u6709\uFF1A</p><ol><li><code>volatile</code>\uFF1B</li><li><code>synchronized</code>\uFF1B</li><li><code>final</code>\u3002\uFF08<code>final</code> \u4FEE\u9970\u7684\u53D8\u91CF\u4E00\u65E6\u521D\u59CB\u5316\u5B8C\u6210\uFF0C\u5176\u5B83\u7EBF\u7A0B\u5C31\u53EF\u89C1\u4E86\uFF09</li></ol><h2 id="_4-volatile" tabindex="-1"><a class="header-anchor" href="#_4-volatile" aria-hidden="true">#</a> 4. <code>volatile</code></h2><p><code>volatile</code> \u662F <code>JVM</code> \u63D0\u4F9B\u7684\u6700\u8F7B\u91CF\u7EA7\u7684\u540C\u6B65\u673A\u5236\uFF0C\u7528 <code>volatile</code> \u4FEE\u9970\u7684\u53D8\u91CF\uFF0C\u5BF9\u6240\u6709\u7684\u7EBF\u7A0B\u53EF\u89C1\u3002\u5373\uFF1A<strong>\u5BF9 <code>volatile</code> \u53D8\u91CF\u6240\u505A\u7684\u5199\u64CD\u4F5C\u80FD\u7ACB\u5373\u53CD\u6620\u5230\u5176\u5B83\u7EBF\u7A0B\u4E2D</strong>\u3002</p><p><code>volatile</code> \u7684\u8BF4\u660E\uFF1A</p><ol><li><p><code>volatile</code> \u4FEE\u9970\u7684\u53D8\u91CF\uFF0C\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u4ECD\u7136\u662F\u4E0D\u5B89\u5168\u7684\u3002</p><p><img src="'+u+'" alt="" loading="lazy"></p></li><li><p><code>volatile</code> \u4FEE\u9970\u7684\u53D8\u91CF\uFF0C\u662F <strong>\u7981\u6B62\u6307\u4EE4\u91CD\u6392\u4F18\u5316\u7684</strong>\u3002</p></li></ol><p><code>volatile</code> \u7684\u9002\u7528\u573A\u666F\uFF1A</p><ol><li>\u8FD0\u7B97\u7ED3\u679C\u4E0D\u4F9D\u8D56\u53D8\u91CF\u7684\u5F53\u524D\u503C\uFF1B</li><li>\u6216\u8005\u80FD\u786E\u4FDD\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u4FEE\u6539\u53D8\u91CF\u7684\u503C\u3002</li></ol><h2 id="_5-\u6307\u4EE4\u91CD\u6392" tabindex="-1"><a class="header-anchor" href="#_5-\u6307\u4EE4\u91CD\u6392" aria-hidden="true">#</a> 5. \u6307\u4EE4\u91CD\u6392</h2><p>\u6307\u4EE4\u91CD\u6392\uFF1A\u662F <code>JVM</code> \u4E3A\u4E86\u4F18\u5316\uFF0C\u5728\u6761\u4EF6\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u6307\u4EE4\u8FDB\u884C\u4E00\u5B9A\u7684\u91CD\u65B0\u6392\u5217\uFF0C\u4F7F\u5F97\u907F\u5F00\u83B7\u53D6\u4E0B\u4E00\u6761\u6307\u4EE4\u6240\u9700\u6570\u636E\u800C\u9020\u6210\u7684\u7B49\u5F85\uFF0C\u8FDB\u800C\u76F4\u63A5\u8FD0\u884C\u5F53\u524D\u80FD\u591F\u7ACB\u5373\u6267\u884C\u7684\u540E\u7EED\u6307\u4EE4\u3002</p><blockquote><p>\u5982\u4E00\u4E2A\u7EBF\u7A0B\u4E2D\u6709 <code>1</code>\uFF0C<code>2</code>\uFF0C<code>3</code> \u4E09\u6761\u5C06\u8981\u4F9D\u6B21\u6267\u884C\u7684\u6307\u4EE4\u3002</p><p>\u5F53\u6307\u4EE4 <code>2</code> \u9700\u8981\u82B1\u65F6\u95F4\u53BB\u83B7\u53D6\u6570\u636E\u65F6\uFF0C\u90A3\u4E48 <code>JVM</code> \u5C31\u4F1A\u5728\u80FD\u591F\u4FDD\u8BC1\u7A0B\u5E8F\u6B63\u5E38\u8FD0\u884C\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C06\u6307\u5411\u6267\u884C\u987A\u5E8F\u6539\u4E3A <code>1</code>\uFF0C<code>3</code>\uFF0C<code>2</code>\u3002</p><p>\u4ECE\u800C\u907F\u514D\u7531\u4E8E\u6307\u4EE4 <code>2</code> \u6240\u9700\u6570\u636E\u7684\u7B49\u5F85\u8017\u65F6\u6240\u9020\u6210\u7684\u540E\u7EED\u6307\u4EE4 <code>3</code> \u5EF6\u8FDF\u6267\u884C\u3002</p><p>\u8FD9\u79CD\u60C5\u51B5\u5C31\u79F0\u4E3A\u6307\u4EE4\u91CD\u6392\u3002</p></blockquote><p>\u6307\u4EE4\u91CD\u6392\u662F\u7EBF\u7A0B\u5185\u7684\u4E32\u884C\u8BED\u4E49\u3002\u4E0D\u8003\u8651\u591A\u7EBF\u7A0B\u95F4\u7684\u8BED\u4E49\u3002</p><blockquote><p>\u53EF\u4EE5\u7406\u89E3\u4E3A\uFF1A\u6307\u4EE4\u91CD\u6392\u53EA\u80FD\u5BF9\u4E00\u4E2A\u7EBF\u7A0B\u5185\u7684\u4E32\u884C\u6307\u4EE4\u8FDB\u884C\u91CD\u6392\u3002</p></blockquote><p>\u4E0D\u662F\u6240\u6709\u7684\u6307\u4EE4\u90FD\u80FD\u91CD\u6392\u7684\uFF0C\u6BD4\u5982\uFF1A</p><ol><li><p>\u5199\u540E\u8BFB\uFF1A<code>a=1; b=a;</code></p><blockquote><p>\u5199\u4E00\u4E2A\u53D8\u91CF\u4E4B\u540E\uFF0C\u518D\u8BFB\u8FD9\u4E2A\u53D8\u91CF\u3002</p></blockquote></li><li><p>\u5199\u540E\u5199\uFF1A<code>a=1; a=2;</code></p><blockquote><p>\u5199\u4E00\u4E2A\u53D8\u91CF\u4E4B\u540E\uFF0C\u518D\u5199\u8FD9\u4E2A\u53D8\u91CF\u3002</p></blockquote></li><li><p>\u8BFB\u540E\u5199\uFF1A<code>a=b; b=1;</code></p><blockquote><p>\u8BFB\u4E00\u4E2A\u53D8\u91CF\u4E4B\u540E\uFF0C\u518D\u5199\u8FD9\u4E2A\u53D8\u91CF\u3002</p></blockquote></li></ol><p>\u4EE5\u4E0A\u4E09\u79CD\u60C5\u51B5\u4E2D\u7684\u8BED\u53E5\u662F\u4E0D\u80FD\u91CD\u6392\u7684\u3002\u4F46\u662F <code>a=1; b=2;</code> \u8FD9\u79CD\u60C5\u51B5\u4E0B\u7684\u8BED\u53E5\u662F\u53EF\u4EE5\u91CD\u6392\u7684\u3002</p><h3 id="_5-1-\u6307\u4EE4\u91CD\u6392\u7684\u57FA\u672C\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_5-1-\u6307\u4EE4\u91CD\u6392\u7684\u57FA\u672C\u89C4\u5219" aria-hidden="true">#</a> 5.1 \u6307\u4EE4\u91CD\u6392\u7684\u57FA\u672C\u89C4\u5219</h3>',37),q=e("\u53C2\u8003 \u300A"),g=o("code",null,"Java",-1),v=e(" \u5185\u5B58\u6A21\u578B\uFF08"),f=o("code",null,"JMM",-1),J=e("\uFF09\u300B \u4E2D\u7684 "),m=o("code",null,"Happens-Before",-1),x=e(" \u89C4\u5219"),M=c('<p>\u6307\u4EE4\u91CD\u6392\u7684\u57FA\u672C\u89C4\u5219\u6709\uFF1A</p><ol><li><p>\u7A0B\u5E8F\u987A\u5E8F\u539F\u5219\uFF1A\u4E00\u4E2A\u7EBF\u7A0B\u5185\uFF0C\u4FDD\u8BC1\u8BED\u4E49\u7684\u4E32\u884C\u6027\u3002</p></li><li><p><code>volatile</code> \u89C4\u5219\uFF1A<code>volatile</code> \u53D8\u91CF\u7684\u5199\uFF0C\u5148\u53D1\u751F\u4E8E\u8BFB\u3002</p></li><li><p>\u9501\u89C4\u5219\uFF1A\u89E3\u9501\uFF08<code>unlock</code>\uFF09\u5FC5\u7136\u53D1\u751F\u5728\u968F\u540E\u7684\u52A0\u9501\uFF08<code>lock</code>\uFF09\u524D\u3002</p></li><li><p>\u4F20\u9012\u6027\uFF1A<code>A</code> \u5148\u4E8E <code>B</code>\uFF0C<code>B</code> \u5148\u4E8E <code>C</code>\uFF0C\u90A3\u4E48 <code>A</code> \u5FC5\u7136\u5148\u4E8E <code>C</code>\u3002</p></li><li><p>\u7EBF\u7A0B\u7684 <code>start</code> \u65B9\u6CD5\u5148\u4E8E\u7EBF\u7A0B\u4E2D\u7684\u6BCF\u4E00\u4E2A\u52A8\u4F5C\u3002</p></li><li><p>\u7EBF\u7A0B\u7684\u6240\u6709\u64CD\u4F5C\u5148\u4E8E\u7EBF\u7A0B\u7684\u7EC8\u7ED3\uFF08<code>Thread.join()</code>\uFF09\u3002</p><blockquote><p>\u5373\u7EBF\u7A0B\u7ED3\u675F\u524D\u8981\u4FDD\u8BC1\u7EBF\u7A0B\u4E2D\u7684\u64CD\u4F5C\u90FD\u6267\u884C\u5B8C\u6210\u3002</p></blockquote></li><li><p>\u7EBF\u7A0B\u7684\u4E2D\u65AD\uFF08<code>interrupt()</code>\uFF09\u5148\u4E8E\u88AB\u4E2D\u65AD\u7EBF\u7A0B\u7684\u4EE3\u7801\u3002</p></li><li><p>\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u6267\u884C\u7ED3\u675F\u5148\u4E8E <code>finalize()</code> \u65B9\u6CD5\u3002</p></li></ol><h3 id="_5-2-\u591A\u7EBF\u7A0B\u4E2D\u7684\u6709\u5E8F\u6027" tabindex="-1"><a class="header-anchor" href="#_5-2-\u591A\u7EBF\u7A0B\u4E2D\u7684\u6709\u5E8F\u6027" aria-hidden="true">#</a> 5.2 \u591A\u7EBF\u7A0B\u4E2D\u7684\u6709\u5E8F\u6027</h3><p>\u7EBF\u7A0B\u5185\u89C2\u5BDF\uFF0C\u64CD\u4F5C\u90FD\u662F\u6709\u5E8F\u7684\u3002</p><p>\u7EBF\u7A0B\u5916\u89C2\u5BDF\uFF0C\u64CD\u4F5C\u90FD\u662F\u65E0\u5E8F\u7684\u3002\uFF08\u56E0\u4E3A\u5B58\u5728\u6307\u4EE4\u91CD\u6392\uFF0C\u6216\u4E3B\u5185\u5B58\u540C\u6B65\u5EF6\u8FDF\uFF09</p><h2 id="_6-java-\u7EBF\u7A0B\u5B89\u5168\u7684\u5904\u7406\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_6-java-\u7EBF\u7A0B\u5B89\u5168\u7684\u5904\u7406\u65B9\u6CD5" aria-hidden="true">#</a> 6. <code>Java</code> \u7EBF\u7A0B\u5B89\u5168\u7684\u5904\u7406\u65B9\u6CD5</h2><p><code>Java</code> \u7EBF\u7A0B\u5B89\u5168\u7684\u5904\u7406\u65B9\u6CD5\u6709\uFF1A</p><ol><li><p>\u4E0D\u53EF\u53D8\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\u3002</p><blockquote><p>\u5373 <code>final</code> \u4FEE\u9970\u7684\uFF08\u4E0D\u53EF\u53D8\uFF09\u53D8\u91CF\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\u3002</p></blockquote></li><li><p>\u4E92\u65A5\u540C\u6B65\uFF08\u963B\u585E\u540C\u6B65\uFF09\u3002\u5305\u62EC\uFF1A<code>synchronized</code> \u548C <code>ReetrantLock</code>\u3002</p><blockquote><p>\u76EE\u524D\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6027\u80FD\u5DF2\u7ECF\u5DEE\u4E0D\u591A\u4E86\u3002\u5EFA\u8BAE\u4F18\u5148\u9009\u7528 <code>synchronized</code>\u3002</p><p><code>ReentrantLock</code> \u589E\u52A0\u4E86\u5982\u4E0B\u7279\u6027\uFF1A</p><ol><li><p>\u7B49\u5F85\u53EF\u4E2D\u65AD\uFF1A\u5F53\u6301\u6709\u9501\u7684\u7EBF\u7A0B\u957F\u65F6\u95F4\u4E0D\u91CA\u653E\u9501\u65F6\uFF0C\u6B63\u5728\u7B49\u5F85\u7684\u7EBF\u7A0B\u53EF\u4EE5\u9009\u62E9\u653E\u5F03\u7B49\u5F85\u3002</p></li><li><p>\u516C\u5E73\u9501\uFF1A\u591A\u4E2A\u7EBF\u7A0B\u7B49\u5F85\u540C\u4E00\u4E2A\u9501\u65F6\uFF0C\u987B\u4E25\u683C\u6309\u7167\u7533\u8BF7\u9501\u7684\u65F6\u95F4\u987A\u5E8F\u6765\u83B7\u5F97\u9501\u3002\uFF08\u8C03\u7528 <code>ReentrantLock</code> \u7684\u65E0\u53C2\u6784\u9020\u51FD\u6570\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A\u4E0D\u516C\u5E73\u9501\uFF09</p></li><li><p>\u9501\u7ED1\u5B9A\u591A\u4E2A\u6761\u4EF6\uFF1A\u4E00\u4E2A <code>ReentrantLock</code> \u5BF9\u8C61\u53EF\u4EE5\u7ED1\u5B9A\u591A\u4E2A <code>Condition</code> \u5BF9\u8C61\uFF0C\u800C <code>synchronized</code> \u662F\u9488\u5BF9\u4E00\u4E2A\u6761\u4EF6\u7684\u3002\uFF08\u5982\u679C <code>synchronized</code> \u8981\u9488\u5BF9\u591A\u4E2A\u6761\u4EF6\uFF0C\u90A3\u4E48\u5C31\u5F97\u6709\u591A\u4E2A\u9501\uFF09</p></li></ol></blockquote></li><li><p>\u975E\u963B\u585E\u540C\u6B65\uFF1A\u662F\u4E00\u79CD\u57FA\u4E8E\u51B2\u7A81\u68C0\u67E5\u7684 <strong>\u4E50\u89C2\u9501\u5B9A\u7B56\u7565</strong>\u3002</p><blockquote><p>\u901A\u5E38\u662F\u5148\u64CD\u4F5C\uFF0C\u5982\u679C\u6CA1\u6709\u51B2\u7A81\uFF0C\u90A3\u4E48\u64CD\u4F5C\u6210\u529F\u3002\u5982\u679C\u6709\u51B2\u7A81\uFF0C\u90A3\u4E48\u518D\u91C7\u7528\u5176\u5B83\u65B9\u5F0F\u8FDB\u884C\u8865\u507F\u5904\u7406\u3002</p><p>\uFF08<strong>\u4E50\u89C2\u9501</strong> \u5C31\u662F\u5047\u8BBE\u6CA1\u6709\u51B2\u7A81\uFF0C\u6B63\u5E38\u8FDB\u884C\u64CD\u4F5C\uFF0C\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u51B2\u7A81\u518D\u8865\u6551\uFF09</p></blockquote></li><li><p>\u65E0\u540C\u6B65\u65B9\u6848\uFF1A\u5176\u5B9E\u5C31\u662F\u5728\u591A\u7EBF\u7A0B\u4E2D\uFF0C\u65B9\u6CD5\u5E76\u4E0D\u6D89\u53CA\u5171\u4EAB\u6570\u636E\uFF0C\u6B64\u65F6\u81EA\u7136\u5C31\u65E0\u9700\u540C\u6B65\u4E86\u3002</p><blockquote><p>\u65E0\u540C\u6B65\u65B9\u6848\u5C31\u662F\u8981\u505A\u5230\u907F\u514D\u591A\u7EBF\u7A0B\u5171\u4EAB\u540C\u4E00\u4EFD\u6570\u636E\u3002</p><p>\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u5E94\u5C3D\u91CF\u91C7\u7528\u65E0\u540C\u6B65\u65B9\u6848\u3002</p></blockquote></li></ol><h2 id="_7-\u9501\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_7-\u9501\u4F18\u5316" aria-hidden="true">#</a> 7. \u9501\u4F18\u5316</h2><p>\u9501\u4F18\u5316\uFF1A\u5C31\u662F\u6307 <code>JVM</code> \u5BF9\u591A\u7EBF\u7A0B\u7684\u52A0\u9501\u64CD\u4F5C\u6240\u91C7\u7528\u7684\u4F18\u5316\u65B9\u6848\u3002</p><p>\u4E0B\u9762\u4ECB\u7ECD\u7684\u4E00\u4E9B\u9501\u4F18\u5316\u65B9\u6848\u90FD\u662F <code>JVM</code> \u5185\u90E8\u5B9E\u73B0\u4E86\u7684\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u77E5\u9053\u8FD9\u4E9B\u9501\u4F18\u5316\u7684\u539F\u7406\u3001\u4F18\u7F3A\u70B9\u5373\u53EF\u3002\u81F3\u4E8E <code>JVM</code> \u662F\u5982\u4F55\u5B9E\u73B0\u7684\u4E0D\u9700\u8981\u5173\u5FC3\u3002</p><h3 id="_7-1-\u81EA\u65CB\u9501-\u81EA\u9002\u5E94\u81EA\u65CB" tabindex="-1"><a class="header-anchor" href="#_7-1-\u81EA\u65CB\u9501-\u81EA\u9002\u5E94\u81EA\u65CB" aria-hidden="true">#</a> 7.1 \u81EA\u65CB\u9501 &amp; \u81EA\u9002\u5E94\u81EA\u65CB</h3><p>\u81EA\u65CB\uFF1A\u5982\u679C\u7EBF\u7A0B\u53EF\u4EE5\u5F88\u5FEB\u5730\u83B7\u5F97\u9501\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4E0D\u5728 <code>OS</code> \u5C42\u6302\u8D77\u7EBF\u7A0B\u3002\u800C\u662F\u8BA9\u7EBF\u7A0B\u505A\u51E0\u4E2A\u5FD9\u5FAA\u73AF\u3002\u8FD9\u5C31\u662F\u81EA\u65CB\u3002</p><blockquote><p>\u4E00\u822C\u5730\uFF0C\u591A\u4E2A\u7EBF\u7A0B\u5728\u7ADE\u4E89\u540C\u4E00\u4E2A\u9501\u65F6\uFF0C\u672A\u83B7\u5F97\u9501\u7684\u5176\u5B83\u7EBF\u7A0B\u90FD\u662F\u5728\u64CD\u4F5C\u7CFB\u7EDF\u5C42\u9762\u4E0A\u88AB\u6302\u8D77\u7B49\u5F85\u7684\u3002</p><p>\u5BF9\u6B64\uFF0C\u5982\u679C <code>JVM</code> \u5224\u65AD\u672A\u83B7\u5F97\u9501\u7684\u5176\u5B83\u7EBF\u7A0B\u5982\u679C\u53EF\u4EE5\u5F88\u5FEB\u5730\u83B7\u5F97\u9501\uFF0C\u90A3\u4E48\u5C31\u4E0D\u4F1A\u8BA9\u8FD9\u79CD\u7EBF\u7A0B\u5728\u64CD\u4F5C\u7CFB\u7EDF\u5C42\u9762\u4E0A\u6302\u8D77\u3002\u800C\u662F\u5728\u4EE3\u7801\u5C42\u9762\u4E0A\uFF0C\u8BA9\u8FD9\u79CD\u7EBF\u7A0B\u81EA\u5DF1\u505A\u51E0\u4E2A\u5FAA\u73AF\u6765\u6D88\u8017\u7B49\u5F85\u65F6\u95F4\u3002\u8FD9\u6837\u7684\u4F18\u5316\u64CD\u4F5C\u5C31\u53EB\u505A\u81EA\u65CB\u3002</p><p>\u81EA\u65CB\u64CD\u4F5C\u6240\u6D88\u8017\u7684\u8D44\u6E90\u6BD4\u5728 <code>OS</code> \u5C42\u9762\u4E0A\u7684\u6302\u8D77\u548C\u5524\u9192\u7EBF\u7A0B\u8981\u66F4\u8F7B\u91CF\u7EA7\u3002</p></blockquote><p>\u81EA\u9002\u5E94\u81EA\u65CB\uFF1A\u81EA\u65CB\u7684\u65F6\u95F4\u4E0D\u518D\u56FA\u5B9A\uFF0C\u800C\u662F\u7531\u524D\u4E00\u6B21\u5728\u540C\u4E00\u4E2A\u9501\u4E0A\u7684\u81EA\u65CB\u65F6\u95F4\uFF0C\u548C\u9501\u7684\u62E5\u6709\u8005\u72B6\u6001\u6765\u51B3\u5B9A\u3002</p><p>\u81EA\u65CB\u7684\u4F18\u7F3A\u70B9\uFF1A</p><ol><li>\u5982\u679C\u9501\u88AB\u5360\u7528\u65F6\u95F4\u5F88\u77ED\uFF0C\u81EA\u65CB\u6210\u529F\uFF0C\u90A3\u4E48\u80FD\u8282\u7701\u7EBF\u7A0B\u6302\u8D77\u3001\u5207\u6362\u7684\u65F6\u95F4\uFF0C\u4ECE\u800C\u63D0\u5347\u7CFB\u7EDF\u6027\u80FD\uFF1B</li><li>\u5982\u679C\u9501\u88AB\u5360\u7528\u65F6\u95F4\u5F88\u957F\uFF0C\u81EA\u65CB\u5931\u8D25\uFF0C\u90A3\u4E48\u4F1A\u767D\u767D\u8017\u8D39\u5904\u7406\u5668\u8D44\u6E90\uFF0C\u964D\u4F4E\u7CFB\u7EDF\u6027\u80FD\u3002</li></ol><blockquote><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u81EA\u65CB\u548C\u81EA\u9002\u5E94\u81EA\u65CB\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u7EBF\u7A0B\u5728\u81EA\u65CB\u64CD\u4F5C\u4E4B\u540E\uFF0C\u5C31\u80FD\u591F\u6210\u529F\u5730\u83B7\u5F97\u9501\u3002</p><p>\u5982\u679C\u81EA\u65CB\u540E\u7684\u7EBF\u7A0B\u672A\u83B7\u5F97\u9501\uFF08\u5373\u81EA\u65CB\u5931\u8D25\uFF09\uFF0C\u90A3\u4E48\u8BE5\u7EBF\u7A0B\u4ECD\u7136\u8FD8\u662F\u4F1A\u5728 <code>OS</code> \u5C42\u9762\u4E0A\u88AB\u6302\u8D77\u7B49\u5F85\u3002</p><p>\u6B64\u65F6\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u767D\u767D\u5730\u6D6A\u8D39\u4E86\u81EA\u65CB\u64CD\u4F5C\u6240\u9020\u6210\u7684\u8D44\u6E90\u6D88\u8017\u3002</p></blockquote><h3 id="_7-2-\u9501\u6D88\u9664" tabindex="-1"><a class="header-anchor" href="#_7-2-\u9501\u6D88\u9664" aria-hidden="true">#</a> 7.2 \u9501\u6D88\u9664</h3><p>\u5728\u7F16\u8BD1\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u5982\u679C\u65B9\u6CD5\u4E2D\u5B58\u5728\u540C\u6B65\u4EE3\u7801\uFF0C\u4F46\u662F\u53C8\u6CA1\u6709\u68C0\u6D4B\u5230\u65B9\u6CD5\u4E2D\u7684\u540C\u6B65\u4EE3\u7801\u4F1A\u4E0E\u5176\u5B83\u7EBF\u7A0B\u7ADE\u4E89\u5171\u4EAB\u6570\u636E\u3002\u90A3\u4E48\u5C31\u4E0D\u4F1A\u7ED9\u65B9\u6CD5\u4E2D\u7684\u540C\u6B65\u4EE3\u7801\u52A0\u9501\u4E86\u3002\u8FD9\u79CD\u9501\u4F18\u5316\u65B9\u6848\u5C31\u79F0\u4E3A <strong>\u9501\u6D88\u9664</strong>\u3002</p><p>\u901A\u8FC7\u8BBE\u7F6E\u53C2\u6570 <code>-XX:+EliminateLocks</code> \u5F00\u542F\u9501\u6D88\u9664\u3002</p><p>\u5F00\u542F\u9501\u6D88\u9664\u65F6\uFF0C\u540C\u65F6\u4E5F\u8981\u8BBE\u7F6E\u53C2\u6570 <code>-XX:+DoEscapdeAnalysis</code> \u6765\u5F00\u542F <strong>\u9003\u9038\u5206\u6790</strong>\u3002</p><h4 id="_7-2-1-\u65B9\u6CD5\u9003\u9038-\u7EBF\u7A0B\u9003\u9038" tabindex="-1"><a class="header-anchor" href="#_7-2-1-\u65B9\u6CD5\u9003\u9038-\u7EBF\u7A0B\u9003\u9038" aria-hidden="true">#</a> 7.2.1 \u65B9\u6CD5\u9003\u9038 &amp; \u7EBF\u7A0B\u9003\u9038</h4><p>\u6240\u8C13\u9003\u9038\u5206\u6790\uFF0C\u5C31\u662F\uFF1A</p><ol><li><p>\u5982\u679C\u4E00\u4E2A\u65B9\u6CD5\u4E2D\u5B9A\u4E49\u7684\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u53EF\u80FD\u88AB\u5916\u90E8\u65B9\u6CD5\u5F15\u7528\uFF0C\u90A3\u4E48\u79F0\u4E3A <strong>\u65B9\u6CD5\u9003\u9038</strong>\u3002</p><blockquote><p>\u5982\u679C\u65B9\u6CD5\u7684\u540C\u6B65\u4EE3\u7801\u4E2D\u4F7F\u7528\u5230\u7684\u5C40\u90E8\u53D8\u91CF\u6216\u6210\u5458\u53D8\u91CF\uFF0C\u5B83\u4EEC\u5F15\u7528\u7684\u5BF9\u8C61\u5728\u5176\u5B83\u65B9\u6CD5\u4E2D\u4E5F\u88AB\u5F15\u7528\u5230\u4E86\uFF0C\u5E76\u4E14\u8FD9\u6837\u7684\u5176\u5B83\u65B9\u6CD5\u4F1A\u5728\u4E0D\u540C\u7684\u7EBF\u7A0B\u4E2D\u88AB\u8C03\u7528\u3002\u90A3\u4E48\u662F\u4E0D\u80FD\u5BF9\u8BE5\u65B9\u6CD5\u7684\u540C\u6B65\u4EE3\u7801\u8FDB\u884C\u9501\u6D88\u9664\u7684\u3002</p></blockquote></li><li><p>\u5982\u679C\u5BF9\u8C61\u53EF\u80FD\u88AB\u5176\u5B83\u5916\u90E8\u7EBF\u7A0B\u8BBF\u95EE\uFF0C\u79F0\u4E3A <strong>\u7EBF\u7A0B\u9003\u9038</strong>\u3002</p><blockquote><p>\u6BD4\u5982\u5C06\u5BF9\u8C61\u8D4B\u503C\u7ED9\u7C7B\u53D8\u91CF\uFF0C\u6216\u8005\u8D4B\u503C\u7ED9\u53EF\u4EE5\u5728\u5176\u5B83\u7EBF\u7A0B\u4E2D\u8BBF\u95EE\u7684\u5B9E\u4F8B\u53D8\u91CF\u3002</p></blockquote></li></ol><h3 id="_7-3-\u9501\u7C97\u5316" tabindex="-1"><a class="header-anchor" href="#_7-3-\u9501\u7C97\u5316" aria-hidden="true">#</a> 7.3 \u9501\u7C97\u5316</h3><p>\u9501\u7C97\u5316\uFF1A\u901A\u5E38\u8981\u6C42\u540C\u6B65\u5757\u8981\u5C0F\uFF0C\u4F46\u4E00\u7CFB\u5217\u5730\u8FDE\u7EED\u64CD\u4F5C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4F7F\u7528\u540C\u4E00\u4E2A\u9501\u5BF9\u8C61\u53CD\u590D\u7684\u52A0\u9501\u548C\u89E3\u9501\uFF0C\u8FD9\u6837\u5C31\u4F1A\u9020\u6210\u4E0D\u5FC5\u8981\u7684\u6027\u80FD\u635F\u8017\u3002\u8FD9\u79CD\u60C5\u51B5\u5EFA\u8BAE\u628A\u9501\u540C\u6B65\u7684\u8303\u56F4\u6269\u5927\u5230\u6574\u4E2A\u64CD\u4F5C\u5E8F\u5217\u3002</p><blockquote><p>\u540C\u6B65\u5757\u4E2D\u7684\u4EE3\u7801\u5728\u6267\u884C\u65F6\uFF0C\u7CFB\u7EDF\u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u56E0\u6B64\uFF0C\u5982\u679C\u540C\u6B65\u5757\u4E2D\u7684\u4EE3\u7801\u8D8A\u591A\uFF0C\u90A3\u4E48\u7CFB\u7EDF\u5355\u7EBF\u7A0B\u6267\u884C\u7684\u65F6\u95F4\u8D8A\u957F\uFF0C\u6027\u80FD\u8D8A\u4F4E\u3002</p><p>\u56E0\u6B64\uFF0C\u901A\u5E38\u8981\u6C42\u540C\u6B65\u5757\u8981\u5C0F\u3002</p></blockquote><p><img src="'+b+'" alt="" loading="lazy"></p><h3 id="_7-4-\u8F7B\u91CF\u7EA7\u9501" tabindex="-1"><a class="header-anchor" href="#_7-4-\u8F7B\u91CF\u7EA7\u9501" aria-hidden="true">#</a> 7.4 \u8F7B\u91CF\u7EA7\u9501</h3><p>\u8F7B\u91CF\u7EA7\u662F\u76F8\u5BF9\u4E8E\u4F20\u7EDF\u9501\u673A\u5236\u800C\u8A00\u7684\u3002\u672C\u610F\u662F\u6CA1\u6709\u591A\u7EBF\u7A0B\u7ADE\u4E89\u7684\u60C5\u51B5\u4E0B\uFF0C\u51CF\u5C11\u4F20\u7EDF\u9501\u673A\u5236\u4F7F\u7528 <code>OS</code> \u5B9E\u73B0\u4E92\u65A5\u6240\u4EA7\u751F\u7684\u6027\u80FD\u635F\u8017\u3002</p><p>\u8F7B\u91CF\u7EA7\u9501\u7684\u5B9E\u73B0\u539F\u7406\u5F88\u7B80\u5355\uFF0C\u7C7B\u4F3C\u4E8E\u4E50\u89C2\u9501\u7684\u65B9\u5F0F\u3002</p><p>\u5982\u679C\u8F7B\u91CF\u7EA7\u9501\u5931\u8D25\uFF0C\u8868\u793A\u5B58\u5728\u7ADE\u4E89\uFF0C\u6B64\u65F6\u5347\u7EA7\u4E3A\u91CD\u91CF\u7EA7\u9501\uFF0C\u4F46\u4F1A\u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\u3002</p><h3 id="_7-5-\u504F\u5411\u9501" tabindex="-1"><a class="header-anchor" href="#_7-5-\u504F\u5411\u9501" aria-hidden="true">#</a> 7.5 \u504F\u5411\u9501</h3><p>\u504F\u5411\u9501\u662F\u5728\u65E0\u7ADE\u4E89\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F4\u63A5\u628A\u6574\u4E2A\u540C\u6B65\u6D88\u9664\u4E86\uFF0C\u8FDE\u4E50\u89C2\u9501\u90FD\u4E0D\u7528\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6027\u80FD\u3002</p><p>\u6240\u8C13\u7684\u504F\u5411\uFF0C\u5C31\u662F\u504F\u5FC3\uFF0C\u5373\u9501\u4F1A\u504F\u5411\u4E8E\u5F53\u524D\u5DF2\u7ECF\u5360\u6709\u9501\u7684\u7EBF\u7A0B\u3002</p><p>\u8BF4\u660E\uFF1A</p><ol><li><p>\u53EA\u8981\u6CA1\u6709\u7ADE\u4E89\uFF0C\u83B7\u5F97\u504F\u5411\u9501\u7684\u7EBF\u7A0B\u5728\u5C06\u6765\u8FDB\u5165\u540C\u6B65\u5757\u65F6\uFF0C\u4E5F\u4E0D\u9700\u8981\u505A\u540C\u6B65\u3002</p></li><li><p>\u5F53\u6709\u5176\u5B83\u7EBF\u7A0B\u8BF7\u6C42\u76F8\u540C\u7684\u9501\u65F6\uFF0C\u504F\u5411\u6A21\u5F0F\u7ED3\u675F\u3002</p></li><li><p>\u5982\u679C\u7A0B\u5E8F\u4E2D\u5927\u591A\u6570\u9501\u603B\u662F\u88AB\u591A\u4E2A\u7EBF\u7A0B\u8BBF\u95EE\u7684\u65F6\u5019 \uFF0C\u4E5F\u5C31\u662F\u7ADE\u4E89\u6BD4\u8F83\u6FC0\u70C8\uFF0C\u504F\u5411\u9501\u53CD\u800C\u4F1A\u964D\u4F4E\u6027\u80FD\u3002</p></li><li><p>\u4F7F\u7528 <code>-XX:-UseBiasedLocking</code> \u6765\u7981\u7528\u504F\u5411\u9501\u3002\uFF08\u9ED8\u8BA4\u5F00\u542F\uFF09</p></li></ol><h3 id="_7-6-jvm-\u8FDB\u884C\u9501\u4F18\u5316\u7684\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_7-6-jvm-\u8FDB\u884C\u9501\u4F18\u5316\u7684\u6B65\u9AA4" aria-hidden="true">#</a> 7.6 <code>JVM</code> \u8FDB\u884C\u9501\u4F18\u5316\u7684\u6B65\u9AA4</h3><p><code>JVM</code> \u8FDB\u884C\u9501\u4F18\u5316\u7684\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><ol><li><p>\u5148\u5C1D\u8BD5\u504F\u5411\u9501\uFF1B</p></li><li><p>\u7136\u540E\u5C1D\u8BD5\u8F7B\u91CF\u7EA7\u9501\uFF1B</p></li><li><p>\u518D\u7136\u540E\u5C1D\u8BD5\u81EA\u65CB\u9501\uFF1B</p></li><li><p>\u6700\u540E\u5C1D\u8BD5\u666E\u901A\u9501\uFF0C\u4F7F\u7528 <code>OS</code> \u4E92\u65A5\u91CF\u5728\u64CD\u4F5C\u7CFB\u7EDF\u5C42\u6302\u8D77\u3002</p></li></ol><h2 id="_8-\u540C\u6B65\u4EE3\u7801\u7684\u57FA\u672C\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_8-\u540C\u6B65\u4EE3\u7801\u7684\u57FA\u672C\u89C4\u5219" aria-hidden="true">#</a> 8. \u540C\u6B65\u4EE3\u7801\u7684\u57FA\u672C\u89C4\u5219</h2><p>\u540C\u6B65\u4EE3\u7801\u7684\u57FA\u672C\u89C4\u5219\u5982\u4E0B\uFF1A</p><ol><li><p>\u5C3D\u91CF\u51CF\u5C11\u9501\u6301\u6709\u7684\u65F6\u95F4\uFF1B</p></li><li><p>\u5C3D\u91CF\u51CF\u5C11\u9501\u7684\u7C92\u5EA6\u3002</p><blockquote><p>\u5373\u5C3D\u91CF\u51CF\u5C0F\u540C\u6B65\u4EE3\u7801\u7684\u4EE3\u7801\u91CF\u3002</p><p>\u540C\u6B65\u4EE3\u7801\u7684\u4EE3\u7801\u91CF\u51CF\u5C11\u4E86\uFF0C\u540C\u6B65\u4EE3\u7801\u7684\u6267\u884C\u65F6\u95F4\u4E5F\u5C31\u51CF\u5C11\u4E86\uFF0C\u9501\u6301\u6709\u7684\u65F6\u95F4\u540C\u6837\u4E5F\u5C31\u51CF\u5C11\u4E86\u3002</p></blockquote></li></ol>',44);function V(E,j){const d=n("RouterLink");return p(),a(r,null,[_,o("blockquote",null,[o("p",null,[q,g,v,f,J,i(d,{to:"/zkq/java/jmm.html#_5-4-happens-before-%E8%A7%84%E5%88%99-%E4%BF%9D%E8%AF%81%E5%8F%AF%E8%A7%81%E6%80%A7%E7%9A%84%E8%A7%84%E5%88%99"},{default:t(()=>[m,x]),_:1})])]),M],64)}var y=l(k,[["render",V],["__file","concurrence.html.vue"]]);export{y as default};
