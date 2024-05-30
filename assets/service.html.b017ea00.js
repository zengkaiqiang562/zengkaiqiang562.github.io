import{_ as c,r as t,c as p,a as n,b as s,F as d,d as a,e as o,o as i}from"./app.2a01fc36.js";var r="/assets/01.ee4cb319.png",l="/assets/02.bc064d7b.png";const u={},k=a("\u53C2\u8003\uFF1A"),v={href:"https://hornhuang.blog.csdn.net/article/details/102880036",target:"_blank",rel:"noopener noreferrer"},m=a("23 \u4E2A\u91CD\u96BE\u70B9\u7A81\u7834\uFF0C\u5E26\u4F60\u5403\u900F Service \u77E5\u8BC6\u70B9\u300C\u957F\u8FBE 1W+ \u5B57\u300D"),S=o(`<h2 id="_1-service-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-service-\u6982\u8FF0" aria-hidden="true">#</a> 1. <code>Service</code> \u6982\u8FF0</h2><p><code>Service</code>\uFF08\u670D\u52A1\uFF09\u662F\u4E00\u79CD\u4E0D\u63D0\u4F9B\u7528\u6237\u754C\u9762\uFF0C\u53EF\u4EE5\u5728\u540E\u53F0\u957F\u65F6\u95F4\u8FD0\u884C\u7684\u7EC4\u4EF6\u3002</p><p>\u53EF\u4EE5\u5728\u5176\u5B83\u7EC4\u4EF6\uFF08\u5982 <code>Activity</code>\uFF09\u4E2D\u542F\u52A8 <code>Service</code> \u7EC4\u4EF6\uFF0C<code>Service</code> \u7EC4\u4EF6\u542F\u52A8\u540E\u5C31\u8FD0\u884C\u5728\u540E\u53F0\uFF0C\u5373\u4F7F\u542F\u52A8 <code>Service</code> \u7684\u5176\u5B83\u7EC4\u4EF6\uFF08\u5982 <code>Activity</code>\uFF09\u88AB\u9500\u6BC1\uFF0C\u4E5F\u4E0D\u4F1A\u5BF9\u5728\u540E\u53F0\u8FD0\u884C\u7684 <code>Service</code> \u9020\u6210\u5F71\u54CD\u3002</p><p>\u6B64\u5916\uFF0C<code>Service</code> \u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7\u4E0E\u5176\u5B83\u7EC4\u4EF6\uFF08\u5982 <code>Activity</code>\uFF09\u8FDB\u884C\u7ED1\u5B9A\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7EC4\u4EF6\u4E4B\u95F4\u7684\u6570\u636E\u4EA4\u4E92\u3002</p><p>\u901A\u8FC7 <code>Service</code> \u7EC4\u4EF6\uFF0C\u751A\u81F3\u8FD8\u53EF\u4EE5\u5B9E\u73B0\u8FDB\u7A0B\u95F4\u901A\u4FE1\uFF08<code>IPC</code>\uFF09\u3002</p><p>\u7279\u522B\u6CE8\u610F\uFF1A<code>Service</code> \u7EC4\u4EF6\u867D\u7136\u662F\u5728\u540E\u53F0\u8FD0\u884C\u7684\uFF0C\u4F46\u4ECD\u7136\u8FD0\u884C\u5728\u4E3B\u7EBF\u7A0B\u4E2D\u3002</p><h2 id="_2-service-\u7684\u4E24\u79CD\u5DE5\u4F5C\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_2-service-\u7684\u4E24\u79CD\u5DE5\u4F5C\u72B6\u6001" aria-hidden="true">#</a> 2. <code>Service</code> \u7684\u4E24\u79CD\u5DE5\u4F5C\u72B6\u6001</h2><h3 id="_2-1-\u542F\u52A8\u72B6\u6001-startservice" tabindex="-1"><a class="header-anchor" href="#_2-1-\u542F\u52A8\u72B6\u6001-startservice" aria-hidden="true">#</a> 2.1 \u542F\u52A8\u72B6\u6001\uFF1A<code>startService</code></h3><p>\u542F\u52A8\u72B6\u6001\u4E0B\u7684 <code>Service</code> \u7EC4\u4EF6\uFF0C\u4E3B\u8981\u7528\u4E8E\u6267\u884C\u540E\u53F0\u8BA1\u7B97\uFF0C\u4E0D\u53EF\u4EE5\u4E0E\u5176\u4ED6\u7EC4\u4EF6\u8FDB\u884C\u6570\u636E\u4EA4\u4E92\u3002</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* Context.java */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">ComponentName</span> <span class="token function">startService</span><span class="token punctuation">(</span><span class="token class-name">Intent</span> service<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">boolean</span> <span class="token function">stopService</span><span class="token punctuation">(</span><span class="token class-name">Intent</span> service<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="_2-1-1-\u591A\u6B21\u542F\u52A8-service-\u505C\u6B62\u542F\u52A8\u72B6\u6001\u4E0B\u7684-service" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u591A\u6B21\u542F\u52A8-service-\u505C\u6B62\u542F\u52A8\u72B6\u6001\u4E0B\u7684-service" aria-hidden="true">#</a> 2.1.1 \u591A\u6B21\u542F\u52A8 <code>Service</code> &amp; \u505C\u6B62\u542F\u52A8\u72B6\u6001\u4E0B\u7684 <code>Service</code></h4><p>\u8C03\u7528 <code>stopService</code>\u3001<code>stopSelf</code>\u3001<code>stopSelfResult</code> \u65B9\u6CD5\u90FD\u53EF\u4EE5\u8BA9\u542F\u52A8\u72B6\u6001\u4E0B\u7684 <code>Service</code> \u505C\u6B62\u3002</p><p>\u7279\u522B\u6CE8\u610F\u591A\u6B21\u542F\u52A8 <code>Service</code> \u7684\u60C5\u51B5\uFF08\u5373\u591A\u6B21\u8C03\u7528 <code>startService</code>\uFF09\uFF1A</p><ol><li><p>\u591A\u6B21\u8C03\u7528 <code>startService</code> \u65B9\u6CD5\u542F\u52A8\u540C\u4E00\u4E2A <code>Service</code> \u65F6\uFF0C\u53EA\u4F1A\u5728\u9996\u6B21\u542F\u52A8\u65F6\u521B\u5EFA <code>Service</code> \u5B9E\u4F8B\uFF0C\u4E14 <code>Service</code> \u7684 <code>onCreate</code> \u65B9\u6CD5\u53EA\u4F1A\u5728\u9996\u6B21\u542F\u52A8\u65F6\u56DE\u8C03\u4E00\u6B21\u3002\u4F46 <code>Service</code> \u7684 <code>onStartCommand(intent, flags, startId)</code> \u65B9\u6CD5\u6BCF\u6B21\u542F\u52A8\u65F6\u90FD\u4F1A\u56DE\u8C03\uFF0C\u4E14\u53C2\u6570 <code>startId</code> \u6BCF\u6B21\u56DE\u8C03\u65F6\u90FD\u4E0D\u4E00\u6837\u3002</p></li><li><p>\u5982\u679C\u8981\u505C\u6B62\u591A\u6B21\u542F\u52A8\u7684 <code>Service</code>\uFF0C\u53EF\u4EE5\u8C03\u7528 <code>stopService(service)</code>\u3001<code>stopSelf(startId)</code>\u3001<code>stopSelfResult(startId)</code>\uFF0C\u5176\u4E2D\u4F20\u5165\u7684\u53C2\u6570 <code>startId</code> \u5FC5\u987B\u662F <code>-1</code>\uFF0C\u6216\u8005\u662F\u6700\u540E\u4E00\u6B21\u56DE\u8C03 <code>onStartCommand</code> \u65B9\u6CD5\u65F6\u63A5\u6536\u5230\u7684 <code>startId</code>\uFF0C\u4F20\u5165\u5176\u4ED6\u7684 <code>startId</code> \u503C\u65E0\u6CD5\u505C\u6B62\u670D\u52A1\u3002</p></li></ol><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* Context.java */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">boolean</span> <span class="token function">stopService</span><span class="token punctuation">(</span><span class="token class-name">Intent</span> service<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* Service.java */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">stopSelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// stopSelf(-1)</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">stopSelf</span><span class="token punctuation">(</span><span class="token keyword">int</span> startId<span class="token punctuation">)</span>

<span class="token comment">/*
    \u4E0E stopSelf \u7684\u533A\u522B\u4EC5\u5728\u4E8E\u63D0\u4F9B\u4E86\u8FD4\u56DE\u503C
*/</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">stopSelfResult</span><span class="token punctuation">(</span><span class="token keyword">int</span> startId<span class="token punctuation">)</span>
</code></pre></div><h3 id="_2-2-\u7ED1\u5B9A\u72B6\u6001-bindservice" tabindex="-1"><a class="header-anchor" href="#_2-2-\u7ED1\u5B9A\u72B6\u6001-bindservice" aria-hidden="true">#</a> 2.2 \u7ED1\u5B9A\u72B6\u6001\uFF1A<code>bindService</code></h3><p>\u7ED1\u5B9A\u72B6\u6001\u4E0B\u7684 <code>Service</code> \u7EC4\u4EF6\uFF0C\u624D\u53EF\u4EE5\u4E0E\u5176\u4ED6\u7EC4\u4EF6\u8FDB\u884C\u6570\u636E\u4EA4\u4E92\u3002</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* Context.java */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">boolean</span> <span class="token function">bindService</span><span class="token punctuation">(</span><span class="token class-name">Intent</span> service<span class="token punctuation">,</span> <span class="token class-name">ServiceConnection</span> conn<span class="token punctuation">,</span> <span class="token keyword">int</span> flags<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">unbindService</span><span class="token punctuation">(</span><span class="token class-name">ServiceConnection</span> conn<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* Service.java */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">IBinder</span> <span class="token function">onBind</span><span class="token punctuation">(</span><span class="token class-name">Intent</span> intent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* ServiceConnection.java */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ServiceConnection</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
        \u53C2\u6570 IBinder \u7684\u5B9E\u53C2\u6765\u6E90\u4E8E Service \u4E2D\u91CD\u5199\u7684 onBind \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u3002
        \u901A\u5E38\u4F1A\u5728 Service \u4E2D\u81EA\u5B9A\u4E49\u4E00\u4E2A\u7EE7\u627F\u81EA Binder \u7684\u5185\u90E8\u7C7B\uFF08Binder \u5B9E\u73B0\u4E86 IBinder \u63A5\u53E3\uFF09\uFF0C
        onBind \u65B9\u6CD5\u4E2D\u521B\u5EFA\u6B64\u5185\u90E8\u7C7B\u7684\u5B9E\u4F8B\u5E76\u8FD4\u56DE\u3002
        \u4E8E\u662F\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u901A\u8FC7\u6B64\u7EE7\u627F\u81EA Binder \u7684\u5185\u90E8\u7C7B\u4E0E Service \u7EC4\u4EF6\u8FDB\u884C\u6570\u636E\u4EA4\u4E92\u3002
        \u6CE8\u610F\uFF1A\u5728\u8DE8\u8FDB\u7A0B\u901A\u4FE1\uFF08IPC\uFF09\u4E2D\uFF0ConBind \u65B9\u6CD5\u8FD4\u56DE\u7684 IBinder \u4E0E onServiceConnected \u65B9\u6CD5\u63A5\u6536\u5230\u7684 IBinder \u4E0D\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002

        \u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u5C06\u7528\u4E8E\u6570\u636E\u4EA4\u4E92\u7684\u5185\u90E8\u7C7B\u65B9\u6CD5\u5B9A\u4E49\u5728\u4E00\u4E2A\u63A5\u53E3\u4E2D\uFF08\u5982 IService.java\uFF09\uFF0C
        \u8BA9\u5185\u90E8\u7C7B\u9664\u4E86\u7EE7\u627F Binder \u4E4B\u5916\uFF0C\u518D\u5B9E\u73B0 IService \u63A5\u53E3\uFF0C\u91CD\u5199\u7528\u4E8E\u6570\u636E\u4EA4\u4E92\u7684\u63A5\u53E3\u65B9\u6CD5\u3002
        \u4E8E\u662F\uFF0C\u518D\u5C06 onServiceConnected \u65B9\u6CD5\u63A5\u6536\u5230\u7684 IBinder \u5B9E\u4F8B\uFF08\u5373\u5185\u90E8\u7C7B\u5BF9\u8C61\uFF09\u5F3A\u8F6C\u6210 IService \u63A5\u53E3\u3002
        \u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u907F\u514D\u5C06\u5185\u90E8\u7C7B\u7684\u5176\u5B83\u65B9\u6CD5\u66B4\u9732\u51FA\u53BB\uFF0CService \u7EC4\u4EF6\u4EC5\u5BF9\u5916\u63D0\u4F9B\u6240\u9700\u7684 API \u65B9\u6CD5\u3002
    */</span>
    <span class="token keyword">void</span> <span class="token function">onServiceConnected</span><span class="token punctuation">(</span><span class="token class-name">ComponentName</span> name<span class="token punctuation">,</span> <span class="token class-name">IBinder</span> service<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">onServiceDisconnected</span><span class="token punctuation">(</span><span class="token class-name">ComponentName</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-3-\u542F\u52A8\u72B6\u6001\u4E0B\u7684\u751F\u547D\u5468\u671F-\u7ED1\u5B9A\u72B6\u6001\u4E0B\u7684\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_2-3-\u542F\u52A8\u72B6\u6001\u4E0B\u7684\u751F\u547D\u5468\u671F-\u7ED1\u5B9A\u72B6\u6001\u4E0B\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 2.3 \u542F\u52A8\u72B6\u6001\u4E0B\u7684\u751F\u547D\u5468\u671F &amp; \u7ED1\u5B9A\u72B6\u6001\u4E0B\u7684\u751F\u547D\u5468\u671F</h3><p><img src="`+r+`" alt="" loading="lazy"></p><h3 id="_2-4-\u4E24\u79CD\u5DE5\u4F5C\u72B6\u6001\u53EF\u4EE5\u5171\u5B58" tabindex="-1"><a class="header-anchor" href="#_2-4-\u4E24\u79CD\u5DE5\u4F5C\u72B6\u6001\u53EF\u4EE5\u5171\u5B58" aria-hidden="true">#</a> 2.4 \u4E24\u79CD\u5DE5\u4F5C\u72B6\u6001\u53EF\u4EE5\u5171\u5B58</h3><p><code>Service</code> \u7EC4\u4EF6\u7684\u542F\u52A8\u72B6\u6001\u548C\u7ED1\u5B9A\u72B6\u6001\u662F\u53EF\u4EE5\u540C\u65F6\u5B58\u5728\u7684\uFF0C\u5373\uFF1A\u53EF\u4EE5\u5148\u8C03\u7528 <code>startService</code> \u65B9\u6CD5\u542F\u52A8 <code>Service</code> \u7EC4\u4EF6\uFF0C\u7136\u540E\u518D\u8C03\u7528 <code>bindService</code> \u65B9\u6CD5\u5C06\u542F\u52A8\u4E86\u7684 <code>Service</code> \u7EC4\u4EF6\u4E0E\u5F53\u524D\u7EC4\u4EF6\u8FDB\u884C\u7ED1\u5B9A\u3002</p><p>\u4E24\u79CD\u5DE5\u4F5C\u72B6\u6001\u5171\u5B58\u7684\u573A\u666F\u4E0B\u5BF9 <code>Service</code> \u7684\u542F\u52A8\u3001\u7ED1\u5B9A\u5EFA\u8BAE\u6309\u5982\u4E0B\u6D41\u7A0B\u6267\u884C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>startService -&gt; bindService -&gt; unbindService -&gt; stopService
</code></pre></div><blockquote><p>\u6CE8\u610F\uFF1A\u7ED1\u5B9A\u72B6\u6001\u4E0B\u5148\u6267\u884C <code>stopService</code>\uFF0C\u4E0D\u4F1A\u56DE\u8C03 <code>onDestroy</code> \u9500\u6BC1 <code>Service</code>\uFF0C\u53EA\u6709\u5F53\u6240\u6709\u7ED1\u5B9A\u90FD\u89E3\u7ED1\u540E\u624D\u4F1A\u56DE\u8C03 <code>onDestroy</code>\u3002</p></blockquote><h4 id="_2-4-1-\u4E24\u79CD\u5DE5\u4F5C\u72B6\u6001\u5171\u5B58\u65F6\u7684\u751F\u547D\u5468\u671F-onrebind-\u65B9\u6CD5\u7684\u56DE\u8C03\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#_2-4-1-\u4E24\u79CD\u5DE5\u4F5C\u72B6\u6001\u5171\u5B58\u65F6\u7684\u751F\u547D\u5468\u671F-onrebind-\u65B9\u6CD5\u7684\u56DE\u8C03\u65F6\u673A" aria-hidden="true">#</a> 2.4.1 \u4E24\u79CD\u5DE5\u4F5C\u72B6\u6001\u5171\u5B58\u65F6\u7684\u751F\u547D\u5468\u671F &amp; <code>onRebind</code> \u65B9\u6CD5\u7684\u56DE\u8C03\u65F6\u673A</h4>`,29),h=a("\u53C2\u8003\uFF1A"),g={href:"https://developer.android.google.cn/guide/components/bound-services#Lifecycle",target:"_blank",rel:"noopener noreferrer"},b=a("\u7BA1\u7406\u7ED1\u5B9A\u670D\u52A1\u7684\u751F\u547D\u5468\u671F"),f=o('<p><img src="'+l+`" alt="" loading="lazy"></p><p>\u5982\u4E0A\u56FE\u7684\u542F\u52A8\u5E76\u7ED1\u5B9A <code>Service</code> \u7684\u751F\u547D\u5468\u671F\u6240\u793A\uFF0C\u53EA\u6709\u5F53\u6240\u6709\u7EC4\u4EF6\u90FD\u4E0E <code>Service</code> \u89E3\u7ED1\uFF0C\u4E14\u89E3\u7ED1\u540E <code>Service</code> \u4ECD\u7136\u5728\u8FD0\u884C\u4E2D\uFF0C\u90A3\u4E48\u5F53\u540E\u9762\u518D\u6709\u7EC4\u4EF6\u4E0E\u8BE5 <code>Service</code> \u7ED1\u5B9A\u65F6\uFF0C\u5E76\u4E14\u91CD\u5199\u7684 <code>onUnbind</code> \u65B9\u6CD5\u8FD4\u56DE <code>true</code>\uFF0C\u5219\u6B64\u65F6\u624D\u4F1A\u56DE\u8C03 <code>onRebind</code> \u65B9\u6CD5\u3002</p><blockquote><p>\u5982\u679C\u53EA\u662F\u7ED1\u5B9A\u670D\u52A1\uFF08<code>bindService</code>\uFF09\uFF0C\u800C\u6CA1\u6709\u542F\u52A8\u670D\u52A1\uFF08<code>startService</code>\uFF09\uFF0C\u90A3\u4E48\u670D\u52A1\u89E3\u7ED1\u540E\u5C31\u76F4\u63A5\u8C03\u7528 <code>onDestroy</code> \u9500\u6BC1\u4E86\u3002\u4E8E\u662F\u5C31\u7B97\u518D\u6B21\u7ED1\u5B9A\uFF0C\u4E5F\u662F\u4E0E\u65B0\u521B\u5EFA <code>Service</code> \u5B9E\u4F8B\u7ED1\u5B9A\uFF0C\u4E0D\u5B58\u5728\u91CD\u65B0\u7ED1\u5B9A\u7684\u8BF4\u6CD5\uFF0C\u5373\u4E0D\u4F1A\u56DE\u8C03 <code>onRebind</code>\u3002</p></blockquote><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* Service.java */</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onRebind</span><span class="token punctuation">(</span><span class="token class-name">Intent</span> intent<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">onUnbind</span><span class="token punctuation">(</span><span class="token class-name">Intent</span> intent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u8FD4\u56DE false</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_3-startforeground-stopforeground" tabindex="-1"><a class="header-anchor" href="#_3-startforeground-stopforeground" aria-hidden="true">#</a> 3. <code>startForeground</code> &amp; <code>stopForeground</code></h2><p>\u901A\u8FC7 <code>startService</code> \u542F\u52A8\u7684 <code>Service</code> \u7EC4\u4EF6\u9ED8\u8BA4\u662F\u8FD0\u884C\u5728\u540E\u53F0\u7684\u3002\u6B64\u65F6\uFF0C\u5982\u679C <code>App</code> \u4E2D\u6CA1\u6709\u5176\u5B83\u53EF\u89C1\u7684\u7EC4\u4EF6\uFF0C\u90A3\u4E48 <code>App</code> \u8FDB\u7A0B\u5C31\u53EA\u662F\u4E00\u4E2A\u670D\u52A1\u8FDB\u7A0B\u3002</p><p>\u5F53\u5185\u5B58\u4E0D\u8DB3\u65F6\uFF0C\u7CFB\u7EDF\u53EF\u80FD\u5C31\u4F1A\u901A\u8FC7\u6740\u6B7B\u670D\u52A1\u8FDB\u7A0B\u6765\u4E3A\u524D\u53F0\u8FDB\u7A0B\u7A7A\u51FA\u66F4\u591A\u53EF\u7528\u7684\u5185\u5B58\u7A7A\u95F4\u3002\u4F46\u662F\uFF0C\u5982\u679C\u4E0D\u60F3\u8BA9\u4E00\u4E2A\u670D\u52A1\u8FDB\u7A0B\u88AB\u7CFB\u7EDF\u6740\u6B7B\uFF08\u5982\u6B63\u5728\u540E\u53F0\u64AD\u653E\u97F3\u4E50\u7684 <code>App</code> \u8FDB\u7A0B\uFF09\uFF0C\u540C\u65F6\u4E5F\u4E0D\u60F3\u901A\u8FC7\u8BA9 <code>App</code> \u754C\u9762\u663E\u793A\u51FA\u6765\u7684\u65B9\u5F0F\u5C06 <code>App</code> \u8FDB\u7A0B\u63D0\u5347\u4E3A\u524D\u53F0\u8FDB\u7A0B\u4EE5\u907F\u514D\u88AB\u6740\u6B7B\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u5C06\u540E\u53F0\u8FD0\u884C\u7684 <code>Service</code> \u7EC4\u4EF6\u5207\u6362\u5230\u524D\u53F0\u6765\u8FD0\u884C\uFF0C\u6B64\u65F6\uFF0C<code>App</code> \u8FDB\u7A0B\u4E5F\u53EF\u4EE5\u63D0\u5347\u4E3A\u524D\u53F0\u8FDB\u7A0B\uFF0C\u4ECE\u800C\u907F\u514D\u88AB\u7CFB\u7EDF\u6740\u6B7B\u3002</p><p>\u8C03\u7528 <code>Service</code> \u7EC4\u4EF6\u7684 <code>startForeground(id, notification)</code> \u65B9\u6CD5\u53EF\u4EE5\u5C06\u5728\u540E\u53F0\u8FD0\u884C\u7684 <code>Service</code> \u5207\u6362\u5230\u524D\u53F0\u8FD0\u884C\u3002\u5176\u4E2D\uFF0C\u5FC5\u987B\u901A\u8FC7\u53C2\u6570 <code>notification</code> \u4E3A\u5728\u524D\u53F0\u8FD0\u884C\u7684 <code>Service</code> \u63D0\u4F9B\u4E00\u4E2A\u6301\u7EED\u663E\u793A\u7684\u901A\u77E5\u3002</p><p>\u8C03\u7528 <code>Service</code> \u7EC4\u4EF6\u7684 <code>stopForeground</code> \u65B9\u6CD5\u5C06\u524D\u53F0\u8FD0\u884C\u7684 <code>Service</code> \u518D\u5207\u56DE\u5230\u540E\u53F0\u8FD0\u884C\uFF0C\u4E8E\u662F <code>App</code> \u8FDB\u7A0B\u4E5F\u964D\u81F3\u4E3A\u670D\u52A1\u8FDB\u7A0B\u3002</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* Service.java */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">startForeground</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">,</span> <span class="token class-name">Notification</span> notification<span class="token punctuation">)</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">stopForeground</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> removeNotification<span class="token punctuation">)</span>
</code></pre></div><h2 id="_3-onstartcommand-\u7684\u56DB\u79CD\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#_3-onstartcommand-\u7684\u56DB\u79CD\u8FD4\u56DE\u503C" aria-hidden="true">#</a> 3. <code>onStartCommand</code> \u7684\u56DB\u79CD\u8FD4\u56DE\u503C</h2><h3 id="_3-1-start-sticky-compatibility" tabindex="-1"><a class="header-anchor" href="#_3-1-start-sticky-compatibility" aria-hidden="true">#</a> 3.1 <code>START_STICKY_COMPATIBILITY</code></h3><p><code>START_STICKY</code> \u7684\u517C\u5BB9\u7248\u672C\u3002</p><p>\u4F46\u4E0D\u4FDD\u8BC1 <code>Service</code> \u6240\u5728\u8FDB\u7A0B\u88AB <code>kill</code> \u540E <code>Service</code> \u80FD\u591F\u91CD\u542F\u3002</p><h3 id="_3-2-start-sticky" tabindex="-1"><a class="header-anchor" href="#_3-2-start-sticky" aria-hidden="true">#</a> 3.2 <code>START_STICKY</code></h3><p><code>Service</code> \u6240\u5728\u8FDB\u7A0B\u88AB <code>kill</code> \u540E\uFF0C\u7CFB\u7EDF\u4F1A\u5C1D\u8BD5\u91CD\u65B0\u521B\u5EFA <code>Service</code>\uFF0C\u5E76\u8C03\u7528 <code>onStartCommand(intent, flags, startId)</code> \u65B9\u6CD5\u3002</p><p>\u91CD\u65B0\u521B\u5EFA <code>Service</code> \u540E\uFF0C\u4E0D\u4F1A\u4FDD\u7559\u4E4B\u524D\u7684 <code>Intent</code>\uFF0C\u6240\u4EE5\u5728\u8C03\u7528 <code>onStartCommand</code> \u65B9\u6CD5\u4E4B\u524D\uFF0C\u5982\u679C\u6CA1\u6709\u518D\u6B21\u542F\u52A8\u8FC7 <code>Service</code>\uFF0C\u90A3\u4E48 <code>onStartCommand</code> \u65B9\u6CD5\u4F20\u5165\u7684\u53C2\u6570 <code>Intent</code> \u4E3A <code>null</code>\u3002</p><h3 id="_3-3-start-not-sticky" tabindex="-1"><a class="header-anchor" href="#_3-3-start-not-sticky" aria-hidden="true">#</a> 3.3 <code>START_NOT_STICKY</code></h3><p><code>Service</code> \u6240\u5728\u8FDB\u7A0B\u88AB <code>kill</code> \u540E\uFF0C\u7CFB\u7EDF\u4E0D\u4F1A\u5C1D\u8BD5\u91CD\u65B0\u521B\u5EFA <code>Service</code>\u3002</p><h3 id="_3-4-start-redeliver-intent" tabindex="-1"><a class="header-anchor" href="#_3-4-start-redeliver-intent" aria-hidden="true">#</a> 3.4 <code>START_REDELIVER_INTENT</code></h3><p><code>Service</code> \u6240\u5728\u8FDB\u7A0B\u88AB <code>kill</code> \u540E\uFF0C\u7CFB\u7EDF\u4F1A\u5C1D\u8BD5\u91CD\u65B0\u521B\u5EFA <code>Service</code>\uFF0C\u5E76\u8C03\u7528 <code>onStartCommand(intent, flags, startId)</code> \u65B9\u6CD5\u3002</p><p>\u91CD\u65B0\u521B\u5EFA <code>Service</code> \u540E\uFF0C\u4F1A\u4FDD\u7559\u4E4B\u524D\u7684 <code>Intent</code>\uFF0C\u6240\u4EE5\u5728\u8C03\u7528 <code>onStartCommand</code> \u65B9\u6CD5\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u518D\u6B21\u542F\u52A8\u8FC7 <code>Service</code>\uFF0C\u90A3\u4E48 <code>onStartCommand</code> \u65B9\u6CD5\u4F20\u5165\u7684\u53C2\u6570 <code>Intent</code> \u4E3A\u4E4B\u524D\u4FDD\u5B58\u7684 <code>Intent</code> \u5B9E\u4F8B\u3002</p><h2 id="_4-\u63D0\u9AD8-service-\u6240\u5728\u8FDB\u7A0B\u7684\u4F18\u5148\u7EA7-\u8FDB\u7A0B\u4FDD\u6D3B" tabindex="-1"><a class="header-anchor" href="#_4-\u63D0\u9AD8-service-\u6240\u5728\u8FDB\u7A0B\u7684\u4F18\u5148\u7EA7-\u8FDB\u7A0B\u4FDD\u6D3B" aria-hidden="true">#</a> 4. \u63D0\u9AD8 <code>Service</code> \u6240\u5728\u8FDB\u7A0B\u7684\u4F18\u5148\u7EA7 &amp; \u8FDB\u7A0B\u4FDD\u6D3B</h2><ol><li><p>\u91CD\u5199 <code>onStartCommand</code> \u65B9\u6CD5\uFF0C\u5176\u4E2D\u8C03\u7528 <code>startForeground</code> \u65B9\u6CD5\u5C06 <code>Service</code> \u6240\u5728\u8FDB\u7A0B\u63D0\u5347\u4E3A\u524D\u53F0\u8FDB\u7A0B\u7EA7\u522B\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A\u5728 <code>onDestroy</code> \u4E2D\u8981\u8BB0\u5F97\u8C03\u7528 <code>stopForeground</code> \u65B9\u6CD5\u3002</p></blockquote></li><li><p>\u91CD\u5199 <code>onStartCommand</code> \u65B9\u6CD5\uFF0C\u5176\u4E2D\u8BBE\u7F6E\u8FD4\u56DE\u503C\u4E3A <code>START_STICKY</code>\uFF0C\u4F7F\u5F97 <code>Service</code> \u6240\u5728\u8FDB\u7A0B\u88AB\u6740\u6B7B\u540E\uFF0C\u8FD8\u6709\u91CD\u542F\u7684\u53EF\u80FD\u3002</p></li><li><p>\u5728 <code>Service</code> \u7684 <code>onDestroy</code> \u65B9\u6CD5\u4E2D\u91CD\u542F <code>Service</code>\u3002\uFF08\u7F3A\u9677\u5728\u4E8E <code>App</code> \u8FDB\u7A0B\u88AB\u6740\u6B7B\u65F6\uFF0C<code>onDestroy</code> \u53EF\u80FD\u4E0D\u4F1A\u56DE\u8C03\uFF09</p></li><li><p>\u901A\u8FC7\u76D1\u542C\u7CFB\u7EDF\u5E7F\u64AD\u91CD\u542F <code>Service</code>\u3002\u5982\u5FAA\u73AF\u53D1\u9001\u95F9\u949F\u5E7F\u64AD\uFF0C\u5728\u63A5\u6536\u5230\u6B64\u5E7F\u64AD\u65F6\u8C03\u7528 <code>startService</code> \u65B9\u6CD5\u542F\u52A8 <code>Service</code></p><div class="language-java ext-java"><pre class="language-java"><code><span class="token class-name">Intent</span> intent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token class-name">MainActivity</span><span class="token punctuation">.</span><span class="token keyword">this</span> <span class="token punctuation">,</span><span class="token class-name">MyAlarmReciver</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">PendingIntent</span> sender <span class="token operator">=</span> <span class="token class-name">PendingIntent</span><span class="token punctuation">.</span><span class="token function">getBroadcast</span><span class="token punctuation">(</span> <span class="token class-name">MainActivity</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> intent<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BA9\u95F9\u949F\u5728 10s \u540E\u54CD\u8D77</span>
<span class="token class-name">Calendar</span> calendar <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
calendar<span class="token punctuation">.</span><span class="token function">setTimeInMillis</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
calendar<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span>SECOND<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">AlarmManager</span> am <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">AlarmManager</span><span class="token punctuation">)</span> <span class="token function">getSystemService</span><span class="token punctuation">(</span>ALARM_SERVICE<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * \u91CD\u590D\u95F9\u949F
 * 
 * <span class="token keyword">@param</span> <span class="token parameter">type</span>
 * <span class="token keyword">@param</span> <span class="token parameter">triggerAtMillis</span> \u95F9\u949F\u7684\u7B2C\u4E00\u6B21\u6267\u884C\u65F6\u95F4\uFF0C\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D
 * <span class="token keyword">@param</span> <span class="token parameter">intervalMillis</span> \u8868\u793A\u4E24\u6B21\u95F9\u949F\u6267\u884C\u7684\u95F4\u9694\u65F6\u95F4\uFF0C\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D
 * <span class="token keyword">@param</span> <span class="token parameter">operation</span> \u7ED1\u5B9A\u4E86\u95F9\u949F\u7684\u6267\u884C\u52A8\u4F5C\uFF0C\u6BD4\u5982\u53D1\u9001\u4E00\u4E2A\u5E7F\u64AD\u3001\u7ED9\u51FA\u63D0\u793A\u7B49\u7B49
 */</span>
am<span class="token punctuation">.</span><span class="token function">setRepeating</span><span class="token punctuation">(</span><span class="token class-name">AlarmManager</span><span class="token punctuation">.</span>RTC_WAKEUP<span class="token punctuation">,</span> calendar<span class="token punctuation">.</span><span class="token function">getTimeInMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> sender<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>\u901A\u8FC7\u7B2C\u4E09\u65B9\u7684\u6D88\u606F\u63A8\u9001 <code>SDK</code> \u5524\u9192 <code>App</code>\uFF0C\u5982\uFF1A\u6781\u5149\u63A8\u9001\uFF08<code>JPush</code>\uFF09\u3002</p></li><li><p>\u4EE5\u4E0A\u65B9\u6CD5\u90FD\u662F\u5728 <code>App</code> \u8FDB\u7A0B\u88AB\u6740\u6B7B\u540E\uFF0C\u518D\u901A\u8FC7\u91CD\u65B0\u521B\u5EFA <code>Service</code> \u6765\u91CD\u542F <code>App</code> \u8FDB\u7A0B\u7684\uFF0C\u5373\u907F\u514D\u4E0D\u4E86 <code>App</code> \u88AB\u6740\u6B7B\u7684\u60C5\u51B5\uFF0C\u4E0D\u53EF\u80FD\u8FBE\u5230\u8BA9 <code>App</code> \u8FDB\u7A0B\u4E00\u76F4\u5B58\u6D3B\u4E0B\u53BB\u7684\u9700\u6C42\u3002\u53EA\u6709\u901A\u8FC7\u8BA9\u624B\u673A\u5382\u5546\u628A <code>App</code> \u653E\u5165\u5230\u767D\u540D\u5355\u4E2D\uFF0C\u624D\u80FD\u771F\u6B63\u7684\u4FDD\u8BC1\u8FDB\u7A0B\u4E0D\u88AB\u6740\u6B7B\uFF0C\u4E00\u76F4\u5B58\u6D3B\u4E0B\u53BB\uFF08\u5982\u5FAE\u4FE1\u3001<code>QQ</code> \u3001\u964C\u964C\u90FD\u5728\u5C0F\u7C73\u7684\u767D\u540D\u5355\u4E2D\uFF09\u3002</p></li></ol>`,24);function y(_,I){const e=t("ExternalLinkIcon");return i(),p(d,null,[n("p",null,[k,n("a",v,[m,s(e)])]),S,n("blockquote",null,[n("p",null,[h,n("a",g,[b,s(e)])])]),f],64)}var C=c(u,[["render",y],["__file","service.html.vue"]]);export{C as default};
