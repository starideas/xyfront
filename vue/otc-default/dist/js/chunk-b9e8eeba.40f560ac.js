(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b9e8eeba"],{"5c03":function(e,t,r){"use strict";r("96cf");var i,s=r("1da1"),o=(r("c5f6"),{name:"xySendVerify",props:{account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:(i=Object(s.a)(regeneratorRuntime.mark((function e(){var t,r,i,s=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0<this.timeLeft)return e.abrupt("return");e.next=2;break;case 2:if(this.account){e.next=5;break}return this.util.showToast({title:"请输入"+this.type,icon:"loading",duration:1e3}),e.abrupt("return",!1);case 5:return this.timeLeft=this.time,this.label="剩余"+this.timeLeft+"s",t=setInterval((function(){s.timeLeft--,s.timeLeft<=0?(s.label="发送验证码",s.timeLeft=0,clearInterval(t)):s.label="剩余"+s.timeLeft+"s"}),1e3),r={},r="手机号"==this.type?{mobile:this.account,title:this.title}:{email:this.account,title:this.title},e.next=12,this.util.request({url:this.url,data:r,method:"post"});case 12:"200"==(i=e.sent).code?(this.util.showToast({title:i.msg,icon:"success",duration:1e3}),this.$emit("verifysuccess",i.data)):this.util.showToast({title:i.msg,icon:"loading",duration:2e3});case 14:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})}}),n=r("2877"),a=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"send-verify p-l-xs p-r-xs"},[r("el-button",{attrs:{type:"text"},on:{click:e.sendVerify}},[e._v(e._s(e.label))])],1)}),[],!1,null,"61ab9bde",null);t.a=a.exports},e07c:function(e,t,r){"use strict";r.r(t),r("96cf");var i,s=r("1da1"),o=r("5c03"),n=r("c276"),a={components:{XySendVerify:o.a},data:function(){return{loading:!1,form:{mobile:"",password:"",verify:"",token:"",agreement:!1},rule:{mobile:[{required:!0,message:"请填写手机号",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){},methods:{getVerifyToken:function(e){this.form.token=e},handleSubmit:(i=Object(s.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,t=this,setTimeout((function(){t.loading=!1}),5e3),e.next=5,n.a.request({url:"/v1/reg_mobile/user/register",data:this.form,method:"post"});case 5:"200"==(r=e.sent).code?(this.util.showToast({title:r.msg,icon:"success",duration:2e3}),this.$router.push("/")):this.util.showToast({title:r.msg,icon:"loading",duration:3e3}),this.loading=!1;case 8:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})}},l=r("2877"),u=Object(l.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[r("el-form-item",{attrs:{prop:"email"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"请输入手机号"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),r("el-form-item",{attrs:{prop:"verify"}},[r("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}},[r("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",account:e.form.mobile,title:"用户注册"},on:{verifysuccess:e.getVerifyToken},slot:"append"})],1)],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入6-18位密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{attrs:{prop:"inviteCode"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邀请码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("div",{staticClass:"agreement"},[r("el-checkbox",{model:{value:e.form.agreement,callback:function(t){e.$set(e.form,"agreement",t)},expression:"form.agreement"}},[e._v("我已阅读并同意")]),r("router-link",{attrs:{to:"/user_agreement/agreement/info?title=用户协议"}},[e._v("《用户协议》")]),e._v("和\n        "),r("router-link",{attrs:{to:"/user_agreement/agreement/info?title=隐私政策"}},[e._v("《隐私政策》")])],1),r("el-button",{staticClass:"full submit-btn",attrs:{disabled:!e.form.agreement,size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v("\n        注册\n    ")]),r("div",{staticClass:"actions flex"},[r("div"),r("div",[e._v("\n            已有账号？\n            "),r("router-link",{attrs:{to:"/user/login"}},[e._v("登录")])],1)])],1)}),[],!1,null,"59ad9641",null);t.default=u.exports}}]);