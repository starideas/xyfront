(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-reg_mobile-user-register"],{"14b8":function(t,e,i){"use strict";var n=i("ee27");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("c964")),r={name:"xySendVerify",props:{account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.timeLeft>0)){e.next=2;break}return e.abrupt("return");case 2:if(t.account){e.next=5;break}return t.util.showToast({title:"请输入"+t.type,icon:"loading",duration:1e3}),e.abrupt("return",!1);case 5:return t.timeLeft=t.time,t.label="剩余"+t.timeLeft+"s",i=setInterval((function(){t.timeLeft--,t.timeLeft<=0?(t.label="发送验证码",t.timeLeft=0,clearInterval(i)):t.label="剩余"+t.timeLeft+"s"}),1e3),n={},n="手机号"==t.type?{mobile:t.account,title:t.title}:{email:t.account,title:t.title},e.next=12,t.util.request({url:t.url,data:n,method:"post"});case 12:a=e.sent,"200"==a.code?(t.util.showToast({title:a.msg,icon:"success",duration:1e3}),t.$emit("verifysuccess",a.data)):t.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 14:case"end":return e.stop()}}),e)})))()}}};e.default=r},3879:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"send-verify"},[i("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendVerify.apply(void 0,arguments)}}},[t._v(t._s(t.label))])],1)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))},4005:function(t,e,i){"use strict";i.r(e);var n=i("c96b"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"43cf":function(t,e,i){"use strict";var n={xySendVerify:i("c31b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"left-bottom-sign"}),i("v-uni-view",{staticClass:"back-btn xyicon xyicon-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navBack.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"right-top-sign"}),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"left-top-sign"},[t._v("REGISTER")]),i("v-uni-view",{staticClass:"welcome"},[t._v("欢迎注册！")]),i("v-uni-view",{staticClass:"input-content"},[i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("手机号")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号",maxlength:"11","data-key":"mobile"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)}},model:{value:t.register.mobile,callback:function(e){t.$set(t.register,"mobile",e)},expression:"register.mobile"}})],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("密码")]),i("v-uni-input",{attrs:{type:"password",placeholder:"6-18位密码","placeholder-class":"input-empty",maxlength:"20",password:!0,"data-key":"password"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)}},model:{value:t.register.password,callback:function(e){t.$set(t.register,"password",e)},expression:"register.password"}})],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("验证码")]),i("v-uni-view",{staticClass:"input-group"},[i("v-uni-input",{staticStyle:{flex:"1"},attrs:{type:"text",placeholder:"请输入验证码","placeholder-class":"input-empty",maxlength:"8","data-key":"verify"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)}},model:{value:t.register.verify,callback:function(e){t.$set(t.register,"verify",e)},expression:"register.verify"}}),i("xy-send-verify",{attrs:{type:"手机号",account:t.register.mobile,title:"用户注册",url:"/v1/sms/verify/send"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.verifysuccess.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("邀请码")]),i("v-uni-input",{attrs:{type:"text",placeholder:"邀请码可不填写","placeholder-class":"input-empty",maxlength:"20","data-key":"inviteCode"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)}},model:{value:t.register.inviteCode,callback:function(e){t.$set(t.register,"inviteCode",e)},expression:"register.inviteCode"}})],1)],1),i("v-uni-button",{staticClass:"confirm-btn",attrs:{disabled:t.register.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("注册")]),i("v-uni-view",{staticClass:"forget-section"},[i("v-uni-navigator",{attrs:{url:"/pages/reg_mobile/user/restPassword"}},[t._v("忘记密码?")])],1)],1),i("v-uni-view",{staticClass:"register-section"},[t._v("已有账号?"),i("v-uni-navigator",{attrs:{url:"/pages/core/user/login"}},[i("v-uni-text",[t._v("马上登录")])],1)],1)],1)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))},"491b":function(t,e,i){"use strict";i.r(e);var n=i("43cf"),a=i("4005");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("6f4f");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"b7f2cca6",null,!1,n["a"],o);e["default"]=c.exports},"6f4f":function(t,e,i){"use strict";var n=i("9aab"),a=i.n(n);a.a},"932d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-b7f2cca6]{background:#fff}.container[data-v-b7f2cca6]{padding-top:115px;position:relative;width:100vw;height:100vh;overflow:hidden;background:#fff}.wrapper[data-v-b7f2cca6]{position:relative;z-index:90;background:#fff;padding-bottom:%?40?%}.back-btn[data-v-b7f2cca6]{position:absolute;left:%?40?%;z-index:9999;padding-top:0;top:%?40?%;font-size:%?40?%;color:#303133}.left-top-sign[data-v-b7f2cca6]{font-size:%?120?%;color:#f8f8f8;position:relative;left:%?-16?%}.right-top-sign[data-v-b7f2cca6]{position:absolute;top:%?80?%;right:%?-30?%;z-index:95}.right-top-sign[data-v-b7f2cca6]:before, .right-top-sign[data-v-b7f2cca6]:after{display:block;content:"";width:%?400?%;height:%?80?%;background:#b4f3e2}.right-top-sign[data-v-b7f2cca6]:before{-webkit-transform:rotate(50deg);transform:rotate(50deg);border-radius:0 50px 0 0}.right-top-sign[data-v-b7f2cca6]:after{position:absolute;right:%?-198?%;top:0;-webkit-transform:rotate(-50deg);transform:rotate(-50deg);border-radius:50px 0 0 0\n  /* background: pink; */}.left-bottom-sign[data-v-b7f2cca6]{position:absolute;left:%?-270?%;bottom:%?-320?%;border:%?100?% solid #d0d1fd;border-radius:50%;padding:%?180?%}.welcome[data-v-b7f2cca6]{position:relative;left:%?50?%;top:%?-90?%;font-size:%?46?%;color:#555;text-shadow:1px 0 1px rgba(0,0,0,.3)}.input-content[data-v-b7f2cca6]{padding:0 %?60?%}.input-item[data-v-b7f2cca6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?30?%;background:#f8f6fc;height:%?120?%;border-radius:4px;margin-bottom:%?50?%}.input-item[data-v-b7f2cca6]:last-child{margin-bottom:0}.input-item .tit[data-v-b7f2cca6]{height:%?50?%;line-height:%?56?%;font-size:13px;color:#606266}.input-item uni-input[data-v-b7f2cca6]{height:%?60?%;font-size:15px;color:#303133;width:100%}.input-item .input-group[data-v-b7f2cca6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.input-item .input-group uni-input[data-v-b7f2cca6]{width:auto}.confirm-btn[data-v-b7f2cca6]{width:%?630?%;height:%?76?%;line-height:%?76?%;border-radius:50px;margin-top:%?70?%;background:#e23435;color:#fff;font-size:%?32?%}.confirm-btn[data-v-b7f2cca6]:after{border-radius:100px}.forget-section[data-v-b7f2cca6]{font-size:13px;color:#4399fc;text-align:center;margin-top:%?40?%}.register-section[data-v-b7f2cca6]{position:absolute;left:0;bottom:80px;width:100%;font-size:13px;color:#606266;text-align:center}.register-section uni-text[data-v-b7f2cca6]{color:#4399fc;margin-left:%?10?%}body.?%PAGE?%[data-v-b7f2cca6]{background:#fff}',""]),t.exports=e},"9aab":function(t,e,i){var n=i("932d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("16d354ce",n,!0,{sourceMap:!1,shadowMode:!1})},"9d8a":function(t,e,i){"use strict";i.r(e);var n=i("14b8"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},c31b:function(t,e,i){"use strict";i.r(e);var n=i("3879"),a=i("9d8a");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"3f32cb18",null,!1,n["a"],o);e["default"]=c.exports},c96b:function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("c964")),r=(i("2f62"),{data:function(){return{register:{loading:!1,mobile:"",password:"",verify:"",token:"",inviteCode:"",channelName:""}}},onLoad:function(){this.register.inviteCode=uni.getStorageSync("inviteCode"),this.register.channelName=uni.getStorageSync("channelName")},methods:{verifysuccess:function(t){this.register.token=t.token},inputChange:function(t){var e=t.currentTarget.dataset.key;this.register[e]=t.detail.value},navBack:function(){uni.navigateBack()},submit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.register.loading=!0,i=t,setTimeout((function(){i.register.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/reg_mobile/user/register",data:t.register,method:"post"});case 5:n=e.sent,200==n.code?(t.util.showToast({title:n.msg,icon:"success",duration:1e3}),t.util.navigateTo({url:"/pages/core/user/login"})):t.util.showToast({title:n.msg,icon:"loading",duration:2e3}),t.register.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}});e.default=r}}]);