const e={key:"v-501812b4",path:"/system-design/basis/naming.html",title:"\u547D\u540D",lang:"zh-CN",frontmatter:{title:"\u547D\u540D",category:["\u4EE3\u7801\u8D28\u91CF"],summary:"\u6211\u8FD8\u8BB0\u5F97\u6211\u521A\u5DE5\u4F5C\u90A3\u4E00\u6BB5\u65F6\u95F4\uFF0C \u9879\u76EE Code Review \u7684\u65F6\u5019\uFF0C\u6211\u7ECF\u5E38\u56E0\u4E3A\u53D8\u91CF\u547D\u540D\u4E0D\u89C4\u8303\u800C\u88AB \u201Cdiss\u201D! \u7A76\u5176\u539F\u56E0\u8FD8\u662F\u81EA\u5DF1\u90A3\u4F1A\u7ECF\u9A8C\u4E0D\u8DB3\uFF0C\u800C\u4E14\uFF0C\u5927\u5B66\u90A3\u4F1A\u5199\u9879\u76EE\u7684\u65F6\u5019\u4E0D\u592A\u6CE8\u610F\u8FD9\u4E9B\u95EE\u9898\uFF0C\u60F3\u7740\u53EA\u8981\u628A\u529F\u80FD\u5B9E\u73B0\u51FA\u6765\u5C31\u884C\u4E86\u3002 \u4F46\u662F\uFF0C\u5DE5\u4F5C\u4E2D\u5C31\u4E0D\u4E00\u6837\uFF0C\u4E3A\u4E86\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u3001\u53EF\u7EF4\u62A4\u6027\uFF0C\u9879\u76EE\u7EC4\u5BF9\u4E8E\u4EE3\u7801\u8D28\u91CF\u7684\u8981\u6C42\u8FD8\u662F\u5F88\u9AD8\u7684\uFF01 \u524D\u6BB5\u65F6\u95F4\uFF0C\u9879\u76EE\u7EC4\u65B0\u6765\u7684\u4E00\u4E2A\u5B9E\u4E60\u751F\u4E5F\u7ECF\u5E38\u5728 Code ",head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/system-design/basis/naming.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"\u547D\u540D"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-03-11T08:36:59.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2022-03-11T08:36:59.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u4E3A\u4EC0\u4E48\u9700\u8981\u91CD\u89C6\u547D\u540D\uFF1F",slug:"\u4E3A\u4EC0\u4E48\u9700\u8981\u91CD\u89C6\u547D\u540D",children:[]},{level:2,title:"\u5E38\u89C1\u547D\u540D\u89C4\u5219\u4EE5\u53CA\u9002\u7528\u573A\u666F",slug:"\u5E38\u89C1\u547D\u540D\u89C4\u5219\u4EE5\u53CA\u9002\u7528\u573A\u666F",children:[{level:3,title:"\u9A7C\u5CF0\u547D\u540D\u6CD5\uFF08CamelCase\uFF09",slug:"\u9A7C\u5CF0\u547D\u540D\u6CD5-camelcase",children:[{level:4,title:"\u5927\u9A7C\u5CF0\u547D\u540D\u6CD5\uFF08UpperCamelCase\uFF09",slug:"\u5927\u9A7C\u5CF0\u547D\u540D\u6CD5-uppercamelcase",children:[]},{level:4,title:"\u5C0F\u9A7C\u5CF0\u547D\u540D\u6CD5\uFF08lowerCamelCase\uFF09",slug:"\u5C0F\u9A7C\u5CF0\u547D\u540D\u6CD5-lowercamelcase",children:[]}]},{level:3,title:"\u86C7\u5F62\u547D\u540D\u6CD5\uFF08snake_case\uFF09",slug:"\u86C7\u5F62\u547D\u540D\u6CD5-snake-case",children:[]},{level:3,title:"\u4E32\u5F0F\u547D\u540D\u6CD5\uFF08kebab-case\uFF09",slug:"\u4E32\u5F0F\u547D\u540D\u6CD5-kebab-case",children:[]}]},{level:2,title:"\u5E38\u89C1\u547D\u540D\u89C4\u8303",slug:"\u5E38\u89C1\u547D\u540D\u89C4\u8303",children:[{level:3,title:"Java \u8BED\u8A00\u57FA\u672C\u547D\u540D\u89C4\u8303",slug:"java-\u8BED\u8A00\u57FA\u672C\u547D\u540D\u89C4\u8303",children:[]},{level:3,title:"\u547D\u540D\u6613\u8BFB\u6027\u89C4\u8303",slug:"\u547D\u540D\u6613\u8BFB\u6027\u89C4\u8303",children:[]}]},{level:2,title:"Codelf:\u53D8\u91CF\u547D\u540D\u795E\u5668?",slug:"codelf-\u53D8\u91CF\u547D\u540D\u795E\u5668",children:[]},{level:2,title:"\u76F8\u5173\u9605\u8BFB\u63A8\u8350",slug:"\u76F8\u5173\u9605\u8BFB\u63A8\u8350",children:[]},{level:2,title:"\u603B\u7ED3",slug:"\u603B\u7ED3",children:[]}],git:{createdTime:1636454878e3,updatedTime:1646987819e3,contributors:[{name:"guide",email:"koushuangbwcx@163.com",commits:3}]},readingTime:{minutes:7.52,words:2257},filePathRelative:"system-design/basis/naming.md"};export{e as data};
