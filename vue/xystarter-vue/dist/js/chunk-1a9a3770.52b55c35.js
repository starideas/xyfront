(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1a9a3770"],{"341b":function(t,e,i){},"5c03":function(t,e,i){"use strict";i("96cf");var n,s=i("3b8d"),a=(i("c5f6"),{name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:(n=Object(s.a)(regeneratorRuntime.mark((function t(){var e,i,n,s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0<this.timeLeft)return t.abrupt("return");t.next=2;break;case 2:if(this.account||this.noNeedAccount){t.next=5;break}return this.util.showToast({title:"请输入"+this.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return this.timeLeft=this.time,this.label="剩余"+this.timeLeft+"s",e=setInterval((function(){s.timeLeft--,s.timeLeft<=0?(s.label="发送验证码",s.timeLeft=0,clearInterval(e)):s.label="剩余"+s.timeLeft+"s"}),1e3),i={},i="手机号"==this.type?{mobile:this.account,title:this.title}:{email:this.account,title:this.title},t.next=12,this.util.request({url:this.url,data:i,method:"post"});case 12:"200"==(n=t.sent).code?(this.util.showToast({title:n.msg,icon:"success",duration:1e3}),this.$emit("verifysuccess",n.data)):this.util.showToast({title:n.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}}),r=i("2877"),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"send-verify p-l-xs p-r-xs"},[i("el-button",{attrs:{type:"text"},on:{click:t.sendVerify}},[t._v(t._s(t.label))])],1)}),[],!1,null,"0372c606",null);e.a=o.exports},a744:function(t,e,i){"use strict";var n=i("c055");i.n(n).a},c055:function(t,e,i){},ca4c:function(t,e,i){"use strict";i("96cf");var n,s=i("3b8d"),a={name:"IaHead",props:{hasContainerProp:{default:!1},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,0==this.$store.state.app.mainNav.length&&this.loadData()},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(t>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(t){this.$router.push(t)},mainMenuSelect:function(t){this.active=t,this.$store.commit("app/setData",{key:"currentNav",value:t})},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(n=Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){var e=t.data;"200"==e.code||alert(e.msg)})).catch((function(t){}))}},watch:{}},r=(i("ed6b"),i("2877")),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-nav-fixed main-nav-dark",class:t.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[i("div",{staticClass:"fix-top"}),i("div",{staticClass:"main-nav"},[i("div",{class:{container:t.hasContainer}},[i("div",{staticClass:"main-nav-inner flex"},[i("div",{staticClass:"layout-logo",on:{click:function(e){return t.navTo("/")}}},[t.$store.state.app.siteInfo.logoTitle?i("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}}):t._e(),t.$store.state.app.siteInfo.logoTitle?t._e():i("span",{staticClass:"title"},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"\n                    ")]),i("span",{staticClass:"slogn"}),i("i",{class:t.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:t.chanView}})]),i("div",{staticClass:"nav-right flex",class:t.menuview},[i("el-menu",{staticClass:"main-menu",attrs:{"default-active":t.active,mode:"horizontal"},on:{select:t.mainMenuSelect}},[i("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/")}}},[t._v("\n                            首页\n                        ")]),t._l(t.$store.state.app.mainNav,(function(e){return[0==e.isHide?i("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(i){return t.navTo("/"+e.name)}}},[t._v("\n                                "+t._s(e.title)+"\n                            ")]):t._e()]}))],2),i("div",{staticClass:"flex"},[i("div",{staticClass:"m-r-lg"},[i("el-input",{staticStyle:{margin:"13px 20px 7px 0"},attrs:{size:"medium",placeholder:"请输入搜索关键词","suffix-icon":"el-icon-search"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t.util.getStorageSync("token")?i("el-menu",{attrs:{mode:"horizontal"}},[i("el-submenu",{attrs:{index:"99"}},[i("template",{slot:"title"},[i("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:t.$store.state.user.userInfo.avatar}}),t._v("\n                                    "+t._s(t.$store.state.user.userInfo.nickname)+"\n                                ")],1),i("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/user/center")}}},[t._v("个人中心")]),i("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)],1):[i("el-menu",{attrs:{mode:"horizontal"}},[i("el-menu-item",[i("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/login")}}},[t._v("登录")]),i("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/register")}}},[t._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"31fab599",null);e.a=o.exports},e314:function(t,e,i){"use strict";i.r(e),i("96cf");var n,s,a=i("3b8d"),r=i("5c03"),o=i("ca4c"),l=i("f3c6"),c=i("c276"),u={components:{IaHead:o.a,IaFoot:l.a,XySendVerify:r.a},data:function(){return{verityList:[],loading:!1,form:{email:"",password:"",verify:"",token:"",mobile:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{email:[{required:!0,message:"请填写邮箱",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){this.loadData()},methods:{getVerifyToken:function(t){this.form.token=t.token},getMobileVerifyToken:function(t){this.form.mobileToken=t.token},loadData:(s=Object(a.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.request({url:"/v1/reg_email/user/bind",method:"get"});case 2:"200"==(e=t.sent).code?this.verityList=e.data.dataList:this.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)}),handleSubmit:(n=Object(a.a)(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e=this,setTimeout((function(){e.loading=!1}),5e3),t.next=5,c.a.request({url:"/v1/reg_email/user/bind",data:this.form,method:"post"});case 5:"200"==(i=t.sent).code?(this.util.showToast({title:i.msg,icon:"success",duration:2e3}),this.util.navigateBack()):this.util.showToast({title:i.msg,icon:"loading",duration:3e3}),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},d=i("2877"),f=Object(d.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap",attrs:{id:"wrap"}},[i("IaHead"),i("div",{staticClass:"main"},[i("div",{staticClass:"container",staticStyle:{"padding-top":"8%"}},[i("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[i("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[i("div",{staticClass:"title"},[t._v("\n                        邮箱绑定\n                    ")]),i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[i("el-form-item",{attrs:{prop:"email"}},[i("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"请输入邮箱号"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),i("el-form-item",{attrs:{prop:"verify"}},[i("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}},[i("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",account:t.form.email,title:"邮箱绑定"},on:{verifysuccess:t.getVerifyToken},slot:"append"})],1)],1),0<=t.verityList.indexOf("mobile")?i("el-form-item",{attrs:{prop:"mobileVerify"}},[i("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:t.form.mobileVerify,callback:function(e){t.$set(t.form,"mobileVerify",e)},expression:"form.mobileVerify"}},[i("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"邮箱绑定"},on:{verifysuccess:t.getMobileVerifyToken},slot:"append"})],1)],1):t._e(),0<=t.verityList.indexOf("gauth")?i("el-form-item",{attrs:{prop:"gauth"}},[i("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:t.form.gauth,callback:function(e){t.$set(t.form,"gauth",e)},expression:"form.gauth"}})],1):t._e(),0<=t.verityList.indexOf("password")?i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1):t._e(),i("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:t.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("form")}}},[t._v("\n                            绑定\n                        ")])],1)],1)],1)],1)]),i("IaFoot")],1)}),[],!1,null,"49f7135d",null);e.default=f.exports},ed6b:function(t,e,i){"use strict";var n=i("341b");i.n(n).a},f3c6:function(t,e,i){"use strict";var n={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},s=(i("a744"),i("2877")),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"container"},[i("el-row",{staticClass:"foot-info",attrs:{type:"flex",justify:"space-between",align:"middle"}},[i("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[i("div",{staticClass:"line1"},[t._v("官方邮箱 "),i("span",{staticClass:"value"},[t._v("ijry@qq.com")])]),i("div",[t._v("官方微信"),i("span",{staticClass:"value"},[t._v("--")])])]),i("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[i("div",{staticClass:"nav-list"},[i("router-link",{attrs:{to:"/agreement/用户协议"}},[t._v("\n                        用户协议\n                    ")]),i("router-link",{attrs:{to:"/agreement/隐私条款"}},[t._v("\n                        隐私条款\n                    ")]),i("router-link",{attrs:{to:"/post/help"}},[t._v("\n                        常见问题\n                    ")]),i("router-link",{attrs:{to:"/post/about"}},[t._v("\n                        关于我们\n                    ")])],1)])],1),i("el-row",{staticClass:"footer-bottom",attrs:{type:"flex",justify:"center",align:"middle"}},[i("div",[t._v("\n                "+t._s(t.$store.state.app.siteInfo.copyright)+"\n                 "),t.$store.state.app.siteInfo.icp?i("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))]):t._e()])])],1)])}),[],!1,null,"c42e7c96",null);e.a=a.exports}}]);