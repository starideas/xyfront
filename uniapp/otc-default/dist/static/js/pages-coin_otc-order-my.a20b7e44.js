(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_otc-order-my"],{"16b2":function(t,e,a){"use strict";var s={xyTabs:a("60e8").default,xyTag:a("be11").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"status-bar bg-white"}),a("xy-tabs",{attrs:{list:t.tabList,showActive:!0},on:{"tab-click":function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick.apply(void 0,arguments)}},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}}),a("v-uni-view",{staticClass:"bg-white p-t p-b"},[0==t.activeTab?a("v-uni-view",{},t._l(t.dataList,(function(e){return a("v-uni-view",{key:e.id,staticClass:"list-row p-l p-r border-top_1px p-t p-b-sm"},[a("v-uni-view",{staticClass:"flex space-between"},[a("v-uni-view",{staticClass:"left"},[a("xy-tag",{directives:[{name:"show",rawName:"v-show",value:1==e.type,expression:"item.type == 1"}],attrs:{size:"medium",type:"success"}},[t._v("买")]),a("xy-tag",{directives:[{name:"show",rawName:"v-show",value:2==e.type,expression:"item.type == 2"}],attrs:{size:"medium",type:"info"}},[t._v("售")]),a("v-uni-text",{staticClass:"tw7 m-l-sm"},[t._v(t._s(e.coinInfo.symbol))])],1),a("v-uni-view",{staticClass:"right ts-12"},[a("v-uni-text",[t._v(t._s(e.stateFormat.title))]),a("v-uni-text",{staticClass:"xyicon xyicon-right"})],1)],1),a("v-uni-view",{staticClass:"flex m-t-sm space-between"},[a("v-uni-view",{staticClass:"left ts-12 text-gray tw3"},[t._v("单价 ￥"+t._s(e.price))]),a("v-uni-view",{staticClass:"right ts-12"},[a("v-uni-text",{staticClass:"tw7 ts-12"},[t._v("￥")]),a("v-uni-text",{staticClass:"tw7 ts-18"},[t._v(t._s(e.totalPrice))])],1)],1),a("v-uni-view",{staticClass:"flex m-t-sm space-between"},[a("v-uni-view",{staticClass:"left ts-12 text-gray tw3"},[t._v("数量 ￥"+t._s(e.amount))]),a("v-uni-view",{staticClass:"right ts-12 text-gray"},[t._v(t._s(t._f("formatTime")(e.createTime)))])],1)],1)})),1):t._e(),1==t.activeTab?a("v-uni-view",{},t._l(t.dataList,(function(e){return a("v-uni-view",{key:e.id,staticClass:"list-row p-l p-r border-top_1px p-t p-b-sm"},[a("v-uni-view",{staticClass:"flex space-between"},[a("v-uni-view",{staticClass:"left"},[a("xy-tag",{directives:[{name:"show",rawName:"v-show",value:1==e.type,expression:"item.type == 1"}],attrs:{size:"medium",type:"success"}},[t._v("买")]),a("xy-tag",{directives:[{name:"show",rawName:"v-show",value:2==e.type,expression:"item.type == 2"}],attrs:{size:"medium",type:"info"}},[t._v("售")]),a("v-uni-text",{staticClass:"tw7 m-l-sm"},[t._v(t._s(e.coinInfo.symbol))])],1),a("v-uni-view",{staticClass:"right ts-12"},[a("v-uni-text",[t._v(t._s(e.stateFormat.title))]),a("v-uni-text",{staticClass:"xyicon xyicon-right"})],1)],1),a("v-uni-view",{staticClass:"flex m-t-sm space-between"},[a("v-uni-view",{staticClass:"left ts-12 text-gray tw3"},[t._v("单价 ￥"+t._s(e.price))]),a("v-uni-view",{staticClass:"right ts-12"},[a("v-uni-text",{staticClass:"tw7 ts-12"},[t._v("￥")]),a("v-uni-text",{staticClass:"tw7 ts-18"},[t._v(t._s(e.totalPrice))])],1)],1),a("v-uni-view",{staticClass:"flex m-t-sm space-between"},[a("v-uni-view",{staticClass:"left ts-12 text-gray tw3"},[t._v("数量 ￥"+t._s(e.amount))]),a("v-uni-view",{staticClass:"right ts-12 text-gray"},[t._v(t._s(t._f("formatTime")(e.createTime)))])],1)],1)})),1):t._e()],1)],1)},n=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return s}))},"262b":function(t,e,a){var s=a("6c15");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("4f06").default;i("066200e2",s,!0,{sourceMap:!1,shadowMode:!1})},"6c15":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.buy-sell[data-v-6a25e104]{width:40px}',""]),t.exports=e},"754a":function(t,e,a){"use strict";a.r(e);var s=a("16b2"),i=a("ff3a");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("aef1");var r,c=a("f0c5"),u=Object(c["a"])(i["default"],s["b"],s["c"],!1,null,"6a25e104",null,!1,s["a"],r);e["default"]=u.exports},aef1:function(t,e,a){"use strict";var s=a("262b"),i=a.n(s);i.a},f15d:function(t,e,a){"use strict";var s=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=s(a("c964")),n={data:function(){return{tabList:[{index:"ing",title:"进行中"},{index:"done",title:"已结束"}],activeTab:0,dataList:[],dataPage:{total:10,limit:10,page:1},dataList2:[],dataPage2:{total:10,limit:10,page:1}}},onLoad:function(){this.loadData()},onPullDownRefresh:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadData(t.activeTab+1);case 2:uni.stopPullDownRefresh(),setTimeout((function(){uni.stopPullDownRefresh()}),5e3);case 4:case"end":return e.stop()}}),e)})))()},methods:{tabClick:function(t){switch(this.tabList[this.activeTab].index){case"ing":this.loadData("0,1,2,-2");break;case"done":this.loadData("-1,3");break}},loadData:function(){var t=arguments,e=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t.length>0&&void 0!==t[0]?t[0]:"0,1,2,-2",a.next=3,e.util.request({url:"/v1/coin_otc/order/my",data:{state:s},method:"get"});case 3:i=a.sent,200==i.code?"0,1,2,-2"==s?e.dataList=i.data.dataList:"-1,3"==s&&(e.dataList2=i.data.dataList):e.util.showToast({title:i.msg,icon:"loading",duration:3e3});case 5:case"end":return a.stop()}}),a)})))()}}};e.default=n},ff3a:function(t,e,a){"use strict";a.r(e);var s=a("f15d"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);e["default"]=i.a}}]);