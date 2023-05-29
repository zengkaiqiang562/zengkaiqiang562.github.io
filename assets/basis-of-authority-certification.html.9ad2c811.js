const e={key:"v-cab6b5e6",path:"/system-design/security/basis-of-authority-certification.html",title:"\u8BA4\u8BC1\u6388\u6743\u57FA\u7840",lang:"zh-CN",frontmatter:{title:"\u8BA4\u8BC1\u6388\u6743\u57FA\u7840",category:["\u7CFB\u7EDF\u8BBE\u8BA1"],tag:["\u5B89\u5168"],summary:"\u8BA4\u8BC1 (Authentication) \u548C\u6388\u6743 (Authorization)\u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F \u8FD9\u662F\u4E00\u4E2A\u7EDD\u5927\u591A\u6570\u4EBA\u90FD\u4F1A\u6DF7\u6DC6\u7684\u95EE\u9898\u3002\u9996\u5148\u5148\u4ECE\u8BFB\u97F3\u4E0A\u6765\u8BA4\u8BC6\u8FD9\u4E24\u4E2A\u540D\u8BCD\uFF0C\u5F88\u591A\u4EBA\u90FD\u4F1A\u628A\u5B83\u4FE9\u7684\u8BFB\u97F3\u641E\u6DF7\uFF0C\u6240\u4EE5\u6211\u5EFA\u8BAE\u4F60\u5148\u5148\u53BB\u67E5\u4E00\u67E5\u8FD9\u4E24\u4E2A\u5355\u8BCD\u5230\u5E95\u8BE5\u600E\u4E48\u8BFB\uFF0C\u4ED6\u4EEC\u7684\u5177\u4F53\u542B\u4E49\u662F\u4EC0\u4E48\u3002 \u8BF4\u7B80\u5355\u70B9\u5C31\u662F\uFF1A \u8BA4\u8BC1 (Authentication)\uFF1A \u4F60\u662F\u8C01\u3002; \u6388\u6743 (Authorizati",head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/system-design/security/basis-of-authority-certification.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"\u8BA4\u8BC1\u6388\u6743\u57FA\u7840"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-01-13T12:29:55.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"\u5B89\u5168"}],["meta",{property:"article:modified_time",content:"2022-01-13T12:29:55.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u8BA4\u8BC1 (Authentication) \u548C\u6388\u6743 (Authorization)\u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F",slug:"\u8BA4\u8BC1-authentication-\u548C\u6388\u6743-authorization-\u7684\u533A\u522B\u662F\u4EC0\u4E48",children:[]},{level:2,title:"RBAC \u6A21\u578B\u4E86\u89E3\u5417\uFF1F",slug:"rbac-\u6A21\u578B\u4E86\u89E3\u5417",children:[]},{level:2,title:"\u4EC0\u4E48\u662F Cookie ? Cookie \u7684\u4F5C\u7528\u662F\u4EC0\u4E48?",slug:"\u4EC0\u4E48\u662F-cookie-cookie-\u7684\u4F5C\u7528\u662F\u4EC0\u4E48",children:[]},{level:2,title:"\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 Cookie \u5462\uFF1F",slug:"\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528-cookie-\u5462",children:[]},{level:2,title:"Cookie \u548C Session \u6709\u4EC0\u4E48\u533A\u522B\uFF1F",slug:"cookie-\u548C-session-\u6709\u4EC0\u4E48\u533A\u522B",children:[]},{level:2,title:"\u5982\u4F55\u4F7F\u7528 Session-Cookie \u65B9\u6848\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\uFF1F",slug:"\u5982\u4F55\u4F7F\u7528-session-cookie-\u65B9\u6848\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",children:[]},{level:2,title:"\u591A\u670D\u52A1\u5668\u8282\u70B9\u4E0B Session-Cookie \u65B9\u6848\u5982\u4F55\u505A\uFF1F",slug:"\u591A\u670D\u52A1\u5668\u8282\u70B9\u4E0B-session-cookie-\u65B9\u6848\u5982\u4F55\u505A",children:[]},{level:2,title:"\u5982\u679C\u6CA1\u6709 Cookie \u7684\u8BDD Session \u8FD8\u80FD\u7528\u5417\uFF1F",slug:"\u5982\u679C\u6CA1\u6709-cookie-\u7684\u8BDD-session-\u8FD8\u80FD\u7528\u5417",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48 Cookie \u65E0\u6CD5\u9632\u6B62 CSRF \u653B\u51FB\uFF0C\u800C Token \u53EF\u4EE5\uFF1F",slug:"\u4E3A\u4EC0\u4E48-cookie-\u65E0\u6CD5\u9632\u6B62-csrf-\u653B\u51FB-\u800C-token-\u53EF\u4EE5",children:[]},{level:2,title:"\u4EC0\u4E48\u662F Token?\u4EC0\u4E48\u662F JWT?",slug:"\u4EC0\u4E48\u662F-token-\u4EC0\u4E48\u662F-jwt",children:[]},{level:2,title:"\u5982\u4F55\u57FA\u4E8E Token \u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\uFF1F",slug:"\u5982\u4F55\u57FA\u4E8E-token-\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1",children:[]},{level:2,title:"\u4EC0\u4E48\u662F SSO?",slug:"\u4EC0\u4E48\u662F-sso",children:[]},{level:2,title:"\u4EC0\u4E48\u662F OAuth 2.0\uFF1F",slug:"\u4EC0\u4E48\u662F-oauth-2-0",children:[]}],git:{createdTime:1636454878e3,updatedTime:1642076995e3,contributors:[{name:"guide",email:"koushuangbwcx@163.com",commits:2}]},readingTime:{minutes:13.99,words:4198},filePathRelative:"system-design/security/basis-of-authority-certification.md"};export{e as data};
