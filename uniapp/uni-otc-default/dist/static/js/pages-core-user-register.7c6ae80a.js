(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-user-register","pages-reg_email-user-register","pages-reg_mobile-user-register"],{"0e76":function(t,e,i){"use strict";i.r(e);var n=i("2337"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"0ec4":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={xySendVerify:i("82f7").default,xyCheckbox:i("c782").default,xyButton:i("331b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"form"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("邮箱")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{maxlength:"20",placeholder:"请输入邮箱"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("邮箱验证码")]),i("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[i("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入邮箱验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}}),i("xy-send-verify",{attrs:{url:"/v1/email/verify/send",type:"邮箱",account:t.form.email,title:"用户注册"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.verifysuccess.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("密码")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("邀请码")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{placeholder:"邀请码"},model:{value:t.form.inviteCode,callback:function(e){t.$set(t.form,"inviteCode",e)},expression:"form.inviteCode"}})],1)],1),i("v-uni-view",{staticClass:"agreement flex ts-12 flex-alignCenter"},[i("xy-checkbox",{attrs:{size:"medium"},model:{value:t.form.agreement,callback:function(e){t.$set(t.form,"agreement",e)},expression:"form.agreement"}},[t._v("我已阅读并同意")]),i("v-uni-navigator",{attrs:{url:"/pages/user_agreement/agreement/info?title=用户协议"}},[t._v("《用户协议》")]),t._v("和"),i("v-uni-navigator",{attrs:{url:"/pages/user_agreement/agreement/info?title=隐私政策"}},[t._v("《隐私政策》")])],1),i("v-uni-view",{staticClass:"m-t-xs"},[i("xy-button",{attrs:{type:"primary",full:!0,size:"large",loading:t.form.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.form.loading?"注册中...":"立即注册"))])],1),"default"==t.mode?i("v-uni-view",{staticClass:"m-t-sm flex space-between"},[i("v-uni-view",{staticClass:"text-gray ts-13",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/user/user/resetPassword"})}}},[t._v("忘记密码?")]),i("v-uni-view",{staticClass:"text-primary ts-13",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/core/user/login"})}}},[t._v("立即登录")])],1):t._e()],1)],1)},r=[]},"11f8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.xy-tabs[data-v-1985326a]{position:relative}.xy-tabs[data-v-1985326a] uni-scroll-view::-webkit-scrollbar,\r\n.xy-tabs[data-v-1985326a] .uni-scroll-view::-webkit-scrollbar{display:none}.xy-tabs .tab[data-v-1985326a]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;font-size:16px;padding-bottom:0;white-space:nowrap}.xy-tabs .tab-item[data-v-1985326a]{text-align:center;line-height:38px;color:#333}.xy-tabs .tab-item--active[data-v-1985326a]{color:#0cbf92}.xy-tabs .tab-item .title[data-v-1985326a]{margin:0 10px}.xy-tabs .tab-item:first-child .title[data-v-1985326a]{margin-left:0}.xy-tabs .tab-item:last-child .title[data-v-1985326a]{margin-right:0}.xy-tabs.card .tab-item[data-v-1985326a]{background:#e5e5eb}.xy-tabs.card .tab-item-active[data-v-1985326a]{background-color:#fff}.xy-tabs .tab-line[data-v-1985326a]{display:block;height:2px;position:absolute;bottom:0;left:0;z-index:1;-webkit-border-radius:1px;border-radius:1px;position:relative;background:#0cbf92}',""]),t.exports=e},2337:function(t,e,i){"use strict";(function(t){i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{value:[Number,String],list:{type:[Array,Object],default:function(){return[]}},type:{type:String,default:""},showActive:{type:Boolean,default:!0},full:{type:Boolean,default:!0},itemColor:String,lineColor:String,lineAnimated:{type:Boolean,default:!0}},data:function(){return{currentIndex:0,lineStyle:{},scrollLeft:0,tabsScrollLeft:0,duration:.3}},computed:{showTitleSlot:function(){return this.$scopedSlots.title}},watch:{list:function(){this.setTabList()},value:function(){this.setTabList()}},mounted:function(){this.currentIndex=this.value,this.setTabList(),this.lineAnimated||(this.duration=0),t("log",this.$scopedSlots," at node_modules/xyui/flex-ui/src/xy-tabs/xy-tabs.vue:80")},methods:{select:function(t,e){this.currentIndex=e,this.$emit("input",e),this.$emit("tab-click",e)},setTabList:function(){var t=this;this.$nextTick((function(){t.list.length>0&&(t.setLine(),t.scrollIntoView())}))},setLine:function(){var t=this,e=0,i=0;this.getElementData("#tab_item",(function(n){var a=n[t.currentIndex];e=a.width/2,i=a.width/2-n[0].left+a.left,t.lineStyle={width:"".concat(e,"px"),transform:"translateX(".concat(i,"px) translateX(-50%)"),transitionDuration:"".concat(t.duration,"s")}}))},scrollIntoView:function(){var t=this,e=0;this.getElementData("#tab_list",(function(i){var n=i[0];t.getElementData("#tab_item",(function(i){var a=i[t.currentIndex];e=a.width/2-n.left+a.left-n.width/2-t.scrollLeft,t.tabsScrollLeft=t.scrollLeft+e}))}))},getElementData:function(t,e){uni.createSelectorQuery().in(this).selectAll(t).boundingClientRect().exec((function(t){e(t[0])}))},scroll:function(t){this.scrollLeft=t.detail.scrollLeft}}};e.default=n}).call(this,i("0de9")["log"])},3349:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */uni-page-body[data-v-3027acd8]{background-color:#fff}uni-page-body .top-tabs[data-v-3027acd8]{margin-left:-10px}body.?%PAGE?%[data-v-3027acd8]{background-color:#fff}',""]),t.exports=e},3803:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),r={props:{mode:""},data:function(){return{form:{loading:!1,mobile:"",password:"",verify:"",token:"",inviteCode:"",channelName:""}}},onLoad:function(){this.form.inviteCode=this.$store.state.app.inviteCode,this.form.channelName=this.$store.state.app.channelName},methods:{verifysuccess:function(t){this.form.token=t.token},submit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t,t.form.loading=!0,setTimeout((function(){i.form.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/reg_mobile/user/register",data:t.form,method:"post"});case 5:n=e.sent,200==n.code?(t.util.showToast({title:n.msg,icon:"success",duration:1e3}),"entry"==t.mode?location.href=t.util.baseDomain()+"/download.html":t.util.navigateTo({url:"/pages/core/user/login"})):t.util.showToast({title:n.msg,icon:"loading",duration:2e3}),t.form.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}};e.default=r},"47d8":function(t,e,i){"use strict";i.r(e);var n=i("4ed5"),a=i("c124");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var s,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"8e533fba",null,!1,n["a"],s);e["default"]=l.exports},"4ed5":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={xySendVerify:i("82f7").default,xyCheckbox:i("c782").default,xyButton:i("331b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"form"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手机号")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手机验证码")]),i("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[i("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入手机验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}}),i("xy-send-verify",{attrs:{url:"/v1/sms/verify/send",type:"手机号",account:t.form.mobile,title:"用户注册"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.verifysuccess.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("密码")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("邀请码")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{placeholder:"邀请码"},model:{value:t.form.inviteCode,callback:function(e){t.$set(t.form,"inviteCode",e)},expression:"form.inviteCode"}})],1)],1),i("v-uni-view",{staticClass:"agreement flex ts-12 flex-alignCenter"},[i("xy-checkbox",{attrs:{size:"medium"},model:{value:t.form.agreement,callback:function(e){t.$set(t.form,"agreement",e)},expression:"form.agreement"}},[t._v("我已阅读并同意")]),i("v-uni-navigator",{attrs:{url:"/pages/user_agreement/agreement/info?title=用户协议"}},[t._v("《用户协议》")]),t._v("和"),i("v-uni-navigator",{attrs:{url:"/pages/user_agreement/agreement/info?title=隐私政策"}},[t._v("《隐私政策》")])],1),i("v-uni-view",{staticClass:"m-t-xs"},[i("xy-button",{attrs:{type:"primary",full:!0,size:"large",loading:t.form.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.form.loading?"注册中...":"立即注册"))])],1),"default"==t.mode?i("v-uni-view",{staticClass:"m-t-sm flex space-between"},[i("v-uni-view",{staticClass:"text-gray ts-13",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/user/user/resetPassword"})}}},[t._v("忘记密码?")]),i("v-uni-view",{staticClass:"text-primary ts-13",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/core/user/login"})}}},[t._v("立即登录")])],1):t._e()],1)],1)},r=[]},"55ce":function(t,e,i){"use strict";i.r(e);var n=i("657d"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"5aaf":function(t,e,i){var n=i("3349");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b059cd76",n,!0,{sourceMap:!1,shadowMode:!1})},"657d":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),r={props:{mode:""},data:function(){return{form:{loading:!1,email:"",password:"",verify:"",token:"",inviteCode:"",channelName:"",agreement:!1}}},onLoad:function(){this.form.inviteCode=this.$store.state.app.inviteCode,this.form.channelName=this.$store.state.app.channelName},methods:{verifysuccess:function(t){this.form.token=t.token},submit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t,t.form.loading=!0,setTimeout((function(){i.form.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/reg_email/user/register",data:t.form,method:"post"});case 5:n=e.sent,200==n.code?(t.util.showToast({title:n.msg,icon:"success",duration:1e3}),"entry"==t.mode?location.href=t.util.baseDomain()+"/download.html":t.util.navigateTo({url:"/pages/core/user/login"})):t.util.showToast({title:n.msg,icon:"loading",duration:2e3}),t.form.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}};e.default=r},"81ff":function(t,e,i){"use strict";i.r(e);var n=i("eb93"),a=i("0e76");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("d35e");var s,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"1985326a",null,!1,n["a"],s);e["default"]=l.exports},a715:function(t,e,i){"use strict";i.r(e);var n=i("de3c"),a=i("e4d0");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("ad63");var s,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"3027acd8",null,!1,n["a"],s);e["default"]=l.exports},ad63:function(t,e,i){"use strict";var n=i("5aaf"),a=i.n(n);a.a},c124:function(t,e,i){"use strict";i.r(e);var n=i("3803"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},d35e:function(t,e,i){"use strict";var n=i("f12a"),a=i.n(n);a.a},d9e5:function(t,e,i){"use strict";i.r(e);var n=i("0ec4"),a=i("55ce");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var s,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=l.exports},de3c:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={xyTabs:i("81ff").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"body"},[i("v-uni-view",{staticClass:"safe-form"},[i("xy-tabs",{staticClass:"top-tabs p-b-md",attrs:{full:!1,list:t.tabList,showActive:!0},on:{"tab-click":function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick.apply(void 0,arguments)}},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}}),"email"==t.regTab?i("v-uni-view",{staticClass:"tab-content"},[t.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")>=0?i("RegEmail"):t._e()],1):t._e(),"mobile"==t.regTab?i("v-uni-view",{staticClass:"tab-content"},[t.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0?i("RegMobile"):t._e()],1):t._e()],1)],1)},r=[]},e4d0:function(t,e,i){"use strict";i.r(e);var n=i("ea95"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},ea95:function(t,e,i){"use strict";var n=i("4ea4");i("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("d9e5")),r=n(i("47d8")),s={components:{RegEmail:a.default,RegMobile:r.default},data:function(){return{regTab:"email",activeTab:0,tabList:[]}},created:function(){this.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")>=0&&this.tabList.push({value:"email",title:"邮箱注册"}),this.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0&&this.tabList.push({value:"mobile",title:"手机号注册"}),this.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_username")>=0&&this.tabList.push({value:"username",title:"用户名注册"}),this.regTab=this.tabList[0].value},methods:{tabClick:function(){this.regTab=this.tabList[this.activeTab].value}}};e.default=s},eb93:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.list.length>0?i("v-uni-view",{staticClass:"xy-tabs",class:t.type},[i("v-uni-scroll-view",{attrs:{"scroll-x":"true","scroll-with-animation":!0,"scroll-left":t.tabsScrollLeft},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"tab",attrs:{id:"tab_list"}},t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,class:["tab-item",{"flex-1":t.full},{"tab-item-active":(t.showActive||0==n)&&t.currentIndex===n}],style:{color:t.currentIndex===n?""+t.itemColor:""},attrs:{id:"tab_item"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.select(e,n)}}},[i("v-uni-view",{staticClass:"title tw6 ts-16"},[t._t("title",[t._v(t._s(e.title))],{title:e.title})],2)],1)})),1),i("v-uni-view",{staticClass:"tab-line",style:{background:t.lineColor,width:t.lineStyle.width,transform:t.lineStyle.transform,transitionDuration:t.lineStyle.transitionDuration}})],1)],1):t._e()},r=[]},f12a:function(t,e,i){var n=i("11f8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("09211d8f",n,!0,{sourceMap:!1,shadowMode:!1})}}]);