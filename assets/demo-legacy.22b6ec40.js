System.register(["./mobile-legacy.0181b7a7.js","./vendor-legacy.2cbae777.js","./index-legacy.4b6dd49d.js"],(function(e){"use strict";var n,l,t,u,c,s,r;return{setters:[function(e){n=e.c},function(e){l=e.k,t=e.r,u=e.o,c=e.c,s=e.f,r=e.i},function(){}],execute:function(){const{createDemo:i}=n("price");var d=e("default",i({setup(){const e=l(0);return setInterval((()=>{e.value=1e7*Math.random()}),1e3),{price:e}}}));const a={class:"demo"},o=s("h2",null,"基本用法",-1),f=s("h2",null,"有人民币符号，无千位分隔",-1),p=s("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1),m=s("h2",null,"异步随机变更",-1);d.render=function(e,n,l,i,d,h){const b=t("nut-price"),y=t("nut-cell");return u(),c("div",a,[o,s(y,null,{default:r((()=>[s(b,{price:1010,"need-symbol":!1,thousands:!0})])),_:1}),f,s(y,null,{default:r((()=>[s(b,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),p,s(y,null,{default:r((()=>[s(b,{price:15213.1221,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1}),m,s(y,null,{default:r((()=>[s(b,{price:e.price,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])}}}}));
