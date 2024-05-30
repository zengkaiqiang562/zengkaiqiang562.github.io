import{_ as a,e}from"./app.2a01fc36.js";const r={},i=e('<h2 id="java-\u5185\u5B58\u533A\u57DF" tabindex="-1"><a class="header-anchor" href="#java-\u5185\u5B58\u533A\u57DF" aria-hidden="true">#</a> Java \u5185\u5B58\u533A\u57DF</h2><p>\u5BF9\u4E8E Java \u7A0B\u5E8F\u5458\u6765\u8BF4\uFF0C\u5728\u865A\u62DF\u673A\u81EA\u52A8\u5185\u5B58\u7BA1\u7406\u673A\u5236\u4E0B\uFF0C\u4E0D\u518D\u9700\u8981\u50CF C/C++\u7A0B\u5E8F\u5F00\u53D1\u7A0B\u5E8F\u5458\u8FD9\u6837\u4E3A\u6BCF\u4E00\u4E2A new \u64CD\u4F5C\u53BB\u5199\u5BF9\u5E94\u7684 delete/free \u64CD\u4F5C\uFF0C\u4E0D\u5BB9\u6613\u51FA\u73B0\u5185\u5B58\u6CC4\u6F0F\u548C\u5185\u5B58\u6EA2\u51FA\u95EE\u9898\u3002\u6B63\u662F\u56E0\u4E3A Java \u7A0B\u5E8F\u5458\u628A\u5185\u5B58\u63A7\u5236\u6743\u5229\u4EA4\u7ED9 Java \u865A\u62DF\u673A\uFF0C\u4E00\u65E6\u51FA\u73B0\u5185\u5B58\u6CC4\u6F0F\u548C\u6EA2\u51FA\u65B9\u9762\u7684\u95EE\u9898\uFF0C\u5982\u679C\u4E0D\u4E86\u89E3\u865A\u62DF\u673A\u662F\u600E\u6837\u4F7F\u7528\u5185\u5B58\u7684\uFF0C\u90A3\u4E48\u6392\u67E5\u9519\u8BEF\u5C06\u4F1A\u662F\u4E00\u4E2A\u975E\u5E38\u8270\u5DE8\u7684\u4EFB\u52A1\u3002</p><h3 id="java-\u5185\u5B58\u533A\u57DF\u548C\u5185\u5B58\u6A21\u578B-jmm-\u6709\u4F55\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#java-\u5185\u5B58\u533A\u57DF\u548C\u5185\u5B58\u6A21\u578B-jmm-\u6709\u4F55\u533A\u522B" aria-hidden="true">#</a> Java \u5185\u5B58\u533A\u57DF\u548C\u5185\u5B58\u6A21\u578B(JMM)\u6709\u4F55\u533A\u522B\uFF1F</h3><p><strong>Java \u5185\u5B58\u533A\u57DF\u548C\u5185\u5B58\u6A21\u578B\u662F\u5B8C\u5168\u4E0D\u4E00\u6837\u7684\u4E24\u4E2A\u4E1C\u897F\uFF01\uFF01\uFF01</strong></p><ul><li>Java \u5185\u5B58\u533A\u57DF\u5B9A\u4E49\u4E86JVM \u5728\u8FD0\u884C\u65F6\u5982\u4F55\u5206\u533A\u5B58\u50A8\u7A0B\u5E8F\u6570\u636E\uFF0C\u5C31\u6BD4\u5982\u8BF4\u5806\u4E3B\u8981\u7528\u4E8E\u5B58\u653E\u5BF9\u8C61\u5B9E\u4F8B\u3002</li><li>Java \u5185\u5B58\u6A21\u578B\u62BD\u8C61\u4E86\u7EBF\u7A0B\u548C\u4E3B\u5185\u5B58\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u5C31\u6BD4\u5982\u8BF4\u7EBF\u7A0B\u4E4B\u95F4\u7684\u5171\u4EAB\u53D8\u91CF\u5FC5\u987B\u5B58\u50A8\u5728\u4E3B\u5185\u5B58\u4E2D\uFF0C\u5176\u76EE\u7684\u662F\u4E3A\u4E86\u5C4F\u853D\u7CFB\u7EDF\u548C\u786C\u4EF6\u7684\u5DEE\u5F02\uFF0C\u907F\u514D\u4E00\u5957\u4EE3\u7801\u5728\u4E0D\u540C\u7684\u5E73\u53F0\u4E0B\u4EA7\u751F\u7684\u6548\u679C\u4E0D\u4E00\u81F4\u3002</li></ul><h3 id="\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B-java-\u5185\u5B58\u533A\u57DF-\u8FD0\u884C\u65F6\u6570\u636E\u533A" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B-java-\u5185\u5B58\u533A\u57DF-\u8FD0\u884C\u65F6\u6570\u636E\u533A" aria-hidden="true">#</a> \u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B Java \u5185\u5B58\u533A\u57DF\uFF08\u8FD0\u884C\u65F6\u6570\u636E\u533A\uFF09</h3><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ul><li>\u563F\uFF0C\u540C\u5B66\uFF0C\u4F60\u8981\u7684 Java \u5185\u5B58\u6A21\u578B (JMM) \u6765\u4E86\uFF1Ahttps://xie.infoq.cn/article/739920a92d0d27e2053174ef2</li></ul>',8);function t(h,d){return i}var s=a(r,[["render",t],["__file","java-jvm-questions-01.html.vue"]]);export{s as default};
