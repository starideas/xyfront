(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-420eeac8"],{"7b54":function(t,e,n){"use strict";var a=n("ef24");n.n(a).a},ca4c:function(t,e,n){"use strict";n("96cf");var a,s=n("1da1"),i={name:"IaHead",props:{hasContainerProp:{default:!1},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,0==this.$store.state.app.mainNav.length&&this.loadData()},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(t>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(t){this.$router.push(t)},mainMenuSelect:function(t){this.active=t},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(a=Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){var e=t.data;"200"==e.code?window.location.reload():alert(e.msg)})).catch((function(t){}))}},watch:{}},o=(n("e494"),n("2877")),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-nav-fixed main-nav-dark",class:t.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[n("div",{staticClass:"fix-top"}),n("div",{staticClass:"main-nav"},[n("div",{class:{container:t.hasContainer}},[n("div",{staticClass:"main-nav-inner flex"},[n("div",{staticClass:"layout-logo",on:{click:function(e){return t.navTo("/")}}},[t.$store.state.app.siteInfo.logoTitle?n("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}}):t._e(),t.$store.state.app.siteInfo.logoTitle?t._e():n("span",{staticClass:"title"},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"\n                    ")]),n("span",{staticClass:"slogn"}),n("i",{class:t.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:t.chanView}})]),n("div",{staticClass:"nav-right flex",class:t.menuview},[n("el-menu",{staticClass:"main-menu",attrs:{"default-index":t.active,mode:"horizontal"},on:{select:t.mainMenuSelect}},[n("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/")}}},[t._v("\n                            一键买卖\n                        ")]),n("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/iotc/market")}}},[t._v("\n                            交易市场\n                        ")]),t._l(t.$store.state.app.mainNav,(function(e){return n("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(n){return t.navTo("/"+e.name)}}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])}))],2),n("div",{staticClass:"flex"},[t.util.getStorageSync("token")?n("el-menu",{attrs:{mode:"horizontal"}},[n("el-submenu",{attrs:{index:"99"}},[n("template",{slot:"title"},[n("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:t.$store.state.user.userInfo.avatar}}),t._v("\n                                    "+t._s(t.$store.state.user.userInfo.nickname)+"\n                                ")],1),n("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/user/center")}}},[t._v("个人中心")]),n("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)],1):[n("el-menu",{attrs:{mode:"horizontal"}},[n("el-menu-item",[n("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/login")}}},[t._v("登录")]),n("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/register")}}},[t._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"3f7a28a0",null);e.a=r.exports},cbba:function(t,e,n){"use strict";n.r(e),n("96cf");var a,s=n("1da1"),i=n("ca4c"),o=n("f3c6"),r=(n("c276"),{components:{IaHead:i.a,IaFoot:o.a},data:function(){return{isDemo:!1,formLogin:{loading:!1,account:"",password:""},ruleLogin:{account:[{required:!0,message:"请填写账号",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}]}}},created:function(){1==this.isDemo&&(this.formLogin.account="initadmin",this.formLogin.password="initadmin.net")},methods:{handleSubmit:(a=Object(s.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.formLogin.loading=!0,e=this,setTimeout((function(){e.formLogin.loading=!1}),5e3),t.next=5,this.util.request({url:"/v1/core/user/login",data:this.formLogin,method:"post"});case 5:200==(n=t.sent).code?(this.$store.commit("user/setToken",n.data.token),this.$store.commit("user/setUserInfo",n.data.userInfo),this.util.showToast({title:n.msg,icon:"success",duration:2e3}),this.util.switchTab({url:"/"})):this.util.showToast({title:n.msg,icon:"loading",duration:3e3}),this.formLogin.loading=!1;case 8:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})}}),c=n("2877"),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap",attrs:{id:"wrap"}},[n("IaHead"),n("div",{staticClass:"main"},[n("div",{staticClass:"container",staticStyle:{"padding-top":"13%"}},[n("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[n("div",{staticClass:"title"},[t._v("\n                        登录\n                    ")]),n("el-form",{ref:"formLogin",attrs:{model:t.formLogin,rules:t.ruleLogin}},[n("el-form-item",{attrs:{prop:"account"}},[n("el-input",{attrs:{size:"large",type:"text",prefix:"ios-person-outline",placeholder:"请输入用户名、邮箱或手机号"},model:{value:t.formLogin.account,callback:function(e){t.$set(t.formLogin,"account",e)},expression:"formLogin.account"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入密码"},model:{value:t.formLogin.password,callback:function(e){t.$set(t.formLogin,"password",e)},expression:"formLogin.password"}})],1),n("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:t.formLogin.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("formLogin")}}},[t._v("\n                             登录\n                        ")]),n("div",{staticClass:"actions flex"},[n("div",[n("router-link",{attrs:{to:"/user/resetPassword"}},[t._v("忘记密码")])],1),n("div",[t._v("\n                                还没有账号？\n                                "),n("router-link",{attrs:{to:"/user/register"}},[t._v("注册")])],1)])],1)],1)],1)],1)]),n("IaFoot")],1)}),[],!1,null,"a01301c8",null);e.default=l.exports},e494:function(t,e,n){"use strict";var a=n("f39d");n.n(a).a},ef24:function(t,e,n){},f39d:function(t,e,n){},f3c6:function(t,e,n){"use strict";var a={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},s=(n("7b54"),n("2877")),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("el-row",{staticClass:"foot-info",attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[n("div",{staticClass:"line1"},[t._v("官方邮箱 "),n("span",{staticClass:"value"},[t._v("xxx@gmail.com")])]),n("div",[t._v("官方微信"),n("span",{staticClass:"value"},[t._v("OTCATM")])])]),n("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[n("div",{staticClass:"nav-list"},[n("a",{attrs:{target:"_blank",href:"#"}},[t._v("隐私政策")]),n("a",{attrs:{target:"_blank",href:"#"}},[t._v("常见问题")]),n("a",{attrs:{target:"_blank",href:"#"}},[t._v("费率标准")]),n("a",{attrs:{target:"_blank",href:"#"}},[t._v("关于我们")]),n("a",{attrs:{target:"_blank",href:"#"}},[t._v("申请商家")])])])],1),n("el-row",{staticClass:"footer-bottom",attrs:{type:"flex",justify:"center",align:"middle"}},[n("div",[t._v("\n                "+t._s(t.$store.state.app.siteInfo.copyright)+"\n                 "),t.$store.state.app.siteInfo.icp?n("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))]):t._e()])])],1)])}),[],!1,null,"16b6d238",null);e.a=i.exports}}]);