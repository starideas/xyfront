(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-reg_mobile-user-register"],{3803:function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var s=n(i("1da1")),a={props:{mode:""},data:function(){return{form:{loading:!1,mobile:"",password:"",verify:"",token:"",inviteCode:"",channelName:""}}},onLoad:function(){this.form.inviteCode=this.$store.state.app.inviteCode,this.form.channelName=this.$store.state.app.channelName},methods:{verifysuccess:function(e){this.form.token=e.token},submit:function(){var e=this;return(0,s.default)(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e,e.form.loading=!0,setTimeout((function(){i.form.loading=!1}),5e3),t.next=5,e.util.request({url:"/v1/reg_mobile/user/register",data:e.form,method:"post"});case 5:n=t.sent,200==n.code?(e.util.showToast({title:n.msg,icon:"success",duration:1e3}),"entry"==e.mode?location.href=e.util.baseDomain()+"/download.html":e.util.navigateTo({url:"/pages/core/user/login"})):e.util.showToast({title:n.msg,icon:"loading",duration:2e3}),e.form.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}}};t.default=a},"47d8":function(e,t,i){"use strict";i.r(t);var n=i("4ed5"),s=i("c124");for(var a in s)"default"!==a&&function(e){i.d(t,e,(function(){return s[e]}))}(a);var o,r=i("f0c5"),l=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"8e533fba",null,!1,n["a"],o);t["default"]=l.exports},"4ed5":function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={xySendVerify:i("82f7").default,xyCheckbox:i("c782").default,xyButton:i("331b").default},s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"form"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[e._v("手机号")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[e._v("手机验证码")]),i("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[i("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入手机验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}}),i("xy-send-verify",{attrs:{url:"/v1/sms/verify/send",type:"手机号",account:e.form.mobile,title:"用户注册"},on:{verifysuccess:function(t){arguments[0]=t=e.$handleEvent(t),e.verifysuccess.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[e._v("密码")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[e._v("邀请码")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{placeholder:"邀请码"},model:{value:e.form.inviteCode,callback:function(t){e.$set(e.form,"inviteCode",t)},expression:"form.inviteCode"}})],1)],1),i("v-uni-view",{staticClass:"agreement flex ts-12 flex-alignCenter"},[i("xy-checkbox",{attrs:{size:"medium"},model:{value:e.form.agreement,callback:function(t){e.$set(e.form,"agreement",t)},expression:"form.agreement"}},[e._v("我已阅读并同意")]),i("v-uni-navigator",{attrs:{url:"/pages/user_agreement/agreement/info?title=用户协议"}},[e._v("《用户协议》")]),e._v("和"),i("v-uni-navigator",{attrs:{url:"/pages/user_agreement/agreement/info?title=隐私政策"}},[e._v("《隐私政策》")])],1),i("v-uni-view",{staticClass:"m-t-xs"},[i("xy-button",{attrs:{type:"primary",full:!0,size:"large",loading:e.form.loading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v(e._s(e.form.loading?"注册中...":"立即注册"))])],1),"default"==e.mode?i("v-uni-view",{staticClass:"m-t-sm flex space-between"},[i("v-uni-view",{staticClass:"text-gray ts-13",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.util.navigateTo({url:"/pages/user/user/resetPassword"})}}},[e._v("忘记密码?")]),i("v-uni-view",{staticClass:"text-primary ts-13",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.util.navigateTo({url:"/pages/core/user/login"})}}},[e._v("立即登录")])],1):e._e()],1)],1)},a=[]},c124:function(e,t,i){"use strict";i.r(t);var n=i("3803"),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=s.a}}]);