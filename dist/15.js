/*! NutUI v1.2.2 Fri May 11 2018 20:03:58 GMT+0800 (中国标准时间) */
webpackJsonpnutui([15],{1076:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"选项卡组件。",showQrCode:!0}}),t._v(" "),a("h5",[t._v("示例")]),t._v(" "),a("h6",[t._v("默认用法")]),t._v(" "),a("nut-codebox",{attrs:{code:t.demo1,imgUrl:["../asset/img/demo/tab1.png"]}}),t._v(" "),a("h6",[t._v("在第二个标签上增加图标,页签导航条在左侧（支持导航条在上下左右位置）")]),t._v(" "),a("nut-codebox",{attrs:{code:t.demo2,imgUrl:["../asset/img/demo/tab2.png"]}}),t._v(" "),a("h6",[t._v("隐藏tab下面内容，跳转页面")]),t._v(" "),a("nut-codebox",{attrs:{code:t.demo3,imgUrl:["../asset/img/demo/tab3.png"]}}),t._v(" "),a("h6",[t._v("给tab页签增加className，可以自定义样式，默认选中第二个标签")]),t._v(" "),a("nut-codebox",{attrs:{code:t.demo4,imgUrl:["../asset/img/demo/tab4.png"]}}),t._v(" "),a("nut-codebox",{attrs:{code:t.demo5}}),t._v(" "),a("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),a("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"tbl-wrapper"},[a("table",{staticClass:"u-full-width"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("可选值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("defIndex")]),t._v(" "),a("td",[t._v("默认选中的tab")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("--")])]),t._v(" "),a("tr",[a("td",[t._v("contentShow")]),t._v(" "),a("td",[t._v("是否显示tab下面的内容")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("true/false")])]),t._v(" "),a("tr",[a("td",[t._v("tabTitle")]),t._v(" "),a("td",[t._v("tab选项卡标题")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("--")])]),t._v(" "),a("tr",[a("td",[t._v("iconUrl")]),t._v(" "),a("td",[t._v("tab标签中的图片地址")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("--")])]),t._v(" "),a("tr",[a("td",[t._v("tabLink")]),t._v(" "),a("td",[t._v("tab标签中的跳转链接地址")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("--")])]),t._v(" "),a("tr",[a("td",[t._v("positionNav")]),t._v(" "),a("td",[t._v("tab标签的位置")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("'top'")]),t._v(" "),a("td",[t._v("'top'/'left'/'right'/'bottom'")])])])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"tbl-wrapper"},[a("table",{staticClass:"u-full-width"},[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("tab-switch")]),t._v(" "),a("td",[t._v("点击tab标签时触发事件")]),t._v(" "),a("td",[t._v("返回index值和自身对象event")])])])])])}]}},1170:function(t,n,a){var e=a(978);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(3)("131a988e",e,!0,{})},866:function(t,n,a){function e(t){a(1170)}var v=a(1)(a(960),a(1076),e,null,null);t.exports=v.exports},960:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(20);!function(t){t&&t.__esModule}(e);n.default={data:function(){return{demo1:'<nut-tab @tabSwitch="tab-switch">\n    <nut-tab-panel tabTitle="页签名称1">11</nut-tab-panel>\n    <nut-tab-panel tabTitle="页签名称2">\n      <h2>22</h2>\n    </nut-tab-panel>\n    <nut-tab-panel tabTitle="页签名称3">33</nut-tab-panel>\n    <nut-tab-panel tabTitle="页签名称4">44</nut-tab-panel>\n</nut-tab>',demo2:'<nut-tab @tabSwitch="tab-switch" positionNav="left">\n    <nut-tab-panel tabTitle="页签1">11</nut-tab-panel>\n    <nut-tab-panel tabTitle="页签2" iconUrl="图片地址">\n      <h2>22</h2>\n    </nut-tab-panel>\n    <nut-tab-panel tabTitle="页签3">33</nut-tab-panel>\n    <nut-tab-panel tabTitle="页签4">44</nut-tab-panel>\n</nut-tab>',demo3:'<nut-tab @tabSwitch="tab-switch" :contentShow="false">\n    <nut-tab-panel tabTitle="页签1">11</nut-tab-panel>\n    <nut-tab-panel tabTitle="页签2" tabLink="http://www.baidu.com">\n      <h2>22</h2>\n    </nut-tab-panel>\n    <nut-tab-panel tabTitle="页签3" tabLink="http://www.jd.com">33</nut-tab-panel>\n</nut-tab>',demo4:'<nut-tab \n:defIndex="1"\nclass="customer-css" \n@tabSwitch="tab-switch"\n:contentShow="true"\n>\n    <nut-tab-panel tabTitle="页签1">11</nut-tab-panel>\n    <nut-tab-panel tabTitle="页签2">\n      <h2>22</h2>\n    </nut-tab-panel>\n    <nut-tab-panel tabTitle="页签3">33</nut-tab-panel>\n    <nut-tab-panel tabTitle="页签4">44</nut-tab-panel>\n</nut-tab>',demo5:".customer-css .nut-tab-active .nut-tab-link[data-v-240d0c90]{\n  border-bottom: 1px solid #0E90D2;\n  background: #F5F7FA;\n}\n.customer-css .nut-title-nav-list[data-v-240d0c90]{\n  background: #fff;\n  border-left: 1px solid #F5F7FA;\n}\n.customer-css .nut-title-nav-list[data-v-240d0c90]:first-child{\n  border-left: 0;\n};\n.customer-css .nut-tab-active[data-v-240d0c90]{\n  background: #F5F7FA;\n  border: 0;\n}\n.customer-css .nut-tab-link[data-v-240d0c90]{\n  width:100%;\n}"}},methods:{tabSwitch:function(t,n){console.log(t+"--"+n.target)}}}},978:function(t,n,a){n=t.exports=a(2)(),n.push([t.i,".customer-css .nut-tab-active .nut-tab-link[data-v-240d0c90]{border-bottom:1px solid #0e90d2;background:#f5f7fa}.customer-css .nut-title-nav-list[data-v-240d0c90]{background:#fff;border-left:1px solid #f5f7fa}.customer-css .nut-title-nav-list[data-v-240d0c90]:first-child{border-left:0}.customer-css .nut-tab-active[data-v-240d0c90]{background:#f5f7fa;border:0}.customer-css .nut-tab-link[data-v-240d0c90]{width:100%}",""])}});