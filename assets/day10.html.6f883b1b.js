const e={key:"v-cbad5b44",path:"/zkq/c_and_cpp/_1_c-basic/day10.html",title:"\u7B2C10\u5929",lang:"zh-CN",frontmatter:{title:"\u7B2C10\u5929",category:["C\u8BED\u8A00\u57FA\u7840"],tag:["C\u8BED\u8A00\u57FA\u7840"],summary:"1. printf/scanf/perror \u51FD\u6570\u4E0E\u5176\u5BF9\u5E94\u7684\u7CFB\u7EDF\u6587\u4EF6 printf\uFF08\u6807\u51C6\u8F93\u5165\uFF09\u3001scanf\uFF08\u6807\u51C6\u8F93\u51FA\uFF09\u3001perror\uFF08\u6807\u51C6\u9519\u8BEF\uFF09 \u8FD9\u4E09\u4E2A\u51FD\u6570\u5206\u522B\u7528\u4E8E\u5411\u4E0D\u540C\u7684\u7CFB\u7EDF\u6587\u4EF6\uFF08stdin \u6587\u4EF6\u3001stdout \u6587\u4EF6\u3001stderr \u6587\u4EF6\uFF09\u4E2D\u8BFB\u5199\u6570\u636E\uFF0C\u7136\u540E\u518D\u901A\u8FC7\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5C06\u7CFB\u7EDF\u6587\u4EF6\u548C\u7269\u7406\u8BBE\u5907\u5173\u8054\u8D77\u6765\u3002 1.1 \u7CFB\u7EDF\u6587\u4EF6\u7684\u9690\u5F0F\u56DE\u6536 \u5E94\u7528\u7A0B\u5E8F\u542F\u52A8\u65F6\uFF0C\u81EA\u52A8\u88AB\u6253\u5F00\uFF1B",head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/zkq/c_and_cpp/_1_c-basic/day10.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"\u7B2C10\u5929"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://zengkaiqiang562.github.io/"}],["meta",{property:"og:updated_time",content:"2023-03-21T05:58:47.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"\u7B2C10\u5929"}],["meta",{property:"article:tag",content:"C\u8BED\u8A00\u57FA\u7840"}],["meta",{property:"article:modified_time",content:"2023-03-21T05:58:47.000Z"}]]},excerpt:"",headers:[{level:2,title:"1. printf/scanf/perror \u51FD\u6570\u4E0E\u5176\u5BF9\u5E94\u7684\u7CFB\u7EDF\u6587\u4EF6",slug:"_1-printf-scanf-perror-\u51FD\u6570\u4E0E\u5176\u5BF9\u5E94\u7684\u7CFB\u7EDF\u6587\u4EF6",children:[{level:3,title:"1.1 \u7CFB\u7EDF\u6587\u4EF6\u7684\u9690\u5F0F\u56DE\u6536",slug:"_1-1-\u7CFB\u7EDF\u6587\u4EF6\u7684\u9690\u5F0F\u56DE\u6536",children:[]}]},{level:2,title:"2. \u6587\u4EF6\u6307\u9488\u548C\u666E\u901A\u6307\u9488\u7684\u533A\u522B",slug:"_2-\u6587\u4EF6\u6307\u9488\u548C\u666E\u901A\u6307\u9488\u7684\u533A\u522B",children:[{level:3,title:"2.1 FILE \u7ED3\u6784\u4F53",slug:"_2-1-file-\u7ED3\u6784\u4F53",children:[]}]},{level:2,title:"3. \u6587\u4EF6\u5206\u7C7B\uFF1A\u8BBE\u5907\u6587\u4EF6 & \u78C1\u76D8\u6587\u4EF6",slug:"_3-\u6587\u4EF6\u5206\u7C7B-\u8BBE\u5907\u6587\u4EF6-\u78C1\u76D8\u6587\u4EF6",children:[]},{level:2,title:"4. \u6587\u4EF6\u64CD\u4F5C\u4E00\u822C\u6B65\u9AA4",slug:"_4-\u6587\u4EF6\u64CD\u4F5C\u4E00\u822C\u6B65\u9AA4",children:[]},{level:2,title:"5. \u6253\u5F00\u3001\u5173\u95ED\u6587\u4EF6\u51FD\u6570\uFF1Afopen & fclose",slug:"_5-\u6253\u5F00\u3001\u5173\u95ED\u6587\u4EF6\u51FD\u6570-fopen-fclose",children:[]},{level:2,title:"6. \u6587\u4EF6\u8BBF\u95EE\u8DEF\u5F84\uFF1A\u7EDD\u5BF9\u8DEF\u5F84 & \u76F8\u5BF9\u8DEF\u5F84",slug:"_6-\u6587\u4EF6\u8BBF\u95EE\u8DEF\u5F84-\u7EDD\u5BF9\u8DEF\u5F84-\u76F8\u5BF9\u8DEF\u5F84",children:[]},{level:2,title:"7. \u6309\u5B57\u7B26\u5199\u6587\u4EF6\uFF1Afputc",slug:"_7-\u6309\u5B57\u7B26\u5199\u6587\u4EF6-fputc",children:[]},{level:2,title:"8. \u6309\u5B57\u7B26\u8BFB\u6587\u4EF6\uFF1Afgetc",slug:"_8-\u6309\u5B57\u7B26\u8BFB\u6587\u4EF6-fgetc",children:[]},{level:2,title:"9. \u5224\u65AD\u662F\u5426\u5230\u8FBE\u6587\u4EF6\u7ED3\u5C3E\uFF1Afeof",slug:"_9-\u5224\u65AD\u662F\u5426\u5230\u8FBE\u6587\u4EF6\u7ED3\u5C3E-feof",children:[]},{level:2,title:"10. \u4ECE\u6307\u5B9A\u8F93\u5165\u6D41\u4E2D\u83B7\u53D6\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF1Afgets",slug:"_10-\u4ECE\u6307\u5B9A\u8F93\u5165\u6D41\u4E2D\u83B7\u53D6\u4E00\u4E2A\u5B57\u7B26\u4E32-fgets",children:[]},{level:2,title:"11. \u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u5199\u51FA\u5230\u6307\u5B9A\u8F93\u51FA\u6D41\uFF1Afputs",slug:"_11-\u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u5199\u51FA\u5230\u6307\u5B9A\u8F93\u51FA\u6D41-fputs",children:[]},{level:2,title:"12. \u6848\u4F8B",slug:"_12-\u6848\u4F8B",children:[{level:3,title:"12.1 \u6848\u4F8B1\uFF1A\u83B7\u53D6\u7528\u6237\u952E\u76D8\u8F93\u5165\u4FDD\u5B58\u5230\u6587\u4EF6",slug:"_12-1-\u6848\u4F8B1-\u83B7\u53D6\u7528\u6237\u952E\u76D8\u8F93\u5165\u4FDD\u5B58\u5230\u6587\u4EF6",children:[]},{level:3,title:"12.2 \u6848\u4F8B2\uFF1A\u6587\u4EF6\u7248\u56DB\u5219\u8FD0\u7B97",slug:"_12-2-\u6848\u4F8B2-\u6587\u4EF6\u7248\u56DB\u5219\u8FD0\u7B97",children:[]}]}],git:{createdTime:1678441985e3,updatedTime:1679378327e3,contributors:[{name:"zenk",email:"zengkaiqiang562@163.com",commits:2}]},readingTime:{minutes:6.96,words:2087},filePathRelative:"zkq/c_and_cpp/_1_c-basic/day10.md"};export{e as data};
