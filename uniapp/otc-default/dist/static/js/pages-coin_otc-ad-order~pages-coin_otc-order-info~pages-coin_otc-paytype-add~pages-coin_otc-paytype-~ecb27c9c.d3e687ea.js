(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_otc-ad-order~pages-coin_otc-order-info~pages-coin_otc-paytype-add~pages-coin_otc-paytype-~ecb27c9c"],{"1c8a":function(t,e,n){"use strict";var i={xyImage:n("43ba").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-label",{staticClass:"xy-list-item b-b",class:"t-"+t.type,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},["checkbox"==t.selectType?n("v-uni-view",{staticClass:"check"},[n("v-uni-checkbox",{attrs:{value:t.value,checked:t.checked}})],1):t._e(),t.icon||t.image?n("v-uni-view",{staticClass:"left"},[t._t("image",[n("v-uni-view",[n("v-uni-text",{staticClass:"icon text-gray",class:t.icon,style:{color:t.iconColor}})],1),t.image?n("v-uni-view",[n("xy-image",{staticClass:"image",class:t.imageSharp,attrs:{src:t.image,mode:"scaleToFill"}})],1):t._e(),t._t("tag",[n("v-uni-view",{staticClass:"tag"})])])],2):t._e(),n("v-uni-view",{staticClass:"content",style:t.contentStyle},[n("v-uni-view",{staticClass:"title"},[t._t("title",[n("v-uni-view",{staticClass:"left"},[n("v-uni-text",{style:{"font-size":t.titleFs}},[t._v(t._s(t.title))])],1),n("v-uni-view",{staticClass:"right"},[t._t("titleRight",[n("v-uni-text",[t._v(t._s(t.titleRight))])])],2)])],2),n("v-uni-view",{staticClass:"info"},[t._t("info",[t.info?n("v-uni-view",{staticClass:"left p-t-xs"},[n("v-uni-text",[t._v(t._s(t.info))])],1):t._e(),t.infoRight?n("v-uni-view",{staticClass:"right p-t-xs"},[t._t("infoRight",[n("v-uni-text",[t._v(t._s(t.infoRight))])])],2):t._e()])],2)],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"current"},[t._t("current",[n("v-uni-text",[t._v(t._s(t.current))])])],2),t.more?n("v-uni-view",{staticClass:"more"},[t._t("more",[n("v-uni-text",{class:t.more})])],2):t._e()],1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"26a2":function(t,e,n){"use strict";var i=n("ed4c"),a=n.n(i);a.a},"32b8":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"xyListItem",props:{value:{type:[String,Number],default:""},selectType:{type:String,default:""},checked:{type:Boolean,default:!1},uid:{type:Number,default:0},needLogin:{type:Boolean,default:!1},url:{type:String,default:""},loginUrl:{type:String,default:"/pages/core/user/login"},type:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:""},image:{type:String,default:""},imageSharp:{type:String,default:""},title:{type:String,default:""},titleFs:{type:String,default:"14px"},contentStyle:{type:String,default:""},info:{type:String,default:""},current:{type:String,default:""},more:{type:String,default:""},titleRight:{type:String,default:""},infoRight:{type:String,default:""}},data:function(){return{}},created:function(){},methods:{handleClick:function(){this.url?this.needLogin&&!this.uid?uni.navigateTo({url:this.loginUrl}):uni.navigateTo({url:this.url}):this.$emit("click")}}};e.default=i},"43ba":function(t,e,n){"use strict";n.r(e);var i=n("8c33"),a=n("a32b");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("26a2");var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"623a2f9e",null,!1,i["a"],s);e["default"]=l.exports},"46ac":function(t,e,n){"use strict";var i=n("6140"),a=n.n(i);a.a},"4a5f":function(t,e,n){"use strict";var i=n("608f"),a=n.n(i);a.a},"4c68":function(t,e,n){"use strict";(function(t){n("ac1f"),n("466d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"XyImage",props:{src:{type:String,default:""},mode:{type:String,default:""},"lazy-load":{type:Boolean,default:!1},"fade-show":{type:Boolean,default:!0},webp:{type:Boolean,default:!1},"show-menu-by-longpress":{type:Boolean,default:!1},placeholder:{type:String,default:""},complete:{type:Function,default:null}},watch:{src:function(t,e){t&&this.convert(t)}},data:function(){return{native:this.placeholder}},created:function(){this.convert(this.src)},methods:{convert:function(e){var n=this;if(e.match(/(http:|https:)/)){var i=this.util.imageCache(e,(function(t){n.native=t,n.complete&&n.complete(t)}));t.log(e+"->"+i),this.native=i}else this.native=e},load:function(){this.$emit("load")},error:function(){this.$emit("error")}}};e.default=i}).call(this,n("5a52")["default"])},"4db4":function(t,e,n){"use strict";n.r(e);var i=n("a48b"),a=n("ca82");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("8885");var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"0b7ec02c",null,!1,i["a"],s);e["default"]=l.exports},5729:function(t,e,n){"use strict";n.r(e);var i=n("32b8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"608f":function(t,e,n){var i=n("7ac5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("51ccd8e8",i,!0,{sourceMap:!1,shadowMode:!1})},6140:function(t,e,n){var i=n("f2ba");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8f2440fe",i,!0,{sourceMap:!1,shadowMode:!1})},"64a5":function(t,e,n){var i=n("8de1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3418034d",i,!0,{sourceMap:!1,shadowMode:!1})},"7ac5":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.xy-list-item[data-v-5728d68e]{position:relative;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;min-height:50px;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px}.xy-list-item .check[data-v-5728d68e] uni-checkbox .uni-checkbox-input{color:#0cbf92!important;border-radius:20px!important}.xy-list-item .check[data-v-5728d68e] uni-checkbox .uni-checkbox-input:hover, .xy-list-item .check[data-v-5728d68e] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked{border-color:#0cbf92}.xy-list-item .check-noborder[data-v-5728d68e] uni-checkbox .uni-checkbox-input{border:0!important}.xy-list-item .left[data-v-5728d68e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;line-height:1;padding-right:5px}.xy-list-item .left .icon[data-v-5728d68e]{font-size:18px;margin-right:5px}.xy-list-item .left .image[data-v-5728d68e]{width:100px;height:72px}.xy-list-item .left .image.round[data-v-5728d68e]{width:72px;height:72px;border-radius:50%}.xy-list-item .content[data-v-5728d68e]{height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-align-self:center;align-self:center}.xy-list-item .content .title[data-v-5728d68e]{padding:8px 0;font-size:15px;color:#262b3a;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.xy-list-item .content .title .right[data-v-5728d68e]{font-size:12px;-webkit-transform:scale(.9);transform:scale(.9);color:#909399}.xy-list-item .content .info[data-v-5728d68e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.xy-list-item .content .info .left[data-v-5728d68e]{font-size:14px;color:#909399}.xy-list-item .content .info .right[data-v-5728d68e]{font-size:12px;color:#909399}.xy-list-item .right[data-v-5728d68e]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%}.xy-list-item .right .current[data-v-5728d68e]{font-size:12px;color:#909399}.xy-list-item .right .more[data-v-5728d68e]{margin-right:-5px;font-size:18px;color:#909399}.xy-list-item.t-link .content .title .left uni-text[data-v-5728d68e]{font-size:15px!important;font-weight:400!important;color:#303133!important}.xy-list-item.t-media[data-v-5728d68e]{padding:8px}.xy-list-item.t-media .content .title[data-v-5728d68e]{padding:0}.xy-list-item.t-button .content[data-v-5728d68e]{width:auto}.xy-list-item.t-button .content .info[data-v-5728d68e]{display:none}.xy-list-item.t-input .content .title .left[data-v-5728d68e]{min-width:40px}.xy-list-item.t-input .content .title .right[data-v-5728d68e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:15px;-webkit-transform:scale(1);transform:scale(1);white-space:nowrap;text-overflow:ellipsis;display:block;width:100px}',""]),t.exports=e},"85a5":function(t,e,n){"use strict";n.r(e);var i=n("1c8a"),a=n("5729");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("4a5f");var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"5728d68e",null,!1,i["a"],s);e["default"]=l.exports},8885:function(t,e,n){"use strict";var i=n("64a5"),a=n.n(i);a.a},"8c33":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-image",{staticClass:"xy-image",attrs:{src:t.native,mode:t.mode,"lazy-load":this.$props["lazy-load"],"fade-show":this.$props["fade-show"],"show-menu-by-longpress":this.$props["show-menu-by-longpress"],webp:t.webp},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.load.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)}}})},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"8de1":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.xy-switch.small[data-v-0b7ec02c]{-webkit-transform:scale(.5);transform:scale(.5)}.xy-switch.medium[data-v-0b7ec02c]{-webkit-transform:scale(.7);transform:scale(.7)}',""]),t.exports=e},"92d8":function(t,e,n){"use strict";var i=n("ee27");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),r={name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.timeLeft>0)){e.next=2;break}return e.abrupt("return");case 2:if(t.account||t.noNeedAccount){e.next=5;break}return t.util.showToast({title:"请输入"+t.type,icon:"loading",duration:1e3}),e.abrupt("return",!1);case 5:return t.timeLeft=t.time,t.label="剩余"+t.timeLeft+"s",n=setInterval((function(){t.timeLeft--,t.timeLeft<=0?(t.label="发送验证码",t.timeLeft=0,clearInterval(n)):t.label="剩余"+t.timeLeft+"s"}),1e3),i={},i="手机号"==t.type?{mobile:t.account,title:t.title}:{email:t.account,title:t.title},e.next=12,t.util.request({url:t.url,data:i,method:"post"});case 12:a=e.sent,"200"==a.code?(t.util.showToast({title:a.msg,icon:"success",duration:1e3}),t.$emit("verifysuccess",a.data)):t.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 14:case"end":return e.stop()}}),e)})))()}}};e.default=r},a32b:function(t,e,n){"use strict";n.r(e);var i=n("4c68"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},a3b1:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*修复小程序中图片宽高错误*/.xy-image[data-v-623a2f9e]{width:100%;height:100%}",""]),t.exports=e},a48b:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-switch",{class:["xy-switch",t.size],attrs:{trueValue:t.trueValue,falseValue:t.falseValue,checked:t.checked},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange.apply(void 0,arguments)}}})},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},b2d4:function(t,e,n){"use strict";n.r(e);var i=n("fead"),a=n("f0de");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"724e350f",null,!1,i["a"],s);e["default"]=l.exports},be64:function(t,e,n){"use strict";var i={uniPopup:n("ba1b").default,xySendVerify:n("b2d4").default,xyButton:n("d59a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[n("v-uni-view",{staticClass:"bg-white"},[n("v-uni-view",{staticClass:"m-b text-center title tw6 ts-16"},[t._v("安全验证")]),n("v-uni-view",{staticClass:"form"},[t.verifyList.indexOf("email")>=0?n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("邮箱验证")]),n("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[n("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入邮箱验证码"},model:{value:t.form.emailVerify,callback:function(e){t.$set(t.form,"emailVerify",e)},expression:"form.emailVerify"}}),n("xy-send-verify",{attrs:{url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.getVerifyToken.apply(void 0,arguments)}}})],1)],1):t._e(),t.verifyList.indexOf("mobile")>=0?n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手机验证")]),n("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[n("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入手机验证码"},model:{value:t.form.mobileVerify,callback:function(e){t.$set(t.form,"mobileVerify",e)},expression:"form.mobileVerify"}}),n("xy-send-verify",{attrs:{url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.getMobileVerifyToken.apply(void 0,arguments)}}})],1)],1):t._e(),t.verifyList.indexOf("gauth")>=0?n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("谷歌验证")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{placeholder:"请输入谷歌验证码"},model:{value:t.form.gauth,callback:function(e){t.$set(t.form,"gauth",e)},expression:"form.gauth"}})],1)],1):t._e(),t.verifyList.indexOf("paypwd")>=0?n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("支付密码")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{placeholder:"请输入6-18位支付密码"},model:{value:t.form.paypwd,callback:function(e){t.$set(t.form,"paypwd",e)},expression:"form.paypwd"}})],1)],1):t._e(),t.verifyList.indexOf("password")>=0?n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("登录密码")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1):t._e(),n("xy-button",{staticClass:"m-t",attrs:{full:!0,type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},c027:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"XySwitch",props:{value:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},size:{type:[String],default:"large"},disabled:{type:Boolean,default:!1}},data:function(){return{checked:!1}},created:function(){this.value==this.trueValue&&(this.checked=!0)},watch:{value:function(t){t==this.trueValue?this.checked=!0:this.checked=!1}},methods:{switchChange:function(t){this.$emit("change",t.target.value),1==t.target.value?this.$emit("input",this.trueValue):this.$emit("input",this.falseValue)}}};e.default=i},ca82:function(t,e,n){"use strict";n.r(e);var i=n("c027"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},d870:function(t,e,n){"use strict";(function(t){var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),r={name:"xySafetyVerify",props:{value:{type:[String,Object],default:""}},data:function(){return{dialogVisible:!1,verifyList:[],loading:!1,form:{paypwd:"",password:"",emailVerify:"",emailToken:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{}}},created:function(){},methods:{getVerifyToken:function(t){this.form.emailToken=t.token},getMobileVerifyToken:function(t){this.form.mobileToken=t.token},open:function(e){t.log("verifyList",e),this.verifyList=e,this.getRule(),this.$refs.popup.open(),t.log(this.rule)},eclose:function(){this.$emit("cancel")},close:function(){this.$refs.popup.close()},handleSubmit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!0,n=t,setTimeout((function(){n.loading=!1}),5e3),t.$emit("input",t.form),t.$emit("verify-request"),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},getRule:function(){for(var t in this.verifyList)switch(this.verifyList[t]){case"email":this.rule.email=[{required:!0,message:"请填写邮箱验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"mobile":this.rule.mobile=[{required:!0,message:"请填写手机验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"gauth":this.rule.gauth=[{required:!0,message:"请填写谷歌验证码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"paypwd":this.rule.paypwd=[{required:!0,message:"请填写支付密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"password":this.rule.password=[{required:!0,message:"请填写登录密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;default:break}}}};e.default=r}).call(this,n("5a52")["default"])},dc25:function(t,e,n){"use strict";n.r(e);var i=n("d870"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},e5d1:function(t,e,n){"use strict";n.r(e);var i=n("be64"),a=n("dc25");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("46ac");var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"55b32b36",null,!1,i["a"],s);e["default"]=l.exports},ed4c:function(t,e,n){var i=n("a3b1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6d3e1050",i,!0,{sourceMap:!1,shadowMode:!1})},f0de:function(t,e,n){"use strict";n.r(e);var i=n("92d8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},f2ba:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.bg-white[data-v-55b32b36]{min-height:200px;padding:20px;padding-bottom:calc(20px + env(safe-area-inset-bottom))}.bg-white .item[data-v-55b32b36]{margin-bottom:10px}',""]),t.exports=e},fead:function(t,e,n){"use strict";var i={xyButton:n("d59a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"send-verify"},[n("xy-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendVerify.apply(void 0,arguments)}}},[t._v(t._s(t.label))])],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))}}]);