(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6d96ca64"],{"19e3":function(t,e,a){},a6e2:function(t,e,a){"use strict";var n=a("f33b");a.n(n).a},a755:function(t,e,a){"use strict";var n=a("19e3");a.n(n).a},c71f:function(t,e,a){"use strict";a.r(e),a("96cf");var n,i=a("3b8d"),s=a("ca4c"),r=a("f3c6"),o={components:{IaHead:s.a,IaFoot:r.a},watch:{$route:function(){}},data:function(){return{id:0,info:{},qrcode:""}},created:function(){this.id=this.$route.params.id,this.qrcode="/api/v1/core/index/qrcode.png?text="+window.location.href,this.loadData()},methods:{loadData:(n=Object(i.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/itest/app/info/"+this.id,method:"get"});case 2:200==(e=t.sent).code?this.info=e.data.info:this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},c=a("2877"),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("IaHead"),a("div",{staticClass:"body"},[a("div",{staticClass:"main-banner"},[a("h1",{staticClass:"title"},[t._v("安装APP")]),a("p",{staticClass:"info"}),a("div",[t._v("\n                    点击安装"+t._s(t.info.name)+"版本"+t._s(t.info.version)+"\n                ")]),a("div",[t._v("\n                    更新时间："+t._s(t._f("formatTime")(t.info.createTime))+"\n                ")]),a("p")]),a("div",{staticClass:"container flex",staticStyle:{"flex-direction":"column","align-items":"center","justify-content":"center"}},[a("div",{staticClass:"m-b",staticStyle:{margin:"0 auto","text-align":"center"}},[1==t.info.appType?[a("Button",{attrs:{size:"large",to:t.info.installUrl,target:"_blank",type:"primary"}},[t._v("立即安装")]),a("a")]:2==t.info.appType?[a("Button",{attrs:{size:"large",to:t.info.installUrl,target:"_blank",type:"primary"}},[t._v("立即安装")])]:t._e()],2),a("div",{staticClass:"m-b",staticStyle:{margin:"0 auto","text-align":"center"}},[a("div",[a("img",{attrs:{src:t.qrcode,width:"200"}})]),a("div",[t._v("\n                    手机扫码安装\n                ")])])])]),a("IaFoot")],1)}),[],!1,null,"027ca616",null);e.default=l.exports},ca4c:function(t,e,a){"use strict";a("96cf");var n,i=a("3b8d"),s={name:"ia_head",props:{hasContainerProp:{default:!0}},data:function(){return{hasContainer:!0,theme:"light",active:"home",mainNavDrawer:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.$store.state.app.mainNav.length},mounted:function(){},computed:{},methods:{swicthActive:function(t){this.active=t},loadData:(n=Object(i.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){"200"==(t=t.data).code?window.location.reload():alert(t.msg)})).catch((function(t){}))}},watch:{}},r=(a("a6e2"),a("2877")),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Affix",[a("Menu",{staticClass:"main-nav",attrs:{mode:"horizontal",theme:t.theme,"active-name":t.active}},[a("div",{class:{container:t.hasContainer}},[a("div",{staticClass:"layout flex"},[a("div",{staticClass:"menu flex"},[a("div",{staticClass:"layout-logo m-r-xs"},[a("div",[a("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}})]),t.$store.state.app.siteInfo.logoTitle?t._e():a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.$store.state.app.siteInfo.title))])]),a("div",{staticClass:"slogn"})]),a("div",{staticClass:"nav-list m-l"},[a("MenuItem",{attrs:{to:"/",name:"home"},nativeOn:{click:function(e){return t.swicthActive("home")}}},[t._v("\n                            首页\n                        ")]),a("MenuItem",{attrs:{to:"/itest/app/add",name:"add"},nativeOn:{click:function(e){return t.swicthActive("add")}}},[t._v("\n                            上传应用\n                        ")]),a("MenuItem",{attrs:{to:"/itest/app/my",name:"my"},nativeOn:{click:function(e){return t.swicthActive("my")}}},[t._v("\n                            我的应用\n                        ")]),a("MenuItem",{attrs:{to:"/itest/app/udid",name:"udid"},nativeOn:{click:function(e){return t.swicthActive("udid")}}},[a("Badge",{staticStyle:{display:"inline"},attrs:{dot:""}},[t._v("\n                                获取UDID\n                            ")])],1),t._l(t.$store.state.app.mainNav,(function(e){return a("MenuItem",{key:e.id,attrs:{to:"/"+e.name,name:e.name},nativeOn:{click:function(a){return t.swicthActive(e.name)}}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])}))],2),a("Icon",{staticClass:"menu-toggle",attrs:{type:t.mainNavDrawer?"md-close":"md-menu",size:"26"},on:{click:function(e){t.mainNavDrawer=!t.mainNavDrawer}}})],1),a("div",{staticClass:"login"},[t.util.getStorageSync("token")?[a("Submenu",{attrs:{name:"99"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-person"}}),t._v("\n                                "+t._s(t.$store.state.user.userInfo.nickname)+"\n                            ")],1),a("MenuItem",{attrs:{name:"99-1",to:"/user/center"}},[t._v("个人中心")]),a("MenuItem",{attrs:{name:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)]:[a("Button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary",ghost:"",to:"/user/login"}},[t._v("登录")])]],2)])]),a("Drawer",{staticClass:"main-nav-drawer",attrs:{width:220,placement:"left",closabl:!0,draggable:!0,scrollable:!0,title:t.$store.state.app.siteInfo.title,closable:!1},model:{value:t.mainNavDrawer,callback:function(e){t.mainNavDrawer=e},expression:"mainNavDrawer"}},[a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[t.util.getStorageSync("token")?[a("Avatar",{attrs:{src:t.$store.state.user.userInfo.avatar,icon:"ios-person",size:"large"}})]:[a("Button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary",ghost:"",to:"/user/login"}},[t._v("登录")])]],2),a("Menu",{attrs:{theme:t.theme}},[a("MenuItem",{attrs:{to:"/",name:"home"},nativeOn:{click:function(e){return t.swicthActive("home")}}},[t._v("\n                    首页\n                ")]),a("MenuItem",{attrs:{to:"/itest/app/add",name:"add"},nativeOn:{click:function(e){return t.swicthActive("add")}}},[t._v("\n                    上传应用\n                ")]),a("MenuItem",{attrs:{to:"/itest/app/my",name:"my"},nativeOn:{click:function(e){return t.swicthActive("my")}}},[t._v("\n                    我的应用\n                ")]),a("MenuItem",{attrs:{to:"/itest/app/udid",name:"udid"},nativeOn:{click:function(e){return t.swicthActive("udid")}}},[t._v("\n                    获取UDID\n                ")]),t._l(t.$store.state.app.mainNav,(function(e){return a("MenuItem",{key:e.id,attrs:{to:"/"+e.name,name:e.name},nativeOn:{click:function(a){return t.swicthActive(e.name)}}},[t._v("\n                "+t._s(e.title)+"\n                ")])}))],2)],1)],1)],1)}),[],!1,null,"2474608d",null);e.a=o.exports},f33b:function(t,e,a){},f3c6:function(t,e,a){"use strict";var n={name:"ia_foot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},i=(a("a755"),a("2877")),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("i-col",{attrs:{xs:24,sm:14,md:14}},[t._v("\n                "+t._s(t.$store.state.app.siteInfo.copyright)+"\n            ")]),a("i-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[a("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))])])],1)],1)])}),[],!1,null,"4e3f2414",null);e.a=s.exports}}]);