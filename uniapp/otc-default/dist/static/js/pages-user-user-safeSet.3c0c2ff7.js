(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user-safeSet"],{"13f9":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */\r\n/* tag start*/.xy-button[data-v-9e603a5c]{padding:15px 13px;font-size:14px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-button.block[data-v-9e603a5c]{display:block}.xy-button-large[data-v-9e603a5c]{padding:18px 10px;font-size:14px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-medium[data-v-9e603a5c]{padding:10px 10px;font-size:13px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-small[data-v-9e603a5c]{padding:6px 4px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:12px}.xy-button-outline[data-v-9e603a5c]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-button-outline[data-v-9e603a5c]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:4px;border:2px solid #0cbf92}.xy-button-fillet[data-v-9e603a5c]{border-radius:25px}.xy-white.xy-button-fillet[data-v-9e603a5c]::after{border-radius:40px}.xy-button-outline-fillet[data-v-9e603a5c]::after{border-radius:40px}.xy-button-fillet-left[data-v-9e603a5c]{border-radius:25px 0 0 25px}.xy-button-fillet-right[data-v-9e603a5c]{border-radius:0 25px 25px 0}.xy-button-fillet-left.xy-button-outline[data-v-9e603a5c]::after{border-radius:50px 0 0 50px}.xy-button-fillet-right.xy-button-outline[data-v-9e603a5c]::after{border-radius:0 50px 50px 0}\r\n/* tag end*/\r\n/* color start*/.xy-primary[data-v-9e603a5c]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-9e603a5c]{color:#0cbf92;background:none}.xy-primary-outline[data-v-9e603a5c]::after{border:1px solid #0cbf92}.xy-light-primary[data-v-9e603a5c]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-9e603a5c]{background:#0cbf92;color:#fff}.xy-info[data-v-9e603a5c]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-9e603a5c]{color:#5b60ff;background:none}.xy-info-outline[data-v-9e603a5c]::after{border:1px solid #5b60ff}.xy-success[data-v-9e603a5c]{background:#19be6b;color:#fff}.xy-success-outline[data-v-9e603a5c]{color:#19be6b;background:none}.xy-success-outline[data-v-9e603a5c]::after{border:1px solid #19be6b}.xy-error[data-v-9e603a5c]{background:#dd524d;color:#fff}.xy-error-outline[data-v-9e603a5c]{color:#dd524d;background:none}.xy-error-outline[data-v-9e603a5c]::after{border:1px solid #dd524d}.xy-warning[data-v-9e603a5c]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-9e603a5c]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-9e603a5c]::after{border:1px solid #f0ad4e}.xy-white[data-v-9e603a5c]{background:#fff;color:#333}.xy-white-outline[data-v-9e603a5c]{color:#fff;background:none}.xy-white-outline[data-v-9e603a5c]::after{border:1px solid #fff}.xy-black[data-v-9e603a5c]{background:#000;color:#fff}.xy-black-outline[data-v-9e603a5c]{color:#333;background:none}.xy-black-outline[data-v-9e603a5c]::after{border:1px solid #333}.xy-translucent[data-v-9e603a5c]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-9e603a5c]{background:#ededed}.xy-phcolor-gray[data-v-9e603a5c]{background:#ccc}.xy-divider-gray[data-v-9e603a5c]{background:#eaeef1}.xy-btn-gray[data-v-9e603a5c]{background:#ededed;color:#999}.xy-hover-gray[data-v-9e603a5c]{background:#f7f7f9}.xy-bg-gray[data-v-9e603a5c]{background:#fafafa}.xy-light-blue[data-v-9e603a5c]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-9e603a5c]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-9e603a5c]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-9e603a5c]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-9e603a5c]{color:#999;background:none}.xy-gray-outline[data-v-9e603a5c]::after{border:1px solid #ccc}\r\n/* color end*/',""]),e.exports=t},"1a5c":function(e,t,a){var n=a("7642");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("4f06").default;r("6a041512",n,!0,{sourceMap:!1,shadowMode:!1})},"1dcf":function(e,t,a){"use strict";a.r(t);var n=a("ddb8"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},2066:function(e,t,a){"use strict";var n={xyListItem:a("85a5").default,xySwitch:a("4db4").default,xySafetyVerify:a("e5d1").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"p-l-sm"},[a("v-uni-view",{staticClass:"header p-l-xs p-t-md p-b"},[a("v-uni-view",{staticClass:"title ts-24 tw6"},[e._v("安全设置")])],1),e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0?a("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"手机绑定"}},[a("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[e.safeSet["mobile"]?e._e():a("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.util.navigateTo({url:"/pages/reg_mobile/user/bind"})}}},[e._v("绑定")]),e.safeSet["mobile"]?a("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.util.navigateTo({url:"/pages/reg_mobile/user/change"})}}},[e._v("换绑")]):e._e()],1)],1):e._e(),e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")>=0?a("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"邮箱绑定"}},[a("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[e.safeSet["mobile"]?e._e():a("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.util.navigateTo({url:"/pages/reg_email/user/bind"})}}},[e._v("绑定")]),e.safeSet["mobile"]?a("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.util.navigateTo({url:"/pages/reg_email/user/change"})}}},[e._v("换绑")]):e._e()],1)],1):e._e(),a("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"登录密码"}},[a("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[e.safeSet["password"]&&e.safeSet["password"]["isset"]?a("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.util.navigateTo({url:"./resetPassword"})}}},[e._v("修改")]):e._e(),e.safeSet["password"]&&!e.safeSet["password"]["isset"]?a("v-uni-text",[e._v("设置")]):e._e()],1)],1),e.$store.state.app.siteInfo.versionFuncsAll.indexOf("paypwd")>=0?a("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"资金密码"}},[a("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[e.safeSet["paypwd"]&&e.safeSet["paypwd"]["isset"]?a("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.util.navigateTo({url:"/pages/paypwd/pwd/change"})}}},[e._v("修改")]):e._e(),e.safeSet["paypwd"]&&!e.safeSet["paypwd"]["isset"]?a("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.util.navigateTo({url:"/pages/paypwd/pwd/set"})}}},[e._v("设置")]):e._e()],1)],1):e._e(),e.$store.state.app.siteInfo.versionFuncsAll.indexOf("gauth")>=0?a("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"谷歌验证"}},[a("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[e.safeSet["gauth"]?e._e():a("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.util.navigateTo({url:"/pages/gauth/user/bind"})}}},[e._v("绑定")]),e.safeSet["gauth"]?a("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.util.navigateTo({url:"/pages/gauth/user/change"})}}},[e._v("换绑")]):e._e()],1)],1):e._e(),e.$store.state.app.siteInfo.versionFuncsAll.indexOf("gauth")>=0||e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0||e.$store.state.app.siteInfo.versionFuncsAll.indexOf("email")>=0?a("xy-list-item",{attrs:{type:"link",more:"",title:"二次验证"}},[a("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[a("xy-switch",{attrs:{size:"medium",trueValue:1,falseValue:0},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handle2fa.apply(void 0,arguments)}},model:{value:e.mfa,callback:function(t){e.mfa=t},expression:"mfa"}})],1)],1):e._e(),a("xy-safety-verify",{ref:"sv",on:{"verify-request":function(t){arguments[0]=t=e.$handleEvent(t),e.handle2fa.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}},model:{value:e.verifyData,callback:function(t){e.verifyData=t},expression:"verifyData"}})],1)},i=[];a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}))},4237:function(e,t,a){"use strict";var n=a("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var r=n(a("c964")),i={data:function(){return{safeSet:{},verifyData:"",mfa:0}},onLoad:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadSafeSet();case 2:case"end":return t.stop()}}),t)})))()},methods:{close:function(){this.mfa=this.safeSet["2fa"]},handle2fa:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={action:0},0==this.mfa&&(a.action=1),this.verifyData&&(a._verify=this.verifyData),e.next=5,this.util.request({url:"/v1/user/user/loginVerifySet",data:a,method:"put"});case 5:if(n=e.sent,200!=n.code){e.next=13;break}this.$refs.sv.close(),this.util.showToast({title:n.msg,icon:"success",duration:2e3}),this.loadSafeSet(),this.verifyData="",e.next=19;break;case 13:if(this.mfa=this.safeSet["2fa"],401003!=n.code){e.next=17;break}return this.$refs.sv.open(n.data.verifyList),e.abrupt("return");case 17:return this.util.showToast({title:n.msg,icon:"loading",duration:3e3}),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),loadSafeSet:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/user/user/safeSet",method:"get"});case 2:a=t.sent,200==a.code?(e.safeSet=a.data.dataList,e.mfa=e.safeSet["2fa"]):e.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()}}};t.default=i},7642:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */uni-page-body[data-v-4600fcd2]{background-color:#fff}body.?%PAGE?%[data-v-4600fcd2]{background-color:#fff}',""]),e.exports=t},9065:function(e,t,a){"use strict";var n=a("1a5c"),r=a.n(n);r.a},c253:function(e,t,a){var n=a("13f9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("4f06").default;r("18e07943",n,!0,{sourceMap:!1,shadowMode:!1})},c45f:function(e,t,a){"use strict";a.r(t);var n=a("2066"),r=a("f63f");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("9065");var o,s=a("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"4600fcd2",null,!1,n["a"],o);t["default"]=c.exports},cf13:function(e,t,a){"use strict";var n,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.visible?a("v-uni-view",{staticClass:"xy-button",class:[e.full?"block":"",e.size?"xy-button-"+e.size:"xy-button",e.getClassName(e.shape,e.plain),e.getTypeClass(e.type,e.plain)],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick.apply(void 0,arguments)}}},[e._t("default")],2):e._e()},i=[];a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}))},d59a:function(e,t,a){"use strict";a.r(t);var n=a("cf13"),r=a("1dcf");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("ee67");var o,s=a("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"9e603a5c",null,!1,n["a"],o);t["default"]=c.exports},ddb8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"xy-button",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},full:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(e,t){return t?"xy-"+e+"-outline":"xy-"+e},getClassName:function(e,t){var a=t?"xy-button-outline ":"";return"square"!=e&&("circle"==e?a+=t?"xy-button-outline-fillet":"xy-button-fillet":"circleLeft"==e?a+="xy-button-fillet-left":"circleRight"==e&&(a+="xy-button-fillet-right")),a}}};t.default=n},ee67:function(e,t,a){"use strict";var n=a("c253"),r=a.n(n);r.a},f63f:function(e,t,a){"use strict";a.r(t);var n=a("4237"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a}}]);