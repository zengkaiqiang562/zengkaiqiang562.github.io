const e={key:"v-73b08f23",path:"/high-performance/message-queue/message-queue.html",title:"\u6D88\u606F\u961F\u5217\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3",lang:"zh-CN",frontmatter:{summary:"\u6D88\u606F\u961F\u5217\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3 \u201CRabbitMQ\uFF1F\u201D\u201CKafka\uFF1F\u201D\u201CRocketMQ\uFF1F\u201D...\u5728\u65E5\u5E38\u5B66\u4E60\u4E0E\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5E38\u5E38\u542C\u5230\u6D88\u606F\u961F\u5217\u8FD9\u4E2A\u5173\u952E\u8BCD\u3002\u6211\u4E5F\u5728\u6211\u7684\u591A\u7BC7\u6587\u7AE0\u4E2D\u63D0\u5230\u4E86\u8FD9\u4E2A\u6982\u5FF5\u3002\u53EF\u80FD\u4F60\u662F\u719F\u7EC3\u4F7F\u7528\u6D88\u606F\u961F\u5217\u7684\u8001\u624B\uFF0C\u53C8\u6216\u8005\u4F60\u662F\u4E0D\u61C2\u6D88\u606F\u961F\u5217\u7684\u65B0\u624B\uFF0C\u4E0D\u8BBA\u4F60\u4E86\u4E0D\u4E86\u89E3\u6D88\u606F\u961F\u5217\uFF0C\u672C\u6587\u90FD\u5C06\u5E26\u4F60\u641E\u61C2\u6D88\u606F\u961F\u5217\u7684\u4E00\u4E9B\u57FA\u672C\u7406\u8BBA\u3002\u5982\u679C\u4F60\u662F\u8001\u624B\uFF0C\u4F60\u53EF\u80FD\u4ECE\u672C\u6587\u5B66\u5230\u4F60\u4E4B\u524D\u4E0D\u66FE\u6CE8\u610F\u7684\u4E00",head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/high-performance/message-queue/message-queue.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"\u6D88\u606F\u961F\u5217\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-03-30T01:46:56.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2022-03-30T01:46:56.000Z"}]]},excerpt:"",headers:[{level:1,title:"\u6D88\u606F\u961F\u5217\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3",slug:"\u6D88\u606F\u961F\u5217\u77E5\u8BC6\u70B9-\u9762\u8BD5\u9898\u603B\u7ED3",children:[{level:2,title:"\u4E00 \u4EC0\u4E48\u662F\u6D88\u606F\u961F\u5217",slug:"\u4E00-\u4EC0\u4E48\u662F\u6D88\u606F\u961F\u5217",children:[]},{level:2,title:"\u4E8C \u4E3A\u4EC0\u4E48\u8981\u7528\u6D88\u606F\u961F\u5217",slug:"\u4E8C-\u4E3A\u4EC0\u4E48\u8981\u7528\u6D88\u606F\u961F\u5217",children:[{level:3,title:"2.1 \u901A\u8FC7\u5F02\u6B65\u5904\u7406\u63D0\u9AD8\u7CFB\u7EDF\u6027\u80FD\uFF08\u51CF\u5C11\u54CD\u5E94\u6240\u9700\u65F6\u95F4\uFF09",slug:"_2-1-\u901A\u8FC7\u5F02\u6B65\u5904\u7406\u63D0\u9AD8\u7CFB\u7EDF\u6027\u80FD-\u51CF\u5C11\u54CD\u5E94\u6240\u9700\u65F6\u95F4",children:[]},{level:3,title:"2.2 \u524A\u5CF0/\u9650\u6D41",slug:"_2-2-\u524A\u5CF0-\u9650\u6D41",children:[]},{level:3,title:"2.3 \u964D\u4F4E\u7CFB\u7EDF\u8026\u5408\u6027",slug:"_2-3-\u964D\u4F4E\u7CFB\u7EDF\u8026\u5408\u6027",children:[]}]},{level:2,title:"\u4E09 \u4F7F\u7528\u6D88\u606F\u961F\u5217\u5E26\u6765\u7684\u4E00\u4E9B\u95EE\u9898",slug:"\u4E09-\u4F7F\u7528\u6D88\u606F\u961F\u5217\u5E26\u6765\u7684\u4E00\u4E9B\u95EE\u9898",children:[]},{level:2,title:"\u56DB JMS VS AMQP",slug:"\u56DB-jms-vs-amqp",children:[{level:3,title:"4.1 JMS",slug:"_4-1-jms",children:[{level:4,title:"4.1.1 JMS \u7B80\u4ECB",slug:"_4-1-1-jms-\u7B80\u4ECB",children:[]},{level:4,title:"4.1.2 JMS \u4E24\u79CD\u6D88\u606F\u6A21\u578B",slug:"_4-1-2-jms-\u4E24\u79CD\u6D88\u606F\u6A21\u578B",children:[]},{level:4,title:"4.1.3 JMS \u4E94\u79CD\u4E0D\u540C\u7684\u6D88\u606F\u6B63\u6587\u683C\u5F0F",slug:"_4-1-3-jms-\u4E94\u79CD\u4E0D\u540C\u7684\u6D88\u606F\u6B63\u6587\u683C\u5F0F",children:[]}]},{level:3,title:"4.2 AMQP",slug:"_4-2-amqp",children:[]},{level:3,title:"4.3 JMS vs AMQP",slug:"_4-3-jms-vs-amqp",children:[]}]},{level:2,title:"\u4E94 \u5E38\u89C1\u7684\u6D88\u606F\u961F\u5217\u5BF9\u6BD4",slug:"\u4E94-\u5E38\u89C1\u7684\u6D88\u606F\u961F\u5217\u5BF9\u6BD4",children:[]}]}],git:{createdTime:1636454878e3,updatedTime:1648604816e3,contributors:[{name:"guide",email:"koushuangbwcx@163.com",commits:2}]},readingTime:{minutes:11.88,words:3564},filePathRelative:"high-performance/message-queue/message-queue.md"};export{e as data};
