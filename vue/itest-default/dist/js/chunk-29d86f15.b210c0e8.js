(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-29d86f15"],{"19e3":function(t,e,a){},"3a2a":function(t,e,a){},"3c76":function(t,e,a){"use strict";var s=a("3a2a");a.n(s).a},a6e2:function(t,e,a){"use strict";var s=a("f33b");a.n(s).a},a755:function(t,e,a){"use strict";var s=a("19e3");a.n(s).a},ca4c:function(t,e,a){"use strict";a("96cf");var s,n=a("3b8d"),i={name:"ia_head",props:{hasContainerProp:{default:!0}},data:function(){return{hasContainer:!0,theme:"light",active:"home",mainNavDrawer:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.$store.state.app.mainNav.length},mounted:function(){},computed:{},methods:{swicthActive:function(t){this.active=t},loadData:(s=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){"200"==(t=t.data).code?window.location.reload():alert(t.msg)})).catch((function(t){}))}},watch:{}},o=(a("a6e2"),a("2877")),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Affix",[a("Menu",{staticClass:"main-nav",attrs:{mode:"horizontal",theme:t.theme,"active-name":t.active}},[a("div",{class:{container:t.hasContainer}},[a("div",{staticClass:"layout flex"},[a("div",{staticClass:"menu flex"},[a("div",{staticClass:"layout-logo m-r-xs"},[a("div",[a("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}})]),t.$store.state.app.siteInfo.logoTitle?t._e():a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.$store.state.app.siteInfo.title))])]),a("div",{staticClass:"slogn"})]),a("div",{staticClass:"nav-list m-l"},[a("MenuItem",{attrs:{to:"/",name:"home"},nativeOn:{click:function(e){return t.swicthActive("home")}}},[t._v("\n                            首页\n                        ")]),a("MenuItem",{attrs:{to:"/itest/app/add",name:"add"},nativeOn:{click:function(e){return t.swicthActive("add")}}},[t._v("\n                            上传应用\n                        ")]),a("MenuItem",{attrs:{to:"/itest/app/my",name:"my"},nativeOn:{click:function(e){return t.swicthActive("my")}}},[t._v("\n                            我的应用\n                        ")]),a("MenuItem",{attrs:{to:"/itest/app/udid",name:"udid"},nativeOn:{click:function(e){return t.swicthActive("udid")}}},[a("Badge",{staticStyle:{display:"inline"},attrs:{dot:""}},[t._v("\n                                获取UDID\n                            ")])],1),t._l(t.$store.state.app.mainNav,(function(e){return a("MenuItem",{key:e.id,attrs:{to:"/"+e.name,name:e.name},nativeOn:{click:function(a){return t.swicthActive(e.name)}}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])}))],2),a("Icon",{staticClass:"menu-toggle",attrs:{type:t.mainNavDrawer?"md-close":"md-menu",size:"26"},on:{click:function(e){t.mainNavDrawer=!t.mainNavDrawer}}})],1),a("div",{staticClass:"login"},[t.util.getStorageSync("token")?[a("Submenu",{attrs:{name:"99"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-person"}}),t._v("\n                                "+t._s(t.$store.state.user.userInfo.nickname)+"\n                            ")],1),a("MenuItem",{attrs:{name:"99-1",to:"/user/center"}},[t._v("个人中心")]),a("MenuItem",{attrs:{name:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)]:[a("Button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary",ghost:"",to:"/user/login"}},[t._v("登录")])]],2)])]),a("Drawer",{staticClass:"main-nav-drawer",attrs:{width:220,placement:"left",closabl:!0,draggable:!0,scrollable:!0,title:t.$store.state.app.siteInfo.title,closable:!1},model:{value:t.mainNavDrawer,callback:function(e){t.mainNavDrawer=e},expression:"mainNavDrawer"}},[a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[t.util.getStorageSync("token")?[a("Avatar",{attrs:{src:t.$store.state.user.userInfo.avatar,icon:"ios-person",size:"large"}})]:[a("Button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary",ghost:"",to:"/user/login"}},[t._v("登录")])]],2),a("Menu",{attrs:{theme:t.theme}},[a("MenuItem",{attrs:{to:"/",name:"home"},nativeOn:{click:function(e){return t.swicthActive("home")}}},[t._v("\n                    首页\n                ")]),a("MenuItem",{attrs:{to:"/itest/app/add",name:"add"},nativeOn:{click:function(e){return t.swicthActive("add")}}},[t._v("\n                    上传应用\n                ")]),a("MenuItem",{attrs:{to:"/itest/app/my",name:"my"},nativeOn:{click:function(e){return t.swicthActive("my")}}},[t._v("\n                    我的应用\n                ")]),a("MenuItem",{attrs:{to:"/itest/app/udid",name:"udid"},nativeOn:{click:function(e){return t.swicthActive("udid")}}},[t._v("\n                    获取UDID\n                ")]),t._l(t.$store.state.app.mainNav,(function(e){return a("MenuItem",{key:e.id,attrs:{to:"/"+e.name,name:e.name},nativeOn:{click:function(a){return t.swicthActive(e.name)}}},[t._v("\n                "+t._s(e.title)+"\n                ")])}))],2)],1)],1)],1)}),[],!1,null,"2474608d",null);e.a=r.exports},eea6:function(t,e,a){"use strict";a.r(e);var s=a("ca4c"),n=a("f3c6"),i={components:{IaHead:s.a,IaFoot:n.a},data:function(){return{}},created:function(){},methods:{}},o=(a("3c76"),a("2877")),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("IaHead"),a("div",{staticClass:"body"},[a("Carousel",{staticClass:"main-slider",attrs:{autoplay:!1,loop:!1}},[a("CarouselItem",[a("div",{staticClass:"item-box"},[a("vue-particles",{staticClass:"slider-particles",attrs:{color:"#fff",particleOpacity:.7,particlesNumber:60,shapeType:"circle",particleSize:4,linesColor:"#fff",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:1,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),a("div",{staticClass:"content"},[a("h1",{staticStyle:{"font-size":"30px"}},[t._v(t._s(t.$store.state.app.siteInfo.title))]),a("p",{staticStyle:{"margin-top":"10px","font-size":"25px"}},[t._v("内测分发、证书管理、签名、封装无所不通")]),a("p",{staticStyle:{"margin-top":"120px","font-size":"18px"}},[a("Button",{attrs:{target:"",to:"/itest/app/add",type:"default",ghost:"",size:"large",icon:""}},[t._v("立即使用")])],1),a("p",{staticClass:"links",staticStyle:{"margin-top":"15px"}})])],1)])],1),a("div",{staticClass:"container"},[a("Row",{staticStyle:{padding:"50px"},attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticStyle:{"text-align":"center","font-size":"20px","margin-bottom":"80px"},attrs:{span:"24"}},[t._v("\n                    内测分发\n                ")]),a("Col",{attrs:{span:"14"}},[a("p",{staticStyle:{width:"250px","font-size":"16px"}},[t._v("\n                        一键上传APP安装包，提供链接和二维码，方便用户下载测试。\n                    ")])]),a("Col",{attrs:{span:"10"}},[a("img",{staticStyle:{height:"200px"},attrs:{src:t.$store.state.app.siteInfo.logo}})])],1)],1),a("div",{staticStyle:{background:"#eee"}},[a("div",{staticClass:"container"},[a("Row",{staticStyle:{padding:"50px"},attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticStyle:{"text-align":"center","font-size":"20px","margin-bottom":"80px"},attrs:{span:"24"}},[t._v("\n                        AppstoreConnectAPI支持\n                    ")]),a("Col",{attrs:{span:"10"}},[a("img",{staticStyle:{height:"200px"},attrs:{src:t.$store.state.app.siteInfo.logo}})]),a("Col",{attrs:{span:"14"}},[a("p",{staticStyle:{width:"450px","font-size":"16px"}},[t._v("\n                            基于苹果官方新推出AppstoreConnectAPI实现对证书、设备、描述文件、BundleId等便捷管理。\n                            对接请在AppstoreConnect后台->用户和访问->密钥TAB->点击+号创建接口密钥。\n                        ")])])],1)],1)]),a("div",{staticClass:"container"},[a("Row",{staticStyle:{padding:"50px"},attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticStyle:{"text-align":"center","font-size":"20px","margin-bottom":"80px"},attrs:{span:"24"}},[t._v("\n                    TF签名\n                ")]),a("Col",{attrs:{span:"14"}},[a("p",{staticStyle:{width:"400px","font-size":"16px"}},[t._v("\n                        采用苹果官方认可的分发模式，相较于企业签名会更加稳定；并且我们为您提供专业的资深团队服务，给您的应用预先审核，让您的应用能更好的进行分发\n                    ")])]),a("Col",{attrs:{span:"10"}},[a("img",{staticStyle:{height:"200px"},attrs:{src:t.$store.state.app.siteInfo.logo}})])],1)],1),a("div",{staticStyle:{background:"#eee"}},[a("div",{staticClass:"container"},[a("Row",{staticStyle:{padding:"50px"},attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticStyle:{"text-align":"center","font-size":"20px","margin-bottom":"80px"},attrs:{span:"24"}},[t._v("\n                        企业签名\n                    ")]),a("Col",{attrs:{span:"10"}},[a("img",{staticStyle:{height:"200px"},attrs:{src:t.$store.state.app.siteInfo.logo}})]),a("Col",{attrs:{span:"14"}},[a("p",{staticStyle:{width:"400px","font-size":"16px"}},[t._v("\n                            一键分发，无需通过Appstore审核，方便大范围产品用户测试。\n                        ")])])],1)],1)]),a("div",{staticClass:"container"},[a("Row",{staticStyle:{padding:"50px"},attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticStyle:{"text-align":"center"},attrs:{span:"8"}},[a("div",[a("img",{staticStyle:{height:"80px"},attrs:{src:t.$store.state.app.siteInfo.logo}})]),a("p",{staticStyle:{"font-size":"16px","margin-top":"15px",width:"300px"}},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"帮助我们节省了大量开发成本，项目顺利上线！\n                    ")])]),a("Col",{staticStyle:{"text-align":"center"},attrs:{span:"8"}},[a("div",[a("img",{staticStyle:{height:"80px"},attrs:{src:t.$store.state.app.siteInfo.logo}})]),a("p",{staticStyle:{"font-size":"16px","margin-top":"15px",width:"300px"}},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"的AppstoreConnect接口很稳定，比以前基于网页解析的要好用很多。\n                    ")])]),a("Col",{staticStyle:{"text-align":"center"},attrs:{span:"8"}},[a("div",[a("img",{staticStyle:{height:"80px"},attrs:{src:t.$store.state.app.siteInfo.logo}})]),a("p",{staticStyle:{"font-size":"16px","margin-top":"15px",width:"300px"}},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"的签名服务非常好，APP掉签率很低。！\n                    ")])])],1)],1)],1),a("IaFoot")],1)}),[],!1,null,"207718c2",null);e.default=r.exports},f33b:function(t,e,a){},f3c6:function(t,e,a){"use strict";var s={name:"ia_foot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},n=(a("a755"),a("2877")),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("i-col",{attrs:{xs:24,sm:14,md:14}},[t._v("\n                "+t._s(t.$store.state.app.siteInfo.copyright)+"\n            ")]),a("i-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[a("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))])])],1)],1)])}),[],!1,null,"4e3f2414",null);e.a=i.exports}}]);