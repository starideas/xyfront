(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-dc65523e"],{2212:function(t,e,a){},"6f7b":function(t,e,a){},a6e2:function(t,e,a){"use strict";var n=a("2212");a.n(n).a},a755:function(t,e,a){"use strict";var n=a("6f7b");a.n(n).a},ca4c:function(t,e,a){"use strict";a("96cf");var n=a("c964"),s={name:"ia_head",props:{hasContainerProp:{default:!0}},data:function(){return{hasContainer:!0,theme:"light",active:"home",mainNavDrawer:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.$store.state.app.mainNav.length},mounted:function(){},computed:{},methods:{swicthActive:function(t){this.active=t},loadData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(a=e.sent).code?t.$store.commit("app/setMainNav",a.data.dataList):t.$Message.error(a.msg);case 4:case"end":return e.stop()}}),e)})))()},logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){"200"==(t=t.data).code?window.location.reload():alert(t.msg)})).catch((function(t){}))}},watch:{}},i=(a("a6e2"),a("0c7c")),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Affix",[a("Menu",{staticClass:"main-nav",attrs:{mode:"horizontal",theme:t.theme,"active-name":t.active}},[a("div",{class:{container:t.hasContainer}},[a("div",{staticClass:"layout flex"},[a("div",{staticClass:"menu flex"},[a("div",{staticClass:"layout-logo m-r-xs"},[a("div",[a("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}})]),t.$store.state.app.siteInfo.logoTitle?t._e():a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.$store.state.app.siteInfo.title))])]),a("div",{staticClass:"slogn"})]),a("div",{staticClass:"nav-list m-l"},[a("MenuItem",{attrs:{to:"/",name:"home"},nativeOn:{click:function(e){return t.swicthActive("home")}}},[t._v(" 首页 ")]),a("MenuItem",{attrs:{to:"/itest/app/add",name:"add"},nativeOn:{click:function(e){return t.swicthActive("add")}}},[t._v(" 上传应用 ")]),a("MenuItem",{attrs:{to:"/itest/app/my",name:"my"},nativeOn:{click:function(e){return t.swicthActive("my")}}},[t._v(" 我的应用 ")]),a("MenuItem",{attrs:{to:"/itest/app/udid",name:"udid"},nativeOn:{click:function(e){return t.swicthActive("udid")}}},[a("Badge",{staticStyle:{display:"inline"},attrs:{dot:""}},[t._v(" 获取UDID ")])],1),t._l(t.$store.state.app.mainNav,(function(e){return a("MenuItem",{key:e.id,attrs:{to:"/"+e.name,name:e.name},nativeOn:{click:function(a){return t.swicthActive(e.name)}}},[t._v(" "+t._s(e.title)+" ")])}))],2),a("Icon",{staticClass:"menu-toggle",attrs:{type:t.mainNavDrawer?"md-close":"md-menu",size:"26"},on:{click:function(e){t.mainNavDrawer=!t.mainNavDrawer}}})],1),a("div",{staticClass:"login"},[t.util.getStorageSync("token")?[a("Submenu",{attrs:{name:"99"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-person"}}),t._v(" "+t._s(t.$store.state.user.userInfo.nickname)+" ")],1),a("MenuItem",{attrs:{name:"99-1",to:"/user/center"}},[t._v("个人中心")]),a("MenuItem",{attrs:{name:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)]:[a("Button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary",ghost:"",to:"/user/login"}},[t._v("登录")])]],2)])]),a("Drawer",{staticClass:"main-nav-drawer",attrs:{width:220,placement:"left",closabl:!0,draggable:!0,scrollable:!0,title:t.$store.state.app.siteInfo.title,closable:!1},model:{value:t.mainNavDrawer,callback:function(e){t.mainNavDrawer=e},expression:"mainNavDrawer"}},[a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[t.util.getStorageSync("token")?[a("Avatar",{attrs:{src:t.$store.state.user.userInfo.avatar,icon:"ios-person",size:"large"}})]:[a("Button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary",ghost:"",to:"/user/login"}},[t._v("登录")])]],2),a("Menu",{attrs:{theme:t.theme}},[a("MenuItem",{attrs:{to:"/",name:"home"},nativeOn:{click:function(e){return t.swicthActive("home")}}},[t._v(" 首页 ")]),a("MenuItem",{attrs:{to:"/itest/app/add",name:"add"},nativeOn:{click:function(e){return t.swicthActive("add")}}},[t._v(" 上传应用 ")]),a("MenuItem",{attrs:{to:"/itest/app/my",name:"my"},nativeOn:{click:function(e){return t.swicthActive("my")}}},[t._v(" 我的应用 ")]),a("MenuItem",{attrs:{to:"/itest/app/udid",name:"udid"},nativeOn:{click:function(e){return t.swicthActive("udid")}}},[t._v(" 获取UDID ")]),t._l(t.$store.state.app.mainNav,(function(e){return a("MenuItem",{key:e.id,attrs:{to:"/"+e.name,name:e.name},nativeOn:{click:function(a){return t.swicthActive(e.name)}}},[t._v(" "+t._s(e.title)+" ")])}))],2)],1)],1)],1)}),[],!1,null,"2474608d",null);e.a=o.exports},cbba:function(t,e,a){"use strict";a.r(e),a("96cf");var n,s=a("c964"),i=a("ca4c"),o=a("f3c6"),r=(a("c276"),{components:{IaHead:i.a,IaFoot:o.a},data:function(){return{isDemo:!1,formLogin:{loading:!1,account:"",password:""},ruleLogin:{account:[{required:!0,message:"请填写账号",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}]}}},created:function(){1==this.isDemo&&(this.formLogin.account="initadmin",this.formLogin.password="initadmin.net")},methods:{handleSubmit:(n=Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.formLogin.loading=!0,t.next=3,this.util.request({url:"/v1/core/user/login",data:this.formLogin,method:"post"});case 3:200==(e=t.sent).code?(this.$store.commit("user/setToken",e.data.token),this.$store.commit("user/setUserInfo",e.data.userInfo),this.util.showToast({title:e.msg,icon:"success",duration:3e3}),this.util.switchTab({url:"/"})):this.util.showToast({title:e.msg,icon:"loading",duration:3e3}),this.formLogin.loading=!1;case 6:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}}),c=a("0c7c"),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("IaHead"),a("div",{staticClass:"body"},[a("div",{staticClass:"container bg-white m-t-sm"},[a("Row",{staticStyle:{"padding-top":"10%"},attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{attrs:{xs:22,sm:12,md:8,lg:6}},[a("div",{staticStyle:{width:"100%",color:"#515a6e","margin-bottom":"30px","text-align":"center"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.app.siteInfo.logo,expression:"$store.state.app.siteInfo.logo"}],staticStyle:{width:"150px","margin-bottom":"10px"},attrs:{src:t.$store.state.app.siteInfo.logo,alt:t.$store.state.app.siteInfo.title}}),a("h2",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.app.siteInfo.logo,expression:"!$store.state.app.siteInfo.logo"}]},[t._v(t._s(t.$store.state.app.siteInfo.title))])]),a("Form",{ref:"formLogin",attrs:{model:t.formLogin,rules:t.ruleLogin}},[a("FormItem",{attrs:{prop:"account"}},[a("Input",{attrs:{size:"large",type:"text",prefix:"ios-person-outline",placeholder:"账号"},model:{value:t.formLogin.account,callback:function(e){t.$set(t.formLogin,"account",e)},expression:"formLogin.account"}})],1),a("FormItem",{attrs:{prop:"password"}},[a("Input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"密码"},model:{value:t.formLogin.password,callback:function(e){t.$set(t.formLogin,"password",e)},expression:"formLogin.password"}})],1),a("FormItem",[a("Button",{attrs:{size:"large",long:"",loading:t.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("formLogin")}}},[t._v(" 立即登录 ")])],1)],1)],1)],1)],1)]),a("IaFoot")],1)}),[],!1,null,"10cc294c",null);e.default=l.exports},f3c6:function(t,e,a){"use strict";var n={name:"ia_foot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},s=(a("a755"),a("0c7c")),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("i-col",{attrs:{xs:24,sm:14,md:14}},[t._v(" "+t._s(t.$store.state.app.siteInfo.copyright)+" ")]),a("i-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[a("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))])])],1)],1)])}),[],!1,null,"4e3f2414",null);e.a=i.exports}}]);