const e={key:"v-7ed92321",path:"/zkq/android/basic/activity.html",title:"Activity",lang:"zh-CN",frontmatter:{title:"Activity",category:["android-\u57FA\u7840"],tag:["android-\u57FA\u7840"],summary:"\u53C2\u8003\uFF1AActivity \u7684 36 \u5927\u96BE\u70B9\uFF0C\u4F60\u4F1A\u51E0\u4E2A\uFF1F\u300C\u5EFA\u8BAE\u6536\u85CF\u300D \u53C2\u8003\uFF1A\u300AAndroid \u5F00\u53D1\u827A\u672F\u63A2\u7D22\u300B \u7B2C 1 \u7AE0\uFF08Activity \u7684\u751F\u547D\u5468\u671F\u548C\u542F\u52A8\u6A21\u5F0F\uFF09 1. \u751F\u547D\u5468\u671F 1.1 \u751F\u547D\u5468\u671F\u5207\u6362\u8FC7\u7A0B 1.2 \u6B63\u5E38\u751F\u547D\u5468\u671F 1.2.1 onCreate \u8868\u793A Activity \u6B63\u5728\u88AB\u521B\u5EFA\uFF0C\u8FD9\u662F\u751F\u547D\u5468\u671F\u7684\u7B2C\u4E00\u4E2A\u65B9\u6CD5\u3002 \u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u505A\u4E00\u4E9B\u521D\u59CB\u5316\u5DE5\u4F5C\uFF0C\u6BD4",head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/zkq/android/basic/activity.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"Activity"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://zengkaiqiang562.github.io/"}],["meta",{property:"og:updated_time",content:"2022-07-06T10:07:29.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"Activity"}],["meta",{property:"article:tag",content:"android-\u57FA\u7840"}],["meta",{property:"article:modified_time",content:"2022-07-06T10:07:29.000Z"}]]},excerpt:"",headers:[{level:2,title:"1. \u751F\u547D\u5468\u671F",slug:"_1-\u751F\u547D\u5468\u671F",children:[{level:3,title:"1.1 \u751F\u547D\u5468\u671F\u5207\u6362\u8FC7\u7A0B",slug:"_1-1-\u751F\u547D\u5468\u671F\u5207\u6362\u8FC7\u7A0B",children:[]},{level:3,title:"1.2 \u6B63\u5E38\u751F\u547D\u5468\u671F",slug:"_1-2-\u6B63\u5E38\u751F\u547D\u5468\u671F",children:[{level:4,title:"1.2.1 onCreate",slug:"_1-2-1-oncreate",children:[]},{level:4,title:"1.2.2 onRestart",slug:"_1-2-2-onrestart",children:[]},{level:4,title:"1.2.3 onStart",slug:"_1-2-3-onstart",children:[]},{level:4,title:"1.2.4 onResume",slug:"_1-2-4-onresume",children:[]},{level:4,title:"1.2.5 onPause",slug:"_1-2-5-onpause",children:[]},{level:4,title:"1.2.6 onStop",slug:"_1-2-6-onstop",children:[]},{level:4,title:"1.2.7 onDestroy",slug:"_1-2-7-ondestroy",children:[]},{level:4,title:"1.2.8 \u5177\u4F53\u573A\u666F\u5206\u6790",slug:"_1-2-8-\u5177\u4F53\u573A\u666F\u5206\u6790",children:[{level:5,title:"1.2.8.1 Activity \u7B2C\u4E00\u6B21\u542F\u52A8\u65F6",slug:"_1-2-8-1-activity-\u7B2C\u4E00\u6B21\u542F\u52A8\u65F6",children:[]},{level:5,title:"1.2.8.2 Activity \u9000\u5230\u540E\u53F0\uFF08\u5207\u6362\u5230\u684C\u9762 or \u8DF3\u8F6C\u5230\u5176\u5B83 Activity\uFF09",slug:"_1-2-8-2-activity-\u9000\u5230\u540E\u53F0-\u5207\u6362\u5230\u684C\u9762-or-\u8DF3\u8F6C\u5230\u5176\u5B83-activity",children:[]},{level:5,title:"1.2.8.3 \u8DF3\u8F6C\u5230\u91C7\u7528\u4E86\u900F\u660E\u4E3B\u9898\u7684\u5176\u5B83 Activity",slug:"_1-2-8-3-\u8DF3\u8F6C\u5230\u91C7\u7528\u4E86\u900F\u660E\u4E3B\u9898\u7684\u5176\u5B83-activity",children:[]},{level:5,title:"1.2.8.4 Activity \u56DE\u5230\u524D\u53F0\uFF08\u7528\u6237\u518D\u6B21\u56DE\u5230\u539F Activity\uFF09",slug:"_1-2-8-4-activity-\u56DE\u5230\u524D\u53F0-\u7528\u6237\u518D\u6B21\u56DE\u5230\u539F-activity",children:[]},{level:5,title:"1.2.8.5 \u9501\u5C4F & \u5F00\u5C4F",slug:"_1-2-8-5-\u9501\u5C4F-\u5F00\u5C4F",children:[]},{level:5,title:"1.2.8.6 \u7528\u6237\u6309 back \u6309\u952E\u56DE\u9000\u65F6",slug:"_1-2-8-6-\u7528\u6237\u6309-back-\u6309\u952E\u56DE\u9000\u65F6",children:[]}]}]},{level:3,title:"1.3 \u5F02\u5E38\u751F\u547D\u5468\u671F",slug:"_1-3-\u5F02\u5E38\u751F\u547D\u5468\u671F",children:[{level:4,title:"1.3.1 \u8D44\u6E90\u76F8\u5173\u7684\u7CFB\u7EDF\u914D\u7F6E\u6539\u53D8\u5BFC\u81F4 Activity \u9500\u6BC1\u91CD\u5EFA\uFF08\u5982\u6A2A\u7AD6\u5C4F\u5207\u6362\uFF09",slug:"_1-3-1-\u8D44\u6E90\u76F8\u5173\u7684\u7CFB\u7EDF\u914D\u7F6E\u6539\u53D8\u5BFC\u81F4-activity-\u9500\u6BC1\u91CD\u5EFA-\u5982\u6A2A\u7AD6\u5C4F\u5207\u6362",children:[{level:5,title:"1.3.1.1 onSaveInstanceState & onRestoreInstanceState",slug:"_1-3-1-1-onsaveinstancestate-onrestoreinstancestate",children:[]},{level:5,title:"1.3.1.2 View \u5C42\u6B21\u7ED3\u6784\u7684\u4FDD\u5B58\u4E0E\u6062\u590D & \u59D4\u6258\u601D\u60F3",slug:"_1-3-1-2-view-\u5C42\u6B21\u7ED3\u6784\u7684\u4FDD\u5B58\u4E0E\u6062\u590D-\u59D4\u6258\u601D\u60F3",children:[]},{level:5,title:"1.3.1.3 \u6A2A\u7AD6\u5C4F\u5207\u6362\u65F6\u963B\u6B62 Activity \u7684\u9500\u6BC1\u91CD\u5EFA & configChanges \u5C5E\u6027",slug:"_1-3-1-3-\u6A2A\u7AD6\u5C4F\u5207\u6362\u65F6\u963B\u6B62-activity-\u7684\u9500\u6BC1\u91CD\u5EFA-configchanges-\u5C5E\u6027",children:[]}]},{level:4,title:"1.3.2 \u7CFB\u7EDF\u5185\u5B58\u4E0D\u8DB3\u5BFC\u81F4\u4F4E\u4F18\u5148\u7EA7\u7684 Activity \u6240\u5728\u8FDB\u7A0B\u88AB\u6740\u6B7B",slug:"_1-3-2-\u7CFB\u7EDF\u5185\u5B58\u4E0D\u8DB3\u5BFC\u81F4\u4F4E\u4F18\u5148\u7EA7\u7684-activity-\u6240\u5728\u8FDB\u7A0B\u88AB\u6740\u6B7B",children:[]}]},{level:3,title:"1.4 \u5C06\u4E00\u4E2A Activity \u8BBE\u7F6E\u6210\u7A97\u53E3\u7684\u6837\u5F0F",slug:"_1-4-\u5C06\u4E00\u4E2A-activity-\u8BBE\u7F6E\u6210\u7A97\u53E3\u7684\u6837\u5F0F",children:[]},{level:3,title:"1.5 \u9000\u51FA\u5DF2\u8C03\u7528\u591A\u4E2A Activity \u7684 Application",slug:"_1-5-\u9000\u51FA\u5DF2\u8C03\u7528\u591A\u4E2A-activity-\u7684-application",children:[]},{level:3,title:"1.6 \u4FEE\u6539 Activity \u8FDB\u5165\u548C\u9000\u51FA\u52A8\u753B",slug:"_1-6-\u4FEE\u6539-activity-\u8FDB\u5165\u548C\u9000\u51FA\u52A8\u753B",children:[]}]},{level:2,title:"2. \u542F\u52A8\u6A21\u5F0F",slug:"_2-\u542F\u52A8\u6A21\u5F0F",children:[{level:3,title:"2.1 \u4E3A\u4EC0\u4E48\u9700\u8981\u542F\u52A8\u6A21\u5F0F",slug:"_2-1-\u4E3A\u4EC0\u4E48\u9700\u8981\u542F\u52A8\u6A21\u5F0F",children:[]},{level:3,title:"2.2 \u56DB\u79CD\u542F\u52A8\u6A21\u5F0F",slug:"_2-2-\u56DB\u79CD\u542F\u52A8\u6A21\u5F0F",children:[{level:4,title:"2.2.1 standard\uFF08\u6807\u51C6\u6A21\u5F0F\uFF09",slug:"_2-2-1-standard-\u6807\u51C6\u6A21\u5F0F",children:[]},{level:4,title:"2.2.1.1 standard \u6A21\u5F0F\u542F\u52A8\u7684 Activity \u9ED8\u8BA4\u8FDB\u5165\u5F53\u524D Context \u7684\u4EFB\u52A1\u6808\u4E2D",slug:"_2-2-1-1-standard-\u6A21\u5F0F\u542F\u52A8\u7684-activity-\u9ED8\u8BA4\u8FDB\u5165\u5F53\u524D-context-\u7684\u4EFB\u52A1\u6808\u4E2D",children:[]},{level:4,title:"2.2.1.2 standard \u6A21\u5F0F\u542F\u52A8\u65F6 Context \u65E0\u4EFB\u52A1\u6808\u7684\u89E3\u51B3\u65B9\u6848",slug:"_2-2-1-2-standard-\u6A21\u5F0F\u542F\u52A8\u65F6-context-\u65E0\u4EFB\u52A1\u6808\u7684\u89E3\u51B3\u65B9\u6848",children:[]},{level:4,title:"2.2.2 singleTop\uFF08\u6808\u9876\u590D\u7528\u6A21\u5F0F\uFF09",slug:"_2-2-2-singletop-\u6808\u9876\u590D\u7528\u6A21\u5F0F",children:[]},{level:4,title:"2.2.3 singleTask\uFF08\u6808\u5185\u590D\u7528\u6A21\u5F0F\uFF09",slug:"_2-2-3-singletask-\u6808\u5185\u590D\u7528\u6A21\u5F0F",children:[]},{level:4,title:"2.2.4 singleInstance\uFF08\u5355\u5B9E\u4F8B\u6A21\u5F0F\uFF09",slug:"_2-2-4-singleinstance-\u5355\u5B9E\u4F8B\u6A21\u5F0F",children:[]}]},{level:3,title:"2.3 \u7ED9 Activity \u6307\u5B9A\u542F\u52A8\u6A21\u5F0F\u7684\u4E24\u79CD\u65B9\u5F0F",slug:"_2-3-\u7ED9-activity-\u6307\u5B9A\u542F\u52A8\u6A21\u5F0F\u7684\u4E24\u79CD\u65B9\u5F0F",children:[{level:4,title:"2.3.1 \u5728 AndroidManifest.xml \u4E2D\u901A\u8FC7 android:launchMode \u5C5E\u6027\u6307\u5B9A",slug:"_2-3-1-\u5728-androidmanifest-xml-\u4E2D\u901A\u8FC7-android-launchmode-\u5C5E\u6027\u6307\u5B9A",children:[]},{level:4,title:"2.3.2 \u5728\u4EE3\u7801\u4E2D\u901A\u8FC7\u7ED9 Intent \u8BBE\u7F6E\u7684\u6807\u5FD7\u4F4D\u6307\u5B9A",slug:"_2-3-2-\u5728\u4EE3\u7801\u4E2D\u901A\u8FC7\u7ED9-intent-\u8BBE\u7F6E\u7684\u6807\u5FD7\u4F4D\u6307\u5B9A",children:[]}]},{level:3,title:"2.4 Activity \u7684\u4EFB\u52A1\u6808 & taskAffinity \u5C5E\u6027",slug:"_2-4-activity-\u7684\u4EFB\u52A1\u6808-taskaffinity-\u5C5E\u6027",children:[{level:4,title:"2.4.1 taskAffinity \u5C5E\u6027 & singleTask \u6A21\u5F0F\u7ED3\u5408\u4F7F\u7528",slug:"_2-4-1-taskaffinity-\u5C5E\u6027-singletask-\u6A21\u5F0F\u7ED3\u5408\u4F7F\u7528",children:[]},{level:4,title:"2.4.2 taskAffinity \u5C5E\u6027 & allowTaskReparenting \u5C5E\u6027\u7ED3\u5408\u4F7F\u7528",slug:"_2-4-2-taskaffinity-\u5C5E\u6027-allowtaskreparenting-\u5C5E\u6027\u7ED3\u5408\u4F7F\u7528",children:[]}]},{level:3,title:"2.5 \u793A\u4F8B",slug:"_2-5-\u793A\u4F8B",children:[{level:4,title:"2.5.1 \u793A\u4F8B 1\uFF1A\u67E5\u770B Activity \u4EFB\u52A1\u6808 & dumpsys \u547D\u4EE4",slug:"_2-5-1-\u793A\u4F8B-1-\u67E5\u770B-activity-\u4EFB\u52A1\u6808-dumpsys-\u547D\u4EE4",children:[]},{level:4,title:"2.5.2 \u793A\u4F8B 2\uFF1AsingleTop \u6A21\u5F0F\u5177\u6709 clearTop \u7684\u6548\u679C",slug:"_2-5-2-\u793A\u4F8B-2-singletop-\u6A21\u5F0F\u5177\u6709-cleartop-\u7684\u6548\u679C",children:[]}]},{level:3,title:"2.6 \u542F\u52A8\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F",slug:"_2-6-\u542F\u52A8\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F",children:[]},{level:3,title:"2.7 Activity \u7684 Flags",slug:"_2-7-activity-\u7684-flags",children:[{level:4,title:"2.7.1  \u8BBE\u7F6E Activity \u542F\u52A8\u6A21\u5F0F\u7684 Flags",slug:"_2-7-1-\u8BBE\u7F6E-activity-\u542F\u52A8\u6A21\u5F0F\u7684-flags",children:[{level:5,title:"2.7.1.1 FLAG_ACTIVITY_NEW_TASK",slug:"_2-7-1-1-flag-activity-new-task",children:[]},{level:5,title:"2.7.1.2 FLAG_ACTIVITY_SINGLE_TOP",slug:"_2-7-1-2-flag-activity-single-top",children:[]}]},{level:4,title:"2.7.2  \u5F71\u54CD Activity \u8FD0\u884C\u72B6\u6001\u7684 Flags",slug:"_2-7-2-\u5F71\u54CD-activity-\u8FD0\u884C\u72B6\u6001\u7684-flags",children:[{level:5,title:"2.7.2.1 FLAG_ACTIVITY_CLEAR_TOP",slug:"_2-7-2-1-flag-activity-clear-top",children:[]},{level:5,title:"2.7.2.2 FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS",slug:"_2-7-2-2-flag-activity-exclude-from-recents",children:[]}]}]},{level:3,title:"2.8 onNewIntent \u65B9\u6CD5\u4EC0\u4E48\u65F6\u5019\u6267\u884C",slug:"_2-8-onnewintent-\u65B9\u6CD5\u4EC0\u4E48\u65F6\u5019\u6267\u884C",children:[]}]},{level:2,title:"3. \u6570\u636E",slug:"_3-\u6570\u636E",children:[{level:3,title:"3.1 Intent \u4F20\u9012\u6570\u636E\u592A\u5927\uFF0C\u62A5 TransactionTooLargeException \u5F02\u5E38",slug:"_3-1-intent-\u4F20\u9012\u6570\u636E\u592A\u5927-\u62A5-transactiontoolargeexception-\u5F02\u5E38",children:[]}]},{level:2,title:"4. Context",slug:"_4-context",children:[{level:3,title:"4.1 Context \u7684\u7EE7\u627F\u5173\u7CFB",slug:"_4-1-context-\u7684\u7EE7\u627F\u5173\u7CFB",children:[]}]},{level:2,title:"5. \u8FDB\u7A0B",slug:"_5-\u8FDB\u7A0B",children:[{level:3,title:"5.1 \u8FDB\u7A0B\u4F18\u5148\u7EA7",slug:"_5-1-\u8FDB\u7A0B\u4F18\u5148\u7EA7",children:[]},{level:3,title:"5.2 \u8FDB\u7A0B\u5206\u7C7B",slug:"_5-2-\u8FDB\u7A0B\u5206\u7C7B",children:[{level:4,title:"5.2.1 \u524D\u53F0\u8FDB\u7A0B\uFF08Foreground Process\uFF09",slug:"_5-2-1-\u524D\u53F0\u8FDB\u7A0B-foreground-process",children:[]},{level:4,title:"5.2.2 \u53EF\u89C1\u8FDB\u7A0B\uFF08Visible Process\uFF09",slug:"_5-2-2-\u53EF\u89C1\u8FDB\u7A0B-visible-process",children:[]},{level:4,title:"5.2.3 \u670D\u52A1\u8FDB\u7A0B\uFF08Service Process\uFF09",slug:"_5-2-3-\u670D\u52A1\u8FDB\u7A0B-service-process",children:[]},{level:4,title:"5.2.4 \u540E\u53F0\u8FDB\u7A0B\uFF08Background Process\uFF09",slug:"_5-2-4-\u540E\u53F0\u8FDB\u7A0B-background-process",children:[]},{level:4,title:"5.2.5 \u7A7A\u8FDB\u7A0B\uFF08Empty Process\uFF09",slug:"_5-2-5-\u7A7A\u8FDB\u7A0B-empty-process",children:[]}]}]}],git:{createdTime:1657102049e3,updatedTime:1657102049e3,contributors:[{name:"zengk",email:"zengkaiqiang562@163.com",commits:1}]},readingTime:{minutes:26.66,words:7999},filePathRelative:"zkq/android/basic/activity.md"};export{e as data};