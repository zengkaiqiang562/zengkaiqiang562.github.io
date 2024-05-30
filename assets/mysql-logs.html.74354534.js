import{_ as n,r as a,c as s,a as o,b as d,F as i,e as g,d as c,o as l}from"./app.2a01fc36.js";const p={},t=g(`<blockquote><p>\u672C\u6587\u6765\u81EA\u516C\u53F7\u7A0B\u5E8F\u733F\u963F\u661F\u6295\u7A3F\uFF0CJavaGuide \u5BF9\u5176\u505A\u4E86\u8865\u5145\u5B8C\u5584\u3002</p></blockquote><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p><code>MySQL</code> \u65E5\u5FD7 \u4E3B\u8981\u5305\u62EC\u9519\u8BEF\u65E5\u5FD7\u3001\u67E5\u8BE2\u65E5\u5FD7\u3001\u6162\u67E5\u8BE2\u65E5\u5FD7\u3001\u4E8B\u52A1\u65E5\u5FD7\u3001\u4E8C\u8FDB\u5236\u65E5\u5FD7\u51E0\u5927\u7C7B\u3002\u5176\u4E2D\uFF0C\u6BD4\u8F83\u91CD\u8981\u7684\u8FD8\u8981\u5C5E\u4E8C\u8FDB\u5236\u65E5\u5FD7 <code>binlog</code>\uFF08\u5F52\u6863\u65E5\u5FD7\uFF09\u548C\u4E8B\u52A1\u65E5\u5FD7 <code>redo log</code>\uFF08\u91CD\u505A\u65E5\u5FD7\uFF09\u548C <code>undo log</code>\uFF08\u56DE\u6EDA\u65E5\u5FD7\uFF09\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/01.png" alt="" loading="lazy"></p><p>\u4ECA\u5929\u5C31\u6765\u804A\u804A <code>redo log</code>\uFF08\u91CD\u505A\u65E5\u5FD7\uFF09\u3001<code>binlog</code>\uFF08\u5F52\u6863\u65E5\u5FD7\uFF09\u3001\u4E24\u9636\u6BB5\u63D0\u4EA4\u3001<code>undo log</code> \uFF08\u56DE\u6EDA\u65E5\u5FD7\uFF09\u3002</p><h2 id="redo-log" tabindex="-1"><a class="header-anchor" href="#redo-log" aria-hidden="true">#</a> redo log</h2><p><code>redo log</code>\uFF08\u91CD\u505A\u65E5\u5FD7\uFF09\u662F<code>InnoDB</code>\u5B58\u50A8\u5F15\u64CE\u72EC\u6709\u7684\uFF0C\u5B83\u8BA9<code>MySQL</code>\u62E5\u6709\u4E86\u5D29\u6E83\u6062\u590D\u80FD\u529B\u3002</p><p>\u6BD4\u5982 <code>MySQL</code> \u5B9E\u4F8B\u6302\u4E86\u6216\u5B95\u673A\u4E86\uFF0C\u91CD\u542F\u65F6\uFF0C<code>InnoDB</code>\u5B58\u50A8\u5F15\u64CE\u4F1A\u4F7F\u7528<code>redo log</code>\u6062\u590D\u6570\u636E\uFF0C\u4FDD\u8BC1\u6570\u636E\u7684\u6301\u4E45\u6027\u4E0E\u5B8C\u6574\u6027\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/02.png" alt="" loading="lazy"></p><p><code>MySQL</code> \u4E2D\u6570\u636E\u662F\u4EE5\u9875\u4E3A\u5355\u4F4D\uFF0C\u4F60\u67E5\u8BE2\u4E00\u6761\u8BB0\u5F55\uFF0C\u4F1A\u4ECE\u786C\u76D8\u628A\u4E00\u9875\u7684\u6570\u636E\u52A0\u8F7D\u51FA\u6765\uFF0C\u52A0\u8F7D\u51FA\u6765\u7684\u6570\u636E\u53EB\u6570\u636E\u9875\uFF0C\u4F1A\u653E\u5165\u5230 <code>Buffer Pool</code> \u4E2D\u3002</p><p>\u540E\u7EED\u7684\u67E5\u8BE2\u90FD\u662F\u5148\u4ECE <code>Buffer Pool</code> \u4E2D\u627E\uFF0C\u6CA1\u6709\u547D\u4E2D\u518D\u53BB\u786C\u76D8\u52A0\u8F7D\uFF0C\u51CF\u5C11\u786C\u76D8 <code>IO</code> \u5F00\u9500\uFF0C\u63D0\u5347\u6027\u80FD\u3002</p><p>\u66F4\u65B0\u8868\u6570\u636E\u7684\u65F6\u5019\uFF0C\u4E5F\u662F\u5982\u6B64\uFF0C\u53D1\u73B0 <code>Buffer Pool</code> \u91CC\u5B58\u5728\u8981\u66F4\u65B0\u7684\u6570\u636E\uFF0C\u5C31\u76F4\u63A5\u5728 <code>Buffer Pool</code> \u91CC\u66F4\u65B0\u3002</p><p>\u7136\u540E\u4F1A\u628A\u201C\u5728\u67D0\u4E2A\u6570\u636E\u9875\u4E0A\u505A\u4E86\u4EC0\u4E48\u4FEE\u6539\u201D\u8BB0\u5F55\u5230\u91CD\u505A\u65E5\u5FD7\u7F13\u5B58\uFF08<code>redo log buffer</code>\uFF09\u91CC\uFF0C\u63A5\u7740\u5237\u76D8\u5230 <code>redo log</code> \u6587\u4EF6\u91CC\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/03.png" alt="" loading="lazy"></p><blockquote><p>\u56FE\u7247\u7B14\u8BEF\u63D0\u793A\uFF1A\u7B2C 4 \u6B65 \u201C\u6E05\u7A7A redo log buffe \u5237\u76D8\u5230 redo \u65E5\u5FD7\u4E2D\u201D\u8FD9\u53E5\u8BDD\u4E2D\u7684 buffe \u5E94\u8BE5\u662F buffer\u3002</p></blockquote><p>\u7406\u60F3\u60C5\u51B5\uFF0C\u4E8B\u52A1\u4E00\u63D0\u4EA4\u5C31\u4F1A\u8FDB\u884C\u5237\u76D8\u64CD\u4F5C\uFF0C\u4F46\u5B9E\u9645\u4E0A\uFF0C\u5237\u76D8\u7684\u65F6\u673A\u662F\u6839\u636E\u7B56\u7565\u6765\u8FDB\u884C\u7684\u3002</p><blockquote><p>\u5C0F\u8D34\u58EB\uFF1A\u6BCF\u6761 redo \u8BB0\u5F55\u7531\u201C\u8868\u7A7A\u95F4\u53F7+\u6570\u636E\u9875\u53F7+\u504F\u79FB\u91CF+\u4FEE\u6539\u6570\u636E\u957F\u5EA6+\u5177\u4F53\u4FEE\u6539\u7684\u6570\u636E\u201D\u7EC4\u6210</p></blockquote><h3 id="\u5237\u76D8\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#\u5237\u76D8\u65F6\u673A" aria-hidden="true">#</a> \u5237\u76D8\u65F6\u673A</h3><p><code>InnoDB</code> \u5B58\u50A8\u5F15\u64CE\u4E3A <code>redo log</code> \u7684\u5237\u76D8\u7B56\u7565\u63D0\u4F9B\u4E86 <code>innodb_flush_log_at_trx_commit</code> \u53C2\u6570\uFF0C\u5B83\u652F\u6301\u4E09\u79CD\u7B56\u7565\uFF1A</p><ul><li><strong>0</strong> \uFF1A\u8BBE\u7F6E\u4E3A 0 \u7684\u65F6\u5019\uFF0C\u8868\u793A\u6BCF\u6B21\u4E8B\u52A1\u63D0\u4EA4\u65F6\u4E0D\u8FDB\u884C\u5237\u76D8\u64CD\u4F5C</li><li><strong>1</strong> \uFF1A\u8BBE\u7F6E\u4E3A 1 \u7684\u65F6\u5019\uFF0C\u8868\u793A\u6BCF\u6B21\u4E8B\u52A1\u63D0\u4EA4\u65F6\u90FD\u5C06\u8FDB\u884C\u5237\u76D8\u64CD\u4F5C\uFF08\u9ED8\u8BA4\u503C\uFF09</li><li><strong>2</strong> \uFF1A\u8BBE\u7F6E\u4E3A 2 \u7684\u65F6\u5019\uFF0C\u8868\u793A\u6BCF\u6B21\u4E8B\u52A1\u63D0\u4EA4\u65F6\u90FD\u53EA\u628A redo log buffer \u5185\u5BB9\u5199\u5165 page cache</li></ul><p><code>innodb_flush_log_at_trx_commit</code> \u53C2\u6570\u9ED8\u8BA4\u4E3A 1 \uFF0C\u4E5F\u5C31\u662F\u8BF4\u5F53\u4E8B\u52A1\u63D0\u4EA4\u65F6\u4F1A\u8C03\u7528 <code>fsync</code> \u5BF9 redo log \u8FDB\u884C\u5237\u76D8</p><p>\u53E6\u5916\uFF0C<code>InnoDB</code> \u5B58\u50A8\u5F15\u64CE\u6709\u4E00\u4E2A\u540E\u53F0\u7EBF\u7A0B\uFF0C\u6BCF\u9694<code>1</code> \u79D2\uFF0C\u5C31\u4F1A\u628A <code>redo log buffer</code> \u4E2D\u7684\u5185\u5BB9\u5199\u5230\u6587\u4EF6\u7CFB\u7EDF\u7F13\u5B58\uFF08<code>page cache</code>\uFF09\uFF0C\u7136\u540E\u8C03\u7528 <code>fsync</code> \u5237\u76D8\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/04.png" alt="" loading="lazy"></p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E00\u4E2A\u6CA1\u6709\u63D0\u4EA4\u4E8B\u52A1\u7684 <code>redo log</code> \u8BB0\u5F55\uFF0C\u4E5F\u53EF\u80FD\u4F1A\u5237\u76D8\u3002</p><p><strong>\u4E3A\u4EC0\u4E48\u5462\uFF1F</strong></p><p>\u56E0\u4E3A\u5728\u4E8B\u52A1\u6267\u884C\u8FC7\u7A0B <code>redo log</code> \u8BB0\u5F55\u662F\u4F1A\u5199\u5165<code>redo log buffer</code> \u4E2D\uFF0C\u8FD9\u4E9B <code>redo log</code> \u8BB0\u5F55\u4F1A\u88AB\u540E\u53F0\u7EBF\u7A0B\u5237\u76D8\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/05.png" alt="" loading="lazy"></p><p>\u9664\u4E86\u540E\u53F0\u7EBF\u7A0B\u6BCF\u79D2<code>1</code>\u6B21\u7684\u8F6E\u8BE2\u64CD\u4F5C\uFF0C\u8FD8\u6709\u4E00\u79CD\u60C5\u51B5\uFF0C\u5F53 <code>redo log buffer</code> \u5360\u7528\u7684\u7A7A\u95F4\u5373\u5C06\u8FBE\u5230 <code>innodb_log_buffer_size</code> \u4E00\u534A\u7684\u65F6\u5019\uFF0C\u540E\u53F0\u7EBF\u7A0B\u4F1A\u4E3B\u52A8\u5237\u76D8\u3002</p><p>\u4E0B\u9762\u662F\u4E0D\u540C\u5237\u76D8\u7B56\u7565\u7684\u6D41\u7A0B\u56FE\u3002</p><h4 id="innodb-flush-log-at-trx-commit-0" tabindex="-1"><a class="header-anchor" href="#innodb-flush-log-at-trx-commit-0" aria-hidden="true">#</a> innodb_flush_log_at_trx_commit=0</h4><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/06.png" alt="" loading="lazy"></p><p>\u4E3A<code>0</code>\u65F6\uFF0C\u5982\u679C<code>MySQL</code>\u6302\u4E86\u6216\u5B95\u673A\u53EF\u80FD\u4F1A\u6709<code>1</code>\u79D2\u6570\u636E\u7684\u4E22\u5931\u3002</p><h4 id="innodb-flush-log-at-trx-commit-1" tabindex="-1"><a class="header-anchor" href="#innodb-flush-log-at-trx-commit-1" aria-hidden="true">#</a> innodb_flush_log_at_trx_commit=1</h4><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/07.png" alt="" loading="lazy"></p><p>\u4E3A<code>1</code>\u65F6\uFF0C \u53EA\u8981\u4E8B\u52A1\u63D0\u4EA4\u6210\u529F\uFF0C<code>redo log</code>\u8BB0\u5F55\u5C31\u4E00\u5B9A\u5728\u786C\u76D8\u91CC\uFF0C\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6570\u636E\u4E22\u5931\u3002</p><p>\u5982\u679C\u4E8B\u52A1\u6267\u884C\u671F\u95F4<code>MySQL</code>\u6302\u4E86\u6216\u5B95\u673A\uFF0C\u8FD9\u90E8\u5206\u65E5\u5FD7\u4E22\u4E86\uFF0C\u4F46\u662F\u4E8B\u52A1\u5E76\u6CA1\u6709\u63D0\u4EA4\uFF0C\u6240\u4EE5\u65E5\u5FD7\u4E22\u4E86\u4E5F\u4E0D\u4F1A\u6709\u635F\u5931\u3002</p><h4 id="innodb-flush-log-at-trx-commit-2" tabindex="-1"><a class="header-anchor" href="#innodb-flush-log-at-trx-commit-2" aria-hidden="true">#</a> innodb_flush_log_at_trx_commit=2</h4><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/09.png" alt="" loading="lazy"></p><p>\u4E3A<code>2</code>\u65F6\uFF0C \u53EA\u8981\u4E8B\u52A1\u63D0\u4EA4\u6210\u529F\uFF0C<code>redo log buffer</code>\u4E2D\u7684\u5185\u5BB9\u53EA\u5199\u5165\u6587\u4EF6\u7CFB\u7EDF\u7F13\u5B58\uFF08<code>page cache</code>\uFF09\u3002</p><p>\u5982\u679C\u4EC5\u4EC5\u53EA\u662F<code>MySQL</code>\u6302\u4E86\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6570\u636E\u4E22\u5931\uFF0C\u4F46\u662F\u5B95\u673A\u53EF\u80FD\u4F1A\u6709<code>1</code>\u79D2\u6570\u636E\u7684\u4E22\u5931\u3002</p><h3 id="\u65E5\u5FD7\u6587\u4EF6\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u6587\u4EF6\u7EC4" aria-hidden="true">#</a> \u65E5\u5FD7\u6587\u4EF6\u7EC4</h3><p>\u786C\u76D8\u4E0A\u5B58\u50A8\u7684 <code>redo log</code> \u65E5\u5FD7\u6587\u4EF6\u4E0D\u53EA\u4E00\u4E2A\uFF0C\u800C\u662F\u4EE5\u4E00\u4E2A<strong>\u65E5\u5FD7\u6587\u4EF6\u7EC4</strong>\u7684\u5F62\u5F0F\u51FA\u73B0\u7684\uFF0C\u6BCF\u4E2A\u7684<code>redo</code>\u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F\u90FD\u662F\u4E00\u6837\u7684\u3002</p><p>\u6BD4\u5982\u53EF\u4EE5\u914D\u7F6E\u4E3A\u4E00\u7EC4<code>4</code>\u4E2A\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u7684\u5927\u5C0F\u662F <code>1GB</code>\uFF0C\u6574\u4E2A <code>redo log</code> \u65E5\u5FD7\u6587\u4EF6\u7EC4\u53EF\u4EE5\u8BB0\u5F55<code>4G</code>\u7684\u5185\u5BB9\u3002</p><p>\u5B83\u91C7\u7528\u7684\u662F\u73AF\u5F62\u6570\u7EC4\u5F62\u5F0F\uFF0C\u4ECE\u5934\u5F00\u59CB\u5199\uFF0C\u5199\u5230\u672B\u5C3E\u53C8\u56DE\u5230\u5934\u5FAA\u73AF\u5199\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/10.png" alt="" loading="lazy"></p><p>\u5728\u4E2A<strong>\u65E5\u5FD7\u6587\u4EF6\u7EC4</strong>\u4E2D\u8FD8\u6709\u4E24\u4E2A\u91CD\u8981\u7684\u5C5E\u6027\uFF0C\u5206\u522B\u662F <code>write pos\u3001checkpoint</code></p><ul><li><strong>write pos</strong> \u662F\u5F53\u524D\u8BB0\u5F55\u7684\u4F4D\u7F6E\uFF0C\u4E00\u8FB9\u5199\u4E00\u8FB9\u540E\u79FB</li><li><strong>checkpoint</strong> \u662F\u5F53\u524D\u8981\u64E6\u9664\u7684\u4F4D\u7F6E\uFF0C\u4E5F\u662F\u5F80\u540E\u63A8\u79FB</li></ul><p>\u6BCF\u6B21\u5237\u76D8 <code>redo log</code> \u8BB0\u5F55\u5230<strong>\u65E5\u5FD7\u6587\u4EF6\u7EC4</strong>\u4E2D\uFF0C<code>write pos</code> \u4F4D\u7F6E\u5C31\u4F1A\u540E\u79FB\u66F4\u65B0\u3002</p><p>\u6BCF\u6B21 <code>MySQL</code> \u52A0\u8F7D<strong>\u65E5\u5FD7\u6587\u4EF6\u7EC4</strong>\u6062\u590D\u6570\u636E\u65F6\uFF0C\u4F1A\u6E05\u7A7A\u52A0\u8F7D\u8FC7\u7684 <code>redo log</code> \u8BB0\u5F55\uFF0C\u5E76\u628A <code>checkpoint</code> \u540E\u79FB\u66F4\u65B0\u3002</p><p><code>write pos</code> \u548C <code>checkpoint</code> \u4E4B\u95F4\u7684\u8FD8\u7A7A\u7740\u7684\u90E8\u5206\u53EF\u4EE5\u7528\u6765\u5199\u5165\u65B0\u7684 <code>redo log</code> \u8BB0\u5F55\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/11.png" alt="" loading="lazy"></p><p>\u5982\u679C <code>write pos</code> \u8FFD\u4E0A <code>checkpoint</code> \uFF0C\u8868\u793A<strong>\u65E5\u5FD7\u6587\u4EF6\u7EC4</strong>\u6EE1\u4E86\uFF0C\u8FD9\u65F6\u5019\u4E0D\u80FD\u518D\u5199\u5165\u65B0\u7684 <code>redo log</code> \u8BB0\u5F55\uFF0C<code>MySQL</code> \u5F97\u505C\u4E0B\u6765\uFF0C\u6E05\u7A7A\u4E00\u4E9B\u8BB0\u5F55\uFF0C\u628A <code>checkpoint</code> \u63A8\u8FDB\u4E00\u4E0B\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/12.png" alt="" loading="lazy"></p><h3 id="redo-log-\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#redo-log-\u5C0F\u7ED3" aria-hidden="true">#</a> redo log \u5C0F\u7ED3</h3><p>\u76F8\u4FE1\u5927\u5BB6\u90FD\u77E5\u9053 <code>redo log</code> \u7684\u4F5C\u7528\u548C\u5B83\u7684\u5237\u76D8\u65F6\u673A\u3001\u5B58\u50A8\u5F62\u5F0F\u3002</p><p>\u73B0\u5728\u6211\u4EEC\u6765\u601D\u8003\u4E00\u4E2A\u95EE\u9898\uFF1A <strong>\u53EA\u8981\u6BCF\u6B21\u628A\u4FEE\u6539\u540E\u7684\u6570\u636E\u9875\u76F4\u63A5\u5237\u76D8\u4E0D\u5C31\u597D\u4E86\uFF0C\u8FD8\u6709 <code>redo log</code> \u4EC0\u4E48\u4E8B\uFF1F</strong></p><p>\u5B83\u4EEC\u4E0D\u90FD\u662F\u5237\u76D8\u4E48\uFF1F\u5DEE\u522B\u5728\u54EA\u91CC\uFF1F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1</span> <span class="token class-name">Byte</span> <span class="token operator">=</span> <span class="token number">8</span>bit
<span class="token number">1</span> KB <span class="token operator">=</span> <span class="token number">1024</span> <span class="token class-name">Byte</span>
<span class="token number">1</span> MB <span class="token operator">=</span> <span class="token number">1024</span> KB
<span class="token number">1</span> GB <span class="token operator">=</span> <span class="token number">1024</span> MB
<span class="token number">1</span> TB <span class="token operator">=</span> <span class="token number">1024</span> GB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5B9E\u9645\u4E0A\uFF0C\u6570\u636E\u9875\u5927\u5C0F\u662F<code>16KB</code>\uFF0C\u5237\u76D8\u6BD4\u8F83\u8017\u65F6\uFF0C\u53EF\u80FD\u5C31\u4FEE\u6539\u4E86\u6570\u636E\u9875\u91CC\u7684\u51E0 <code>Byte</code> \u6570\u636E\uFF0C\u6709\u5FC5\u8981\u628A\u5B8C\u6574\u7684\u6570\u636E\u9875\u5237\u76D8\u5417\uFF1F</p><p>\u800C\u4E14\u6570\u636E\u9875\u5237\u76D8\u662F\u968F\u673A\u5199\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u6570\u636E\u9875\u5BF9\u5E94\u7684\u4F4D\u7F6E\u53EF\u80FD\u5728\u786C\u76D8\u6587\u4EF6\u7684\u968F\u673A\u4F4D\u7F6E\uFF0C\u6240\u4EE5\u6027\u80FD\u662F\u5F88\u5DEE\u3002</p><p>\u5982\u679C\u662F\u5199 <code>redo log</code>\uFF0C\u4E00\u884C\u8BB0\u5F55\u53EF\u80FD\u5C31\u5360\u51E0\u5341 <code>Byte</code>\uFF0C\u53EA\u5305\u542B\u8868\u7A7A\u95F4\u53F7\u3001\u6570\u636E\u9875\u53F7\u3001\u78C1\u76D8\u6587\u4EF6\u504F\u79FB \u91CF\u3001\u66F4\u65B0\u503C\uFF0C\u518D\u52A0\u4E0A\u662F\u987A\u5E8F\u5199\uFF0C\u6240\u4EE5\u5237\u76D8\u901F\u5EA6\u5F88\u5FEB\u3002</p><p>\u6240\u4EE5\u7528 <code>redo log</code> \u5F62\u5F0F\u8BB0\u5F55\u4FEE\u6539\u5185\u5BB9\uFF0C\u6027\u80FD\u4F1A\u8FDC\u8FDC\u8D85\u8FC7\u5237\u6570\u636E\u9875\u7684\u65B9\u5F0F\uFF0C\u8FD9\u4E5F\u8BA9\u6570\u636E\u5E93\u7684\u5E76\u53D1\u80FD\u529B\u66F4\u5F3A\u3002</p><blockquote><p>\u5176\u5B9E\u5185\u5B58\u7684\u6570\u636E\u9875\u5728\u4E00\u5B9A\u65F6\u673A\u4E5F\u4F1A\u5237\u76D8\uFF0C\u6211\u4EEC\u628A\u8FD9\u79F0\u4E3A\u9875\u5408\u5E76\uFF0C\u8BB2 <code>Buffer Pool</code>\u7684\u65F6\u5019\u4F1A\u5BF9\u8FD9\u5757\u7EC6\u8BF4</p></blockquote><h2 id="binlog" tabindex="-1"><a class="header-anchor" href="#binlog" aria-hidden="true">#</a> binlog</h2><p><code>redo log</code> \u5B83\u662F\u7269\u7406\u65E5\u5FD7\uFF0C\u8BB0\u5F55\u5185\u5BB9\u662F\u201C\u5728\u67D0\u4E2A\u6570\u636E\u9875\u4E0A\u505A\u4E86\u4EC0\u4E48\u4FEE\u6539\u201D\uFF0C\u5C5E\u4E8E <code>InnoDB</code> \u5B58\u50A8\u5F15\u64CE\u3002</p><p>\u800C <code>binlog</code> \u662F\u903B\u8F91\u65E5\u5FD7\uFF0C\u8BB0\u5F55\u5185\u5BB9\u662F\u8BED\u53E5\u7684\u539F\u59CB\u903B\u8F91\uFF0C\u7C7B\u4F3C\u4E8E\u201C\u7ED9 ID=2 \u8FD9\u4E00\u884C\u7684 c \u5B57\u6BB5\u52A0 1\u201D\uFF0C\u5C5E\u4E8E<code>MySQL Server</code> \u5C42\u3002</p><p>\u4E0D\u7BA1\u7528\u4EC0\u4E48\u5B58\u50A8\u5F15\u64CE\uFF0C\u53EA\u8981\u53D1\u751F\u4E86\u8868\u6570\u636E\u66F4\u65B0\uFF0C\u90FD\u4F1A\u4EA7\u751F <code>binlog</code> \u65E5\u5FD7\u3002</p><p>\u90A3 <code>binlog</code> \u5230\u5E95\u662F\u7528\u6765\u5E72\u561B\u7684\uFF1F</p><p>\u53EF\u4EE5\u8BF4<code>MySQL</code>\u6570\u636E\u5E93\u7684<strong>\u6570\u636E\u5907\u4EFD\u3001\u4E3B\u5907\u3001\u4E3B\u4E3B\u3001\u4E3B\u4ECE</strong>\u90FD\u79BB\u4E0D\u5F00<code>binlog</code>\uFF0C\u9700\u8981\u4F9D\u9760<code>binlog</code>\u6765\u540C\u6B65\u6570\u636E\uFF0C\u4FDD\u8BC1\u6570\u636E\u4E00\u81F4\u6027\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/01-20220305234724956.png" alt="" loading="lazy"></p><p><code>binlog</code>\u4F1A\u8BB0\u5F55\u6240\u6709\u6D89\u53CA\u66F4\u65B0\u6570\u636E\u7684\u903B\u8F91\u64CD\u4F5C\uFF0C\u5E76\u4E14\u662F\u987A\u5E8F\u5199\u3002</p><h3 id="\u8BB0\u5F55\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BB0\u5F55\u683C\u5F0F" aria-hidden="true">#</a> \u8BB0\u5F55\u683C\u5F0F</h3><p><code>binlog</code> \u65E5\u5FD7\u6709\u4E09\u79CD\u683C\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>binlog_format</code>\u53C2\u6570\u6307\u5B9A\u3002</p><ul><li><strong>statement</strong></li><li><strong>row</strong></li><li><strong>mixed</strong></li></ul><p>\u6307\u5B9A<code>statement</code>\uFF0C\u8BB0\u5F55\u7684\u5185\u5BB9\u662F<code>SQL</code>\u8BED\u53E5\u539F\u6587\uFF0C\u6BD4\u5982\u6267\u884C\u4E00\u6761<code>update T set update_time=now() where id=1</code>\uFF0C\u8BB0\u5F55\u7684\u5185\u5BB9\u5982\u4E0B\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/02-20220305234738688.png" alt="" loading="lazy"></p><p>\u540C\u6B65\u6570\u636E\u65F6\uFF0C\u4F1A\u6267\u884C\u8BB0\u5F55\u7684<code>SQL</code>\u8BED\u53E5\uFF0C\u4F46\u662F\u6709\u4E2A\u95EE\u9898\uFF0C<code>update_time=now()</code>\u8FD9\u91CC\u4F1A\u83B7\u53D6\u5F53\u524D\u7CFB\u7EDF\u65F6\u95F4\uFF0C\u76F4\u63A5\u6267\u884C\u4F1A\u5BFC\u81F4\u4E0E\u539F\u5E93\u7684\u6570\u636E\u4E0D\u4E00\u81F4\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u79CD\u95EE\u9898\uFF0C\u6211\u4EEC\u9700\u8981\u6307\u5B9A\u4E3A<code>row</code>\uFF0C\u8BB0\u5F55\u7684\u5185\u5BB9\u4E0D\u518D\u662F\u7B80\u5355\u7684<code>SQL</code>\u8BED\u53E5\u4E86\uFF0C\u8FD8\u5305\u542B\u64CD\u4F5C\u7684\u5177\u4F53\u6570\u636E\uFF0C\u8BB0\u5F55\u5185\u5BB9\u5982\u4E0B\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/03-20220305234742460.png" alt="" loading="lazy"></p><p><code>row</code>\u683C\u5F0F\u8BB0\u5F55\u7684\u5185\u5BB9\u770B\u4E0D\u5230\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8981\u901A\u8FC7<code>mysqlbinlog</code>\u5DE5\u5177\u89E3\u6790\u51FA\u6765\u3002</p><p><code>update_time=now()</code>\u53D8\u6210\u4E86\u5177\u4F53\u7684\u65F6\u95F4<code>update_time=1627112756247</code>\uFF0C\u6761\u4EF6\u540E\u9762\u7684@1\u3001@2\u3001@3 \u90FD\u662F\u8BE5\u884C\u6570\u636E\u7B2C 1 \u4E2A~3 \u4E2A\u5B57\u6BB5\u7684\u539F\u59CB\u503C\uFF08<strong>\u5047\u8BBE\u8FD9\u5F20\u8868\u53EA\u6709 3 \u4E2A\u5B57\u6BB5</strong>\uFF09\u3002</p><p>\u8FD9\u6837\u5C31\u80FD\u4FDD\u8BC1\u540C\u6B65\u6570\u636E\u7684\u4E00\u81F4\u6027\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u90FD\u662F\u6307\u5B9A\u4E3A<code>row</code>\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4E3A\u6570\u636E\u5E93\u7684\u6062\u590D\u4E0E\u540C\u6B65\u5E26\u6765\u66F4\u597D\u7684\u53EF\u9760\u6027\u3002</p><p>\u4F46\u662F\u8FD9\u79CD\u683C\u5F0F\uFF0C\u9700\u8981\u66F4\u5927\u7684\u5BB9\u91CF\u6765\u8BB0\u5F55\uFF0C\u6BD4\u8F83\u5360\u7528\u7A7A\u95F4\uFF0C\u6062\u590D\u4E0E\u540C\u6B65\u65F6\u4F1A\u66F4\u6D88\u8017<code>IO</code>\u8D44\u6E90\uFF0C\u5F71\u54CD\u6267\u884C\u901F\u5EA6\u3002</p><p>\u6240\u4EE5\u5C31\u6709\u4E86\u4E00\u79CD\u6298\u4E2D\u7684\u65B9\u6848\uFF0C\u6307\u5B9A\u4E3A<code>mixed</code>\uFF0C\u8BB0\u5F55\u7684\u5185\u5BB9\u662F\u524D\u4E24\u8005\u7684\u6DF7\u5408\u3002</p><p><code>MySQL</code>\u4F1A\u5224\u65AD\u8FD9\u6761<code>SQL</code>\u8BED\u53E5\u662F\u5426\u53EF\u80FD\u5F15\u8D77\u6570\u636E\u4E0D\u4E00\u81F4\uFF0C\u5982\u679C\u662F\uFF0C\u5C31\u7528<code>row</code>\u683C\u5F0F\uFF0C\u5426\u5219\u5C31\u7528<code>statement</code>\u683C\u5F0F\u3002</p><h3 id="\u5199\u5165\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u5199\u5165\u673A\u5236" aria-hidden="true">#</a> \u5199\u5165\u673A\u5236</h3><p><code>binlog</code>\u7684\u5199\u5165\u65F6\u673A\u4E5F\u975E\u5E38\u7B80\u5355\uFF0C\u4E8B\u52A1\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u5148\u628A\u65E5\u5FD7\u5199\u5230<code>binlog cache</code>\uFF0C\u4E8B\u52A1\u63D0\u4EA4\u7684\u65F6\u5019\uFF0C\u518D\u628A<code>binlog cache</code>\u5199\u5230<code>binlog</code>\u6587\u4EF6\u4E2D\u3002</p><p>\u56E0\u4E3A\u4E00\u4E2A\u4E8B\u52A1\u7684<code>binlog</code>\u4E0D\u80FD\u88AB\u62C6\u5F00\uFF0C\u65E0\u8BBA\u8FD9\u4E2A\u4E8B\u52A1\u591A\u5927\uFF0C\u4E5F\u8981\u786E\u4FDD\u4E00\u6B21\u6027\u5199\u5165\uFF0C\u6240\u4EE5\u7CFB\u7EDF\u4F1A\u7ED9\u6BCF\u4E2A\u7EBF\u7A0B\u5206\u914D\u4E00\u4E2A\u5757\u5185\u5B58\u4F5C\u4E3A<code>binlog cache</code>\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>binlog_cache_size</code>\u53C2\u6570\u63A7\u5236\u5355\u4E2A\u7EBF\u7A0B binlog cache \u5927\u5C0F\uFF0C\u5982\u679C\u5B58\u50A8\u5185\u5BB9\u8D85\u8FC7\u4E86\u8FD9\u4E2A\u53C2\u6570\uFF0C\u5C31\u8981\u6682\u5B58\u5230\u78C1\u76D8\uFF08<code>Swap</code>\uFF09\u3002</p><p><code>binlog</code>\u65E5\u5FD7\u5237\u76D8\u6D41\u7A0B\u5982\u4E0B</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/04-20220305234747840.png" alt="" loading="lazy"></p><ul><li><strong>\u4E0A\u56FE\u7684 write\uFF0C\u662F\u6307\u628A\u65E5\u5FD7\u5199\u5165\u5230\u6587\u4EF6\u7CFB\u7EDF\u7684 page cache\uFF0C\u5E76\u6CA1\u6709\u628A\u6570\u636E\u6301\u4E45\u5316\u5230\u78C1\u76D8\uFF0C\u6240\u4EE5\u901F\u5EA6\u6BD4\u8F83\u5FEB</strong></li><li><strong>\u4E0A\u56FE\u7684 fsync\uFF0C\u624D\u662F\u5C06\u6570\u636E\u6301\u4E45\u5316\u5230\u78C1\u76D8\u7684\u64CD\u4F5C</strong></li></ul><p><code>write</code>\u548C<code>fsync</code>\u7684\u65F6\u673A\uFF0C\u53EF\u4EE5\u7531\u53C2\u6570<code>sync_binlog</code>\u63A7\u5236\uFF0C\u9ED8\u8BA4\u662F<code>0</code>\u3002</p><p>\u4E3A<code>0</code>\u7684\u65F6\u5019\uFF0C\u8868\u793A\u6BCF\u6B21\u63D0\u4EA4\u4E8B\u52A1\u90FD\u53EA<code>write</code>\uFF0C\u7531\u7CFB\u7EDF\u81EA\u884C\u5224\u65AD\u4EC0\u4E48\u65F6\u5019\u6267\u884C<code>fsync</code>\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/05-20220305234754405.png" alt="" loading="lazy"></p><p>\u867D\u7136\u6027\u80FD\u5F97\u5230\u63D0\u5347\uFF0C\u4F46\u662F\u673A\u5668\u5B95\u673A\uFF0C<code>page cache</code>\u91CC\u9762\u7684 binlog \u4F1A\u4E22\u5931\u3002</p><p>\u4E3A\u4E86\u5B89\u5168\u8D77\u89C1\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A<code>1</code>\uFF0C\u8868\u793A\u6BCF\u6B21\u63D0\u4EA4\u4E8B\u52A1\u90FD\u4F1A\u6267\u884C<code>fsync</code>\uFF0C\u5C31\u5982\u540C <strong>redo log \u65E5\u5FD7\u5237\u76D8\u6D41\u7A0B</strong> \u4E00\u6837\u3002</p><p>\u6700\u540E\u8FD8\u6709\u4E00\u79CD\u6298\u4E2D\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A<code>N(N&gt;1)</code>\uFF0C\u8868\u793A\u6BCF\u6B21\u63D0\u4EA4\u4E8B\u52A1\u90FD<code>write</code>\uFF0C\u4F46\u7D2F\u79EF<code>N</code>\u4E2A\u4E8B\u52A1\u540E\u624D<code>fsync</code>\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/06-20220305234801592.png" alt="" loading="lazy"></p><p>\u5728\u51FA\u73B0<code>IO</code>\u74F6\u9888\u7684\u573A\u666F\u91CC\uFF0C\u5C06<code>sync_binlog</code>\u8BBE\u7F6E\u6210\u4E00\u4E2A\u6BD4\u8F83\u5927\u7684\u503C\uFF0C\u53EF\u4EE5\u63D0\u5347\u6027\u80FD\u3002</p><p>\u540C\u6837\u7684\uFF0C\u5982\u679C\u673A\u5668\u5B95\u673A\uFF0C\u4F1A\u4E22\u5931\u6700\u8FD1<code>N</code>\u4E2A\u4E8B\u52A1\u7684<code>binlog</code>\u65E5\u5FD7\u3002</p><h2 id="\u4E24\u9636\u6BB5\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u4E24\u9636\u6BB5\u63D0\u4EA4" aria-hidden="true">#</a> \u4E24\u9636\u6BB5\u63D0\u4EA4</h2><p><code>redo log</code>\uFF08\u91CD\u505A\u65E5\u5FD7\uFF09\u8BA9<code>InnoDB</code>\u5B58\u50A8\u5F15\u64CE\u62E5\u6709\u4E86\u5D29\u6E83\u6062\u590D\u80FD\u529B\u3002</p><p><code>binlog</code>\uFF08\u5F52\u6863\u65E5\u5FD7\uFF09\u4FDD\u8BC1\u4E86<code>MySQL</code>\u96C6\u7FA4\u67B6\u6784\u7684\u6570\u636E\u4E00\u81F4\u6027\u3002</p><p>\u867D\u7136\u5B83\u4EEC\u90FD\u5C5E\u4E8E\u6301\u4E45\u5316\u7684\u4FDD\u8BC1\uFF0C\u4F46\u662F\u4FA7\u91CD\u70B9\u4E0D\u540C\u3002</p><p>\u5728\u6267\u884C\u66F4\u65B0\u8BED\u53E5\u8FC7\u7A0B\uFF0C\u4F1A\u8BB0\u5F55<code>redo log</code>\u4E0E<code>binlog</code>\u4E24\u5757\u65E5\u5FD7\uFF0C\u4EE5\u57FA\u672C\u7684\u4E8B\u52A1\u4E3A\u5355\u4F4D\uFF0C<code>redo log</code>\u5728\u4E8B\u52A1\u6267\u884C\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u4E0D\u65AD\u5199\u5165\uFF0C\u800C<code>binlog</code>\u53EA\u6709\u5728\u63D0\u4EA4\u4E8B\u52A1\u65F6\u624D\u5199\u5165\uFF0C\u6240\u4EE5<code>redo log</code>\u4E0E<code>binlog</code>\u7684\u5199\u5165\u65F6\u673A\u4E0D\u4E00\u6837\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/01-20220305234816065.png" alt="" loading="lazy"></p><p>\u56DE\u5230\u6B63\u9898\uFF0C<code>redo log</code>\u4E0E<code>binlog</code>\u4E24\u4EFD\u65E5\u5FD7\u4E4B\u95F4\u7684\u903B\u8F91\u4E0D\u4E00\u81F4\uFF0C\u4F1A\u51FA\u73B0\u4EC0\u4E48\u95EE\u9898\uFF1F</p><p>\u6211\u4EEC\u4EE5<code>update</code>\u8BED\u53E5\u4E3A\u4F8B\uFF0C\u5047\u8BBE<code>id=2</code>\u7684\u8BB0\u5F55\uFF0C\u5B57\u6BB5<code>c</code>\u503C\u662F<code>0</code>\uFF0C\u628A\u5B57\u6BB5<code>c</code>\u503C\u66F4\u65B0\u6210<code>1</code>\uFF0C<code>SQL</code>\u8BED\u53E5\u4E3A<code>update T set c=1 where id=2</code>\u3002</p><p>\u5047\u8BBE\u6267\u884C\u8FC7\u7A0B\u4E2D\u5199\u5B8C<code>redo log</code>\u65E5\u5FD7\u540E\uFF0C<code>binlog</code>\u65E5\u5FD7\u5199\u671F\u95F4\u53D1\u751F\u4E86\u5F02\u5E38\uFF0C\u4F1A\u51FA\u73B0\u4EC0\u4E48\u60C5\u51B5\u5462\uFF1F</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/02-20220305234828662.png" alt="" loading="lazy"></p><p>\u7531\u4E8E<code>binlog</code>\u6CA1\u5199\u5B8C\u5C31\u5F02\u5E38\uFF0C\u8FD9\u65F6\u5019<code>binlog</code>\u91CC\u9762\u6CA1\u6709\u5BF9\u5E94\u7684\u4FEE\u6539\u8BB0\u5F55\u3002\u56E0\u6B64\uFF0C\u4E4B\u540E\u7528<code>binlog</code>\u65E5\u5FD7\u6062\u590D\u6570\u636E\u65F6\uFF0C\u5C31\u4F1A\u5C11\u8FD9\u4E00\u6B21\u66F4\u65B0\uFF0C\u6062\u590D\u51FA\u6765\u7684\u8FD9\u4E00\u884C<code>c</code>\u503C\u662F<code>0</code>\uFF0C\u800C\u539F\u5E93\u56E0\u4E3A<code>redo log</code>\u65E5\u5FD7\u6062\u590D\uFF0C\u8FD9\u4E00\u884C<code>c</code>\u503C\u662F<code>1</code>\uFF0C\u6700\u7EC8\u6570\u636E\u4E0D\u4E00\u81F4\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/03-20220305235104445.png" alt="" loading="lazy"></p><p>\u4E3A\u4E86\u89E3\u51B3\u4E24\u4EFD\u65E5\u5FD7\u4E4B\u95F4\u7684\u903B\u8F91\u4E00\u81F4\u95EE\u9898\uFF0C<code>InnoDB</code>\u5B58\u50A8\u5F15\u64CE\u4F7F\u7528<strong>\u4E24\u9636\u6BB5\u63D0\u4EA4</strong>\u65B9\u6848\u3002</p><p>\u539F\u7406\u5F88\u7B80\u5355\uFF0C\u5C06<code>redo log</code>\u7684\u5199\u5165\u62C6\u6210\u4E86\u4E24\u4E2A\u6B65\u9AA4<code>prepare</code>\u548C<code>commit</code>\uFF0C\u8FD9\u5C31\u662F<strong>\u4E24\u9636\u6BB5\u63D0\u4EA4</strong>\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/04-20220305234956774.png" alt="" loading="lazy"></p><p>\u4F7F\u7528<strong>\u4E24\u9636\u6BB5\u63D0\u4EA4</strong>\u540E\uFF0C\u5199\u5165<code>binlog</code>\u65F6\u53D1\u751F\u5F02\u5E38\u4E5F\u4E0D\u4F1A\u6709\u5F71\u54CD\uFF0C\u56E0\u4E3A<code>MySQL</code>\u6839\u636E<code>redo log</code>\u65E5\u5FD7\u6062\u590D\u6570\u636E\u65F6\uFF0C\u53D1\u73B0<code>redo log</code>\u8FD8\u5904\u4E8E<code>prepare</code>\u9636\u6BB5\uFF0C\u5E76\u4E14\u6CA1\u6709\u5BF9\u5E94<code>binlog</code>\u65E5\u5FD7\uFF0C\u5C31\u4F1A\u56DE\u6EDA\u8BE5\u4E8B\u52A1\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/05-20220305234937243.png" alt="" loading="lazy"></p><p>\u518D\u770B\u4E00\u4E2A\u573A\u666F\uFF0C<code>redo log</code>\u8BBE\u7F6E<code>commit</code>\u9636\u6BB5\u53D1\u751F\u5F02\u5E38\uFF0C\u90A3\u4F1A\u4E0D\u4F1A\u56DE\u6EDA\u4E8B\u52A1\u5462\uFF1F</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/06-20220305234907651.png" alt="" loading="lazy"></p><p>\u5E76\u4E0D\u4F1A\u56DE\u6EDA\u4E8B\u52A1\uFF0C\u5B83\u4F1A\u6267\u884C\u4E0A\u56FE\u6846\u4F4F\u7684\u903B\u8F91\uFF0C\u867D\u7136<code>redo log</code>\u662F\u5904\u4E8E<code>prepare</code>\u9636\u6BB5\uFF0C\u4F46\u662F\u80FD\u901A\u8FC7\u4E8B\u52A1<code>id</code>\u627E\u5230\u5BF9\u5E94\u7684<code>binlog</code>\u65E5\u5FD7\uFF0C\u6240\u4EE5<code>MySQL</code>\u8BA4\u4E3A\u662F\u5B8C\u6574\u7684\uFF0C\u5C31\u4F1A\u63D0\u4EA4\u4E8B\u52A1\u6062\u590D\u6570\u636E\u3002</p><h2 id="undo-log" tabindex="-1"><a class="header-anchor" href="#undo-log" aria-hidden="true">#</a> undo log</h2><blockquote><p>\u8FD9\u90E8\u5206\u5185\u5BB9\u4E3A JavaGuide \u7684\u8865\u5145\uFF1A</p></blockquote><p>\u6211\u4EEC\u77E5\u9053\u5982\u679C\u60F3\u8981\u4FDD\u8BC1\u4E8B\u52A1\u7684\u539F\u5B50\u6027\uFF0C\u5C31\u9700\u8981\u5728\u5F02\u5E38\u53D1\u751F\u65F6\uFF0C\u5BF9\u5DF2\u7ECF\u6267\u884C\u7684\u64CD\u4F5C\u8FDB\u884C<strong>\u56DE\u6EDA</strong>\uFF0C\u5728 MySQL \u4E2D\uFF0C\u6062\u590D\u673A\u5236\u662F\u901A\u8FC7 <strong>\u56DE\u6EDA\u65E5\u5FD7\uFF08undo log\uFF09</strong> \u5B9E\u73B0\u7684\uFF0C\u6240\u6709\u4E8B\u52A1\u8FDB\u884C\u7684\u4FEE\u6539\u90FD\u4F1A\u5148\u8BB0\u5F55\u5230\u8FD9\u4E2A\u56DE\u6EDA\u65E5\u5FD7\u4E2D\uFF0C\u7136\u540E\u518D\u6267\u884C\u76F8\u5173\u7684\u64CD\u4F5C\u3002\u5982\u679C\u6267\u884C\u8FC7\u7A0B\u4E2D\u9047\u5230\u5F02\u5E38\u7684\u8BDD\uFF0C\u6211\u4EEC\u76F4\u63A5\u5229\u7528 <strong>\u56DE\u6EDA\u65E5\u5FD7</strong> \u4E2D\u7684\u4FE1\u606F\u5C06\u6570\u636E\u56DE\u6EDA\u5230\u4FEE\u6539\u4E4B\u524D\u7684\u6837\u5B50\u5373\u53EF\uFF01\u5E76\u4E14\uFF0C\u56DE\u6EDA\u65E5\u5FD7\u4F1A\u5148\u4E8E\u6570\u636E\u6301\u4E45\u5316\u5230\u78C1\u76D8\u4E0A\u3002\u8FD9\u6837\u5C31\u4FDD\u8BC1\u4E86\u5373\u4F7F\u9047\u5230\u6570\u636E\u5E93\u7A81\u7136\u5B95\u673A\u7B49\u60C5\u51B5\uFF0C\u5F53\u7528\u6237\u518D\u6B21\u542F\u52A8\u6570\u636E\u5E93\u7684\u65F6\u5019\uFF0C\u6570\u636E\u5E93\u8FD8\u80FD\u591F\u901A\u8FC7\u67E5\u8BE2\u56DE\u6EDA\u65E5\u5FD7\u6765\u56DE\u6EDA\u5C06\u4E4B\u524D\u672A\u5B8C\u6210\u7684\u4E8B\u52A1\u3002</p><p>\u53E6\u5916\uFF0C<code>MVCC</code> \u7684\u5B9E\u73B0\u4F9D\u8D56\u4E8E\uFF1A<strong>\u9690\u85CF\u5B57\u6BB5\u3001Read View\u3001undo log</strong>\u3002\u5728\u5185\u90E8\u5B9E\u73B0\u4E2D\uFF0C<code>InnoDB</code> \u901A\u8FC7\u6570\u636E\u884C\u7684 <code>DB_TRX_ID</code> \u548C <code>Read View</code> \u6765\u5224\u65AD\u6570\u636E\u7684\u53EF\u89C1\u6027\uFF0C\u5982\u4E0D\u53EF\u89C1\uFF0C\u5219\u901A\u8FC7\u6570\u636E\u884C\u7684 <code>DB_ROLL_PTR</code> \u627E\u5230 <code>undo log</code> \u4E2D\u7684\u5386\u53F2\u7248\u672C\u3002\u6BCF\u4E2A\u4E8B\u52A1\u8BFB\u5230\u7684\u6570\u636E\u7248\u672C\u53EF\u80FD\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u5728\u540C\u4E00\u4E2A\u4E8B\u52A1\u4E2D\uFF0C\u7528\u6237\u53EA\u80FD\u770B\u5230\u8BE5\u4E8B\u52A1\u521B\u5EFA <code>Read View</code> \u4E4B\u524D\u5DF2\u7ECF\u63D0\u4EA4\u7684\u4FEE\u6539\u548C\u8BE5\u4E8B\u52A1\u672C\u8EAB\u505A\u7684\u4FEE\u6539</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><blockquote><p>\u8FD9\u90E8\u5206\u5185\u5BB9\u4E3A JavaGuide \u7684\u8865\u5145\uFF1A</p></blockquote><p>MySQL InnoDB \u5F15\u64CE\u4F7F\u7528 <strong>redo log(\u91CD\u505A\u65E5\u5FD7)</strong> \u4FDD\u8BC1\u4E8B\u52A1\u7684<strong>\u6301\u4E45\u6027</strong>\uFF0C\u4F7F\u7528 <strong>undo log(\u56DE\u6EDA\u65E5\u5FD7)</strong> \u6765\u4FDD\u8BC1\u4E8B\u52A1\u7684<strong>\u539F\u5B50\u6027</strong>\u3002</p><p><code>MySQL</code>\u6570\u636E\u5E93\u7684<strong>\u6570\u636E\u5907\u4EFD\u3001\u4E3B\u5907\u3001\u4E3B\u4E3B\u3001\u4E3B\u4ECE</strong>\u90FD\u79BB\u4E0D\u5F00<code>binlog</code>\uFF0C\u9700\u8981\u4F9D\u9760<code>binlog</code>\u6765\u540C\u6B65\u6570\u636E\uFF0C\u4FDD\u8BC1\u6570\u636E\u4E00\u81F4\u6027\u3002</p><h2 id="\u7AD9\u5728\u5DE8\u4EBA\u7684\u80A9\u8180\u4E0A" tabindex="-1"><a class="header-anchor" href="#\u7AD9\u5728\u5DE8\u4EBA\u7684\u80A9\u8180\u4E0A" aria-hidden="true">#</a> \u7AD9\u5728\u5DE8\u4EBA\u7684\u80A9\u8180\u4E0A</h2><ul><li>\u300AMySQL \u5B9E\u6218 45 \u8BB2\u300B</li><li>\u300A\u4ECE\u96F6\u5F00\u59CB\u5E26\u4F60\u6210\u4E3A MySQL \u5B9E\u6218\u4F18\u5316\u9AD8\u624B\u300B</li><li>\u300AMySQL \u662F\u600E\u6837\u8FD0\u884C\u7684\uFF1A\u4ECE\u6839\u513F\u4E0A\u7406\u89E3 MySQL\u300B</li><li>\u300AMySQL \u6280\u672F Innodb \u5B58\u50A8\u5F15\u64CE\u300B</li></ul><h2 id="mysql-\u597D\u6587\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#mysql-\u597D\u6587\u63A8\u8350" aria-hidden="true">#</a> MySQL \u597D\u6587\u63A8\u8350</h2>`,132),r={href:"https://mp.weixin.qq.com/s/R-1km7r0z3oWfwYQV8iiqA",target:"_blank",rel:"noopener noreferrer"},h=c("CURD \u8FD9\u4E48\u591A\u5E74\uFF0C\u4F60\u6709\u4E86\u89E3\u8FC7 MySQL \u7684\u67B6\u6784\u8BBE\u8BA1\u5417\uFF1F"),u={href:"https://mp.weixin.qq.com/s/7Kab4IQsNcU_bZdbv_MuOg",target:"_blank",rel:"noopener noreferrer"},b=c("\u6D45\u8C08 MySQL InnoDB \u7684\u5185\u5B58\u7EC4\u4EF6");function m(y,f){const e=a("ExternalLinkIcon");return l(),s(i,null,[t,o("ul",null,[o("li",null,[o("a",r,[h,d(e)])]),o("li",null,[o("a",u,[b,d(e)])])])],64)}var z=n(p,[["render",m],["__file","mysql-logs.html.vue"]]);export{z as default};
