import{_ as u,o as i,c as k,b as s,w as t,a,F as r,e as p,d as n,r as o}from"./app.625aa393.js";const d={},m=p(`<h2 id="_1-\u542F\u52A8\u4F18\u5316\u7684\u51E0\u4E2A\u65B9\u9762" tabindex="-1"><a class="header-anchor" href="#_1-\u542F\u52A8\u4F18\u5316\u7684\u51E0\u4E2A\u65B9\u9762" aria-hidden="true">#</a> 1. \u542F\u52A8\u4F18\u5316\u7684\u51E0\u4E2A\u65B9\u9762</h2><ol><li><p>\u4E3B\u9898\u4E2D <code>android:windowBackgroud</code> \u5C5E\u6027\u6DFB\u52A0\u7684\u80CC\u666F\u5E26\u6709\u56FE\u7247\u65F6\uFF0C\u4F1A\u5BFC\u81F4\u5EF6\u8FDF</p></li><li><p><code>build.gradle</code> \u4E2D\u6DFB\u52A0 <code>admob</code> \u5E7F\u544A <code>sdk</code> \u7684\u4F9D\u8D56\uFF0C\u4EE5\u53CA <code>&lt;application&gt;</code> \u4E2D\u914D\u7F6E <code>admob</code> \u7684\u5E7F\u544A <code>meta-data</code> \u4F1A\u5BFC\u81F4 <code>300-600ms</code> \u5DE6\u53F3\u7684\u5EF6\u8FDF</p><blockquote><p><code>sdk</code> \u4E2D\u52A0\u5165\u4E86 <code>ContentProvider</code> \uFF1F</p></blockquote></li><li><p>\u5728 <code>Application.onCreate</code> \u4E2D\u8C03\u7528 <code>MobileAds.initialize</code> \u5BF9 <code>admob</code> \u5E7F\u544A <code>sdk</code> \u8FDB\u884C\u521D\u59CB\u5316\u4F1A\u5BFC\u81F4 <code>300ms</code> \u5DE6\u53F3\u7684\u5EF6\u8FDF</p></li><li><p>\u5728\u542F\u52A8\u8FC7\u7A0B\u4E2D\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42\u65F6\uFF0C\u5F00\u5B50\u7EBF\u7A0B\uFF0C\u5728\u5B50\u7EBF\u7A0B\u4E2D\u5904\u7406\u8BF7\u6C42\u6570\u636E\u548C\u54CD\u5E94\u6570\u636E\u3002\u5426\u5219\u4E5F\u4F1A\u9020\u6210\u5EF6\u8FDF</p></li><li><p><code>debug</code> \u6784\u5EFA\u65F6\uFF0C\u5982\u679C\u540C <code>release</code> \u4E00\u6837\u5F00\u542F\u4EE3\u7801\u6DF7\u6DC6\u548C\u5220\u9664\u65E0\u7528\u8D44\u6E90\u4EE5\u51CF\u5C0F <code>apk</code> \u4F53\u79EF\u53EF\u4EE5\u63D0\u9AD8\u542F\u52A8\u901F\u5EA6</p><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>android <span class="token punctuation">{</span>
    <span class="token punctuation">...</span>
    buildTypes <span class="token punctuation">{</span>

        release <span class="token punctuation">{</span>
            shrinkResources <span class="token boolean">true</span>
            minifyEnabled <span class="token boolean">true</span>
            proguardFiles
                <span class="token function">getDefaultProguardFile</span><span class="token punctuation">(</span><span class="token string">&#39;proguard-android.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token string">&#39;proguard-rules.pro&#39;</span>
        <span class="token punctuation">}</span>

        debug <span class="token punctuation">{</span>
            shrinkResources <span class="token boolean">true</span>
            minifyEnabled <span class="token boolean">true</span>
            proguardFiles
                <span class="token function">getDefaultProguardFile</span><span class="token punctuation">(</span><span class="token string">&#39;proguard-android.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token string">&#39;proguard-rules.pro&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><h2 id="_2-\u4E3B\u9898\u6837\u5F0F\u76F8\u5173\u7684\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3B\u9898\u6837\u5F0F\u76F8\u5173\u7684\u914D\u7F6E\u9879" aria-hidden="true">#</a> 2. \u4E3B\u9898\u6837\u5F0F\u76F8\u5173\u7684\u914D\u7F6E\u9879</h2><h3 id="_2-1-application-\u7684\u4E3B\u9898\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-1-application-\u7684\u4E3B\u9898\u914D\u7F6E" aria-hidden="true">#</a> 2.1 <code>Application</code> \u7684\u4E3B\u9898\u914D\u7F6E</h3><p><code>Application</code> \u7684\u4E3B\u9898\u662F\u5BF9\u6240\u6709 <code>Activity</code> \u8D77\u4F5C\u7528\u7684\uFF08\u9664\u975E\u5355\u72EC\u4E3A <code>Activity</code> \u914D\u7F6E\u4E86\u4E3B\u9898\uFF09</p>`,5),g=a("div",{class:"language-xml ext-xml"},[a("pre",{class:"language-xml"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("style")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("Theme.FlowVPN"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"parent"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("Theme.MaterialComponents.Light.NoActionBar"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token comment"},"<!-- \u8BBE\u7F6E\u72B6\u6001\u680F\u7684\u80CC\u666F\u989C\u8272 -->"),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:statusBarColor"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@android:color/transparent"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(` 

    `),a("span",{class:"token comment"},"<!-- Customize your theme here. -->"),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:windowAnimationStyle"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@style/AnimationActivity"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:windowNoTitle"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("true"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("style")]),a("span",{class:"token punctuation"},">")]),n(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("style")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("AnimationActivity"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"mce_bogus"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("1"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"parent"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("@android:style/Animation.Activity"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:activityOpenEnterAnimation"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@anim/anim_enter"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:activityOpenExitAnimation"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@anim/anim_exit"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:activityCloseEnterAnimation"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@anim/back_enter"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:activityCloseExitAnimation"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@anim/back_exit"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`

    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:taskOpenEnterAnimation"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@anim/anim_enter"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:taskOpenExitAnimation"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@anim/anim_exit"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:taskCloseEnterAnimation"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@anim/back_enter"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:taskCloseExitAnimation"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@anim/back_exit"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:taskToFrontEnterAnimation"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@anim/anim_enter"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:taskToFrontExitAnimation"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@anim/anim_exit"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:taskToBackEnterAnimation"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@anim/back_enter"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:taskToBackExitAnimation"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@anim/back_exit"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("style")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),v=a("div",{class:"language-xml ext-xml"},[a("pre",{class:"language-xml"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("style")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("Theme.FlowVPN"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"parent"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("Theme.MaterialComponents.Light.NoActionBar"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token comment"},"<!-- \u8BBE\u7F6E\u72B6\u6001\u680F\u7684\u80CC\u666F\u989C\u8272 -->"),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:statusBarColor"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@android:color/transparent"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`

    `),a("span",{class:"token comment"},"<!-- Customize your theme here. -->"),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:windowAnimationStyle"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("@style/AnimationActivity"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:windowNoTitle"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("true"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`

    `),a("span",{class:"token comment"},"<!-- \u8BBE\u7F6E\u72B6\u6001\u680F\u7684\u5B57\u4F53\u989C\u8272\u4E3A\u9ED1\u8272\uFF08\u5373\u4EAE\u80CC\u666F\u4E0B\u4F7F\u7528\u6DF1\u8272\u5B57\u4F53\uFF09\uFF08API 23 \u53CA\u5176\u4EE5\u4E0A\u751F\u6548\uFF09 -->"),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("item")]),n(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("android:windowLightStatusBar"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("true"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("item")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("style")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),q=p(`<blockquote><p><code>values-v23</code> \u6587\u4EF6\u5939\u4E0B\u7684\u8D44\u6E90\u6587\u4EF6\u5BF9 <code>API 23</code> \u53CA\u5176\u4EE5\u4E0A\u7684 <code>Android</code> \u7248\u672C\u751F\u6548\u3002</p><p><code>values-v23</code> \u4E0B\u7684\u8D44\u6E90\u6587\u4EF6\u4E2D\u53EF\u4EE5\u5F15\u7528 <code>values</code> \u4E2D\u7684\u8D44\u6E90\uFF08\u5982 <code>values</code> \u4E0B\u7684\u8D44\u6E90 <code>@style/AnimationActivity</code>\uFF09\u3002</p></blockquote><p><strong>\u4F7F\u7528\u793A\u4F8B\uFF1A</strong></p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name"><span class="token namespace">android:</span>theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@style/Theme.FlowVPN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>application</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_2-2-\u4E3A\u5355\u4E2A-activity-\u8BBE\u7F6E\u4E3B\u9898-\u8BBE\u7F6E\u900F\u660E\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4E3A\u5355\u4E2A-activity-\u8BBE\u7F6E\u4E3B\u9898-\u8BBE\u7F6E\u900F\u660E\u4E3B\u9898" aria-hidden="true">#</a> 2.2 \u4E3A\u5355\u4E2A <code>Activity</code> \u8BBE\u7F6E\u4E3B\u9898 &amp; \u8BBE\u7F6E\u900F\u660E\u4E3B\u9898</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>StartAppTheme<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Theme.MaterialComponents.Light.NoActionBar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u8BBE\u7F6E\u4E3B\u9898\u80CC\u666F --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:windowBackground<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>@drawable/splash_bg_transparent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- \u8BBE\u7F6E\u4E3B\u9898\u80CC\u666F\u4E3A\u900F\u660E --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:windowIsTranslucent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- \u8BBE\u7F6E\u72B6\u6001\u680F &amp; \u5BFC\u822A\u680F\u7684\u80CC\u666F\u4E3A\u900F\u660E --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:statusBarColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>@android:color/transparent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android:navigationBarColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>@android:color/transparent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- splash_bg_transparent.xml --&gt;</span>
<span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>shape</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>solid</span> <span class="token attr-name"><span class="token namespace">android:</span>color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@color/transparent<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>shape</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><blockquote><p>\u6CE8\u610F\uFF1A\u5728\u6709\u7684\u624B\u673A\u4E0A\uFF0C\u53EA\u662F\u8BBE\u7F6E <code>&lt;item name=&quot;android:windowIsTranslucent&quot;&gt;true&lt;/item&gt;</code> \u65E0\u6CD5\u5B9E\u73B0\u900F\u660E\u4E3B\u9898\uFF0C</p><p>\u8FD8\u9700\u8981\u52A0\u4E0A <code>&lt;item name=&quot;android:windowBackground&quot;&gt;@drawable/splash_bg_transparent&lt;/item&gt;</code>\uFF0C\u5176\u4E2D\u80CC\u666F\u56FE\u7247\u4E3A\u4E00\u4E2A\u900F\u660E\u7684 <code>shape</code> \u56FE\u3002</p></blockquote><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u4E3A\u542F\u52A8\u9875\u8BBE\u7F6E StartAppTheme \u4E3B\u9898\uFF08\u900F\u660E\u4E3B\u9898\uFF09 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activity</span>
    <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.view.activity.GuideActivity<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@style/StartAppTheme<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>launchMode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>singleTask<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>exported</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.action.MAIN<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.category.LAUNCHER<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activity</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><blockquote><p>\u5F53\u542F\u52A8\u65F6\u95F4\u8F83\u957F\u4E14\u65E0\u6CD5\u7EE7\u7EED\u4F18\u5316\u7684\u60C5\u51B5\u4E0B\uFF0C\u901A\u5E38\u4F1A\u4E3A <code>App</code> \u7684\u542F\u52A8\u9875\u8BBE\u7F6E\u4E00\u4E2A\u80CC\u666F\u56FE\uFF0C\u6216\u8005\u5C06\u542F\u52A8\u9875\u8BBE\u7F6E\u6210\u900F\u660E\u4E3B\u9898\u3002</p><p>\u4ECE\u800C\u907F\u514D <code>App</code> \u5728\u542F\u52A8\u65F6\u51FA\u73B0\u767D\u5C4F\u6216\u9ED1\u5C4F\u73B0\u8C61\u3002</p></blockquote><h2 id="_3-\u5F00\u6E90\u9879\u76EE-immersionbar-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u5F00\u6E90\u9879\u76EE-immersionbar-\u7684\u4F7F\u7528" aria-hidden="true">#</a> 3. \u5F00\u6E90\u9879\u76EE <code>Immersionbar</code> \u7684\u4F7F\u7528</h2>`,11),h=n("\u53C2\u8003\uFF1A"),_={href:"https://github.com/gyf-dev/ImmersionBar",target:"_blank",rel:"noopener noreferrer"},x=n("ImmersionBar");function b(y,A){const e=o("CodeGroupItem"),c=o("CodeGroup"),l=o("ExternalLinkIcon");return i(),k(r,null,[m,s(c,null,{default:t(()=>[s(e,{title:"values"},{default:t(()=>[g]),_:1}),s(e,{title:"values-v23",active:""},{default:t(()=>[v]),_:1})]),_:1}),q,a("blockquote",null,[a("p",null,[h,a("a",_,[x,s(l)])])])],64)}var f=u(d,[["render",b],["__file","launch-optimize.html.vue"]]);export{f as default};
