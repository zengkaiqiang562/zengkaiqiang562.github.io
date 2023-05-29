const l={key:"v-32b9d397",path:"/zkq/database/sql.html",title:"SQL \u8BED\u53E5",lang:"zh-CN",frontmatter:{title:"SQL \u8BED\u53E5",category:["\u6570\u636E\u5E93-SQL\u8BED\u53E5"],tag:["\u6570\u636E\u5E93-SQL\u8BED\u53E5"],summary:'1. \u6982\u8FF0 1.1 Windows \u7CFB\u7EDF\u4E2D SQL \u8BED\u53E5\u4E0D\u533A\u5206\u5927\u5C0F\u5199 1.2 SQL \u8BED\u53E5\u540E\u8981\u52A0\u5206\u53F7 ";" 2. SQL \u8BED\u53E5\u7684\u5206\u7C7B 2.1 DDL \u8BED\u53E5\uFF08Data Definition Language \u6570\u636E\u5B9A\u4E49\u8BED\u8A00\uFF09 \u4E3B\u8981\u6709\u5982\u4E0B 4 \u4E2A\u8BED\u53E5\uFF1A 1. CREATE 2. DROP 3. ALTER 4. TRUNCATE 2.2 DML \u8BED\u53E5\uFF08Data ',head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/zkq/database/sql.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"SQL \u8BED\u53E5"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-07-06T10:07:29.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"\u6570\u636E\u5E93-SQL\u8BED\u53E5"}],["meta",{property:"article:modified_time",content:"2022-07-06T10:07:29.000Z"}]]},excerpt:"",headers:[{level:2,title:"1. \u6982\u8FF0",slug:"_1-\u6982\u8FF0",children:[{level:3,title:"1.1 Windows \u7CFB\u7EDF\u4E2D SQL \u8BED\u53E5\u4E0D\u533A\u5206\u5927\u5C0F\u5199",slug:"_1-1-windows-\u7CFB\u7EDF\u4E2D-sql-\u8BED\u53E5\u4E0D\u533A\u5206\u5927\u5C0F\u5199",children:[]},{level:3,title:'1.2  SQL \u8BED\u53E5\u540E\u8981\u52A0\u5206\u53F7 ";"',slug:"_1-2-sql-\u8BED\u53E5\u540E\u8981\u52A0\u5206\u53F7",children:[]}]},{level:2,title:"2. SQL \u8BED\u53E5\u7684\u5206\u7C7B",slug:"_2-sql-\u8BED\u53E5\u7684\u5206\u7C7B",children:[{level:3,title:"2.1 DDL \u8BED\u53E5\uFF08Data Definition Language \u6570\u636E\u5B9A\u4E49\u8BED\u8A00\uFF09",slug:"_2-1-ddl-\u8BED\u53E5-data-definition-language-\u6570\u636E\u5B9A\u4E49\u8BED\u8A00",children:[]},{level:3,title:"2.2 DML \u8BED\u53E5\uFF08Data Manipulation Language \u6570\u636E\u64CD\u4F5C\u8BED\u8A00\uFF09",slug:"_2-2-dml-\u8BED\u53E5-data-manipulation-language-\u6570\u636E\u64CD\u4F5C\u8BED\u8A00",children:[]},{level:3,title:"2.3 DQL \u8BED\u53E5\uFF08Data Query Language \u6570\u636E\u67E5\u8BE2\u8BED\u8A00\uFF09",slug:"_2-3-dql-\u8BED\u53E5-data-query-language-\u6570\u636E\u67E5\u8BE2\u8BED\u8A00",children:[]},{level:3,title:"2.4 DCL \u8BED\u53E5\uFF08Data Control Language \u6570\u636E\u63A7\u5236\u8BED\u8A00\uFF09",slug:"_2-4-dcl-\u8BED\u53E5-data-control-language-\u6570\u636E\u63A7\u5236\u8BED\u8A00",children:[]},{level:3,title:"2.5 TCL \u8BED\u53E5\uFF08Transaction control Language \u4E8B\u52A1\u63A7\u5236\u8BED\u53E5\uFF09",slug:"_2-5-tcl-\u8BED\u53E5-transaction-control-language-\u4E8B\u52A1\u63A7\u5236\u8BED\u53E5",children:[]}]},{level:2,title:"3. DDL \u8BED\u53E5",slug:"_3-ddl-\u8BED\u53E5",children:[{level:3,title:"3.1 \u5BF9\u6570\u636E\u5E93\u7684\u64CD\u4F5C",slug:"_3-1-\u5BF9\u6570\u636E\u5E93\u7684\u64CD\u4F5C",children:[{level:4,title:"3.1.1 \u521B\u5EFA\u6570\u636E\u5E93",slug:"_3-1-1-\u521B\u5EFA\u6570\u636E\u5E93",children:[]},{level:4,title:"3.1.2 \u5220\u9664\u6570\u636E\u5E93",slug:"_3-1-2-\u5220\u9664\u6570\u636E\u5E93",children:[]},{level:4,title:"3.1.3 \u663E\u793A\u6570\u636E\u5E93\u7684\u521B\u5EFA\u4FE1\u606F",slug:"_3-1-3-\u663E\u793A\u6570\u636E\u5E93\u7684\u521B\u5EFA\u4FE1\u606F",children:[]},{level:4,title:"3.1.4 \u663E\u793A\u6240\u6709\u5DF2\u521B\u5EFA\u7684\u6570\u636E\u5E93",slug:"_3-1-4-\u663E\u793A\u6240\u6709\u5DF2\u521B\u5EFA\u7684\u6570\u636E\u5E93",children:[]},{level:4,title:"3.1.5 \u4FEE\u6539\u6570\u636E\u5E93",slug:"_3-1-5-\u4FEE\u6539\u6570\u636E\u5E93",children:[]},{level:4,title:"3.1.6 \u5207\u6362\u6570\u636E\u5E93",slug:"_3-1-6-\u5207\u6362\u6570\u636E\u5E93",children:[]},{level:4,title:"3.1.7 \u67E5\u770B\u5F53\u524D\u7684\u6570\u636E\u5E93",slug:"_3-1-7-\u67E5\u770B\u5F53\u524D\u7684\u6570\u636E\u5E93",children:[]}]},{level:3,title:"3.2 \u5BF9\u8868\u7684\u64CD\u4F5C",slug:"_3-2-\u5BF9\u8868\u7684\u64CD\u4F5C",children:[{level:4,title:"3.2.1 \u521B\u5EFA\u8868",slug:"_3-2-1-\u521B\u5EFA\u8868",children:[{level:5,title:"3.2.1.1 \u57FA\u672C\u8BED\u6CD5",slug:"_3-2-1-1-\u57FA\u672C\u8BED\u6CD5",children:[]},{level:5,title:"3.2.1.2 \u5B57\u6BB5\u7C7B\u578B",slug:"_3-2-1-2-\u5B57\u6BB5\u7C7B\u578B",children:[]},{level:5,title:"3.2.1.2.1 \u5B57\u7B26\u4E32\u578B\uFF1AVARCHAR\u3001CHAR",slug:"_3-2-1-2-1-\u5B57\u7B26\u4E32\u578B-varchar\u3001char",children:[]},{level:5,title:"3.2.1.2.2 \u5927\u6570\u636E\u7C7B\u578B\uFF1ABLOB\u3001TEXT",slug:"_3-2-1-2-2-\u5927\u6570\u636E\u7C7B\u578B-blob\u3001text",children:[]},{level:5,title:"3.2.1.2.3 \u6570\u503C\u578B\uFF1ATINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001FLOAT\u3001DOUBLE",slug:"_3-2-1-2-3-\u6570\u503C\u578B-tinyint\u3001smallint\u3001int\u3001bigint\u3001float\u3001double",children:[]},{level:5,title:"3.2.1.2.4 \u903B\u8F91\u578B\uFF1ABIT",slug:"_3-2-1-2-4-\u903B\u8F91\u578B-bit",children:[]},{level:5,title:"3.2.1.2.5 \u65E5\u671F\u578B\uFF1ADATE\u3001TIME\u3001DATETIME\u3001TIMESTAMP",slug:"_3-2-1-2-5-\u65E5\u671F\u578B-date\u3001time\u3001datetime\u3001timestamp",children:[]},{level:5,title:"3.2.1.3 \u793A\u4F8B\uFF1A\u521B\u5EFA\u4E00\u4E2A\u5458\u5DE5\u8868",slug:"_3-2-1-3-\u793A\u4F8B-\u521B\u5EFA\u4E00\u4E2A\u5458\u5DE5\u8868",children:[]},{level:5,title:"3.2.1.4 \u5B9A\u4E49\u5B57\u6BB5\u7684\u7EA6\u675F",slug:"_3-2-1-4-\u5B9A\u4E49\u5B57\u6BB5\u7684\u7EA6\u675F",children:[{level:6,title:"3.2.1.4.1 \u4E3B\u952E\u7EA6\u675F\uFF08\u552F\u4E00\uFF0C\u975E\u7A7A\uFF09\uFF1Aprimary key",slug:"_3-2-1-4-1-\u4E3B\u952E\u7EA6\u675F-\u552F\u4E00-\u975E\u7A7A-primary-key",children:[]},{level:6,title:"3.2.1.4.2 \u552F\u4E00\u7EA6\u675F\uFF08\u552F\u4E00\uFF0C\u53EF\u7A7A\uFF09\uFF1Aunique",slug:"_3-2-1-4-2-\u552F\u4E00\u7EA6\u675F-\u552F\u4E00-\u53EF\u7A7A-unique",children:[]},{level:6,title:"3.2.1.4.3 \u975E\u7A7A\u7EA6\u675F\uFF08\u4E0D\u552F\u4E00\uFF0C\u975E\u7A7A\uFF09\uFF1Anot null",slug:"_3-2-1-4-3-\u975E\u7A7A\u7EA6\u675F-\u4E0D\u552F\u4E00-\u975E\u7A7A-not-null",children:[]},{level:6,title:"3.2.1.4.4 \u793A\u4F8B\uFF1A\u5458\u5DE5\u8868\u4F18\u5316",slug:"_3-2-1-4-4-\u793A\u4F8B-\u5458\u5DE5\u8868\u4F18\u5316",children:[]}]}]},{level:4,title:"3.2.2 \u67E5\u770B\u5DF2\u521B\u5EFA\u7684\u8868\u7684\u7ED3\u6784",slug:"_3-2-2-\u67E5\u770B\u5DF2\u521B\u5EFA\u7684\u8868\u7684\u7ED3\u6784",children:[]},{level:4,title:"3.2.3 \u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93\u5DF2\u521B\u5EFA\u7684\u6240\u6709\u8868\u7684\u540D\u79F0",slug:"_3-2-3-\u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93\u5DF2\u521B\u5EFA\u7684\u6240\u6709\u8868\u7684\u540D\u79F0",children:[]},{level:4,title:"3.2.4 \u4FEE\u6539\u8868",slug:"_3-2-4-\u4FEE\u6539\u8868",children:[{level:5,title:"3.2.4.1 \u8BED\u6CD5",slug:"_3-2-4-1-\u8BED\u6CD5",children:[]},{level:5,title:"3.2.4.2 \u65B0\u589E\u5B57\u6BB5",slug:"_3-2-4-2-\u65B0\u589E\u5B57\u6BB5",children:[]},{level:5,title:"3.2.4.3 \u4FEE\u6539\u5B57\u6BB5\u5C5E\u6027\uFF08\u5982\u4FEE\u6539 varchar \u7C7B\u578B\u5B57\u6BB5\u7684\u957F\u5EA6\uFF09",slug:"_3-2-4-3-\u4FEE\u6539\u5B57\u6BB5\u5C5E\u6027-\u5982\u4FEE\u6539-varchar-\u7C7B\u578B\u5B57\u6BB5\u7684\u957F\u5EA6",children:[]},{level:5,title:"3.2.4.4 \u4FEE\u6539\u5B57\u7B26\u540D",slug:"_3-2-4-4-\u4FEE\u6539\u5B57\u7B26\u540D",children:[]},{level:5,title:"3.2.4.5 \u5220\u9664\u5B57\u6BB5",slug:"_3-2-4-5-\u5220\u9664\u5B57\u6BB5",children:[]},{level:5,title:"3.2.4.6 \u4FEE\u6539\u8868\u540D",slug:"_3-2-4-6-\u4FEE\u6539\u8868\u540D",children:[]},{level:5,title:"3.2.4.7 \u4FEE\u6539\u8868\u7684\u5B57\u7B26\u96C6",slug:"_3-2-4-7-\u4FEE\u6539\u8868\u7684\u5B57\u7B26\u96C6",children:[]}]}]}]},{level:2,title:"4. DML \u8BED\u53E5",slug:"_4-dml-\u8BED\u53E5",children:[{level:3,title:"4.1 INSERT \u589E\u52A0\u8BED\u53E5",slug:"_4-1-insert-\u589E\u52A0\u8BED\u53E5",children:[{level:4,title:"4.1.1 \u8BED\u6CD5",slug:"_4-1-1-\u8BED\u6CD5",children:[]},{level:4,title:"4.1.2 \u4E3E\u4F8B",slug:"_4-1-2-\u4E3E\u4F8B",children:[{level:5,title:"4.1.2.1 \u65B0\u5EFA\u5458\u5DE5\u8868",slug:"_4-1-2-1-\u65B0\u5EFA\u5458\u5DE5\u8868",children:[]},{level:5,title:"4.1.2.1 \u4EE5\u5168\u5199\u5B57\u6BB5\u7684\u65B9\u5F0F\u63D2\u5165\u4E00\u6761\u8BB0\u5F55",slug:"_4-1-2-1-\u4EE5\u5168\u5199\u5B57\u6BB5\u7684\u65B9\u5F0F\u63D2\u5165\u4E00\u6761\u8BB0\u5F55",children:[]},{level:5,title:"4.1.2.2 \u4EE5\u53EA\u5199\u90E8\u5206\u5B57\u6BB5\u7684\u65B9\u5F0F\u63D2\u5165\u4E00\u6761\u8BB0\u5F55",slug:"_4-1-2-2-\u4EE5\u53EA\u5199\u90E8\u5206\u5B57\u6BB5\u7684\u65B9\u5F0F\u63D2\u5165\u4E00\u6761\u8BB0\u5F55",children:[]},{level:5,title:"4.1.2.3 \u4EE5\u53EA\u5199\u5B57\u6BB5\u503C\u7684\u65B9\u5F0F\u63D2\u5165\u4E00\u6761\u8BB0\u5F55\uFF08\u6240\u6709\u7684\u5B57\u6BB5\u503C\u90FD\u8981\u5199\uFF09",slug:"_4-1-2-3-\u4EE5\u53EA\u5199\u5B57\u6BB5\u503C\u7684\u65B9\u5F0F\u63D2\u5165\u4E00\u6761\u8BB0\u5F55-\u6240\u6709\u7684\u5B57\u6BB5\u503C\u90FD\u8981\u5199",children:[]}]},{level:4,title:"4.1.3 \u6CE8\u610F\u4E8B\u9879",slug:"_4-1-3-\u6CE8\u610F\u4E8B\u9879",children:[]}]},{level:3,title:"4.2 UPDATE \u66F4\u65B0\u8BED\u53E5",slug:"_4-2-update-\u66F4\u65B0\u8BED\u53E5",children:[{level:4,title:"4.2.1 \u8BED\u6CD5",slug:"_4-2-1-\u8BED\u6CD5",children:[]},{level:4,title:"4.2.2 \u4E3E\u4F8B",slug:"_4-2-2-\u4E3E\u4F8B",children:[{level:5,title:"4.2.2.1 \u5C06\u6240\u6709\u5458\u5DE5\u85AA\u6C34\u4FEE\u6539\u4E3A 5000 \u5143",slug:"_4-2-2-1-\u5C06\u6240\u6709\u5458\u5DE5\u85AA\u6C34\u4FEE\u6539\u4E3A-5000-\u5143",children:[]},{level:5,title:"4.2.2.2 \u5C06\u59D3\u540D\u4E3A zs \u7684\u5458\u5DE5\u85AA\u6C34\u4FEE\u6539\u4E3A 3000 \u5143",slug:"_4-2-2-2-\u5C06\u59D3\u540D\u4E3A-zs-\u7684\u5458\u5DE5\u85AA\u6C34\u4FEE\u6539\u4E3A-3000-\u5143",children:[]},{level:5,title:"4.2.2.3 \u5C06\u59D3\u540D\u4E3A zhangsan \u7684\u5458\u5DE5\u85AA\u6C34\u4FEE\u6539\u4E3A 6000 \u5143\uFF0Cjob \u6539\u4E3A ccc",slug:"_4-2-2-3-\u5C06\u59D3\u540D\u4E3A-zhangsan-\u7684\u5458\u5DE5\u85AA\u6C34\u4FEE\u6539\u4E3A-6000-\u5143-job-\u6539\u4E3A-ccc",children:[]},{level:5,title:"4.2.2.4 \u5C06 lisi \u7684\u85AA\u6C34\u5728\u539F\u6709\u57FA\u7840\u4E0A\u589E\u52A0 1000 \u5143",slug:"_4-2-2-4-\u5C06-lisi-\u7684\u85AA\u6C34\u5728\u539F\u6709\u57FA\u7840\u4E0A\u589E\u52A0-1000-\u5143",children:[]}]},{level:4,title:"4.2.3 \u6CE8\u610F\u4E8B\u9879",slug:"_4-2-3-\u6CE8\u610F\u4E8B\u9879",children:[]}]},{level:3,title:"4.3 DELETE \u5220\u9664\u8BED\u53E5",slug:"_4-3-delete-\u5220\u9664\u8BED\u53E5",children:[{level:4,title:"4.3.1 \u8BED\u6CD5",slug:"_4-3-1-\u8BED\u6CD5",children:[]},{level:4,title:"4.3.2 \u4E3E\u4F8B\uFF1A\u5220\u9664\u8868\u4E2D\u540D\u79F0\u4E3A zs \u7684\u8BB0\u5F55",slug:"_4-3-2-\u4E3E\u4F8B-\u5220\u9664\u8868\u4E2D\u540D\u79F0\u4E3A-zs-\u7684\u8BB0\u5F55",children:[]},{level:4,title:"4.3.3 \u6CE8\u610F\u4E8B\u9879",slug:"_4-3-3-\u6CE8\u610F\u4E8B\u9879",children:[]},{level:4,title:"4.3.4 \u5220\u9664\u8868\u4E2D\u6240\u6709\u8BB0\u5F55\uFF08delete & truncate \u7684\u533A\u522B\uFF09",slug:"_4-3-4-\u5220\u9664\u8868\u4E2D\u6240\u6709\u8BB0\u5F55-delete-truncate-\u7684\u533A\u522B",children:[]}]}]},{level:2,title:"5. DQL \u8BED\u53E5\uFF08\u5373 SELECT \u8BED\u53E5\uFF09",slug:"_5-dql-\u8BED\u53E5-\u5373-select-\u8BED\u53E5",children:[{level:3,title:"5.1 \u51C6\u5907\u4E00\u5F20\u5B66\u751F\u6210\u7EE9\u8868",slug:"_5-1-\u51C6\u5907\u4E00\u5F20\u5B66\u751F\u6210\u7EE9\u8868",children:[]},{level:3,title:"5.2 \u57FA\u672C\u7528\u6CD5",slug:"_5-2-\u57FA\u672C\u7528\u6CD5",children:[{level:4,title:"5.2.1 \u67E5\u8BE2\u8868\u4E2D\u6240\u6709\u5B66\u751F\u7684\u4FE1\u606F",slug:"_5-2-1-\u67E5\u8BE2\u8868\u4E2D\u6240\u6709\u5B66\u751F\u7684\u4FE1\u606F",children:[]},{level:4,title:"5.2.2 \u67E5\u8BE2\u8868\u4E2D\u6240\u6709\u5B66\u751F\u7684\u59D3\u540D\u548C\u5BF9\u5E94\u7684\u82F1\u8BED\u6210\u7EE9",slug:"_5-2-2-\u67E5\u8BE2\u8868\u4E2D\u6240\u6709\u5B66\u751F\u7684\u59D3\u540D\u548C\u5BF9\u5E94\u7684\u82F1\u8BED\u6210\u7EE9",children:[]},{level:4,title:"5.2.3 \u8FC7\u6EE4\u8868\u4E2D\u91CD\u590D\u6570\u636E\uFF08distinct\uFF09",slug:"_5-2-3-\u8FC7\u6EE4\u8868\u4E2D\u91CD\u590D\u6570\u636E-distinct",children:[]}]},{level:3,title:"5.3 \u901A\u8FC7 as \u8D77\u522B\u540D",slug:"_5-3-\u901A\u8FC7-as-\u8D77\u522B\u540D",children:[{level:4,title:"5.3.1 \u5728\u6240\u6709\u5B66\u751F\u5206\u6570\u4E0A\u52A05\u5206\u7279\u957F\u5206",slug:"_5-3-1-\u5728\u6240\u6709\u5B66\u751F\u5206\u6570\u4E0A\u52A05\u5206\u7279\u957F\u5206",children:[]},{level:4,title:"5.3.2 \u7EDF\u8BA1\u6BCF\u4E2A\u5B66\u751F\u7684\u603B\u5206",slug:"_5-3-2-\u7EDF\u8BA1\u6BCF\u4E2A\u5B66\u751F\u7684\u603B\u5206",children:[]},{level:4,title:"5.3.3 \u4F7F\u7528\u522B\u540D\u8868\u793A\u5B66\u751F\u5206\u6570",slug:"_5-3-3-\u4F7F\u7528\u522B\u540D\u8868\u793A\u5B66\u751F\u5206\u6570",children:[]}]},{level:3,title:"5.4 \u4F7F\u7528 where \u5B50\u53E5\uFF0C\u8FDB\u884C\u8FC7\u6EE4\u67E5\u8BE2",slug:"_5-4-\u4F7F\u7528-where-\u5B50\u53E5-\u8FDB\u884C\u8FC7\u6EE4\u67E5\u8BE2",children:[{level:4,title:"5.4.1 \u67E5\u8BE2\u59D3\u540D\u4E3A\u5F20\u4E09\u7684\u5B66\u751F\u6210\u7EE9",slug:"_5-4-1-\u67E5\u8BE2\u59D3\u540D\u4E3A\u5F20\u4E09\u7684\u5B66\u751F\u6210\u7EE9",children:[]},{level:4,title:"5.4.2 \u67E5\u8BE2\u82F1\u8BED\u6210\u7EE9\u5927\u4E8E90\u5206\u7684\u540C\u5B66",slug:"_5-4-2-\u67E5\u8BE2\u82F1\u8BED\u6210\u7EE9\u5927\u4E8E90\u5206\u7684\u540C\u5B66",children:[]},{level:4,title:"5.4.3 \u67E5\u8BE2\u603B\u5206\u5927\u4E8E265\u5206\u7684\u6240\u6709\u540C\u5B66",slug:"_5-4-3-\u67E5\u8BE2\u603B\u5206\u5927\u4E8E265\u5206\u7684\u6240\u6709\u540C\u5B66",children:[]}]},{level:3,title:"5.5 between-and\u3001and\u3001or\u3001in\u3001like \u5728 where \u5B50\u53E5\u4E2D\u7684\u4F7F\u7528",slug:"_5-5-between-and\u3001and\u3001or\u3001in\u3001like-\u5728-where-\u5B50\u53E5\u4E2D\u7684\u4F7F\u7528",children:[{level:4,title:"5.5.1 \u67E5\u8BE2\u82F1\u8BED\u5206\u6570\u5728 80\uFF0D90 \u4E4B\u95F4\u7684\u540C\u5B66",slug:"_5-5-1-\u67E5\u8BE2\u82F1\u8BED\u5206\u6570\u5728-80-90-\u4E4B\u95F4\u7684\u540C\u5B66",children:[]},{level:4,title:"5.5.2 \u67E5\u8BE2\u6570\u5B66\u5206\u6570\u4E3A 92\u300193\u300195 \u7684\u540C\u5B66",slug:"_5-5-2-\u67E5\u8BE2\u6570\u5B66\u5206\u6570\u4E3A-92\u300193\u300195-\u7684\u540C\u5B66",children:[]},{level:4,title:"5.5.3 \u67E5\u8BE2\u6240\u6709\u59D3\u5F20\u7684\u5B66\u751F\u6210\u7EE9",slug:"_5-5-3-\u67E5\u8BE2\u6240\u6709\u59D3\u5F20\u7684\u5B66\u751F\u6210\u7EE9",children:[]},{level:4,title:"5.5.4 \u67E5\u8BE2\u6570\u5B66\u5206 >90\uFF0C\u8BED\u6587\u5206 >90 \u7684\u540C\u5B66",slug:"_5-5-4-\u67E5\u8BE2\u6570\u5B66\u5206-90-\u8BED\u6587\u5206-90-\u7684\u540C\u5B66",children:[]},{level:4,title:"5.5.5 \u6CE8\u610F\u4E8B\u9879",slug:"_5-5-5-\u6CE8\u610F\u4E8B\u9879",children:[]}]},{level:3,title:"5.6 \u4F7F\u7528 order by \u5173\u952E\u5B57\u5BF9\u67E5\u8BE2\u7684\u7ED3\u679C\u8FDB\u884C\u6392\u5E8F\u8F93\u51FA",slug:"_5-6-\u4F7F\u7528-order-by-\u5173\u952E\u5B57\u5BF9\u67E5\u8BE2\u7684\u7ED3\u679C\u8FDB\u884C\u6392\u5E8F\u8F93\u51FA",children:[{level:4,title:"5.6.1 \u5BF9\u6570\u5B66\u6210\u7EE9\u964D\u5E8F\u6392\u5E8F\u540E\u8F93\u51FA",slug:"_5-6-1-\u5BF9\u6570\u5B66\u6210\u7EE9\u964D\u5E8F\u6392\u5E8F\u540E\u8F93\u51FA",children:[]},{level:4,title:"5.6.2 \u5BF9\u603B\u5206\u6392\u5E8F\u6309\u4ECE\u9AD8\u5230\u4F4E\u7684\u987A\u5E8F\u8F93\u51FA",slug:"_5-6-2-\u5BF9\u603B\u5206\u6392\u5E8F\u6309\u4ECE\u9AD8\u5230\u4F4E\u7684\u987A\u5E8F\u8F93\u51FA",children:[]},{level:4,title:"5.6.3 \u5BF9\u59D3\u5F20\u7684\u5B66\u751F\u6210\u7EE9\u6392\u5E8F\u8F93\u51FA",slug:"_5-6-3-\u5BF9\u59D3\u5F20\u7684\u5B66\u751F\u6210\u7EE9\u6392\u5E8F\u8F93\u51FA",children:[]},{level:4,title:"5.6.4 \u6CE8\u610F\u4E8B\u9879",slug:"_5-6-4-\u6CE8\u610F\u4E8B\u9879",children:[]}]},{level:3,title:"5.7 \u4F7F\u7528\u805A\u5408\u51FD\u6570",slug:"_5-7-\u4F7F\u7528\u805A\u5408\u51FD\u6570",children:[{level:4,title:"5.7.1 \u7EDF\u8BA1\u884C\u6570\uFF08\u8BB0\u5F55\u4E2A\u6570\uFF09\uFF1Acount",slug:"_5-7-1-\u7EDF\u8BA1\u884C\u6570-\u8BB0\u5F55\u4E2A\u6570-count",children:[{level:5,title:"5.7.1.1 \u7EDF\u8BA1\u4E00\u4E2A\u73ED\u7EA7\u5171\u6709\u591A\u5C11\u5B66\u751F",slug:"_5-7-1-1-\u7EDF\u8BA1\u4E00\u4E2A\u73ED\u7EA7\u5171\u6709\u591A\u5C11\u5B66\u751F",children:[]},{level:5,title:"5.7.1.2 \u7EDF\u8BA1\u6570\u5B66\u6210\u7EE9\u5927\u4E8E 90 \u7684\u5B66\u751F\u6709\u591A\u5C11\u4E2A",slug:"_5-7-1-2-\u7EDF\u8BA1\u6570\u5B66\u6210\u7EE9\u5927\u4E8E-90-\u7684\u5B66\u751F\u6709\u591A\u5C11\u4E2A",children:[]},{level:5,title:"5.7.1.3 \u7EDF\u8BA1\u603B\u5206\u5927\u4E8E 275 \u7684\u4EBA\u6570\u6709\u591A\u5C11",slug:"_5-7-1-3-\u7EDF\u8BA1\u603B\u5206\u5927\u4E8E-275-\u7684\u4EBA\u6570\u6709\u591A\u5C11",children:[]}]},{level:4,title:"5.7.2 \u6C42\u548C\u8FD0\u7B97\uFF1Asum",slug:"_5-7-2-\u6C42\u548C\u8FD0\u7B97-sum",children:[{level:5,title:"5.7.2.1 \u7EDF\u8BA1\u4E00\u4E2A\u73ED\u7EA7\u6570\u5B66\u603B\u6210\u7EE9",slug:"_5-7-2-1-\u7EDF\u8BA1\u4E00\u4E2A\u73ED\u7EA7\u6570\u5B66\u603B\u6210\u7EE9",children:[]},{level:5,title:"5.7.2.2 \u7EDF\u8BA1\u4E00\u4E2A\u73ED\u7EA7\u8BED\u6587\u3001\u82F1\u8BED\u3001\u6570\u5B66\u5404\u79D1\u7684\u603B\u6210\u7EE9",slug:"_5-7-2-2-\u7EDF\u8BA1\u4E00\u4E2A\u73ED\u7EA7\u8BED\u6587\u3001\u82F1\u8BED\u3001\u6570\u5B66\u5404\u79D1\u7684\u603B\u6210\u7EE9",children:[]},{level:5,title:"5.7.2.3 \u7EDF\u8BA1\u4E00\u4E2A\u73ED\u7EA7\u8BED\u6587\u3001\u82F1\u8BED\u3001\u6570\u5B66\u7684\u6210\u7EE9\u603B\u548C",slug:"_5-7-2-3-\u7EDF\u8BA1\u4E00\u4E2A\u73ED\u7EA7\u8BED\u6587\u3001\u82F1\u8BED\u3001\u6570\u5B66\u7684\u6210\u7EE9\u603B\u548C",children:[]},{level:5,title:"5.7.2.4 \u7EDF\u8BA1\u4E00\u4E2A\u73ED\u7EA7\u8BED\u6587\u6210\u7EE9\u5E73\u5747\u5206",slug:"_5-7-2-4-\u7EDF\u8BA1\u4E00\u4E2A\u73ED\u7EA7\u8BED\u6587\u6210\u7EE9\u5E73\u5747\u5206",children:[]},{level:5,title:"5.7.2.5 \u6CA1\u6709 sum(*) \u8FD9\u79CD\u8BED\u6CD5\uFF01",slug:"_5-7-2-5-\u6CA1\u6709-sum-\u8FD9\u79CD\u8BED\u6CD5",children:[]}]},{level:4,title:"5.7.3 \u6C42\u5E73\u5747\u503C\uFF1Aavg",slug:"_5-7-3-\u6C42\u5E73\u5747\u503C-avg",children:[{level:5,title:"5.7.3.1 \u6C42\u4E00\u4E2A\u73ED\u7EA7\u6570\u5B66\u5E73\u5747\u5206",slug:"_5-7-3-1-\u6C42\u4E00\u4E2A\u73ED\u7EA7\u6570\u5B66\u5E73\u5747\u5206",children:[]},{level:5,title:"5.7.3.2 \u6C42\u4E00\u4E2A\u73ED\u7EA7\u603B\u5206\u5E73\u5747\u5206",slug:"_5-7-3-2-\u6C42\u4E00\u4E2A\u73ED\u7EA7\u603B\u5206\u5E73\u5747\u5206",children:[]}]},{level:4,title:"5.7.4 \u6C42\u6700\u5927\u503C/\u6700\u5C0F\u503C\uFF1Amax/min",slug:"_5-7-4-\u6C42\u6700\u5927\u503C-\u6700\u5C0F\u503C-max-min",children:[{level:5,title:"5.7.4.1 \u6C42\u73ED\u7EA7\u6700\u9AD8\u5206\u548C\u6700\u4F4E\u5206",slug:"_5-7-4-1-\u6C42\u73ED\u7EA7\u6700\u9AD8\u5206\u548C\u6700\u4F4E\u5206",children:[]}]}]},{level:3,title:"5.8 \u4F7F\u7528 group by \u8FDB\u884C\u5206\u7EC4 & \u4F7F\u7528 having \u5BF9\u5206\u7EC4\u7ED3\u679C\u8FDB\u884C\u7B5B\u9009",slug:"_5-8-\u4F7F\u7528-group-by-\u8FDB\u884C\u5206\u7EC4-\u4F7F\u7528-having-\u5BF9\u5206\u7EC4\u7ED3\u679C\u8FDB\u884C\u7B5B\u9009",children:[{level:4,title:"5.8.1 \u51C6\u5907\u4E00\u5F20\u8BA2\u5355\u8868",slug:"_5-8-1-\u51C6\u5907\u4E00\u5F20\u8BA2\u5355\u8868",children:[]},{level:4,title:"5.8.2 \u5BF9\u8BA2\u5355\u8868\u4E2D\u5546\u54C1\u5F52\u7C7B\u540E\uFF0C\u663E\u793A\u6BCF\u4E00\u7C7B\u5546\u54C1\u7684\u603B\u4EF7",slug:"_5-8-2-\u5BF9\u8BA2\u5355\u8868\u4E2D\u5546\u54C1\u5F52\u7C7B\u540E-\u663E\u793A\u6BCF\u4E00\u7C7B\u5546\u54C1\u7684\u603B\u4EF7",children:[]},{level:4,title:"5.8.3 \u67E5\u8BE2\u8D2D\u4E70\u4E86\u51E0\u7C7B\u5546\u54C1\uFF0C\u5E76\u4E14\u6BCF\u7C7B\u603B\u4EF7\u5927\u4E8E100\u7684\u5546\u54C1",slug:"_5-8-3-\u67E5\u8BE2\u8D2D\u4E70\u4E86\u51E0\u7C7B\u5546\u54C1-\u5E76\u4E14\u6BCF\u7C7B\u603B\u4EF7\u5927\u4E8E100\u7684\u5546\u54C1",children:[]}]},{level:3,title:"5.9 SELECT \u8BED\u53E5\u7684\u6CE8\u610F\u4E8B\u9879",slug:"_5-9-select-\u8BED\u53E5\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:4,title:"5.9.1 where \u7B5B\u9009\u4E0E having \u7B5B\u9009\u7684\u533A\u522B",slug:"_5-9-1-where-\u7B5B\u9009\u4E0E-having-\u7B5B\u9009\u7684\u533A\u522B",children:[]},{level:4,title:"5.9.2 SELECT \u8BED\u53E5\u7684\u4E66\u5199\u987A\u5E8F & \u89E3\u6790\u987A\u5E8F",slug:"_5-9-2-select-\u8BED\u53E5\u7684\u4E66\u5199\u987A\u5E8F-\u89E3\u6790\u987A\u5E8F",children:[]}]}]},{level:2,title:"6. \u591A\u8868\u8BBE\u8BA1",slug:"_6-\u591A\u8868\u8BBE\u8BA1",children:[{level:3,title:"6.1 \u591A\u8868\u8BBE\u8BA1\u7684\u539F\u5219",slug:"_6-1-\u591A\u8868\u8BBE\u8BA1\u7684\u539F\u5219",children:[]},{level:3,title:"6.2 \u591A\u8868\u8BBE\u8BA1\u7684\u65B9\u5F0F\uFF1A\u6DFB\u52A0\u5916\u952E\u7EA6\u675F",slug:"_6-2-\u591A\u8868\u8BBE\u8BA1\u7684\u65B9\u5F0F-\u6DFB\u52A0\u5916\u952E\u7EA6\u675F",children:[{level:4,title:"6.2.1 \u51C6\u5907\u4E00\u5F20\u5458\u5DE5\u8868\u548C\u90E8\u95E8\u8868",slug:"_6-2-1-\u51C6\u5907\u4E00\u5F20\u5458\u5DE5\u8868\u548C\u90E8\u95E8\u8868",children:[]},{level:4,title:"6.2.2 \u5728\u591A\u65B9\u8868\u4E2D\u589E\u52A0\u5916\u952E\u7EA6\u675F\u5B57\u6BB5",slug:"_6-2-2-\u5728\u591A\u65B9\u8868\u4E2D\u589E\u52A0\u5916\u952E\u7EA6\u675F\u5B57\u6BB5",children:[]},{level:4,title:"6.2.3 \u5728\u4E24\u4E2A\u8868\u4E4B\u95F4\u5EFA\u7ACB\u5916\u952E\u7EA6\u675F\u5173\u7CFB\uFF08foreign key\uFF09",slug:"_6-2-3-\u5728\u4E24\u4E2A\u8868\u4E4B\u95F4\u5EFA\u7ACB\u5916\u952E\u7EA6\u675F\u5173\u7CFB-foreign-key",children:[]},{level:4,title:"6.2.4 \u5B58\u5728\u5916\u952E\u7EA6\u675F\u5173\u7CFB\u65F6\u5220\u9664\u8BB0\u5F55\u7684\u6CE8\u610F\u4E8B\u9879",slug:"_6-2-4-\u5B58\u5728\u5916\u952E\u7EA6\u675F\u5173\u7CFB\u65F6\u5220\u9664\u8BB0\u5F55\u7684\u6CE8\u610F\u4E8B\u9879",children:[]}]},{level:3,title:"6.3 \u591A\u8868\u67E5\u8BE2\uFF1A\u7B1B\u5361\u5C14\u79EF(\u591A\u8868\u67E5\u8BE2\u65F6\u7EC4\u5408\u7684\u4E58\u79EF)",slug:"_6-3-\u591A\u8868\u67E5\u8BE2-\u7B1B\u5361\u5C14\u79EF-\u591A\u8868\u67E5\u8BE2\u65F6\u7EC4\u5408\u7684\u4E58\u79EF",children:[]}]}],git:{createdTime:1657102049e3,updatedTime:1657102049e3,contributors:[{name:"zengk",email:"zengkaiqiang562@163.com",commits:1}]},readingTime:{minutes:12.77,words:3830},filePathRelative:"zkq/database/sql.md"};export{l as data};
