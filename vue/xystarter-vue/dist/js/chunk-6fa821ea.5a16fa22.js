(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6fa821ea"],{"11dc":function(t,e,a){"use strict";var n=a("3f0c");a.n(n).a},"3f0c":function(t,e,a){},"59e6":function(t,e,a){"use strict";a.r(e),a("96cf");var n,s=a("1da1"),i=a("ca4c"),o=a("f3c6"),r={components:{IaHead:i.a,IaFoot:o.a},data:function(){return{id:0,info:{}}},mounted:function(){this.id=this.$route.params.id,this.loadData()},watch:{$route:function(){this.id=this.$route.params.id,this.loadData()}},methods:{loadData:(n=Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/post/info/"+this.id,data:{},method:"get"});case 2:200==(e=t.sent).code?this.info=e.data.info:this.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},c=a("2877"),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("IaHead"),a("div",{staticClass:"main"},[a("div",{staticClass:"container"},[a("el-card",{attrs:{shadow:"none"}},[a("h1",{staticClass:"title text-center"},[t._v(t._s(t.info.title))]),a("div",{domProps:{innerHTML:t._s(t.info.content)}})])],1)]),a("IaFoot")],1)}),[],!1,null,"e8a66dba",null);e.default=l.exports},8433:function(t,e,a){},ae4f:function(t,e,a){"use strict";var n=a("8433");a.n(n).a},ca4c:function(t,e,a){"use strict";a("96cf");var n,s=a("1da1"),i={name:"IaHead",props:{hasContainerProp:{default:!0},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,0==this.$store.state.app.mainNav.length&&this.loadData(),600<Date.parse(new Date)/1e3-this.$store.state.app.updateTime&&(this.loadData(),this.$store.commit("app/setData",{key:"updateTime",value:Date.parse(new Date)/1e3}))},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(t>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(t){this.$router.push(t)},mainMenuSelect:function(t){this.active=t,this.$store.commit("app/setData",{key:"currentNav",value:t})},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(n=Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){var e=t.data;"200"==e.code||alert(e.msg)})).catch((function(t){}))}},watch:{}},o=(a("ae4f"),a("2877")),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-nav-fixed main-nav-dark",class:t.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[a("div",{staticClass:"fix-top"}),a("div",{staticClass:"main-nav"},[a("div",{staticClass:"main-nav-inner",class:{container:t.hasContainer}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"layout-logo",on:{click:function(e){return t.navTo("/")}}},[t.$store.state.app.siteInfo.logoTitle?a("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}}):t._e(),t.$store.state.app.siteInfo.logoTitle?t._e():a("span",{staticClass:"title text-primary tw7"},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"\n                    ")]),a("span",{staticClass:"slogn"}),a("i",{staticClass:"hidden-sm-and-up",class:t.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:t.chanView}})]),a("div",{staticClass:"nav-right flex",class:t.menuview},[a("el-menu",{staticClass:"main-menu",attrs:{"default-active":t.active,mode:"horizontal"},on:{select:t.mainMenuSelect}},[a("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/")}}},[t._v("\n                            首页\n                        ")]),t._l(t.$store.state.app.mainNav,(function(e){return[0==e.isHide?a("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(a){return t.navTo("/"+e.name)}}},[t._v("\n                                "+t._s(e.title)+"\n                            ")]):t._e()]}))],2),a("div",{staticClass:"flex flex-alignCenter"},[a("div",{staticClass:"m-r-lg"},[a("el-input",{attrs:{size:"medium",placeholder:"请输入搜索关键词","suffix-icon":"el-icon-search"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t.util.getStorageSync("token")?a("el-menu",{attrs:{mode:"horizontal"}},[a("el-submenu",{attrs:{index:"99"}},[a("template",{slot:"title"},[a("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:t.$store.state.user.userInfo.avatar}}),t._v("\n                                    "+t._s(t.$store.state.user.userInfo.nickname)+"\n                                ")],1),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/user/center")}}},[t._v("个人中心")]),a("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)],1):[a("el-menu",{attrs:{mode:"horizontal"}},[a("el-menu-item",[a("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/login")}}},[t._v("登录")]),a("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/register")}}},[t._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"d3fb1238",null);e.a=r.exports},f3c6:function(t,e,a){"use strict";var n={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},s=(a("11dc"),a("2877")),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"foot-info"},[a("div",{staticClass:"container"},[a("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[a("div",{staticClass:"line1"},[t._v("官方邮箱 "),a("span",{staticClass:"value"},[t._v("ijry@qq.com")])]),a("div",[t._v("官方微信"),a("span",{staticClass:"value"},[t._v("--")])])]),a("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[a("div",{staticClass:"nav-list"},[a("router-link",{attrs:{to:"/agreement/用户协议"}},[t._v("\n                            用户协议\n                        ")]),a("router-link",{attrs:{to:"/agreement/隐私条款"}},[t._v("\n                            隐私条款\n                        ")]),a("router-link",{attrs:{to:"/post/help"}},[t._v("\n                            常见问题\n                        ")]),a("router-link",{attrs:{to:"/post/about"}},[t._v("\n                            关于我们\n                        ")])],1)])],1)],1)]),a("div",{staticClass:"footer-bottom"},[a("div",{staticClass:"container"},[a("el-row",{staticClass:"inner",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",[t._v("\n                    "+t._s(t.$store.state.app.siteInfo.copyright)+"\n                    "),t.$store.state.app.siteInfo.icp?a("a",{staticClass:"m-l",attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))]):t._e()])])],1)])])}),[],!1,null,"25519170",null);e.a=i.exports}}]);