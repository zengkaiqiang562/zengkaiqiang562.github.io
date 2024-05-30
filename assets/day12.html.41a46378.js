import{_ as a,r as t,c as o,a as n,b as e,F as p,e as c,d as l,o as i}from"./app.2a01fc36.js";var u="/assets/01.bca20725.png",r="/assets/02.e64afc44.png",k="/assets/03.c85920f9.png";const d={},h=c(`<h2 id="_1-\u4FEE\u6539\u63A7\u5236\u53F0\u5149\u6807\u4F4D\u7F6E-setconsolecursorposition" tabindex="-1"><a class="header-anchor" href="#_1-\u4FEE\u6539\u63A7\u5236\u53F0\u5149\u6807\u4F4D\u7F6E-setconsolecursorposition" aria-hidden="true">#</a> 1. \u4FEE\u6539\u63A7\u5236\u53F0\u5149\u6807\u4F4D\u7F6E\uFF1A<code>SetConsoleCursorPosition</code></h2><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;conio.h&gt;</span>   <span class="token comment">// conio --&gt; console io \uFF1A \u63A7\u5236\u53F0 \u8F93\u5165/\u8F93\u51FA</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;Windows.h&gt;</span></span>
BOOL <span class="token function">SetConsoleCursorPosition</span><span class="token punctuation">(</span>HANDLE hConsoleOutput<span class="token punctuation">,</span> COORD dwCursorPosition<span class="token punctuation">)</span>
    \u4F5C\u7528\uFF1A 
        \u5728\u5904\u7406 hConsoleOutput \u6307\u5B9A\u7684\u8F93\u51FA\u7C7B\u578B\u4E4B\u524D\uFF08\u5982\u5904\u7406\u6807\u51C6\u8F93\u51FA or \u6807\u51C6\u9519\u8BEF\u4E4B\u524D\uFF09\uFF0C\u5C06\u5149\u6807\u79FB\u52A8\u5230\u4F4D\u7F6E dwCursorPosition \u5904

    \u53C2\u6570\uFF1A
        HANDLE \u7C7B\u578B\uFF1A 
            \u6307\u5B9A\u63A7\u5236\u53F0\u7684\u5904\u7406\u5BF9\u8C61\uFF08\u53EF\u4EE5\u662F\u6807\u51C6\u8F93\u5165 or \u6807\u51C6\u8F93\u51FA or \u6807\u51C6\u9519\u8BEF\uFF09
            \u53EF\u901A\u8FC7 GetStdHandle \u51FD\u6570\u6307\u5B9A HANDLE
                <span class="token function">GetStdHandle</span><span class="token punctuation">(</span>STD_INPUT_HANDLE<span class="token punctuation">)</span>  \u83B7\u53D6\u6807\u51C6\u8F93\u5165\u5BF9\u5E94\u7684 HANDLE
                <span class="token function">GetStdHandle</span><span class="token punctuation">(</span>STD_OUTPUT_HANDLE<span class="token punctuation">)</span> \u83B7\u53D6\u6807\u51C6\u8F93\u51FA\u5BF9\u5E94\u7684 HANDLE
                <span class="token function">GetStdHandle</span><span class="token punctuation">(</span>STD_ERROR_HANDLE<span class="token punctuation">)</span>  \u83B7\u53D6\u6807\u51C6\u9519\u8BEF\u5BF9\u5E94\u7684 HANDLE
        
        COORD\u7C7B\u578B\uFF1A 
            COORD \u662F Windows API \u4E2D\u5B9A\u4E49\u7684\u4E00\u79CD\u7ED3\u6784\uFF0C\u8868\u793A\u4E00\u4E2A\u5B57\u7B26\u5728\u63A7\u5236\u53F0\u5C4F\u5E55\u4E0A\u7684\u5750\u6807
                <span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">_COORD</span> <span class="token punctuation">{</span>
                    SHORT X<span class="token punctuation">;</span>
                    SHORT Y<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>COORD<span class="token punctuation">;</span>

    \u8FD4\u56DE\u503C\uFF1A
        BOOL \u7C7B\u578B\uFF1A <span class="token keyword">typedef</span> <span class="token keyword">int</span>   BOOL<span class="token punctuation">;</span>
</code></pre></div><p><img src="`+u+`" alt="" loading="lazy"></p><h2 id="_2-\u4E0D\u56DE\u663E\u5730\u63A5\u6536\u7528\u6237\u8F93\u5165-getch" tabindex="-1"><a class="header-anchor" href="#_2-\u4E0D\u56DE\u663E\u5730\u63A5\u6536\u7528\u6237\u8F93\u5165-getch" aria-hidden="true">#</a> 2. \u4E0D\u56DE\u663E\u5730\u63A5\u6536\u7528\u6237\u8F93\u5165\uFF1A<code>getch</code></h2><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;conio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">_getch</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
    \u529F\u80FD\uFF1A
        \u4ECE\u63A7\u5236\u53F0\u65E0\u56DE\u663E\u5730\u63A5\u6536\u4E00\u4E2A\u952E\u76D8\u8F93\u5165\u5B57\u7B26
        \u6240\u8C13\u56DE\u663E\uFF0C\u5C31\u662F\u5982 getchar \u51FD\u6570\u90A3\u6837\uFF0C\u5728\u63A5\u6536\u5230\u4E00\u4E2A\u952E\u76D8\u8F93\u5165\u5B57\u7B26\u540E\uFF0C\u8FD8\u4F1A\u628A\u63A5\u6536\u5230\u7684\u5B57\u7B26\u6253\u5370\u5728\u63A7\u5236\u53F0\u4E0A\u663E\u793A\u51FA\u6765\u3002
        \u800C _getch \u51FD\u6570\u4EC5\u63A5\u6536\u952E\u76D8\u8F93\u5165\u7684\u5B57\u7B26\uFF0C\u5E76\u4E0D\u4F1A\u6253\u5370\u663E\u793A\u5230\u63A7\u5236\u53F0\u4E0A\u3002

    \u7528\u6CD5\uFF1A
        <span class="token keyword">char</span> key <span class="token operator">=</span> <span class="token function">_getch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    \u8FD4\u56DE\u503C\uFF1A
        \u8BFB\u53D6\u7684\u5B57\u7B26 ASCII \u7801

\u6CE8\u610F\uFF1A\u5982\u679C\u8C03\u7528 <span class="token function">getch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \u7F16\u8BD1\u65F6\u51FA\u9519\uFF0C\u5C1D\u8BD5\u4F7F\u7528 <span class="token function">_getch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_3-\u4EE5\u975E\u963B\u585E\u65B9\u5F0F\u68C0\u67E5\u5F53\u524D\u662F\u5426\u6709\u952E\u76D8\u8F93\u5165-kbhit" tabindex="-1"><a class="header-anchor" href="#_3-\u4EE5\u975E\u963B\u585E\u65B9\u5F0F\u68C0\u67E5\u5F53\u524D\u662F\u5426\u6709\u952E\u76D8\u8F93\u5165-kbhit" aria-hidden="true">#</a> 3. \u4EE5\u975E\u963B\u585E\u65B9\u5F0F\u68C0\u67E5\u5F53\u524D\u662F\u5426\u6709\u952E\u76D8\u8F93\u5165\uFF1A<code>kbhit</code></h2><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;conio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">_kbhit</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
    \u529F\u80FD\uFF1A
        \u975E\u963B\u585E\u5730\u5224\u65AD\u7528\u6237\u8F93\u5165\u3002
        \u5982 scanf \u6216 getchar \u51FD\u6570\u8C03\u7528\u65F6\uFF0C\u4F1A\u963B\u585E\u5E76\u7B49\u5F85\u7528\u6237\u8F93\u5165\uFF1B
        \u800C\u901A\u8FC7 _kbhit \u7ED3\u5408 _getch \u6216 getchar \u51FD\u6570\uFF0C\u53EF\u5B9E\u73B0\u975E\u963B\u585E\u5730\u63A5\u6536\u7528\u6237\u8F93\u5165\uFF1A
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">_kbhit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">char</span> ch <span class="token operator">=</span> <span class="token function">_getch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

    \u8FD4\u56DE\u503C\uFF1A
        \u6709\u7528\u6237\u8F93\u5165\uFF0C\u8FD4\u56DE \u201C\u771F\u201D\uFF0C
        \u5426\u5219\u8FD4\u56DE \u201C\u5047\u201D\u3002

\u6CE8\u610F\uFF1A\u5982\u679C\u8C03\u7528 <span class="token function">kbhit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \u7F16\u8BD1\u65F6\u51FA\u9519\uFF0C\u5C1D\u8BD5\u4F7F\u7528 <span class="token function">_kbhit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><img src="`+r+`" alt="" loading="lazy"></p><h2 id="_4-\u8BBE\u7F6E\u63A7\u5236\u53F0\u5149\u6807\u5C5E\u6027-setconsolecursorinfo" tabindex="-1"><a class="header-anchor" href="#_4-\u8BBE\u7F6E\u63A7\u5236\u53F0\u5149\u6807\u5C5E\u6027-setconsolecursorinfo" aria-hidden="true">#</a> 4. \u8BBE\u7F6E\u63A7\u5236\u53F0\u5149\u6807\u5C5E\u6027\uFF1A<code>SetConsoleCursorInfo</code></h2><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;conio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;Windows.h&gt;</span></span>
BOOL <span class="token function">SetConsoleCursorInfo</span><span class="token punctuation">(</span>HANDLE hConsoleOutput<span class="token punctuation">,</span> <span class="token keyword">const</span> CONSOLE_CURSOR_INFO <span class="token operator">*</span>lpConsoleCursorInfo<span class="token punctuation">)</span>
    \u4F5C\u7528\uFF1A
        \u5728\u5904\u7406 hConsoleOutput \u6307\u5B9A\u7684\u8F93\u51FA\u7C7B\u578B\u4E4B\u524D\uFF08\u5982\u5904\u7406\u6807\u51C6\u8F93\u51FA or \u6807\u51C6\u9519\u8BEF\u4E4B\u524D\uFF09\uFF0C\u8BBE\u7F6E\u5149\u6807\u5C5E\u6027\u4FE1\u606F

    \u53C2\u6570\uFF1A
        HANDLE \u7C7B\u578B\uFF1A
            \u6307\u5B9A\u63A7\u5236\u53F0\u7684\u5904\u7406\u5BF9\u8C61\uFF08\u53EF\u4EE5\u662F\u6807\u51C6\u8F93\u5165 or \u6807\u51C6\u8F93\u51FA or \u6807\u51C6\u9519\u8BEF\uFF09
            \u53EF\u901A\u8FC7 GetStdHandle \u51FD\u6570\u6307\u5B9A HANDLE
                <span class="token function">GetStdHandle</span><span class="token punctuation">(</span>STD_INPUT_HANDLE<span class="token punctuation">)</span>  \u83B7\u53D6\u6807\u51C6\u8F93\u5165\u5BF9\u5E94\u7684 HANDLE
                <span class="token function">GetStdHandle</span><span class="token punctuation">(</span>STD_OUTPUT_HANDLE<span class="token punctuation">)</span> \u83B7\u53D6\u6807\u51C6\u8F93\u51FA\u5BF9\u5E94\u7684 HANDLE
                <span class="token function">GetStdHandle</span><span class="token punctuation">(</span>STD_ERROR_HANDLE<span class="token punctuation">)</span>  \u83B7\u53D6\u6807\u51C6\u9519\u8BEF\u5BF9\u5E94\u7684 HANDLE
        
        CONSOLE_CURSOR_INFO \u7C7B\u578B\uFF1A
            CONSOLE_CURSOR_INFO \u63CF\u8FF0\u7EC8\u7AEF\u5149\u6807\u4FE1\u606F
                <span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">_CONSOLE_CURSOR_INFO</span> <span class="token punctuation">{</span>
                    DWORD  dwSize<span class="token punctuation">;</span> <span class="token comment">// \u5149\u6807\u5927\u5C0F</span>
                    BOOL   bVisible<span class="token punctuation">;</span> <span class="token comment">// \u5149\u6807\u662F\u5426\u53EF\u89C1</span>
                <span class="token punctuation">}</span> CONSOLE_CURSOR_INFO<span class="token punctuation">;</span>

    \u8FD4\u56DE\u503C\uFF1A
        BOOL \u7C7B\u578B\uFF1A <span class="token keyword">typedef</span> <span class="token keyword">int</span>   BOOL<span class="token punctuation">;</span>
</code></pre></div><p><img src="`+k+'" alt="" loading="lazy"></p><h2 id="_5-\u53C2\u8003\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#_5-\u53C2\u8003\u6E90\u7801" aria-hidden="true">#</a> 5. \u53C2\u8003\u6E90\u7801</h2>',12),_={href:"https://github.com/zengkaiqiang562/JavaGuide-Demo/blob/main/docs/zkq/c_and_cpp/_1_c-basic/%E8%B4%AA%E5%90%83%E8%9B%87%E5%B0%8F%E6%B8%B8%E6%88%8F/snake.h",target:"_blank",rel:"noopener noreferrer"},g=l("\u8D2A\u5403\u86C7\u5C0F\u6E38\u620F");function O(f,y){const s=t("ExternalLinkIcon");return i(),o(p,null,[h,n("p",null,[n("a",_,[g,e(s)])])],64)}var N=a(d,[["render",O],["__file","day12.html.vue"]]);export{N as default};
