(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-reg_mobile-user-restPassword"],{"14b8":function(e,t,n){"use strict";var i=n("ee27");n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=i(n("c964")),a={name:"xySendVerify",props:{account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.timeLeft>0)){t.next=2;break}return t.abrupt("return");case 2:if(e.account){t.next=5;break}return e.util.showToast({title:"请输入"+e.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return e.timeLeft=e.time,e.label="剩余"+e.timeLeft+"s",n=setInterval((function(){e.timeLeft--,e.timeLeft<=0?(e.label="发送验证码",e.timeLeft=0,clearInterval(n)):e.label="剩余"+e.timeLeft+"s"}),1e3),i={},i="手机号"==e.type?{mobile:e.account,title:e.title}:{email:e.account,title:e.title},t.next=12,e.util.request({url:e.url,data:i,method:"post"});case 12:r=t.sent,"200"==r.code?(e.util.showToast({title:r.msg,icon:"success",duration:1e3}),e.$emit("verifysuccess",r.data)):e.util.showToast({title:r.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t)})))()}}};t.default=a},3879:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"send-verify"},[n("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendVerify.apply(void 0,arguments)}}},[e._v(e._s(e.label))])],1)},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},"3f2e":function(e,t,n){var i=n("6b35");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("78098224",i,!0,{sourceMap:!1,shadowMode:!1})},"541c":function(e,t,n){"use strict";n.r(t);var i=n("9cd2"),r=n("de16");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("eb09");var s,u=n("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"7adb5e34",null,!1,i["a"],s);t["default"]=o.exports},6221:function(e,t,n){"use strict";var i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=i(n("c964")),a=i(n("f3f3")),s=n("2f62"),u={data:function(){return{register:{loading:!1,mobile:"",newPassword:"",verify:"",token:""}}},onLoad:function(){this.register.inviteCode=uni.getStorageSync("inviteCode"),this.register.channel_name=uni.getStorageSync("channel_name")},computed:(0,a.default)({},(0,s.mapState)(["app","user"])),methods:{verifysuccess:function(e){this.register.token=e.token},submit:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,e.register.loading=!0,setTimeout((function(){n.register.loading=!1}),5e3),t.next=5,e.util.request({url:"/v1/reg_mobile/user/register",data:e.register,method:"put"});case 5:i=t.sent,200==i.code?(e.util.showToast({title:i.msg,icon:"success",duration:1e3}),e.util.navigateTo({url:"/pages/core/user/login"})):e.util.showToast({title:i.msg,icon:"loading",duration:2e3}),e.register.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}}};t.default=u},"6b35":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.wrap .logo-img[data-v-7adb5e34]{width:%?200?%;height:%?200?%;border-radius:50%}.wrap .link[data-v-7adb5e34]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.wrap .verify .xy-input[data-v-7adb5e34]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.wrap .verify .send-verify[data-v-7adb5e34]{position:absolute;right:5px;top:5px}',""]),e.exports=t},"9cd2":function(e,t,n){"use strict";var i={xySendVerify:n("c31b").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"wrap m-l-sm m-r-sm"},[n("v-uni-view",{staticClass:"logo-box m-b m-t-lg"},[n("v-uni-view",{staticStyle:{"text-align":"center"}},[n("v-uni-image",{staticClass:"logo-img",attrs:{src:e.app.siteInfo.logo,mode:"aspectFit"}})],1)],1),n("v-uni-view",{staticClass:"form"},[n("v-uni-view",{staticClass:"m-b-sm"},[n("v-uni-input",{staticClass:"xy-input",attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号"},model:{value:e.register.mobile,callback:function(t){e.$set(e.register,"mobile",t)},expression:"register.mobile"}})],1),n("v-uni-view",{staticClass:"m-b-sm"},[n("v-uni-input",{staticClass:"xy-input",attrs:{type:"password",maxlength:"30",placeholder:"请输入新密码"},model:{value:e.register.newPassword,callback:function(t){e.$set(e.register,"newPassword",t)},expression:"register.newPassword"}})],1),n("v-uni-view",{staticClass:"m-b-sm pos-r verify"},[n("v-uni-input",{staticClass:"xy-input",attrs:{type:"text",maxlength:"8",placeholder:"验证码"},model:{value:e.register.verify,callback:function(t){e.$set(e.register,"verify",t)},expression:"register.verify"}}),n("xy-send-verify",{attrs:{type:"手机号",account:e.register.email,title:"重置密码",url:"/v1/email/verify/send"},on:{verifysuccess:function(t){arguments[0]=t=e.$handleEvent(t),e.verifysuccess.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"m-b-sm link flex text-placeholder"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-navigator",{attrs:{url:"/pages/core/user/login"}},[e._v("立即登录")])],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-navigator",{attrs:{url:"/pages/reg_mobile/user/register"}},[e._v("立即注册")])],1)],1),n("v-uni-view",{staticClass:"m-t-md"},[n("v-uni-button",{attrs:{type:"primary",loading:e.register.loading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("重置密码")])],1)],1)],1)},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},"9d8a":function(e,t,n){"use strict";n.r(t);var i=n("14b8"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},c31b:function(e,t,n){"use strict";n.r(t);var i=n("3879"),r=n("9d8a");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);var s,u=n("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"3f32cb18",null,!1,i["a"],s);t["default"]=o.exports},de16:function(e,t,n){"use strict";n.r(t);var i=n("6221"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},eb09:function(e,t,n){"use strict";var i=n("3f2e"),r=n.n(i);r.a}}]);