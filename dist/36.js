/*! NutUI v1.2.2 Fri May 11 2018 20:03:58 GMT+0800 (中国标准时间) */
webpackJsonpnutui([36],{1097:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[d("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Filter",desc:"京东图片系统图片过滤器，可配置访问渠道、尺寸、业务等。",showQrCode:!0}}),t._v(" "),d("h6",[t._v("处理类似'jfs/t169/69/654078710/298522/f1faa01a/53951722N73ecf645.jpg'这种图片路径的数据，可配置访问渠道、尺寸、业务，前提是该图片必须是在京东的图片系统上")]),t._v(" "),d("h5",[t._v("示例")]),t._v(" "),d("h6",[t._v("图片按照100px*100px的尺寸展示")]),t._v(" "),d("div",{staticStyle:{width:"100%",overflow:"hidden"}},[d("img",{staticStyle:{border:"1px solid #ddd"},attrs:{src:t._f("imgSet")(t.imgUrl,{width:100,height:100}),alt:""}})]),t._v(" "),d("nut-codebox",{attrs:{code:t.demo1}}),t._v(" "),d("nut-codebox",{attrs:{code:"export default {\n    data(){\n        return{\n            imgUrl:'jfs/t169/69/654078710/298522/f1faa01a/53951722N73ecf645.jpg'\n        }\n    }\n}"}}),t._v(" "),d("h6",[t._v("图片是移动端pop业务")]),t._v(" "),d("div",{staticStyle:{width:"100%",overflow:"hidden"}},[d("img",{staticStyle:{border:"1px solid #ddd"},attrs:{src:t._f("imgSet")(t.imgUrl,{width:200,height:200,host:2,business:"pop"}),alt:""}})]),t._v(" "),d("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),d("h6",[t._v("图片以直径为400px的圆形裁剪，以200px*200px的尺寸展示")]),t._v(" "),d("div",{staticStyle:{width:"100%",overflow:"hidden"}},[d("img",{staticStyle:{border:"1px solid #ddd"},attrs:{src:t._f("imgSet")(t.imgUrl,{width:200,height:200,postfix:"!c400"}),alt:""}})]),t._v(" "),d("nut-codebox",{attrs:{code:t.demo3}}),t._v(" "),d("h5",[t._v("Props")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"tbl-wrapper"},[d("table",{staticClass:"u-full-width"},[d("thead",[d("tr",[d("th",[t._v("参数")]),t._v(" "),d("th",[t._v("说明")]),t._v(" "),d("th",[t._v("类型")]),t._v(" "),d("th",[t._v("默认值")]),t._v(" "),d("th",[t._v("可选值")])])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("width")]),t._v(" "),d("td",[t._v("宽度缩放尺寸")]),t._v(" "),d("td",[t._v("Number/String")]),t._v(" "),d("td",[t._v("null")]),t._v(" "),d("td",[t._v("--")])]),t._v(" "),d("tr",[d("td",[t._v("height")]),t._v(" "),d("td",[t._v("高度缩放尺寸")]),t._v(" "),d("td",[t._v("Number/String")]),t._v(" "),d("td",[t._v("null")]),t._v(" "),d("td",[t._v("--")])]),t._v(" "),d("tr",[d("td",[t._v("host")]),t._v(" "),d("td",[t._v("访问域名，分四种："),d("br"),t._v("1 主站：img10.360buyimg.com "),d("br"),t._v("2 移动端：m.360buyimg.com "),d("br"),t._v("3 印尼：img10.jd.id "),d("br"),t._v("4 内网访问：img10.360buyimg.local")]),t._v(" "),d("td",[t._v("Number/String")]),t._v(" "),d("td",[t._v("1")]),t._v(" "),d("td",[t._v("--")])]),t._v(" "),d("tr",[d("td",[t._v("postfix")]),t._v(" "),d("td",[t._v("后缀处理，后缀可添加："),d("br"),t._v("!75 降质处理 "),d("br"),t._v("!cr_200x100_20_30 裁剪任意矩形 "),d("br"),t._v("!c200 原型图片的访问"),d("br"),t._v(".webp 转为webp格式 "),d("br"),t._v("等")]),t._v(" "),d("td",[t._v("String")]),t._v(" "),d("td",[t._v(" ")]),t._v(" "),d("td",[t._v("--")])]),t._v(" "),d("tr",[d("td",[t._v("business")]),t._v(" "),d("td",[t._v("业务，有两种 "),d("br"),t._v("主站商品的业务（一共12种：n0、n1、n2、n3、n4、n5、n6、n7、n8、n9、n11、n12） "),d("br"),t._v("普通业务（如 test、pop等）")]),t._v(" "),d("td",[t._v("String")]),t._v(" "),d("td",[t._v(" ")]),t._v(" "),d("td",[t._v("--")])])])])])}]}},1190:function(t,e,d){var v=d(998);"string"==typeof v&&(v=[[t.i,v,""]]),v.locals&&(t.exports=v.locals);d(3)("361ba8f0",v,!0,{})},844:function(t,e,d){function v(t){d(1190)}var _=d(1)(d(935),d(1097),v,null,null);t.exports=_.exports},935:function(t,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{imgUrl:"jfs/t2362/199/2707005502/100242/616257ce/56e66b21N7b8c2be8.jpg",demo1:'<img :src="imgUrl | imgSet({width:100,height:100})" alt="" style="border: 1px solid #ddd;"/>',demo2:'<img :src="imgUrl | imgSet({width:200,height:200,host:2,business:\'pop\'})" alt="" style="border: 1px solid #ddd;"/>',demo3:'<img :src="imgUrl | imgSet({width:200,height:200,postfix:\'!c400\'})" alt=""  style="border: 1px solid #ddd;"/>'}}}},998:function(t,e,d){e=t.exports=d(2)(),e.push([t.i,"",""])}});