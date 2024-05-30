const e={key:"v-3275ffe2",path:"/zkq/android/ui/RecyclerView.html",title:"RecyclerView\uFF08TODO\uFF09",lang:"zh-CN",frontmatter:{title:"RecyclerView\uFF08TODO\uFF09",category:["UI"],tag:["UI"],summary:'" \u53C2\u8003\uFF1A\u300AAndroid \u81EA\u5B9A\u4E49\u63A7\u4EF6\u9AD8\u7EA7\u8FDB\u9636\u4E0E\u7CBE\u5F69\u5B9E\u4F8B\u300B \u7B2C 7 \u7AE0>"\r" "\r" \u53C2\u8003\uFF1A\u518D\u4E5F\u4E0D\u7528\u62C5\u5FC3\u9762\u8BD5\u95EERecyclerView\u4E86"\r" "\r" \u53C2\u8003\uFF1A\u63A7\u4EF6\uFF1ARecycleView"\r" "\r" \u53C2\u8003\uFF1ARecyclerView\u9762\u8BD5\u5FC5\u95EE"\r" "\r" \u53C2\u8003\uFF1A\u3010\u8FDB\u9636\u3011RecyclerView\u6E90\u7801\u89E3\u6790(\u4E00)\u2014\u2014\u7ED8\u5236\u6D41\u7A0B" 1. RecyclerView \u6982',head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/zkq/android/ui/RecyclerView.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"RecyclerView\uFF08TODO\uFF09"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-07-06T10:07:29.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"UI"}],["meta",{property:"article:modified_time",content:"2022-07-06T10:07:29.000Z"}]]},excerpt:"",headers:[{level:2,title:"1. RecyclerView \u6982\u8FF0",slug:"_1-recyclerview-\u6982\u8FF0",children:[{level:3,title:"1.1 \u6DFB\u52A0\u4F9D\u8D56",slug:"_1-1-\u6DFB\u52A0\u4F9D\u8D56",children:[]},{level:3,title:"1.2 RecyclerView \u7684\u57FA\u672C\u4F7F\u7528",slug:"_1-2-recyclerview-\u7684\u57FA\u672C\u4F7F\u7528",children:[{level:4,title:"1.2.1 \u5728\u754C\u9762\u7684 xml \u5E03\u5C40\u6587\u4EF6\u4E2D\u5F15\u5165 RecyclerView",slug:"_1-2-1-\u5728\u754C\u9762\u7684-xml-\u5E03\u5C40\u6587\u4EF6\u4E2D\u5F15\u5165-recyclerview",children:[]},{level:4,title:"1.2.2 \u5B9A\u4E49 Adapter \u7C7B\uFF08\u7EE7\u627F\u81EA RecyclerView.Adapter<RecyclerView.ViewHolder>\uFF09",slug:"_1-2-2-\u5B9A\u4E49-adapter-\u7C7B-\u7EE7\u627F\u81EA-recyclerview-adapter-recyclerview-viewholder",children:[{level:5,title:"1.2.2.1 \u91CD\u5199 onCreateViewHolder \u65B9\u6CD5",slug:"_1-2-2-1-\u91CD\u5199-oncreateviewholder-\u65B9\u6CD5",children:[]},{level:5,title:"1.2.2.2 \u91CD\u5199 onBindViewHolder \u65B9\u6CD5",slug:"_1-2-2-2-\u91CD\u5199-onbindviewholder-\u65B9\u6CD5",children:[]},{level:5,title:"1.2.2.3 \u91CD\u5199 getItemCount \u65B9\u6CD5",slug:"_1-2-2-3-\u91CD\u5199-getitemcount-\u65B9\u6CD5",children:[]},{level:5,title:"1.2.2.4 \u901A\u8FC7 Adapter \u7684\u6784\u9020\u51FD\u6570\u4F20\u5165\u5217\u8868\u6570\u636E\u96C6\u5408",slug:"_1-2-2-4-\u901A\u8FC7-adapter-\u7684\u6784\u9020\u51FD\u6570\u4F20\u5165\u5217\u8868\u6570\u636E\u96C6\u5408",children:[]},{level:5,title:"1.2.2.5 \u5B9A\u4E49 ViewHolder \u7C7B\uFF08\u7EE7\u627F\u81EA RecyclerView.ViewHolder\uFF09",slug:"_1-2-2-5-\u5B9A\u4E49-viewholder-\u7C7B-\u7EE7\u627F\u81EA-recyclerview-viewholder",children:[{level:6,title:"1.2.2.5.1 \u4E3A ViewHolder \u663E\u793A\u7684 item \u521B\u5EFA xml \u5E03\u5C40\u6587\u4EF6",slug:"_1-2-2-5-1-\u4E3A-viewholder-\u663E\u793A\u7684-item-\u521B\u5EFA-xml-\u5E03\u5C40\u6587\u4EF6",children:[]},{level:6,title:"1.2.2.5.1 \u5C06 item \u5E03\u5C40\u6587\u4EF6\u4E2D\u7684\u63A7\u4EF6\u5BF9\u8C61\u4FDD\u5B58\u5728 ViewHolder \u4E2D",slug:"_1-2-2-5-1-\u5C06-item-\u5E03\u5C40\u6587\u4EF6\u4E2D\u7684\u63A7\u4EF6\u5BF9\u8C61\u4FDD\u5B58\u5728-viewholder-\u4E2D",children:[]}]},{level:5,title:"1.2.2.6 \u5B8C\u6574\u7684\u7B80\u5355 Adapter \u7C7B\u7684\u4EE3\u7801\u793A\u4F8B",slug:"_1-2-2-6-\u5B8C\u6574\u7684\u7B80\u5355-adapter-\u7C7B\u7684\u4EE3\u7801\u793A\u4F8B",children:[]}]},{level:4,title:"1.2.3 \u4E3A RecyclerView \u8BBE\u7F6E Adapter",slug:"_1-2-3-\u4E3A-recyclerview-\u8BBE\u7F6E-adapter",children:[]},{level:4,title:"1.2.4 \u4E3A RecyclerView \u8BBE\u7F6E LayoutManager",slug:"_1-2-4-\u4E3A-recyclerview-\u8BBE\u7F6E-layoutmanager",children:[]}]},{level:3,title:"1.3 \u5E38\u89C1\u7684\u4E09\u79CD LayoutManager",slug:"_1-3-\u5E38\u89C1\u7684\u4E09\u79CD-layoutmanager",children:[{level:4,title:"1.3.1 LinearLayoutManager",slug:"_1-3-1-linearlayoutmanager",children:[]},{level:4,title:"1.3.2 GridLayoutManager",slug:"_1-3-2-gridlayoutmanager",children:[]},{level:4,title:"1.3.3 StaggeredGridLayoutManager",slug:"_1-3-3-staggeredgridlayoutmanager",children:[]}]},{level:3,title:"1.4 \u4E3A\u4E0D\u540C\u4F4D\u7F6E\u7684\u5217\u8868 item \u52A0\u8F7D\u4E0D\u540C\u7C7B\u578B\u7684 View \u89C6\u56FE\uFF1AgetItemViewType",slug:"_1-4-\u4E3A\u4E0D\u540C\u4F4D\u7F6E\u7684\u5217\u8868-item-\u52A0\u8F7D\u4E0D\u540C\u7C7B\u578B\u7684-view-\u89C6\u56FE-getitemviewtype",children:[]}]},{level:2,title:"2. \u6DFB\u52A0\u5206\u5272\u7EBF\uFF1AItemDecoration",slug:"_2-\u6DFB\u52A0\u5206\u5272\u7EBF-itemdecoration",children:[{level:3,title:"2.1 \u4EC0\u4E48\u662F ItemDecoration",slug:"_2-1-\u4EC0\u4E48\u662F-itemdecoration",children:[]},{level:3,title:"2.2 \u4E3A RecyclerView \u8BBE\u7F6E\u9ED8\u8BA4\u7684 ItemDecoration \u5206\u5272\u7EBF",slug:"_2-2-\u4E3A-recyclerview-\u8BBE\u7F6E\u9ED8\u8BA4\u7684-itemdecoration-\u5206\u5272\u7EBF",children:[]},{level:3,title:"2.3 \u81EA\u5B9A\u4E49 ItemDecoration \u5B9E\u73B0\u4E0D\u540C\u6548\u679C\u7684\u5206\u5272\u7EBF",slug:"_2-3-\u81EA\u5B9A\u4E49-itemdecoration-\u5B9E\u73B0\u4E0D\u540C\u6548\u679C\u7684\u5206\u5272\u7EBF",children:[]}]},{level:2,title:"3. \u81EA\u5B9A\u4E49 LayoutManager",slug:"_3-\u81EA\u5B9A\u4E49-layoutmanager",children:[]},{level:2,title:"4. RecyclerView \u7684\u56DE\u6536\u590D\u7528\u673A\u5236",slug:"_4-recyclerview-\u7684\u56DE\u6536\u590D\u7528\u673A\u5236",children:[]}],git:{createdTime:1657102049e3,updatedTime:1657102049e3,contributors:[{name:"zengk",email:"zengkaiqiang562@163.com",commits:1}]},readingTime:{minutes:5.66,words:1698},filePathRelative:"zkq/android/ui/RecyclerView.md"};export{e as data};