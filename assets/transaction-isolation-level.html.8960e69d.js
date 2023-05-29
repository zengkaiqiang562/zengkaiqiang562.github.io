const e={key:"v-4ed5728b",path:"/database/mysql/transaction-isolation-level.html",title:"MySQL\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u8BE6\u89E3",lang:"zh-CN",frontmatter:{title:"MySQL\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u8BE6\u89E3",category:["\u6570\u636E\u5E93"],tag:["MySQL"],summary:'" \u672C\u6587\u7531 SnailClimb \u548C guang19 \u5171\u540C\u5B8C\u6210\u3002" \u4E8B\u52A1\u9694\u79BB\u7EA7\u522B(\u56FE\u6587\u8BE6\u89E3) \u4EC0\u4E48\u662F\u4E8B\u52A1? \u4E8B\u52A1\u662F\u903B\u8F91\u4E0A\u7684\u4E00\u7EC4\u64CD\u4F5C\uFF0C\u8981\u4E48\u90FD\u6267\u884C\uFF0C\u8981\u4E48\u90FD\u4E0D\u6267\u884C\u3002 \u4E8B\u52A1\u6700\u7ECF\u5178\u4E5F\u7ECF\u5E38\u88AB\u62FF\u51FA\u6765\u8BF4\u4F8B\u5B50\u5C31\u662F\u8F6C\u8D26\u4E86\u3002\u5047\u5982\u5C0F\u660E\u8981\u7ED9\u5C0F\u7EA2\u8F6C\u8D261000\u5143\uFF0C\u8FD9\u4E2A\u8F6C\u8D26\u4F1A\u6D89\u53CA\u5230\u4E24\u4E2A\u5173\u952E\u64CD\u4F5C\u5C31\u662F\uFF1A\u5C06\u5C0F\u660E\u7684\u4F59\u989D\u51CF\u5C111000\u5143\uFF0C\u5C06\u5C0F\u7EA2\u7684\u4F59\u989D\u589E\u52A01000\u5143\u3002\u4E07\u4E00\u5728\u8FD9\u4E24\u4E2A\u64CD\u4F5C\u4E4B\u95F4\u7A81\u7136\u51FA\u73B0\u9519\u8BEF\u6BD4\u5982',head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/database/mysql/transaction-isolation-level.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"MySQL\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u8BE6\u89E3"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-04-07T05:53:13.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"MySQL"}],["meta",{property:"article:modified_time",content:"2022-04-07T05:53:13.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B(\u56FE\u6587\u8BE6\u89E3)",slug:"\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B-\u56FE\u6587\u8BE6\u89E3",children:[{level:3,title:"\u4EC0\u4E48\u662F\u4E8B\u52A1?",slug:"\u4EC0\u4E48\u662F\u4E8B\u52A1",children:[]},{level:3,title:"\u4E8B\u52A1\u7684\u7279\u6027(ACID)",slug:"\u4E8B\u52A1\u7684\u7279\u6027-acid",children:[]},{level:3,title:"\u5E76\u53D1\u4E8B\u52A1\u5E26\u6765\u7684\u95EE\u9898",slug:"\u5E76\u53D1\u4E8B\u52A1\u5E26\u6765\u7684\u95EE\u9898",children:[]},{level:3,title:"\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B",slug:"\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B",children:[]},{level:3,title:"\u5B9E\u9645\u60C5\u51B5\u6F14\u793A",slug:"\u5B9E\u9645\u60C5\u51B5\u6F14\u793A",children:[{level:4,title:"\u810F\u8BFB(\u8BFB\u672A\u63D0\u4EA4)",slug:"\u810F\u8BFB-\u8BFB\u672A\u63D0\u4EA4",children:[]},{level:4,title:"\u907F\u514D\u810F\u8BFB(\u8BFB\u5DF2\u63D0\u4EA4)",slug:"\u907F\u514D\u810F\u8BFB-\u8BFB\u5DF2\u63D0\u4EA4",children:[]},{level:4,title:"\u4E0D\u53EF\u91CD\u590D\u8BFB",slug:"\u4E0D\u53EF\u91CD\u590D\u8BFB",children:[]},{level:4,title:"\u53EF\u91CD\u590D\u8BFB",slug:"\u53EF\u91CD\u590D\u8BFB",children:[{level:5,title:"\u6F14\u793A\u5E7B\u8BFB\u51FA\u73B0\u7684\u60C5\u51B5",slug:"\u6F14\u793A\u5E7B\u8BFB\u51FA\u73B0\u7684\u60C5\u51B5",children:[]},{level:5,title:"\u89E3\u51B3\u5E7B\u8BFB\u7684\u65B9\u6CD5",slug:"\u89E3\u51B3\u5E7B\u8BFB\u7684\u65B9\u6CD5",children:[]}]}]},{level:3,title:"\u53C2\u8003",slug:"\u53C2\u8003",children:[]}]}],git:{createdTime:1636197814e3,updatedTime:1649310793e3,contributors:[{name:"guide",email:"koushuangbwcx@163.com",commits:3},{name:"Guide",email:"koushuangbwcx@163.com",commits:1},{name:"sam",email:"sam2008ext@gmail.com",commits:1},{name:"wangtong",email:"wangtong_b@aspirecn.com",commits:1},{name:"yueyang",email:"yy1023178796@gmail.com",commits:1}]},readingTime:{minutes:9,words:2700},filePathRelative:"database/mysql/transaction-isolation-level.md"};export{e as data};