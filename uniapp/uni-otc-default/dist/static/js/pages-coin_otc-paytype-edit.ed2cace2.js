(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_otc-paytype-edit"],{"0a36":function(t,n,e){"use strict";var a=e("8518"),i=e.n(a);i.a},"4d21":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={xyBuilderForm:e("0355").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"header p-t-md p-b p-l-sm"},[e("v-uni-view",{staticClass:"title ts-24 tw6"},[t._v("修改收款方式")])],1),e("v-uni-view",{},[e("xy-builder-form",{attrs:{api:"/v1/coin_otc/paytype/edit/"+this.id},on:{afterSubmit:function(n){arguments[0]=n=t.$handleEvent(n),t.afterSubmit.apply(void 0,arguments)}}}),e("v-uni-button",{staticClass:"m-l-sm m-r-sm",attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.deleteOne.apply(void 0,arguments)}}},[t._v("删除")])],1)],1)},r=[]},8085:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-d7e5bf76]{background-color:#fff}body.?%PAGE?%[data-v-d7e5bf76]{background-color:#fff}',""]),t.exports=n},8518:function(t,n,e){var a=e("8085");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("1cbfdb7e",a,!0,{sourceMap:!1,shadowMode:!1})},"8ca8":function(t,n,e){"use strict";var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var i=a(e("1da1")),r={data:function(){return{id:0}},onLoad:function(t){this.id=t.id},methods:{afterSubmit:function(){this.util.navigateBack()},deleteOne:function(){var t=this;uni.showModal({title:"警告",confirmColor:"red",content:"确认要删除吗",success:function(){var n=(0,i.default)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.util.request({url:"/v1/coin_otc/paytype/delete/"+t.id,method:"deleteget"});case 2:e=n.sent,200==e.code?t.util.showToast({title:e.msg,icon:"loading",duration:1e3}):t.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 4:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}()})}}};n.default=r},a1c1:function(t,n,e){"use strict";e.r(n);var a=e("8ca8"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},cca4:function(t,n,e){"use strict";e.r(n);var a=e("4d21"),i=e("a1c1");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("0a36");var o,u=e("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"d7e5bf76",null,!1,a["a"],o);n["default"]=c.exports}}]);