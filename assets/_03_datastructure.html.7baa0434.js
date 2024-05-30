const e={key:"v-44716f73",path:"/zkq/gradle/_02_grammar/_03_datastructure.html",title:"\u6570\u636E\u7ED3\u6784",lang:"zh-CN",frontmatter:{title:"\u6570\u636E\u7ED3\u6784",category:["gradle"],tag:["gradle"],summary:"1. \u5217\u8868\uFF08List\uFF09 1.1 \u5217\u8868\u7684\u5B9A\u4E49\u65B9\u5F0F Groovy \u4E2D\u6709\u4E24\u79CD\u5B9A\u4E49\u5217\u8868\u7684\u65B9\u5F0F\uFF1A 1. \u91C7\u7528 java \u4E2D\u7684\u65B9\u5F0F\u521B\u5EFA\u5217\u8868\u5BF9\u8C61 2. Groovy \u7279\u6709\u7684\u65B9\u5F0F\u5B9A\u4E49\u5217\u8868 \u6CE8\u610F\uFF1A 1. Groovy \u4E2D\u5B9A\u4E49\u7684\u5217\u8868\u7C7B\u578B\u5C31\u662F java \u4E2D\u7684 java.util.ArrayList \u7C7B\u578B\uFF1B 2. Groovy \u4E2D\u7684\u5217\u8868\u53EF\u4EE5\u5B58\u50A8\u4E0D\u540C\u7C7B\u578B\u7684\u5143\u7D20\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F Array",head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/zkq/gradle/_02_grammar/_03_datastructure.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"\u6570\u636E\u7ED3\u6784"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://zengkaiqiang562.github.io/"}],["meta",{property:"og:updated_time",content:"2022-10-24T15:48:49.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"\u6570\u636E\u7ED3\u6784"}],["meta",{property:"article:tag",content:"gradle"}],["meta",{property:"article:modified_time",content:"2022-10-24T15:48:49.000Z"}]]},excerpt:"",headers:[{level:2,title:"1. \u5217\u8868\uFF08List\uFF09",slug:"_1-\u5217\u8868-list",children:[{level:3,title:"1.1 \u5217\u8868\u7684\u5B9A\u4E49\u65B9\u5F0F",slug:"_1-1-\u5217\u8868\u7684\u5B9A\u4E49\u65B9\u5F0F",children:[]},{level:3,title:"1.2 \u6570\u7EC4\u7684\u5B9A\u4E49\u65B9\u5F0F",slug:"_1-2-\u6570\u7EC4\u7684\u5B9A\u4E49\u65B9\u5F0F",children:[]},{level:3,title:"1.2 \u5217\u8868\u76F8\u5173\u64CD\u4F5C\u7684 API",slug:"_1-2-\u5217\u8868\u76F8\u5173\u64CD\u4F5C\u7684-api",children:[{level:4,title:"1.2.1 \u6392\u5E8F\uFF1Asort(self, closure)",slug:"_1-2-1-\u6392\u5E8F-sort-self-closure",children:[{level:5,title:"1.2.1.1 \u4E24\u79CD\u6392\u5E8F\u65B9\u5F0F",slug:"_1-2-1-1-\u4E24\u79CD\u6392\u5E8F\u65B9\u5F0F",children:[]},{level:5,title:"1.2.1.2 \u793A\u4F8B\u4E00\uFF1AJava \u65B9\u5F0F\u4E0E Groovy \u65B9\u5F0F",slug:"_1-2-1-2-\u793A\u4F8B\u4E00-java-\u65B9\u5F0F\u4E0E-groovy-\u65B9\u5F0F",children:[]},{level:5,title:"1.2.1.3 \u793A\u4F8B\u4E8C\uFF1Asort(self, closure) \u4E2D\u53C2\u6570 closure \u4F20\u5165\u4E00\u4E2A\u5143\u7D20",slug:"_1-2-1-3-\u793A\u4F8B\u4E8C-sort-self-closure-\u4E2D\u53C2\u6570-closure-\u4F20\u5165\u4E00\u4E2A\u5143\u7D20",children:[]}]},{level:4,title:"1.2.2 \u67E5\u627E",slug:"_1-2-2-\u67E5\u627E",children:[{level:5,title:"1.2.2.1 \u67E5\u627E\u6EE1\u8DB3\u6761\u4EF6\u7684\u67D0\u4E2A\u5143\u7D20\uFF1Afind(self, closure)",slug:"_1-2-2-1-\u67E5\u627E\u6EE1\u8DB3\u6761\u4EF6\u7684\u67D0\u4E2A\u5143\u7D20-find-self-closure",children:[]},{level:5,title:"1.2.2.2 \u67E5\u627E\u6EE1\u8DB3\u6761\u4EF6\u7684\u67D0\u4E9B\u5143\u7D20\uFF1AfindAll(self, closure)",slug:"_1-2-2-2-\u67E5\u627E\u6EE1\u8DB3\u6761\u4EF6\u7684\u67D0\u4E9B\u5143\u7D20-findall-self-closure",children:[]},{level:5,title:"1.2.2.3 \u5224\u65AD\u662F\u5426\u5B58\u5728\u4EFB\u4E00\u5143\u7D20\u6EE1\u8DB3\u6761\u4EF6\uFF1Aany(self, closure)",slug:"_1-2-2-3-\u5224\u65AD\u662F\u5426\u5B58\u5728\u4EFB\u4E00\u5143\u7D20\u6EE1\u8DB3\u6761\u4EF6-any-self-closure",children:[]},{level:5,title:"1.2.2.4 \u5224\u65AD\u662F\u5426\u6240\u6709\u5143\u7D20\u6EE1\u8DB3\u6761\u4EF6\uFF1Aevery(self, closure)",slug:"_1-2-2-4-\u5224\u65AD\u662F\u5426\u6240\u6709\u5143\u7D20\u6EE1\u8DB3\u6761\u4EF6-every-self-closure",children:[]},{level:5,title:"1.2.2.5 \u793A\u4F8B\u4EE3\u7801\u4E00",slug:"_1-2-2-5-\u793A\u4F8B\u4EE3\u7801\u4E00",children:[]},{level:5,title:"1.2.2.6 \u53D6\u51FA\u5217\u8868\u4E2D\u7684\u6700\u5C0F\u5143\u7D20\uFF1Amin(self, closure)",slug:"_1-2-2-6-\u53D6\u51FA\u5217\u8868\u4E2D\u7684\u6700\u5C0F\u5143\u7D20-min-self-closure",children:[]},{level:5,title:"1.2.2.7 \u53D6\u51FA\u5217\u8868\u4E2D\u7684\u6700\u5927\u5143\u7D20\uFF1Amax(self, closure)",slug:"_1-2-2-7-\u53D6\u51FA\u5217\u8868\u4E2D\u7684\u6700\u5927\u5143\u7D20-max-self-closure",children:[]},{level:5,title:"1.2.2.8 \u793A\u4F8B\u4EE3\u7801\u4E8C",slug:"_1-2-2-8-\u793A\u4F8B\u4EE3\u7801\u4E8C",children:[]},{level:5,title:"1.2.2.9 \u7EDF\u8BA1\u6EE1\u8DB3\u6761\u4EF6\u7684\u5143\u7D20\u4E2A\u6570\uFF1Acount(self, closure)",slug:"_1-2-2-9-\u7EDF\u8BA1\u6EE1\u8DB3\u6761\u4EF6\u7684\u5143\u7D20\u4E2A\u6570-count-self-closure",children:[]},{level:5,title:"1.2.2.10 \u793A\u4F8B\u4EE3\u7801\u4E09",slug:"_1-2-2-10-\u793A\u4F8B\u4EE3\u7801\u4E09",children:[]}]}]}]},{level:2,title:"2. \u6620\u5C04\uFF08Map\uFF09",slug:"_2-\u6620\u5C04-map",children:[{level:3,title:"2.1 Map \u7684\u5B9A\u4E49\u65B9\u5F0F",slug:"_2-1-map-\u7684\u5B9A\u4E49\u65B9\u5F0F",children:[{level:4,title:"2.1.1 \u793A\u4F8B\u4EE3\u7801\u4E00",slug:"_2-1-1-\u793A\u4F8B\u4EE3\u7801\u4E00",children:[]},{level:4,title:"2.1.2 \u793A\u4F8B\u4EE3\u7801\u4E8C",slug:"_2-1-2-\u793A\u4F8B\u4EE3\u7801\u4E8C",children:[]}]},{level:3,title:"2.2 Map \u4E2D\u5143\u7D20\u7684\u5B58\u53D6",slug:"_2-2-map-\u4E2D\u5143\u7D20\u7684\u5B58\u53D6",children:[]},{level:3,title:"2.3 Map \u7684\u904D\u5386\u64CD\u4F5C",slug:"_2-3-map-\u7684\u904D\u5386\u64CD\u4F5C",children:[{level:4,title:"2.3.1 \u91C7\u7528 each(self, closure) \u65B9\u6CD5\u8FDB\u884C\u904D\u5386",slug:"_2-3-1-\u91C7\u7528-each-self-closure-\u65B9\u6CD5\u8FDB\u884C\u904D\u5386",children:[]},{level:4,title:"2.3.2 \u91C7\u7528 eachWithIndex(self, closure) \u65B9\u6CD5\u8FDB\u884C\u904D\u5386",slug:"_2-3-2-\u91C7\u7528-eachwithindex-self-closure-\u65B9\u6CD5\u8FDB\u884C\u904D\u5386",children:[]},{level:4,title:"2.3.3 \u91C7\u7528 for-in \u5FAA\u73AF\u8FDB\u884C\u904D\u5386",slug:"_2-3-3-\u91C7\u7528-for-in-\u5FAA\u73AF\u8FDB\u884C\u904D\u5386",children:[]},{level:4,title:"2.3.4 \u793A\u4F8B\u4EE3\u7801",slug:"_2-3-4-\u793A\u4F8B\u4EE3\u7801",children:[]}]},{level:3,title:"2.4 Map \u7684\u67E5\u627E\u64CD\u4F5C",slug:"_2-4-map-\u7684\u67E5\u627E\u64CD\u4F5C",children:[{level:4,title:"2.4.1 \u67E5\u627E\u6EE1\u8DB3\u6761\u4EF6\u7684\u67D0\u4E2A\u952E\u503C\u5BF9\u5143\u7D20\uFF1Afind(self, closure)",slug:"_2-4-1-\u67E5\u627E\u6EE1\u8DB3\u6761\u4EF6\u7684\u67D0\u4E2A\u952E\u503C\u5BF9\u5143\u7D20-find-self-closure",children:[]},{level:4,title:"2.4.2 \u67E5\u627E\u6EE1\u8DB3\u6761\u4EF6\u7684\u67D0\u4E9B\u952E\u503C\u5BF9\u5143\u7D20\uFF1AfindAll(self, closure)",slug:"_2-4-2-\u67E5\u627E\u6EE1\u8DB3\u6761\u4EF6\u7684\u67D0\u4E9B\u952E\u503C\u5BF9\u5143\u7D20-findall-self-closure",children:[]},{level:4,title:"2.4.3 \u7EDF\u8BA1\u6EE1\u8DB3\u6761\u4EF6\u7684\u952E\u503C\u5BF9\u5143\u7D20\u4E2A\u6570\uFF1Acount(self, closure)",slug:"_2-4-3-\u7EDF\u8BA1\u6EE1\u8DB3\u6761\u4EF6\u7684\u952E\u503C\u5BF9\u5143\u7D20\u4E2A\u6570-count-self-closure",children:[]},{level:4,title:"2.4.4 \u8FD4\u56DE\u6839\u636E\u952E\u503C\u5BF9\u8F6C\u6362\u6210\u7684\u96C6\u5408\uFF1Acollect(self, transform)",slug:"_2-4-4-\u8FD4\u56DE\u6839\u636E\u952E\u503C\u5BF9\u8F6C\u6362\u6210\u7684\u96C6\u5408-collect-self-transform",children:[]},{level:4,title:"2.4.5 \u5BF9\u952E\u503C\u5BF9\u8FDB\u884C\u5206\u7EC4\uFF1AgroupBy(self, closure)",slug:"_2-4-5-\u5BF9\u952E\u503C\u5BF9\u8FDB\u884C\u5206\u7EC4-groupby-self-closure",children:[]},{level:4,title:"2.4.6 \u793A\u4F8B\u4EE3\u7801",slug:"_2-4-6-\u793A\u4F8B\u4EE3\u7801",children:[]}]},{level:3,title:"2.5 Map \u7684\u6392\u5E8F\u64CD\u4F5C\uFF1Asort(self, closure)",slug:"_2-5-map-\u7684\u6392\u5E8F\u64CD\u4F5C-sort-self-closure",children:[{level:4,title:"2.5.1 Map \u6392\u5E8F\u4E0E List \u6392\u5E8F\u7684\u533A\u522B",slug:"_2-5-1-map-\u6392\u5E8F\u4E0E-list-\u6392\u5E8F\u7684\u533A\u522B",children:[]},{level:4,title:"2.5.2 \u793A\u4F8B\u4EE3\u7801",slug:"_2-5-2-\u793A\u4F8B\u4EE3\u7801",children:[]}]}]},{level:2,title:"3. \u8303\u56F4\uFF08Range\uFF09",slug:"_3-\u8303\u56F4-range",children:[{level:3,title:"3.1 Range \u5C31\u662F\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684 List",slug:"_3-1-range-\u5C31\u662F\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684-list",children:[]},{level:3,title:"3.2 Range \u7684\u4E09\u4E2A\u5B9E\u73B0\u7C7B\uFF1AIntRange\u3001ObjectRange\u3001EmptyRange",slug:"_3-2-range-\u7684\u4E09\u4E2A\u5B9E\u73B0\u7C7B-intrange\u3001objectrange\u3001emptyrange",children:[]},{level:3,title:"3.3 Range \u7684\u5B9A\u4E49",slug:"_3-3-range-\u7684\u5B9A\u4E49",children:[{level:4,title:"3.3.1 IntRange \u7684\u5B9A\u4E49",slug:"_3-3-1-intrange-\u7684\u5B9A\u4E49",children:[]},{level:4,title:"3.3.2 ObjectRange \u7684\u5B9A\u4E49",slug:"_3-3-2-objectrange-\u7684\u5B9A\u4E49",children:[]},{level:4,title:"3.3.3 EmptyRange \u7684\u5B9A\u4E49",slug:"_3-3-3-emptyrange-\u7684\u5B9A\u4E49",children:[]},{level:4,title:"3.3.4 \u793A\u4F8B\u4EE3\u7801",slug:"_3-3-4-\u793A\u4F8B\u4EE3\u7801",children:[]}]},{level:3,title:"3.4 Range \u4E2D\u8BBF\u95EE\u5143\u7D20\u7684\u64CD\u4F5C",slug:"_3-4-range-\u4E2D\u8BBF\u95EE\u5143\u7D20\u7684\u64CD\u4F5C",children:[{level:4,title:"3.4.1 \u83B7\u53D6\u8303\u56F4 [from, to] \u7684\u7AEF\u70B9\u503C\uFF1Arange.to\u3001range.from",slug:"_3-4-1-\u83B7\u53D6\u8303\u56F4-from-to-\u7684\u7AEF\u70B9\u503C-range-to\u3001range-from",children:[]},{level:4,title:"3.4.2 \u901A\u8FC7\u4E0B\u6807\u8FD0\u7B97\u7B26\u83B7\u53D6\u6307\u5B9A\u7D22\u5F15\u5904\u7684\u5143\u7D20\uFF1Arange[index]",slug:"_3-4-2-\u901A\u8FC7\u4E0B\u6807\u8FD0\u7B97\u7B26\u83B7\u53D6\u6307\u5B9A\u7D22\u5F15\u5904\u7684\u5143\u7D20-range-index",children:[]},{level:4,title:"3.4.3 \u5224\u65AD Range \u4E2D\u662F\u5426\u5305\u542B\u6307\u5B9A\u5143\u7D20\uFF1Arange.contains(element)",slug:"_3-4-3-\u5224\u65AD-range-\u4E2D\u662F\u5426\u5305\u542B\u6307\u5B9A\u5143\u7D20-range-contains-element",children:[]},{level:4,title:"3.4.4 \u6CE8\u610F\uFF1A\u53EF\u80FD\u5B58\u5728 Range \u4E2D\u4E0D\u5305\u542B\u5143\u7D20\u4E3A\u7AEF\u70B9 to \u7684\u60C5\u51B5",slug:"_3-4-4-\u6CE8\u610F-\u53EF\u80FD\u5B58\u5728-range-\u4E2D\u4E0D\u5305\u542B\u5143\u7D20\u4E3A\u7AEF\u70B9-to-\u7684\u60C5\u51B5",children:[]},{level:4,title:"3.4.5 \u793A\u4F8B\u4EE3\u7801",slug:"_3-4-5-\u793A\u4F8B\u4EE3\u7801",children:[]}]},{level:3,title:"3.5 Range \u7684\u904D\u5386\uFF1Aeach(self, closure)",slug:"_3-5-range-\u7684\u904D\u5386-each-self-closure",children:[{level:4,title:"3.5.1 \u5EFA\u8BAE\uFF1A\u5728 Groovy \u4E2D\uFF0C\u80FD\u4F7F\u7528\u95ED\u5305\u7684\u5C31\u5C3D\u91CF\u4F7F\u7528\u95ED\u5305",slug:"_3-5-1-\u5EFA\u8BAE-\u5728-groovy-\u4E2D-\u80FD\u4F7F\u7528\u95ED\u5305\u7684\u5C31\u5C3D\u91CF\u4F7F\u7528\u95ED\u5305",children:[]},{level:4,title:"3.5.2 \u793A\u4F8B\u4EE3\u7801",slug:"_3-5-2-\u793A\u4F8B\u4EE3\u7801",children:[]}]},{level:3,title:"3.6 Range \u5728 switch \u8BED\u53E5\u4E2D\u7684\u4F7F\u7528\uFF08Range \u6700\u5E38\u7528\u7684\u573A\u666F\uFF09",slug:"_3-6-range-\u5728-switch-\u8BED\u53E5\u4E2D\u7684\u4F7F\u7528-range-\u6700\u5E38\u7528\u7684\u573A\u666F",children:[{level:4,title:"3.6.1 \u793A\u4F8B\u4EE3\u7801",slug:"_3-6-1-\u793A\u4F8B\u4EE3\u7801",children:[]},{level:4,title:"3.6.2 \u4F7F\u7528 def \u5B9A\u4E49\u4E0D\u56FA\u5B9A\u8FD4\u56DE\u503C\u7C7B\u578B\u7684\u51FD\u6570",slug:"_3-6-2-\u4F7F\u7528-def-\u5B9A\u4E49\u4E0D\u56FA\u5B9A\u8FD4\u56DE\u503C\u7C7B\u578B\u7684\u51FD\u6570",children:[]}]}]}],git:{createdTime:1666536556e3,updatedTime:1666626529e3,contributors:[{name:"zengk",email:"zengkaiqiang562@163.com",commits:2},{name:"zenk",email:"zengkaiqiang562@163.com",commits:1}]},readingTime:{minutes:19.78,words:5935},filePathRelative:"zkq/gradle/_02_grammar/_03_datastructure.md"};export{e as data};
