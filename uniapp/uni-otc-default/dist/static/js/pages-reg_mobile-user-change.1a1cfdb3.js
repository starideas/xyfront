(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-reg_mobile-user-change"],{"08ab":function(t,e,a){"use strict";a.r(e);var n=a("a7e0"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"0a46":function(t,e,a){"use strict";var n=a("7430"),r=a.n(n);r.a},"165a":function(t,e,a){"use strict";a.r(e);var n=a("5c14"),r=a("a986");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var o,u=a("f0c5"),l=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"599ac67d",null,!1,n["a"],o);e["default"]=l.exports},"39dd":function(t,e,a){"use strict";a.r(e);var n=a("8f10"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},5365:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.visible?a("v-uni-view",{staticClass:"xy-button",class:[t.full?"block":"",t.size?"xy-button-"+t.size:"xy-button",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[]},5577:function(t,e,a){"use strict";a.r(e);var n=a("ba55"),r=a("39dd");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("d369");var o,u=a("f0c5"),l=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"0d9ab67a",null,!1,n["a"],o);e["default"]=l.exports},"5c14":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={xyButton:a("a75b").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"send-verify"},[a("xy-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendVerify.apply(void 0,arguments)}}},[t._v(t._s(t.label))])],1)},i=[]},7430:function(t,e,a){var n=a("900e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("1a7e8855",n,!0,{sourceMap:!1,shadowMode:!1})},"8f10":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("1da1")),i={data:function(){return{verifyList:[],loading:!1,form:{mobile:"",password:"",verify:"",token:"",email:"",emailVerify:"",emailToken:"",gauth:""},rule:{mobile:[{required:!0,message:"请填写新手机号",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){this.loadData()},methods:{getMobileVerifyToken:function(t){this.form.token=t.token},getEmailVerifyToken:function(){this.form.emailToken=res.token},loadData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/reg_mobile/user/change",method:"get"});case 2:a=e.sent,"200"==a.code?t.verifyList=a.data.dataList:t.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()},handleSubmit:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,a=t,setTimeout((function(){a.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/reg_mobile/user/change",data:t.form,method:"put"});case 5:n=e.sent,"200"==n.code?(t.util.showToast({title:n.msg,icon:"success",duration:2e3}),t.util.navigateBack()):t.util.showToast({title:n.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}};e.default=i},"900e":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* tag start*/.xy-button[data-v-39215740]{padding:15px 13px;font-size:14px;-webkit-border-radius:3px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-button.block[data-v-39215740]{display:block}.xy-button-large[data-v-39215740]{padding:18px 10px;font-size:14px;-webkit-border-radius:3px;border-radius:3px;\n  /* display: inline-block;\n  vertical-align: middle; */line-height:14px}.xy-button-medium[data-v-39215740]{padding:10px 10px;font-size:13px;-webkit-border-radius:3px;border-radius:3px;\n  /* display: inline-block;\n  vertical-align: middle; */line-height:14px}.xy-button-small[data-v-39215740]{padding:6px 4px;font-size:12px;-webkit-border-radius:3px;border-radius:3px;\n  /* display: inline-block;\n  vertical-align: middle; */line-height:12px}.xy-button-outline[data-v-39215740]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-button-outline[data-v-39215740]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;-webkit-border-radius:4px;border-radius:4px;border:2px solid #0cbf92}.xy-button-fillet[data-v-39215740]{-webkit-border-radius:25px;border-radius:25px}.xy-white.xy-button-fillet[data-v-39215740]::after{-webkit-border-radius:40px;border-radius:40px}.xy-button-outline-fillet[data-v-39215740]::after{-webkit-border-radius:40px;border-radius:40px}.xy-button-fillet-left[data-v-39215740]{-webkit-border-radius:25px 0 0 25px;border-radius:25px 0 0 25px}.xy-button-fillet-right[data-v-39215740]{-webkit-border-radius:0 25px 25px 0;border-radius:0 25px 25px 0}.xy-button-fillet-left.xy-button-outline[data-v-39215740]::after{-webkit-border-radius:50px 0 0 50px;border-radius:50px 0 0 50px}.xy-button-fillet-right.xy-button-outline[data-v-39215740]::after{-webkit-border-radius:0 50px 50px 0;border-radius:0 50px 50px 0}\n/* tag end*/\n/* color start*/.xy-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-39215740]{color:#0cbf92;background:none}.xy-primary-outline[data-v-39215740]::after{border:1px solid #0cbf92}.xy-light-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-info[data-v-39215740]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-39215740]{color:#5b60ff;background:none}.xy-info-outline[data-v-39215740]::after{border:1px solid #5b60ff}.xy-success[data-v-39215740]{background:#19be6b;color:#fff}.xy-success-outline[data-v-39215740]{color:#19be6b;background:none}.xy-success-outline[data-v-39215740]::after{border:1px solid #19be6b}.xy-error[data-v-39215740]{background:#dd524d;color:#fff}.xy-error-outline[data-v-39215740]{color:#dd524d;background:none}.xy-error-outline[data-v-39215740]::after{border:1px solid #dd524d}.xy-warning[data-v-39215740]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-39215740]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-39215740]::after{border:1px solid #f0ad4e}.xy-white[data-v-39215740]{background:#fff;color:#333}.xy-white-outline[data-v-39215740]{color:#fff;background:none}.xy-white-outline[data-v-39215740]::after{border:1px solid #fff}.xy-black[data-v-39215740]{background:#000;color:#fff}.xy-black-outline[data-v-39215740]{color:#333;background:none}.xy-black-outline[data-v-39215740]::after{border:1px solid #333}.xy-translucent[data-v-39215740]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-39215740]{background:#ededed}.xy-phcolor-gray[data-v-39215740]{background:#ccc}.xy-divider-gray[data-v-39215740]{background:#eaeef1}.xy-btn-gray[data-v-39215740]{background:#ededed;color:#999}.xy-hover-gray[data-v-39215740]{background:#f7f7f9}.xy-bg-gray[data-v-39215740]{background:#fafafa}.xy-light-blue[data-v-39215740]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-39215740]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-39215740]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-39215740]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-39215740]{color:#999;background:none}.xy-gray-outline[data-v-39215740]::after{border:1px solid #ccc}\n/* color end*/',""]),t.exports=e},a75b:function(t,e,a){"use strict";a.r(e);var n=a("5365"),r=a("08ab");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("0a46");var o,u=a("f0c5"),l=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"39215740",null,!1,n["a"],o);e["default"]=l.exports},a7e0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"xy-button",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},full:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"xy-"+t+"-outline":"xy-"+t},getClassName:function(t,e){var a=e?"xy-button-outline ":"";return"square"!=t&&("circle"==t?a+=e?"xy-button-outline-fillet":"xy-button-fillet":"circleLeft"==t?a+="xy-button-fillet-left":"circleRight"==t&&(a+="xy-button-fillet-right")),a}}};e.default=n},a986:function(t,e,a){"use strict";a.r(e);var n=a("bf75"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},ba55:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={xySendVerify:a("165a").default,xyButton:a("a75b").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"safe-form"},[a("v-uni-view",{staticClass:"m-b-md title tw6 ts-20"},[t._v("手机号换绑")]),a("v-uni-view",{staticClass:"form"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title m-b-xs"},[t._v("新手机号")]),a("v-uni-view",{staticClass:"content border-bottom_1px"},[a("v-uni-input",{attrs:{placeholder:"请输入手机号"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1)],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title m-b-xs"},[t._v("新手机验证码")]),a("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[a("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入手机验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}}),a("xy-send-verify",{attrs:{url:"/v1/sms/verify/send",type:"手机号",accound:t.form.mobile,title:"手机号换绑"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.getMobileVerifyToken.apply(void 0,arguments)}}})],1)],1),t.verifyList.indexOf("email")>=0?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title m-b-xs"},[t._v("邮箱验证")]),a("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[a("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入邮箱验证码"},model:{value:t.form.emailVerify,callback:function(e){t.$set(t.form,"emailVerify",e)},expression:"form.emailVerify"}}),a("xy-send-verify",{attrs:{url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"手机号换绑"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.getEmailVerifyToken.apply(void 0,arguments)}}})],1)],1):t._e(),t.verifyList.indexOf("gauth")>=0?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title m-b-xs"},[t._v("谷歌验证")]),a("v-uni-view",{staticClass:"content border-bottom_1px"},[a("v-uni-input",{attrs:{placeholder:"请输入谷歌验证码"},model:{value:t.form.gauth,callback:function(e){t.$set(t.form,"gauth",e)},expression:"form.gauth"}})],1)],1):t._e(),t.verifyList.indexOf("password")>=0?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title m-b-xs"},[t._v("登录密码")]),a("v-uni-view",{staticClass:"content border-bottom_1px"},[a("v-uni-input",{attrs:{placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1):t._e(),a("xy-button",{staticClass:"m-t-lg",attrs:{full:!0,type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)},i=[]},bf75:function(t,e,a){"use strict";var n=a("4ea4");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("1da1")),i={name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.timeLeft>0)){e.next=2;break}return e.abrupt("return");case 2:if(t.account||t.noNeedAccount){e.next=5;break}return t.util.showToast({title:"请输入"+t.type,icon:"loading",duration:1e3}),e.abrupt("return",!1);case 5:return t.timeLeft=t.time,t.label="剩余"+t.timeLeft+"s",a=setInterval((function(){t.timeLeft--,t.timeLeft<=0?(t.label="发送验证码",t.timeLeft=0,clearInterval(a)):t.label="剩余"+t.timeLeft+"s"}),1e3),n={},n="手机号"==t.type?{mobile:t.account,title:t.title}:{email:t.account,title:t.title},e.next=12,t.util.request({url:t.url,data:n,method:"post"});case 12:r=e.sent,"200"==r.code?(t.util.showToast({title:r.msg,icon:"success",duration:1e3}),t.$emit("verifysuccess",r.data)):t.util.showToast({title:r.msg,icon:"loading",duration:2e3});case 14:case"end":return e.stop()}}),e)})))()}}};e.default=i},d369:function(t,e,a){"use strict";var n=a("dbf7"),r=a.n(n);r.a},d5f8:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-0d9ab67a]{background-color:#fff}body.?%PAGE?%[data-v-0d9ab67a]{background-color:#fff}',""]),t.exports=e},dbf7:function(t,e,a){var n=a("d5f8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("49098a2e",n,!0,{sourceMap:!1,shadowMode:!1})}}]);