(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ishop-order-pay"],{"0141":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"app"},[a("v-uni-view",{staticClass:"price-box"},[a("v-uni-text",[e._v("支付金额")]),a("v-uni-text",{staticClass:"price"},[e._v(e._s(e.payOrder.realMoney))])],1),a("v-uni-view",{staticClass:"pay-type-list"},[e.payTypeOpen.includes("pay_alipay")?a("v-uni-view",{staticClass:"type-item b-b",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changepayType("alipay")}}},[a("v-uni-text",{staticClass:"icon xyicon xyicon-alipay"}),a("v-uni-view",{staticClass:"con"},[a("v-uni-text",{staticClass:"tit"},[e._v(e._s(e.payTypeList.alipay.title))]),a("v-uni-text",[e._v(e._s(e.payTypeList.alipay.subtitle))])],1),a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"",color:"#fa436a",checked:"alipay"==e.payType}})],1)],1):e._e(),e.payTypeOpen.includes("pay_wxpay")?a("v-uni-view",{staticClass:"type-item b-b",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changepayType("wxpay")}}},[a("v-uni-text",{staticClass:"icon xyicon xyicon-wxpay"}),a("v-uni-view",{staticClass:"con"},[a("v-uni-text",{staticClass:"tit"},[e._v(e._s(e.payTypeList.wxpay.title))]),a("v-uni-text",[e._v(e._s(e.payTypeList.wxpay.subtitle))])],1),a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"",color:"#fa436a",checked:"wxpay"==e.payType}})],1)],1):e._e(),e.payTypeOpen.includes("pay_score1")?a("v-uni-view",{staticClass:"type-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changepayType("score1")}}},[a("v-uni-text",{staticClass:"icon xyicon xyicon-card"}),a("v-uni-view",{staticClass:"con"},[a("v-uni-text",{staticClass:"tit"},[e._v(e._s(e.payTypeList.score1.title))]),a("v-uni-text",[e._v("可用余额 ¥"+e._s(e.scoreInfo[1].balance))])],1),a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"",color:"#fa436a",checked:"score1"==e.payType}})],1)],1):e._e(),e.payTypeOpen.includes("pay_deliver")&&3!=e.orderList[0].deliverType?a("v-uni-view",{staticClass:"type-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changepayType("deliver")}}},[a("v-uni-text",{staticClass:"icon xyicon xyicon-received text-error"}),a("v-uni-view",{staticClass:"con"},[a("v-uni-text",{staticClass:"tit"},[e._v(e._s(e.payTypeList.deliver.title))]),a("v-uni-text",[e._v("收货时当场付款")])],1),a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"",color:"#fa436a",checked:"deliver"==e.payType}})],1)],1):e._e()],1),a("v-uni-text",{staticClass:"mix-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}}},[e._v("确认支付")])],1)},r=[]},"085c":function(e,t,a){"use strict";(function(e){var i=a("4ea4");a("ac1f"),a("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var n=i(a("1da1")),r=i(a("5530")),o=a("2f62"),c={data:function(){return{tradeNo:"",payType:"",payPlatform:"",payOrder:{},orderList:[],scoreInfo:{1:{balance:0}},payTypeOpen:[],payTypeList:{alipay:{title:"支付宝支付",subtitle:"蚂蚁金服旗下"},wxpay:{title:"微信支付",subtitle:"推荐使用微信支付"},score1:{title:"余额支付"},deliver:{title:"货到付款"}}}},computed:(0,r.default)({},(0,o.mapState)(["app","user"])),onLoad:function(t){var a=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var n,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return uni.showLoading({title:"请求中..."}),a.tradeNo=t.tradeNo,i.next=4,a.util.request({url:"/v1/pay/order/pay?tradeNo="+a.tradeNo,method:"get"});case 4:n=i.sent,200==n.code?(a.payOrder=n.data.payOrder,n.data.payTypeOpen&&(a.payTypeOpen=n.data.payTypeOpen),a.orderList=n.data.orderList,a.scoreInfo=n.data.scoreInfo):a.util.showToast({title:n.msg,icon:"loading",duration:2e3}),uni.hideLoading(),e("log","payTypeOpen",a.payTypeOpen," at pages/ishop/order/pay.vue:127"),r=a.payTypeOpen[0].split("_"),e("log",r," at pages/ishop/order/pay.vue:129"),a.payType=r[1],e("log",a.app.runEnv," at pages/ishop/order/pay.vue:140"),"weixin-h5"==a.app.runEnv?a.payPlatform="mp":"pc-h5"==a.app.runEnv?a.payPlatform="pc":a.payPlatform="wap";case 13:case"end":return i.stop()}}),i)})))()},methods:{changepayType:function(e){this.payType=e},confirm:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){var a,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.payType){t.next=3;break}return uni.showToast({icon:"none",title:"无支付方式"}),t.abrupt("return");case 3:if(uni.showLoading({title:"请求中..."}),this,!("score1"==this.payType&&this.scoreInfo[1].balance<this.payOrder.realMoney)){t.next=8;break}return this.util.showToast({title:"余额不足",icon:"none",duration:1e3}),t.abrupt("return");case 8:return a=0,"deliver"==this.payType&&(a=1),t.next=12,this.util.request({url:"/v1/pay/order/dopay",method:"post",data:{tradeNo:this.tradeNo,payType:this.payType,deliverPay:a,payPlatform:this.payPlatform}});case 12:if(i=t.sent,200!=i.code){t.next=44;break}if(!i.data.paySuccess){t.next=19;break}uni.hideLoading(),uni.redirectTo({url:"/pages/ishop/order/paySuccess"}),t.next=42;break;case 19:if(!i.data.url){t.next=24;break}uni.hideLoading(),uni.redirectTo({url:"/pages"+i.data.url}),t.next=42;break;case 24:e("log",i," at pages/ishop/order/pay.vue:203"),t.t0=this.payPlatform,t.next="app"===t.t0?28:"mapp"===t.t0?30:"pc"===t.t0?34:"wap"===t.t0?36:"mp"===t.t0?38:40;break;case 28:return uni.requestPayment({provider:this.payType,orderInfo:i.data.payString,success:function(e){uni.hideLoading(),uni.redirectTo({url:"./paySuccess"})},fail:function(t){uni.hideLoading(),e("log",t," at pages/ishop/order/pay.vue:217");var a="";switch(t.errMsg){case"requestPayment:fail canceled":a="已取消支付";break;default:a=t.errMsg;break}return uni.showModal({title:"提示",content:"支付失败"+a,success:function(e){e.confirm||e.cancel}}),!1}}),t.abrupt("break",42);case 30:return n={provider:this.payType,orderInfo:i.data.payString,success:function(e){uni.hideLoading(),uni.redirectTo({url:"./paySuccess"})},fail:function(e){return uni.hideLoading(),uni.showModal({title:"提示",content:"支付失败"+JSON.stringify(e),success:function(e){e.confirm||e.cancel}}),!1}},uni.requestPayment(n),uni.hideLoading(),t.abrupt("break",42);case 34:return i.data.isRedirect&&window.open(i.data.payString),t.abrupt("break",42);case 36:return window.open(i.data.payString),t.abrupt("break",42);case 38:return wx.ready((function(){wx.chooseWXPay({timestamp:i.data.payString.timeStamp,nonceStr:i.data.payString.nonceStr,package:i.data.payString.package,signType:i.data.payString.signType,paySign:i.data.payString.paySign,success:function(e){uni.hideLoading(),uni.redirectTo({url:"./paySuccess"})},fail:function(e){return uni.hideLoading(),uni.showModal({title:"提示",content:"支付失败"+JSON.stringify(e),success:function(e){e.confirm||e.cancel}}),!1}})})),t.abrupt("break",42);case 40:return uni.showModal({title:"提示",content:"不存在该支付方式",success:function(e){e.confirm||e.cancel}}),t.abrupt("break",42);case 42:t.next=45;break;case 44:uni.showModal({title:"提示",content:i.msg,success:function(e){e.confirm||e.cancel}});case 45:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()}};t.default=c}).call(this,a("0de9")["log"])},"41af":function(e,t,a){"use strict";a.r(t);var i=a("085c"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},"9b32":function(e,t,a){"use strict";var i=a("fd3a"),n=a.n(i);n.a},bd98:function(e,t,a){"use strict";a.r(t);var i=a("0141"),n=a("41af");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("9b32");var o,c=a("f0c5"),s=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"3c1d594e",null,!1,i["a"],o);t["default"]=s.exports},f8e5:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.app[data-v-3c1d594e]{width:100%}.price-box[data-v-3c1d594e]{background-color:#fff;height:%?265?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#909399}.price-box .price[data-v-3c1d594e]{font-size:%?50?%;color:#303133;margin-top:%?12?%}.price-box .price[data-v-3c1d594e]:before{content:"￥";font-size:%?40?%}.pay-type-list[data-v-3c1d594e]{margin-top:%?20?%;background-color:#fff;padding-left:%?60?%}.pay-type-list .type-item[data-v-3c1d594e]{height:%?120?%;padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:%?60?%;font-size:%?30?%;position:relative}.pay-type-list .xyicon[data-v-3c1d594e]{width:%?100?%;font-size:%?52?%}.pay-type-list .xyicon-card[data-v-3c1d594e]{color:#fe8e2e}.pay-type-list .xyicon-wxpay[data-v-3c1d594e]{color:#36cb59}.pay-type-list .xyicon-alipay[data-v-3c1d594e]{color:#01aaef}.pay-type-list .tit[data-v-3c1d594e]{font-size:%?32?%;color:#303133;margin-bottom:%?4?%}.pay-type-list .con[data-v-3c1d594e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?24?%;color:#909399}.mix-btn[data-v-3c1d594e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?630?%;height:%?80?%;margin:%?80?% auto %?30?%;font-size:%?32?%;color:#fff;background-color:#e23435;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}',""]),e.exports=t},fd3a:function(e,t,a){var i=a("f8e5");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("9f4e6eb2",i,!0,{sourceMap:!1,shadowMode:!1})}}]);