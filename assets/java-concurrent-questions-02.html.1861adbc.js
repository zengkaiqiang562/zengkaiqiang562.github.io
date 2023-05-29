const e={key:"v-7b368930",path:"/java/concurrent/java-concurrent-questions-02.html",title:"Java \u5E76\u53D1\u5E38\u89C1\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3\uFF08\u8FDB\u9636\u7BC7\uFF09",lang:"zh-CN",frontmatter:{title:"Java \u5E76\u53D1\u5E38\u89C1\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3\uFF08\u8FDB\u9636\u7BC7\uFF09",category:["Java"],tag:["Java\u5E76\u53D1"],summary:"1.synchronized \u5173\u952E\u5B57 1.1.\u8BF4\u4E00\u8BF4\u81EA\u5DF1\u5BF9\u4E8E synchronized \u5173\u952E\u5B57\u7684\u4E86\u89E3 synchronized \u5173\u952E\u5B57\u89E3\u51B3\u7684\u662F\u591A\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\u8BBF\u95EE\u8D44\u6E90\u7684\u540C\u6B65\u6027\uFF0Csynchronized\u5173\u952E\u5B57\u53EF\u4EE5\u4FDD\u8BC1\u88AB\u5B83\u4FEE\u9970\u7684\u65B9\u6CD5\u6216\u8005\u4EE3\u7801\u5757\u5728\u4EFB\u610F\u65F6\u523B\u53EA\u80FD\u6709\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u3002 \u53E6\u5916\uFF0C\u5728 Java \u65E9\u671F\u7248\u672C\u4E2D\uFF0Csynchronized \u5C5E\u4E8E \u91CD\u91CF\u7EA7\u9501\uFF0C\u6548\u7387\u4F4E\u4E0B\u3002 \u4E3A\u4EC0\u4E48\u5462",head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/java/concurrent/java-concurrent-questions-02.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"Java \u5E76\u53D1\u5E38\u89C1\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3\uFF08\u8FDB\u9636\u7BC7\uFF09"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-03-22T01:57:37.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"Java\u5E76\u53D1"}],["meta",{property:"article:modified_time",content:"2022-03-22T01:57:37.000Z"}]]},excerpt:"",headers:[{level:2,title:"1.synchronized \u5173\u952E\u5B57",slug:"_1-synchronized-\u5173\u952E\u5B57",children:[{level:3,title:"1.1.\u8BF4\u4E00\u8BF4\u81EA\u5DF1\u5BF9\u4E8E synchronized \u5173\u952E\u5B57\u7684\u4E86\u89E3",slug:"_1-1-\u8BF4\u4E00\u8BF4\u81EA\u5DF1\u5BF9\u4E8E-synchronized-\u5173\u952E\u5B57\u7684\u4E86\u89E3",children:[]},{level:3,title:"1.2. \u8BF4\u8BF4\u81EA\u5DF1\u662F\u600E\u4E48\u4F7F\u7528 synchronized \u5173\u952E\u5B57",slug:"_1-2-\u8BF4\u8BF4\u81EA\u5DF1\u662F\u600E\u4E48\u4F7F\u7528-synchronized-\u5173\u952E\u5B57",children:[]},{level:3,title:"1.3. \u6784\u9020\u65B9\u6CD5\u53EF\u4EE5\u4F7F\u7528 synchronized \u5173\u952E\u5B57\u4FEE\u9970\u4E48\uFF1F",slug:"_1-3-\u6784\u9020\u65B9\u6CD5\u53EF\u4EE5\u4F7F\u7528-synchronized-\u5173\u952E\u5B57\u4FEE\u9970\u4E48",children:[]},{level:3,title:"1.3. \u8BB2\u4E00\u4E0B synchronized \u5173\u952E\u5B57\u7684\u5E95\u5C42\u539F\u7406",slug:"_1-3-\u8BB2\u4E00\u4E0B-synchronized-\u5173\u952E\u5B57\u7684\u5E95\u5C42\u539F\u7406",children:[{level:4,title:"1.3.1. synchronized \u540C\u6B65\u8BED\u53E5\u5757\u7684\u60C5\u51B5",slug:"_1-3-1-synchronized-\u540C\u6B65\u8BED\u53E5\u5757\u7684\u60C5\u51B5",children:[]},{level:4,title:"1.3.2. synchronized \u4FEE\u9970\u65B9\u6CD5\u7684\u7684\u60C5\u51B5",slug:"_1-3-2-synchronized-\u4FEE\u9970\u65B9\u6CD5\u7684\u7684\u60C5\u51B5",children:[]},{level:4,title:"1.3.3.\u603B\u7ED3",slug:"_1-3-3-\u603B\u7ED3",children:[]}]},{level:3,title:"1.4. \u8BF4\u8BF4 JDK1.6 \u4E4B\u540E\u7684 synchronized \u5173\u952E\u5B57\u5E95\u5C42\u505A\u4E86\u54EA\u4E9B\u4F18\u5316\uFF0C\u53EF\u4EE5\u8BE6\u7EC6\u4ECB\u7ECD\u4E00\u4E0B\u8FD9\u4E9B\u4F18\u5316\u5417",slug:"_1-4-\u8BF4\u8BF4-jdk1-6-\u4E4B\u540E\u7684-synchronized-\u5173\u952E\u5B57\u5E95\u5C42\u505A\u4E86\u54EA\u4E9B\u4F18\u5316-\u53EF\u4EE5\u8BE6\u7EC6\u4ECB\u7ECD\u4E00\u4E0B\u8FD9\u4E9B\u4F18\u5316\u5417",children:[]},{level:3,title:"1.5. \u8C08\u8C08 synchronized \u548C ReentrantLock \u7684\u533A\u522B",slug:"_1-5-\u8C08\u8C08-synchronized-\u548C-reentrantlock-\u7684\u533A\u522B",children:[{level:4,title:"1.5.1. \u4E24\u8005\u90FD\u662F\u53EF\u91CD\u5165\u9501",slug:"_1-5-1-\u4E24\u8005\u90FD\u662F\u53EF\u91CD\u5165\u9501",children:[]},{level:4,title:"1.5.2.synchronized \u4F9D\u8D56\u4E8E JVM \u800C ReentrantLock \u4F9D\u8D56\u4E8E API",slug:"_1-5-2-synchronized-\u4F9D\u8D56\u4E8E-jvm-\u800C-reentrantlock-\u4F9D\u8D56\u4E8E-api",children:[]},{level:4,title:"1.5.3.ReentrantLock \u6BD4 synchronized \u589E\u52A0\u4E86\u4E00\u4E9B\u9AD8\u7EA7\u529F\u80FD",slug:"_1-5-3-reentrantlock-\u6BD4-synchronized-\u589E\u52A0\u4E86\u4E00\u4E9B\u9AD8\u7EA7\u529F\u80FD",children:[]}]}]},{level:2,title:"2. volatile \u5173\u952E\u5B57",slug:"_2-volatile-\u5173\u952E\u5B57",children:[{level:3,title:"2.1. CPU \u7F13\u5B58\u6A21\u578B",slug:"_2-1-cpu-\u7F13\u5B58\u6A21\u578B",children:[]},{level:3,title:"2.2. \u8BB2\u4E00\u4E0B JMM(Java \u5185\u5B58\u6A21\u578B)",slug:"_2-2-\u8BB2\u4E00\u4E0B-jmm-java-\u5185\u5B58\u6A21\u578B",children:[]},{level:3,title:"2.3. \u5E76\u53D1\u7F16\u7A0B\u7684\u4E09\u4E2A\u91CD\u8981\u7279\u6027",slug:"_2-3-\u5E76\u53D1\u7F16\u7A0B\u7684\u4E09\u4E2A\u91CD\u8981\u7279\u6027",children:[]},{level:3,title:"2.4. \u8BF4\u8BF4 synchronized \u5173\u952E\u5B57\u548C volatile \u5173\u952E\u5B57\u7684\u533A\u522B",slug:"_2-4-\u8BF4\u8BF4-synchronized-\u5173\u952E\u5B57\u548C-volatile-\u5173\u952E\u5B57\u7684\u533A\u522B",children:[]}]},{level:2,title:"3. ThreadLocal",slug:"_3-threadlocal",children:[{level:3,title:"3.1. ThreadLocal \u7B80\u4ECB",slug:"_3-1-threadlocal-\u7B80\u4ECB",children:[]},{level:3,title:"3.2. ThreadLocal \u793A\u4F8B",slug:"_3-2-threadlocal-\u793A\u4F8B",children:[]},{level:3,title:"3.3. ThreadLocal \u539F\u7406",slug:"_3-3-threadlocal-\u539F\u7406",children:[]},{level:3,title:"3.4. ThreadLocal \u5185\u5B58\u6CC4\u9732\u95EE\u9898",slug:"_3-4-threadlocal-\u5185\u5B58\u6CC4\u9732\u95EE\u9898",children:[]}]},{level:2,title:"4. \u7EBF\u7A0B\u6C60",slug:"_4-\u7EBF\u7A0B\u6C60",children:[{level:3,title:"4.1. \u4E3A\u4EC0\u4E48\u8981\u7528\u7EBF\u7A0B\u6C60\uFF1F",slug:"_4-1-\u4E3A\u4EC0\u4E48\u8981\u7528\u7EBF\u7A0B\u6C60",children:[]},{level:3,title:"4.2. \u5B9E\u73B0 Runnable \u63A5\u53E3\u548C Callable \u63A5\u53E3\u7684\u533A\u522B",slug:"_4-2-\u5B9E\u73B0-runnable-\u63A5\u53E3\u548C-callable-\u63A5\u53E3\u7684\u533A\u522B",children:[]},{level:3,title:"4.3. \u6267\u884C execute()\u65B9\u6CD5\u548C submit()\u65B9\u6CD5\u7684\u533A\u522B\u662F\u4EC0\u4E48\u5462\uFF1F",slug:"_4-3-\u6267\u884C-execute-\u65B9\u6CD5\u548C-submit-\u65B9\u6CD5\u7684\u533A\u522B\u662F\u4EC0\u4E48\u5462",children:[]},{level:3,title:"4.4. \u5982\u4F55\u521B\u5EFA\u7EBF\u7A0B\u6C60",slug:"_4-4-\u5982\u4F55\u521B\u5EFA\u7EBF\u7A0B\u6C60",children:[]},{level:3,title:"4.5 ThreadPoolExecutor \u7C7B\u5206\u6790",slug:"_4-5-threadpoolexecutor-\u7C7B\u5206\u6790",children:[{level:4,title:"4.5.1 ThreadPoolExecutor\u6784\u9020\u51FD\u6570\u91CD\u8981\u53C2\u6570\u5206\u6790",slug:"_4-5-1-threadpoolexecutor\u6784\u9020\u51FD\u6570\u91CD\u8981\u53C2\u6570\u5206\u6790",children:[]},{level:4,title:"4.5.2 ThreadPoolExecutor \u9971\u548C\u7B56\u7565",slug:"_4-5-2-threadpoolexecutor-\u9971\u548C\u7B56\u7565",children:[]}]},{level:3,title:"4.6 \u4E00\u4E2A\u7B80\u5355\u7684\u7EBF\u7A0B\u6C60 Demo",slug:"_4-6-\u4E00\u4E2A\u7B80\u5355\u7684\u7EBF\u7A0B\u6C60-demo",children:[]},{level:3,title:"4.7 \u7EBF\u7A0B\u6C60\u539F\u7406\u5206\u6790",slug:"_4-7-\u7EBF\u7A0B\u6C60\u539F\u7406\u5206\u6790",children:[]}]},{level:2,title:"5. Atomic \u539F\u5B50\u7C7B",slug:"_5-atomic-\u539F\u5B50\u7C7B",children:[{level:3,title:"5.1. \u4ECB\u7ECD\u4E00\u4E0B Atomic \u539F\u5B50\u7C7B",slug:"_5-1-\u4ECB\u7ECD\u4E00\u4E0B-atomic-\u539F\u5B50\u7C7B",children:[]},{level:3,title:"5.2. JUC \u5305\u4E2D\u7684\u539F\u5B50\u7C7B\u662F\u54EA 4 \u7C7B?",slug:"_5-2-juc-\u5305\u4E2D\u7684\u539F\u5B50\u7C7B\u662F\u54EA-4-\u7C7B",children:[]},{level:3,title:"5.3. \u8BB2\u8BB2 AtomicInteger \u7684\u4F7F\u7528",slug:"_5-3-\u8BB2\u8BB2-atomicinteger-\u7684\u4F7F\u7528",children:[]},{level:3,title:"5.4. \u80FD\u4E0D\u80FD\u7ED9\u6211\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B AtomicInteger \u7C7B\u7684\u539F\u7406",slug:"_5-4-\u80FD\u4E0D\u80FD\u7ED9\u6211\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B-atomicinteger-\u7C7B\u7684\u539F\u7406",children:[]}]},{level:2,title:"6. AQS",slug:"_6-aqs",children:[{level:3,title:"6.1. AQS \u4ECB\u7ECD",slug:"_6-1-aqs-\u4ECB\u7ECD",children:[]},{level:3,title:"6.2. AQS \u539F\u7406\u5206\u6790",slug:"_6-2-aqs-\u539F\u7406\u5206\u6790",children:[{level:4,title:"6.2.1. AQS \u539F\u7406\u6982\u89C8",slug:"_6-2-1-aqs-\u539F\u7406\u6982\u89C8",children:[]},{level:4,title:"6.2.2. AQS \u5BF9\u8D44\u6E90\u7684\u5171\u4EAB\u65B9\u5F0F",slug:"_6-2-2-aqs-\u5BF9\u8D44\u6E90\u7684\u5171\u4EAB\u65B9\u5F0F",children:[]},{level:4,title:"6.2.3. AQS \u5E95\u5C42\u4F7F\u7528\u4E86\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F",slug:"_6-2-3-aqs-\u5E95\u5C42\u4F7F\u7528\u4E86\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F",children:[]}]},{level:3,title:"6.3. AQS \u7EC4\u4EF6\u603B\u7ED3",slug:"_6-3-aqs-\u7EC4\u4EF6\u603B\u7ED3",children:[]},{level:3,title:"6.4. \u7528\u8FC7 CountDownLatch \u4E48\uFF1F\u4EC0\u4E48\u573A\u666F\u4E0B\u7528\u7684\uFF1F",slug:"_6-4-\u7528\u8FC7-countdownlatch-\u4E48-\u4EC0\u4E48\u573A\u666F\u4E0B\u7528\u7684",children:[]}]},{level:2,title:"7 Reference",slug:"_7-reference",children:[]}],git:{createdTime:1643619083e3,updatedTime:1647914257e3,contributors:[{name:"guide",email:"koushuangbwcx@163.com",commits:6},{name:"Evan He",email:"1453064869@qq.com",commits:1},{name:"Sr",email:"39112652+Itswag@users.noreply.github.com",commits:1},{name:"Verne.Chung",email:"verne.zhong@gmail.com",commits:1}]},readingTime:{minutes:44.01,words:13203},filePathRelative:"java/concurrent/java-concurrent-questions-02.md"};export{e as data};
