(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_cert-cert-my"],{"039e":function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1")),r=a(n("f8be")),o=a(n("848d")),s=a(n("17be")),c={components:{level1:r.default,level2:o.default,level3:s.default},data:function(){return{level2Show:!1,level3Show:!1,info:{reviewState:-2,level:-1}}},created:function(){this.loadData()},methods:{loadData:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/user_cert/cert/my",data:{},method:"get"});case 2:n=t.sent,200==n.code?e.info=n.data.info:e.util.showToast({title:n.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()}}};t.default=c},"08ac":function(e,t,n){"use strict";(function(e){n("ac1f"),n("466d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"XyImage",props:{src:{type:String,default:""},mode:{type:String,default:""},"lazy-load":{type:Boolean,default:!1},"fade-show":{type:Boolean,default:!0},webp:{type:Boolean,default:!1},"show-menu-by-longpress":{type:Boolean,default:!1},placeholder:{type:String,default:""},complete:{type:Function,default:null}},watch:{src:function(e,t){e&&this.convert(e)}},data:function(){return{native:this.placeholder}},created:function(){this.convert(this.src)},methods:{convert:function(t){var n=this;if(t.match(/(http:|https:)/)){var a=this.util.imageCache(t,(function(e){n.native=e,n.complete&&n.complete(e)}));e("log",t+"->"+a," at node_modules/xyui/flex-ui/src/xy-image/xy-image.vue:72"),this.native=a}else this.native=t},load:function(){this.$emit("load")},error:function(){this.$emit("error")}}};t.default=a}).call(this,n("0de9")["log"])},"094c":function(e,t,n){var a=n("b0ac");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("c78be57c",a,!0,{sourceMap:!1,shadowMode:!1})},"17be":function(e,t,n){"use strict";n.r(t);var a=n("8da4"),i=n("2ea6");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"9f3dde18",null,!1,a["a"],o);t["default"]=c.exports},"298d":function(e,t,n){"use strict";var a=n("c06a"),i=n.n(a);i.a},"2ea6":function(e,t,n){"use strict";n.r(t);var a=n("7464"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"430b":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-image",{staticClass:"xy-image",attrs:{src:e.native,mode:e.mode,"lazy-load":this.$props["lazy-load"],"fade-show":this.$props["fade-show"],"show-menu-by-longpress":this.$props["show-menu-by-longpress"],webp:e.webp},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.load.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.error.apply(void 0,arguments)}}})},r=[]},"4a9b":function(e,t,n){"use strict";var a=n("094c"),i=n.n(a);i.a},5595:function(e,t,n){"use strict";n.r(t);var a=n("da04"),i=n("f9ca");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("298d");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"8bf132ee",null,!1,a["a"],o);t["default"]=c.exports},7464:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1")),r={props:{certData:{type:Object,default:function(){return{}}}},data:function(){return{loading:!1,form:{certVideo:""},item:{extra:{limit:1,maxSize:500,driver:"upload_oss",background:"#ffffff"}}}},created:function(){this.certData.certVideo&&(this.form.certVideo=this.certData.certVideo)},methods:{handleSubmit:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.form.certVideo||e.util.showToast({title:"请上传认证视频",icon:"loading",duration:3e3}),e.loading=!0,n=e,setTimeout((function(){n.loading=!1}),5e3),t.next=6,e.util.request({url:"/v1/user_cert/level/level3",data:e.form,method:e.certData.certVideo?"put":"post"});case 6:a=t.sent,"200"==a.code?(e.util.showToast({title:a.msg,icon:"success",duration:2e3}),e.$emit("success")):e.util.showToast({title:a.msg,icon:"loading",duration:3e3}),e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()}}};t.default=r},"7b3d":function(e,t,n){"use strict";n.r(t);var a=n("08ac"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"8da4":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={xyUploadImage:n("1bec").default,xyButton:n("a75b").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"safe-form p-l-0 p-r-0"},[n("v-uni-view",{staticClass:"item flex flex-alignCenter"},[n("v-uni-view",{},[n("v-uni-view",{staticClass:"title m-b-xs"},[e._v("手持本人身份证正面照和个人签字及朗读拍摄视频")]),n("v-uni-view",{staticClass:"content"},[n("xy-upload-image",{attrs:{limit:"1",driver:e.item.extra.driver,action:e.item.extra.action,header:{Authorization:e.util.getToken()},icon:e.item.extra.icon?e.item.extra.icon:"xyicon xyicon-plus",label:e.item.extra.label?e.item.extra.label:""},model:{value:e.form.certPhoto,callback:function(t){e.$set(e.form,"certPhoto",t)},expression:"form.certPhoto"}})],1)],1),n("v-uni-view",{staticClass:"text-gray ts-12"},[e._v("* 请您左手持身份证右手持白纸（内容写OTC及日期）录制视频，视频长度10-40秒大小20M以内，期间请朗读出如下文字："),n("br"),e._v("* 本人身份真实有效，对在本平台上的所有转账、交易都承担所有责任，坚决维护平台秩序，遵守国家法律法规。")])],1),n("xy-button",{staticClass:"m-t-lg",attrs:{full:!0,type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSubmit.apply(void 0,arguments)}}},[e._v("提交")])],1)},r=[]},b0ac:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*修复小程序中图片宽高错误*/.xy-image[data-v-41107a1f]{width:100%;height:100%}",""]),e.exports=t},c06a:function(e,t,n){var a=n("ec84");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("e086b152",a,!0,{sourceMap:!1,shadowMode:!1})},ce97:function(e,t,n){"use strict";n.r(t);var a=n("430b"),i=n("7b3d");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("4a9b");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"41107a1f",null,!1,a["a"],o);t["default"]=c.exports},d5a4:function(e,t,n){"use strict";n.r(t);var a=n("e0ba"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},da04:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={xyImage:n("ce97").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"p-l p-r"},[n("v-uni-view",{staticClass:"m-b-md title tw6 ts-20"},[e._v("实名认证")]),n("v-uni-view",{staticClass:"text-error m-b"},[n("v-uni-view",{},[e._v("为了您的资金安全，需验证您的身份才可进行交易；认证信息一经验证不能修改，请务必如实填写")])],1),e.info.level>0?n("v-uni-view",{staticClass:"m-t"},[n("v-uni-view",{staticClass:"text-center"},[0==e.info.reviewState?[n("xy-image",{staticStyle:{width:"180px",height:"130px"},attrs:{src:"https://cdn.jsdelivr.net/gh/ijry/sbase/image/kyc-wait.png"}})]:1==e.info.reviewState?[n("xy-image",{staticStyle:{width:"180px",height:"130px"},attrs:{src:"https://cdn.jsdelivr.net/gh/ijry/sbase/image/kyc.png"}})]:-1==e.info.reviewState?[n("xy-image",{staticStyle:{width:"180px",height:"130px"},attrs:{src:"https://cdn.jsdelivr.net/gh/ijry/sbase/image/kyc-error.png"}})]:e._e()],2),n("v-uni-view",{staticClass:"tw5 ts-16 m-b-xs"},[e._v("实名等级")]),n("v-uni-view",{staticClass:"state text-info tw5 m-b ts-14 flex"},[e._v("KYC"+e._s(e.info.level)),e.info.level<3?n("v-uni-view",{staticClass:"text-primary m-l-sm"},[1==e.info.level?[e.level2Show?n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.level2Show=!1}}},[e._v("取消")]):n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.level2Show=!0}}},[e._v("提升")])]:e._e(),2==e.info.level?[e.level3Show?n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.level3Show=!1}}},[e._v("取消")]):n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.level3Show=!0}}})]:e._e()],2):e._e()],1),e.level2Show?n("level2"):e._e(),e.level3Show?n("level3"):e._e(),e.level2Show||e.level3Show?e._e():n("v-uni-view",[n("v-uni-view",{staticClass:"flex flex-alignCenter space-between m-b"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"tw5 ts-16 m-b-xs"},[e._v("我的身份")]),n("v-uni-view",{staticClass:"title ts-14 text-gray"},[e._v(e._s(e.info.realName)+"("+e._s(e.info.certNo)+")")])],1),n("v-uni-view",{staticClass:"right"},[0==e.info.reviewState?[n("v-uni-view",{staticClass:"text-warning"},[e._v("审核中")])]:1==e.info.reviewState?[n("v-uni-view",{staticClass:"text-primary tw6"},[e._v("已通过")])]:-1==e.info.reviewState?[n("v-uni-view",{staticClass:"text-error"},[e._v("审核未通过")])]:e._e()],2)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"tw5 ts-16 m-b-xs"},[e._v("等级额度")]),n("v-uni-view",{staticClass:"text-gray"},[n("v-uni-view",{},[e._v("单日额度: 2000")]),n("v-uni-view",{},[e._v("累计总额度: 50000")])],1)],1)],1)],1):e._e(),0==e.info.level?n("v-uni-view",{staticClass:"kyc1"},[n("level1",{on:{success:function(t){arguments[0]=t=e.$handleEvent(t),e.loadData.apply(void 0,arguments)}}})],1):e._e()],1)},r=[]},e0ba:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1")),r={props:{certData:{type:Object,default:{}}},data:function(){return{loading:!1,form:{country:86,certCate:1,certType:1,realName:"",certNo:""},rule:{certNo:[{required:!0,message:"请填写证件号码",trigger:"blur"}],realName:[{required:!0,message:"请填写真实姓名",trigger:"blur"}]}}},created:function(){this.certData.certNo&&(this.form.certNo=this.certData.certNo,this.form.realName=this.certData.realName)},methods:{handleSubmit:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,n=e,setTimeout((function(){n.loading=!1}),5e3),t.next=5,e.util.request({url:"/v1/user_cert/level/level1",data:e.form,method:e.certData.certNo?"put":"post"});case 5:a=t.sent,"200"==a.code?(e.util.showToast({title:a.msg,icon:"success",duration:2e3}),e.$emit("success")):e.util.showToast({title:a.msg,icon:"loading",duration:3e3}),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}}};t.default=r},e687:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={xyButton:n("a75b").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"safe-form p-l-0 p-r-0"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[e._v("姓名")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{placeholder:"请输入真实姓名"},model:{value:e.form.realName,callback:function(t){e.$set(e.form,"realName",t)},expression:"form.realName"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[e._v("证件号码")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{placeholder:"请输入身份证件号码"},model:{value:e.form.certNo,callback:function(t){e.$set(e.form,"certNo",t)},expression:"form.certNo"}})],1)],1),n("xy-button",{staticClass:"m-t-lg",attrs:{full:!0,type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSubmit.apply(void 0,arguments)}}},[e._v("提交")])],1)},r=[]},ec84:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-8bf132ee]{background-color:#fff}body.?%PAGE?%[data-v-8bf132ee]{background-color:#fff}',""]),e.exports=t},f8be:function(e,t,n){"use strict";n.r(t);var a=n("e687"),i=n("d5a4");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"2a58108f",null,!1,a["a"],o);t["default"]=c.exports},f9ca:function(e,t,n){"use strict";n.r(t);var a=n("039e"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a}}]);