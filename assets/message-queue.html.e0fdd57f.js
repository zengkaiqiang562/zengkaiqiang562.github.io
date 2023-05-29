import{_ as t,e}from"./app.625aa393.js";const a={},s=e('<h1 id="\u6D88\u606F\u961F\u5217\u77E5\u8BC6\u70B9-\u9762\u8BD5\u9898\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u961F\u5217\u77E5\u8BC6\u70B9-\u9762\u8BD5\u9898\u603B\u7ED3" aria-hidden="true">#</a> \u6D88\u606F\u961F\u5217\u77E5\u8BC6\u70B9&amp;\u9762\u8BD5\u9898\u603B\u7ED3</h1><p>\u201CRabbitMQ\uFF1F\u201D\u201CKafka\uFF1F\u201D\u201CRocketMQ\uFF1F\u201D...\u5728\u65E5\u5E38\u5B66\u4E60\u4E0E\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5E38\u5E38\u542C\u5230\u6D88\u606F\u961F\u5217\u8FD9\u4E2A\u5173\u952E\u8BCD\u3002\u6211\u4E5F\u5728\u6211\u7684\u591A\u7BC7\u6587\u7AE0\u4E2D\u63D0\u5230\u4E86\u8FD9\u4E2A\u6982\u5FF5\u3002\u53EF\u80FD\u4F60\u662F\u719F\u7EC3\u4F7F\u7528\u6D88\u606F\u961F\u5217\u7684\u8001\u624B\uFF0C\u53C8\u6216\u8005\u4F60\u662F\u4E0D\u61C2\u6D88\u606F\u961F\u5217\u7684\u65B0\u624B\uFF0C\u4E0D\u8BBA\u4F60\u4E86\u4E0D\u4E86\u89E3\u6D88\u606F\u961F\u5217\uFF0C\u672C\u6587\u90FD\u5C06\u5E26\u4F60\u641E\u61C2\u6D88\u606F\u961F\u5217\u7684\u4E00\u4E9B\u57FA\u672C\u7406\u8BBA\u3002\u5982\u679C\u4F60\u662F\u8001\u624B\uFF0C\u4F60\u53EF\u80FD\u4ECE\u672C\u6587\u5B66\u5230\u4F60\u4E4B\u524D\u4E0D\u66FE\u6CE8\u610F\u7684\u4E00\u4E9B\u5173\u4E8E\u6D88\u606F\u961F\u5217\u7684\u91CD\u8981\u6982\u5FF5\uFF0C\u5982\u679C\u4F60\u662F\u65B0\u624B\uFF0C\u76F8\u4FE1\u672C\u6587\u5C06\u662F\u4F60\u6253\u5F00\u6D88\u606F\u961F\u5217\u5927\u95E8\u7684\u4E00\u677F\u7816\u3002</p><h2 id="\u4E00-\u4EC0\u4E48\u662F\u6D88\u606F\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u4EC0\u4E48\u662F\u6D88\u606F\u961F\u5217" aria-hidden="true">#</a> \u4E00 \u4EC0\u4E48\u662F\u6D88\u606F\u961F\u5217</h2><p>\u6211\u4EEC\u53EF\u4EE5\u628A\u6D88\u606F\u961F\u5217\u770B\u4F5C\u662F\u4E00\u4E2A\u5B58\u653E\u6D88\u606F\u7684\u5BB9\u5668\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u6D88\u606F\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u4ECE\u5BB9\u5668\u4E2D\u53D6\u51FA\u6D88\u606F\u4F9B\u81EA\u5DF1\u4F7F\u7528\u5373\u53EF\u3002</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/\u6D88\u606F\u961F\u5217/message-queue-small.png" alt="Message queue" loading="lazy"></p><p>\u6D88\u606F\u961F\u5217\u662F\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u91CD\u8981\u7684\u7EC4\u4EF6\u4E4B\u4E00\u3002\u4F7F\u7528\u6D88\u606F\u961F\u5217\u4E3B\u8981\u662F\u4E3A\u4E86\u901A\u8FC7\u5F02\u6B65\u5904\u7406\u63D0\u9AD8\u7CFB\u7EDF\u6027\u80FD\u548C\u524A\u5CF0\u3001\u964D\u4F4E\u7CFB\u7EDF\u8026\u5408\u6027\u3002</p><p>\u6211\u4EEC\u77E5\u9053\u961F\u5217 Queue \u662F\u4E00\u79CD\u5148\u8FDB\u5148\u51FA\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6240\u4EE5\u6D88\u8D39\u6D88\u606F\u65F6\u4E5F\u662F\u6309\u7167\u987A\u5E8F\u6765\u6D88\u8D39\u7684\u3002</p><h2 id="\u4E8C-\u4E3A\u4EC0\u4E48\u8981\u7528\u6D88\u606F\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u4E3A\u4EC0\u4E48\u8981\u7528\u6D88\u606F\u961F\u5217" aria-hidden="true">#</a> \u4E8C \u4E3A\u4EC0\u4E48\u8981\u7528\u6D88\u606F\u961F\u5217</h2><p>\u901A\u5E38\u6765\u8BF4\uFF0C\u4F7F\u7528\u6D88\u606F\u961F\u5217\u80FD\u4E3A\u6211\u4EEC\u7684\u7CFB\u7EDF\u5E26\u6765\u4E0B\u9762\u4E09\u70B9\u597D\u5904\uFF1A</p><ol><li><strong>\u901A\u8FC7\u5F02\u6B65\u5904\u7406\u63D0\u9AD8\u7CFB\u7EDF\u6027\u80FD\uFF08\u51CF\u5C11\u54CD\u5E94\u6240\u9700\u65F6\u95F4\uFF09\u3002</strong></li><li><strong>\u524A\u5CF0/\u9650\u6D41</strong></li><li><strong>\u964D\u4F4E\u7CFB\u7EDF\u8026\u5408\u6027\u3002</strong></li></ol><p>\u5982\u679C\u5728\u9762\u8BD5\u7684\u65F6\u5019\u4F60\u88AB\u9762\u8BD5\u5B98\u95EE\u5230\u8FD9\u4E2A\u95EE\u9898\u7684\u8BDD\uFF0C\u4E00\u822C\u60C5\u51B5\u662F\u4F60\u5728\u4F60\u7684\u7B80\u5386\u4E0A\u6D89\u53CA\u5230\u6D88\u606F\u961F\u5217\u8FD9\u65B9\u9762\u7684\u5185\u5BB9\uFF0C\u8FD9\u4E2A\u65F6\u5019\u63A8\u8350\u4F60\u7ED3\u5408\u4F60\u81EA\u5DF1\u7684\u9879\u76EE\u6765\u56DE\u7B54\u3002</p><p>\u300A\u5927\u578B\u7F51\u7AD9\u6280\u672F\u67B6\u6784\u300B\u7B2C\u56DB\u7AE0\u548C\u7B2C\u4E03\u7AE0\u5747\u6709\u63D0\u5230\u6D88\u606F\u961F\u5217\u5BF9\u5E94\u7528\u6027\u80FD\u53CA\u6269\u5C55\u6027\u7684\u63D0\u5347\u3002</p><h3 id="_2-1-\u901A\u8FC7\u5F02\u6B65\u5904\u7406\u63D0\u9AD8\u7CFB\u7EDF\u6027\u80FD-\u51CF\u5C11\u54CD\u5E94\u6240\u9700\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_2-1-\u901A\u8FC7\u5F02\u6B65\u5904\u7406\u63D0\u9AD8\u7CFB\u7EDF\u6027\u80FD-\u51CF\u5C11\u54CD\u5E94\u6240\u9700\u65F6\u95F4" aria-hidden="true">#</a> 2.1 \u901A\u8FC7\u5F02\u6B65\u5904\u7406\u63D0\u9AD8\u7CFB\u7EDF\u6027\u80FD\uFF08\u51CF\u5C11\u54CD\u5E94\u6240\u9700\u65F6\u95F4\uFF09</h3><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/Asynchronous-message-queue.png" alt="\u901A\u8FC7\u5F02\u6B65\u5904\u7406\u63D0\u9AD8\u7CFB\u7EDF\u6027\u80FD" loading="lazy"></p><p>\u5C06\u7528\u6237\u7684\u8BF7\u6C42\u6570\u636E\u5B58\u50A8\u5230\u6D88\u606F\u961F\u5217\u4E4B\u540E\u5C31\u7ACB\u5373\u8FD4\u56DE\u7ED3\u679C\u3002\u968F\u540E\uFF0C\u7CFB\u7EDF\u518D\u5BF9\u6D88\u606F\u8FDB\u884C\u6D88\u8D39\u3002</p><p>\u56E0\u4E3A\u7528\u6237\u8BF7\u6C42\u6570\u636E\u5199\u5165\u6D88\u606F\u961F\u5217\u4E4B\u540E\u5C31\u7ACB\u5373\u8FD4\u56DE\u7ED9\u7528\u6237\u4E86\uFF0C\u4F46\u662F\u8BF7\u6C42\u6570\u636E\u5728\u540E\u7EED\u7684\u4E1A\u52A1\u6821\u9A8C\u3001\u5199\u6570\u636E\u5E93\u7B49\u64CD\u4F5C\u4E2D\u53EF\u80FD\u5931\u8D25\u3002\u56E0\u6B64\uFF0C<strong>\u4F7F\u7528\u6D88\u606F\u961F\u5217\u8FDB\u884C\u5F02\u6B65\u5904\u7406\u4E4B\u540E\uFF0C\u9700\u8981\u9002\u5F53\u4FEE\u6539\u4E1A\u52A1\u6D41\u7A0B\u8FDB\u884C\u914D\u5408</strong>\uFF0C\u6BD4\u5982\u7528\u6237\u5728\u63D0\u4EA4\u8BA2\u5355\u4E4B\u540E\uFF0C\u8BA2\u5355\u6570\u636E\u5199\u5165\u6D88\u606F\u961F\u5217\uFF0C\u4E0D\u80FD\u7ACB\u5373\u8FD4\u56DE\u7528\u6237\u8BA2\u5355\u63D0\u4EA4\u6210\u529F\uFF0C\u9700\u8981\u5728\u6D88\u606F\u961F\u5217\u7684\u8BA2\u5355\u6D88\u8D39\u8005\u8FDB\u7A0B\u771F\u6B63\u5904\u7406\u5B8C\u8BE5\u8BA2\u5355\u4E4B\u540E\uFF0C\u751A\u81F3\u51FA\u5E93\u540E\uFF0C\u518D\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u6216\u77ED\u4FE1\u901A\u77E5\u7528\u6237\u8BA2\u5355\u6210\u529F\uFF0C\u4EE5\u514D\u4EA4\u6613\u7EA0\u7EB7\u3002\u8FD9\u5C31\u7C7B\u4F3C\u6211\u4EEC\u5E73\u65F6\u624B\u673A\u8BA2\u706B\u8F66\u7968\u548C\u7535\u5F71\u7968\u3002</p><h3 id="_2-2-\u524A\u5CF0-\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#_2-2-\u524A\u5CF0-\u9650\u6D41" aria-hidden="true">#</a> 2.2 \u524A\u5CF0/\u9650\u6D41</h3><p><strong>\u5148\u5C06\u77ED\u65F6\u95F4\u9AD8\u5E76\u53D1\u4EA7\u751F\u7684\u4E8B\u52A1\u6D88\u606F\u5B58\u50A8\u5728\u6D88\u606F\u961F\u5217\u4E2D\uFF0C\u7136\u540E\u540E\u7AEF\u670D\u52A1\u518D\u6162\u6162\u6839\u636E\u81EA\u5DF1\u7684\u80FD\u529B\u53BB\u6D88\u8D39\u8FD9\u4E9B\u6D88\u606F\uFF0C\u8FD9\u6837\u5C31\u907F\u514D\u76F4\u63A5\u628A\u540E\u7AEF\u670D\u52A1\u6253\u57AE\u6389\u3002</strong></p><p>\u4E3E\u4F8B\uFF1A\u5728\u7535\u5B50\u5546\u52A1\u4E00\u4E9B\u79D2\u6740\u3001\u4FC3\u9500\u6D3B\u52A8\u4E2D\uFF0C\u5408\u7406\u4F7F\u7528\u6D88\u606F\u961F\u5217\u53EF\u4EE5\u6709\u6548\u62B5\u5FA1\u4FC3\u9500\u6D3B\u52A8\u521A\u5F00\u59CB\u5927\u91CF\u8BA2\u5355\u6D8C\u5165\u5BF9\u7CFB\u7EDF\u7684\u51B2\u51FB\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/\u524A\u5CF0-\u6D88\u606F\u961F\u5217.png" alt="\u524A\u5CF0" loading="lazy"></p><h3 id="_2-3-\u964D\u4F4E\u7CFB\u7EDF\u8026\u5408\u6027" tabindex="-1"><a class="header-anchor" href="#_2-3-\u964D\u4F4E\u7CFB\u7EDF\u8026\u5408\u6027" aria-hidden="true">#</a> 2.3 \u964D\u4F4E\u7CFB\u7EDF\u8026\u5408\u6027</h3><p>\u4F7F\u7528\u6D88\u606F\u961F\u5217\u8FD8\u53EF\u4EE5\u964D\u4F4E\u7CFB\u7EDF\u8026\u5408\u6027\u3002\u6211\u4EEC\u77E5\u9053\u5982\u679C\u6A21\u5757\u4E4B\u95F4\u4E0D\u5B58\u5728\u76F4\u63A5\u8C03\u7528\uFF0C\u90A3\u4E48\u65B0\u589E\u6A21\u5757\u6216\u8005\u4FEE\u6539\u6A21\u5757\u5C31\u5BF9\u5176\u4ED6\u6A21\u5757\u5F71\u54CD\u8F83\u5C0F\uFF0C\u8FD9\u6837\u7CFB\u7EDF\u7684\u53EF\u6269\u5C55\u6027\u65E0\u7591\u66F4\u597D\u4E00\u4E9B\u3002\u8FD8\u662F\u76F4\u63A5\u4E0A\u56FE\u5427\uFF1A</p><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/\u6D88\u606F\u961F\u5217-\u89E3\u8026.png" alt="\u89E3\u8026" loading="lazy"></p><p>\u751F\u4EA7\u8005\uFF08\u5BA2\u6237\u7AEF\uFF09\u53D1\u9001\u6D88\u606F\u5230\u6D88\u606F\u961F\u5217\u4E2D\u53BB\uFF0C\u63A5\u53D7\u8005\uFF08\u670D\u52A1\u7AEF\uFF09\u5904\u7406\u6D88\u606F\uFF0C\u9700\u8981\u6D88\u8D39\u7684\u7CFB\u7EDF\u76F4\u63A5\u53BB\u6D88\u606F\u961F\u5217\u53D6\u6D88\u606F\u8FDB\u884C\u6D88\u8D39\u5373\u53EF\u800C\u4E0D\u9700\u8981\u548C\u5176\u4ED6\u7CFB\u7EDF\u6709\u8026\u5408\uFF0C\u8FD9\u663E\u7136\u4E5F\u63D0\u9AD8\u4E86\u7CFB\u7EDF\u7684\u6269\u5C55\u6027\u3002</p><p><strong>\u6D88\u606F\u961F\u5217\u4F7F\u7528\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u5DE5\u4F5C\uFF0C\u6D88\u606F\u53D1\u9001\u8005\uFF08\u751F\u4EA7\u8005\uFF09\u53D1\u5E03\u6D88\u606F\uFF0C\u4E00\u4E2A\u6216\u591A\u4E2A\u6D88\u606F\u63A5\u53D7\u8005\uFF08\u6D88\u8D39\u8005\uFF09\u8BA2\u9605\u6D88\u606F\u3002</strong> \u4ECE\u4E0A\u56FE\u53EF\u4EE5\u770B\u5230<strong>\u6D88\u606F\u53D1\u9001\u8005\uFF08\u751F\u4EA7\u8005\uFF09\u548C\u6D88\u606F\u63A5\u53D7\u8005\uFF08\u6D88\u8D39\u8005\uFF09\u4E4B\u95F4\u6CA1\u6709\u76F4\u63A5\u8026\u5408</strong>\uFF0C\u6D88\u606F\u53D1\u9001\u8005\u5C06\u6D88\u606F\u53D1\u9001\u81F3\u5206\u5E03\u5F0F\u6D88\u606F\u961F\u5217\u5373\u7ED3\u675F\u5BF9\u6D88\u606F\u7684\u5904\u7406\uFF0C\u6D88\u606F\u63A5\u53D7\u8005\u4ECE\u5206\u5E03\u5F0F\u6D88\u606F\u961F\u5217\u83B7\u53D6\u8BE5\u6D88\u606F\u540E\u8FDB\u884C\u540E\u7EED\u5904\u7406\uFF0C\u5E76\u4E0D\u9700\u8981\u77E5\u9053\u8BE5\u6D88\u606F\u4ECE\u4F55\u800C\u6765\u3002<strong>\u5BF9\u65B0\u589E\u4E1A\u52A1\uFF0C\u53EA\u8981\u5BF9\u8BE5\u7C7B\u6D88\u606F\u611F\u5174\u8DA3\uFF0C\u5373\u53EF\u8BA2\u9605\u8BE5\u6D88\u606F\uFF0C\u5BF9\u539F\u6709\u7CFB\u7EDF\u548C\u4E1A\u52A1\u6CA1\u6709\u4EFB\u4F55\u5F71\u54CD\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7F51\u7AD9\u4E1A\u52A1\u7684\u53EF\u6269\u5C55\u6027\u8BBE\u8BA1</strong>\u3002</p><p>\u6D88\u606F\u63A5\u53D7\u8005\u5BF9\u6D88\u606F\u8FDB\u884C\u8FC7\u6EE4\u3001\u5904\u7406\u3001\u5305\u88C5\u540E\uFF0C\u6784\u9020\u6210\u4E00\u4E2A\u65B0\u7684\u6D88\u606F\u7C7B\u578B\uFF0C\u5C06\u6D88\u606F\u7EE7\u7EED\u53D1\u9001\u51FA\u53BB\uFF0C\u7B49\u5F85\u5176\u4ED6\u6D88\u606F\u63A5\u53D7\u8005\u8BA2\u9605\u8BE5\u6D88\u606F\u3002\u56E0\u6B64\u57FA\u4E8E\u4E8B\u4EF6\uFF08\u6D88\u606F\u5BF9\u8C61\uFF09\u9A71\u52A8\u7684\u4E1A\u52A1\u67B6\u6784\u53EF\u4EE5\u662F\u4E00\u7CFB\u5217\u6D41\u7A0B\u3002</p><p>\u53E6\u5916\uFF0C\u4E3A\u4E86\u907F\u514D\u6D88\u606F\u961F\u5217\u670D\u52A1\u5668\u5B95\u673A\u9020\u6210\u6D88\u606F\u4E22\u5931\uFF0C\u4F1A\u5C06\u6210\u529F\u53D1\u9001\u5230\u6D88\u606F\u961F\u5217\u7684\u6D88\u606F\u5B58\u50A8\u5728\u6D88\u606F\u751F\u4EA7\u8005\u670D\u52A1\u5668\u4E0A\uFF0C\u7B49\u6D88\u606F\u771F\u6B63\u88AB\u6D88\u8D39\u8005\u670D\u52A1\u5668\u5904\u7406\u540E\u624D\u5220\u9664\u6D88\u606F\u3002\u5728\u6D88\u606F\u961F\u5217\u670D\u52A1\u5668\u5B95\u673A\u540E\uFF0C\u751F\u4EA7\u8005\u670D\u52A1\u5668\u4F1A\u9009\u62E9\u5206\u5E03\u5F0F\u6D88\u606F\u961F\u5217\u670D\u52A1\u5668\u96C6\u7FA4\u4E2D\u7684\u5176\u4ED6\u670D\u52A1\u5668\u53D1\u5E03\u6D88\u606F\u3002</p><p><strong>\u5907\u6CE8\uFF1A</strong> \u4E0D\u8981\u8BA4\u4E3A\u6D88\u606F\u961F\u5217\u53EA\u80FD\u5229\u7528\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u5DE5\u4F5C\uFF0C\u53EA\u4E0D\u8FC7\u5728\u89E3\u8026\u8FD9\u4E2A\u7279\u5B9A\u4E1A\u52A1\u73AF\u5883\u4E0B\u662F\u4F7F\u7528\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u7684\u3002\u9664\u4E86\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\uFF0C\u8FD8\u6709\u70B9\u5BF9\u70B9\u8BA2\u9605\u6A21\u5F0F\uFF08\u4E00\u4E2A\u6D88\u606F\u53EA\u6709\u4E00\u4E2A\u6D88\u8D39\u8005\uFF09\uFF0C\u6211\u4EEC\u6BD4\u8F83\u5E38\u7528\u7684\u662F\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u3002\u53E6\u5916\uFF0C\u8FD9\u4E24\u79CD\u6D88\u606F\u6A21\u578B\u662F JMS \u63D0\u4F9B\u7684\uFF0CAMQP \u534F\u8BAE\u8FD8\u63D0\u4F9B\u4E86 5 \u79CD\u6D88\u606F\u6A21\u578B\u3002</p><h2 id="\u4E09-\u4F7F\u7528\u6D88\u606F\u961F\u5217\u5E26\u6765\u7684\u4E00\u4E9B\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E09-\u4F7F\u7528\u6D88\u606F\u961F\u5217\u5E26\u6765\u7684\u4E00\u4E9B\u95EE\u9898" aria-hidden="true">#</a> \u4E09 \u4F7F\u7528\u6D88\u606F\u961F\u5217\u5E26\u6765\u7684\u4E00\u4E9B\u95EE\u9898</h2><ul><li><strong>\u7CFB\u7EDF\u53EF\u7528\u6027\u964D\u4F4E\uFF1A</strong> \u7CFB\u7EDF\u53EF\u7528\u6027\u5728\u67D0\u79CD\u7A0B\u5EA6\u4E0A\u964D\u4F4E\uFF0C\u4E3A\u4EC0\u4E48\u8FD9\u6837\u8BF4\u5462\uFF1F\u5728\u52A0\u5165 MQ \u4E4B\u524D\uFF0C\u4F60\u4E0D\u7528\u8003\u8651\u6D88\u606F\u4E22\u5931\u6216\u8005\u8BF4 MQ \u6302\u6389\u7B49\u7B49\u7684\u60C5\u51B5\uFF0C\u4F46\u662F\uFF0C\u5F15\u5165 MQ \u4E4B\u540E\u4F60\u5C31\u9700\u8981\u53BB\u8003\u8651\u4E86\uFF01</li><li><strong>\u7CFB\u7EDF\u590D\u6742\u6027\u63D0\u9AD8\uFF1A</strong> \u52A0\u5165 MQ \u4E4B\u540E\uFF0C\u4F60\u9700\u8981\u4FDD\u8BC1\u6D88\u606F\u6CA1\u6709\u88AB\u91CD\u590D\u6D88\u8D39\u3001\u5904\u7406\u6D88\u606F\u4E22\u5931\u7684\u60C5\u51B5\u3001\u4FDD\u8BC1\u6D88\u606F\u4F20\u9012\u7684\u987A\u5E8F\u6027\u7B49\u7B49\u95EE\u9898\uFF01</li><li><strong>\u4E00\u81F4\u6027\u95EE\u9898\uFF1A</strong> \u6211\u4E0A\u9762\u8BB2\u4E86\u6D88\u606F\u961F\u5217\u53EF\u4EE5\u5B9E\u73B0\u5F02\u6B65\uFF0C\u6D88\u606F\u961F\u5217\u5E26\u6765\u7684\u5F02\u6B65\u786E\u5B9E\u53EF\u4EE5\u63D0\u9AD8\u7CFB\u7EDF\u54CD\u5E94\u901F\u5EA6\u3002\u4F46\u662F\uFF0C\u4E07\u4E00\u6D88\u606F\u7684\u771F\u6B63\u6D88\u8D39\u8005\u5E76\u6CA1\u6709\u6B63\u786E\u6D88\u8D39\u6D88\u606F\u600E\u4E48\u529E\uFF1F\u8FD9\u6837\u5C31\u4F1A\u5BFC\u81F4\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u4E86!</li></ul><h2 id="\u56DB-jms-vs-amqp" tabindex="-1"><a class="header-anchor" href="#\u56DB-jms-vs-amqp" aria-hidden="true">#</a> \u56DB JMS VS AMQP</h2><h3 id="_4-1-jms" tabindex="-1"><a class="header-anchor" href="#_4-1-jms" aria-hidden="true">#</a> 4.1 JMS</h3><h4 id="_4-1-1-jms-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_4-1-1-jms-\u7B80\u4ECB" aria-hidden="true">#</a> 4.1.1 JMS \u7B80\u4ECB</h4><p>JMS\uFF08JAVA Message Service,java \u6D88\u606F\u670D\u52A1\uFF09\u662F java \u7684\u6D88\u606F\u670D\u52A1\uFF0CJMS \u7684\u5BA2\u6237\u7AEF\u4E4B\u95F4\u53EF\u4EE5\u901A\u8FC7 JMS \u670D\u52A1\u8FDB\u884C\u5F02\u6B65\u7684\u6D88\u606F\u4F20\u8F93\u3002<strong>JMS\uFF08JAVA Message Service\uFF0CJava \u6D88\u606F\u670D\u52A1\uFF09API \u662F\u4E00\u4E2A\u6D88\u606F\u670D\u52A1\u7684\u6807\u51C6\u6216\u8005\u8BF4\u662F\u89C4\u8303</strong>\uFF0C\u5141\u8BB8\u5E94\u7528\u7A0B\u5E8F\u7EC4\u4EF6\u57FA\u4E8E JavaEE \u5E73\u53F0\u521B\u5EFA\u3001\u53D1\u9001\u3001\u63A5\u6536\u548C\u8BFB\u53D6\u6D88\u606F\u3002\u5B83\u4F7F\u5206\u5E03\u5F0F\u901A\u4FE1\u8026\u5408\u5EA6\u66F4\u4F4E\uFF0C\u6D88\u606F\u670D\u52A1\u66F4\u52A0\u53EF\u9760\u4EE5\u53CA\u5F02\u6B65\u6027\u3002</p><p><strong>ActiveMQ \u5C31\u662F\u57FA\u4E8E JMS \u89C4\u8303\u5B9E\u73B0\u7684\u3002</strong></p><h4 id="_4-1-2-jms-\u4E24\u79CD\u6D88\u606F\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_4-1-2-jms-\u4E24\u79CD\u6D88\u606F\u6A21\u578B" aria-hidden="true">#</a> 4.1.2 JMS \u4E24\u79CD\u6D88\u606F\u6A21\u578B</h4><p><strong>\u2460 \u70B9\u5230\u70B9\uFF08P2P\uFF09\u6A21\u578B</strong></p><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/\u961F\u5217\u6A21\u578B23.png" alt="\u961F\u5217\u6A21\u578B" loading="lazy"></p><p>\u4F7F\u7528<strong>\u961F\u5217\uFF08Queue\uFF09<strong>\u4F5C\u4E3A\u6D88\u606F\u901A\u4FE1\u8F7D\u4F53\uFF1B\u6EE1\u8DB3</strong>\u751F\u4EA7\u8005\u4E0E\u6D88\u8D39\u8005\u6A21\u5F0F</strong>\uFF0C\u4E00\u6761\u6D88\u606F\u53EA\u80FD\u88AB\u4E00\u4E2A\u6D88\u8D39\u8005\u4F7F\u7528\uFF0C\u672A\u88AB\u6D88\u8D39\u7684\u6D88\u606F\u5728\u961F\u5217\u4E2D\u4FDD\u7559\u76F4\u5230\u88AB\u6D88\u8D39\u6216\u8D85\u65F6\u3002\u6BD4\u5982\uFF1A\u6211\u4EEC\u751F\u4EA7\u8005\u53D1\u9001 100 \u6761\u6D88\u606F\u7684\u8BDD\uFF0C\u4E24\u4E2A\u6D88\u8D39\u8005\u6765\u6D88\u8D39\u4E00\u822C\u60C5\u51B5\u4E0B\u4E24\u4E2A\u6D88\u8D39\u8005\u4F1A\u6309\u7167\u6D88\u606F\u53D1\u9001\u7684\u987A\u5E8F\u5404\u81EA\u6D88\u8D39\u4E00\u534A\uFF08\u4E5F\u5C31\u662F\u4F60\u4E00\u4E2A\u6211\u4E00\u4E2A\u7684\u6D88\u8D39\u3002\uFF09</p><p><strong>\u2461 \u53D1\u5E03/\u8BA2\u9605\uFF08Pub/Sub\uFF09\u6A21\u578B</strong></p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/\u53D1\u5E03\u8BA2\u9605\u6A21\u578B.png" alt="\u53D1\u5E03\u8BA2\u9605\u6A21\u578B" loading="lazy"></p><p>\u53D1\u5E03\u8BA2\u9605\u6A21\u578B\uFF08Pub/Sub\uFF09 \u4F7F\u7528<strong>\u4E3B\u9898\uFF08Topic\uFF09<strong>\u4F5C\u4E3A\u6D88\u606F\u901A\u4FE1\u8F7D\u4F53\uFF0C\u7C7B\u4F3C\u4E8E</strong>\u5E7F\u64AD\u6A21\u5F0F</strong>\uFF1B\u53D1\u5E03\u8005\u53D1\u5E03\u4E00\u6761\u6D88\u606F\uFF0C\u8BE5\u6D88\u606F\u901A\u8FC7\u4E3B\u9898\u4F20\u9012\u7ED9\u6240\u6709\u7684\u8BA2\u9605\u8005\uFF0C<strong>\u5728\u4E00\u6761\u6D88\u606F\u5E7F\u64AD\u4E4B\u540E\u624D\u8BA2\u9605\u7684\u7528\u6237\u5219\u662F\u6536\u4E0D\u5230\u8BE5\u6761\u6D88\u606F\u7684</strong>\u3002</p><h4 id="_4-1-3-jms-\u4E94\u79CD\u4E0D\u540C\u7684\u6D88\u606F\u6B63\u6587\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-1-3-jms-\u4E94\u79CD\u4E0D\u540C\u7684\u6D88\u606F\u6B63\u6587\u683C\u5F0F" aria-hidden="true">#</a> 4.1.3 JMS \u4E94\u79CD\u4E0D\u540C\u7684\u6D88\u606F\u6B63\u6587\u683C\u5F0F</h4><p>JMS \u5B9A\u4E49\u4E86\u4E94\u79CD\u4E0D\u540C\u7684\u6D88\u606F\u6B63\u6587\u683C\u5F0F\uFF0C\u4EE5\u53CA\u8C03\u7528\u7684\u6D88\u606F\u7C7B\u578B\uFF0C\u5141\u8BB8\u4F60\u53D1\u9001\u5E76\u63A5\u6536\u4EE5\u4E00\u4E9B\u4E0D\u540C\u5F62\u5F0F\u7684\u6570\u636E\uFF0C\u63D0\u4F9B\u73B0\u6709\u6D88\u606F\u683C\u5F0F\u7684\u4E00\u4E9B\u7EA7\u522B\u7684\u517C\u5BB9\u6027\u3002</p><ul><li>StreamMessage -- Java \u539F\u59CB\u503C\u7684\u6570\u636E\u6D41</li><li>MapMessage--\u4E00\u5957\u540D\u79F0-\u503C\u5BF9</li><li>TextMessage--\u4E00\u4E2A\u5B57\u7B26\u4E32\u5BF9\u8C61</li><li>ObjectMessage--\u4E00\u4E2A\u5E8F\u5217\u5316\u7684 Java \u5BF9\u8C61</li><li>BytesMessage--\u4E00\u4E2A\u5B57\u8282\u7684\u6570\u636E\u6D41</li></ul><h3 id="_4-2-amqp" tabindex="-1"><a class="header-anchor" href="#_4-2-amqp" aria-hidden="true">#</a> 4.2 AMQP</h3><p>AMQP\uFF0C\u5373 Advanced Message Queuing Protocol\uFF0C\u4E00\u4E2A\u63D0\u4F9B\u7EDF\u4E00\u6D88\u606F\u670D\u52A1\u7684\u5E94\u7528\u5C42\u6807\u51C6 <strong>\u9AD8\u7EA7\u6D88\u606F\u961F\u5217\u534F\u8BAE</strong>\uFF08\u4E8C\u8FDB\u5236\u5E94\u7528\u5C42\u534F\u8BAE\uFF09\uFF0C\u662F\u5E94\u7528\u5C42\u534F\u8BAE\u7684\u4E00\u4E2A\u5F00\u653E\u6807\u51C6\uFF0C\u4E3A\u9762\u5411\u6D88\u606F\u7684\u4E2D\u95F4\u4EF6\u8BBE\u8BA1\uFF0C\u517C\u5BB9 JMS\u3002\u57FA\u4E8E\u6B64\u534F\u8BAE\u7684\u5BA2\u6237\u7AEF\u4E0E\u6D88\u606F\u4E2D\u95F4\u4EF6\u53EF\u4F20\u9012\u6D88\u606F\uFF0C\u5E76\u4E0D\u53D7\u5BA2\u6237\u7AEF/\u4E2D\u95F4\u4EF6\u540C\u4EA7\u54C1\uFF0C\u4E0D\u540C\u7684\u5F00\u53D1\u8BED\u8A00\u7B49\u6761\u4EF6\u7684\u9650\u5236\u3002</p><p><strong>RabbitMQ \u5C31\u662F\u57FA\u4E8E AMQP \u534F\u8BAE\u5B9E\u73B0\u7684\u3002</strong></p><h3 id="_4-3-jms-vs-amqp" tabindex="-1"><a class="header-anchor" href="#_4-3-jms-vs-amqp" aria-hidden="true">#</a> 4.3 JMS vs AMQP</h3><table><thead><tr><th style="text-align:left;">\u5BF9\u6BD4\u65B9\u5411</th><th style="text-align:left;">JMS</th><th style="text-align:left;">AMQP</th></tr></thead><tbody><tr><td style="text-align:left;">\u5B9A\u4E49</td><td style="text-align:left;">Java API</td><td style="text-align:left;">\u534F\u8BAE</td></tr><tr><td style="text-align:left;">\u8DE8\u8BED\u8A00</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u662F</td></tr><tr><td style="text-align:left;">\u8DE8\u5E73\u53F0</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u662F</td></tr><tr><td style="text-align:left;">\u652F\u6301\u6D88\u606F\u7C7B\u578B</td><td style="text-align:left;">\u63D0\u4F9B\u4E24\u79CD\u6D88\u606F\u6A21\u578B\uFF1A\u2460Peer-2-Peer;\u2461Pub/sub</td><td style="text-align:left;">\u63D0\u4F9B\u4E86\u4E94\u79CD\u6D88\u606F\u6A21\u578B\uFF1A\u2460direct exchange\uFF1B\u2461fanout exchange\uFF1B\u2462topic change\uFF1B\u2463headers exchange\uFF1B\u2464system exchange\u3002\u672C\u8D28\u6765\u8BB2\uFF0C\u540E\u56DB\u79CD\u548C JMS \u7684 pub/sub \u6A21\u578B\u6CA1\u6709\u592A\u5927\u5DEE\u522B\uFF0C\u4EC5\u662F\u5728\u8DEF\u7531\u673A\u5236\u4E0A\u505A\u4E86\u66F4\u8BE6\u7EC6\u7684\u5212\u5206\uFF1B</td></tr><tr><td style="text-align:left;">\u652F\u6301\u6D88\u606F\u7C7B\u578B</td><td style="text-align:left;">\u652F\u6301\u591A\u79CD\u6D88\u606F\u7C7B\u578B \uFF0C\u6211\u4EEC\u5728\u4E0A\u9762\u63D0\u5230\u8FC7</td><td style="text-align:left;">byte[]\uFF08\u4E8C\u8FDB\u5236\uFF09</td></tr></tbody></table><p><strong>\u603B\u7ED3\uFF1A</strong></p><ul><li>AMQP \u4E3A\u6D88\u606F\u5B9A\u4E49\u4E86\u7EBF\u8DEF\u5C42\uFF08wire-level protocol\uFF09\u7684\u534F\u8BAE\uFF0C\u800C JMS \u6240\u5B9A\u4E49\u7684\u662F API \u89C4\u8303\u3002\u5728 Java \u4F53\u7CFB\u4E2D\uFF0C\u591A\u4E2A client \u5747\u53EF\u4EE5\u901A\u8FC7 JMS \u8FDB\u884C\u4EA4\u4E92\uFF0C\u4E0D\u9700\u8981\u5E94\u7528\u4FEE\u6539\u4EE3\u7801\uFF0C\u4F46\u662F\u5176\u5BF9\u8DE8\u5E73\u53F0\u7684\u652F\u6301\u8F83\u5DEE\u3002\u800C AMQP \u5929\u7136\u5177\u6709\u8DE8\u5E73\u53F0\u3001\u8DE8\u8BED\u8A00\u7279\u6027\u3002</li><li>JMS \u652F\u6301 TextMessage\u3001MapMessage \u7B49\u590D\u6742\u7684\u6D88\u606F\u7C7B\u578B\uFF1B\u800C AMQP \u4EC5\u652F\u6301 byte[] \u6D88\u606F\u7C7B\u578B\uFF08\u590D\u6742\u7684\u7C7B\u578B\u53EF\u5E8F\u5217\u5316\u540E\u53D1\u9001\uFF09\u3002</li><li>\u7531\u4E8E Exchange \u63D0\u4F9B\u7684\u8DEF\u7531\u7B97\u6CD5\uFF0CAMQP \u53EF\u4EE5\u63D0\u4F9B\u591A\u6837\u5316\u7684\u8DEF\u7531\u65B9\u5F0F\u6765\u4F20\u9012\u6D88\u606F\u5230\u6D88\u606F\u961F\u5217\uFF0C\u800C JMS \u4EC5\u652F\u6301 \u961F\u5217 \u548C \u4E3B\u9898/\u8BA2\u9605 \u65B9\u5F0F\u4E24\u79CD\u3002</li></ul><h2 id="\u4E94-\u5E38\u89C1\u7684\u6D88\u606F\u961F\u5217\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u4E94-\u5E38\u89C1\u7684\u6D88\u606F\u961F\u5217\u5BF9\u6BD4" aria-hidden="true">#</a> \u4E94 \u5E38\u89C1\u7684\u6D88\u606F\u961F\u5217\u5BF9\u6BD4</h2><table><thead><tr><th>\u5BF9\u6BD4\u65B9\u5411</th><th>\u6982\u8981</th></tr></thead><tbody><tr><td>\u541E\u5410\u91CF</td><td>\u4E07\u7EA7\u7684 ActiveMQ \u548C RabbitMQ \u7684\u541E\u5410\u91CF\uFF08ActiveMQ \u7684\u6027\u80FD\u6700\u5DEE\uFF09\u8981\u6BD4 \u5341\u4E07\u7EA7\u751A\u81F3\u662F\u767E\u4E07\u7EA7\u7684 RocketMQ \u548C Kafka \u4F4E\u4E00\u4E2A\u6570\u91CF\u7EA7\u3002</td></tr><tr><td>\u53EF\u7528\u6027</td><td>\u90FD\u53EF\u4EE5\u5B9E\u73B0\u9AD8\u53EF\u7528\u3002ActiveMQ \u548C RabbitMQ \u90FD\u662F\u57FA\u4E8E\u4E3B\u4ECE\u67B6\u6784\u5B9E\u73B0\u9AD8\u53EF\u7528\u6027\u3002RocketMQ \u57FA\u4E8E\u5206\u5E03\u5F0F\u67B6\u6784\u3002 kafka \u4E5F\u662F\u5206\u5E03\u5F0F\u7684\uFF0C\u4E00\u4E2A\u6570\u636E\u591A\u4E2A\u526F\u672C\uFF0C\u5C11\u6570\u673A\u5668\u5B95\u673A\uFF0C\u4E0D\u4F1A\u4E22\u5931\u6570\u636E\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u4E0D\u53EF\u7528</td></tr><tr><td>\u65F6\u6548\u6027</td><td>RabbitMQ \u57FA\u4E8E erlang \u5F00\u53D1\uFF0C\u6240\u4EE5\u5E76\u53D1\u80FD\u529B\u5F88\u5F3A\uFF0C\u6027\u80FD\u6781\u5176\u597D\uFF0C\u5EF6\u65F6\u5F88\u4F4E\uFF0C\u8FBE\u5230\u5FAE\u79D2\u7EA7\u3002\u5176\u4ED6\u4E09\u4E2A\u90FD\u662F ms \u7EA7\u3002</td></tr><tr><td>\u529F\u80FD\u652F\u6301</td><td>\u9664\u4E86 Kafka\uFF0C\u5176\u4ED6\u4E09\u4E2A\u529F\u80FD\u90FD\u8F83\u4E3A\u5B8C\u5907\u3002 Kafka \u529F\u80FD\u8F83\u4E3A\u7B80\u5355\uFF0C\u4E3B\u8981\u652F\u6301\u7B80\u5355\u7684 MQ \u529F\u80FD\uFF0C\u5728\u5927\u6570\u636E\u9886\u57DF\u7684\u5B9E\u65F6\u8BA1\u7B97\u4EE5\u53CA\u65E5\u5FD7\u91C7\u96C6\u88AB\u5927\u89C4\u6A21\u4F7F\u7528\uFF0C\u662F\u4E8B\u5B9E\u4E0A\u7684\u6807\u51C6</td></tr><tr><td>\u6D88\u606F\u4E22\u5931</td><td>ActiveMQ \u548C RabbitMQ \u4E22\u5931\u7684\u53EF\u80FD\u6027\u975E\u5E38\u4F4E\uFF0C RocketMQ \u548C Kafka \u7406\u8BBA\u4E0A\u4E0D\u4F1A\u4E22\u5931\u3002</td></tr></tbody></table><p><strong>\u603B\u7ED3\uFF1A</strong></p><ul><li>ActiveMQ \u7684\u793E\u533A\u7B97\u662F\u6BD4\u8F83\u6210\u719F\uFF0C\u4F46\u662F\u8F83\u76EE\u524D\u6765\u8BF4\uFF0CActiveMQ \u7684\u6027\u80FD\u6BD4\u8F83\u5DEE\uFF0C\u800C\u4E14\u7248\u672C\u8FED\u4EE3\u5F88\u6162\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528\u3002</li><li>RabbitMQ \u5728\u541E\u5410\u91CF\u65B9\u9762\u867D\u7136\u7A0D\u900A\u4E8E Kafka \u548C RocketMQ \uFF0C\u4F46\u662F\u7531\u4E8E\u5B83\u57FA\u4E8E erlang \u5F00\u53D1\uFF0C\u6240\u4EE5\u5E76\u53D1\u80FD\u529B\u5F88\u5F3A\uFF0C\u6027\u80FD\u6781\u5176\u597D\uFF0C\u5EF6\u65F6\u5F88\u4F4E\uFF0C\u8FBE\u5230\u5FAE\u79D2\u7EA7\u3002\u4F46\u662F\u4E5F\u56E0\u4E3A RabbitMQ \u57FA\u4E8E erlang \u5F00\u53D1\uFF0C\u6240\u4EE5\u56FD\u5185\u5F88\u5C11\u6709\u516C\u53F8\u6709\u5B9E\u529B\u505A erlang \u6E90\u7801\u7EA7\u522B\u7684\u7814\u7A76\u548C\u5B9A\u5236\u3002\u5982\u679C\u4E1A\u52A1\u573A\u666F\u5BF9\u5E76\u53D1\u91CF\u8981\u6C42\u4E0D\u662F\u592A\u9AD8\uFF08\u5341\u4E07\u7EA7\u3001\u767E\u4E07\u7EA7\uFF09\uFF0C\u90A3\u8FD9\u56DB\u79CD\u6D88\u606F\u961F\u5217\u4E2D\uFF0CRabbitMQ \u4E00\u5B9A\u662F\u4F60\u7684\u9996\u9009\u3002\u5982\u679C\u662F\u5927\u6570\u636E\u9886\u57DF\u7684\u5B9E\u65F6\u8BA1\u7B97\u3001\u65E5\u5FD7\u91C7\u96C6\u7B49\u573A\u666F\uFF0C\u7528 Kafka \u662F\u4E1A\u5185\u6807\u51C6\u7684\uFF0C\u7EDD\u5BF9\u6CA1\u95EE\u9898\uFF0C\u793E\u533A\u6D3B\u8DC3\u5EA6\u5F88\u9AD8\uFF0C\u7EDD\u5BF9\u4E0D\u4F1A\u9EC4\uFF0C\u4F55\u51B5\u51E0\u4E4E\u662F\u5168\u4E16\u754C\u8FD9\u4E2A\u9886\u57DF\u7684\u4E8B\u5B9E\u6027\u89C4\u8303\u3002</li><li>RocketMQ \u963F\u91CC\u51FA\u54C1\uFF0CJava \u7CFB\u5F00\u6E90\u9879\u76EE\uFF0C\u6E90\u4EE3\u7801\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u9605\u8BFB\uFF0C\u7136\u540E\u53EF\u4EE5\u5B9A\u5236\u81EA\u5DF1\u516C\u53F8\u7684 MQ\uFF0C\u5E76\u4E14 RocketMQ \u6709\u963F\u91CC\u5DF4\u5DF4\u7684\u5B9E\u9645\u4E1A\u52A1\u573A\u666F\u7684\u5B9E\u6218\u8003\u9A8C\u3002RocketMQ \u793E\u533A\u6D3B\u8DC3\u5EA6\u76F8\u5BF9\u8F83\u4E3A\u4E00\u822C\uFF0C\u4E0D\u8FC7\u4E5F\u8FD8\u53EF\u4EE5\uFF0C\u6587\u6863\u76F8\u5BF9\u6765\u8BF4\u7B80\u5355\u4E00\u4E9B\uFF0C\u7136\u540E\u63A5\u53E3\u8FD9\u5757\u4E0D\u662F\u6309\u7167\u6807\u51C6 JMS \u89C4\u8303\u8D70\u7684\u6709\u4E9B\u7CFB\u7EDF\u8981\u8FC1\u79FB\u9700\u8981\u4FEE\u6539\u5927\u91CF\u4EE3\u7801\u3002\u8FD8\u6709\u5C31\u662F\u963F\u91CC\u51FA\u53F0\u7684\u6280\u672F\uFF0C\u4F60\u5F97\u505A\u597D\u8FD9\u4E2A\u6280\u672F\u4E07\u4E00\u88AB\u629B\u5F03\uFF0C\u793E\u533A\u9EC4\u6389\u7684\u98CE\u9669\uFF0C\u90A3\u5982\u679C\u4F60\u4EEC\u516C\u53F8\u6709\u6280\u672F\u5B9E\u529B\u6211\u89C9\u5F97\u7528 RocketMQ \u633A\u597D\u7684</li><li>Kafka \u7684\u7279\u70B9\u5176\u5B9E\u5F88\u660E\u663E\uFF0C\u5C31\u662F\u4EC5\u4EC5\u63D0\u4F9B\u8F83\u5C11\u7684\u6838\u5FC3\u529F\u80FD\uFF0C\u4F46\u662F\u63D0\u4F9B\u8D85\u9AD8\u7684\u541E\u5410\u91CF\uFF0Cms \u7EA7\u7684\u5EF6\u8FDF\uFF0C\u6781\u9AD8\u7684\u53EF\u7528\u6027\u4EE5\u53CA\u53EF\u9760\u6027\uFF0C\u800C\u4E14\u5206\u5E03\u5F0F\u53EF\u4EE5\u4EFB\u610F\u6269\u5C55\u3002\u540C\u65F6 kafka \u6700\u597D\u662F\u652F\u6491\u8F83\u5C11\u7684 topic \u6570\u91CF\u5373\u53EF\uFF0C\u4FDD\u8BC1\u5176\u8D85\u9AD8\u541E\u5410\u91CF\u3002kafka \u552F\u4E00\u7684\u4E00\u70B9\u52A3\u52BF\u662F\u6709\u53EF\u80FD\u6D88\u606F\u91CD\u590D\u6D88\u8D39\uFF0C\u90A3\u4E48\u5BF9\u6570\u636E\u51C6\u786E\u6027\u4F1A\u9020\u6210\u6781\u5176\u8F7B\u5FAE\u7684\u5F71\u54CD\uFF0C\u5728\u5927\u6570\u636E\u9886\u57DF\u4E2D\u4EE5\u53CA\u65E5\u5FD7\u91C7\u96C6\u4E2D\uFF0C\u8FD9\u70B9\u8F7B\u5FAE\u5F71\u54CD\u53EF\u4EE5\u5FFD\u7565\u8FD9\u4E2A\u7279\u6027\u5929\u7136\u9002\u5408\u5927\u6570\u636E\u5B9E\u65F6\u8BA1\u7B97\u4EE5\u53CA\u65E5\u5FD7\u6536\u96C6\u3002</li></ul><p>\u53C2\u8003\uFF1A\u300AJava \u5DE5\u7A0B\u5E08\u9762\u8BD5\u7A81\u51FB\u7B2C 1 \u5B63-\u4E2D\u534E\u77F3\u6749\u8001\u5E08\u300B</p>',57);function r(i,n){return s}var d=t(a,[["render",r],["__file","message-queue.html.vue"]]);export{d as default};