(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_otc-paytype-add"],{1725:function(n,t,a){"use strict";var e={xyBuilderForm:a("8daf").default},i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"header m-l-sm p-t-md p-b p-l-sm"},[a("v-uni-view",{staticClass:"title ts-24 tw6"},[n._v("添加收款方式")])],1),a("xy-builder-form",{staticStyle:{margin:"0 2px"},attrs:{api:"/v1/coin_otc/paytype/add?paytype="+this.paytype},on:{afterSubmit:function(t){arguments[0]=t=n.$handleEvent(t),n.afterSubmit.apply(void 0,arguments)}}})],1)},u=[];a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return e}))},"22e6":function(n,t,a){"use strict";var e=a("6171"),i=a.n(e);i.a},"2f35":function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{paytype:""}},onLoad:function(n){this.paytype=n.paytype},methods:{afterSubmit:function(){this.util.navigateBack()}}};t.default=e},3289:function(n,t,a){var e=a("24fb");t=e(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-93076894]{background-color:#fff}body.?%PAGE?%[data-v-93076894]{background-color:#fff}',""]),n.exports=t},"54d0":function(n,t,a){"use strict";a.r(t);var e=a("2f35"),i=a.n(e);for(var u in e)"default"!==u&&function(n){a.d(t,n,(function(){return e[n]}))}(u);t["default"]=i.a},6171:function(n,t,a){var e=a("3289");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=a("4f06").default;i("17a2c636",e,!0,{sourceMap:!1,shadowMode:!1})},ba7d:function(n,t,a){"use strict";a.r(t);var e=a("1725"),i=a("54d0");for(var u in i)"default"!==u&&function(n){a.d(t,n,(function(){return i[n]}))}(u);a("22e6");var r,o=a("f0c5"),c=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"93076894",null,!1,e["a"],r);t["default"]=c.exports}}]);