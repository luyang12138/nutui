var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(l,t,u)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[t]=u;import{c as a}from"./mobile.e1a8929d.js";import{a as m,A as r,x as o,y as c,r as d,o as p,c as f,f as v,s as b,j as y}from"./vendor.6c8f51ae.js";import"./index.8d8f94cc.js";const{createDemo:h}=a("menu");var L=h({props:{},setup(){const e=m({title:"热门推荐",menuList:[{value:"手机"},{value:"电脑"},{value:"家用电器"},{value:"日用百货"}],menuList2:[{value:"热门推荐",id:111},{value:"手机数码",id:112},{value:"电脑办公",id:113},{value:"美妆护肤",id:114},{value:"个护清洁",id:115},{value:"汽车生活",id:116},{value:"京东超市",id:117},{value:"母婴童装",id:118}]});return a=((e,l)=>{for(var t in l||(l={}))n.call(l,t)&&i(e,t,l[t]);if(u)for(var t of u(l))s.call(l,t)&&i(e,t,l[t]);return e})({},r(e)),l(a,t({getChecked:(e,l)=>{alert("选择菜单选项："+l),console.log(11,e,l)},alertText:(e,l)=>{console.log(e,l),"title"==l?alert("菜单标题点击："+e):alert("禁用操作")}}));var a}});const g=b();o("data-v-5766ebca");const _={class:"demo full menu-demo"},j=v("h2",null,"基础用法",-1),O=v("h2",null,"多列展示",-1),k=v("h2",null,"禁用操作",-1),C=v("p",{class:"tips"},"`disabled` 属性可对菜单列表进行禁用操作。`autoClose` 属性控制下拉菜单列表是否选择后自动收起，默认自动收起。",-1),x=v("h2",null,"禁止蒙层展示",-1),P=v("p",{class:"tips"},"属性`hasMask`控制是否有蒙层，默认为 `true`展示蒙层 ",-1),w=v("h2",null,"点击事件",-1),M=v("p",{class:"tips"},"标题点击事件`menu-click`，菜单列表选择点击事件`change`",-1),T=v("h2",null,"自定义内容",-1),D={class:"user-style"},I=y("确认提交");c();const z=g(((e,l,t,u,n,s)=>{const i=d("nut-menu-item"),a=d("nut-menu"),m=d("nut-cell"),r=d("nut-button");return p(),f("div",_,[j,v(a,null,{default:g((()=>[v(i,{"menu-list":e.menuList,title:"最新商品"},null,8,["menu-list"]),v(i,{"menu-list":e.menuList,title:e.title},null,8,["menu-list","title"])])),_:1}),O,v(a,null,{default:g((()=>[v(i,{class:"base-style","menu-list":e.menuList2,title:"单列展示","multi-style":"1","max-height":"200"},null,8,["menu-list"]),v(i,{"menu-list":e.menuList2,title:"双列展示","multi-style":"2"},null,8,["menu-list"]),v(i,{"menu-list":e.menuList2,title:"三列展示","multi-style":"3"},null,8,["menu-list"])])),_:1}),k,C,v(a,null,{default:g((()=>[v(i,{"menu-list":e.menuList,title:"最新商品"},null,8,["menu-list"]),v(i,{"menu-list":e.menuList,title:"禁止自动收起","auto-close":!1},null,8,["menu-list"]),v(i,{"menu-list":e.menuList2,title:"筛选",disabled:""},null,8,["menu-list"])])),_:1}),x,P,v(a,{"has-mask":!1},{default:g((()=>[v(i,{"menu-list":e.menuList,title:"最新商品"},null,8,["menu-list"]),v(i,{"menu-list":e.menuList,title:e.title},null,8,["menu-list","title"])])),_:1}),w,M,v(a,null,{default:g((()=>[v(i,{"menu-list":e.menuList,title:"选择菜单列表项","multi-style":"2",onMenuClick:l[1]||(l[1]=l=>e.alertText(l,"title")),onChange:e.getChecked},null,8,["menu-list","onChange"]),v(i,{"menu-list":e.menuList2,title:"选中标题触发",disabled:"",onMenuClick:e.alertText},null,8,["menu-list","onMenuClick"])])),_:1}),T,v(a,null,{default:g((()=>[v(i,{title:"自定义选项"},{default:g((()=>[v("div",D,[v(m,{title:"我是标题",desc:"描述文字"}),v(m,null,{default:g((()=>[v(r,{size:"large",type:"primary"},{default:g((()=>[I])),_:1})])),_:1})])])),_:1})])),_:1})])}));L.render=z,L.__scopeId="data-v-5766ebca";export default L;
