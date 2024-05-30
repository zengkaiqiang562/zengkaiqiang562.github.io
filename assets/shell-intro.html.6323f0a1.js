const l={key:"v-160f5f98",path:"/cs-basics/operating-system/shell-intro.html",title:"Shell \u7F16\u7A0B\u5165\u95E8",lang:"zh-CN",frontmatter:{title:"Shell \u7F16\u7A0B\u5165\u95E8",category:["\u8BA1\u7B97\u673A\u57FA\u7840"],tag:["\u64CD\u4F5C\u7CFB\u7EDF","Linux"],summary:"Shell \u7F16\u7A0B\u5165\u95E8 \u8D70\u8FDB Shell \u7F16\u7A0B\u7684\u5927\u95E8 \u4E3A\u4EC0\u4E48\u8981\u5B66Shell\uFF1F \u5B66\u4E00\u4E2A\u4E1C\u897F\uFF0C\u6211\u4EEC\u5927\u90E8\u5206\u60C5\u51B5\u90FD\u662F\u5F80\u5B9E\u7528\u6027\u65B9\u5411\u7740\u60F3\u3002\u4ECE\u5DE5\u4F5C\u89D2\u5EA6\u6765\u8BB2\uFF0C\u5B66\u4E60 Shell \u662F\u4E3A\u4E86\u63D0\u9AD8\u6211\u4EEC\u81EA\u5DF1\u5DE5\u4F5C\u6548\u7387\uFF0C\u63D0\u9AD8\u4EA7\u51FA\uFF0C\u8BA9\u6211\u4EEC\u5728\u66F4\u5C11\u7684\u65F6\u95F4\u5B8C\u6210\u66F4\u591A\u7684\u4E8B\u60C5\u3002 \u5F88\u591A\u4EBA\u4F1A\u8BF4 Shell \u7F16\u7A0B\u5C5E\u4E8E\u8FD0\u7EF4\u65B9\u9762\u7684\u77E5\u8BC6\u4E86\uFF0C\u5E94\u8BE5\u662F\u8FD0\u7EF4\u4EBA\u5458\u6765\u505A\uFF0C\u6211\u4EEC\u505A\u540E\u7AEF\u5F00\u53D1\u7684\u6CA1\u5FC5\u8981\u5B66\u3002\u6211\u89C9\u5F97\u8FD9\u79CD\u8BF4\u6CD5\u5927\u9519\u7279\u9519\uFF0C\u76F8\u6BD4\u4E8E\u4E13",head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/cs-basics/operating-system/shell-intro.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"Shell \u7F16\u7A0B\u5165\u95E8"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-11-09T13:07:13.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"\u64CD\u4F5C\u7CFB\u7EDF"}],["meta",{property:"article:tag",content:"Linux"}],["meta",{property:"article:modified_time",content:"2021-11-09T13:07:13.000Z"}]]},excerpt:"",headers:[{level:1,title:"Shell \u7F16\u7A0B\u5165\u95E8",slug:"shell-\u7F16\u7A0B\u5165\u95E8",children:[{level:2,title:"\u8D70\u8FDB Shell \u7F16\u7A0B\u7684\u5927\u95E8",slug:"\u8D70\u8FDB-shell-\u7F16\u7A0B\u7684\u5927\u95E8",children:[{level:3,title:"\u4E3A\u4EC0\u4E48\u8981\u5B66Shell\uFF1F",slug:"\u4E3A\u4EC0\u4E48\u8981\u5B66shell",children:[]},{level:3,title:"\u4EC0\u4E48\u662F Shell\uFF1F",slug:"\u4EC0\u4E48\u662F-shell",children:[]},{level:3,title:"Shell \u7F16\u7A0B\u7684 Hello World",slug:"shell-\u7F16\u7A0B\u7684-hello-world",children:[]}]},{level:2,title:"Shell \u53D8\u91CF",slug:"shell-\u53D8\u91CF",children:[{level:3,title:"Shell \u7F16\u7A0B\u4E2D\u7684\u53D8\u91CF\u4ECB\u7ECD",slug:"shell-\u7F16\u7A0B\u4E2D\u7684\u53D8\u91CF\u4ECB\u7ECD",children:[]},{level:3,title:"Shell \u5B57\u7B26\u4E32\u5165\u95E8",slug:"shell-\u5B57\u7B26\u4E32\u5165\u95E8",children:[]},{level:3,title:"Shell \u5B57\u7B26\u4E32\u5E38\u89C1\u64CD\u4F5C",slug:"shell-\u5B57\u7B26\u4E32\u5E38\u89C1\u64CD\u4F5C",children:[]},{level:3,title:"Shell \u6570\u7EC4",slug:"shell-\u6570\u7EC4",children:[]}]},{level:2,title:"Shell \u57FA\u672C\u8FD0\u7B97\u7B26",slug:"shell-\u57FA\u672C\u8FD0\u7B97\u7B26",children:[{level:3,title:"\u7B97\u6570\u8FD0\u7B97\u7B26",slug:"\u7B97\u6570\u8FD0\u7B97\u7B26",children:[]},{level:3,title:"\u5173\u7CFB\u8FD0\u7B97\u7B26",slug:"\u5173\u7CFB\u8FD0\u7B97\u7B26",children:[]},{level:3,title:"\u903B\u8F91\u8FD0\u7B97\u7B26",slug:"\u903B\u8F91\u8FD0\u7B97\u7B26",children:[]},{level:3,title:"\u5E03\u5C14\u8FD0\u7B97\u7B26",slug:"\u5E03\u5C14\u8FD0\u7B97\u7B26",children:[]},{level:3,title:"\u5B57\u7B26\u4E32\u8FD0\u7B97\u7B26",slug:"\u5B57\u7B26\u4E32\u8FD0\u7B97\u7B26",children:[]},{level:3,title:"\u6587\u4EF6\u76F8\u5173\u8FD0\u7B97\u7B26",slug:"\u6587\u4EF6\u76F8\u5173\u8FD0\u7B97\u7B26",children:[]}]},{level:2,title:"shell\u6D41\u7A0B\u63A7\u5236",slug:"shell\u6D41\u7A0B\u63A7\u5236",children:[{level:3,title:"if \u6761\u4EF6\u8BED\u53E5",slug:"if-\u6761\u4EF6\u8BED\u53E5",children:[]},{level:3,title:"for \u5FAA\u73AF\u8BED\u53E5",slug:"for-\u5FAA\u73AF\u8BED\u53E5",children:[]},{level:3,title:"while \u8BED\u53E5",slug:"while-\u8BED\u53E5",children:[]}]},{level:2,title:"shell \u51FD\u6570",slug:"shell-\u51FD\u6570",children:[{level:3,title:"\u4E0D\u5E26\u53C2\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570",slug:"\u4E0D\u5E26\u53C2\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570",children:[]},{level:3,title:"\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570",slug:"\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570",children:[]},{level:3,title:"\u5E26\u53C2\u6570\u7684\u51FD\u6570",slug:"\u5E26\u53C2\u6570\u7684\u51FD\u6570",children:[]}]}]}],git:{createdTime:1636463233e3,updatedTime:1636463233e3,contributors:[{name:"guide",email:"koushuangbwcx@163.com",commits:1}]},readingTime:{minutes:11.3,words:3389},filePathRelative:"cs-basics/operating-system/shell-intro.md"};export{l as data};
