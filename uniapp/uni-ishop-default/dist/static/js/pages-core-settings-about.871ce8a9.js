(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-settings-about"],{"18ef":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("1da1")),a=r(n("5530")),s=n("2f62"),o={data:function(){return{}},computed:(0,a.default)({},(0,s.mapState)(["app","user"])),onLoad:function(){},methods:{checkUpdate:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,e.next=3,t.util.request({url:"/v1/cloud/index/appUpdate",data:{version:t.$store.state.app.version,name:""}});case 3:r=e.sent,200==r.code?n.util.showToast({title:r.msg,icon:"success",duration:1e3}):n.util.showToast({title:r.msg,icon:"success",duration:3e3});case 5:case"end":return e.stop()}}),e)})))()}}};e.default=o},"424c":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={xyListItem:n("be1c").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"logo"},[n("v-uni-image",{attrs:{src:t.app.siteInfo.logo,mode:"aspectFit"}})],1),n("v-uni-view",{staticClass:"name ts-20 tw5 p-t-md"},[t._v(t._s(t.app.siteInfo.title))]),n("v-uni-view",{staticClass:"version ts-14 m-t-xs"},[t._v("Version "+t._s(t.app.version))]),n("v-uni-view",{staticClass:"link-list m-t-lg m-l-lg m-r-lg"},[n("xy-list-item",{attrs:{type:"list",more:"xyicon xyicon-right",title:"用户协议",url:"/pages/user_agreement/agreement/info?title=用户协议",titleFs:"15px"}}),n("xy-list-item",{attrs:{type:"list",more:"xyicon xyicon-right",title:"隐私条款",url:"/pages/user_agreement/agreement/info?title=隐私条款",titleFs:"15px"}}),n("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"版本更新"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkUpdate.apply(void 0,arguments)}}},[n("template",{slot:"current"},[n("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t.app.version))])],1)],2)],1),n("v-uni-view",{staticClass:"text-center m-t-lg text-gray ts-12"},[n("a",{staticClass:"decoration-none text-gray",attrs:{href:"http://www.beian.miit.gov.cn/",target:"_blank"}},[t._v(t._s(t.app.siteInfo.icp))]),n("v-uni-view",[t._v(t._s(t.app.siteInfo.copyright))])],1)],1)},a=[]},"7f58":function(t,e,n){var r=n("86fe");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("49a03230",r,!0,{sourceMap:!1,shadowMode:!1})},"86fe":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */uni-page-body[data-v-4f1b6731]{background:#fff}uni-page-body .container[data-v-4f1b6731]{text-align:center}uni-page-body .container .logo uni-image[data-v-4f1b6731]{height:80px}body.?%PAGE?%[data-v-4f1b6731]{background:#fff}',""]),t.exports=e},"8a69":function(t,e,n){"use strict";n.r(e);var r=n("424c"),i=n("d5d0");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("dfcc");var s,o=n("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"4f1b6731",null,!1,r["a"],s);e["default"]=c.exports},d5d0:function(t,e,n){"use strict";n.r(e);var r=n("18ef"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},dfcc:function(t,e,n){"use strict";var r=n("7f58"),i=n.n(r);i.a}}]);