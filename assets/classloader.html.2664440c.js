const e={key:"v-4c6c8b61",path:"/zkq/java/jvm/classloader.html",title:"\u7C7B\u52A0\u8F7D\u3001\u8FDE\u63A5\u548C\u521D\u59CB\u5316",lang:"zh-CN",frontmatter:{title:"\u7C7B\u52A0\u8F7D\u3001\u8FDE\u63A5\u548C\u521D\u59CB\u5316",category:["java"],tag:["java"],summary:'1. \u7C7B\u4ECE\u52A0\u8F7D\u3001\u8FDE\u63A5\u3001\u521D\u59CB\u5316\uFF0C\u5230\u5378\u8F7D\u7684\u751F\u547D\u5468\u671F\u53CA\u6982\u8FF0 1. \u52A0\u8F7D\uFF1A\u67E5\u627E\u5E76\u52A0\u8F7D class \u6587\u4EF6\u4E2D\u7684\u4E8C\u8FDB\u5236\u6570\u636E 2. \u8FDE\u63A5\uFF1A\u5C06\u5DF2\u8BFB\u5165\u5185\u5B58\u7684 class \u6587\u4EF6\u7684\u4E8C\u8FDB\u5236\u6570\u636E\u5408\u5E76\u5230 JVM \u8FD0\u884C\u65F6\u73AF\u5883\u4E2D\u53BB\uFF0C\u5305\u542B\u5982\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A 1. \u9A8C\u8BC1\uFF1A\u786E\u4FDD\u88AB\u52A0\u8F7D\u7684\u7C7B\u7684\u6B63\u786E\u6027\u3002 2. \u51C6\u5907\uFF1A\u4E3A\u7C7B\u7684 \u9759\u6001\u53D8\u91CF \u5206\u914D\u5185\u5B58\uFF0C\u5E76\u521D\u59CB\u5316\u5B83\u4EEC\u3002 " \u6CE8\u610F\uFF1A\u8FD9\u91CC\u7684\u521D\u59CB\u5316\u5C31\u662F\u8BBE\u7F6E\u9ED8\u8BA4\u503C 0\uFF08\u5F15\u7528\u53D8',head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/zkq/java/jvm/classloader.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"\u7C7B\u52A0\u8F7D\u3001\u8FDE\u63A5\u548C\u521D\u59CB\u5316"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://zengkaiqiang562.github.io/"}],["meta",{property:"og:updated_time",content:"2022-07-07T15:59:00.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"\u7C7B\u52A0\u8F7D\u3001\u8FDE\u63A5\u548C\u521D\u59CB\u5316"}],["meta",{property:"article:tag",content:"java"}],["meta",{property:"article:modified_time",content:"2022-07-07T15:59:00.000Z"}]]},excerpt:"",headers:[{level:2,title:"1. \u7C7B\u4ECE\u52A0\u8F7D\u3001\u8FDE\u63A5\u3001\u521D\u59CB\u5316\uFF0C\u5230\u5378\u8F7D\u7684\u751F\u547D\u5468\u671F\u53CA\u6982\u8FF0",slug:"_1-\u7C7B\u4ECE\u52A0\u8F7D\u3001\u8FDE\u63A5\u3001\u521D\u59CB\u5316-\u5230\u5378\u8F7D\u7684\u751F\u547D\u5468\u671F\u53CA\u6982\u8FF0",children:[]},{level:2,title:"2. \u7C7B\u7684\u52A0\u8F7D",slug:"_2-\u7C7B\u7684\u52A0\u8F7D",children:[{level:3,title:"2.1 \u7C7B\u52A0\u8F7D\u8981\u5B8C\u6210\u7684\u529F\u80FD",slug:"_2-1-\u7C7B\u52A0\u8F7D\u8981\u5B8C\u6210\u7684\u529F\u80FD",children:[]},{level:3,title:"2.2 \u7C7B\u52A0\u8F7D\u7684\u65B9\u5F0F",slug:"_2-2-\u7C7B\u52A0\u8F7D\u7684\u65B9\u5F0F",children:[]},{level:3,title:"2.3 \u7C7B\u52A0\u8F7D\u5668",slug:"_2-3-\u7C7B\u52A0\u8F7D\u5668",children:[{level:4,title:"2.3.1 Java \u865A\u62DF\u673A\u81EA\u5E26\u7684\u52A0\u8F7D\u5668\uFF08\u7CFB\u7EDF\u7C7B\u52A0\u8F7D\u5668\uFF09",slug:"_2-3-1-java-\u865A\u62DF\u673A\u81EA\u5E26\u7684\u52A0\u8F7D\u5668-\u7CFB\u7EDF\u7C7B\u52A0\u8F7D\u5668",children:[{level:5,title:"2.3.1.1 \u542F\u52A8\u7C7B\u52A0\u8F7D\u5668\uFF08BootstrapClassLoader\uFF09",slug:"_2-3-1-1-\u542F\u52A8\u7C7B\u52A0\u8F7D\u5668-bootstrapclassloader",children:[]},{level:5,title:"2.3.1.2 \u5E73\u53F0\u7C7B\u52A0\u8F7D\u5668\uFF08PlatformClassLoader\uFF09",slug:"_2-3-1-2-\u5E73\u53F0\u7C7B\u52A0\u8F7D\u5668-platformclassloader",children:[]},{level:5,title:"2.3.1.3 \u6269\u5C55\u7C7B\u52A0\u8F7D\u5668\uFF08ExtensionClassLoader\uFF09",slug:"_2-3-1-3-\u6269\u5C55\u7C7B\u52A0\u8F7D\u5668-extensionclassloader",children:[]},{level:5,title:"2.3.1.4 \u5E94\u7528\u7A0B\u5E8F\u7C7B\u52A0\u8F7D\u5668\uFF08AppClassLoader\uFF09",slug:"_2-3-1-4-\u5E94\u7528\u7A0B\u5E8F\u7C7B\u52A0\u8F7D\u5668-appclassloader",children:[]}]},{level:4,title:"2.3.2 \u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668",slug:"_2-3-2-\u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668",children:[{level:5,title:"2.3.2.1 \u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668\u4E3E\u4F8B",slug:"_2-3-2-1-\u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668\u4E3E\u4F8B",children:[]}]},{level:4,title:"2.3.3 \u7C7B\u52A0\u8F7D\u5668\u4E4B\u95F4\u7684\u5173\u7CFB",slug:"_2-3-3-\u7C7B\u52A0\u8F7D\u5668\u4E4B\u95F4\u7684\u5173\u7CFB",children:[]},{level:4,title:"2.3.4 \u6CE8\u610F\u4E8B\u9879",slug:"_2-3-4-\u6CE8\u610F\u4E8B\u9879",children:[]}]},{level:3,title:"2.4 \u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B",slug:"_2-4-\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B",children:[{level:4,title:"2.4.1 \u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u7684\u5DE5\u4F5C\u8FC7\u7A0B",slug:"_2-4-1-\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u7684\u5DE5\u4F5C\u8FC7\u7A0B",children:[]},{level:4,title:"2.4.2 \u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668 & \u521D\u59CB\u7C7B\u52A0\u8F7D\u5668",slug:"_2-4-2-\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668-\u521D\u59CB\u7C7B\u52A0\u8F7D\u5668",children:[]},{level:4,title:"2.4.3 \u6CE8\u610F\u4E8B\u9879",slug:"_2-4-3-\u6CE8\u610F\u4E8B\u9879",children:[]},{level:4,title:"2.4.4 \u7834\u574F\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B & \u7EBF\u7A0B\u4E0A\u4E0B\u6587\u7C7B\u52A0\u8F7D\u5668",slug:"_2-4-4-\u7834\u574F\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B-\u7EBF\u7A0B\u4E0A\u4E0B\u6587\u7C7B\u52A0\u8F7D\u5668",children:[]}]}]},{level:2,title:"3. \u7C7B\u7684\u8FDE\u63A5",slug:"_3-\u7C7B\u7684\u8FDE\u63A5",children:[{level:3,title:"3.1 \u9A8C\u8BC1",slug:"_3-1-\u9A8C\u8BC1",children:[{level:4,title:"3.1.1 \u9A8C\u8BC1\u7684\u4E3B\u8981\u5185\u5BB9",slug:"_3-1-1-\u9A8C\u8BC1\u7684\u4E3B\u8981\u5185\u5BB9",children:[]}]},{level:3,title:"3.2 \u51C6\u5907",slug:"_3-2-\u51C6\u5907",children:[]},{level:3,title:"3.3 \u89E3\u6790\uFF08\u5E38\u91CF\u6C60\u4E2D\u7684\u7B26\u53F7\u5F15\u7528\u8F6C\u6362\u6210\u76F4\u63A5\u5F15\u7528\uFF09",slug:"_3-3-\u89E3\u6790-\u5E38\u91CF\u6C60\u4E2D\u7684\u7B26\u53F7\u5F15\u7528\u8F6C\u6362\u6210\u76F4\u63A5\u5F15\u7528",children:[]}]},{level:2,title:"4. \u7C7B\u7684\u521D\u59CB\u5316",slug:"_4-\u7C7B\u7684\u521D\u59CB\u5316",children:[{level:3,title:"4.1 \u7C7B\u521D\u59CB\u5316\u7684\u8FC7\u7A0B",slug:"_4-1-\u7C7B\u521D\u59CB\u5316\u7684\u8FC7\u7A0B",children:[]},{level:3,title:"4.2 \u7C7B\u521D\u59CB\u5316\u7684\u65F6\u673A\uFF08\u5BF9\u7C7B\u7684\u9996\u6B21\u4E3B\u52A8\u4F7F\u7528\uFF09",slug:"_4-2-\u7C7B\u521D\u59CB\u5316\u7684\u65F6\u673A-\u5BF9\u7C7B\u7684\u9996\u6B21\u4E3B\u52A8\u4F7F\u7528",children:[{level:4,title:"4.2.1 \u4E3B\u52A8\u4F7F\u7528\u7684\u60C5\u51B5",slug:"_4-2-1-\u4E3B\u52A8\u4F7F\u7528\u7684\u60C5\u51B5",children:[]},{level:4,title:"4.2.2 \u88AB\u52A8\u4F7F\u7528\u7684\u60C5\u51B5",slug:"_4-2-2-\u88AB\u52A8\u4F7F\u7528\u7684\u60C5\u51B5",children:[]},{level:4,title:"4.2.3 \u4E3E\u4F8B\u8BF4\u660E",slug:"_4-2-3-\u4E3E\u4F8B\u8BF4\u660E",children:[]}]}]},{level:2,title:"5. \u7C7B\u7684\u5378\u8F7D",slug:"_5-\u7C7B\u7684\u5378\u8F7D",children:[]}],git:{createdTime:165720954e4,updatedTime:165720954e4,contributors:[{name:"zengk",email:"zengkaiqiang562@163.com",commits:1}]},readingTime:{minutes:10.23,words:3068},filePathRelative:"zkq/java/jvm/classloader.md"};export{e as data};
