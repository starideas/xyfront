(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d221dd4"],{cbba:function(t,e,r){"use strict";r.r(e),r("96cf");var i,s=r("1da1"),o=r("ca4c"),a=r("f3c6"),n=(r("c276"),r("6f6d")),l={components:{IaHead:o.a,IaFoot:a.a,XySafetyVerify:n.a},data:function(){return{isDemo:!1,verifyData:"",formLogin:{loading:!1,account:"",password:""},ruleLogin:{account:[{required:!0,message:"请填写账号",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}]}}},created:function(){1==this.isDemo&&(this.formLogin.account="jry",this.formLogin.password="Windows9")},methods:{handleSubmit:(i=Object(s.a)(regeneratorRuntime.mark((function t(){var e,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.formLogin,this.verifyData&&(e._verify=this.verifyData),this.formLogin.loading=!0,r=this,setTimeout((function(){r.formLogin.loading=!1}),5e3),t.next=7,this.util.request({url:"/v1/core/user/login",data:e,method:"post"});case 7:if(200!=(i=t.sent).code){t.next=17;break}this.$store.commit("user/setToken",i.data.token),this.$store.commit("user/setUserInfo",i.data.userInfo),this.$refs.sv.close(),this.util.showToast({title:i.msg,icon:"success",duration:2e3}),this.verifyData="",this.util.switchTab({url:"/"}),t.next=21;break;case 17:if(401003==i.code)return this.$refs.sv.open(i.data.verifyList),t.abrupt("return");t.next=20;break;case 20:this.util.showToast({title:i.msg,icon:"loading",duration:3e3});case 21:this.formLogin.loading=!1;case 22:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})}},c=r("2877"),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrap",attrs:{id:"wrap"}},[r("IaHead"),r("div",{staticClass:"main"},[r("div",{staticClass:"container",staticStyle:{"padding-top":"13%"}},[r("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[r("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[r("div",{staticClass:"title"},[t._v("\n                        登录\n                    ")]),r("el-form",{ref:"formLogin",attrs:{model:t.formLogin,rules:t.ruleLogin}},[r("el-form-item",{attrs:{prop:"account"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-person-outline",placeholder:"请输入用户名、邮箱或手机号"},model:{value:t.formLogin.account,callback:function(e){t.$set(t.formLogin,"account",e)},expression:"formLogin.account"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入密码"},model:{value:t.formLogin.password,callback:function(e){t.$set(t.formLogin,"password",e)},expression:"formLogin.password"}})],1),r("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:t.formLogin.loading,type:"primary"},on:{click:function(e){return t.handleSubmit()}}},[t._v("\n                             登录\n                        ")]),r("div",{staticClass:"actions flex"},[r("div",[r("router-link",{attrs:{to:"/user/resetPassword"}},[t._v("忘记密码")])],1),r("div",[t._v("\n                                还没有账号？\n                                "),r("router-link",{attrs:{to:"/user/register"}},[t._v("注册")])],1)])],1)],1)],1)],1)]),r("IaFoot"),r("XySafetyVerify",{ref:"sv",on:{"verify-request":t.handleSubmit},model:{value:t.verifyData,callback:function(e){t.verifyData=e},expression:"verifyData"}})],1)}),[],!1,null,"6d32886c",null);e.default=u.exports}}]);