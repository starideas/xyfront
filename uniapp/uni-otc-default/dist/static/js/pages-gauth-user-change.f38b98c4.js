(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-gauth-user-change"],{3196:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.visible?r("v-uni-view",{staticClass:"xy-button",class:[t.full?"block":"",t.size?"xy-button-"+t.size:"xy-button",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[]},"331b":function(t,e,r){"use strict";r.r(e);var n=r("3196"),a=r("ad76");for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);r("b92a");var o,u=r("f0c5"),l=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"39215740",null,!1,n["a"],o);e["default"]=l.exports},"3a7c":function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var n={xyCopy:r("b1ee").default,xyTag:r("1934").default,xyQrcode:r("0b06").default,xySendVerify:r("82f7").default,xyButton:r("331b").default},a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"safe-form"},[r("v-uni-view",{staticClass:"m-b-md title tw6 ts-20"},[t._v("换绑谷歌验证")]),r("v-uni-view",{staticClass:"text-error m-b"},[t._v("保存二维码到手机或复制秘钥到剪贴板可能会有安全风险，请妥善保管")]),r("v-uni-view",{staticClass:"m-t"},[r("v-uni-view",{staticClass:"m-b-sm title ts-16 tw6"},[t._v("谷歌密钥")]),r("v-uni-view",{staticClass:"flex space-between flex-alignCenter"},[r("v-uni-input",{staticClass:"xy-input bg-default b-0 p-l-xs p-r-xs m-r-xs flex-1",attrs:{disabled:!0,type:"text",value:t.gauthSecret}}),r("xy-copy",{attrs:{content:t.gauthSecret}},[r("xy-tag",{attrs:{type:"primary"}},[t._v("复制")])],1)],1)],1),r("v-uni-view",{staticClass:"m-t bg-default p-t p-b text-center"},[r("xy-qrcode",{attrs:{size:"140",val:t.gauthQrcode}})],1),r("v-uni-view",{staticClass:"m-t"},[r("v-uni-view",{staticClass:"m-b-sm title ts-16 tw6"},[t._v("换绑步骤")]),r("v-uni-view",{staticClass:"lh-1-6 text-gray ts-13"},[t._v("1. 安装谷歌身份验证器APP（Google Authenticator）"),r("br"),t._v("2. 备份二维码和（或）秘钥"),r("br"),t._v("3. 在谷歌验证器中添加秘钥或用谷歌验证器扫上面二维码"),r("br"),t._v("4. 输入添加成功后谷歌验证器显示的6位数验证码")])],1),r("v-uni-view",{staticClass:"form m-t"},[r("v-uni-view",{staticClass:"item"},[r("v-uni-view",{staticClass:"title m-b-xs"},[t._v("谷歌验证码")]),r("v-uni-view",{staticClass:"content border-bottom_1px"},[r("v-uni-input",{attrs:{placeholder:"请输入谷歌验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}})],1)],1),t.verifyList.indexOf("email")>=0?r("v-uni-view",{staticClass:"item"},[r("v-uni-view",{staticClass:"title m-b-xs"},[t._v("邮箱验证码")]),r("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[r("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入邮箱验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}}),r("xy-send-verify",{attrs:{url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"绑定谷歌验证"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.getEmailVerifyToken.apply(void 0,arguments)}}})],1)],1):t._e(),t.verifyList.indexOf("mobile")>=0?r("v-uni-view",{staticClass:"item"},[r("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手机验证")]),r("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[r("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入手机验证码"},model:{value:t.form.mobileVerify,callback:function(e){t.$set(t.form,"mobileVerify",e)},expression:"form.mobileVerify"}}),r("xy-send-verify",{attrs:{url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"绑定谷歌验证"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.getMobileVerifyToken.apply(void 0,arguments)}}})],1)],1):t._e(),t.verifyList.indexOf("password")>=0?r("v-uni-view",{staticClass:"item"},[r("v-uni-view",{staticClass:"title m-b-xs"},[t._v("登录密码")]),r("v-uni-view",{staticClass:"content border-bottom_1px"},[r("v-uni-input",{attrs:{placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1):t._e(),r("xy-button",{staticClass:"m-t-lg",attrs:{full:!0,type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)},i=[]},4053:function(t,e,r){"use strict";r.r(e);var n=r("b6df"),a=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},"586c":function(t,e,r){"use strict";var n=r("77cb"),a=r.n(n);a.a},"5caf":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"xy-button",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},full:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"xy-"+t+"-outline":"xy-"+t},getClassName:function(t,e){var r=e?"xy-button-outline ":"";return"square"!=t&&("circle"==t?r+=e?"xy-button-outline-fillet":"xy-button-fillet":"circleLeft"==t?r+="xy-button-fillet-left":"circleRight"==t&&(r+="xy-button-fillet-right")),r}}};e.default=n},"6acc":function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var n={xyButton:r("331b").default},a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"send-verify"},[r("xy-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendVerify.apply(void 0,arguments)}}},[t._v(t._s(t.label))])],1)},i=[]},"6db6":function(t,e,r){"use strict";r.r(e);var n=r("3a7c"),a=r("ed48");for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);r("586c");var o,u=r("f0c5"),l=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"4b689379",null,!1,n["a"],o);e["default"]=l.exports},"77cb":function(t,e,r){var n=r("edfc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("4f06").default;a("646cfc3d",n,!0,{sourceMap:!1,shadowMode:!1})},"7d3f":function(t,e,r){var n=r("e83d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("4f06").default;a("3ed44b97",n,!0,{sourceMap:!1,shadowMode:!1})},"82f7":function(t,e,r){"use strict";r.r(e);var n=r("6acc"),a=r("4053");for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);var o,u=r("f0c5"),l=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"599ac67d",null,!1,n["a"],o);e["default"]=l.exports},ad76:function(t,e,r){"use strict";r.r(e);var n=r("5caf"),a=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},b6df:function(t,e,r){"use strict";var n=r("4ea4");r("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var a=n(r("1da1")),i={name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.timeLeft>0)){e.next=2;break}return e.abrupt("return");case 2:if(t.account||t.noNeedAccount){e.next=5;break}return t.util.showToast({title:"请输入"+t.type,icon:"loading",duration:1e3}),e.abrupt("return",!1);case 5:return t.timeLeft=t.time,t.label="剩余"+t.timeLeft+"s",r=setInterval((function(){t.timeLeft--,t.timeLeft<=0?(t.label="发送验证码",t.timeLeft=0,clearInterval(r)):t.label="剩余"+t.timeLeft+"s"}),1e3),n={},n="手机号"==t.type?{mobile:t.account,title:t.title}:{email:t.account,title:t.title},e.next=12,t.util.request({url:t.url,data:n,method:"post"});case 12:a=e.sent,"200"==a.code?(t.util.showToast({title:a.msg,icon:"success",duration:1e3}),t.$emit("verifysuccess",a.data)):t.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 14:case"end":return e.stop()}}),e)})))()}}};e.default=i},b92a:function(t,e,r){"use strict";var n=r("7d3f"),a=r.n(n);a.a},dbb8:function(t,e,r){"use strict";var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var a=n(r("1da1")),i={data:function(){return{verifyList:[],loading:!1,gauthSecret:"加载中...",gauthQrcode:"",form:{verify:"",password:"",emailVerify:"",emailToken:"",mobileVerify:"",mobileToken:""},rule:{verify:[{required:!0,message:"请填写谷歌验证码",trigger:"blur"},{type:"string",min:6,message:"验证码为6位",trigger:"blur"}]}}},created:function(){this.loadData()},methods:{getEmailVerifyToken:function(t){this.form.emailToken=t.token},getMobileVerifyToken:function(t){this.form.mobileToken=t.token},loadData:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/gauth/user/change",method:"get"});case 2:r=e.sent,"200"==r.code?(t.verifyList=r.data.dataList,t.gauthSecret=r.data.gauthSecret,t.gauthQrcode=r.data.gauthQrcode):t.util.showToast({title:r.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()},handleSubmit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,r=t,setTimeout((function(){r.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/gauth/user/change",data:t.form,method:"put"});case 5:n=e.sent,"200"==n.code?(t.util.showToast({title:n.msg,icon:"success",duration:2e3}),t.util.navigateBack()):t.util.showToast({title:n.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}};e.default=i},e83d:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */\r\n/* tag start*/.xy-button[data-v-39215740]{padding:15px 13px;font-size:14px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-button.block[data-v-39215740]{display:block}.xy-button-large[data-v-39215740]{padding:18px 10px;font-size:14px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-medium[data-v-39215740]{padding:10px 10px;font-size:13px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-small[data-v-39215740]{padding:6px 4px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:12px}.xy-button-outline[data-v-39215740]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-button-outline[data-v-39215740]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:4px;border:2px solid #0cbf92}.xy-button-fillet[data-v-39215740]{border-radius:25px}.xy-white.xy-button-fillet[data-v-39215740]::after{border-radius:40px}.xy-button-outline-fillet[data-v-39215740]::after{border-radius:40px}.xy-button-fillet-left[data-v-39215740]{border-radius:25px 0 0 25px}.xy-button-fillet-right[data-v-39215740]{border-radius:0 25px 25px 0}.xy-button-fillet-left.xy-button-outline[data-v-39215740]::after{border-radius:50px 0 0 50px}.xy-button-fillet-right.xy-button-outline[data-v-39215740]::after{border-radius:0 50px 50px 0}\r\n/* tag end*/\r\n/* color start*/.xy-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-39215740]{color:#0cbf92;background:none}.xy-primary-outline[data-v-39215740]::after{border:1px solid #0cbf92}.xy-light-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-info[data-v-39215740]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-39215740]{color:#5b60ff;background:none}.xy-info-outline[data-v-39215740]::after{border:1px solid #5b60ff}.xy-success[data-v-39215740]{background:#19be6b;color:#fff}.xy-success-outline[data-v-39215740]{color:#19be6b;background:none}.xy-success-outline[data-v-39215740]::after{border:1px solid #19be6b}.xy-error[data-v-39215740]{background:#dd524d;color:#fff}.xy-error-outline[data-v-39215740]{color:#dd524d;background:none}.xy-error-outline[data-v-39215740]::after{border:1px solid #dd524d}.xy-warning[data-v-39215740]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-39215740]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-39215740]::after{border:1px solid #f0ad4e}.xy-white[data-v-39215740]{background:#fff;color:#333}.xy-white-outline[data-v-39215740]{color:#fff;background:none}.xy-white-outline[data-v-39215740]::after{border:1px solid #fff}.xy-black[data-v-39215740]{background:#000;color:#fff}.xy-black-outline[data-v-39215740]{color:#333;background:none}.xy-black-outline[data-v-39215740]::after{border:1px solid #333}.xy-translucent[data-v-39215740]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-39215740]{background:#ededed}.xy-phcolor-gray[data-v-39215740]{background:#ccc}.xy-divider-gray[data-v-39215740]{background:#eaeef1}.xy-btn-gray[data-v-39215740]{background:#ededed;color:#999}.xy-hover-gray[data-v-39215740]{background:#f7f7f9}.xy-bg-gray[data-v-39215740]{background:#fafafa}.xy-light-blue[data-v-39215740]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-39215740]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-39215740]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-39215740]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-39215740]{color:#999;background:none}.xy-gray-outline[data-v-39215740]::after{border:1px solid #ccc}\r\n/* color end*/',""]),t.exports=e},ed48:function(t,e,r){"use strict";r.r(e);var n=r("dbb8"),a=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},edfc:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */uni-page-body[data-v-4b689379]{background-color:#fff}body.?%PAGE?%[data-v-4b689379]{background-color:#fff}',""]),t.exports=e}}]);