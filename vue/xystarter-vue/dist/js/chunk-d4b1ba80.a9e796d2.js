(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d4b1ba80","chunk-3833e016","chunk-b9e8eeba"],{"11dc":function(e,t,i){"use strict";var s=i("3f0c");i.n(s).a},"3f0c":function(e,t,i){},"4d72":function(e,t,i){},"5c03":function(e,t,i){"use strict";i("96cf");var s,a=i("1da1"),n=(i("c5f6"),{name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:(s=Object(a.a)(regeneratorRuntime.mark((function e(){var t,i,s,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0<this.timeLeft)return e.abrupt("return");e.next=2;break;case 2:if(this.account||this.noNeedAccount){e.next=5;break}return this.util.showToast({title:"请输入"+this.type,icon:"loading",duration:1e3}),e.abrupt("return",!1);case 5:return this.timeLeft=this.time,this.label="剩余"+this.timeLeft+"s",t=setInterval((function(){a.timeLeft--,a.timeLeft<=0?(a.label="发送验证码",a.timeLeft=0,clearInterval(t)):a.label="剩余"+a.timeLeft+"s"}),1e3),i={},i="手机号"==this.type?{mobile:this.account,title:this.title}:{email:this.account,title:this.title},e.next=12,this.util.request({url:this.url,data:i,method:"post"});case 12:"200"==(s=e.sent).code?(this.util.showToast({title:s.msg,icon:"success",duration:1e3}),this.$emit("verifysuccess",s.data)):this.util.showToast({title:s.msg,icon:"loading",duration:2e3});case 14:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})}}),r=i("2877"),o=Object(r.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"send-verify p-l-xs p-r-xs"},[i("el-button",{attrs:{type:"text"},on:{click:e.sendVerify}},[e._v(e._s(e.label))])],1)}),[],!1,null,"0372c606",null);t.a=o.exports},"620a":function(e,t,i){"use strict";i.r(t);var s=i("ca4c"),a=i("f3c6"),n=i("b31e"),r=i("e07c"),o=(i("c276"),{components:{IaHead:s.a,IaFoot:a.a,RegEmail:n.default,RegMobile:r.default},data:function(){return{regTab:"email"}},created:function(){0<=this.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")?this.regTab="email":0<=this.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")?this.regTab="mobile":0<=this.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_username")&&(this.regTab="reg_username")},methods:{handleClick:function(){}}}),l=i("2877"),c=Object(l.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrap"},[i("IaHead"),i("div",{staticClass:"main"},[i("div",{staticClass:"container",staticStyle:{"padding-top":"6%"}},[i("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[i("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[i("el-tabs",{attrs:{stretch:""},on:{"tab-click":e.handleClick},model:{value:e.regTab,callback:function(t){e.regTab=t},expression:"regTab"}},[0<=e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")?i("el-tab-pane",{staticClass:"p-t",attrs:{label:"邮箱注册",name:"email"}},[0<=e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")?i("RegEmail"):e._e()],1):e._e(),0<=e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")?i("el-tab-pane",{staticClass:"p-t",attrs:{label:"手机注册",name:"mobile"}},[0<=e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")?i("RegMobile"):e._e()],1):e._e()],1)],1)],1)],1)]),i("IaFoot")],1)}),[],!1,null,"13234197",null);t.default=c.exports},"7a95":function(e,t,i){"use strict";var s=i("4d72");i.n(s).a},b31e:function(e,t,i){"use strict";i.r(t),i("96cf");var s,a=i("1da1"),n=i("5c03"),r=i("c276"),o={components:{XySendVerify:n.a},data:function(){return{loading:!1,inviteSuffix:"",form:{email:"",password:"",verify:"",token:"",inviteCode:"",agreement:!1},rule:{email:[{required:!0,message:"请填写邮箱",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){switch(this.$store.state.app.siteInfo.regInvite){case 1:this.inviteSuffix="（可选）";break;case 2:this.inviteSuffix="（必填）"}this.form.inviteCode=this.$store.state.app.inviteCode},methods:{getVerifyToken:function(e){this.form.token=e.token},handleSubmit:(s=Object(a.a)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.$store.commit("app/setData",{key:"inviteCode",value:this.form.inviteCode}),this.loading=!0,t=this,setTimeout((function(){t.loading=!1}),5e3),e.next=6,r.a.request({url:"/v1/reg_email/user/register",data:this.form,method:"post"});case 6:"200"==(i=e.sent).code?(this.util.showToast({title:i.msg,icon:"success",duration:2e3}),this.$router.push("/")):this.util.showToast({title:i.msg,icon:"loading",duration:3e3}),this.loading=!1;case 9:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})}},l=i("2877"),c=Object(l.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[i("el-form-item",{attrs:{prop:"email"}},[i("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),i("el-form-item",{attrs:{prop:"verify"}},[i("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}},[i("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",account:e.form.email,title:"用户注册"},on:{verifysuccess:e.getVerifyToken},slot:"append"})],1)],1),i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入6-18位密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),0<e.$store.state.app.siteInfo.regInvite?i("el-form-item",{attrs:{prop:"inviteCode"}},[i("el-input",{attrs:{size:"large",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邀请码"+e.inviteSuffix},model:{value:e.form.inviteCode,callback:function(t){e.$set(e.form,"inviteCode",t)},expression:"form.inviteCode"}})],1):e._e(),i("div",{staticClass:"agreement"},[i("el-checkbox",{model:{value:e.form.agreement,callback:function(t){e.$set(e.form,"agreement",t)},expression:"form.agreement"}},[e._v("我已阅读并同意")]),i("router-link",{attrs:{to:"/agreement/用户协议"}},[e._v("《用户协议》")]),e._v("和\n        "),i("router-link",{attrs:{to:"/agreement/隐私政策"}},[e._v("《隐私政策》")])],1),i("el-button",{staticClass:"full submit-btn",attrs:{disabled:!e.form.agreement,size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v("\n        注册\n    ")]),i("div",{staticClass:"actions flex"},[i("div"),i("div",[e._v("\n            已有账号？\n            "),i("router-link",{attrs:{to:"/user/login"}},[e._v("登录")])],1)])],1)}),[],!1,null,"37b9fb91",null);t.default=c.exports},ca4c:function(e,t,i){"use strict";i("96cf");var s,a=i("1da1"),n={name:"IaHead",props:{hasContainerProp:{default:!0},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,0==this.$store.state.app.mainNav.length&&this.loadData(),600<Date.parse(new Date)/1e3-this.$store.state.app.updateTime&&(this.loadData(),this.$store.commit("app/setData",{key:"updateTime",value:Date.parse(new Date)/1e3}))},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(e>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(e){this.$router.push(e)},mainMenuSelect:function(e){this.active=e,this.$store.commit("app/setData",{key:"currentNav",value:e})},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(s=Object(a.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(t=e.sent).code?this.$store.commit("app/setMainNav",t.data.dataList):this.$Message.error(t.msg);case 4:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(e){var t=e.data;"200"==t.code||alert(t.msg)})).catch((function(e){}))}},watch:{}},r=(i("7a95"),i("2877")),o=Object(r.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-nav-fixed main-nav-dark",class:e.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[i("div",{staticClass:"fix-top"}),i("div",{staticClass:"main-nav"},[i("div",{staticClass:"main-nav-inner",class:{container:e.hasContainer}},[i("div",{staticClass:"flex"},[i("div",{staticClass:"layout-logo",on:{click:function(t){return e.navTo("/")}}},[e.$store.state.app.siteInfo.logoTitle?i("img",{staticClass:"logo",attrs:{src:e.$store.state.app.siteInfo.logoTitle}}):e._e(),e.$store.state.app.siteInfo.logoTitle?e._e():i("span",{staticClass:"title text-primary tw7"},[e._v("\n                        "+e._s(e.$store.state.app.siteInfo.title)+"\n                    ")]),i("span",{staticClass:"slogn"}),i("i",{class:e.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:e.chanView}})]),i("div",{staticClass:"nav-right flex",class:e.menuview},[i("el-menu",{staticClass:"main-menu",attrs:{"default-active":e.active,mode:"horizontal"},on:{select:e.mainMenuSelect}},[i("el-menu-item",{attrs:{index:"home"},on:{click:function(t){return e.navTo("/")}}},[e._v("\n                            首页\n                        ")]),e._l(e.$store.state.app.mainNav,(function(t){return[0==t.isHide?i("el-menu-item",{key:t.id,attrs:{index:t.name},on:{click:function(i){return e.navTo("/"+t.name)}}},[e._v("\n                                "+e._s(t.title)+"\n                            ")]):e._e()]}))],2),i("div",{staticClass:"flex flex-alignCenter"},[i("div",{staticClass:"m-r-lg"},[i("el-input",{attrs:{size:"medium",placeholder:"请输入搜索关键词","suffix-icon":"el-icon-search"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e.util.getStorageSync("token")?i("el-menu",{attrs:{mode:"horizontal"}},[i("el-submenu",{attrs:{index:"99"}},[i("template",{slot:"title"},[i("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:e.$store.state.user.userInfo.avatar}}),e._v("\n                                    "+e._s(e.$store.state.user.userInfo.nickname)+"\n                                ")],1),i("el-menu-item",{attrs:{index:"99-1"},on:{click:function(t){return e.navTo("/user/center")}}},[e._v("个人中心")]),i("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(t){return e.logout(t)}}},[e._v("注销登录")])],2)],1):[i("el-menu",{attrs:{mode:"horizontal"}},[i("el-menu-item",[i("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(t){return e.navTo("/user/login")}}},[e._v("登录")]),i("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(t){return e.navTo("/user/register")}}},[e._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"16432335",null);t.a=o.exports},e07c:function(e,t,i){"use strict";i.r(t),i("96cf");var s,a=i("1da1"),n=i("5c03"),r=i("c276"),o={components:{XySendVerify:n.a},data:function(){return{loading:!1,inviteSuffix:"",form:{mobile:"",password:"",verify:"",token:"",inviteCode:"",agreement:!1},rule:{mobile:[{required:!0,message:"请填写手机号",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){switch(this.$store.state.app.siteInfo.regInvite){case 1:this.inviteSuffix="（可选）";break;case 2:this.inviteSuffix="（必填）"}this.form.inviteCode=this.$store.state.app.inviteCode},methods:{getVerifyToken:function(e){this.form.token=e.token},handleSubmit:(s=Object(a.a)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.$store.commit("app/setData",{key:"inviteCode",value:this.form.inviteCode}),this.loading=!0,t=this,setTimeout((function(){t.loading=!1}),5e3),e.next=6,r.a.request({url:"/v1/reg_mobile/user/register",data:this.form,method:"post"});case 6:"200"==(i=e.sent).code?(this.util.showToast({title:i.msg,icon:"success",duration:2e3}),this.$router.push("/")):this.util.showToast({title:i.msg,icon:"loading",duration:3e3}),this.loading=!1;case 9:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})}},l=i("2877"),c=Object(l.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[i("el-form-item",{attrs:{prop:"mobile"}},[i("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"请输入手机号"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),i("el-form-item",{attrs:{prop:"verify"}},[i("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}},[i("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",account:e.form.mobile,title:"用户注册"},on:{verifysuccess:e.getVerifyToken},slot:"append"})],1)],1),i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入6-18位密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),0<e.$store.state.app.siteInfo.regInvite?i("el-form-item",{attrs:{prop:"inviteCode"}},[i("el-input",{attrs:{size:"large",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邀请码"+e.inviteSuffix},model:{value:e.form.inviteCode,callback:function(t){e.$set(e.form,"inviteCode",t)},expression:"form.inviteCode"}})],1):e._e(),i("div",{staticClass:"agreement"},[i("el-checkbox",{model:{value:e.form.agreement,callback:function(t){e.$set(e.form,"agreement",t)},expression:"form.agreement"}},[e._v("我已阅读并同意")]),i("router-link",{attrs:{to:"/agreement/用户协议"}},[e._v("《用户协议》")]),e._v("和\n        "),i("router-link",{attrs:{to:"/agreement/隐私政策"}},[e._v("《隐私政策》")])],1),i("el-button",{staticClass:"full submit-btn",attrs:{disabled:!e.form.agreement,size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v("\n        注册\n    ")]),i("div",{staticClass:"actions flex"},[i("div"),i("div",[e._v("\n            已有账号？\n            "),i("router-link",{attrs:{to:"/user/login"}},[e._v("登录")])],1)])],1)}),[],!1,null,"0a54ff61",null);t.default=c.exports},f3c6:function(e,t,i){"use strict";var s={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},a=(i("11dc"),i("2877")),n=Object(a.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"footer"},[i("div",{staticClass:"foot-info"},[i("div",{staticClass:"container"},[i("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[i("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[i("div",{staticClass:"line1"},[e._v("官方邮箱 "),i("span",{staticClass:"value"},[e._v("ijry@qq.com")])]),i("div",[e._v("官方微信"),i("span",{staticClass:"value"},[e._v("--")])])]),i("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[i("div",{staticClass:"nav-list"},[i("router-link",{attrs:{to:"/agreement/用户协议"}},[e._v("\n                            用户协议\n                        ")]),i("router-link",{attrs:{to:"/agreement/隐私条款"}},[e._v("\n                            隐私条款\n                        ")]),i("router-link",{attrs:{to:"/post/help"}},[e._v("\n                            常见问题\n                        ")]),i("router-link",{attrs:{to:"/post/about"}},[e._v("\n                            关于我们\n                        ")])],1)])],1)],1)]),i("div",{staticClass:"footer-bottom"},[i("div",{staticClass:"container"},[i("el-row",{staticClass:"inner",attrs:{type:"flex",justify:"center",align:"middle"}},[i("div",[e._v("\n                    "+e._s(e.$store.state.app.siteInfo.copyright)+"\n                    "),e.$store.state.app.siteInfo.icp?i("a",{staticClass:"m-l",attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[e._v(e._s(e.$store.state.app.siteInfo.icp))]):e._e()])])],1)])])}),[],!1,null,"25519170",null);t.a=n.exports}}]);