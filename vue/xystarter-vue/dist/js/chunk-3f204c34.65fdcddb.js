(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3f204c34"],{"11dc":function(t,e,s){"use strict";var a=s("3f0c");s.n(a).a},"3f0c":function(t,e,s){},"4d72":function(t,e,s){},"5c03":function(t,e,s){"use strict";s("96cf");var a,n=s("1da1"),i=(s("c5f6"),{name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:(a=Object(n.a)(regeneratorRuntime.mark((function t(){var e,s,a,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0<this.timeLeft)return t.abrupt("return");t.next=2;break;case 2:if(this.account||this.noNeedAccount){t.next=5;break}return this.util.showToast({title:"请输入"+this.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return this.timeLeft=this.time,this.label="剩余"+this.timeLeft+"s",e=setInterval((function(){n.timeLeft--,n.timeLeft<=0?(n.label="发送验证码",n.timeLeft=0,clearInterval(e)):n.label="剩余"+n.timeLeft+"s"}),1e3),s={},s="手机号"==this.type?{mobile:this.account,title:this.title}:{email:this.account,title:this.title},t.next=12,this.util.request({url:this.url,data:s,method:"post"});case 12:"200"==(a=t.sent).code?(this.util.showToast({title:a.msg,icon:"success",duration:1e3}),this.$emit("verifysuccess",a.data)):this.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})}}),r=s("2877"),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"send-verify p-l-xs p-r-xs"},[s("el-button",{attrs:{type:"text"},on:{click:t.sendVerify}},[t._v(t._s(t.label))])],1)}),[],!1,null,"0372c606",null);e.a=o.exports},"7a95":function(t,e,s){"use strict";var a=s("4d72");s.n(a).a},ca4c:function(t,e,s){"use strict";s("96cf");var a,n=s("1da1"),i={name:"IaHead",props:{hasContainerProp:{default:!0},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,0==this.$store.state.app.mainNav.length&&this.loadData(),600<Date.parse(new Date)/1e3-this.$store.state.app.updateTime&&(this.loadData(),this.$store.commit("app/setData",{key:"updateTime",value:Date.parse(new Date)/1e3}))},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(t>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(t){this.$router.push(t)},mainMenuSelect:function(t){this.active=t,this.$store.commit("app/setData",{key:"currentNav",value:t})},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(a=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){var e=t.data;"200"==e.code||alert(e.msg)})).catch((function(t){}))}},watch:{}},r=(s("7a95"),s("2877")),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-nav-fixed main-nav-dark",class:t.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[s("div",{staticClass:"fix-top"}),s("div",{staticClass:"main-nav"},[s("div",{staticClass:"main-nav-inner",class:{container:t.hasContainer}},[s("div",{staticClass:"flex"},[s("div",{staticClass:"layout-logo",on:{click:function(e){return t.navTo("/")}}},[t.$store.state.app.siteInfo.logoTitle?s("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}}):t._e(),t.$store.state.app.siteInfo.logoTitle?t._e():s("span",{staticClass:"title text-primary tw7"},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"\n                    ")]),s("span",{staticClass:"slogn"}),s("i",{class:t.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:t.chanView}})]),s("div",{staticClass:"nav-right flex",class:t.menuview},[s("el-menu",{staticClass:"main-menu",attrs:{"default-active":t.active,mode:"horizontal"},on:{select:t.mainMenuSelect}},[s("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/")}}},[t._v("\n                            首页\n                        ")]),t._l(t.$store.state.app.mainNav,(function(e){return[0==e.isHide?s("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(s){return t.navTo("/"+e.name)}}},[t._v("\n                                "+t._s(e.title)+"\n                            ")]):t._e()]}))],2),s("div",{staticClass:"flex flex-alignCenter"},[s("div",{staticClass:"m-r-lg"},[s("el-input",{attrs:{size:"medium",placeholder:"请输入搜索关键词","suffix-icon":"el-icon-search"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t.util.getStorageSync("token")?s("el-menu",{attrs:{mode:"horizontal"}},[s("el-submenu",{attrs:{index:"99"}},[s("template",{slot:"title"},[s("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:t.$store.state.user.userInfo.avatar}}),t._v("\n                                    "+t._s(t.$store.state.user.userInfo.nickname)+"\n                                ")],1),s("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/user/center")}}},[t._v("个人中心")]),s("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)],1):[s("el-menu",{attrs:{mode:"horizontal"}},[s("el-menu-item",[s("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/login")}}},[t._v("登录")]),s("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/register")}}},[t._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"16432335",null);e.a=o.exports},d551:function(t,e,s){"use strict";s.r(e),s("96cf");var a,n=s("1da1"),i=s("ca4c"),r=s("f3c6"),o=s("5c03"),l=s("c276"),c={components:{IaHead:i.a,IaFoot:r.a,XySendVerify:o.a},data:function(){return{loading:!1,form:{email:"",newPassword:"",verify:"",token:""},rule:{email:[{required:!0,message:"请填写邮箱",trigger:"blur"}],password:[{required:!0,message:"请填写新密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){this.$route.query.account&&(this.form.email=this.$route.query.account)},methods:{getVerifyToken:function(t){this.form.token=t},handleSubmit:(a=Object(n.a)(regeneratorRuntime.mark((function t(){var e,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e=this,setTimeout((function(){e.loading=!1}),5e3),t.next=5,l.a.request({url:"/v1/reg_email/user/restPassword",data:this.form,method:"post"});case 5:"200"==(s=t.sent).code?(this.util.showToast({title:s.msg,icon:"success",duration:2e3}),this.$router.push("/")):this.util.showToast({title:s.msg,icon:"loading",duration:3e3}),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})}},u=s("2877"),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap",attrs:{id:"wrap"}},[s("IaHead"),s("div",{staticClass:"main"},[s("div",{staticClass:"container",staticStyle:{"padding-top":"10%"}},[s("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[s("div",{staticClass:"title"},[t._v("\n                        邮箱重置密码\n                    ")]),s("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[s("el-form-item",{attrs:{prop:"email"}},[s("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"邮箱"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),s("el-form-item",{attrs:{prop:"verify"}},[s("el-input",{attrs:{size:"large",type:"text",prefix:"ios-lock-outline",placeholder:"验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}},[s("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",account:t.form.email,title:"重置密码"},on:{verifysuccess:t.getVerifyToken},slot:"append"})],1)],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"新密码"},model:{value:t.form.newPassword,callback:function(e){t.$set(t.form,"newPassword",e)},expression:"form.newPassword"}})],1),s("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:t.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("form")}}},[t._v("\n                            立即重置\n                        ")])],1)],1)],1)],1)]),s("IaFoot")],1)}),[],!1,null,"b227b8a6",null);e.default=d.exports},f3c6:function(t,e,s){"use strict";var a={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},n=(s("11dc"),s("2877")),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"foot-info"},[s("div",{staticClass:"container"},[s("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[s("div",{staticClass:"line1"},[t._v("官方邮箱 "),s("span",{staticClass:"value"},[t._v("ijry@qq.com")])]),s("div",[t._v("官方微信"),s("span",{staticClass:"value"},[t._v("--")])])]),s("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[s("div",{staticClass:"nav-list"},[s("router-link",{attrs:{to:"/agreement/用户协议"}},[t._v("\n                            用户协议\n                        ")]),s("router-link",{attrs:{to:"/agreement/隐私条款"}},[t._v("\n                            隐私条款\n                        ")]),s("router-link",{attrs:{to:"/post/help"}},[t._v("\n                            常见问题\n                        ")]),s("router-link",{attrs:{to:"/post/about"}},[t._v("\n                            关于我们\n                        ")])],1)])],1)],1)]),s("div",{staticClass:"footer-bottom"},[s("div",{staticClass:"container"},[s("el-row",{staticClass:"inner",attrs:{type:"flex",justify:"center",align:"middle"}},[s("div",[t._v("\n                    "+t._s(t.$store.state.app.siteInfo.copyright)+"\n                    "),t.$store.state.app.siteInfo.icp?s("a",{staticClass:"m-l",attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))]):t._e()])])],1)])])}),[],!1,null,"25519170",null);e.a=i.exports}}]);