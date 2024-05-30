import{_ as n,e as a}from"./app.2a01fc36.js";var s="/assets/01.beebb98d.png";const e={},t=a(`<blockquote><p>\u53C2\u8003\uFF1A<code>Android\u76F8\u5173\u3010\u516C\u4F17\u53F7\uFF1A\u542F\u8230\u6742\u8C08\u3011\\14\u3001Android\u5F3A\u5316\uFF1A\u670D\u52A1\u4E0E\u901A\u4FE1\\\u6B65\u9AA4\u4E8C\uFF1AAndroid App\u901A\u4FE1\\\u7B2C4\u8BFE\uFF1A\u7ECF\u5178\u84DD\u7259</code></p></blockquote><h2 id="_1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a> 1. \u6982\u8FF0</h2><p>\u4EE5\u84DD\u7259\u804A\u5929\u5BA4\u6848\u4F8B\u4E3A\u57FA\u7840\uFF0C\u4ECB\u7ECD\u5982\u4F55\u5728 <code>Android</code> \u4E2D\u4F7F\u7528\u7ECF\u5178\u84DD\u7259\u3002</p><blockquote><p>\u53C2\u8003\uFF1A<code>https://github.com/android/connectivity-samples</code></p></blockquote><h2 id="_2-\u7ECF\u5178\u84DD\u7259\u7684\u5F00\u53D1\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_2-\u7ECF\u5178\u84DD\u7259\u7684\u5F00\u53D1\u6B65\u9AA4" aria-hidden="true">#</a> 2. \u7ECF\u5178\u84DD\u7259\u7684\u5F00\u53D1\u6B65\u9AA4</h2><h3 id="_2-1-\u8BBE\u7F6E\u84DD\u7259\u6743\u9650-bluetooth-bluetooth-admin" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8BBE\u7F6E\u84DD\u7259\u6743\u9650-bluetooth-bluetooth-admin" aria-hidden="true">#</a> 2.1 \u8BBE\u7F6E\u84DD\u7259\u6743\u9650\uFF1ABLUETOOTH &amp; BLUETOOTH_ADMIN</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.BLUETOOTH<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.BLUETOOTH_ADMIN<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>\u5728\u6267\u884C\u5982\u4E0B\u64CD\u4F5C\u65F6\uFF0C\u9700\u8981 <code>BLUETOOTH</code> \u548C <code>BLUETOOTH_ADMIN</code> \u6743\u9650\uFF1A</p><ol><li>\u8BF7\u6C42\u8FDE\u63A5\uFF1B</li><li>\u63A5\u53D7\u8FDE\u63A5\uFF1B</li><li>\u4F20\u8F93\u6570\u636E\uFF1B</li><li>\u542F\u52A8\u8BBE\u5907\u53D1\u73B0\uFF1B</li><li>\u64CD\u4F5C\u84DD\u7259\u8BBE\u7F6E</li><li>...</li></ol><h3 id="_2-2-\u83B7\u53D6-bluetoothadapter" tabindex="-1"><a class="header-anchor" href="#_2-2-\u83B7\u53D6-bluetoothadapter" aria-hidden="true">#</a> 2.2 \u83B7\u53D6 <code>BluetoothAdapter</code></h3><p>\u4F7F\u7528\u7ECF\u5178\u84DD\u7259\u65F6\uFF0C\u9700\u8981\u7528\u5230 <code>BluetoothAdapter</code>\uFF0C\u8868\u793A\u5F53\u524D\u8BBE\u5907\u81EA\u8EAB\u7684\u84DD\u7259\u9002\u914D\u5668\u3002</p><p><code>BluetoothAdapter</code> \u662F\u4E00\u4E2A\u5355\u4F8B\u7C7B\uFF0C\u63D0\u4F9B\u9759\u6001\u65B9\u6CD5 <code>getDefaultAdapter()</code> \u8FD4\u56DE\u4E00\u4E2A <code>BluetoothAdapter</code> \u5B9E\u4F8B\u3002</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">BluetoothAdapter</span> <span class="token function">getDefaultAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sAdapter <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">IBinder</span> b <span class="token operator">=</span> <span class="token class-name">ServiceManager</span><span class="token punctuation">.</span><span class="token function">getService</span><span class="token punctuation">(</span>BLUETOOTH_MANAGER_SERVICE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">IBluetoothManager</span> managerService <span class="token operator">=</span> <span class="token class-name">IBluetoothManager<span class="token punctuation">.</span>Stub</span><span class="token punctuation">.</span><span class="token function">asInterface</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
            sAdapter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BluetoothAdapter</span><span class="token punctuation">(</span>managerService<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">e</span><span class="token punctuation">(</span>TAG<span class="token punctuation">,</span> <span class="token string">&quot;Bluetooth binder is null&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sAdapter<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u610F\uFF1A\u5982\u679C <code>BluetoothAdapter.getDefaultAdapter()</code> \u8FD4\u56DE <code>null</code>\uFF0C\u90A3\u4E48\u8868\u793A\u5F53\u524D\u8BBE\u5907\u4E0D\u652F\u6301\u84DD\u7259\uFF08<strong>\u65E2\u4E0D\u652F\u6301\u7ECF\u5178\u84DD\u7259\u4E5F\u4E0D\u652F\u6301\u4F4E\u529F\u8017\u84DD\u7259</strong>\uFF09\u3002</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* BluetoothAdapter.java */</span>
<span class="token class-name">BluetoothAdapter</span> adapter <span class="token operator">=</span> <span class="token class-name">BluetoothAdapter</span><span class="token punctuation">.</span><span class="token function">getDefaultAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// If the adapter is null, then Bluetooth is not supported</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>adapter <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6B64\u65F6\u53EF\u4EE5\u9000\u51FA\u84DD\u7259\u76F8\u5173\u7684\u754C\u9762</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-3-\u8BF7\u6C42\u542F\u52A8\u84DD\u7259" tabindex="-1"><a class="header-anchor" href="#_2-3-\u8BF7\u6C42\u542F\u52A8\u84DD\u7259" aria-hidden="true">#</a> 2.3 \u8BF7\u6C42\u542F\u52A8\u84DD\u7259</h3><h4 id="_2-3-1-\u68C0\u67E5\u662F\u5426\u5DF2\u542F\u52A8\u84DD\u7259-bluetoothadapter-isenabled" tabindex="-1"><a class="header-anchor" href="#_2-3-1-\u68C0\u67E5\u662F\u5426\u5DF2\u542F\u52A8\u84DD\u7259-bluetoothadapter-isenabled" aria-hidden="true">#</a> 2.3.1 \u68C0\u67E5\u662F\u5426\u5DF2\u542F\u52A8\u84DD\u7259\uFF1A<code>BluetoothAdapter.isEnabled()</code></h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* BluetoothAdapter.java */</span>
<span class="token keyword">boolean</span> <span class="token function">isEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8C03\u7528 <code>BluetoothAdapter</code> \u5BF9\u8C61\u7684 <code>isEnabled()</code> \u65B9\u6CD5\u6765\u68C0\u67E5\u662F\u5426\u542F\u52A8\u4E86\u84DD\u7259\uFF1A</p><ol><li><code>isEnabled()</code> \u65B9\u6CD5\u8FD4\u56DE <code>false</code> \u8868\u793A\u672A\u542F\u52A8\u84DD\u7259\uFF0C\u84DD\u7259\u5904\u4E8E\u505C\u7528\u72B6\u6001\uFF1B</li><li><code>isEnabled()</code> \u65B9\u6CD5\u8FD4\u56DE <code>true</code> \u8868\u793A\u542F\u52A8\u4E86\u84DD\u7259\u3002</li></ol><h4 id="_2-3-2-\u8BF7\u6C42\u8DF3\u8F6C\u81F3\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u542F\u52A8\u84DD\u7259-action-request-enable" tabindex="-1"><a class="header-anchor" href="#_2-3-2-\u8BF7\u6C42\u8DF3\u8F6C\u81F3\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u542F\u52A8\u84DD\u7259-action-request-enable" aria-hidden="true">#</a> 2.3.2 \u8BF7\u6C42\u8DF3\u8F6C\u81F3\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u542F\u52A8\u84DD\u7259\uFF1A<code>ACTION_REQUEST_ENABLE</code></h4><p>\u5F53 <code>BluetoothAdapter</code> \u5BF9\u8C61\u7684 <code>isEnabled()</code> \u65B9\u6CD5\u8FD4\u56DE <code>false</code> \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>BluetoothAdapter.ACTION_REQUEST_ENABLE</code> \u8BF7\u6C42\u8DF3\u8F6C\u81F3\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u542F\u52A8\u84DD\u7259\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* BluetoothChatFragment.java */</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> REQUEST_ENABLE_BT <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>adapter<span class="token punctuation">.</span><span class="token function">isEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Intent</span> enableIntent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token class-name">BluetoothAdapter</span><span class="token punctuation">.</span>ACTION_REQUEST_ENABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">startActivityForResult</span><span class="token punctuation">(</span>enableIntent<span class="token punctuation">,</span> REQUEST_ENABLE_BT<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-4-\u67E5\u627E\u914D\u5BF9\u7684\u8BBE\u5907" tabindex="-1"><a class="header-anchor" href="#_2-4-\u67E5\u627E\u914D\u5BF9\u7684\u8BBE\u5907" aria-hidden="true">#</a> 2.4 \u67E5\u627E\u914D\u5BF9\u7684\u8BBE\u5907</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* BluetoothAdapter.java */</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BluetoothDevice</span><span class="token punctuation">&gt;</span></span> <span class="token function">getBondedDevices</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8C03\u7528 <code>BluetoothAdapter</code> \u5BF9\u8C61\u7684 <code>getBondedDevices()</code> \u65B9\u6CD5\u8FD4\u56DE\u5DF2\u914D\u5BF9\u7684\u84DD\u7259\u8BBE\u5907\u96C6\u5408\u3002</p><h3 id="_2-5-\u53D1\u73B0-\u626B\u63CF-\u8BBE\u5907" tabindex="-1"><a class="header-anchor" href="#_2-5-\u53D1\u73B0-\u626B\u63CF-\u8BBE\u5907" aria-hidden="true">#</a> 2.5 \u53D1\u73B0\uFF08\u626B\u63CF\uFF09\u8BBE\u5907</h3><h4 id="_2-5-1-\u626B\u63CF\u8BBE\u5907-\u505C\u6B62\u626B\u63CF-\u5224\u65AD\u662F\u5426\u6B63\u5728\u626B\u63CF" tabindex="-1"><a class="header-anchor" href="#_2-5-1-\u626B\u63CF\u8BBE\u5907-\u505C\u6B62\u626B\u63CF-\u5224\u65AD\u662F\u5426\u6B63\u5728\u626B\u63CF" aria-hidden="true">#</a> 2.5.1 \u626B\u63CF\u8BBE\u5907 &amp; \u505C\u6B62\u626B\u63CF &amp; \u5224\u65AD\u662F\u5426\u6B63\u5728\u626B\u63CF</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* BluetoothAdapter.java */</span>
<span class="token comment">// \u53D1\u73B0\u8FC7\u7A0B\u901A\u5E38\u5305\u62EC\u5927\u7EA6 12 \u79D2\u7684\u67E5\u8BE2\u626B\u63CF\uFF0C\u7136\u540E\u5BF9\u6BCF\u4E2A\u65B0\u8BBE\u5907\u8FDB\u884C\u9875\u9762\u626B\u63CF\uFF0C\u4EE5\u68C0\u7D22\u5176\u84DD\u7259\u540D\u79F0\u3002 </span>
<span class="token keyword">boolean</span> <span class="token function">startDiscovery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8C03\u7528 <code>BluetoothAdapter</code> \u5BF9\u8C61\u7684 <code>startDiscovery()</code> \u65B9\u6CD5\u5F00\u59CB\u626B\u63CF\u9644\u8FD1\u7684\u84DD\u7259\u8BBE\u5907\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* DeviceListActivity */</span>

<span class="token comment">// If we&#39;re already discovering, stop it</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>adapter<span class="token punctuation">.</span><span class="token function">isDiscovering</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    adapter<span class="token punctuation">.</span><span class="token function">cancelDiscovery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Request discover from BluetoothAdapter</span>
adapter<span class="token punctuation">.</span><span class="token function">startDiscovery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p><strong>\u6CE8\u610F</strong>\uFF1A\u5728\u8C03\u7528 <code>startDiscovery()</code> \u65B9\u6CD5\u5F00\u59CB\u626B\u63CF\u8BBE\u5907\u4E4B\u524D\uFF0C\u9700\u8981\u5148\u8C03\u7528 <code>isDiscovering()</code> \u65B9\u6CD5\u6765\u5224\u65AD\u5F53\u524D\u662F\u5426\u6B63\u5728\u626B\u63CF\u3002\u5982\u679C\u5F53\u524D\u6B63\u5728\u626B\u63CF\uFF0C\u90A3\u4E48\u5E94\u8BE5\u5148\u8C03\u7528 <code>cancelDiscovery()</code> \u65B9\u6CD5\u505C\u6B62\u5F53\u524D\u7684\u626B\u63CF\uFF0C\u7136\u540E\u624D\u80FD\u8C03\u7528 <code>startDiscovery()</code> \u65B9\u6CD5\u91CD\u65B0\u5F00\u59CB\u626B\u63CF\u3002</p></blockquote><h4 id="_2-5-2-\u901A\u8FC7\u76D1\u542C\u5E7F\u64AD\u7684\u65B9\u5F0F\u83B7\u53D6\u626B\u63CF\u65F6\u7684\u72B6\u6001\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_2-5-2-\u901A\u8FC7\u76D1\u542C\u5E7F\u64AD\u7684\u65B9\u5F0F\u83B7\u53D6\u626B\u63CF\u65F6\u7684\u72B6\u6001\u4FE1\u606F" aria-hidden="true">#</a> 2.5.2 \u901A\u8FC7\u76D1\u542C\u5E7F\u64AD\u7684\u65B9\u5F0F\u83B7\u53D6\u626B\u63CF\u65F6\u7684\u72B6\u6001\u4FE1\u606F</h4><p>\u8C03\u7528 <code>startDiscovery()</code> \u65B9\u6CD5\u5F00\u59CB\u626B\u63CF\u8BBE\u5907\u540E\uFF0C\u901A\u8FC7\u76D1\u542C\u5E7F\u64AD\u7684\u65B9\u5F0F\u8FDB\u884C\u56DE\u8C03\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* BluetoothAdapter.java */</span>

<span class="token comment">// \u5F00\u59CB\u626B\u63CF\u8BBE\u5907\u65F6\u7684\u56DE\u8C03</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> ACTION_DISCOVERY_STARTED <span class="token operator">=</span> <span class="token string">&quot;android.bluetooth.adapter.action.DISCOVERY_STARTED&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u7ED3\u675F\u626B\u63CF\u8BBE\u5907\u65F6\u7684\u56DE\u8C03</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> ACTION_DISCOVERY_FINISHED <span class="token operator">=</span> <span class="token string">&quot;android.bluetooth.adapter.action.DISCOVERY_FINISHED&quot;</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* BluetoothDevice.java */</span>

<span class="token comment">// \u626B\u63CF\u5230\uFF08\u53D1\u73B0\uFF09\u8BBE\u5907\u65F6\u7684\u56DE\u8C03</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> ACTION_FOUND <span class="token operator">=</span> <span class="token string">&quot;android.bluetooth.device.action.FOUND&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u793A\u4F8B\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* DeviceListActivity */</span>
<span class="token comment">// \u76D1\u542C\u626B\u63CF\u5230\uFF08\u53D1\u73B0\uFF09\u8BBE\u5907\u65F6\u7684\u5E7F\u64AD</span>
<span class="token class-name">IntentFilter</span> filter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntentFilter</span><span class="token punctuation">(</span><span class="token class-name">BluetoothDevice</span><span class="token punctuation">.</span>ACTION_FOUND<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerReceiver</span><span class="token punctuation">(</span>mReceiver<span class="token punctuation">,</span> filter<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u76D1\u542C\u7ED3\u675F\u626B\u63CF\u8BBE\u5907\u65F6\u7684\u5E7F\u64AD</span>
filter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntentFilter</span><span class="token punctuation">(</span><span class="token class-name">BluetoothAdapter</span><span class="token punctuation">.</span>ACTION_DISCOVERY_FINISHED<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerReceiver</span><span class="token punctuation">(</span>mReceiver<span class="token punctuation">,</span> filter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* DeviceListActivity */</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">BroadcastReceiver</span> mReceiver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BroadcastReceiver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onReceive</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token class-name">Intent</span> intent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> action <span class="token operator">=</span> intent<span class="token punctuation">.</span><span class="token function">getAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">BluetoothDevice</span><span class="token punctuation">.</span>ACTION_FOUND<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
            <span class="token class-name">BluetoothDevice</span> device <span class="token operator">=</span> intent<span class="token punctuation">.</span><span class="token function">getParcelableExtra</span><span class="token punctuation">(</span><span class="token class-name">BluetoothDevice</span><span class="token punctuation">.</span>EXTRA_DEVICE<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u626B\u63CF\u5230\u7684\u84DD\u7259\u8BBE\u5907</span>
            
            <span class="token keyword">if</span> <span class="token punctuation">(</span>device<span class="token punctuation">.</span><span class="token function">getBondState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token class-name">BluetoothDevice</span><span class="token punctuation">.</span>BOND_BONDED<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5224\u65AD\u626B\u63CF\u5230\u7684\u84DD\u7259\u8BBE\u5907\u662F\u5426\u5DF2\u914D\u5BF9</span>
                <span class="token comment">/*
                    TODO \u8BB0\u5F55\u672A\u914D\u5BF9\u8BBE\u5907\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u5C06\u5176\u663E\u793A\u5728\u5217\u8868\u4E2D
                */</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">BluetoothAdapter</span><span class="token punctuation">.</span>ACTION_DISCOVERY_FINISHED<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">/*
                TODO\uFF1A
                    1. \u7ED3\u675F\u626B\u63CF\u540E\uFF0C\u5982\u679C\u6CA1\u53D1\u73B0\u4EFB\u4F55\u672A\u914D\u5BF9\u8BBE\u5907\uFF0C\u5E94\u8BE5\u7ED9\u51FA\u63D0\u793A\u4FE1\u606F
                    2. \u7ED3\u675F\u626B\u63CF\u540E\uFF0C\u5982\u679C\u53D1\u73B0\u4E86\u672A\u914D\u5BF9\u8BBE\u5907\uFF0C\u63D0\u793A\u7528\u6237\u4ECE\u5217\u8868\u4E2D\u9009\u62E9\u4E00\u4E2A\u8FDB\u884C\u8FDE\u63A5
            */</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="_2-5-3-\u8BA9\u8BBE\u5907\u5904\u4E8E\u53EF\u88AB\u53D1\u73B0\u7684\u72B6\u6001-scanmode" tabindex="-1"><a class="header-anchor" href="#_2-5-3-\u8BA9\u8BBE\u5907\u5904\u4E8E\u53EF\u88AB\u53D1\u73B0\u7684\u72B6\u6001-scanmode" aria-hidden="true">#</a> 2.5.3 \u8BA9\u8BBE\u5907\u5904\u4E8E\u53EF\u88AB\u53D1\u73B0\u7684\u72B6\u6001 &amp; <code>ScanMode</code></h4><p>\u5982\u679C\u8BBE\u5907 <code>A</code> \u5728\u8C03\u7528\u4E86 <code>startDiscovery()</code> \u65B9\u6CD5\u540E\u5F00\u59CB\u626B\u63CF\u9644\u8FD1\u7684\u8BBE\u5907\u65F6\u672A\u53D1\u73B0\u4EFB\u4F55\u8BBE\u5907\uFF0C\u4F46\u5B9E\u9645\u4E0A\u9644\u52A0\u786E\u5B9E\u6709\u4E00\u4E2A\u8BBE\u5907 <code>B</code> \u5B58\u5728\uFF0C\u90A3\u4E48\u8BBE\u5907 <code>B</code> \u5F88\u53EF\u80FD\u5904\u4E8E\u4E0D\u53EF\u53D1\u73B0\u7684\u72B6\u6001\u3002</p><p>\u56E0\u6B64\u5728\u626B\u63CF\u9644\u8FD1\u7684\u8BBE\u5907 <code>B</code> \u4E4B\u524D\uFF0C\u9700\u8981\u5148\u5728\u8BBE\u5907 <code>B</code> \u4E0A\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u8BA9\u8BBE\u5907 <code>B</code> \u81EA\u8EAB\u5904\u4E8E\u53EF\u88AB\u53D1\u73B0\u7684\u72B6\u6001\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">/* BluetoothChatFragment */</span>

<span class="token comment">/*
    \u6CE8\u610F\uFF1A
    \u8BBE\u5907 A \u548C \u8BBE\u5907 B \u8FD0\u884C\u540C\u4E00\u4E2A App \u7A0B\u5E8F\uFF0C
    \u5F53\u8BBE\u5907 A \u8C03\u7528 \`startDiscovery()\` \u53D1\u8D77\u626B\u63CF\u65F6\uFF0CensureDiscoverable() \u65B9\u6CD5\u5E94\u8BE5\u662F\u5728\u8BBE\u5907 B \u4E2D\u6267\u884C\u7684\uFF0C
    \u5373\u8BA9\u8BBE\u5907 B \u5904\u4E8E\u53EF\u88AB\u53D1\u73B0\u7684\u72B6\u6001\u3002
*/</span>
<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">ensureDiscoverable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
        SCAN_MODE \u5206\u4E09\u7C7B\uFF1A
        1. SCAN_MODE_NONE\uFF1A\u5F53\u524D\u8BBE\u5907\u65E2\u4E0D\u4F1A\u88AB\u8FDC\u7A0B\u8BBE\u5907\u53D1\u73B0\uFF1B\u53C8\u4E0D\u80FD\u548C\u8FDC\u7A0B\u8BBE\u5907\u8FDE\u63A5\u3002
        2. SCAN_MODE_CONNECTABLE\uFF1A\u5F53\u524D\u8BBE\u5907\u4E0D\u4F1A\u88AB\u8FDC\u7A0B\u8BBE\u5907\u53D1\u73B0\uFF1B\u4F46\u80FD\u548C\u8FDC\u7A0B\u8BBE\u5907\u8FDE\u63A5\u3002\uFF08\u9002\u7528\u4E8E\u5F53\u524D\u8BBE\u5907\u5DF2\u914D\u5BF9\u7684\u60C5\u51B5\uFF09
        3. SCAN_MODE_CONNECTABLE_DISCOVERABLE\uFF1A\u5F53\u524D\u8BBE\u5907\u65E2\u4F1A\u88AB\u8FDC\u7A0B\u8BBE\u5907\u53D1\u73B0\uFF1B\u53C8\u80FD\u548C\u8FDC\u7A0B\u8BBE\u5907\u8FDE\u63A5\u3002
    */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mBluetoothAdapter<span class="token punctuation">.</span><span class="token function">getScanMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token class-name">BluetoothAdapter</span><span class="token punctuation">.</span>SCAN_MODE_CONNECTABLE_DISCOVERABLE<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Intent</span> discoverableIntent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token class-name">BluetoothAdapter</span><span class="token punctuation">.</span>ACTION_REQUEST_DISCOVERABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/*
            \u8BBE\u7F6E\u8BBE\u5907\u5728 300s \u7684\u65F6\u95F4\u5185\u662F\u53EF\u88AB\u53D1\u73B0\u7684\uFF08\u9ED8\u8BA4\u662F 120s\uFF0C\u8BBE\u7F6E\u7684\u503C\u4E0D\u80FD\u8D85\u8FC7 300s\uFF09\u3002
        */</span>
        discoverableIntent<span class="token punctuation">.</span><span class="token function">putExtra</span><span class="token punctuation">(</span><span class="token class-name">BluetoothAdapter</span><span class="token punctuation">.</span>EXTRA_DISCOVERABLE_DURATION<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">startActivity</span><span class="token punctuation">(</span>discoverableIntent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u6CE8\u610F\uFF1A\u5728\u8BBE\u5907 <code>A</code> \u4E0E\u8BBE\u5907 <code>B</code> \u4E4B\u95F4\u901A\u8FC7\u84DD\u7259\u76F8\u4E92\u53D1\u9001\u804A\u5929\u6D88\u606F\u65F6\uFF0C\u8BBE\u5907 <code>A</code> \u4E0E\u8BBE\u5907 <code>B</code> \u4E2D\u662F\u540C\u65F6\u5728\u8FD0\u884C\u540C\u4E00\u4E2A <code>App</code> \u7A0B\u5E8F\u7684\u3002</p></blockquote><h3 id="_2-6-\u8FDE\u63A5\u8BBE\u5907" tabindex="-1"><a class="header-anchor" href="#_2-6-\u8FDE\u63A5\u8BBE\u5907" aria-hidden="true">#</a> 2.6 \u8FDE\u63A5\u8BBE\u5907</h3><h4 id="_2-6-1-\u5C06\u8BBE\u5907\u8BBE\u7F6E\u4E3A\u670D\u52A1\u5668\u8BBE\u5907" tabindex="-1"><a class="header-anchor" href="#_2-6-1-\u5C06\u8BBE\u5907\u8BBE\u7F6E\u4E3A\u670D\u52A1\u5668\u8BBE\u5907" aria-hidden="true">#</a> 2.6.1 \u5C06\u8BBE\u5907\u8BBE\u7F6E\u4E3A\u670D\u52A1\u5668\u8BBE\u5907</h4><p>\u4EE5\u84DD\u7259\u804A\u5929\u4E3A\u4F8B\uFF1A</p><ol><li><p>\u8BBE\u5907 <code>A</code> \u53D1\u9001\u6D88\u606F\u7ED9\u8BBE\u5907 <code>B</code> \u65F6\uFF0C\u8BBE\u5907 <code>A</code> \u4F5C\u4E3A\u5BA2\u6237\u7AEF\u8BBE\u5907\uFF0C\u8BBE\u5907 <code>B</code> \u4F5C\u4E3A\u670D\u52A1\u5668\u8BBE\u5907\uFF1B</p></li><li><p>\u8BBE\u5907 <code>B</code> \u53D1\u9001\u6D88\u606F\u7ED9\u8BBE\u5907 <code>A</code> \u65F6\uFF0C\u8BBE\u5907 <code>B</code> \u4F5C\u4E3A\u5BA2\u6237\u7AEF\u8BBE\u5907\uFF0C\u8BBE\u5907 <code>A</code> \u4F5C\u4E3A\u670D\u52A1\u5668\u8BBE\u5907\u3002</p></li></ol><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8BBE\u5907 <code>A</code> \u4E0E\u8BBE\u5907 <code>B</code> \u76F8\u4E92\u53D1\u9001\u6D88\u606F\u65F6\uFF0C\u8981\u5C06\u8FD9\u4E24\u4E2A\u8BBE\u5907\u90FD\u8BBE\u7F6E\u4E3A\u670D\u52A1\u5668\u8BBE\u5907\uFF08<code>SDP</code> \u670D\u52A1\u7AEF\uFF09\u3002</p><p>\u5C06\u84DD\u7259\u8BBE\u5907\u4F5C\u4E3A <code>SDP</code> \u670D\u52A1\u7AEF\u65F6\uFF08<code>SDP</code> \u670D\u52A1\u53D1\u73B0\u534F\u8BAE\uFF09\uFF1A</p><ol><li><p>\u9700\u8981\u5411\u672C\u5730 <code>SDP</code> \u670D\u52A1\u5668\uFF08<code>local SDP server</code>\uFF09\u6CE8\u518C\u4E00\u4E2A\u670D\u52A1\u8BB0\u5F55\uFF08<code>Service Record</code>\uFF09\uFF0C\u5373\u8C03\u7528 <code>BluetoothAdapter.listenUsingRfcommWithServiceRecord(name, uuid)</code> \u65B9\u6CD5\u5411\u672C\u5730 <code>SDP</code> \u670D\u52A1\u5668\u6CE8\u518C\u4E00\u4E2A\u670D\u52A1\u8BB0\u5F55\uFF0C\u5176\u4E2D\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>1. \u53C2\u6570 name \u662F\u81EA\u5B9A\u4E49\u7684\u670D\u52A1\u8BB0\u5F55\u7684\u540D\u79F0\uFF1B
2. \u53C2\u6570 uuid \u662F\u81EA\u5B9A\u4E49\u7684\u670D\u52A1\u8BB0\u5F55\u7684\u552F\u4E00\u6807\u8BC6\uFF1B
3. listenUsingRfcommWithServiceRecord \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A BluetoothServerSocket \u5BF9\u8C61\u3002
</code></pre></div></li><li><p>\u8C03\u7528 <code>BluetoothServerSocket</code> \u5BF9\u8C61\u7684 <code>accept()</code> \u65B9\u6CD5\u76D1\u542C <code>SDP</code> \u5BA2\u6237\u7AEF\u7684\u8FDE\u63A5\u8BF7\u6C42\u3002</p></li></ol><h4 id="_2-6-2-\u5BA2\u6237\u7AEF\u8BBE\u5907-\u672C\u5730\u8BBE\u5907-\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u8BBE\u5907-\u8FDC\u7A0B\u8BBE\u5907" tabindex="-1"><a class="header-anchor" href="#_2-6-2-\u5BA2\u6237\u7AEF\u8BBE\u5907-\u672C\u5730\u8BBE\u5907-\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u8BBE\u5907-\u8FDC\u7A0B\u8BBE\u5907" aria-hidden="true">#</a> 2.6.2 \u5BA2\u6237\u7AEF\u8BBE\u5907\uFF08\u672C\u5730\u8BBE\u5907\uFF09\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u8BBE\u5907\uFF08\u8FDC\u7A0B\u8BBE\u5907\uFF09</h4><p>\u63A5\u6536\u6D88\u606F\u7684\u8BBE\u5907\u4F5C\u4E3A\u670D\u52A1\u5668\u7AEF\uFF08<code>SDP</code> \u670D\u52A1\u7AEF\uFF0C\u5373\u8FDC\u7A0B\u8BBE\u5907\uFF09\uFF0C\u53D1\u9001\u6D88\u606F\u7684\u8BBE\u5907\u4F5C\u4E3A\u5BA2\u6237\u7AEF\u8BBE\u5907\uFF08<code>SDP</code> \u5BA2\u6237\u7AEF\uFF0C\u5373\u672C\u5730\u8BBE\u5907\uFF09\u3002</p><p>\u5F53\u4F5C\u4E3A <code>SDP</code> \u5BA2\u6237\u7AEF\u7684\u84DD\u7259\u8BBE\u5907\u60F3\u4E0E\u4F5C\u4E3A <code>SDP</code> \u670D\u52A1\u7AEF\u7684\u84DD\u7259\u8BBE\u5907\u901A\u4FE1\u65F6\uFF1A</p><ol><li><p>\u9996\u5148\u5728\u4F5C\u4E3A <code>SDP</code> \u5BA2\u6237\u7AEF\u7684\u84DD\u7259\u8BBE\u5907\u4E0A\u53D1\u73B0\uFF08\u626B\u63CF\uFF09\u9644\u8FD1\u7684\u4F5C\u4E3A <code>SDP</code> \u670D\u52A1\u7AEF\u7684\u84DD\u7259\u8BBE\u5907\uFF0C\u4ECE\u800C\u62FF\u5230\u4F5C\u4E3A <code>SDP</code> \u670D\u52A1\u7AEF\u7684\u84DD\u7259\u8BBE\u5907\u7684 <code>mac</code> \u5730\u5740\uFF1B</p></li><li><p>\u5728\u4F5C\u4E3A <code>SDP</code> \u5BA2\u6237\u7AEF\u7684\u84DD\u7259\u8BBE\u5907\u4E0A\uFF0C\u8C03\u7528 <code>BluetoothAdapter.getRemoveDevice(address)</code> \u65B9\u6CD5\uFF0C\u4F20\u5165\u4F5C\u4E3A <code>SDP</code> \u670D\u52A1\u7AEF\u7684\u84DD\u7259\u8BBE\u5907\u7684 <code>mac</code> \u5730\u5740\uFF0C\u4ECE\u800C\u5728\u4F5C\u4E3A <code>SDP</code> \u5BA2\u6237\u7AEF\u7684\u84DD\u7259\u8BBE\u5907\u4E0A\u5F97\u5230\u4F5C\u4E3A <code>SDP</code> \u670D\u52A1\u7AEF\u7684\u84DD\u7259\u8BBE\u5907\u7684 <code>BluetoothDevice</code> \u5BF9\u8C61\uFF1B</p></li><li><p>\u5728\u4F5C\u4E3A <code>SDP</code> \u5BA2\u6237\u7AEF\u7684\u84DD\u7259\u8BBE\u5907\u4E0A\u8C03\u7528\u4F5C\u4E3A <code>SDP</code> \u670D\u52A1\u7AEF\u7684\u84DD\u7259\u8BBE\u5907\u7684 <code>BluetoothDevice</code> \u5BF9\u8C61\u7684 <code>BluetoothDevice.createRfcommSocketToServiceRecord(uuid)</code> \u65B9\u6CD5\uFF0C\u4F20\u5165\u5728\u4F5C\u4E3A <code>SDP</code> \u670D\u52A1\u7AEF\u7684\u84DD\u7259\u8BBE\u5907\u4E2D\u7684\u5DF2\u7ECF\u6CE8\u518C\u4E86\u7684\u670D\u52A1\u8BB0\u5F55\u7684 <code>uuid</code> \u503C\u3002\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A <code>BluetoothSocket</code> \u5BF9\u8C61\uFF0C\u8C03\u7528\u8FD4\u56DE\u7684 <code>BluetoothSocket</code> \u5BF9\u8C61\u7684 <code>connect</code> \u65B9\u6CD5\uFF0C\u4ECE\u800C\u5EFA\u7ACB\u8D77\u8FDE\u63A5\u3002</p></li></ol><h4 id="_2-6-3-\u603B\u7ED3-\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_2-6-3-\u603B\u7ED3-\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 2.6.3 \u603B\u7ED3 &amp; \u6CE8\u610F\u4E8B\u9879</h4><p>\u603B\u7ED3\uFF1A</p><p><img src="`+s+'" alt="" loading="lazy"></p><p>\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ol><li><p>\u7ECF\u5178\u84DD\u7259\u7684\u901A\u4FE1\u662F\u5EFA\u7ACB\u5728 <code>Socket</code>\u4E0A\u7684\uFF1B</p></li><li><p><code>SDP</code> \u670D\u52A1\u7AEF\u9700\u8981\u5C06\u6CE8\u518C\u7684\u670D\u52A1\u8BB0\u5F55\u7684 <code>uuid</code> \u63D0\u4F9B\u7ED9 <code>SDP</code> \u5BA2\u6237\u7AEF\uFF1B</p></li><li><p><code>SDP</code> \u5BA2\u6237\u7AEF\u9700\u8981\u77E5\u9053 <code>SDP</code> \u670D\u52A1\u7AEF\u7684 <code>mac</code> \u5730\u5740\u4EE5\u53CA\u6CE8\u518C\u7684\u67D0\u4E2A\u670D\u52A1\u8BB0\u5F55\u7684 <code>uuid</code>\uFF0C\u624D\u80FD\u8FDE\u63A5\u5230 <code>SDP</code> \u670D\u52A1\u7AEF\u3002</p></li></ol>',61);function o(p,c){return t}var u=n(e,[["render",o],["__file","classic-bluetooth.html.vue"]]);export{u as default};