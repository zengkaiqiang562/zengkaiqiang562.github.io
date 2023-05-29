const e={key:"v-e6d5f0d8",path:"/database/mysql/innodb-implementation-of-mvcc.html",title:"InnoDB\u5B58\u50A8\u5F15\u64CE\u5BF9MVCC\u7684\u5B9E\u73B0",lang:"zh-CN",frontmatter:{title:"InnoDB\u5B58\u50A8\u5F15\u64CE\u5BF9MVCC\u7684\u5B9E\u73B0",category:["\u6570\u636E\u5E93"],tag:["MySQL"],summary:"\u4E00\u81F4\u6027\u975E\u9501\u5B9A\u8BFB\u548C\u9501\u5B9A\u8BFB \u4E00\u81F4\u6027\u975E\u9501\u5B9A\u8BFB \u5BF9\u4E8E \u4E00\u81F4\u6027\u975E\u9501\u5B9A\u8BFB\uFF08Consistent Nonlocking Reads\uFF09 \u7684\u5B9E\u73B0\uFF0C\u901A\u5E38\u505A\u6CD5\u662F\u52A0\u4E00\u4E2A\u7248\u672C\u53F7\u6216\u8005\u65F6\u95F4\u6233\u5B57\u6BB5\uFF0C\u5728\u66F4\u65B0\u6570\u636E\u7684\u540C\u65F6\u7248\u672C\u53F7 + 1 \u6216\u8005\u66F4\u65B0\u65F6\u95F4\u6233\u3002\u67E5\u8BE2\u65F6\uFF0C\u5C06\u5F53\u524D\u53EF\u89C1\u7684\u7248\u672C\u53F7\u4E0E\u5BF9\u5E94\u8BB0\u5F55\u7684\u7248\u672C\u53F7\u8FDB\u884C\u6BD4\u5BF9\uFF0C\u5982\u679C\u8BB0\u5F55\u7684\u7248\u672C\u5C0F\u4E8E\u53EF\u89C1\u7248\u672C\uFF0C\u5219\u8868\u793A\u8BE5\u8BB0\u5F55\u53EF\u89C1 \u5728 InnoDB \u5B58\u50A8\u5F15\u64CE\u4E2D\uFF0C\u591A\u7248\u672C\u63A7\u5236 (m",head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/database/mysql/innodb-implementation-of-mvcc.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"InnoDB\u5B58\u50A8\u5F15\u64CE\u5BF9MVCC\u7684\u5B9E\u73B0"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-11-09T10:47:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"MySQL"}],["meta",{property:"article:modified_time",content:"2021-11-09T10:47:58.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u4E00\u81F4\u6027\u975E\u9501\u5B9A\u8BFB\u548C\u9501\u5B9A\u8BFB",slug:"\u4E00\u81F4\u6027\u975E\u9501\u5B9A\u8BFB\u548C\u9501\u5B9A\u8BFB",children:[{level:3,title:"\u4E00\u81F4\u6027\u975E\u9501\u5B9A\u8BFB",slug:"\u4E00\u81F4\u6027\u975E\u9501\u5B9A\u8BFB",children:[]},{level:3,title:"\u9501\u5B9A\u8BFB",slug:"\u9501\u5B9A\u8BFB",children:[]}]},{level:2,title:"InnoDB \u5BF9 MVCC \u7684\u5B9E\u73B0",slug:"innodb-\u5BF9-mvcc-\u7684\u5B9E\u73B0",children:[{level:3,title:"\u9690\u85CF\u5B57\u6BB5",slug:"\u9690\u85CF\u5B57\u6BB5",children:[]},{level:3,title:"ReadView",slug:"readview",children:[]},{level:3,title:"undo-log",slug:"undo-log",children:[]},{level:3,title:"\u6570\u636E\u53EF\u89C1\u6027\u7B97\u6CD5",slug:"\u6570\u636E\u53EF\u89C1\u6027\u7B97\u6CD5",children:[]}]},{level:2,title:"RC \u548C RR \u9694\u79BB\u7EA7\u522B\u4E0B MVCC \u7684\u5DEE\u5F02",slug:"rc-\u548C-rr-\u9694\u79BB\u7EA7\u522B\u4E0B-mvcc-\u7684\u5DEE\u5F02",children:[]},{level:2,title:"MVCC \u89E3\u51B3\u4E0D\u53EF\u91CD\u590D\u8BFB\u95EE\u9898",slug:"mvcc-\u89E3\u51B3\u4E0D\u53EF\u91CD\u590D\u8BFB\u95EE\u9898",children:[{level:3,title:"\u5728 RC \u4E0B ReadView \u751F\u6210\u60C5\u51B5",slug:"\u5728-rc-\u4E0B-readview-\u751F\u6210\u60C5\u51B5",children:[]},{level:3,title:"\u5728 RR \u4E0B ReadView \u751F\u6210\u60C5\u51B5",slug:"\u5728-rr-\u4E0B-readview-\u751F\u6210\u60C5\u51B5",children:[]}]},{level:2,title:"MVCC\u2795Next-key-Lock \u9632\u6B62\u5E7B\u8BFB",slug:"mvcc\u2795next-key-lock-\u9632\u6B62\u5E7B\u8BFB",children:[]},{level:2,title:"\u53C2\u8003",slug:"\u53C2\u8003",children:[]}],git:{createdTime:1636197814e3,updatedTime:1636454878e3,contributors:[{name:"guide",email:"koushuangbwcx@163.com",commits:2}]},readingTime:{minutes:12.58,words:3774},filePathRelative:"database/mysql/innodb-implementation-of-mvcc.md"};export{e as data};