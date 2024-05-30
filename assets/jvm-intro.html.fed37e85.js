const l={key:"v-fa48f88a",path:"/java/jvm/jvm-intro.html",title:"\u5927\u767D\u8BDD\u5E26\u4F60\u8BA4\u8BC6JVM",lang:"zh-CN",frontmatter:{category:["Java"],tag:["JVM"],summary:'\u5927\u767D\u8BDD\u5E26\u4F60\u8BA4\u8BC6JVM\r" \u6765\u81EA\u6398\u91D1\u7528\u6237\uFF1A\u8BF4\u51FA\u4F60\u7684\u613F\u671B\u5427\u4E37\u6295\u7A3F\uFF0C\u539F\u6587\u5730\u5740\uFF1Ahttps://juejin.im/post/5e1505d0f265da5d5d744050#heading-28" \u524D\u8A00 \u5982\u679C\u5728\u6587\u4E2D\u7528\u8BCD\u6216\u8005\u7406\u89E3\u65B9\u9762\u51FA\u73B0\u95EE\u9898\uFF0C\u6B22\u8FCE\u6307\u51FA\u3002\u6B64\u6587\u65E8\u5728\u63D0\u53CA\u800C\u4E0D\u6DF1\u7A76\uFF0C\u4F46\u4F1A\u5C3D\u91CF\u6548\u7387\u5730\u628A\u77E5\u8BC6\u70B9\u90FD\u629B\u51FA\u6765 \u4E00\u3001JVM\u7684\u57FA\u672C\u4ECB\u7ECD JVM \u662F Java Virtual M',head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/java/jvm/jvm-intro.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"\u5927\u767D\u8BDD\u5E26\u4F60\u8BA4\u8BC6JVM"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-03-18T08:28:37.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"JVM"}],["meta",{property:"article:modified_time",content:"2022-03-18T08:28:37.000Z"}]]},excerpt:"",headers:[{level:1,title:"\u5927\u767D\u8BDD\u5E26\u4F60\u8BA4\u8BC6JVM",slug:"\u5927\u767D\u8BDD\u5E26\u4F60\u8BA4\u8BC6jvm",children:[{level:2,title:"\u524D\u8A00",slug:"\u524D\u8A00",children:[]},{level:2,title:"\u4E00\u3001JVM\u7684\u57FA\u672C\u4ECB\u7ECD",slug:"\u4E00\u3001jvm\u7684\u57FA\u672C\u4ECB\u7ECD",children:[{level:3,title:"1.1 Java\u6587\u4EF6\u662F\u5982\u4F55\u88AB\u8FD0\u884C\u7684",slug:"_1-1-java\u6587\u4EF6\u662F\u5982\u4F55\u88AB\u8FD0\u884C\u7684",children:[{level:4,title:"\u2460 \u7C7B\u52A0\u8F7D\u5668",slug:"_1-\u7C7B\u52A0\u8F7D\u5668",children:[]},{level:4,title:"\u2461 \u65B9\u6CD5\u533A",slug:"_2-\u65B9\u6CD5\u533A",children:[]},{level:4,title:"\u2462 \u5806",slug:"_3-\u5806",children:[]},{level:4,title:"\u2463 \u6808",slug:"_4-\u6808",children:[]},{level:4,title:"\u2464 \u7A0B\u5E8F\u8BA1\u6570\u5668",slug:"_5-\u7A0B\u5E8F\u8BA1\u6570\u5668",children:[]},{level:4,title:"\u5C0F\u603B\u7ED3",slug:"\u5C0F\u603B\u7ED3",children:[]}]},{level:3,title:"1.2 \u7B80\u5355\u7684\u4EE3\u7801\u4F8B\u5B50",slug:"_1-2-\u7B80\u5355\u7684\u4EE3\u7801\u4F8B\u5B50",children:[]}]},{level:2,title:"\u4E8C\u3001\u7C7B\u52A0\u8F7D\u5668\u7684\u4ECB\u7ECD",slug:"\u4E8C\u3001\u7C7B\u52A0\u8F7D\u5668\u7684\u4ECB\u7ECD",children:[{level:3,title:"2.1 \u7C7B\u52A0\u8F7D\u5668\u7684\u6D41\u7A0B",slug:"_2-1-\u7C7B\u52A0\u8F7D\u5668\u7684\u6D41\u7A0B",children:[{level:4,title:"2.1.1 \u52A0\u8F7D",slug:"_2-1-1-\u52A0\u8F7D",children:[]},{level:4,title:"2.1.2 \u94FE\u63A5",slug:"_2-1-2-\u94FE\u63A5",children:[]},{level:4,title:"2.1.3 \u521D\u59CB\u5316",slug:"_2-1-3-\u521D\u59CB\u5316",children:[]},{level:4,title:"2.1.4 \u5378\u8F7D",slug:"_2-1-4-\u5378\u8F7D",children:[]}]},{level:3,title:"2.2 \u7C7B\u52A0\u8F7D\u5668\u7684\u52A0\u8F7D\u987A\u5E8F",slug:"_2-2-\u7C7B\u52A0\u8F7D\u5668\u7684\u52A0\u8F7D\u987A\u5E8F",children:[]},{level:3,title:"2.3 \u53CC\u4EB2\u59D4\u6D3E\u673A\u5236",slug:"_2-3-\u53CC\u4EB2\u59D4\u6D3E\u673A\u5236",children:[]}]},{level:2,title:"\u4E09\u3001\u8FD0\u884C\u65F6\u6570\u636E\u533A",slug:"\u4E09\u3001\u8FD0\u884C\u65F6\u6570\u636E\u533A",children:[{level:3,title:"3.1 \u672C\u5730\u65B9\u6CD5\u6808\u548C\u7A0B\u5E8F\u8BA1\u6570\u5668",slug:"_3-1-\u672C\u5730\u65B9\u6CD5\u6808\u548C\u7A0B\u5E8F\u8BA1\u6570\u5668",children:[]},{level:3,title:"3.2 \u65B9\u6CD5\u533A",slug:"_3-2-\u65B9\u6CD5\u533A",children:[]},{level:3,title:"3.3 \u865A\u62DF\u673A\u6808\u548C\u865A\u62DF\u673A\u5806",slug:"_3-3-\u865A\u62DF\u673A\u6808\u548C\u865A\u62DF\u673A\u5806",children:[{level:4,title:"3.3.1 \u865A\u62DF\u673A\u6808\u7684\u6982\u5FF5",slug:"_3-3-1-\u865A\u62DF\u673A\u6808\u7684\u6982\u5FF5",children:[]},{level:4,title:"3.3.2 \u865A\u62DF\u673A\u6808\u5B58\u5728\u7684\u5F02\u5E38",slug:"_3-3-2-\u865A\u62DF\u673A\u6808\u5B58\u5728\u7684\u5F02\u5E38",children:[]},{level:4,title:"3.3.3 \u865A\u62DF\u673A\u6808\u7684\u751F\u547D\u5468\u671F",slug:"_3-3-3-\u865A\u62DF\u673A\u6808\u7684\u751F\u547D\u5468\u671F",children:[]},{level:4,title:"3.3.4 \u865A\u62DF\u673A\u6808\u7684\u6267\u884C",slug:"_3-3-4-\u865A\u62DF\u673A\u6808\u7684\u6267\u884C",children:[]},{level:4,title:"3.3.5 \u5C40\u90E8\u53D8\u91CF\u7684\u590D\u7528",slug:"_3-3-5-\u5C40\u90E8\u53D8\u91CF\u7684\u590D\u7528",children:[]},{level:4,title:"3.3.6 \u865A\u62DF\u673A\u5806\u7684\u6982\u5FF5",slug:"_3-3-6-\u865A\u62DF\u673A\u5806\u7684\u6982\u5FF5",children:[]},{level:4,title:"3.3.7 Eden\u5E74\u8F7B\u4EE3\u7684\u4ECB\u7ECD",slug:"_3-3-7-eden\u5E74\u8F7B\u4EE3\u7684\u4ECB\u7ECD",children:[]},{level:4,title:"3.3.8 \u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u9700\u8981\u88AB\u5E72\u6389",slug:"_3-3-8-\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u9700\u8981\u88AB\u5E72\u6389",children:[]},{level:4,title:"3.3.9 \u5982\u4F55\u5BA3\u544A\u4E00\u4E2A\u5BF9\u8C61\u7684\u771F\u6B63\u6B7B\u4EA1",slug:"_3-3-9-\u5982\u4F55\u5BA3\u544A\u4E00\u4E2A\u5BF9\u8C61\u7684\u771F\u6B63\u6B7B\u4EA1",children:[]}]},{level:3,title:"3.4 \u5783\u573E\u56DE\u6536\u7B97\u6CD5",slug:"_3-4-\u5783\u573E\u56DE\u6536\u7B97\u6CD5",children:[{level:4,title:"3.4.1 \u6807\u8BB0\u6E05\u9664\u7B97\u6CD5",slug:"_3-4-1-\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5",children:[]},{level:4,title:"3.4.2 \u590D\u5236\u7B97\u6CD5",slug:"_3-4-2-\u590D\u5236\u7B97\u6CD5",children:[]},{level:4,title:"3.4.3 \u6807\u8BB0\u6574\u7406\u7B97\u6CD5",slug:"_3-4-3-\u6807\u8BB0\u6574\u7406\u7B97\u6CD5",children:[]},{level:4,title:"3.4.4 \u5206\u4EE3\u6536\u96C6\u7B97\u6CD5",slug:"_3-4-4-\u5206\u4EE3\u6536\u96C6\u7B97\u6CD5",children:[]}]},{level:3,title:"3.5 \uFF08\u4E86\u89E3\uFF09\u5404\u79CD\u5404\u6837\u7684\u5783\u573E\u56DE\u6536\u5668",slug:"_3-5-\u4E86\u89E3-\u5404\u79CD\u5404\u6837\u7684\u5783\u573E\u56DE\u6536\u5668",children:[]},{level:3,title:"3.6 \uFF08\u4E86\u89E3\uFF09JVM\u7684\u5E38\u7528\u53C2\u6570",slug:"_3-6-\u4E86\u89E3-jvm\u7684\u5E38\u7528\u53C2\u6570",children:[]}]},{level:2,title:"\u56DB\u3001\u5173\u4E8EJVM\u8C03\u4F18\u7684\u4E00\u4E9B\u65B9\u9762",slug:"\u56DB\u3001\u5173\u4E8Ejvm\u8C03\u4F18\u7684\u4E00\u4E9B\u65B9\u9762",children:[{level:3,title:"4.1 \u8C03\u6574\u6700\u5927\u5806\u5185\u5B58\u548C\u6700\u5C0F\u5806\u5185\u5B58",slug:"_4-1-\u8C03\u6574\u6700\u5927\u5806\u5185\u5B58\u548C\u6700\u5C0F\u5806\u5185\u5B58",children:[]},{level:3,title:"4.2 \u8C03\u6574\u65B0\u751F\u4EE3\u548C\u8001\u5E74\u4EE3\u7684\u6BD4\u503C",slug:"_4-2-\u8C03\u6574\u65B0\u751F\u4EE3\u548C\u8001\u5E74\u4EE3\u7684\u6BD4\u503C",children:[]},{level:3,title:"4.3 \u8C03\u6574Survivor\u533A\u548CEden\u533A\u7684\u6BD4\u503C",slug:"_4-3-\u8C03\u6574survivor\u533A\u548Ceden\u533A\u7684\u6BD4\u503C",children:[]},{level:3,title:"4.4 \u8BBE\u7F6E\u5E74\u8F7B\u4EE3\u548C\u8001\u5E74\u4EE3\u7684\u5927\u5C0F",slug:"_4-4-\u8BBE\u7F6E\u5E74\u8F7B\u4EE3\u548C\u8001\u5E74\u4EE3\u7684\u5927\u5C0F",children:[]},{level:3,title:"4.5 \u5C0F\u603B\u7ED3",slug:"_4-5-\u5C0F\u603B\u7ED3",children:[]},{level:3,title:"4.6 \u6C38\u4E45\u533A\u7684\u8BBE\u7F6E",slug:"_4-6-\u6C38\u4E45\u533A\u7684\u8BBE\u7F6E",children:[]},{level:3,title:"4.7 JVM\u7684\u6808\u53C2\u6570\u8C03\u4F18",slug:"_4-7-jvm\u7684\u6808\u53C2\u6570\u8C03\u4F18",children:[{level:4,title:"4.7.1 \u8C03\u6574\u6BCF\u4E2A\u7EBF\u7A0B\u6808\u7A7A\u95F4\u7684\u5927\u5C0F",slug:"_4-7-1-\u8C03\u6574\u6BCF\u4E2A\u7EBF\u7A0B\u6808\u7A7A\u95F4\u7684\u5927\u5C0F",children:[]},{level:4,title:"4.7.2 \u8BBE\u7F6E\u7EBF\u7A0B\u6808\u7684\u5927\u5C0F",slug:"_4-7-2-\u8BBE\u7F6E\u7EBF\u7A0B\u6808\u7684\u5927\u5C0F",children:[]}]},{level:3,title:"4.8 (\u53EF\u4EE5\u76F4\u63A5\u8DF3\u8FC7\u4E86)JVM\u5176\u4ED6\u53C2\u6570\u4ECB\u7ECD",slug:"_4-8-\u53EF\u4EE5\u76F4\u63A5\u8DF3\u8FC7\u4E86-jvm\u5176\u4ED6\u53C2\u6570\u4ECB\u7ECD",children:[{level:4,title:"4.8.1 \u8BBE\u7F6E\u5185\u5B58\u9875\u7684\u5927\u5C0F",slug:"_4-8-1-\u8BBE\u7F6E\u5185\u5B58\u9875\u7684\u5927\u5C0F",children:[]},{level:4,title:"4.8.2 \u8BBE\u7F6E\u539F\u59CB\u7C7B\u578B\u7684\u5FEB\u901F\u4F18\u5316",slug:"_4-8-2-\u8BBE\u7F6E\u539F\u59CB\u7C7B\u578B\u7684\u5FEB\u901F\u4F18\u5316",children:[]},{level:4,title:"4.8.3 \u8BBE\u7F6E\u5173\u95ED\u624B\u52A8GC",slug:"_4-8-3-\u8BBE\u7F6E\u5173\u95ED\u624B\u52A8gc",children:[]},{level:4,title:"4.8.4 \u8BBE\u7F6E\u5783\u573E\u6700\u5927\u5E74\u9F84",slug:"_4-8-4-\u8BBE\u7F6E\u5783\u573E\u6700\u5927\u5E74\u9F84",children:[]},{level:4,title:"4.8.5 \u52A0\u5FEB\u7F16\u8BD1\u901F\u5EA6",slug:"_4-8-5-\u52A0\u5FEB\u7F16\u8BD1\u901F\u5EA6",children:[]},{level:4,title:"4.8.6 \u6539\u5584\u9501\u673A\u5236\u6027\u80FD",slug:"_4-8-6-\u6539\u5584\u9501\u673A\u5236\u6027\u80FD",children:[]},{level:4,title:"4.8.7 \u7981\u7528\u5783\u573E\u56DE\u6536",slug:"_4-8-7-\u7981\u7528\u5783\u573E\u56DE\u6536",children:[]},{level:4,title:"4.8.8 \u8BBE\u7F6E\u5806\u7A7A\u95F4\u5B58\u6D3B\u65F6\u95F4",slug:"_4-8-8-\u8BBE\u7F6E\u5806\u7A7A\u95F4\u5B58\u6D3B\u65F6\u95F4",children:[]},{level:4,title:"4.8.9 \u8BBE\u7F6E\u5BF9\u8C61\u76F4\u63A5\u5206\u914D\u5728\u8001\u5E74\u4EE3",slug:"_4-8-9-\u8BBE\u7F6E\u5BF9\u8C61\u76F4\u63A5\u5206\u914D\u5728\u8001\u5E74\u4EE3",children:[]},{level:4,title:"4.8.10 \u8BBE\u7F6ETLAB\u5360eden\u533A\u7684\u6BD4\u4F8B",slug:"_4-8-10-\u8BBE\u7F6Etlab\u5360eden\u533A\u7684\u6BD4\u4F8B",children:[]},{level:4,title:"4.8.11\u8BBE\u7F6E\u662F\u5426\u4F18\u5148YGC",slug:"_4-8-11\u8BBE\u7F6E\u662F\u5426\u4F18\u5148ygc",children:[]}]}]},{level:2,title:"finally",slug:"finally",children:[]}]}],git:{createdTime:1636463233e3,updatedTime:1647592117e3,contributors:[{name:"guide",email:"koushuangbwcx@163.com",commits:3},{name:"yueyang",email:"yy1023178796@gmail.com",commits:1}]},readingTime:{minutes:31.63,words:9490},filePathRelative:"java/jvm/jvm-intro.md"};export{l as data};
