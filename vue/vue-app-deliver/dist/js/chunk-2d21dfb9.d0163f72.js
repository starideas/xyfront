(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21dfb9"],{d42e:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap",attrs:{id:"wrap"}},[i("xy-header"),i("div",{staticClass:"main"},[i("div",{staticClass:"container",staticStyle:{"padding-top":"15%"}},[i("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[i("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:11,lg:11}},[i("div",{staticClass:"title"},[t._v(" 重置登录密码 ")]),i("div",{staticClass:"tip text-center"},[t._v(" 为了您的资金安全，修改安全设置后，24小时内不允许交易、提现和资金划转 ")]),i("el-form",{ref:"formLogin",attrs:{model:t.formLogin,rules:t.ruleLogin}},[i("el-form-item",{attrs:{prop:"account"}},[i("el-input",{attrs:{size:"large",type:"text",prefix:"ios-person-outline",placeholder:"请输入邮箱或手机号"},model:{value:t.formLogin.account,callback:function(e){t.$set(t.formLogin,"account",e)},expression:"formLogin.account"}})],1),i("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:t.formLogin.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("formLogin")}}},[t._v(" 确定 ")])],1)],1)],1)],1)]),i("xy-footer")],1)},o=[],r=i("1da1"),a=(i("96cf"),{data:function(){return{isDemo:!1,formLogin:{loading:!1,account:""},ruleLogin:{account:[{required:!0,message:"请填写账号",trigger:"blur"}]}}},created:function(){},methods:{handleSubmit:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.formLogin.loading=!0,e=this,setTimeout((function(){e.formLogin.loading=!1}),5e3),t.next=5,this.util.request({url:"/v1/core/user/checkAccount",data:this.formLogin,method:"get"});case 5:i=t.sent,200==i.code?this.util.switchTab({url:i.data.url+"?account="+this.formLogin.account}):this.util.showToast({title:i.msg,icon:"loading",duration:3e3}),this.formLogin.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}),s=a,c=i("2877"),l=Object(c["a"])(s,n,o,!1,null,"6b89a4d6",null);e["default"]=l.exports}}]);