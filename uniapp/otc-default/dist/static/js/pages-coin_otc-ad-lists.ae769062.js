(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_otc-ad-lists"],{"1dcf":function(t,a,e){"use strict";e.r(a);var n=e("ddb8"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"1f91":function(t,a,e){"use strict";var n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.visible?e("v-uni-view",{staticClass:"xy-button",class:[t.size?"xy-button-"+t.size:"xy-button",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},r=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}))},"36b4":function(t,a,e){"use strict";var n={xyTabs:e("60e8").default,xyTag:e("be11").default,xyButton:e("d59a").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"status-bar bg-white"}),e("xy-tabs",{attrs:{list:t.tabList,showActive:!0},on:{"tab-click":function(a){arguments[0]=a=t.$handleEvent(a),t.tabClick.apply(void 0,arguments)}},model:{value:t.activeTab,callback:function(a){t.activeTab=a},expression:"activeTab"}}),e("v-uni-view",{staticClass:"bg-white p-t p-b"},[e("v-uni-view",{staticClass:"p-l p-r"},[e("xy-tag",{staticClass:"m-b",attrs:{plain:!0}},[t._v("USDT")])],1),0==t.activeTab?e("v-uni-view",{},t._l(t.dataListSell,(function(a){return e("v-uni-view",{key:a.id,staticClass:"list-row p-l p-r border-top_1px p-t p-b-sm"},[e("v-uni-view",{staticClass:"flex space-between"},[e("v-uni-view",{staticClass:"left flex flex-alignCenter"},[e("v-uni-image",{staticClass:"br-round m-r-sm",staticStyle:{width:"30px",height:"30px"},attrs:{src:a.userInfo.avatar,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"tw6"},[t._v(t._s(a.userInfo.nickname))])],1),e("v-uni-view",{staticClass:"right ts-12"},[e("v-uni-text",[t._v(t._s(a.otcUser.tradeCount))]),e("v-uni-text",{staticClass:"m-l-xs m-r-xs"},[t._v("|")]),e("v-uni-text",[t._v(t._s(a.otcUser.goodRate)+"%")])],1)],1),e("v-uni-view",{staticClass:"flex m-t-sm space-between"},[e("v-uni-view",{staticClass:"left ts-12 text-gray tw3"},[e("v-uni-view",{},[t._v("限额 ￥"+t._s(a.minMoney)+"-"+t._s(a.maxMoney))]),e("v-uni-view",{},[t._v("数量 ￥"+t._s(a.leftAmount))])],1),e("v-uni-view",{staticClass:"right ts-12"},[e("v-uni-text",{staticClass:"tw7 ts-12"},[t._v("￥")]),e("v-uni-text",{staticClass:"tw7 ts-18"},[t._v(t._s(a.price))])],1)],1),e("v-uni-view",{staticClass:"flex m-t-sm space-between"},[e("v-uni-view",{staticClass:"left ts-12 text-gray tw3"},[e("i",{directives:[{name:"show",rawName:"v-show",value:a.alipay,expression:"item.alipay"}],staticClass:"xyicon xyicon-alipay m-r-xs",staticStyle:{color:"#4C88FE"}}),e("i",{directives:[{name:"show",rawName:"v-show",value:a.wxpay,expression:"item.wxpay"}],staticClass:"xyicon xyicon-wxpay m-r-xs",staticStyle:{color:"#00C901"}}),e("i",{directives:[{name:"show",rawName:"v-show",value:a.bank,expression:"item.bank"}],staticClass:"xyicon xyicon-card",staticStyle:{color:"#F7BA2A"}})]),e("v-uni-view",{staticClass:"right ts-12"},[e("xy-button",{staticClass:"buy-sell b-r-0",attrs:{type:"info",size:"medium"}},[t._v("购买")])],1)],1)],1)})),1):t._e(),1==t.activeTab?e("v-uni-view",{},t._l(t.dataListBuy,(function(a){return e("v-uni-view",{key:a.id,staticClass:"list-row p-l p-r border-top_1px p-t p-b-sm"},[e("v-uni-view",{staticClass:"flex space-between"},[e("v-uni-view",{staticClass:"left flex flex-alignCenter"},[e("v-uni-image",{staticClass:"br-round m-r-sm",staticStyle:{width:"30px",height:"30px"},attrs:{src:a.userInfo.avatar,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"tw6"},[t._v(t._s(a.userInfo.nickname))])],1),e("v-uni-view",{staticClass:"right ts-12"},[e("v-uni-text",[t._v(t._s(a.otcUser.tradeCount))]),e("v-uni-text",{staticClass:"m-l-xs m-r-xs"},[t._v("|")]),e("v-uni-text",[t._v(t._s(a.otcUser.goodRate)+"%")])],1)],1),e("v-uni-view",{staticClass:"flex m-t-sm space-between"},[e("v-uni-view",{staticClass:"left ts-12 text-gray tw3"},[e("v-uni-view",{},[t._v("限额 ￥"+t._s(a.minMoney)+"-"+t._s(a.maxMoney))]),e("v-uni-view",{},[t._v("数量 ￥"+t._s(a.leftAmount))])],1),e("v-uni-view",{staticClass:"right ts-12"},[e("v-uni-text",{staticClass:"tw7 ts-12"},[t._v("￥")]),e("v-uni-text",{staticClass:"tw7 ts-18"},[t._v(t._s(a.price))])],1)],1),e("v-uni-view",{staticClass:"flex m-t-sm space-between"},[e("v-uni-view",{staticClass:"left ts-12 text-gray tw3"},[e("i",{directives:[{name:"show",rawName:"v-show",value:a.alipay,expression:"item.alipay"}],staticClass:"xyicon xyicon-alipay m-r-xs",staticStyle:{color:"#4C88FE"}}),e("i",{directives:[{name:"show",rawName:"v-show",value:a.wxpay,expression:"item.wxpay"}],staticClass:"xyicon xyicon-wxpay m-r-xs",staticStyle:{color:"#00C901"}}),e("i",{directives:[{name:"show",rawName:"v-show",value:a.bank,expression:"item.bank"}],staticClass:"xyicon xyicon-card",staticStyle:{color:"#F7BA2A"}})]),e("v-uni-view",{staticClass:"right ts-12"},[e("xy-button",{staticClass:"buy-sell b-r-0",attrs:{type:"info",size:"medium"}},[t._v("出售")])],1)],1)],1)})),1):t._e()],1)],1)},r=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}))},"64ff":function(t,a,e){"use strict";var n=e("ee27");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var i=n(e("c964")),r={data:function(){return{tabList:[{index:"buy",title:"购买"},{index:"sell",title:"出售"}],activeTab:0,dataListBuy:[],dataPageBuy:{total:10,limit:10,page:1},dataListSell:[],dataPageSell:{total:10,limit:10,page:1}}},onLoad:function(){this.loadData(2)},onPullDownRefresh:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.loadData(t.activeTab+1);case 2:uni.stopPullDownRefresh(),setTimeout((function(){uni.stopPullDownRefresh()}),5e3);case 4:case"end":return a.stop()}}),a)})))()},methods:{tabClick:function(t){switch(this.tabList[this.activeTab].index){case"buy":this.loadData(2);break;case"sell":this.loadData(1);break}},loadData:function(t){var a=arguments,e=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,e.util.request({url:"/v1/coin_otc/ad/lists",data:{type:t,page:i},method:"get"});case 3:if(r=n.sent,200!=r.code){n.next=16;break}n.t0=e.tabList[e.activeTab].index,n.next="buy"===n.t0?8:"sell"===n.t0?11:14;break;case 8:return e.dataListSell=r.data.dataList,e.dataPageSell=r.data.dataPage,n.abrupt("break",14);case 11:return e.dataListBuy=r.data.dataList,e.dataPageBuy=r.data.dataPage,n.abrupt("break",14);case 14:n.next=17;break;case 16:e.util.showToast({title:r.msg,icon:"loading",duration:3e3});case 17:case"end":return n.stop()}}),n)})))()}}};a.default=r},"6cdb":function(t,a,e){"use strict";e.r(a);var n=e("36b4"),i=e("bbd6");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("c994");var s,c=e("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"7e56701a",null,!1,n["a"],s);a["default"]=o.exports},adc3:function(t,a,e){var n=e("d515");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("42831020",n,!0,{sourceMap:!1,shadowMode:!1})},bbd6:function(t,a,e){"use strict";e.r(a);var n=e("64ff"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},c210:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.buy-sell[data-v-7e56701a]{width:40px}',""]),t.exports=a},c994:function(t,a,e){"use strict";var n=e("d365"),i=e.n(n);i.a},d365:function(t,a,e){var n=e("c210");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("46c23ef0",n,!0,{sourceMap:!1,shadowMode:!1})},d515:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */\r\n/* tag start*/.xy-button[data-v-2c6a835c]{padding:8px 13px;font-size:14px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-button-medium[data-v-2c6a835c]{padding:4px 8px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-small[data-v-2c6a835c]{padding:3px 4px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:12px}.xy-button-outline[data-v-2c6a835c]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-button-outline[data-v-2c6a835c]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:4px;border:2px solid #0cbf92}.xy-button-fillet[data-v-2c6a835c]{border-radius:25px}.xy-white.xy-button-fillet[data-v-2c6a835c]::after{border-radius:40px}.xy-button-outline-fillet[data-v-2c6a835c]::after{border-radius:40px}.xy-button-fillet-left[data-v-2c6a835c]{border-radius:25px 0 0 25px}.xy-button-fillet-right[data-v-2c6a835c]{border-radius:0 25px 25px 0}.xy-button-fillet-left.xy-button-outline[data-v-2c6a835c]::after{border-radius:50px 0 0 50px}.xy-button-fillet-right.xy-button-outline[data-v-2c6a835c]::after{border-radius:0 50px 50px 0}\r\n/* tag end*/\r\n/* color start*/.xy-primary[data-v-2c6a835c]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-2c6a835c]{color:#0cbf92;background:none}.xy-primary-outline[data-v-2c6a835c]::after{border:1px solid #0cbf92}.xy-light-primary[data-v-2c6a835c]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-2c6a835c]{background:#0cbf92;color:#fff}.xy-info[data-v-2c6a835c]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-2c6a835c]{color:#5b60ff;background:none}.xy-info-outline[data-v-2c6a835c]::after{border:1px solid #5b60ff}.xy-success[data-v-2c6a835c]{background:#19be6b;color:#fff}.xy-success-outline[data-v-2c6a835c]{color:#19be6b;background:none}.xy-success-outline[data-v-2c6a835c]::after{border:1px solid #19be6b}.xy-error[data-v-2c6a835c]{background:#dd524d;color:#fff}.xy-error-outline[data-v-2c6a835c]{color:#dd524d;background:none}.xy-error-outline[data-v-2c6a835c]::after{border:1px solid #dd524d}.xy-warning[data-v-2c6a835c]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-2c6a835c]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-2c6a835c]::after{border:1px solid #f0ad4e}.xy-white[data-v-2c6a835c]{background:#fff;color:#333}.xy-white-outline[data-v-2c6a835c]{color:#fff;background:none}.xy-white-outline[data-v-2c6a835c]::after{border:1px solid #fff}.xy-black[data-v-2c6a835c]{background:#000;color:#fff}.xy-black-outline[data-v-2c6a835c]{color:#333;background:none}.xy-black-outline[data-v-2c6a835c]::after{border:1px solid #333}.xy-translucent[data-v-2c6a835c]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-2c6a835c]{background:#ededed}.xy-phcolor-gray[data-v-2c6a835c]{background:#ccc}.xy-divider-gray[data-v-2c6a835c]{background:#eaeef1}.xy-btn-gray[data-v-2c6a835c]{background:#ededed;color:#999}.xy-hover-gray[data-v-2c6a835c]{background:#f7f7f9}.xy-bg-gray[data-v-2c6a835c]{background:#fafafa}.xy-light-blue[data-v-2c6a835c]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-2c6a835c]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-2c6a835c]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-2c6a835c]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-2c6a835c]{color:#999;background:none}.xy-gray-outline[data-v-2c6a835c]::after{border:1px solid #ccc}\r\n/* color end*/',""]),t.exports=a},d59a:function(t,a,e){"use strict";e.r(a);var n=e("1f91"),i=e("1dcf");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("fd35");var s,c=e("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"2c6a835c",null,!1,n["a"],s);a["default"]=o.exports},ddb8:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"xy-button",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,a){return a?"xy-"+t+"-outline":"xy-"+t},getClassName:function(t,a){var e=a?"xy-button-outline ":"";return"square"!=t&&("circle"==t?e+=a?"xy-button-outline-fillet":"xy-button-fillet":"circleLeft"==t?e+="xy-button-fillet-left":"circleRight"==t&&(e+="xy-button-fillet-right")),e}}};a.default=n},fd35:function(t,a,e){"use strict";var n=e("adc3"),i=e.n(n);i.a}}]);