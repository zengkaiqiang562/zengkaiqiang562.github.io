const e={key:"v-02adfa61",path:"/zkq/android/basic/asynctask.html",title:"AsyncTask",lang:"zh-CN",frontmatter:{title:"AsyncTask",category:["android"],tag:["android"],summary:"1. AsyncTask \u7684\u4ECB\u7ECD\u53CA\u9002\u7528\u573A\u666F AsyncTask \u662F\u4E00\u79CD\u8F7B\u91CF\u7EA7\u7684\u5F02\u6B65\u4EFB\u52A1\u7C7B\u3002\u901A\u8FC7 AsyncTask \u53EF\u4EE5\u5C06\u4EFB\u52A1\u63D0\u4EA4\u5230\u7EBF\u7A0B\u6C60\u4E2D\u6267\u884C\uFF0C\u7136\u540E\u628A\u6267\u884C\u7684\u8FDB\u5EA6\u548C\u6700\u7EC8\u7684\u7ED3\u679C\u4F20\u9012\u7ED9\u4E3B\u7EBF\u7A0B\u53BB\u66F4\u65B0 UI\u3002 \u4ECE\u5B9E\u73B0\u4E0A\u770B\uFF0CAsyncTask \u5C01\u88C5\u4E86 Thread \u548C Handler\u3002 AsyncTask \u5E76\u4E0D\u9002\u5408\u8FDB\u884C\u7279\u522B\u8017\u65F6\u7684\u540E\u53F0\u4EFB\u52A1\uFF0C\u5BF9\u4E8E\u7279\u522B\u8017\u65F6\u7684\u4EFB\u52A1\u6765\u8BF4\uFF0C\u5EFA\u8BAE\u4F7F",head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/zkq/android/basic/asynctask.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"AsyncTask"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-07-08T06:42:00.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"android"}],["meta",{property:"article:modified_time",content:"2022-07-08T06:42:00.000Z"}]]},excerpt:"",headers:[{level:2,title:"1. AsyncTask \u7684\u4ECB\u7ECD\u53CA\u9002\u7528\u573A\u666F",slug:"_1-asynctask-\u7684\u4ECB\u7ECD\u53CA\u9002\u7528\u573A\u666F",children:[]},{level:2,title:"2. AsyncTask \u7684 3 \u4E2A\u6CDB\u578B\u53C2\u6570",slug:"_2-asynctask-\u7684-3-\u4E2A\u6CDB\u578B\u53C2\u6570",children:[{level:3,title:"2.1 Params",slug:"_2-1-params",children:[]},{level:3,title:"2.2 Progress",slug:"_2-2-progress",children:[]},{level:3,title:"2.3 Result",slug:"_2-3-result",children:[]}]},{level:2,title:"3. AsyncTask \u7684 4 \u4E2A\u6838\u5FC3\u65B9\u6CD5",slug:"_3-asynctask-\u7684-4-\u4E2A\u6838\u5FC3\u65B9\u6CD5",children:[{level:3,title:"3.1 onPreExecute()",slug:"_3-1-onpreexecute",children:[]},{level:3,title:"3.2 doInBackground(Params... params)",slug:"_3-2-doinbackground-params-params",children:[]},{level:3,title:"3.3 onProgressUpdate(Progress...values)",slug:"_3-3-onprogressupdate-progress-values",children:[]},{level:3,title:"3.4 onPostExecute(Result result)",slug:"_3-4-onpostexecute-result-result",children:[]}]},{level:2,title:"4. AsyncTask \u53D6\u6D88\u4EFB\u52A1",slug:"_4-asynctask-\u53D6\u6D88\u4EFB\u52A1",children:[{level:3,title:"4.1 \u8C03\u7528 cancel \u65B9\u6CD5\u53D6\u6D88\u4EFB\u52A1",slug:"_4-1-\u8C03\u7528-cancel-\u65B9\u6CD5\u53D6\u6D88\u4EFB\u52A1",children:[]},{level:3,title:"4.2 \u4EFB\u53D6\u53D6\u6D88\u540E\u7684\u56DE\u8C03 onCancelled()",slug:"_4-2-\u4EFB\u53D6\u53D6\u6D88\u540E\u7684\u56DE\u8C03-oncancelled",children:[]}]},{level:2,title:"5. AsyncTask \u5728\u4F7F\u7528\u65F6\u7684\u6CE8\u610F\u4E8B\u9879",slug:"_5-asynctask-\u5728\u4F7F\u7528\u65F6\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"5.1 \u901A\u8FC7 execute \u65B9\u6CD5\u4E32\u884C\u6267\u884C\u4EFB\u52A1",slug:"_5-1-\u901A\u8FC7-execute-\u65B9\u6CD5\u4E32\u884C\u6267\u884C\u4EFB\u52A1",children:[]},{level:3,title:"5.2 \u901A\u8FC7 executeOnExecutor \u65B9\u6CD5\u5E76\u884C\u6267\u884C\u4EFB\u52A1",slug:"_5-2-\u901A\u8FC7-executeonexecutor-\u65B9\u6CD5\u5E76\u884C\u6267\u884C\u4EFB\u52A1",children:[]}]},{level:2,title:"5. AsyncTask \u6E90\u7801\u5206\u6790",slug:"_5-asynctask-\u6E90\u7801\u5206\u6790",children:[{level:3,title:"5.1 SERIAL_EXECUTOR \u7EBF\u7A0B\u6C60 & THREAD_POOL_EXECUTOR \u7EBF\u7A0B\u6C60",slug:"_5-1-serial-executor-\u7EBF\u7A0B\u6C60-thread-pool-executor-\u7EBF\u7A0B\u6C60",children:[]},{level:3,title:"5.2 \u901A\u8FC7 FutureTask \u548C Callable \u5B9E\u73B0\u4EFB\u52A1\u7684\u53C2\u6570\u4F20\u5165\u548C\u7ED3\u679C\u8FD4\u56DE",slug:"_5-2-\u901A\u8FC7-futuretask-\u548C-callable-\u5B9E\u73B0\u4EFB\u52A1\u7684\u53C2\u6570\u4F20\u5165\u548C\u7ED3\u679C\u8FD4\u56DE",children:[]}]}],git:{createdTime:165726252e4,updatedTime:165726252e4,contributors:[{name:"zengk",email:"zengkaiqiang562@163.com",commits:1}]},readingTime:{minutes:6.88,words:2065},filePathRelative:"zkq/android/basic/asynctask.md"};export{e as data};