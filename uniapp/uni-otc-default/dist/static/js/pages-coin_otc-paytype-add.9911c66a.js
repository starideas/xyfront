(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_otc-paytype-add"],{"163f":function(n,t,e){"use strict";var a=e("a927"),i=e.n(a);i.a},9747:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{paytype:""}},onLoad:function(n){this.paytype=n.paytype},methods:{afterSubmit:function(){this.util.navigateBack()}}};t.default=a},"9dbe":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-93076894]{background-color:#fff}body.?%PAGE?%[data-v-93076894]{background-color:#fff}',""]),n.exports=t},a927:function(n,t,e){var a=e("9dbe");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("2b175f2e",a,!0,{sourceMap:!1,shadowMode:!1})},c7e9:function(n,t,e){"use strict";e.r(t);var a=e("ee47"),i=e("ecd9");for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);e("163f");var r,o=e("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"93076894",null,!1,a["a"],r);t["default"]=c.exports},ecd9:function(n,t,e){"use strict";e.r(t);var a=e("9747"),i=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,(function(){return a[n]}))}(u);t["default"]=i.a},ee47:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return a}));var a={xyBuilderForm:e("0355").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"header m-l-sm p-t-md p-b p-l-sm"},[e("v-uni-view",{staticClass:"title ts-24 tw6"},[n._v("添加收款方式")])],1),e("xy-builder-form",{staticStyle:{margin:"0 2px"},attrs:{api:"/v1/coin_otc/paytype/add?paytype="+this.paytype},on:{afterSubmit:function(t){arguments[0]=t=n.$handleEvent(t),n.afterSubmit.apply(void 0,arguments)}}})],1)},u=[]}}]);