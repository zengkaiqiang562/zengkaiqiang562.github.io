const e={key:"v-5c510a52",path:"/zkq/third-party-open-project/rxjava/operator.html",title:"\u64CD\u4F5C\u7B26\uFF08Operator\uFF09",lang:"zh-CN",frontmatter:{title:"\u64CD\u4F5C\u7B26\uFF08Operator\uFF09",category:["android","\u7B2C\u4E09\u65B9\u6846\u67B6"],tag:["android","\u7B2C\u4E09\u65B9\u6846\u67B6"],summary:'7. \u64CD\u4F5C\u7B26\r" \u53C2\u8003 https://github.com/ReactiveX/RxJava/wiki" \u5BF9\u4E8E Rx \u6765\u8BF4\uFF0CObservable \u548C Observer \u4EC5\u4EC5\u662F\u4E2A\u5F00\u59CB\uFF0C\u5B83\u4EEC\u672C\u8EAB\u4E0D\u8FC7\u662F\u6807\u51C6\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u4E00\u4E9B\u8F7B\u91CF\u7EA7\u6269\u5C55\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u66F4\u597D\u7684\u5904\u7406\u4E8B\u4EF6\u5E8F\u5217\u3002 Rx \u771F\u6B63\u5F3A\u5927\u7684\u5730\u65B9\u5728\u4E8E\u5B83\u7684\u64CD\u4F5C\u7B26\uFF0C\u64CD\u4F5C\u7B26\u8BA9\u4F60\u53EF\u4EE5\u53D8\u6362\u3001\u7EC4\u5408\u3001\u64CD\u7EB5\u548C\u5904\u7406 Observable \u53D1',head:[["meta",{property:"og:url",content:"https://zengkaiqiang562.github.io/zkq/third-party-open-project/rxjava/operator.html"}],["meta",{property:"og:site_name",content:"Android Guide"}],["meta",{property:"og:title",content:"\u64CD\u4F5C\u7B26\uFF08Operator\uFF09"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://zengkaiqiang562.github.io/"}],["meta",{property:"og:updated_time",content:"2022-07-07T15:59:00.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"\u64CD\u4F5C\u7B26\uFF08Operator\uFF09"}],["meta",{property:"article:tag",content:"android"}],["meta",{property:"article:tag",content:"\u7B2C\u4E09\u65B9\u6846\u67B6"}],["meta",{property:"article:modified_time",content:"2022-07-07T15:59:00.000Z"}]]},excerpt:"",headers:[{level:2,title:"7. \u64CD\u4F5C\u7B26",slug:"_7-\u64CD\u4F5C\u7B26",children:[{level:3,title:"7.1 \u521B\u5EFA\u64CD\u4F5C\u7B26",slug:"_7-1-\u521B\u5EFA\u64CD\u4F5C\u7B26",children:[{level:4,title:"7.1.1 create()",slug:"_7-1-1-create",children:[]},{level:4,title:"7.1.2 just()",slug:"_7-1-2-just",children:[]},{level:4,title:"7.1.3 fromArray()/fromCallable()/fromFuture()/fromIterable()",slug:"_7-1-3-fromarray-fromcallable-fromfuture-fromiterable",children:[]},{level:4,title:"7.1.4 defer()",slug:"_7-1-4-defer",children:[]},{level:4,title:"7.1.5 timer()",slug:"_7-1-5-timer",children:[]},{level:4,title:"7.1.6 interval()",slug:"_7-1-6-interval",children:[]},{level:4,title:"7.1.7 intervalRange()",slug:"_7-1-7-intervalrange",children:[]},{level:4,title:"7.1.8 range()",slug:"_7-1-8-range",children:[]},{level:4,title:"7.1.9 rangeLong()",slug:"_7-1-9-rangelong",children:[]},{level:4,title:"7.1.10 empty()/error()/nerver()",slug:"_7-1-10-empty-error-nerver",children:[]}]},{level:3,title:"7.2 \u8F6C\u6362\u64CD\u4F5C\u7B26",slug:"_7-2-\u8F6C\u6362\u64CD\u4F5C\u7B26",children:[{level:4,title:"7.2.1 map()",slug:"_7-2-1-map",children:[]},{level:4,title:"7.2.2 flatMap()",slug:"_7-2-2-flatmap",children:[]},{level:4,title:"7.2.3 concatMap()",slug:"_7-2-3-concatmap",children:[]},{level:4,title:"7.2.4 buffer()",slug:"_7-2-4-buffer",children:[]},{level:4,title:"7.2.5 groupBy()",slug:"_7-2-5-groupby",children:[]},{level:4,title:"7.2.6 scan()",slug:"_7-2-6-scan",children:[]},{level:4,title:"7.2.7 window()",slug:"_7-2-7-window",children:[]}]},{level:3,title:"7.3 \u7EC4\u5408\u64CD\u4F5C\u7B26",slug:"_7-3-\u7EC4\u5408\u64CD\u4F5C\u7B26",children:[{level:4,title:"7.3.1 concatWith()/concat()/concatArray()",slug:"_7-3-1-concatwith-concat-concatarray",children:[]},{level:4,title:"7.3.2 mergeWith()/merge()/mergeArray()",slug:"_7-3-2-mergewith-merge-mergearray",children:[]},{level:4,title:"7.3.3 concatArrayDelayError()/mergeArrayDelayError()",slug:"_7-3-3-concatarraydelayerror-mergearraydelayerror",children:[]},{level:4,title:"7.3.4 zip()",slug:"_7-3-4-zip",children:[]},{level:4,title:"7.3.5 combineLatest()",slug:"_7-3-5-combinelatest",children:[]},{level:4,title:"7.3.6 reduce()",slug:"_7-3-6-reduce",children:[]},{level:4,title:"7.3.7 collect()",slug:"_7-3-7-collect",children:[]},{level:4,title:"7.3.8 startWith()/startWithArray()",slug:"_7-3-8-startwith-startwitharray",children:[]},{level:4,title:"7.3.9 count()",slug:"_7-3-9-count",children:[]}]},{level:3,title:"7.4 \u529F\u80FD\u64CD\u4F5C\u7B26",slug:"_7-4-\u529F\u80FD\u64CD\u4F5C\u7B26",children:[{level:4,title:"7.4.1 delay()",slug:"_7-4-1-delay",children:[]},{level:4,title:"7.4.2 doOnEach()",slug:"_7-4-2-dooneach",children:[]},{level:4,title:"7.4.3 doOnNext()",slug:"_7-4-3-doonnext",children:[]},{level:4,title:"7.4.4 doAfterNext()",slug:"_7-4-4-doafternext",children:[]},{level:4,title:"7.4.5 doOnComplete()",slug:"_7-4-5-dooncomplete",children:[]},{level:4,title:"7.4.6 doOnError()",slug:"_7-4-6-doonerror",children:[]},{level:4,title:"7.4.7 doOnSubscribe()",slug:"_7-4-7-doonsubscribe",children:[]},{level:4,title:"7.4.8 doOnDispose()",slug:"_7-4-8-doondispose",children:[]},{level:4,title:"7.4.9 doOnLifecycle()",slug:"_7-4-9-doonlifecycle",children:[]},{level:4,title:"7.4.10 doOnTerminate()/doAfterTerminate()",slug:"_7-4-10-doonterminate-doafterterminate",children:[]},{level:4,title:"7.4.11 doFinally()",slug:"_7-4-11-dofinally",children:[]},{level:4,title:"7.4.12 onErrorReturn()",slug:"_7-4-12-onerrorreturn",children:[]},{level:4,title:"7.4.13 onErrorResumeNext()",slug:"_7-4-13-onerrorresumenext",children:[]},{level:4,title:"7.4.14 onExceptionResumeNext()",slug:"_7-4-14-onexceptionresumenext",children:[]},{level:4,title:"7.4.15 retry()",slug:"_7-4-15-retry",children:[]},{level:4,title:"7.4.16 retryUntil()",slug:"_7-4-16-retryuntil",children:[]},{level:4,title:"7.4.17 retryWhen()",slug:"_7-4-17-retrywhen",children:[]},{level:4,title:"7.4.18 repeat()",slug:"_7-4-18-repeat",children:[]},{level:4,title:"7.4.19 repeatWhen()",slug:"_7-4-19-repeatwhen",children:[]},{level:4,title:"7.4.20 subscribeOn()",slug:"_7-4-20-subscribeon",children:[]},{level:4,title:"7.4.21 observeOn()",slug:"_7-4-21-observeon",children:[]}]},{level:3,title:"7.5 \u8FC7\u6EE4\u64CD\u4F5C\u7B26",slug:"_7-5-\u8FC7\u6EE4\u64CD\u4F5C\u7B26",children:[{level:4,title:"7.5.1 filter()",slug:"_7-5-1-filter",children:[]},{level:4,title:"7.5.2 ofType()",slug:"_7-5-2-oftype",children:[]},{level:4,title:"7.5.3 skip()",slug:"_7-5-3-skip",children:[]},{level:4,title:"7.5.4 distinct()",slug:"_7-5-4-distinct",children:[]},{level:4,title:"7.5.5 distinctUntilChanged()",slug:"_7-5-5-distinctuntilchanged",children:[]},{level:4,title:"7.5.6 take()",slug:"_7-5-6-take",children:[]},{level:4,title:"7.5.7 debounce()",slug:"_7-5-7-debounce",children:[]},{level:4,title:"7.5.8 firstElement()/lastElement()",slug:"_7-5-8-firstelement-lastelement",children:[]},{level:4,title:"7.5.9 elementAt()/elementAtOrError()",slug:"_7-5-9-elementat-elementatorerror",children:[]}]},{level:3,title:"7.6 \u6761\u4EF6\u64CD\u4F5C\u7B26",slug:"_7-6-\u6761\u4EF6\u64CD\u4F5C\u7B26",children:[{level:4,title:"7.6.1 all()",slug:"_7-6-1-all",children:[]},{level:4,title:"7.6.2 takeWhile()",slug:"_7-6-2-takewhile",children:[]},{level:4,title:"7.6.3 takeUntil()",slug:"_7-6-3-takeuntil",children:[]},{level:4,title:"7.6.4 skipWhile()",slug:"_7-6-4-skipwhile",children:[]},{level:4,title:"7.6.5 skilUntil()",slug:"_7-6-5-skiluntil",children:[]},{level:4,title:"7.6.6 sequenceEqual()",slug:"_7-6-6-sequenceequal",children:[]},{level:4,title:"7.6.7 contains()",slug:"_7-6-7-contains",children:[]},{level:4,title:"7.6.8 isEmpty()",slug:"_7-6-8-isempty",children:[]},{level:4,title:"7.6.9 amb()",slug:"_7-6-9-amb",children:[]},{level:4,title:"7.6.10 defaultIfEmpty()",slug:"_7-6-10-defaultifempty",children:[]}]}]}],git:{createdTime:165720954e4,updatedTime:165720954e4,contributors:[{name:"zengk",email:"zengkaiqiang562@163.com",commits:1}]},readingTime:{minutes:38.3,words:11490},filePathRelative:"zkq/third-party-open-project/rxjava/operator.md"};export{e as data};
