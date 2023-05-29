const e={key:"v-66cf87b6",path:"/java/collection/java-collection-questions-02.html",title:"Java\u96C6\u5408\u5E38\u89C1\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3(\u4E0B)",lang:"zh-CN",frontmatter:{title:"Java\u96C6\u5408\u5E38\u89C1\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3(\u4E0B)",category:["Java"],tag:["Java\u96C6\u5408"],summary:"Map \u63A5\u53E3 HashMap \u548C Hashtable \u7684\u533A\u522B 1. \u7EBF\u7A0B\u662F\u5426\u5B89\u5168\uFF1A HashMap \u662F\u975E\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0CHashtable \u662F\u7EBF\u7A0B\u5B89\u5168\u7684,\u56E0\u4E3A Hashtable \u5185\u90E8\u7684\u65B9\u6CD5\u57FA\u672C\u90FD\u7ECF\u8FC7synchronized \u4FEE\u9970\u3002\uFF08\u5982\u679C\u4F60\u8981\u4FDD\u8BC1\u7EBF\u7A0B\u5B89\u5168\u7684\u8BDD\u5C31\u4F7F\u7528 ConcurrentHashMap \u5427\uFF01\uFF09\uFF1B 2. \u6548\u7387\uFF1A \u56E0\u4E3A\u7EBF\u7A0B\u5B89\u5168\u7684\u95EE\u9898\uFF0CHashMap \u8981",head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/java/collection/java-collection-questions-02.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"Java\u96C6\u5408\u5E38\u89C1\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3(\u4E0B)"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://zengkaiqiang562.github.io/"}],["meta",{property:"og:updated_time",content:"2022-03-03T01:14:56.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"Java\u96C6\u5408\u5E38\u89C1\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3(\u4E0B)"}],["meta",{property:"article:tag",content:"Java\u96C6\u5408"}],["meta",{property:"article:modified_time",content:"2022-03-03T01:14:56.000Z"}]]},excerpt:"",headers:[{level:2,title:"Map \u63A5\u53E3",slug:"map-\u63A5\u53E3",children:[{level:3,title:"HashMap \u548C Hashtable \u7684\u533A\u522B",slug:"hashmap-\u548C-hashtable-\u7684\u533A\u522B",children:[]},{level:3,title:"HashMap \u548C HashSet \u533A\u522B",slug:"hashmap-\u548C-hashset-\u533A\u522B",children:[]},{level:3,title:"HashMap \u548C TreeMap \u533A\u522B",slug:"hashmap-\u548C-treemap-\u533A\u522B",children:[]},{level:3,title:"HashSet \u5982\u4F55\u68C0\u67E5\u91CD\u590D",slug:"hashset-\u5982\u4F55\u68C0\u67E5\u91CD\u590D",children:[]},{level:3,title:"HashMap \u7684\u5E95\u5C42\u5B9E\u73B0",slug:"hashmap-\u7684\u5E95\u5C42\u5B9E\u73B0",children:[{level:4,title:"JDK1.8 \u4E4B\u524D",slug:"jdk1-8-\u4E4B\u524D",children:[]},{level:4,title:"JDK1.8 \u4E4B\u540E",slug:"jdk1-8-\u4E4B\u540E",children:[]}]},{level:3,title:"HashMap \u7684\u957F\u5EA6\u4E3A\u4EC0\u4E48\u662F 2 \u7684\u5E42\u6B21\u65B9",slug:"hashmap-\u7684\u957F\u5EA6\u4E3A\u4EC0\u4E48\u662F-2-\u7684\u5E42\u6B21\u65B9",children:[]},{level:3,title:"HashMap \u591A\u7EBF\u7A0B\u64CD\u4F5C\u5BFC\u81F4\u6B7B\u5FAA\u73AF\u95EE\u9898",slug:"hashmap-\u591A\u7EBF\u7A0B\u64CD\u4F5C\u5BFC\u81F4\u6B7B\u5FAA\u73AF\u95EE\u9898",children:[]},{level:3,title:"HashMap \u6709\u54EA\u51E0\u79CD\u5E38\u89C1\u7684\u904D\u5386\u65B9\u5F0F?",slug:"hashmap-\u6709\u54EA\u51E0\u79CD\u5E38\u89C1\u7684\u904D\u5386\u65B9\u5F0F",children:[]},{level:3,title:"ConcurrentHashMap \u548C Hashtable \u7684\u533A\u522B",slug:"concurrenthashmap-\u548C-hashtable-\u7684\u533A\u522B",children:[]},{level:3,title:"ConcurrentHashMap \u7EBF\u7A0B\u5B89\u5168\u7684\u5177\u4F53\u5B9E\u73B0\u65B9\u5F0F/\u5E95\u5C42\u5177\u4F53\u5B9E\u73B0",slug:"concurrenthashmap-\u7EBF\u7A0B\u5B89\u5168\u7684\u5177\u4F53\u5B9E\u73B0\u65B9\u5F0F-\u5E95\u5C42\u5177\u4F53\u5B9E\u73B0",children:[{level:4,title:"JDK1.7\uFF08\u4E0A\u9762\u6709\u793A\u610F\u56FE\uFF09",slug:"jdk1-7-\u4E0A\u9762\u6709\u793A\u610F\u56FE",children:[]},{level:4,title:"JDK1.8 \uFF08\u4E0A\u9762\u6709\u793A\u610F\u56FE\uFF09",slug:"jdk1-8-\u4E0A\u9762\u6709\u793A\u610F\u56FE",children:[]}]}]},{level:2,title:"Collections \u5DE5\u5177\u7C7B",slug:"collections-\u5DE5\u5177\u7C7B",children:[{level:3,title:"\u6392\u5E8F\u64CD\u4F5C",slug:"\u6392\u5E8F\u64CD\u4F5C",children:[]},{level:3,title:"\u67E5\u627E,\u66FF\u6362\u64CD\u4F5C",slug:"\u67E5\u627E-\u66FF\u6362\u64CD\u4F5C",children:[]},{level:3,title:"\u540C\u6B65\u63A7\u5236",slug:"\u540C\u6B65\u63A7\u5236",children:[]}]}],git:{createdTime:1643707227e3,updatedTime:1646270096e3,contributors:[{name:"guide",email:"koushuangbwcx@163.com",commits:3}]},readingTime:{minutes:14.53,words:4359},filePathRelative:"java/collection/java-collection-questions-02.md"};export{e as data};
