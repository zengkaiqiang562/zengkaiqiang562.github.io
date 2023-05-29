const e={key:"v-07b4656c",path:"/zkq/third-party-open-project/rxjava/backpressure.html",title:"\u80CC\u538B\uFF08Backpressure\uFF09",lang:"zh-CN",frontmatter:{title:"\u80CC\u538B\uFF08Backpressure\uFF09",category:["android","\u7B2C\u4E09\u65B9\u6846\u67B6"],tag:["android","\u7B2C\u4E09\u65B9\u6846\u67B6"],summary:'" \u6CE8\u610F\uFF1A" " " " 1. \u53D1\u5C04\u6570\u636E\u9879\u5C31\u662F\u6307\u53D1\u5C04 onNext \u4E8B\u4EF6\u3002" " " " 2. \u89C2\u5BDF\u8005\u63A5\u6536\u6570\u636E\u9879\u3001\u89C2\u5BDF\u8005\u54CD\u5E94\u6570\u636E\u9879\u3001\u89C2\u5BDF\u8005\u62C9\u53D6\u6570\u636E\u9879\u662F\u4E00\u4E2A\u610F\u601D\u3002" 6. \u51FA\u73B0\u80CC\u538B\u7684\u539F\u56E0\uFF1A\u4E0A\u4E0B\u6E38\u7684\u6570\u636E\u6D41\u901F\u4E0D\u5339\u914D " \u53C2\u8003 Carson\u5E26\u4F60\u5B66Android\uFF1A\u56FE\u6587\u8BE6\u89E3RxJava\u80CC\u538B\u7B56\u7565" \u5F53\u4E0A\u4E0B\u6E38\u5728\u4E0D\u540C\u7EBF\u7A0B\u4E2D\u65F6\uFF0C\u5982\u679C\u4E0A\u6E38\u53D1\u5C04\u6570\u636E\u9879\u7684\u901F\u5EA6\u5FEB\u4E8E\u4E0B\u6E38\u54CD\u5E94\u6570\u636E\u9879\u7684\u901F\u5EA6\uFF0C',head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/zkq/third-party-open-project/rxjava/backpressure.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"\u80CC\u538B\uFF08Backpressure\uFF09"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://zengkaiqiang562.github.io/"}],["meta",{property:"og:updated_time",content:"2022-07-07T15:59:00.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"\u80CC\u538B\uFF08Backpressure\uFF09"}],["meta",{property:"article:tag",content:"android"}],["meta",{property:"article:tag",content:"\u7B2C\u4E09\u65B9\u6846\u67B6"}],["meta",{property:"article:modified_time",content:"2022-07-07T15:59:00.000Z"}]]},excerpt:"",headers:[{level:2,title:"6. \u51FA\u73B0\u80CC\u538B\u7684\u539F\u56E0\uFF1A\u4E0A\u4E0B\u6E38\u7684\u6570\u636E\u6D41\u901F\u4E0D\u5339\u914D",slug:"_6-\u51FA\u73B0\u80CC\u538B\u7684\u539F\u56E0-\u4E0A\u4E0B\u6E38\u7684\u6570\u636E\u6D41\u901F\u4E0D\u5339\u914D",children:[]},{level:2,title:"7. \u80CC\u538B\u7B56\u7565 & Flowable",slug:"_7-\u80CC\u538B\u7B56\u7565-flowable",children:[{level:3,title:"7.1 \u88AB\u89C2\u5BDF\u8005 Flowable \u7684\u7279\u70B9",slug:"_7-1-\u88AB\u89C2\u5BDF\u8005-flowable-\u7684\u7279\u70B9",children:[{level:4,title:"7.1.1 \u5BF9\u5E94\u7684\u89C2\u5BDF\u8005\u4E3A Subscriber",slug:"_7-1-1-\u5BF9\u5E94\u7684\u89C2\u5BDF\u8005\u4E3A-subscriber",children:[]},{level:4,title:"7.1.2 \u6240\u6709\u7684\u64CD\u4F5C\u7B26\u5F3A\u5236\u652F\u6301\u80CC\u538B",slug:"_7-1-2-\u6240\u6709\u7684\u64CD\u4F5C\u7B26\u5F3A\u5236\u652F\u6301\u80CC\u538B",children:[]},{level:4,title:"7.1.3 \u7F13\u5B58\u533A\u5B58\u653E\u7B56\u7565\uFF08\u5148\u8FDB\u5148\u51FA\uFF09",slug:"_7-1-3-\u7F13\u5B58\u533A\u5B58\u653E\u7B56\u7565-\u5148\u8FDB\u5148\u51FA",children:[]},{level:4,title:"7.1.4 \u7F13\u5B58\u533A\u7684\u9ED8\u8BA4\u5927\u5C0F bufferSize = 128",slug:"_7-1-4-\u7F13\u5B58\u533A\u7684\u9ED8\u8BA4\u5927\u5C0F-buffersize-128",children:[]},{level:4,title:"7.1.5 \u540C\u6B65\u64CD\u4F5C\u4E2D\u4E0D\u5B58\u5728\u7F13\u5B58\u533A",slug:"_7-1-5-\u540C\u6B65\u64CD\u4F5C\u4E2D\u4E0D\u5B58\u5728\u7F13\u5B58\u533A",children:[]}]},{level:3,title:"7.2 \u80CC\u538B\u7B56\u7565 \u2014\u2014 \u63A7\u5236\u89C2\u5BDF\u8005\u54CD\u5E94\u6570\u636E\u9879\u7684\u901F\u5EA6\uFF08\u54CD\u5E94\u5F0F\u62C9\u53D6\uFF09",slug:"_7-2-\u80CC\u538B\u7B56\u7565-\u2014\u2014-\u63A7\u5236\u89C2\u5BDF\u8005\u54CD\u5E94\u6570\u636E\u9879\u7684\u901F\u5EA6-\u54CD\u5E94\u5F0F\u62C9\u53D6",children:[{level:4,title:"7.2.1 \u539F\u7406\uFF1A\u89C2\u5BDF\u8005\u6309\u9700\u4E3B\u52A8\u5730\u63A5\u6536\uFF08\u62C9\u53D6\uFF09\u6307\u5B9A\u4E2A\u6570\u7684\u6570\u636E\u9879",slug:"_7-2-1-\u539F\u7406-\u89C2\u5BDF\u8005\u6309\u9700\u4E3B\u52A8\u5730\u63A5\u6536-\u62C9\u53D6-\u6307\u5B9A\u4E2A\u6570\u7684\u6570\u636E\u9879",children:[]},{level:4,title:"7.2.2 \u5B9E\u73B0\u65B9\u5F0F\uFF1ASubscription.request(n)",slug:"_7-2-2-\u5B9E\u73B0\u65B9\u5F0F-subscription-request-n",children:[]},{level:4,title:"7.2.3 \u793A\u4F8B 1\uFF1A\u5F02\u6B65\u64CD\u4F5C\u4E2D\u7684\u54CD\u5E94\u5F0F\u62C9\u53D6",slug:"_7-2-3-\u793A\u4F8B-1-\u5F02\u6B65\u64CD\u4F5C\u4E2D\u7684\u54CD\u5E94\u5F0F\u62C9\u53D6",children:[]},{level:4,title:"7.2.4 \u793A\u4F8B 2\uFF1A\u540C\u6B65\u64CD\u4F5C\u4E2D\u7684\u54CD\u5E94\u5F0F\u62C9\u53D6",slug:"_7-2-4-\u793A\u4F8B-2-\u540C\u6B65\u64CD\u4F5C\u4E2D\u7684\u54CD\u5E94\u5F0F\u62C9\u53D6",children:[]},{level:4,title:"7.2.5 \u5F02\u6B65\u64CD\u4F5C\u4E2D\u54CD\u5E94\u5F0F\u62C9\u53D6\u65F6\u7684\u6CE8\u610F\u4E8B\u9879",slug:"_7-2-5-\u5F02\u6B65\u64CD\u4F5C\u4E2D\u54CD\u5E94\u5F0F\u62C9\u53D6\u65F6\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:5,title:"7.2.5.1 \u5373\u4F7F\u89C2\u5BDF\u8005\u4E0D\u62C9\u53D6\u6570\u636E\u9879\uFF0C\u88AB\u89C2\u5BDF\u8005\u53D1\u5C04\u7684\u6570\u636E\u9879\u603B\u4F1A\u5B58\u5165\u7F13\u5B58\u533A",slug:"_7-2-5-1-\u5373\u4F7F\u89C2\u5BDF\u8005\u4E0D\u62C9\u53D6\u6570\u636E\u9879-\u88AB\u89C2\u5BDF\u8005\u53D1\u5C04\u7684\u6570\u636E\u9879\u603B\u4F1A\u5B58\u5165\u7F13\u5B58\u533A",children:[]},{level:5,title:"7.2.5.2 \u82E5\u4E00\u76F4\u4E0D\u62C9\u53D6\u6570\u636E\u9879\uFF0C\u5219\u53D1\u5C04\u7684\u6570\u636E\u9879\u6700\u7EC8\u4F1A\u4F7F\u7F13\u5B58\u533A\u6EA2\u51FA\u62A5\u9519",slug:"_7-2-5-2-\u82E5\u4E00\u76F4\u4E0D\u62C9\u53D6\u6570\u636E\u9879-\u5219\u53D1\u5C04\u7684\u6570\u636E\u9879\u6700\u7EC8\u4F1A\u4F7F\u7F13\u5B58\u533A\u6EA2\u51FA\u62A5\u9519",children:[]}]},{level:4,title:"7.2.6 \u540C\u6B65\u64CD\u4F5C\u4E2D\u54CD\u5E94\u5F0F\u62C9\u53D6\u65F6\u7684\u6CE8\u610F\u4E8B\u9879",slug:"_7-2-6-\u540C\u6B65\u64CD\u4F5C\u4E2D\u54CD\u5E94\u5F0F\u62C9\u53D6\u65F6\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:5,title:"7.2.6.1 \u53D1\u5C04\u7684\u6570\u636E\u9879\u4E2A\u6570 > \u62C9\u53D6\u7684\u6570\u636E\u9879\u4E2A\u6570\u4F1A\u51FA\u73B0\u80CC\u538B\u95EE\u9898",slug:"_7-2-6-1-\u53D1\u5C04\u7684\u6570\u636E\u9879\u4E2A\u6570-\u62C9\u53D6\u7684\u6570\u636E\u9879\u4E2A\u6570\u4F1A\u51FA\u73B0\u80CC\u538B\u95EE\u9898",children:[]},{level:5,title:"7.2.6.2 \u53D1\u5C04\u4E86\u6570\u636E\u9879\u4F46\u4E0D\u62C9\u53D6\u4E5F\u4F1A\u51FA\u73B0\u80CC\u538B\u95EE\u9898",slug:"_7-2-6-2-\u53D1\u5C04\u4E86\u6570\u636E\u9879\u4F46\u4E0D\u62C9\u53D6\u4E5F\u4F1A\u51FA\u73B0\u80CC\u538B\u95EE\u9898",children:[]}]}]},{level:3,title:"7.3 \u80CC\u538B\u7B56\u7565 \u2014\u2014 \u63A7\u5236\u88AB\u89C2\u5BDF\u8005\u53D1\u5C04\u6570\u636E\u9879\u7684\u901F\u5EA6\uFF08\u53CD\u9988\u63A7\u5236\uFF09",slug:"_7-3-\u80CC\u538B\u7B56\u7565-\u2014\u2014-\u63A7\u5236\u88AB\u89C2\u5BDF\u8005\u53D1\u5C04\u6570\u636E\u9879\u7684\u901F\u5EA6-\u53CD\u9988\u63A7\u5236",children:[{level:4,title:"7.3.1 \u539F\u7406\uFF1A\u88AB\u89C2\u5BDF\u8005\u53D1\u5C04\u6570\u636E\u9879\u7684\u4E2A\u6570\u53D7\u5230\u89C2\u5BDF\u8005\u62C9\u53D6\u6570\u636E\u9879\u7684\u4E2A\u6570\u7684\u9650\u5236",slug:"_7-3-1-\u539F\u7406-\u88AB\u89C2\u5BDF\u8005\u53D1\u5C04\u6570\u636E\u9879\u7684\u4E2A\u6570\u53D7\u5230\u89C2\u5BDF\u8005\u62C9\u53D6\u6570\u636E\u9879\u7684\u4E2A\u6570\u7684\u9650\u5236",children:[]},{level:4,title:"7.3.2 \u5B9E\u73B0\u65B9\u5F0F\uFF1AFlowableEmitter.requested()",slug:"_7-3-2-\u5B9E\u73B0\u65B9\u5F0F-flowableemitter-requested",children:[]},{level:4,title:"7.3.3 \u793A\u4F8B 1\uFF1A\u5F02\u6B65\u64CD\u4F5C\u4E2D\u7684\u54CD\u5E94\u5F0F\u62C9\u53D6",slug:"_7-3-3-\u793A\u4F8B-1-\u5F02\u6B65\u64CD\u4F5C\u4E2D\u7684\u54CD\u5E94\u5F0F\u62C9\u53D6",children:[]},{level:4,title:"7.3.4 \u793A\u4F8B 2\uFF1A\u540C\u6B65\u64CD\u4F5C\u4E2D\u7684\u54CD\u5E94\u5F0F\u62C9\u53D6",slug:"_7-3-4-\u793A\u4F8B-2-\u540C\u6B65\u64CD\u4F5C\u4E2D\u7684\u54CD\u5E94\u5F0F\u62C9\u53D6",children:[]},{level:4,title:"7.3.5 \u540C\u6B65\u64CD\u4F5C\u4E2D\u53CD\u9988\u63A7\u5236\u7684\u6CE8\u610F\u4E8B\u9879",slug:"_7-3-5-\u540C\u6B65\u64CD\u4F5C\u4E2D\u53CD\u9988\u63A7\u5236\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:5,title:"7.3.5.1 \u89C2\u5BDF\u8005\u4E2D\u591A\u6B21\u8C03\u7528\u7684 Subscription.request(n) \u5177\u6709\u53E0\u52A0\u6027",slug:"_7-3-5-1-\u89C2\u5BDF\u8005\u4E2D\u591A\u6B21\u8C03\u7528\u7684-subscription-request-n-\u5177\u6709\u53E0\u52A0\u6027",children:[]},{level:5,title:"7.3.5.2 \u88AB\u89C2\u5BDF\u8005\u4E2D FlowableEmitter.requested() \u7684\u8FD4\u56DE\u503C\u4F1A\u5B9E\u65F6\u66F4\u65B0",slug:"_7-3-5-2-\u88AB\u89C2\u5BDF\u8005\u4E2D-flowableemitter-requested-\u7684\u8FD4\u56DE\u503C\u4F1A\u5B9E\u65F6\u66F4\u65B0",children:[]},{level:5,title:"7.3.5.3 requested() \u8FD4\u56DE 0 \u65F6\u53D1\u5C04\u6570\u636E\u9879\u4E00\u5B9A\u4F1A\u89E6\u53D1 onError \u4E8B\u4EF6",slug:"_7-3-5-3-requested-\u8FD4\u56DE-0-\u65F6\u53D1\u5C04\u6570\u636E\u9879\u4E00\u5B9A\u4F1A\u89E6\u53D1-onerror-\u4E8B\u4EF6",children:[]}]}]},{level:3,title:"7.4 \u80CC\u538B\u7B56\u7565 \u2014\u2014 \u91C7\u7528\u4E0D\u540C\u7684\u80CC\u538B\u7B56\u7565\u6A21\u5F0F\uFF08BackpressureStrategy\uFF09",slug:"_7-4-\u80CC\u538B\u7B56\u7565-\u2014\u2014-\u91C7\u7528\u4E0D\u540C\u7684\u80CC\u538B\u7B56\u7565\u6A21\u5F0F-backpressurestrategy",children:[{level:4,title:"7.4.1 \u4E94\u79CD\u80CC\u538B\u7B56\u7565\u6A21\u5F0F",slug:"_7-4-1-\u4E94\u79CD\u80CC\u538B\u7B56\u7565\u6A21\u5F0F",children:[{level:5,title:"7.4.1.2 BackpressureStrategy.ERROR",slug:"_7-4-1-2-backpressurestrategy-error",children:[]},{level:5,title:"7.4.1.1 BackpressureStrategy.MISSING",slug:"_7-4-1-1-backpressurestrategy-missing",children:[]},{level:5,title:"7.4.1.3 BackpressureStrategy.BUFFER",slug:"_7-4-1-3-backpressurestrategy-buffer",children:[]},{level:5,title:"7.4.1.4 BackpressureStrategy.DROP",slug:"_7-4-1-4-backpressurestrategy-drop",children:[]},{level:5,title:"7.4.1.5 BackpressureStrategy.LATEST",slug:"_7-4-1-5-backpressurestrategy-latest",children:[]}]},{level:4,title:"7.4.2 \u6307\u5B9A\u80CC\u538B\u7B56\u7565\u6A21\u5F0F\u7684\u65B9\u5F0F",slug:"_7-4-2-\u6307\u5B9A\u80CC\u538B\u7B56\u7565\u6A21\u5F0F\u7684\u65B9\u5F0F",children:[{level:5,title:"7.4.2.1 \u5728 create \u521B\u5EFA\u64CD\u4F5C\u7B26\u4E2D\u6307\u5B9A\u80CC\u538B\u7B56\u7565\u6A21\u5F0F",slug:"_7-4-2-1-\u5728-create-\u521B\u5EFA\u64CD\u4F5C\u7B26\u4E2D\u6307\u5B9A\u80CC\u538B\u7B56\u7565\u6A21\u5F0F",children:[]},{level:5,title:"7.4.2.2 \u5728\u5176\u4ED6\u521B\u5EFA\u64CD\u4F5C\u7B26\u4E2D\u6307\u5B9A\u80CC\u538B\u7B56\u7565\u6A21\u5F0F",slug:"_7-4-2-2-\u5728\u5176\u4ED6\u521B\u5EFA\u64CD\u4F5C\u7B26\u4E2D\u6307\u5B9A\u80CC\u538B\u7B56\u7565\u6A21\u5F0F",children:[{level:6,title:"7.4.2.2.1 \u9ED8\u8BA4\u91C7\u7528 BackpressureStrategy.ERROR",slug:"_7-4-2-2-1-\u9ED8\u8BA4\u91C7\u7528-backpressurestrategy-error",children:[]},{level:6,title:"7.4.2.2.2 onBackpressureBuffer()",slug:"_7-4-2-2-2-onbackpressurebuffer",children:[]},{level:6,title:"7.4.2.2.3 onBackpressureDrop()",slug:"_7-4-2-2-3-onbackpressuredrop",children:[]},{level:6,title:"7.4.2.2.4 onBackpressureLatest()",slug:"_7-4-2-2-4-onbackpressurelatest",children:[]},{level:6,title:"7.4.2.2.5 \u793A\u4F8B",slug:"_7-4-2-2-5-\u793A\u4F8B",children:[]}]}]}]}]},{level:2,title:"8. \u80CC\u538B\u7B56\u7565\u603B\u7ED3",slug:"_8-\u80CC\u538B\u7B56\u7565\u603B\u7ED3",children:[]}],git:{createdTime:165720954e4,updatedTime:165720954e4,contributors:[{name:"zengk",email:"zengkaiqiang562@163.com",commits:1}]},readingTime:{minutes:35.14,words:10542},filePathRelative:"zkq/third-party-open-project/rxjava/backpressure.md"};export{e as data};