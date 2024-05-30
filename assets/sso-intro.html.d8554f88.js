import{_ as i,r,c as l,a as t,b as s,F as a,d as e,e as n,o as d}from"./app.2a01fc36.js";const h={},c=t("blockquote",null,[t("p",null,"\u672C\u6587\u6388\u6743\u8F6C\u8F7D\u81EA \uFF1A https://ken.io/note/sso-design-implement \u4F5C\u8005\uFF1Aken.io")],-1),p=t("h2",{id:"\u4E00\u3001\u524D\u8A00",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u4E00\u3001\u524D\u8A00","aria-hidden":"true"},"#"),e(" \u4E00\u3001\u524D\u8A00")],-1),_=t("h3",{id:"_1\u3001sso\u8BF4\u660E",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1\u3001sso\u8BF4\u660E","aria-hidden":"true"},"#"),e(" 1\u3001SSO\u8BF4\u660E")],-1),g=t("p",null,"SSO\u82F1\u6587\u5168\u79F0Single Sign On\uFF0C\u5355\u70B9\u767B\u5F55\u3002SSO\u662F\u5728\u591A\u4E2A\u5E94\u7528\u7CFB\u7EDF\u4E2D\uFF0C\u7528\u6237\u53EA\u9700\u8981\u767B\u5F55\u4E00\u6B21\u5C31\u53EF\u4EE5\u8BBF\u95EE\u6240\u6709\u76F8\u4E92\u4FE1\u4EFB\u7684\u5E94\u7528\u7CFB\u7EDF\u3002https://baike.baidu.com/item/SSO/3451380",-1),u=t("p",null,"\u4F8B\u5982\u8BBF\u95EE\u5728\u7F51\u6613\u8D26\u53F7\u4E2D\u5FC3\uFF08https://reg.163.com/ \uFF09\u767B\u5F55\u4E4B\u540E \u8BBF\u95EE\u4EE5\u4E0B\u7AD9\u70B9\u90FD\u662F\u767B\u5F55\u72B6\u6001",-1),k=e("\u7F51\u6613\u76F4\u64AD "),b={href:"https://v.163.com/",target:"_blank",rel:"noopener noreferrer"},S=e("https://v.163.com"),m=e("\u7F51\u6613\u535A\u5BA2 "),f={href:"https://blog.163.com/",target:"_blank",rel:"noopener noreferrer"},O=e("https://blog.163.com"),x=e("\u7F51\u6613\u82B1\u7530 "),A={href:"https://love.163.com/",target:"_blank",rel:"noopener noreferrer"},w=e("https://love.163.com"),T=e("\u7F51\u6613\u8003\u62C9 "),y={href:"https://www.kaola.com/",target:"_blank",rel:"noopener noreferrer"},C=e("https://www.kaola.com"),q=e("\u7F51\u6613Lofter "),v={href:"http://www.lofter.com/",target:"_blank",rel:"noopener noreferrer"},z=e("http://www.lofter.com"),I=n('<h3 id="_2\u3001\u5355\u70B9\u767B\u5F55\u7CFB\u7EDF\u7684\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5355\u70B9\u767B\u5F55\u7CFB\u7EDF\u7684\u597D\u5904" aria-hidden="true">#</a> 2\u3001\u5355\u70B9\u767B\u5F55\u7CFB\u7EDF\u7684\u597D\u5904</h3><ol><li><strong>\u7528\u6237\u89D2\u5EA6</strong> :\u7528\u6237\u80FD\u591F\u505A\u5230\u4E00\u6B21\u767B\u5F55\u591A\u6B21\u4F7F\u7528\uFF0C\u65E0\u9700\u8BB0\u5F55\u591A\u5957\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u7701\u5FC3\u3002</li><li><strong>\u7CFB\u7EDF\u7BA1\u7406\u5458\u89D2\u5EA6</strong> : \u7BA1\u7406\u5458\u53EA\u9700\u7EF4\u62A4\u597D\u4E00\u4E2A\u7EDF\u4E00\u7684\u8D26\u53F7\u4E2D\u5FC3\u5C31\u53EF\u4EE5\u4E86\uFF0C\u65B9\u4FBF\u3002</li><li><strong>\u65B0\u7CFB\u7EDF\u5F00\u53D1\u89D2\u5EA6:</strong> \u65B0\u7CFB\u7EDF\u5F00\u53D1\u65F6\u53EA\u9700\u76F4\u63A5\u5BF9\u63A5\u7EDF\u4E00\u7684\u8D26\u53F7\u4E2D\u5FC3\u5373\u53EF\uFF0C\u7B80\u5316\u5F00\u53D1\u6D41\u7A0B\uFF0C\u7701\u65F6\u3002</li></ol><h3 id="_3\u3001\u8BBE\u8BA1\u76EE\u6807" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u8BBE\u8BA1\u76EE\u6807" aria-hidden="true">#</a> 3\u3001\u8BBE\u8BA1\u76EE\u6807</h3><p>\u672C\u7BC7\u6587\u7AE0\u4E5F\u4E3B\u8981\u662F\u4E3A\u4E86\u63A2\u8BA8\u5982\u4F55\u8BBE\u8BA1&amp;\u5B9E\u73B0\u4E00\u4E2ASSO\u7CFB\u7EDF</p><p>\u4EE5\u4E0B\u4E3A\u9700\u8981\u5B9E\u73B0\u7684\u6838\u5FC3\u529F\u80FD\uFF1A</p><ul><li>\u5355\u70B9\u767B\u5F55</li><li>\u5355\u70B9\u767B\u51FA</li><li>\u652F\u6301\u8DE8\u57DF\u5355\u70B9\u767B\u5F55</li><li>\u652F\u6301\u8DE8\u57DF\u5355\u70B9\u767B\u51FA</li></ul><h2 id="\u4E8C\u3001sso\u8BBE\u8BA1\u4E0E\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001sso\u8BBE\u8BA1\u4E0E\u5B9E\u73B0" aria-hidden="true">#</a> \u4E8C\u3001SSO\u8BBE\u8BA1\u4E0E\u5B9E\u73B0</h2><h3 id="_1\u3001\u6838\u5FC3\u5E94\u7528\u4E0E\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u6838\u5FC3\u5E94\u7528\u4E0E\u4F9D\u8D56" aria-hidden="true">#</a> 1\u3001\u6838\u5FC3\u5E94\u7528\u4E0E\u4F9D\u8D56</h3><p><img src="https://img.ken.io/blog/sso/sso-system.png-kblb.png" alt="\u5355\u70B9\u767B\u5F55\uFF08SSO\uFF09\u8BBE\u8BA1" loading="lazy"></p><table><thead><tr><th>\u5E94\u7528/\u6A21\u5757/\u5BF9\u8C61</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u524D\u53F0\u7AD9\u70B9</td><td>\u9700\u8981\u767B\u5F55\u7684\u7AD9\u70B9</td></tr><tr><td>SSO\u7AD9\u70B9-\u767B\u5F55</td><td>\u63D0\u4F9B\u767B\u5F55\u7684\u9875\u9762</td></tr><tr><td>SSO\u7AD9\u70B9-\u767B\u51FA</td><td>\u63D0\u4F9B\u6CE8\u9500\u767B\u5F55\u7684\u5165\u53E3</td></tr><tr><td>SSO\u670D\u52A1-\u767B\u5F55</td><td>\u63D0\u4F9B\u767B\u5F55\u670D\u52A1</td></tr><tr><td>SSO\u670D\u52A1-\u767B\u5F55\u72B6\u6001</td><td>\u63D0\u4F9B\u767B\u5F55\u72B6\u6001\u6821\u9A8C/\u767B\u5F55\u4FE1\u606F\u67E5\u8BE2\u7684\u670D\u52A1</td></tr><tr><td>SSO\u670D\u52A1-\u767B\u51FA</td><td>\u63D0\u4F9B\u7528\u6237\u6CE8\u9500\u767B\u5F55\u7684\u670D\u52A1</td></tr><tr><td>\u6570\u636E\u5E93</td><td>\u5B58\u50A8\u7528\u6237\u8D26\u6237\u4FE1\u606F</td></tr><tr><td>\u7F13\u5B58</td><td>\u5B58\u50A8\u7528\u6237\u7684\u767B\u5F55\u4FE1\u606F\uFF0C\u901A\u5E38\u4F7F\u7528Redis</td></tr></tbody></table><h3 id="_2\u3001\u7528\u6237\u767B\u5F55\u72B6\u6001\u7684\u5B58\u50A8\u4E0E\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u7528\u6237\u767B\u5F55\u72B6\u6001\u7684\u5B58\u50A8\u4E0E\u6821\u9A8C" aria-hidden="true">#</a> 2\u3001\u7528\u6237\u767B\u5F55\u72B6\u6001\u7684\u5B58\u50A8\u4E0E\u6821\u9A8C</h3>',11),N=e("\u5E38\u89C1\u7684Web\u6846\u67B6\u5BF9\u4E8E"),U={href:"https://ken.io/note/session-principle-skill",target:"_blank",rel:"noopener noreferrer"},R=e("Session"),P=e("\u7684\u5B9E\u73B0\u90FD\u662F\u751F\u6210\u4E00\u4E2ASessionId\u5B58\u50A8\u5728\u6D4F\u89C8\u5668Cookie\u4E2D\u3002\u7136\u540E\u5C06Session\u5185\u5BB9\u5B58\u50A8\u5728\u670D\u52A1\u5668\u7AEF\u5185\u5B58\u4E2D\uFF0C\u8FD9\u4E2A ken.io \u5728\u4E4B\u524D"),V={href:"https://ken.io/note/session-principle-skill",target:"_blank",rel:"noopener noreferrer"},B=e("Session\u5DE5\u4F5C\u539F\u7406"),E=e("\u4E2D\u4E5F\u63D0\u5230\u8FC7\u3002\u6574\u4F53\u4E5F\u662F\u501F\u9274\u8FD9\u4E2A\u601D\u8DEF\u3002 \u7528\u6237\u767B\u5F55\u6210\u529F\u4E4B\u540E\uFF0C\u751F\u6210AuthToken\u4EA4\u7ED9\u5BA2\u6237\u7AEF\u4FDD\u5B58\u3002\u5982\u679C\u662F\u6D4F\u89C8\u5668\uFF0C\u5C31\u4FDD\u5B58\u5728Cookie\u4E2D\u3002\u5982\u679C\u662F\u624B\u673AApp\u5C31\u4FDD\u5B58\u5728App\u672C\u5730\u7F13\u5B58\u4E2D\u3002\u672C\u7BC7\u4E3B\u8981\u63A2\u8BA8\u57FA\u4E8EWeb\u7AD9\u70B9\u7684SSO\u3002 \u7528\u6237\u5728\u6D4F\u89C8\u9700\u8981\u767B\u5F55\u7684\u9875\u9762\u65F6\uFF0C\u5BA2\u6237\u7AEF\u5C06AuthToken\u63D0\u4EA4\u7ED9SSO\u670D\u52A1\u6821\u9A8C\u767B\u5F55\u72B6\u6001/\u83B7\u53D6\u7528\u6237\u767B\u5F55\u4FE1\u606F"),L=n('<p>\u5BF9\u4E8E\u767B\u5F55\u4FE1\u606F\u7684\u5B58\u50A8\uFF0C\u5EFA\u8BAE\u91C7\u7528Redis\uFF0C\u4F7F\u7528Redis\u96C6\u7FA4\u6765\u5B58\u50A8\u767B\u5F55\u4FE1\u606F\uFF0C\u65E2\u53EF\u4EE5\u4FDD\u8BC1\u9AD8\u53EF\u7528\uFF0C\u53C8\u53EF\u4EE5\u7EBF\u6027\u6269\u5145\u3002\u540C\u65F6\u4E5F\u53EF\u4EE5\u8BA9SSO\u670D\u52A1\u6EE1\u8DB3\u8D1F\u8F7D\u5747\u8861/\u53EF\u4F38\u7F29\u7684\u9700\u6C42\u3002</p><table><thead><tr><th>\u5BF9\u8C61</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>AuthToken</td><td>\u76F4\u63A5\u4F7F\u7528UUID/GUID\u5373\u53EF\uFF0C\u5982\u679C\u6709\u9A8C\u8BC1AuthToken\u5408\u6CD5\u6027\u9700\u6C42\uFF0C\u53EF\u4EE5\u5C06UserName+\u65F6\u95F4\u6233\u52A0\u5BC6\u751F\u6210\uFF0C\u670D\u52A1\u7AEF\u89E3\u5BC6\u4E4B\u540E\u9A8C\u8BC1\u5408\u6CD5\u6027</td></tr><tr><td>\u767B\u5F55\u4FE1\u606F</td><td>\u901A\u5E38\u662F\u5C06UserId\uFF0CUserName\u7F13\u5B58\u8D77\u6765</td></tr></tbody></table><h3 id="_3\u3001\u7528\u6237\u767B\u5F55-\u767B\u5F55\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u7528\u6237\u767B\u5F55-\u767B\u5F55\u6821\u9A8C" aria-hidden="true">#</a> 3\u3001\u7528\u6237\u767B\u5F55/\u767B\u5F55\u6821\u9A8C</h3><ul><li>\u767B\u5F55\u65F6\u5E8F\u56FE</li></ul><p><img src="https://img.ken.io/blog/sso/sso-login-sequence.png-kbrb.png" alt="SSO\u7CFB\u7EDF\u8BBE\u8BA1-\u767B\u5F55\u65F6\u5E8F\u56FE" loading="lazy"></p><p>\u6309\u7167\u4E0A\u56FE\uFF0C\u7528\u6237\u767B\u5F55\u540EAuthToken\u4FDD\u5B58\u5728Cookie\u4E2D\u3002 domain=test.com \u6D4F\u89C8\u5668\u4F1A\u5C06domain\u8BBE\u7F6E\u6210 .test.com\uFF0C \u8FD9\u6837\u8BBF\u95EE\u6240\u6709*.test.com\u7684web\u7AD9\u70B9\uFF0C\u90FD\u4F1A\u5C06AuthToken\u643A\u5E26\u5230\u670D\u52A1\u5668\u7AEF\u3002 \u7136\u540E\u901A\u8FC7SSO\u670D\u52A1\uFF0C\u5B8C\u6210\u5BF9\u7528\u6237\u72B6\u6001\u7684\u6821\u9A8C/\u7528\u6237\u767B\u5F55\u4FE1\u606F\u7684\u83B7\u53D6</p><ul><li>\u767B\u5F55\u4FE1\u606F\u83B7\u53D6/\u767B\u5F55\u72B6\u6001\u6821\u9A8C</li></ul><p><img src="https://img.ken.io/blog/sso/sso-logincheck-sequence.png-kbrb.png" alt="SSO\u7CFB\u7EDF\u8BBE\u8BA1-\u767B\u5F55\u4FE1\u606F\u83B7\u53D6/\u767B\u5F55\u72B6\u6001\u6821\u9A8C" loading="lazy"></p><h3 id="_4\u3001\u7528\u6237\u767B\u51FA" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u7528\u6237\u767B\u51FA" aria-hidden="true">#</a> 4\u3001\u7528\u6237\u767B\u51FA</h3><p>\u7528\u6237\u767B\u51FA\u65F6\u8981\u505A\u7684\u4E8B\u60C5\u5F88\u7B80\u5355\uFF1A</p><ol><li>\u670D\u52A1\u7AEF\u6E05\u9664\u7F13\u5B58\uFF08Redis\uFF09\u4E2D\u7684\u767B\u5F55\u72B6\u6001</li><li>\u5BA2\u6237\u7AEF\u6E05\u9664\u5B58\u50A8\u7684AuthToken</li></ol><ul><li>\u767B\u51FA\u65F6\u5E8F\u56FE</li></ul><p><img src="https://img.ken.io/blog/sso/sso-logout-sequence.png-kbrb.png" alt="SSO\u7CFB\u7EDF\u8BBE\u8BA1-\u7528\u6237\u767B\u51FA" loading="lazy"></p><h3 id="_5\u3001\u8DE8\u57DF\u767B\u5F55\u3001\u767B\u51FA" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u8DE8\u57DF\u767B\u5F55\u3001\u767B\u51FA" aria-hidden="true">#</a> 5\u3001\u8DE8\u57DF\u767B\u5F55\u3001\u767B\u51FA</h3><p>\u524D\u9762\u63D0\u5230\u8FC7\uFF0C\u6838\u5FC3\u601D\u8DEF\u662F\u5BA2\u6237\u7AEF\u5B58\u50A8AuthToken\uFF0C\u670D\u52A1\u5668\u7AEF\u901A\u8FC7Redis\u5B58\u50A8\u767B\u5F55\u4FE1\u606F\u3002\u7531\u4E8E\u5BA2\u6237\u7AEF\u662F\u5C06AuthToken\u5B58\u50A8\u5728Cookie\u4E2D\u7684\u3002\u6240\u4EE5\u8DE8\u57DF\u8981\u89E3\u51B3\u7684\u95EE\u9898\uFF0C\u5C31\u662F\u5982\u4F55\u89E3\u51B3Cookie\u7684\u8DE8\u57DF\u8BFB\u5199\u95EE\u9898\u3002</p><p>\u89E3\u51B3\u8DE8\u57DF\u7684\u6838\u5FC3\u601D\u8DEF\u5C31\u662F\uFF1A</p><ul><li>\u767B\u5F55\u5B8C\u6210\u4E4B\u540E\u901A\u8FC7\u56DE\u8C03\u7684\u65B9\u5F0F\uFF0C\u5C06AuthToken\u4F20\u9012\u7ED9\u4E3B\u57DF\u540D\u4E4B\u5916\u7684\u7AD9\u70B9\uFF0C\u8BE5\u7AD9\u70B9\u81EA\u884C\u5C06AuthToken\u4FDD\u5B58\u5728\u5F53\u524D\u57DF\u4E0B\u7684Cookie\u4E2D\u3002</li><li>\u767B\u51FA\u5B8C\u6210\u4E4B\u540E\u901A\u8FC7\u56DE\u8C03\u7684\u65B9\u5F0F\uFF0C\u8C03\u7528\u975E\u4E3B\u57DF\u540D\u7AD9\u70B9\u7684\u767B\u51FA\u9875\u9762\uFF0C\u5B8C\u6210\u8BBE\u7F6ECookie\u4E2D\u7684AuthToken\u8FC7\u671F\u7684\u64CD\u4F5C\u3002</li><li>\u8DE8\u57DF\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u5DF2\u767B\u5F55\uFF09</li></ul><p><img src="https://img.ken.io/blog/sso/sso-crossdomain-login-loggedin-sequence.png-kbrb.png" alt="SSO\u7CFB\u7EDF\u8BBE\u8BA1-\u8DE8\u57DF\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u5DF2\u767B\u5F55\uFF09" loading="lazy"></p><ul><li>\u8DE8\u57DF\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u672A\u767B\u5F55\uFF09</li></ul><p><img src="https://img.ken.io/blog/sso/sso-crossdomain-login-unlogin-sequence.png-kbrb.png" alt="SSO\u7CFB\u7EDF\u8BBE\u8BA1-\u8DE8\u57DF\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u672A\u767B\u5F55\uFF09" loading="lazy"></p><ul><li>\u8DE8\u57DF\u767B\u51FA</li></ul><p><img src="https://img.ken.io/blog/sso/sso-crossdomain-logout-sequence.png-kbrb.png" alt="SSO\u7CFB\u7EDF\u8BBE\u8BA1-\u8DE8\u57DF\u767B\u51FA" loading="lazy"></p><h2 id="\u4E09\u3001\u5907\u6CE8" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5907\u6CE8" aria-hidden="true">#</a> \u4E09\u3001\u5907\u6CE8</h2><ul><li>\u5173\u4E8E\u65B9\u6848</li></ul><p>\u8FD9\u6B21\u8BBE\u8BA1\u65B9\u6848\u66F4\u591A\u662F\u63D0\u4F9B\u5B9E\u73B0\u601D\u8DEF\u3002\u5982\u679C\u6D89\u53CA\u5230APP\u7528\u6237\u767B\u5F55\u7B49\u60C5\u51B5\uFF0C\u5728\u8BBF\u95EESSO\u670D\u52A1\u65F6\uFF0C\u589E\u52A0\u5BF9APP\u7684\u7B7E\u540D\u9A8C\u8BC1\u5C31\u597D\u4E86\u3002\u5F53\u7136\uFF0C\u5982\u679C\u6709\u65E0\u7EBF\u7F51\u5173\uFF0C\u9A8C\u8BC1\u7B7E\u540D\u4E0D\u662F\u95EE\u9898\u3002</p><ul><li>\u5173\u4E8E\u65F6\u5E8F\u56FE</li></ul><p>\u65F6\u5E8F\u56FE\u4E2D\u5E76\u6CA1\u6709\u5305\u542B\u6240\u6709\u573A\u666F\uFF0Cken.io\u53EA\u5217\u4E3E\u4E86\u6838\u5FC3/\u4E3B\u8981\u573A\u666F\uFF0C\u53E6\u5916\u5BF9\u4E8E\u4E00\u4E9B\u4E0D\u5F71\u54CD\u7406\u89E3\u601D\u8DEF\u7684\u6D88\u606F\u80FD\u7701\u5C31\u7701\u4E86\u3002</p>',27);function D(F,W){const o=r("ExternalLinkIcon");return d(),l(a,null,[c,p,_,g,u,t("ul",null,[t("li",null,[k,t("a",b,[S,s(o)])]),t("li",null,[m,t("a",f,[O,s(o)])]),t("li",null,[x,t("a",A,[w,s(o)])]),t("li",null,[T,t("a",y,[C,s(o)])]),t("li",null,[q,t("a",v,[z,s(o)])])]),I,t("p",null,[N,t("a",U,[R,s(o)]),P,t("a",V,[B,s(o)]),E]),L],64)}var j=i(h,[["render",D],["__file","sso-intro.html.vue"]]);export{j as default};