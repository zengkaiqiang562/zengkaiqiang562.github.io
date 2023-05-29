import{_ as t,o as c,c as p,a as n,b as e,F as i,e as s,d as a,r as d}from"./app.625aa393.js";var r="/assets/01.c9cc594f.png",l="/assets/02.9b32d801.png",u="/assets/03.fa1c70c3.png",g="/assets/04.5cb4aadd.png",k="/assets/05.b595e87b.png";const m={},v=s(`<h2 id="_1-\u81EA\u5B9A\u4E49-plugin-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u81EA\u5B9A\u4E49-plugin-\u63D2\u4EF6" aria-hidden="true">#</a> 1. \u81EA\u5B9A\u4E49 <code>Plugin</code> \u63D2\u4EF6</h2><h3 id="_1-1-\u624B\u52A8\u521B\u5EFA\u4E00\u4E2A\u672C\u5730\u7684-buildsrc-\u63D2\u4EF6\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_1-1-\u624B\u52A8\u521B\u5EFA\u4E00\u4E2A\u672C\u5730\u7684-buildsrc-\u63D2\u4EF6\u6A21\u5757" aria-hidden="true">#</a> 1.1 \u624B\u52A8\u521B\u5EFA\u4E00\u4E2A\u672C\u5730\u7684 <code>buildSrc</code> \u63D2\u4EF6\u6A21\u5757</h3><p><strong><code>buildSrc</code> \u63D2\u4EF6\u6A21\u5757\u7684\u6587\u4EF6\u7ED3\u6784\u5982\u4E0B\uFF1A</strong></p><div class="language-text ext-text"><pre class="language-text"><code>buildSrc
\u2014\u2014 src/
\u2014\u2014\u2014\u2014 main/
\u2014\u2014\u2014\u2014\u2014\u2014 groovy/
\u2014\u2014\u2014\u2014\u2014\u2014 resources/
\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 META-INF/
\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 gradle-plugins/
\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 {packageId}.properties // \u5982 com.zengk.plugin.properties
\u2014\u2014 build.gradle
\u2014\u2014 gradle.properties
</code></pre></div><p><strong>\u6CE8\u610F\uFF1A\u672C\u5730\u7684\u63D2\u4EF6\u6A21\u5757\u5FC5\u987B\u547D\u540D\u4E3A <code>buildSrc</code>\uFF0C\u5426\u5219\u65E0\u6CD5\u5728\u6839 <code>Project</code> \u4E0B\u7684\u5176\u4ED6\u5B50 <code>Project</code> \u4E2D\u5F15\u5165\u8BE5\u63D2\u4EF6\u6A21\u5757\u3002</strong></p><p><strong>\u63D2\u4EF6\u6A21\u5757\u7684\u4E3B\u8981\u521B\u5EFA\u6B65\u9AA4\u5982\u4E0B\uFF1A</strong></p><ol><li><p><code>build.gradle</code> \u6587\u4EF6\u5185\u5BB9\u6A21\u7248\u5982\u4E0B\uFF1A</p><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>apply plugin<span class="token punctuation">:</span> <span class="token string">&#39;groovy&#39;</span> 

sourceSets <span class="token punctuation">{</span>
    main <span class="token punctuation">{</span>
        groovy <span class="token punctuation">{</span>
            srcDir <span class="token string">&#39;src/main/groovy&#39;</span>  <span class="token comment">// \u5B58\u653E groovy \u6E90\u7801\u6587\u4EF6\u7684\u8DEF\u5F84</span>
        <span class="token punctuation">}</span>

        resources <span class="token punctuation">{</span>
            srcDir <span class="token string">&#39;src/main/resources&#39;</span>  <span class="token comment">// \u5B58\u653E\u63D2\u4EF6\u7528\u5230\u7684\u8D44\u6E90\u6587\u4EF6\u7684\u8DEF\u5F84</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5728 <code>src/main/groovy/</code> \u76EE\u5F55\u4E0B\u521B\u5EFA\u5305\u8DEF\u5F84 <code>com.zengk.plugin</code></p></li><li><p>\u5728\u5305\u8DEF\u5F84\u4E0B\u521B\u5EFA\u666E\u901A\u6587\u4EF6 <code>MyPlugin.groovy</code></p><blockquote><p>\u56E0\u4E3A <code>AS</code> \u4E0D\u652F\u6301\u76F4\u63A5\u521B\u5EFA <code>groovy</code> \u6587\u4EF6\uFF0C\u6240\u4EE5\u521B\u5EFA\u540E\u7F00\u4E3A <code>.groovy</code> \u7684\u666E\u901A\u6587\u4EF6\u4E5F\u662F\u4E00\u6837\u7684\u3002</p></blockquote><div class="language-groovy ext-groovy"><pre class="language-groovy"><code><span class="token comment">/* MyPlugin.groovy */</span>
<span class="token keyword">package</span> com<span class="token punctuation">.</span>zengk<span class="token punctuation">.</span>plugin

<span class="token keyword">import</span> org<span class="token punctuation">.</span>gradle<span class="token punctuation">.</span>api<span class="token punctuation">.</span>Plugin
<span class="token keyword">import</span> org<span class="token punctuation">.</span>gradle<span class="token punctuation">.</span>api<span class="token punctuation">.</span>Project

<span class="token keyword">class</span> <span class="token class-name">MyPlugin</span> implementsPlugin<span class="token operator">&lt;</span>Project<span class="token operator">&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// MyPlugin \u8868\u793A\u4E00\u4E2A\u81EA\u5B9A\u4E49\u63D2\u4EF6</span>
    
    <span class="token comment">/**
      * \u5C06\u63D2\u4EF6\u5F15\u5165\u5230 Project \u65F6\u4F1A\u8C03\u7528\u8BE5 apply \u65B9\u6CD5
      * \u53C2\u6570 project \u8868\u793A\u5F15\u5165\u4E86\u8BE5\u63D2\u4EF6\u7684 Project
     */</span>
    <span class="token annotation punctuation">@override</span>
    <span class="token keyword">void</span> <span class="token function">apply</span><span class="token punctuation">(</span>Project project<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        println <span class="token interpolation-string"><span class="token string">&quot;hello MyPlugin in project:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">project<span class="token punctuation">.</span>name</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token comment">// \u81EA\u5B9A\u4E49\u63D2\u4EF6 MyPlugin \u4EC5\u7528\u6765\u6253\u5370\u8FD9\u6761\u65E5\u5FD7</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u6CE8\u610F\uFF1A<code>Gradle</code> \u540C\u6B65\u540E\u8BE5 <code>MyPlugin.groovy</code> \u4F1A\u4E0E\u81EA\u52A8\u751F\u6210\u7684 <code>buildSrc/build/</code> \u4E0B\u7684 <code>MyPlugin.class</code> \u4EA7\u751F\u540C\u540D\u51B2\u7A81\uFF0C\u4F46\u4E0D\u5F71\u54CD\u4F7F\u7528\u3002</p></blockquote></li><li><p>\u5728 <code>src/main/resources/META-INF/gradle-plugins/</code> \u76EE\u5F55\u4E0B\u521B\u5EFA <code>com.zengk.plugin.properties</code> \u6587\u4EF6\uFF0C\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>implementation-class=com.zengk.plugin.MyPlugin
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>com.zengk.plugin.properties \u6587\u4EF6\u7684\u4F5C\u7528\u5C31\u662F\u7528\u6765\u58F0\u660E\u81EA\u5B9A\u4E49\u63D2\u4EF6\u7684\uFF0C
\u5176\u4E2D &quot;com.zengk.plugin&quot; \u662F\u81EA\u5B9A\u4E49\u63D2\u4EF6\u7C7B\u7684\u5305\u8DEF\u5F84\uFF0C
\u5F53\u6211\u4EEC\u8981\u5728\u5176\u4ED6\u5B50 Project \u4E2D\u5F15\u5165\u8BE5\u63D2\u4EF6\u65F6\uFF0C&quot;com.zengk.plugin&quot; \u5C31\u4F5C\u4E3A\u5F15\u5165\u63D2\u4EF6\u65F6\u7684\u6807\u8BC6 id
</code></pre></div></li><li><p>\u5728\u5176\u4ED6\u5B50 <code>Project</code> \u7684 <code>build.gradle</code> \u6587\u4EF6\u4E2D\u901A\u8FC7 <code>apply plugin &#39;com.zengk.plugin&#39;</code> \u5373\u53EF\u5F15\u5165\u8BE5\u672C\u5730\u63D2\u4EF6</p></li></ol><p><strong>\u672C\u5730\u7684 <code>buildSrc</code> \u63D2\u4EF6\u7684\u4F7F\u7528\u793A\u4F8B\uFF1A</strong></p><p><img src="`+r+`" alt="" loading="lazy"></p><h3 id="_1-2-\u901A\u8FC7-plugin-\u63D2\u4EF6\u4E3A-project-\u6DFB\u52A0\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#_1-2-\u901A\u8FC7-plugin-\u63D2\u4EF6\u4E3A-project-\u6DFB\u52A0\u6269\u5C55" aria-hidden="true">#</a> 1.2 \u901A\u8FC7 <code>Plugin</code> \u63D2\u4EF6\u4E3A <code>Project</code> \u6DFB\u52A0\u6269\u5C55</h3><p><strong>\u6B65\u9AA4\u5982\u4E0B\uFF1A</strong></p><ol><li><p>\u81EA\u5B9A\u4E49\u6269\u5C55\u7C7B\uFF1B</p></li><li><p>\u5728\u63D2\u4EF6\u7C7B\u7684 <code>apply</code> \u65B9\u6CD5\u4E2D\uFF0C\u8C03\u7528 <code>project.extension.create</code> \u65B9\u6CD5\u4E3A <code>project</code> \u6DFB\u52A0\u6269\u5C55\u3002</p><blockquote><p>\u54EA\u4E2A <code>project</code> \u4E2D\u5F15\u5165\u4E86\u8BE5\u63D2\u4EF6\uFF0C\u5C31\u662F\u5728\u4E3A\u54EA\u4E2A <code>project</code> \u6DFB\u52A0\u6269\u5C55\u3002</p></blockquote></li></ol><p><strong>\u5982\u4F55\u5728 <code>Project</code> \u4E2D\u8BBF\u95EE\u5DF2\u6DFB\u52A0\u7684\u6269\u5C55\uFF1A</strong></p><p>\u5982\u63D2\u4EF6\u7C7B\u7684 <code>apply</code> \u65B9\u6CD5\u4E2D\u6DFB\u52A0\u7684\u6269\u5C55\u5982\u4E0B\uFF1A</p><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>project<span class="token punctuation">.</span>extensions<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;versionInfo&#39;</span><span class="token punctuation">,</span> VersionInfo<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u5982\u4E0A\u4EE3\u7801\u4E3A project \u6DFB\u52A0\u4E86\u4E00\u4E2A\u540D\u4E3A versionInfo \u7684\u6269\u5C55\uFF0C\u4E8E\u662F\uFF1A
1. project \u4E2D\u53EF\u4EE5\u8C03\u7528 versionInfo(configureClosure)\uFF0C\u5728\u95ED\u5305\u4E2D\u8C03\u7528 VersionInfo \u7684 API \u521D\u59CB\u5316\u4E00\u4E2A VersionInfo \u5BF9\u8C61
2. project \u4E2D\u591A\u4E86\u4E00\u4E2A versionInfo \u5C5E\u6027\uFF0C\u5C5E\u6027\u503C\u5C31\u662F VersionInfo \u5BF9\u8C61
</code></pre></div><p><strong>\u793A\u4F8B\u4EE3\u7801\uFF1A</strong></p><p><img src="`+l+'" alt="" loading="lazy"></p><h3 id="_1-3-\u901A\u8FC7-plugin-\u63D2\u4EF6\u4E3A-project-\u6DFB\u52A0-task-\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#_1-3-\u901A\u8FC7-plugin-\u63D2\u4EF6\u4E3A-project-\u6DFB\u52A0-task-\u4EFB\u52A1" aria-hidden="true">#</a> 1.3 \u901A\u8FC7 <code>Plugin</code> \u63D2\u4EF6\u4E3A <code>Project</code> \u6DFB\u52A0 <code>Task</code> \u4EFB\u52A1</h3><p><strong>\u6B65\u9AA4\u5982\u4E0B\uFF1A</strong></p><ol><li><p>\u81EA\u5B9A\u4E49 <code>Task</code> \u4EFB\u52A1\u7C7B\uFF08\u7EE7\u627F\u81EA <code>DefaultTask</code>\uFF09\uFF1B</p></li><li><p>\u5728\u81EA\u5B9A\u4E49 <code>Task</code> \u4E2D\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u5E76\u4F7F\u7528\u6CE8\u89E3 <code>@TaskAction</code> \u5C06\u8BE5\u65B9\u6CD5\u6807\u8BB0\u4E3A\u5728 <code>Gradle</code> \u6267\u884C\u9636\u6BB5\u624D\u6267\u884C\u7684 <code>Task</code> \u52A8\u4F5C\uFF1B</p></li><li><p>\u5728\u81EA\u5B9A\u4E49\u63D2\u4EF6\u7C7B\u7684 <code>apply</code> \u65B9\u6CD5\u4E2D\uFF0C\u8C03\u7528 <code>project.tasks.create(taskName, taskClass)</code> \u521B\u5EFA <code>Task</code> \u4EFB\u52A1\u3002</p></li></ol><p><strong>\u793A\u4F8B\u4EE3\u7801\uFF1A</strong></p><p><img src="'+u+'" alt="" loading="lazy"></p><h2 id="_2-android-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-android-\u63D2\u4EF6" aria-hidden="true">#</a> 2. <code>Android</code> \u63D2\u4EF6</h2>',24),h=a("\u53C2\u8003\uFF1A"),x={href:"https://avatarqing.github.io/Gradle-Plugin-User-Guide-Chinese-Verision/index.html",target:"_blank",rel:"noopener noreferrer"},_=a("Gradle Android\u63D2\u4EF6\u7528\u6237\u6307\u5357\u7FFB\u8BD1"),b=a("\u53C2\u8003\uFF1A"),y={href:"https://developer.android.com/studio/build",target:"_blank",rel:"noopener noreferrer"},f=a("Android \u9879\u76EE\u4E2D Gradle \u914D\u7F6E\u7684\u5B98\u65B9\u6587\u6863"),A=s(`<h3 id="_2-1-android-\u63D2\u4EF6\u4E3A-gradle-\u6DFB\u52A0\u7684\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#_2-1-android-\u63D2\u4EF6\u4E3A-gradle-\u6DFB\u52A0\u7684\u6269\u5C55" aria-hidden="true">#</a> 2.1 <code>Android</code> \u63D2\u4EF6\u4E3A <code>Gradle</code> \u6DFB\u52A0\u7684\u6269\u5C55</h3><p>\u5BF9\u4E8E <code>android(configureClosure)</code> \u5176\u4E2D\uFF0C<code>android</code> \u662F <code>project</code> \u7684\u6269\u5C55\uFF0C\u4E8E\u662F\uFF1A</p><ol><li><p><code>android</code> \u4F5C\u4E3A <code>project</code> \u7684\u6269\u5C55\u5C5E\u6027\u65F6\uFF0C\u8868\u793A\u4E00\u4E2A <code>BaseExtension</code> \u5B50\u7C7B\u5BF9\u8C61\uFF1B</p></li><li><p><code>android</code> \u4F5C\u4E3A <code>project</code> \u7684\u6269\u5C55\u65B9\u6CD5\u65F6\uFF0C\u5E26\u4E00\u4E2A\u95ED\u5305\u53C2\u6570\uFF0C\u95ED\u5305\u4E2D\u5BF9 <code>BaseExtension</code> \u5B50\u7C7B\u5BF9\u8C61\u8FDB\u884C\u521D\u59CB\u5316\u914D\u7F6E\u3002</p></li></ol><p><code>android(configureClosure)</code> \u7684\u914D\u7F6E\u95ED\u5305\u4E2D\u53EF\u4EE5\u4F7F\u7528 <code>BaseExtension</code> \u63D0\u4F9B\u7684 <code>API</code> \u6765\u914D\u7F6E\u4E00\u4E2A <code>Android</code> \u9879\u76EE\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C<code>Android</code> \u63D2\u4EF6\u4E3A <code>Gradle</code> \u6DFB\u52A0\u7684\u6269\u5C55\u4E2D\u6240\u4F7F\u7528\u7684 <code>API</code> \u57FA\u672C\u4E0A\u53EF\u4EE5\u5728 <code>BaseExtension</code> \u7C7B\u4E2D\u627E\u5230\u51FA\u5904\uFF1A</p><div class="language-groovy ext-groovy"><pre class="language-groovy"><code>android <span class="token punctuation">{</span>
    <span class="token comment">/* \u66F4\u591A\u7684\u8BF7\u53C2\u8003 BaseExtension \u4E2D\u7684 API\uFF0C\u57FA\u672C\u4E0A\u53C2\u6570\u4E3A Action \u7684\u65B9\u6CD5\uFF0C\u90FD\u5BF9\u5E94\u4E00\u4E2A\u914D\u7F6E\u95ED\u5305 */</span>

    compileSdkVersion  <span class="token string">&#39;version&#39;</span>  <span class="token comment">// void compileSdkVersion(String version)</span>

    buildToolsVersion <span class="token string">&#39;version&#39;</span>  <span class="token comment">// void buildToolsVersion(String version)</span>

    defaultConfig <span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token punctuation">}</span>  <span class="token comment">// void defaultConfig(Action&lt;DefaultConfig&gt; action), \u8BE5\u95ED\u5305\u4E2D\u53EF\u4EE5\u4F7F\u7528 DefaultConfig \u7684API</span>

    signingConfigs <span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token punctuation">}</span> <span class="token comment">// void signingConfigs(Action&lt;? super NamedDomainObjectContainer&lt;SigningConfig&gt;&gt; action)</span>

    buildTypes <span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token punctuation">}</span>  <span class="token comment">// void buildTypes(Action&lt;? super NamedDomainObjectContainer&lt;BuildType&gt;&gt; action)</span>

    lintOptions <span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token punctuation">}</span>  <span class="token comment">// void lintOptions(Action&lt;LintOptions&gt; action)</span>

    dexOptions <span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token punctuation">}</span>  <span class="token comment">// void dexOptions(Action&lt;DexOptions&gt; action)</span>

    compileOptions <span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token punctuation">}</span>  <span class="token comment">// void compileOptions(Action&lt;CompileOptions&gt; action)</span>

    sourceSets <span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token punctuation">}</span>  <span class="token comment">// void sourceSets(Action&lt;NamedDomainObjectContainer&lt;AndroidSourceSet&gt;&gt; action)</span>

    productFlavors <span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token punctuation">}</span>  <span class="token comment">// void productFlavors(Action&lt;? super NamedDomainObjectContainer&lt;ProductFlavor&gt;&gt; action)</span>

    packagingOptions <span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token punctuation">}</span>  <span class="token comment">// void packagingOptions(Action&lt;PackagingOptions&gt; action)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong><code>BaseExtension</code> \u7684\u7EE7\u627F\u5173\u7CFB\u5982\u4E0B\uFF1A</strong></p><div class="language-text ext-text"><pre class="language-text"><code>AndroidConfig
\u2014\u2014 BaseExtension
\u2014\u2014\u2014\u2014 TestedExtension
\u2014\u2014\u2014\u2014\u2014\u2014 AppExtension
\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 BaseAppModuleExtension

\u53C2\u8003\uFF1A
{@link com.android.build.gradle.AndroidConfig}
{@link com.android.build.gradle.BaseExtension}
{@link com.android.build.gradle.TestedExtension}
{@link com.android.build.gradle.AppExtension}
{@link com.android.build.gradle.internal.dsl.BaseAppModuleExtension}
</code></pre></div><h3 id="_2-2-android-\u63D2\u4EF6\u4E3A-gradle-\u6DFB\u52A0\u7684-task-\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#_2-2-android-\u63D2\u4EF6\u4E3A-gradle-\u6DFB\u52A0\u7684-task-\u4EFB\u52A1" aria-hidden="true">#</a> 2.2 <code>Android</code> \u63D2\u4EF6\u4E3A <code>Gradle</code> \u6DFB\u52A0\u7684 <code>Task</code> \u4EFB\u52A1</h3><div class="language-text ext-text"><pre class="language-text"><code>\u5728 BaseVariant \u7C7B\u4E2D\u5B9A\u4E49\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u4E3A TaskProvider&lt;T&gt; \u7684\u65B9\u6CD5\u6240\u8FD4\u56DE\u7684\u5BF9\u8C61\u5C31\u662F\u4E00\u4E2A\u5C01\u88C5\u4E86 Task \u5BF9\u8C61\u7684 TaskProvider\uFF0C
\u8C03\u7528 TaskProvider.get \u65B9\u6CD5\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230 Task \u5BF9\u8C61\uFF0C
\u6CDB\u578B T \u8868\u793A\u8BE5 Task \u5BF9\u8C61\u7684\u7C7B\u578B\u3002
</code></pre></div><h3 id="_2-3-\u53D8\u4F53-variant" tabindex="-1"><a class="header-anchor" href="#_2-3-\u53D8\u4F53-variant" aria-hidden="true">#</a> 2.3 \u53D8\u4F53\uFF08<code>Variant</code>\uFF09</h3><p>\u53D8\u4F53\uFF08<code>Variant</code>\uFF09\u5C31\u662F\u5B50 <code>Project</code> \u6784\u5EFA\u751F\u6210\u7684\u4EA7\u7269\u3002</p><p><code>android(configureClosure)</code> \u7684\u4F5C\u7528\u5C31\u662F\u7528\u6765\u5BF9\u53D8\u4F53\uFF08<code>Variant</code>\uFF09\u8FDB\u884C\u914D\u7F6E\u3002</p><blockquote><p>\u914D\u7F6E\u4E0D\u540C\uFF0C\u5F97\u5230\u7684\u53D8\u4F53\uFF08<code>Variant</code>\uFF09\u4E5F\u4E0D\u540C\u3002</p><p>\u95ED\u5305\u4E2D\u7684\u914D\u7F6E\u9879\u4E5F\u90FD\u4F1A\u4FDD\u5B58\u5728\u53D8\u4F53\u5BF9\u8C61\u4E2D\u3002</p></blockquote><p>\u53D8\u4F53\u7684\u57FA\u7C7B\u662F <code>BaseVariant</code>\uFF0C\u6709\u5982\u4E0B <code>2</code> \u79CD\u53D8\u4F53\u7C7B\u578B\uFF1A</p><ol><li><p><code>ApplicationVariant</code></p></li><li><p><code>LibraryVariant</code></p></li></ol><p>\u53D8\u4F53\u7C7B\u578B\u4E0D\u540C\u65F6\uFF0C<code>android(configureClosure)</code> \u7684\u4F5C\u7528\u4E0D\u540C\uFF1A</p><ol><li><p>\u5F53\u5B50 <code>Project</code> \u662F\u4E00\u4E2A <code>Android</code> \u5E94\u7528\u7A0B\u5E8F\u65F6\uFF08<code>apply plugin: &#39;com.android.application&#39;</code>\uFF09</p><div class="language-text ext-text"><pre class="language-text"><code>1. android(configureClosure) \u914D\u7F6E\u521D\u59CB\u5316\u4E00\u4E2A AppExtension \u5BF9\u8C61
2. \u5B50 Project \u6784\u5EFA\u751F\u6210\u7684\u53D8\u4F53 Variant \u662F ApplicationVariant
3. \u5728\u5F53\u524D Project \u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u8BBF\u95EE\u6240\u6709\u53D8\u4F53\uFF1A
    this.afterEvaluate {
        this.android.applicationVariants.all { applicationVariant -&gt;
            //\u53EF\u80FD\u7684\u53D8\u4F53\u79CD\u7C7B\u6709\uFF1Adebug\uFF0Crelease
        }
    }
</code></pre></div></li><li><p>\u5F53\u5B50 <code>Project</code> \u662F\u4E00\u4E2A <code>Android</code> \u5E93\u65F6\uFF08<code>apply plugin: &#39;com.android.library&#39;</code>\uFF09</p><div class="language-text ext-text"><pre class="language-text"><code>1. android(configureClosure) \u914D\u7F6E\u521D\u59CB\u5316\u4E00\u4E2A LibraryExtension \u5BF9\u8C61
2. \u5B50 Project \u6784\u5EFA\u751F\u6210\u7684\u53D8\u4F53 Variant \u662F LibraryVariant
3. \u5728\u5F53\u524D Project \u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u8BBF\u95EE\u6240\u6709\u53D8\u4F53\uFF1A
    this.afterEvaluate {
        this.android.libraryVariants.all { libraryVariant-&gt;
            //\u53EF\u80FD\u7684\u53D8\u4F53\u79CD\u7C7B\u6709\uFF1Adebug\uFF0Crelease
        }
    }
</code></pre></div></li></ol><p><strong>\u53C2\u8003\uFF1A</strong></p><div class="language-text ext-text"><pre class="language-text"><code>{@link com.android.build.gradle.AppExtension#getApplicationVariants}
{@link com.android.build.gradle.api.ApplicationVariant}
{@link com.android.build.gradle.LibraryExtension#getLibraryVariants}
{@link com.android.build.gradle.api.LibraryVariant}
{@link com.android.build.gradle.api.BaseVariant}

ApplicationVariant \u7EE7\u627F\u5173\u7CFB\u56FE\uFF1A
\u2014\u2014 ApkVariant
\u2014\u2014\u2014\u2014 BaseVariant
\u2014\u2014\u2014\u2014 InstallableVariant
\u2014\u2014\u2014\u2014 AndroidArtifactVariant
\u2014\u2014\u2014\u2014\u2014\u2014 VersionedVariant
\u2014\u2014 TestedVariant

LibraryVariant \u7EE7\u627F\u5173\u7CFB\u56FE\uFF1A
\u2014\u2014 BaseVariant
\u2014\u2014 TestedVariant
</code></pre></div><h4 id="_2-3-1-\u793A\u4F8B\u4EE3\u7801-\u904D\u5386\u6240\u6709\u53D8\u4F53" tabindex="-1"><a class="header-anchor" href="#_2-3-1-\u793A\u4F8B\u4EE3\u7801-\u904D\u5386\u6240\u6709\u53D8\u4F53" aria-hidden="true">#</a> 2.3.1 \u793A\u4F8B\u4EE3\u7801\uFF1A\u904D\u5386\u6240\u6709\u53D8\u4F53</h4><p><img src="`+g+`" alt="" loading="lazy"></p><p>\u5982\u4E0A\u4EE3\u7801\u6240\u793A\uFF1A</p><div class="language-groovy ext-groovy"><pre class="language-groovy"><code><span class="token keyword">this</span><span class="token punctuation">.</span>afterEvaluate <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>android<span class="token punctuation">.</span>applicationVariants<span class="token punctuation">.</span>all <span class="token punctuation">{</span>applicationVariant <span class="token operator">-&gt;</span>
        <span class="token comment">/**
         * applicationVariant \u662F BaseVariant \u7684\u5B50\u7C7B\u5BF9\u8C61\uFF0C\u6240\u4EE5\u8FD9\u91CC\u53EF\u4EE5\u8C03\u7528 BaseVariant \u7684 API\uFF1A
         *      1. \u8C03\u7528\u8FD4\u56DE TaskProvider&lt;T&gt; \u7C7B\u578B\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u62FF\u5230 Task \u5BF9\u8C61\uFF08\u6CDB\u578B T \u5C31\u662F Task \u5BF9\u8C61\u7684\u5177\u4F53\u7C7B\u578B\uFF09
         *         \u4ECE\u800C\u53EF\u4EE5\u8C03\u7528 Task \u7684 doFirst(closure) \u548C doLast(closure) \u5F80\u8BE5 Task \u7684\u52A8\u4F5C\u96C6\u5408\u4E2D\u6DFB\u52A0\u6211\u4EEC\u81EA\u5DF1\u7684\u4E1A\u52A1\u4EE3\u7801
         *
         *      2. \u8C03\u7528\u5176\u4ED6\u7684\u4E00\u4E9B\u914D\u7F6E\u5C5E\u6027\uFF0C\u5219\u53EF\u4EE5\u6539\u53D8\u751F\u6210\u8BE5\u53D8\u4F53\u65F6\u7684\u4E00\u4E9B\u914D\u7F6E\u53C2\u6570\u503C
         */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_3-java-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-java-\u63D2\u4EF6" aria-hidden="true">#</a> 3. <code>Java</code> \u63D2\u4EF6</h2>`,25),V=a("\u53C2\u8003\uFF1A"),P={href:"https://docs.gradle.org/5.1.1/userguide/java_plugin.html",target:"_blank",rel:"noopener noreferrer"},j=a("The Java Plugin"),T=s('<p><code>Java</code> \u4E2D\u6CA1\u6709\u53D8\u4F53\u7684\u6982\u5FF5\uFF0C\u6240\u4EE5 <code>Java</code> \u63D2\u4EF6\u4E2D\u521B\u5EFA\u7684 <code>Task</code> \u90FD\u662F\u552F\u4E00\u7684\uFF0C\u4E0D\u4F1A\u50CF <code>Android</code> \u90A3\u6837\uFF0C\u53D8\u4F53\u4E0D\u540C\u5219\u5BF9\u5E94\u6709\u4E0D\u540C\u540D\u79F0\u7684 <code>Task</code>\u3002</p><p>\u5982\u4E0B\u56FE\uFF0C\u7ED9\u51FA\u4E86 <code>Java</code> \u63D2\u4EF6\u4E2D\u7684 <code>Task</code> \u7684\u4F9D\u8D56\u5173\u7CFB\u56FE\uFF1A</p><blockquote><p><code>Android</code> \u63D2\u4EF6\u7684 <code>Task</code> \u4E5F\u53EF\u4EE5\u53C2\u8003\u8BE5\u56FE\uFF0C\u4E0D\u8FC7 <code>Android</code> \u63D2\u4EF6\u4E2D\u7684 <code>Task</code> \u968F\u7740\u53D8\u4F53\u4E0D\u540C\u800C\u5BF9\u5E94\u6709\u4E0D\u540C\u7684 <code>Task</code> \u540D\u79F0\u3002</p><p>\u5E76\u4E14 <code>Android</code> \u63D2\u4EF6\u7684 <code>Task</code> \u7684\u4F9D\u8D56\u5173\u7CFB\u56FE\u6BD4 <code>Java</code> \u63D2\u4EF6\u7684\u66F4\u590D\u6742\u3002</p></blockquote><p><img src="'+k+'" alt="" loading="lazy"></p>',4);function E(C,B){const o=d("ExternalLinkIcon");return c(),p(i,null,[v,n("blockquote",null,[n("p",null,[h,n("a",x,[_,e(o)])]),n("p",null,[b,n("a",y,[f,e(o)])])]),A,n("blockquote",null,[n("p",null,[V,n("a",P,[j,e(o)])])]),T],64)}var q=t(m,[["render",E],["__file","_08_plugin.html.vue"]]);export{q as default};
