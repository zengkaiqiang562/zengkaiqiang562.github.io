import{_ as n,r as i,c as r,a as o,b as e,F as l,d as s,e as a,o as c}from"./app.2a01fc36.js";var h="/assets/paxos-made-simple.64103a59.png";const p={},d=o("h2",{id:"\u80CC\u666F",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u80CC\u666F","aria-hidden":"true"},"#"),s(" \u80CC\u666F")],-1),_=o("h2",{id:"paxos-\u7B97\u6CD5\u4ECB\u7ECD",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#paxos-\u7B97\u6CD5\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" Paxos \u7B97\u6CD5\u4ECB\u7ECD")],-1),x=s("Paxos \u7B97\u6CD5\u662F Leslie Lamport\uFF08"),P={href:"https://zh.wikipedia.org/wiki/%E8%8E%B1%E6%96%AF%E5%88%A9%C2%B7%E5%85%B0%E4%BC%AF%E7%89%B9",target:"_blank",rel:"noopener noreferrer"},u=s("\u83B1\u65AF\u5229\xB7\u5170\u4F2F\u7279"),g=s("\uFF09\u5728 "),m=o("strong",null,"1990",-1),f=s(" \u5E74\u63D0\u51FA\u4E86\u4E00\u79CD\u5206\u5E03\u5F0F\u7CFB\u7EDF "),b=o("strong",null,"\u5171\u8BC6",-1),B=s(" \u7B97\u6CD5\u3002\u8FD9\u4E5F\u662F\u7B2C\u4E00\u4E2A\u88AB\u8BC1\u660E\u5B8C\u5907\u7684\u5171\u8BC6\u7B97\u6CD5\uFF08\u524D\u63D0\u662F\u4E0D\u5B58\u5728\u62DC\u5360\u5EAD\u5C06\u519B\u95EE\u9898\uFF0C\u4E5F\u5C31\u662F\u6CA1\u6709\u6076\u610F\u8282\u70B9\uFF09\u3002"),k=o("p",null,"\u4E3A\u4E86\u4ECB\u7ECD Paxos \u7B97\u6CD5\uFF0C\u5170\u4F2F\u7279\u4E13\u95E8\u5199\u4E86\u4E00\u7BC7\u5E7D\u9ED8\u98CE\u8DA3\u7684\u8BBA\u6587\u3002\u5728\u8FD9\u7BC7\u8BBA\u6587\u4E2D\uFF0C\u4ED6\u865A\u62DF\u4E86\u4E00\u4E2A\u53EB\u505A Paxos \u7684\u5E0C\u814A\u57CE\u90A6\u6765\u66F4\u5F62\u8C61\u5316\u5730\u4ECB\u7ECD Paxos \u7B97\u6CD5\u3002",-1),E=o("p",null,"\u4E0D\u8FC7\uFF0C\u5BA1\u7A3F\u4EBA\u5E76\u4E0D\u8BA4\u53EF\u8FD9\u7BC7\u8BBA\u6587\u7684\u5E7D\u9ED8\u3002\u4E8E\u662F\uFF0C\u4ED6\u4EEC\u5C31\u7ED9\u5170\u4F2F\u7279\u8BF4\uFF1A\u201C\u5982\u679C\u4F60\u60F3\u8981\u6210\u529F\u53D1\u8868\u8FD9\u7BC7\u8BBA\u6587\u7684\u8BDD\uFF0C\u5FC5\u987B\u5220\u9664\u6240\u6709 Paxos \u76F8\u5173\u7684\u6545\u4E8B\u80CC\u666F\u201D\u3002\u5170\u4F2F\u7279\u4E00\u542C\u5C31\u4E0D\u5F00\u5FC3\u4E86\uFF1A\u201C\u6211\u51ED\u4EC0\u4E48\u4FEE\u6539\u554A\uFF0C\u4F60\u4EEC\u8FD9\u4E9B\u5BA1\u7A3F\u4EBA\u5C31\u662F\u7F3A\u4E4F\u5E7D\u9ED8\u7EC6\u80DE\uFF0C\u53D1\u4E0D\u4E86\u5C31\u4E0D\u53D1\u4E86\u5457\uFF01\u201D\u3002",-1),w=o("p",null,"\u4E8E\u662F\u4E4E\uFF0C\u63D0\u51FA Paxos \u7B97\u6CD5\u7684\u90A3\u7BC7\u8BBA\u6587\u5728\u5F53\u65F6\u5E76\u6CA1\u6709\u88AB\u6210\u529F\u53D1\u8868\u3002",-1),M=s("\u76F4\u5230 1998 \u5E74\uFF0C\u7CFB\u7EDF\u7814\u7A76\u4E2D\u5FC3 (Systems Research Center\uFF0CSRC\uFF09\u7684\u4E24\u4E2A\u6280\u672F\u7814\u7A76\u5458\u9700\u8981\u627E\u4E00\u4E9B\u5408\u9002\u7684\u5206\u5E03\u5F0F\u7B97\u6CD5\u6765\u670D\u52A1\u4ED6\u4EEC\u6B63\u5728\u6784\u5EFA\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF0CPaxos \u7B97\u6CD5\u521A\u597D\u53EF\u4EE5\u89E3\u51B3\u4ED6\u4EEC\u7684\u90E8\u5206\u9700\u6C42\u3002\u56E0\u6B64\uFF0C\u5170\u4F2F\u7279\u5C31\u628A\u8BBA\u6587\u53D1\u7ED9\u4E86\u4ED6\u4EEC\u3002\u5728\u770B\u4E86\u8BBA\u6587\u4E4B\u540E\uFF0C\u8FD9\u4FE9\u5927\u4F6C\u89C9\u5F97\u8BBA\u6587\u8FD8\u662F\u633A\u4E0D\u9519\u7684\u3002\u4E8E\u662F\uFF0C\u5170\u4F2F\u7279\u5728 "),y=o("strong",null,"1998",-1),C=s(" \u5E74\u91CD\u65B0\u53D1\u8868\u8BBA\u6587 "),S={href:"http://lamport.azurewebsites.net/pubs/lamport-paxos.pdf",target:"_blank",rel:"noopener noreferrer"},v=s("\u300AThe Part-Time Parliament\u300B"),A=s("\u3002"),z=s("\u8BBA\u6587\u53D1\u8868\u4E4B\u540E\uFF0C\u5404\u8DEF\u5B66\u8005\u76F4\u547C\u770B\u4E0D\u61C2\uFF0C\u8A00\u8BED\u4E2D\u8FD8\u7565\u663E\u8C03\u4F83\u4E4B\u610F\u3002\u8FD9\u8C01\u5FCD\u5F97\u4E86\uFF0C\u5728 "),F=o("strong",null,"2001",-1),R=s(" \u5E74\u7684\u65F6\u5019\uFF0C\u5170\u4F2F\u7279\u4E13\u95E8\u53C8\u5199\u4E86\u4E00\u7BC7 "),T={href:"http://lamport.azurewebsites.net/pubs/paxos-simple.pdf",target:"_blank",rel:"noopener noreferrer"},L=s("\u300APaxos Made Simple\u300B"),V=s(" \u7684\u8BBA\u6587\u6765\u7B80\u5316\u5BF9 Paxos \u7684\u4ECB\u7ECD\uFF0C\u4E3B\u8981\u8BB2\u8FF0\u4E24\u9636\u6BB5\u5171\u8BC6\u534F\u8BAE\u90E8\u5206\uFF0C\u987A\u4FBF\u8FD8\u4E0D\u5FD8\u5632\u8BBD\u4E00\u4E0B\u8FD9\u7FA4\u5B66\u8005\u3002"),N=a('<p>\u300APaxos Made Simple\u300B\u8FD9\u7BC7\u8BBA\u6587\u5C31 14 \u9875\uFF0C\u76F8\u6BD4\u4E8E \u300AThe Part-Time Parliament\u300B\u768433 \u9875\u7CBE\u7B80\u4E86\u4E0D\u5C11\u3002\u6700\u5173\u952E\u7684\u662F\u8FD9\u7BC7\u8BBA\u6587\u7684\u6458\u8981\u5C31\u4E00\u53E5\u8BDD\uFF1A</p><p><img src="'+h+'" alt="" loading="lazy"></p><blockquote><p>The Paxos algorithm, when presented in plain English, is very simple.</p></blockquote><p>\u7FFB\u8BD1\u8FC7\u6765\u7684\u610F\u601D\u5927\u6982\u5C31\u662F\uFF1A\u5F53\u6211\u7528\u65E0\u4FEE\u9970\u7684\u82F1\u6587\u6765\u63CF\u8FF0\u65F6\uFF0CPaxos \u7B97\u6CD5\u771F\u5FC3\u7B80\u5355\uFF01</p><p>\u6709\u6CA1\u6709\u611F\u89C9\u5230\u6765\u81EA\u5170\u4F2F\u7279\u5927\u4F6C\u6EE1\u6EE1\u5730\u5632\u8BBD\u7684\u5473\u9053\uFF1F</p><p>\u5170\u4F2F\u7279\u5F53\u65F6\u63D0\u51FA\u7684 Paxos \u7B97\u6CD5\u4E3B\u8981\u5305\u542B 2 \u4E2A\u90E8\u5206:</p><ul><li><strong>Basic Paxos \u7B97\u6CD5</strong> \uFF1A \u63CF\u8FF0\u7684\u662F\u591A\u8282\u70B9\u4E4B\u95F4\u5982\u4F55\u5C31\u67D0\u4E2A\u503C(\u63D0\u6848 Value)\u8FBE\u6210\u5171\u8BC6\u3002</li><li><strong>Multi-Paxos \u601D\u60F3</strong> \uFF1A \u63CF\u8FF0\u7684\u662F\u6267\u884C\u591A\u4E2A Basic Paxos \u5B9E\u4F8B\uFF0C\u5C31\u4E00\u7CFB\u5217\u503C\u8FBE\u6210\u5171\u8BC6\u3002Multi-Paxos \u8BF4\u767D\u4E86\u5C31\u662F\u6267\u884C\u591A\u6B21 Basic Paxos \uFF0C\u6838\u5FC3\u8FD8\u662F Basic Paxos \u3002</li></ul>',7),W=s("\u7531\u4E8E Paxos \u7B97\u6CD5\u5728\u56FD\u9645\u4E0A\u88AB\u516C\u8BA4\u7684\u975E\u5E38\u96BE\u4EE5\u7406\u89E3\u548C\u5B9E\u73B0\uFF0C\u56E0\u6B64\u4E0D\u65AD\u6709\u4EBA\u5C1D\u8BD5\u7B80\u5316\u8FD9\u4E00\u7B97\u6CD5\u3002\u5230\u4E862013 \u5E74\u624D\u8BDE\u751F\u4E86\u4E00\u4E2A\u6BD4 Paxos \u7B97\u6CD5\u66F4\u6613\u7406\u89E3\u548C\u5B9E\u73B0\u7684\u5171\u8BC6\u7B97\u6CD5\u2014"),Z={href:"https://javaguide.cn/distributed-system/theorem&algorithm&protocol/raft-algorithm.html",target:"_blank",rel:"noopener noreferrer"},q=s("Raft \u7B97\u6CD5"),I=s(" \u3002\u66F4\u5177\u4F53\u70B9\u6765\u8BF4\uFF0CRaft \u662FMulti-Paxos\u7684\u4E00\u4E2A\u53D8\u79CD\uFF0C\u5176\u7B80\u5316\u4E86 Multi-Paxos \u7684\u601D\u60F3\uFF0C\u53D8\u5F97\u66F4\u5BB9\u6613\u88AB\u7406\u89E3\u4EE5\u53CA\u5DE5\u7A0B\u5B9E\u73B0\u3002"),j=a('<p>\u9488\u5BF9\u6CA1\u6709\u6076\u610F\u8282\u70B9\u7684\u60C5\u51B5\uFF0C\u9664\u4E86 Raft \u7B97\u6CD5\u4E4B\u5916\uFF0C\u5F53\u524D\u6700\u5E38\u7528\u7684\u4E00\u4E9B\u5171\u8BC6\u7B97\u6CD5\u6BD4\u5982 ZAB \u534F\u8BAE\u3001 Fast Paxos \u7B97\u6CD5\u90FD\u662F\u57FA\u4E8E Paxos \u7B97\u6CD5\u6539\u8FDB\u7684\u3002</p><p>\u9488\u5BF9\u5B58\u5728\u6076\u610F\u8282\u70B9\u7684\u60C5\u51B5\uFF0C\u4E00\u822C\u4F7F\u7528\u7684\u662F\u5DE5\u4F5C\u91CF\u8BC1\u660E\uFF08POW\uFF0CProof-of-Work\uFF09\u3001\u6743\u76CA\u8BC1\u660E\uFF08PoS\uFF0CProof-of-Stake \uFF09\u7B49\u5171\u8BC6\u7B97\u6CD5\u3002\u8FD9\u7C7B\u5171\u8BC6\u7B97\u6CD5\u6700\u5178\u578B\u7684\u5E94\u7528\u5C31\u662F\u533A\u5757\u94FE\uFF0C\u5C31\u6BD4\u5982\u8BF4\u524D\u6BB5\u65F6\u95F4\u4EE5\u592A\u574A\u5B98\u65B9\u5BA3\u5E03\u5176\u5171\u8BC6\u673A\u5236\u6B63\u5728\u4ECE\u5DE5\u4F5C\u91CF\u8BC1\u660E(PoW)\u8F6C\u53D8\u4E3A\u6743\u76CA\u8BC1\u660E(PoS)\u3002</p><p>\u533A\u5757\u94FE\u7CFB\u7EDF\u4F7F\u7528\u7684\u5171\u8BC6\u7B97\u6CD5\u9700\u8981\u89E3\u51B3\u7684\u6838\u5FC3\u95EE\u9898\u662F <strong>\u62DC\u5360\u5EAD\u5C06\u519B\u95EE\u9898</strong> \uFF0C\u8FD9\u548C\u6211\u4EEC\u65E5\u5E38\u63A5\u89E6\u5230\u7684 ZooKeeper\u3001Etcd\u3001Consul \u7B49\u5206\u5E03\u5F0F\u4E2D\u95F4\u4EF6\u4E0D\u592A\u4E00\u6837\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u6765\u5BF9 Paxos \u7B97\u6CD5\u7684\u5B9A\u4E49\u505A\u4E00\u4E2A\u603B\u7ED3\uFF1A</p><ul><li>Paxos \u7B97\u6CD5\u662F\u5170\u4F2F\u7279\u5728 <strong>1990</strong> \u5E74\u63D0\u51FA\u4E86\u4E00\u79CD\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5171\u8BC6\u7B97\u6CD5\u3002</li><li>\u5170\u4F2F\u7279\u5F53\u65F6\u63D0\u51FA\u7684 Paxos \u7B97\u6CD5\u4E3B\u8981\u5305\u542B 2 \u4E2A\u90E8\u5206:Basic Paxos \u7B97\u6CD5\u548CMulti-Paxos \u601D\u60F3\u3002</li><li>Raft \u7B97\u6CD5\u3001ZAB \u534F\u8BAE\u3001 Fast Paxos \u7B97\u6CD5\u90FD\u662F\u57FA\u4E8E Paxos \u7B97\u6CD5\u6539\u8FDB\u800C\u6765\u3002\u3002</li></ul><h2 id="\u4E00\u81F4\u6027-consistency-\u4E0E\u5171\u8BC6-consensus" tabindex="-1"><a class="header-anchor" href="#\u4E00\u81F4\u6027-consistency-\u4E0E\u5171\u8BC6-consensus" aria-hidden="true">#</a> \u4E00\u81F4\u6027\uFF08Consistency\uFF09\u4E0E\u5171\u8BC6\uFF08Consensus\uFF09</h2><p>\u5F88\u591A\u4EBA\u4F1A\u8BEF\u628A Paxos \u770B\u4F5C\u662F\u4E00\u81F4\u6027\u7B97\u6CD5\uFF0C\u8FD9\u5176\u5B9E\u662F\u4E00\u4E2A\u975E\u5E38\u5927\u7684\u8BEF\u533A\u3002</p><p>\u26A0\uFE0F\u6CE8\u610F\uFF1A<strong>Paxos \u4E0D\u662F\u4E00\u81F4\u6027\u7B97\u6CD5\u800C\u662F\u5171\u8BC6\u7B97\u6CD5\uFF0C\u4E00\u81F4\u6027\u548C\u5171\u8BC6\u5E76\u4E0D\u662F\u4E00\u4E2A\u6982\u5FF5\u3002</strong></p><h2 id="basic-paxos-\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#basic-paxos-\u7B97\u6CD5" aria-hidden="true">#</a> Basic Paxos \u7B97\u6CD5</h2><p>Basic Paxos \u4E2D\u5B58\u5728 3 \u4E2A\u91CD\u8981\u7684\u89D2\u8272\uFF1A</p><ol><li><strong>\u63D0\u8BAE\u8005\uFF08Proposer\uFF09</strong>\uFF1A\u4E5F\u53EF\u4EE5\u53EB\u505A\u534F\u8C03\u8005\uFF08coordinator\uFF09\uFF0C\u63D0\u8BAE\u8005\u8D1F\u8D23\u63A5\u53D7\u5BA2\u6237\u7AEF\u53D1\u8D77\u7684\u63D0\u8BAE\uFF0C\u7136\u540E\u5C1D\u8BD5\u8BA9\u63A5\u53D7\u8005\u63A5\u53D7\u8BE5\u63D0\u8BAE\uFF0C\u540C\u65F6\u4FDD\u8BC1\u5373\u4F7F\u591A\u4E2A\u63D0\u8BAE\u8005\u7684\u63D0\u8BAE\u4E4B\u95F4\u4EA7\u751F\u4E86\u51B2\u7A81\uFF0C\u90A3\u4E48\u7B97\u6CD5\u90FD\u80FD\u8FDB\u884C\u4E0B\u53BB\uFF1B</li><li><strong>\u63A5\u53D7\u8005\uFF08Acceptor\uFF09</strong>\uFF1A\u4E5F\u53EF\u4EE5\u53EB\u505A\u6295\u7968\u5458\uFF08voter\uFF09\uFF0C\u8D1F\u8D23\u5BF9\u63D0\u8BAE\u8005\u7684\u63D0\u8BAE\u6295\u7968\uFF0C\u540C\u65F6\u9700\u8981\u8BB0\u4F4F\u81EA\u5DF1\u7684\u6295\u7968\u5386\u53F2\uFF1B</li><li><strong>\u5B66\u4E60\u8005\uFF08Learner\uFF09</strong>\uFF1A\u5982\u679C\u6709\u8D85\u8FC7\u534A\u6570\u63A5\u53D7\u8005\u5C31\u67D0\u4E2A\u63D0\u8BAE\u8FBE\u6210\u4E86\u5171\u8BC6\uFF0C\u90A3\u4E48\u5B66\u4E60\u8005\u5C31\u9700\u8981\u63A5\u53D7\u8FD9\u4E2A\u63D0\u8BAE\uFF0C\u5E76\u5C31\u8BE5\u63D0\u8BAE\u4F5C\u51FA\u8FD0\u7B97\uFF0C\u7136\u540E\u5C06\u8FD0\u7B97\u7ED3\u679C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</li></ol><p><img src="https://img-blog.csdnimg.cn/20210603145613753.png" alt="" loading="lazy"></p><h2 id="multi-paxos-\u601D\u60F3" tabindex="-1"><a class="header-anchor" href="#multi-paxos-\u601D\u60F3" aria-hidden="true">#</a> Multi Paxos \u601D\u60F3</h2><p>\u56E0\u4E3A\u5170\u4F2F\u7279\u63D0\u5230\u7684 Multi-Paxos \u601D\u60F3\uFF0C\u7F3A\u5C11\u4EE3\u7801\u5B9E\u73B0\u7684\u5FC5\u8981\u7EC6\u8282(\u6BD4\u5982\u600E\u4E48\u9009\u4E3E\u9886\u5BFC\u8005)\uFF0C\u6240\u4EE5\u5728\u7406\u89E3\u4E0A\u6BD4\u8F83\u96BE\u3002</p><p>\u26A0\uFE0F<strong>\u6CE8\u610F</strong> \uFF1A Multi-Paxos \u53EA\u662F\u4E00\u79CD\u601D\u60F3\uFF0C\u8FD9\u79CD\u601D\u60F3\u7684\u6838\u5FC3\u5C31\u662F\u901A\u8FC7\u591A\u4E2A Basic Paxos \u5B9E\u4F8B\u5C31\u4E00\u7CFB\u5217\u503C\u8FBE\u6210\u5171\u8BC6\u3002</p><p>\u4E8C\u9636\u6BB5\u63D0\u4EA4\u662F\u8FBE\u6210\u5171\u8BC6\u5E38\u7528\u7684\u65B9\u5F0F\uFF0CBasic Paxos \u5C31\u662F\u901A\u8FC7\u4E8C\u9636\u6BB5\u63D0\u4EA4\u7684\u65B9\u5F0F\u6765\u8FBE\u6210\u5171\u8BC6\u3002Basic Paxos \u8FD8\u652F\u6301\u5BB9\u9519\uFF0C\u5C11\u4E8E\u4E00\u822C\u7684\u8282\u70B9\u51FA\u73B0\u6545\u969C\u65F6\uFF0C\u96C6\u7FA4\u4E5F\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ul><li>https://zh.wikipedia.org/wiki/Paxos</li><li>\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u7684\u4E00\u81F4\u6027\u4E0E\u5171\u8BC6\u7B97\u6CD5\uFF1Ahttp://www.xuyasong.com/?p=1970</li></ul>',18);function K(O,D){const t=i("ExternalLinkIcon");return c(),r(l,null,[d,_,o("p",null,[x,o("a",P,[u,e(t)]),g,m,f,b,B]),k,E,w,o("p",null,[M,y,C,o("a",S,[v,e(t)]),A]),o("p",null,[z,F,R,o("a",T,[L,e(t)]),V]),N,o("p",null,[W,o("a",Z,[q,e(t)]),I]),j],64)}var H=n(p,[["render",K],["__file","paxos-algorithm.html.vue"]]);export{H as default};
