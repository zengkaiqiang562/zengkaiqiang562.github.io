import{_ as i,o,c as h,a as t,b as r,F as n,d as e,e as s,r as p}from"./app.625aa393.js";var l="/assets/public-key-cryptography.22f51898.png",S="/assets/OWF.e638a930.png",d="/assets/symmetric-encryption.49278a92.png",c="/assets/attack1.cfda3eb1.png",T="/assets/digital-signature.6fb25ead.png",_="/assets/public-key-transmission.cc467609.png";const g={},L=e("\u672C\u6587\u7531 "),u={href:"https://github.com/Snailclimb",target:"_blank",rel:"noopener noreferrer"},b=e("SnailClimb"),f=e(" \u548C "),C={href:"https://github.com/csguide-dabai",target:"_blank",rel:"noopener noreferrer"},P=e("csguide-dabai"),H=e(" \uFF08\u516C\u4F17\u53F7\u201CCS\u6307\u5357\u201D\u4F5C\u8005\uFF09\u5171\u540C\u5B8C\u6210\u3002"),m=s('<h2 id="http-\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#http-\u534F\u8BAE" aria-hidden="true">#</a> HTTP \u534F\u8BAE</h2><h3 id="http-\u534F\u8BAE\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#http-\u534F\u8BAE\u4ECB\u7ECD" aria-hidden="true">#</a> HTTP \u534F\u8BAE\u4ECB\u7ECD</h3><p>HTTP \u534F\u8BAE\uFF0C\u5168\u79F0\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF08Hypertext Transfer Protocol\uFF09\u3002\u987E\u540D\u601D\u4E49\uFF0CHTTP \u534F\u8BAE\u5C31\u662F\u7528\u6765\u89C4\u8303\u8D85\u6587\u672C\u7684\u4F20\u8F93\uFF0C\u8D85\u6587\u672C\uFF0C\u4E5F\u5C31\u662F\u7F51\u7EDC\u4E0A\u7684\u5305\u62EC\u6587\u672C\u5728\u5185\u7684\u5404\u5F0F\u5404\u6837\u7684\u6D88\uFF0C\u5177\u4F53\u6765\u8BF4\uFF0C\u4E3B\u8981\u662F\u6765\u89C4\u8303\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u7AEF\u7684\u884C\u4E3A\u7684\u3002</p><p>\u5E76\u4E14\uFF0CHTTP \u662F\u4E00\u4E2A\u65E0\u72B6\u6001\uFF08stateless\uFF09\u534F\u8BAE\uFF0C\u4E5F\u5C31\u662F\u8BF4\u670D\u52A1\u5668\u4E0D\u7EF4\u62A4\u4EFB\u4F55\u6709\u5173\u5BA2\u6237\u7AEF\u8FC7\u53BB\u6240\u53D1\u8BF7\u6C42\u7684\u6D88\u606F\u3002\u8FD9\u5176\u5B9E\u662F\u4E00\u79CD\u61D2\u653F\uFF0C\u6709\u72B6\u6001\u534F\u8BAE\u4F1A\u66F4\u52A0\u590D\u6742\uFF0C\u9700\u8981\u7EF4\u62A4\u72B6\u6001\uFF08\u5386\u53F2\u4FE1\u606F\uFF09\uFF0C\u800C\u4E14\u5982\u679C\u5BA2\u6237\u6216\u670D\u52A1\u5668\u5931\u6548\uFF0C\u4F1A\u4EA7\u751F\u72B6\u6001\u7684\u4E0D\u4E00\u81F4\uFF0C\u89E3\u51B3\u8FD9\u79CD\u4E0D\u4E00\u81F4\u7684\u4EE3\u4EF7\u66F4\u9AD8\u3002</p><h3 id="http-\u534F\u8BAE\u901A\u4FE1\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#http-\u534F\u8BAE\u901A\u4FE1\u8FC7\u7A0B" aria-hidden="true">#</a> HTTP \u534F\u8BAE\u901A\u4FE1\u8FC7\u7A0B</h3><p>HTTP \u662F\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u5B83\u4EE5 TCP\uFF08\u4F20\u8F93\u5C42\uFF09\u4F5C\u4E3A\u5E95\u5C42\u534F\u8BAE\uFF0C\u9ED8\u8BA4\u7AEF\u53E3\u4E3A 80. \u901A\u4FE1\u8FC7\u7A0B\u4E3B\u8981\u5982\u4E0B\uFF1A</p><ol><li>\u670D\u52A1\u5668\u5728 80 \u7AEF\u53E3\u7B49\u5F85\u5BA2\u6237\u7684\u8BF7\u6C42\u3002</li><li>\u6D4F\u89C8\u5668\u53D1\u8D77\u5230\u670D\u52A1\u5668\u7684 TCP \u8FDE\u63A5\uFF08\u521B\u5EFA\u5957\u63A5\u5B57 Socket\uFF09\u3002</li><li>\u670D\u52A1\u5668\u63A5\u6536\u6765\u81EA\u6D4F\u89C8\u5668\u7684 TCP \u8FDE\u63A5\u3002</li><li>\u6D4F\u89C8\u5668\uFF08HTTP \u5BA2\u6237\u7AEF\uFF09\u4E0E Web \u670D\u52A1\u5668\uFF08HTTP \u670D\u52A1\u5668\uFF09\u4EA4\u6362 HTTP \u6D88\u606F\u3002</li><li>\u5173\u95ED TCP \u8FDE\u63A5\u3002</li></ol><h3 id="http-\u534F\u8BAE\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#http-\u534F\u8BAE\u4F18\u70B9" aria-hidden="true">#</a> HTTP \u534F\u8BAE\u4F18\u70B9</h3><p>\u6269\u5C55\u6027\u5F3A\u3001\u901F\u5EA6\u5FEB\u3001\u8DE8\u5E73\u53F0\u652F\u6301\u6027\u597D\u3002</p><h2 id="https-\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#https-\u534F\u8BAE" aria-hidden="true">#</a> HTTPS \u534F\u8BAE</h2><h3 id="https-\u534F\u8BAE\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#https-\u534F\u8BAE\u4ECB\u7ECD" aria-hidden="true">#</a> HTTPS \u534F\u8BAE\u4ECB\u7ECD</h3><p>HTTPS \u534F\u8BAE\uFF08Hyper Text Transfer Protocol Secure\uFF09\uFF0C\u662F HTTP \u7684\u52A0\u5F3A\u5B89\u5168\u7248\u672C\u3002HTTPS \u662F\u57FA\u4E8E HTTP \u7684\uFF0C\u4E5F\u662F\u7528 TCP \u4F5C\u4E3A\u5E95\u5C42\u534F\u8BAE\uFF0C\u5E76\u989D\u5916\u4F7F\u7528 SSL/TLS \u534F\u8BAE\u7528\u4F5C\u52A0\u5BC6\u548C\u5B89\u5168\u8BA4\u8BC1\u3002\u9ED8\u8BA4\u7AEF\u53E3\u53F7\u662F 443.</p><p>HTTPS \u534F\u8BAE\u4E2D\uFF0CSSL \u901A\u9053\u901A\u5E38\u4F7F\u7528\u57FA\u4E8E\u5BC6\u94A5\u7684\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u5BC6\u94A5\u957F\u5EA6\u901A\u5E38\u662F 40 \u6BD4\u7279\u6216 128 \u6BD4\u7279\u3002</p><h3 id="https-\u534F\u8BAE\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#https-\u534F\u8BAE\u4F18\u70B9" aria-hidden="true">#</a> HTTPS \u534F\u8BAE\u4F18\u70B9</h3><p>\u4FDD\u5BC6\u6027\u597D\u3001\u4FE1\u4EFB\u5EA6\u9AD8\u3002</p><h2 id="https-\u7684\u6838\u5FC3\u2014ssl-tls\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#https-\u7684\u6838\u5FC3\u2014ssl-tls\u534F\u8BAE" aria-hidden="true">#</a> HTTPS \u7684\u6838\u5FC3\u2014SSL/TLS\u534F\u8BAE</h2><p>HTTPS \u4E4B\u6240\u4EE5\u80FD\u8FBE\u5230\u8F83\u9AD8\u7684\u5B89\u5168\u6027\u8981\u6C42\uFF0C\u5C31\u662F\u7ED3\u5408\u4E86 SSL/TLS \u548C TCP \u534F\u8BAE\uFF0C\u5BF9\u901A\u4FE1\u6570\u636E\u8FDB\u884C\u52A0\u5BC6\uFF0C\u89E3\u51B3\u4E86 HTTP \u6570\u636E\u900F\u660E\u7684\u95EE\u9898\u3002\u63A5\u4E0B\u6765\u91CD\u70B9\u4ECB\u7ECD\u4E00\u4E0B SSL/TLS \u7684\u5DE5\u4F5C\u539F\u7406\u3002</p><h3 id="ssl-\u548C-tls-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#ssl-\u548C-tls-\u7684\u533A\u522B" aria-hidden="true">#</a> SSL \u548C TLS \u7684\u533A\u522B\uFF1F</h3><p><strong>SSL \u548C TLS \u6CA1\u6709\u592A\u5927\u7684\u533A\u522B\u3002</strong></p><p>SSL \u6307\u5B89\u5168\u5957\u63A5\u5B57\u534F\u8BAE\uFF08Secure Sockets Layer\uFF09\uFF0C\u9996\u6B21\u53D1\u5E03\u4E0E 1996 \u5E74\u3002SSL \u7684\u9996\u6B21\u53D1\u5E03\u5176\u5B9E\u5DF2\u7ECF\u662F\u4ED6\u7684 3.0 \u7248\u672C\uFF0CSSL 1.0 \u4ECE\u672A\u9762\u4E16\uFF0CSSL 2.0 \u5219\u5177\u6709\u8F83\u5927\u7684\u7F3A\u9677\uFF08DROWN \u7F3A\u9677\u2014\u2014Decrypting RSA with Obsolete and Weakened eNcryption\uFF09\u3002\u5F88\u5FEB\uFF0C\u5728 1999 \u5E74\uFF0CSSL 3.0 \u8FDB\u4E00\u6B65\u5347\u7EA7\uFF0C<strong>\u65B0\u7248\u672C\u88AB\u547D\u540D\u4E3A TLS 1.0</strong>\u3002\u56E0\u6B64\uFF0CTLS \u662F\u57FA\u4E8E SSL \u4E4B\u4E0A\u7684\uFF0C\u4F46\u7531\u4E8E\u4E60\u60EF\u53EB\u6CD5\uFF0C\u901A\u5E38\u628A HTTPS \u4E2D\u7684\u6838\u5FC3\u52A0\u5BC6\u534F\u8BAE\u6DF7\u6210\u4E3A SSL/TLS\u3002</p><h3 id="ssl-tls-\u7684\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#ssl-tls-\u7684\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> SSL/TLS \u7684\u5DE5\u4F5C\u539F\u7406</h3><h4 id="\u975E\u5BF9\u79F0\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#\u975E\u5BF9\u79F0\u52A0\u5BC6" aria-hidden="true">#</a> \u975E\u5BF9\u79F0\u52A0\u5BC6</h4><p>SSL/TLS \u7684\u6838\u5FC3\u8981\u7D20\u662F<strong>\u975E\u5BF9\u79F0\u52A0\u5BC6</strong>\u3002\u975E\u5BF9\u79F0\u52A0\u5BC6\u91C7\u7528\u4E24\u4E2A\u5BC6\u94A5\u2014\u2014\u4E00\u4E2A\u516C\u94A5\uFF0C\u4E00\u4E2A\u79C1\u94A5\u3002\u5728\u901A\u4FE1\u65F6\uFF0C\u79C1\u94A5\u4EC5\u7531\u89E3\u5BC6\u8005\u4FDD\u5B58\uFF0C\u516C\u94A5\u7531\u4EFB\u4F55\u4E00\u4E2A\u60F3\u4E0E\u89E3\u5BC6\u8005\u901A\u4FE1\u7684\u53D1\u9001\u8005\uFF08\u52A0\u5BC6\u8005\uFF09\u6240\u77E5\u3002\u53EF\u4EE5\u8BBE\u60F3\u4E00\u4E2A\u573A\u666F\uFF0C</p><blockquote><p>\u5728\u67D0\u4E2A\u81EA\u52A9\u90AE\u5C40\uFF0C\u6BCF\u4E2A\u901A\u4FE1\u4FE1\u9053\u90FD\u662F\u4E00\u4E2A\u90AE\u7BB1\uFF0C\u6BCF\u4E00\u4E2A\u90AE\u7BB1\u6240\u6709\u8005\u90FD\u5728\u65C1\u8FB9\u7ACB\u4E86\u4E00\u4E2A\u724C\u5B50\uFF0C\u4E0A\u9762\u6302\u7740\u4E00\u628A\u94A5\u5319\uFF1A\u8FD9\u662F\u6211\u7684\u516C\u94A5\uFF0C\u53D1\u9001\u8005\u8BF7\u5C06\u4FE1\u4EF6\u653E\u5165\u6211\u7684\u90AE\u7BB1\uFF0C\u5E76\u7528\u516C\u94A5\u9501\u597D\u3002</p><p>\u4F46\u662F\u516C\u94A5\u53EA\u80FD\u52A0\u9501\uFF0C\u5E76\u4E0D\u80FD\u89E3\u9501\u3002\u89E3\u9501\u53EA\u80FD\u7531\u90AE\u7BB1\u7684\u6240\u6709\u8005\u2014\u2014\u56E0\u4E3A\u53EA\u6709\u4ED6\u4FDD\u5B58\u7740\u79C1\u94A5\u3002</p><p>\u8FD9\u6837\uFF0C\u901A\u4FE1\u4FE1\u606F\u5C31\u4E0D\u4F1A\u88AB\u5176\u4ED6\u4EBA\u622A\u83B7\u4E86\uFF0C\u8FD9\u4F9D\u8D56\u4E8E\u79C1\u94A5\u7684\u4FDD\u5BC6\u6027\u3002</p></blockquote><p><img src="'+l+'" alt="" loading="lazy"></p><p>\u975E\u5BF9\u79F0\u52A0\u5BC6\u7684\u516C\u94A5\u548C\u79C1\u94A5\u9700\u8981\u91C7\u7528\u4E00\u79CD\u590D\u6742\u7684\u6570\u5B66\u673A\u5236\u751F\u6210\uFF08\u5BC6\u7801\u5B66\u8BA4\u4E3A\uFF0C\u4E3A\u4E86\u8F83\u9AD8\u7684\u5B89\u5168\u6027\uFF0C\u5C3D\u91CF\u4E0D\u8981\u81EA\u5DF1\u521B\u9020\u52A0\u5BC6\u65B9\u6848\uFF09\u3002\u516C\u79C1\u94A5\u5BF9\u7684\u751F\u6210\u7B97\u6CD5\u4F9D\u8D56\u4E8E\u5355\u5411\u9677\u95E8\u51FD\u6570\u3002</p><blockquote><p>\u5355\u5411\u51FD\u6570\uFF1A\u5DF2\u77E5\u5355\u5411\u51FD\u6570 f\uFF0C\u7ED9\u5B9A\u4EFB\u610F\u4E00\u4E2A\u8F93\u5165 x\uFF0C\u6613\u8BA1\u7B97\u8F93\u51FA y=f(x)\uFF1B\u800C\u7ED9\u5B9A\u4E00\u4E2A\u8F93\u51FA y\uFF0C\u5047\u8BBE\u5B58\u5728 f(x)=y\uFF0C\u5F88\u96BE\u6839\u636E f \u6765\u8BA1\u7B97\u51FA x\u3002</p><p>\u5355\u5411\u9677\u95E8\u51FD\u6570\uFF1A\u4E00\u4E2A\u8F83\u5F31\u7684\u5355\u5411\u51FD\u6570\u3002\u5DF2\u77E5\u5355\u5411\u9677\u95E8\u51FD\u6570 f\uFF0C\u9677\u95E8 h\uFF0C\u7ED9\u5B9A\u4EFB\u610F\u4E00\u4E2A\u8F93\u5165 x\uFF0C\u6613\u8BA1\u7B97\u51FA\u8F93\u51FA y=f(x;h)\uFF1B\u800C\u7ED9\u5B9A\u4E00\u4E2A\u8F93\u51FA y\uFF0C\u5047\u8BBE\u5B58\u5728 f(x;h)=y\uFF0C\u5F88\u96BE\u6839\u636E f \u6765\u8BA1\u7B97\u51FA x\uFF0C\u4F46\u53EF\u4EE5\u6839\u636E f \u548C h \u6765\u63A8\u5BFC\u51FA x\u3002</p></blockquote><p><img src="'+S+'" alt="\u5355\u5411\u51FD\u6570" loading="lazy"></p><p>\u4E0A\u56FE\u5C31\u662F\u4E00\u4E2A\u5355\u5411\u51FD\u6570\uFF08\u4E0D\u662F\u5355\u9879\u9677\u95E8\u51FD\u6570\uFF09\uFF0C\u5047\u8BBE\u6709\u4E00\u4E2A\u7EDD\u4E16\u79D8\u7C4D\uFF0C\u4EFB\u4F55\u77E5\u9053\u4E86\u8FD9\u4E2A\u79D8\u7C4D\u7684\u4EBA\u90FD\u53EF\u4EE5\u628A\u82F9\u679C\u6C41\u69A8\u6210\u82F9\u679C\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u79D8\u7C4D\u5C31\u662F\u201C\u9677\u95E8\u201D\u4E86\u5427\u3002</p><p>\u5728\u8FD9\u91CC\uFF0C\u51FD\u6570 f \u7684\u8BA1\u7B97\u65B9\u6CD5\u76F8\u5F53\u4E8E\u516C\u94A5\uFF0C\u9677\u95E8 h \u76F8\u5F53\u4E8E\u79C1\u94A5\u3002\u516C\u94A5 f \u662F\u516C\u5F00\u7684\uFF0C\u4EFB\u4F55\u4EBA\u5BF9\u5DF2\u6709\u8F93\u5165\uFF0C\u90FD\u53EF\u4EE5\u7528 f \u52A0\u5BC6\uFF0C\u800C\u8981\u60F3\u6839\u636E\u52A0\u5BC6\u4FE1\u606F\u8FD8\u539F\u51FA\u539F\u4FE1\u606F\uFF0C\u5FC5\u987B\u8981\u6709\u79C1\u94A5\u624D\u884C\u3002</p><h4 id="\u5BF9\u79F0\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u79F0\u52A0\u5BC6" aria-hidden="true">#</a> \u5BF9\u79F0\u52A0\u5BC6</h4><p>\u4F7F\u7528 SSL/TLS \u8FDB\u884C\u901A\u4FE1\u7684\u53CC\u65B9\u9700\u8981\u4F7F\u7528\u975E\u5BF9\u79F0\u52A0\u5BC6\u65B9\u6848\u6765\u901A\u4FE1\uFF0C\u4F46\u662F\u975E\u5BF9\u79F0\u52A0\u5BC6\u8BBE\u8BA1\u4E86\u8F83\u4E3A\u590D\u6742\u7684\u6570\u5B66\u7B97\u6CD5\uFF0C\u5728\u5B9E\u9645\u901A\u4FE1\u8FC7\u7A0B\u4E2D\uFF0C\u8BA1\u7B97\u7684\u4EE3\u4EF7\u8F83\u9AD8\uFF0C\u6548\u7387\u592A\u4F4E\uFF0C\u56E0\u6B64\uFF0CSSL/TLS \u5B9E\u9645\u5BF9\u6D88\u606F\u7684\u52A0\u5BC6\u4F7F\u7528\u7684\u662F\u5BF9\u79F0\u52A0\u5BC6\u3002</p><blockquote><p>\u5BF9\u79F0\u52A0\u5BC6\uFF1A\u901A\u4FE1\u53CC\u65B9\u5171\u4EAB\u552F\u4E00\u5BC6\u94A5 k\uFF0C\u52A0\u89E3\u5BC6\u7B97\u6CD5\u5DF2\u77E5\uFF0C\u52A0\u5BC6\u65B9\u5229\u7528\u5BC6\u94A5 k \u52A0\u5BC6\uFF0C\u89E3\u5BC6\u65B9\u5229\u7528\u5BC6\u94A5 k \u89E3\u5BC6\uFF0C\u4FDD\u5BC6\u6027\u4F9D\u8D56\u4E8E\u5BC6\u94A5 k \u7684\u4FDD\u5BC6\u6027\u3002</p></blockquote><p><img src="'+d+'" alt="" loading="lazy"></p><p>\u5BF9\u79F0\u52A0\u5BC6\u7684\u5BC6\u94A5\u751F\u6210\u4EE3\u4EF7\u6BD4\u516C\u79C1\u94A5\u5BF9\u7684\u751F\u6210\u4EE3\u4EF7\u4F4E\u5F97\u591A\uFF0C\u90A3\u4E48\u6709\u7684\u4EBA\u4F1A\u95EE\u4E86\uFF0C\u4E3A\u4EC0\u4E48 SSL/TLS \u8FD8\u9700\u8981\u4F7F\u7528\u975E\u5BF9\u79F0\u52A0\u5BC6\u5462\uFF1F\u56E0\u4E3A\u5BF9\u79F0\u52A0\u5BC6\u7684\u4FDD\u5BC6\u6027\u5B8C\u5168\u4F9D\u8D56\u4E8E\u5BC6\u94A5\u7684\u4FDD\u5BC6\u6027\u3002\u5728\u53CC\u65B9\u901A\u4FE1\u4E4B\u524D\uFF0C\u9700\u8981\u5546\u91CF\u4E00\u4E2A\u7528\u4E8E\u5BF9\u79F0\u52A0\u5BC6\u7684\u5BC6\u94A5\u3002\u6211\u4EEC\u77E5\u9053\u7F51\u7EDC\u901A\u4FE1\u7684\u4FE1\u9053\u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u4F20\u8F93\u62A5\u6587\u5BF9\u4EFB\u4F55\u4EBA\u662F\u53EF\u89C1\u7684\uFF0C\u5BC6\u94A5\u7684\u4EA4\u6362\u80AF\u5B9A\u4E0D\u80FD\u76F4\u63A5\u5728\u7F51\u7EDC\u4FE1\u9053\u4E2D\u4F20\u8F93\u3002\u56E0\u6B64\uFF0C\u4F7F\u7528\u975E\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u5BF9\u5BF9\u79F0\u52A0\u5BC6\u7684\u5BC6\u94A5\u8FDB\u884C\u52A0\u5BC6\uFF0C\u4FDD\u62A4\u8BE5\u5BC6\u94A5\u4E0D\u5728\u7F51\u7EDC\u4FE1\u9053\u4E2D\u88AB\u7A83\u542C\u3002\u8FD9\u6837\uFF0C\u901A\u4FE1\u53CC\u65B9\u53EA\u9700\u8981\u4E00\u6B21\u975E\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u4EA4\u6362\u5BF9\u79F0\u52A0\u5BC6\u7684\u5BC6\u94A5\uFF0C\u5728\u4E4B\u540E\u7684\u4FE1\u606F\u901A\u4FE1\u4E2D\uFF0C\u4F7F\u7528\u7EDD\u5BF9\u5B89\u5168\u7684\u5BC6\u94A5\uFF0C\u5BF9\u4FE1\u606F\u8FDB\u884C\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u5373\u53EF\u4FDD\u8BC1\u4F20\u8F93\u6D88\u606F\u7684\u4FDD\u5BC6\u6027\u3002</p><h4 id="\u516C\u94A5\u4F20\u8F93\u7684\u4FE1\u8D56\u6027" tabindex="-1"><a class="header-anchor" href="#\u516C\u94A5\u4F20\u8F93\u7684\u4FE1\u8D56\u6027" aria-hidden="true">#</a> \u516C\u94A5\u4F20\u8F93\u7684\u4FE1\u8D56\u6027</h4><p>SSL/TLS \u4ECB\u7ECD\u5230\u8FD9\u91CC\uFF0C\u4E86\u89E3\u4FE1\u606F\u5B89\u5168\u7684\u670B\u53CB\u53C8\u4F1A\u60F3\u5230\u4E00\u4E2A\u5B89\u5168\u9690\u60A3\uFF0C\u8BBE\u60F3\u4E00\u4E2A\u4E0B\u9762\u7684\u573A\u666F\uFF1A</p><blockquote><p>\u5BA2\u6237\u7AEF C \u548C\u670D\u52A1\u5668 S \u60F3\u8981\u4F7F\u7528 SSL/TLS \u901A\u4FE1\uFF0C\u7531\u4E0A\u8FF0 SSL/TLS \u901A\u4FE1\u539F\u7406\uFF0CC \u9700\u8981\u5148\u77E5\u9053 S \u7684\u516C\u94A5\uFF0C\u800C S \u516C\u94A5\u7684\u552F\u4E00\u83B7\u53D6\u9014\u5F84\uFF0C\u5C31\u662F\u628A S \u516C\u94A5\u5728\u7F51\u7EDC\u4FE1\u9053\u4E2D\u4F20\u8F93\u3002\u8981\u6CE8\u610F\u7F51\u7EDC\u4FE1\u9053\u901A\u4FE1\u4E2D\u6709\u51E0\u4E2A\u524D\u63D0\uFF1A</p><ol><li>\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u6355\u83B7\u901A\u4FE1\u5305</li><li>\u901A\u4FE1\u5305\u7684\u4FDD\u5BC6\u6027\u7531\u53D1\u9001\u8005\u8BBE\u8BA1</li><li>\u4FDD\u5BC6\u7B97\u6CD5\u8BBE\u8BA1\u65B9\u6848\u9ED8\u8BA4\u4E3A\u516C\u5F00\uFF0C\u800C\uFF08\u89E3\u5BC6\uFF09\u5BC6\u94A5\u9ED8\u8BA4\u662F\u5B89\u5168\u7684</li></ol><p>\u56E0\u6B64\uFF0C\u5047\u8BBE S \u516C\u94A5\u4E0D\u505A\u52A0\u5BC6\uFF0C\u5728\u4FE1\u9053\u4E2D\u4F20\u8F93\uFF0C\u90A3\u4E48\u5F88\u6709\u53EF\u80FD\u5B58\u5728\u4E00\u4E2A\u653B\u51FB\u8005 A\uFF0C\u53D1\u9001\u7ED9 C \u4E00\u4E2A\u8BC8\u5305\uFF0C\u5047\u88C5\u662F S \u516C\u94A5\uFF0C\u5176\u5B9E\u662F\u8BF1\u9975\u670D\u52A1\u5668 AS \u7684\u516C\u94A5\u3002\u5F53 C \u6536\u83B7\u4E86 AS \u7684\u516C\u94A5\uFF08\u5374\u4EE5\u4E3A\u662F S \u7684\u516C\u94A5\uFF09\uFF0CC \u540E\u7EED\u5C31\u4F1A\u4F7F\u7528 AS \u516C\u94A5\u5BF9\u6570\u636E\u8FDB\u884C\u52A0\u5BC6\uFF0C\u5E76\u5728\u516C\u5F00\u4FE1\u9053\u4F20\u8F93\uFF0C\u90A3\u4E48 A \u5C06\u6355\u83B7\u8FD9\u4E9B\u52A0\u5BC6\u5305\uFF0C\u7528 AS \u7684\u79C1\u94A5\u89E3\u5BC6\uFF0C\u5C31\u622A\u83B7\u4E86 C \u672C\u8981\u7ED9 S \u53D1\u9001\u7684\u5185\u5BB9\uFF0C\u800C C \u548C S \u4E8C\u4EBA\u5168\u7136\u4E0D\u77E5\u3002</p><p>\u540C\u6837\u7684\uFF0CS \u516C\u94A5\u5373\u4F7F\u505A\u52A0\u5BC6\uFF0C\u4E5F\u96BE\u4EE5\u907F\u514D\u8FD9\u79CD\u4FE1\u4EFB\u6027\u95EE\u9898\uFF0CC \u88AB AS \u62D0\u8DD1\u4E86\uFF01</p></blockquote><p><img src="'+c+'" alt="" loading="lazy"></p><p>\u4E3A\u4E86\u516C\u94A5\u4F20\u8F93\u7684\u4FE1\u8D56\u6027\u95EE\u9898\uFF0C\u7B2C\u4E09\u65B9\u673A\u6784\u5E94\u8FD0\u800C\u751F\u2014\u2014\u8BC1\u4E66\u9881\u53D1\u673A\u6784\uFF08CA\uFF0CCertificate Authority\uFF09\u3002CA \u9ED8\u8BA4\u662F\u53D7\u4FE1\u4EFB\u7684\u7B2C\u4E09\u65B9\u3002CA \u4F1A\u7ED9\u5404\u4E2A\u670D\u52A1\u5668\u9881\u53D1\u8BC1\u4E66\uFF0C\u8BC1\u4E66\u5B58\u50A8\u5728\u670D\u52A1\u5668\u4E0A\uFF0C\u5E76\u9644\u6709 CA \u7684<strong>\u7535\u5B50\u7B7E\u540D</strong>\uFF08\u89C1\u4E0B\u8282\uFF09\u3002</p><p>\u5F53\u5BA2\u6237\u7AEF\uFF08\u6D4F\u89C8\u5668\uFF09\u5411\u670D\u52A1\u5668\u53D1\u9001 HTTPS \u8BF7\u6C42\u65F6\uFF0C\u4E00\u5B9A\u8981\u5148\u83B7\u53D6\u76EE\u6807\u670D\u52A1\u5668\u7684\u8BC1\u4E66\uFF0C\u5E76\u6839\u636E\u8BC1\u4E66\u4E0A\u7684\u4FE1\u606F\uFF0C\u68C0\u9A8C\u8BC1\u4E66\u7684\u5408\u6CD5\u6027\u3002\u4E00\u65E6\u5BA2\u6237\u7AEF\u68C0\u6D4B\u5230\u8BC1\u4E66\u975E\u6CD5\uFF0C\u5C31\u4F1A\u53D1\u751F\u9519\u8BEF\u3002\u5BA2\u6237\u7AEF\u83B7\u53D6\u4E86\u670D\u52A1\u5668\u7684\u8BC1\u4E66\u540E\uFF0C\u7531\u4E8E\u8BC1\u4E66\u7684\u4FE1\u4EFB\u6027\u662F\u7531\u7B2C\u4E09\u65B9\u4FE1\u8D56\u673A\u6784\u8BA4\u8BC1\u7684\uFF0C\u800C\u8BC1\u4E66\u4E0A\u53C8\u5305\u542B\u7740\u670D\u52A1\u5668\u7684\u516C\u94A5\u4FE1\u606F\uFF0C\u5BA2\u6237\u7AEF\u5C31\u53EF\u4EE5\u653E\u5FC3\u7684\u4FE1\u4EFB\u8BC1\u4E66\u4E0A\u7684\u516C\u94A5\u5C31\u662F\u76EE\u6807\u670D\u52A1\u5668\u7684\u516C\u94A5\u3002</p><h4 id="\u6570\u5B57\u7B7E\u540D" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u7B7E\u540D" aria-hidden="true">#</a> \u6570\u5B57\u7B7E\u540D</h4><p>\u597D\uFF0C\u5230\u8FD9\u4E00\u5C0F\u8282\uFF0C\u5DF2\u7ECF\u662F SSL/TLS \u7684\u5C3E\u58F0\u4E86\u3002\u4E0A\u4E00\u5C0F\u8282\u63D0\u5230\u4E86\u6570\u5B57\u7B7E\u540D\uFF0C\u6570\u5B57\u7B7E\u540D\u8981\u89E3\u51B3\u7684\u95EE\u9898\uFF0C\u662F\u9632\u6B62\u8BC1\u4E66\u88AB\u4F2A\u9020\u3002\u7B2C\u4E09\u65B9\u4FE1\u8D56\u673A\u6784 CA \u4E4B\u6240\u4EE5\u80FD\u88AB\u4FE1\u8D56\uFF0C\u5C31\u662F <strong>\u9760\u6570\u5B57\u7B7E\u540D\u6280\u672F</strong> \u3002</p><p>\u6570\u5B57\u7B7E\u540D\uFF0C\u662F CA \u5728\u7ED9\u670D\u52A1\u5668\u9881\u53D1\u8BC1\u4E66\u65F6\uFF0C\u4F7F\u7528\u6563\u5217+\u52A0\u5BC6\u7684\u7EC4\u5408\u6280\u672F\uFF0C\u5728\u8BC1\u4E66\u4E0A\u76D6\u4E2A\u7AE0\uFF0C\u4EE5\u6B64\u6765\u63D0\u4F9B\u9A8C\u4F2A\u7684\u529F\u80FD\u3002\u5177\u4F53\u884C\u4E3A\u5982\u4E0B\uFF1A</p><blockquote><p>CA \u77E5\u9053\u670D\u52A1\u5668\u7684\u516C\u94A5\uFF0C\u5BF9\u8BE5\u516C\u94A5\u91C7\u7528\u6563\u5217\u6280\u672F\u751F\u6210\u4E00\u4E2A\u6458\u8981\u3002CA \u4F7F\u7528 CA \u79C1\u94A5\u5BF9\u8BE5\u6458\u8981\u8FDB\u884C\u52A0\u5BC6\uFF0C\u5E76\u9644\u5728\u8BC1\u4E66\u4E0B\u65B9\uFF0C\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u3002</p><p>\u73B0\u5728\u670D\u52A1\u5668\u5C06\u8BE5\u8BC1\u4E66\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u9A8C\u8BC1\u8BE5\u8BC1\u4E66\u7684\u8EAB\u4EFD\u3002\u5BA2\u6237\u7AEF\u627E\u5230\u7B2C\u4E09\u65B9\u673A\u6784 CA\uFF0C\u83B7\u77E5 CA \u7684\u516C\u94A5\uFF0C\u5E76\u7528 CA \u516C\u94A5\u5BF9\u8BC1\u4E66\u7684\u7B7E\u540D\u8FDB\u884C\u89E3\u5BC6\uFF0C\u83B7\u5F97\u4E86 CA \u751F\u6210\u7684\u6458\u8981\u3002</p><p>\u5BA2\u6237\u7AEF\u5BF9\u8BC1\u4E66\u6570\u636E\uFF08\u4E5F\u5C31\u662F\u670D\u52A1\u5668\u7684\u516C\u94A5\uFF09\u505A\u76F8\u540C\u7684\u6563\u5217\u5904\u7406\uFF0C\u5F97\u5230\u6458\u8981\uFF0C\u5E76\u5C06\u8BE5\u6458\u8981\u4E0E\u4E4B\u524D\u4ECE\u7B7E\u540D\u4E2D\u89E3\u7801\u51FA\u7684\u6458\u8981\u505A\u5BF9\u6BD4\uFF0C\u5982\u679C\u76F8\u540C\uFF0C\u5219\u8EAB\u4EFD\u9A8C\u8BC1\u6210\u529F\uFF1B\u5426\u5219\u9A8C\u8BC1\u5931\u8D25\u3002</p></blockquote><p><img src="'+T+'" alt="" loading="lazy"></p><p>\u603B\u7ED3\u6765\u8BF4\uFF0C\u5E26\u6709\u8BC1\u4E66\u7684\u516C\u94A5\u4F20\u8F93\u673A\u5236\u5982\u4E0B\uFF1A</p><ol><li>\u8BBE\u6709\u670D\u52A1\u5668 S\uFF0C\u5BA2\u6237\u7AEF C\uFF0C\u548C\u7B2C\u4E09\u65B9\u4FE1\u8D56\u673A\u6784 CA\u3002</li><li>S \u4FE1\u4EFB CA\uFF0CCA \u662F\u77E5\u9053 S \u516C\u94A5\u7684\uFF0CCA \u5411 S \u9881\u53D1\u8BC1\u4E66\u3002\u5E76\u9644\u4E0A CA \u79C1\u94A5\u5BF9\u6D88\u606F\u6458\u8981\u7684\u52A0\u5BC6\u7B7E\u540D\u3002</li><li>S \u83B7\u5F97 CA \u9881\u53D1\u7684\u8BC1\u4E66\uFF0C\u5C06\u8BE5\u8BC1\u4E66\u4F20\u9012\u7ED9 C\u3002</li><li>C \u83B7\u5F97 S \u7684\u8BC1\u4E66\uFF0C\u4FE1\u4EFB CA \u5E76\u77E5\u6653 CA \u516C\u94A5\uFF0C\u4F7F\u7528 CA \u516C\u94A5\u5BF9 S \u8BC1\u4E66\u4E0A\u7684\u7B7E\u540D\u89E3\u5BC6\uFF0C\u540C\u65F6\u5BF9\u6D88\u606F\u8FDB\u884C\u6563\u5217\u5904\u7406\uFF0C\u5F97\u5230\u6458\u8981\u3002\u6BD4\u8F83\u6458\u8981\uFF0C\u9A8C\u8BC1 S \u8BC1\u4E66\u7684\u771F\u5B9E\u6027\u3002</li><li>\u5982\u679C C \u9A8C\u8BC1 S \u8BC1\u4E66\u662F\u771F\u5B9E\u7684\uFF0C\u5219\u4FE1\u4EFB S \u7684\u516C\u94A5\uFF08\u5728 S \u8BC1\u4E66\u4E2D\uFF09\u3002</li></ol><p><img src="'+_+'" alt="" loading="lazy"></p>',49),x=e("\u5BF9\u4E8E\u6570\u5B57\u7B7E\u540D\uFF0C\u6211\u8FD9\u91CC\u8BB2\u7684\u6BD4\u8F83\u7B80\u5355\uFF0C\u5982\u679C\u4F60\u6CA1\u6709\u641E\u6E05\u695A\u7684\u8BDD\uFF0C\u5F3A\u70C8\u63A8\u8350\u4F60\u770B\u770B"),A={href:"https://www.bilibili.com/video/BV18N411X7ty/",target:"_blank",rel:"noopener noreferrer"},k=e("\u6570\u5B57\u7B7E\u540D\u53CA\u6570\u5B57\u8BC1\u4E66\u539F\u7406"),y=e("\u8FD9\u4E2A\u89C6\u9891\uFF0C\u8FD9\u662F\u6211\u770B\u8FC7\u6700\u6E05\u6670\u7684\u8BB2\u89E3\u3002"),q=s('<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/image-20220321121814946.png" alt="" loading="lazy"></p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li><strong>\u7AEF\u53E3\u53F7</strong> \uFF1AHTTP \u9ED8\u8BA4\u662F 80\uFF0CHTTPS \u9ED8\u8BA4\u662F 443\u3002</li><li><strong>URL \u524D\u7F00</strong> \uFF1AHTTP \u7684 URL \u524D\u7F00\u662F <code>http://</code>\uFF0CHTTPS \u7684 URL \u524D\u7F00\u662F <code>https://</code>\u3002</li><li><strong>\u5B89\u5168\u6027\u548C\u8D44\u6E90\u6D88\u8017</strong> \uFF1A HTTP \u534F\u8BAE\u8FD0\u884C\u5728 TCP \u4E4B\u4E0A\uFF0C\u6240\u6709\u4F20\u8F93\u7684\u5185\u5BB9\u90FD\u662F\u660E\u6587\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u90FD\u65E0\u6CD5\u9A8C\u8BC1\u5BF9\u65B9\u7684\u8EAB\u4EFD\u3002HTTPS \u662F\u8FD0\u884C\u5728 SSL/TLS \u4E4B\u4E0A\u7684 HTTP \u534F\u8BAE\uFF0CSSL/TLS \u8FD0\u884C\u5728 TCP \u4E4B\u4E0A\u3002\u6240\u6709\u4F20\u8F93\u7684\u5185\u5BB9\u90FD\u7ECF\u8FC7\u52A0\u5BC6\uFF0C\u52A0\u5BC6\u91C7\u7528\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u4F46\u5BF9\u79F0\u52A0\u5BC6\u7684\u5BC6\u94A5\u7528\u670D\u52A1\u5668\u65B9\u7684\u8BC1\u4E66\u8FDB\u884C\u4E86\u975E\u5BF9\u79F0\u52A0\u5BC6\u3002\u6240\u4EE5\u8BF4\uFF0CHTTP \u5B89\u5168\u6027\u6CA1\u6709 HTTPS \u9AD8\uFF0C\u4F46\u662F HTTPS \u6BD4 HTTP \u8017\u8D39\u66F4\u591A\u670D\u52A1\u5668\u8D44\u6E90\u3002</li></ul>',3);function v(z,N){const a=p("ExternalLinkIcon");return o(),h(n,null,[t("blockquote",null,[t("p",null,[L,t("a",u,[b,r(a)]),f,t("a",C,[P,r(a)]),H])]),m,t("p",null,[x,t("a",A,[k,r(a)]),y]),q],64)}var V=i(g,[["render",v],["__file","http&https.html.vue"]]);export{V as default};