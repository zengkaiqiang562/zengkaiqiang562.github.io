const e={key:"v-d25ff218",path:"/zkq/java/jvm/class-exe-engine.html",title:"\u5B57\u8282\u7801\u6267\u884C\u5F15\u64CE",lang:"zh-CN",frontmatter:{title:"\u5B57\u8282\u7801\u6267\u884C\u5F15\u64CE",category:["java"],tag:["java"],summary:'1. \u5B57\u8282\u7801\u6267\u884C\u5F15\u64CE\u6982\u8FF0 JVM \u5B57\u8282\u7801\u6267\u884C\u5F15\u64CE\u7684\u529F\u80FD\u57FA\u672C\u5C31\u662F\uFF1A 1. \u8F93\u5165\u5B57\u8282\u7801\u6587\u4EF6\uFF1B 2. \u7136\u540E\u5BF9\u5B57\u8282\u7801\u8FDB\u884C\u89E3\u6790\u5E76\u5904\u7406\uFF1B 3. \u6700\u540E\u8F93\u51FA\u6267\u884C\u7684\u7ED3\u679C\u3002 JVM \u5B57\u8282\u7801\u6267\u884C\u5F15\u64CE\u7684\u5B9E\u73B0\u65B9\u5F0F\u53EF\u4EE5\u662F\uFF1A 1. \u901A\u8FC7\u89E3\u91CA\u5668\u76F4\u63A5\u89E3\u91CA\u6267\u884C\u5B57\u8282\u7801\uFF1B 2. \u6216\u8005\u901A\u8FC7\u5373\u65F6\u7F16\u8BD1\u5668\u4EA7\u751F\u672C\u5730\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662F\u7F16\u8BD1\u6267\u884C\u3002 3. \u4E5F\u53EF\u80FD\u662F\u4EE5\u4E0A\u4E24\u8005\u7686\u6709\u3002 2. \u6808\u5E27\r" \u53C2\u8003 \u300A\u8BA4\u8BC6 JVM \u89C4',head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/zkq/java/jvm/class-exe-engine.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"\u5B57\u8282\u7801\u6267\u884C\u5F15\u64CE"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://zengkaiqiang562.github.io/"}],["meta",{property:"og:updated_time",content:"2022-07-07T15:59:00.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"\u5B57\u8282\u7801\u6267\u884C\u5F15\u64CE"}],["meta",{property:"article:tag",content:"java"}],["meta",{property:"article:modified_time",content:"2022-07-07T15:59:00.000Z"}]]},excerpt:"",headers:[{level:2,title:"1. \u5B57\u8282\u7801\u6267\u884C\u5F15\u64CE\u6982\u8FF0",slug:"_1-\u5B57\u8282\u7801\u6267\u884C\u5F15\u64CE\u6982\u8FF0",children:[]},{level:2,title:"2. \u6808\u5E27",slug:"_2-\u6808\u5E27",children:[]},{level:2,title:"3. \u5C40\u90E8\u53D8\u91CF\u8868",slug:"_3-\u5C40\u90E8\u53D8\u91CF\u8868",children:[{level:3,title:"3.1 \u5C40\u90E8\u53D8\u91CF\u8868\u4E2D\u7684\u69FD\u4F4D slot \u662F\u53EF\u590D\u7528\u7684",slug:"_3-1-\u5C40\u90E8\u53D8\u91CF\u8868\u4E2D\u7684\u69FD\u4F4D-slot-\u662F\u53EF\u590D\u7528\u7684",children:[]}]},{level:2,title:"4. \u64CD\u4F5C\u6570\u6808",slug:"_4-\u64CD\u4F5C\u6570\u6808",children:[]},{level:2,title:"5. \u52A8\u6001\u8FDE\u63A5",slug:"_5-\u52A8\u6001\u8FDE\u63A5",children:[]},{level:2,title:"6. \u65B9\u6CD5\u8FD4\u56DE\u5730\u5740",slug:"_6-\u65B9\u6CD5\u8FD4\u56DE\u5730\u5740",children:[]},{level:2,title:"7. \u65B9\u6CD5\u8C03\u7528",slug:"_7-\u65B9\u6CD5\u8C03\u7528",children:[{level:3,title:"7.1 \u5206\u6D3E",slug:"_7-1-\u5206\u6D3E",children:[]},{level:3,title:"7.1.1 \u9759\u6001\u5206\u6D3E & \u52A8\u6001\u5206\u6D3E",slug:"_7-1-1-\u9759\u6001\u5206\u6D3E-\u52A8\u6001\u5206\u6D3E",children:[]},{level:3,title:"7.1.2 \u5355\u5206\u6D3E & \u591A\u5206\u6D3E",slug:"_7-1-2-\u5355\u5206\u6D3E-\u591A\u5206\u6D3E",children:[]}]},{level:2,title:"8. \u5982\u4F55\u6267\u884C\u65B9\u6CD5\u4E2D\u7684\u5B57\u8282\u7801\u6307\u4EE4",slug:"_8-\u5982\u4F55\u6267\u884C\u65B9\u6CD5\u4E2D\u7684\u5B57\u8282\u7801\u6307\u4EE4",children:[]},{level:2,title:"9. \u6808\u5E27\u3001\u64CD\u4F5C\u6570\u6808\u3001\u5C40\u90E8\u53D8\u91CF\u8868\u4E4B\u95F4\u7684\u4EA4\u4E92\u5173\u7CFB",slug:"_9-\u6808\u5E27\u3001\u64CD\u4F5C\u6570\u6808\u3001\u5C40\u90E8\u53D8\u91CF\u8868\u4E4B\u95F4\u7684\u4EA4\u4E92\u5173\u7CFB",children:[]}],git:{createdTime:165720954e4,updatedTime:165720954e4,contributors:[{name:"zengk",email:"zengkaiqiang562@163.com",commits:1}]},readingTime:{minutes:5.18,words:1554},filePathRelative:"zkq/java/jvm/class-exe-engine.md"};export{e as data};