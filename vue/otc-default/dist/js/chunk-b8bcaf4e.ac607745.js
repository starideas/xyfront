(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b8bcaf4e"],{1653:function(t,e,a){"use strict";a.r(e),a("96cf");var n,s,i=a("1da1"),r=a("ca4c"),o=a("f3c6"),l=a("b769"),c={components:{IaHead:r.a,IaFoot:o.a,subnav:l.a},data:function(){return{tab:"bill",navList:[{index:"my",title:"我的资产"},{index:"recharge",title:"充值记录"},{index:"withdraw",title:"提现记录"},{index:"bill",title:"我的账单"}],dataList:[],dataPage:{page:1}}},created:function(){this.loadData()},methods:{handleClick:function(t){switch(t){case"my":this.util.navigateTo({url:"/coin/my"});break;case"bill":this.util.navigateTo({url:"/coin/bill"});break;case"recharge":this.util.navigateTo({url:"/coin/bill/recharge"});break;case"withdraw":this.util.navigateTo({url:"/coin/bill/withdraw"})}},pageChange:(s=Object(i.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.dataPage.page=e,this.loadData(e);case 2:case"end":return t.stop()}}),t,this)}))),function(t){return s.apply(this,arguments)}),loadData:(n=Object(i.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/coin/log/my",data:{page:this.dataPage.page,title:"提现"},method:"get"});case 2:200==(e=t.sent).code?(this.dataList=e.data.dataList,this.dataPage=e.data.dataPage):this.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},u=a("2877"),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("IaHead"),a("div",{staticClass:"main"},[a("subnav",{attrs:{title:"我的资产",value:"withdraw",navList:t.navList},on:{change:t.handleClick}}),a("div",{staticClass:"container p-t"},[a("el-table",{staticClass:"m-t-xs",staticStyle:{width:"100%"},attrs:{data:t.dataList}},[a("el-table-column",{attrs:{prop:"createTime",label:"时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatTime")(e.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"id",label:"币种",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"font-sm"},[t._v(t._s(e.row.coinInfo.symbol))])]}}])}),a("el-table-column",{attrs:{prop:"balance",label:"交易额",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.amount))])]}}])}),a("el-table-column",{attrs:{prop:"balance",label:"余额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.balance))])]}}])}),a("el-table-column",{attrs:{prop:"title",label:"账单类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.title))])]}}])}),a("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.state))])]}}])}),a("el-table-column",{attrs:{prop:"action",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.state&&e.row.toAddress?a("el-button",{attrs:{size:"small",type:"default"}},[t._v("取消提现")]):t._e()]}}])})],1),a("el-pagination",{staticClass:"text-center m-t-md",attrs:{background:"",layout:"prev, pager, next","page-size":t.dataPage.limit,"current-page":t.dataPage.page,total:t.dataPage.total},on:{"current-change":t.pageChange,"update:pageSize":function(e){return t.$set(t.dataPage,"limit",e)},"update:page-size":function(e){return t.$set(t.dataPage,"limit",e)},"update:currentPage":function(e){return t.$set(t.dataPage,"page",e)},"update:current-page":function(e){return t.$set(t.dataPage,"page",e)}}})],1)],1),a("IaFoot")],1)}),[],!1,null,"0504310f",null);e.default=d.exports},4265:function(t,e,a){"use strict";var n=a("58ec");a.n(n).a},"4d95":function(t,e,a){"use strict";var n=a("6a2a");a.n(n).a},"58ec":function(t,e,a){},"6a2a":function(t,e,a){},"8f8c":function(t,e,a){"use strict";var n=a("a230");a.n(n).a},a230:function(t,e,a){},b769:function(t,e,a){"use strict";var n={name:"subnav",props:{hasContainerProp:{default:!0},title:{type:String,default:""},navList:{type:Array,default:[]},value:{type:String,default:""}},data:function(){return{}},created:function(){},computed:{},methods:{menuSelect:function(t){this.$emit("input",t),this.$emit("change",t)}},watch:{}},s=(a("8f8c"),a("2877")),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"subnav-wrap"}},[a("div",{staticClass:"subnav bg-white"},[a("div",{staticClass:"container"},[a("div",{staticClass:"subnav-inner flex"},[t.title?a("div",{staticClass:"layout-logo"},[a("span",{staticClass:"title"},[t._v("\n                        "+t._s(t.title)+"\n                    ")])]):t._e(),a("div",{staticClass:"nav-right flex"},[a("el-menu",{staticClass:"sub-menu",attrs:{"default-active":t.value,mode:"horizontal"},on:{select:t.menuSelect}},t._l(t.navList,(function(e){return a("el-menu-item",{key:e.index,class:t.value==e.index?"active":"",attrs:{index:e.index}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])})),1),a("div",{staticClass:"flex"})],1)])])])])}),[],!1,null,"1e64ad06",null);e.a=i.exports},ca4c:function(t,e,a){"use strict";a("96cf");var n,s=a("1da1"),i={name:"IaHead",props:{hasContainerProp:{default:!1},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,this.$store.state.app.mainNav.length},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(t>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(t){this.$router.push(t)},mainMenuSelect:function(t){this.active=t},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(n=Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){var e=t.data;"200"==e.code?window.location.reload():alert(e.msg)})).catch((function(t){}))}},watch:{}},r=(a("4d95"),a("2877")),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-nav-fixed main-nav-dark",class:t.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[a("div",{staticClass:"fix-top"}),a("div",{staticClass:"main-nav"},[a("div",{class:{container:t.hasContainer}},[a("div",{staticClass:"main-nav-inner flex"},[a("div",{staticClass:"layout-logo",on:{click:function(e){return t.navTo("/")}}},[t.$store.state.app.siteInfo.logoTitle?a("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}}):t._e(),t.$store.state.app.siteInfo.logoTitle?t._e():a("span",{staticClass:"title"},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"\n                    ")]),a("span",{staticClass:"slogn"}),a("i",{class:t.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:t.chanView}})]),a("div",{staticClass:"nav-right flex",class:t.menuview},[a("el-menu",{staticClass:"main-menu",attrs:{"default-active":t.active,mode:"horizontal"},on:{select:t.mainMenuSelect}},[a("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/")}}},[t._v("\n                            一键买卖\n                        ")]),a("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/otc/market")}}},[t._v("\n                            交易市场\n                        ")]),t._l(t.$store.state.app.mainNav,(function(e){return a("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(a){return t.navTo("/"+e.name)}}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])}))],2),a("div",{staticClass:"flex"},[t.util.getStorageSync("token")?a("el-menu",{attrs:{mode:"horizontal"}},[a("el-submenu",{attrs:{index:"99"}},[a("template",{slot:"title"},[a("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:t.$store.state.user.userInfo.avatar}}),t._v("\n                                    "+t._s(t.$store.state.user.userInfo.nickname)+"\n                                ")],1),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/user/center")}}},[t._v("个人中心")]),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/coin/my")}}},[t._v("我的资产")]),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/otc/order/my")}}},[t._v("我的订单")]),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/otc/ad/my")}}},[t._v("广告管理")]),a("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)],1):[a("el-menu",{attrs:{mode:"horizontal"}},[a("el-menu-item",[a("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/login")}}},[t._v("登录")]),a("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/register")}}},[t._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"75ed756f",null);e.a=o.exports},f3c6:function(t,e,a){"use strict";var n={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},s=(a("4265"),a("2877")),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("el-row",{staticClass:"foot-info",attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[a("div",{staticClass:"line1"},[t._v("官方邮箱 "),a("span",{staticClass:"value"},[t._v(t._s(t.$store.state.app.siteInfo.iconfig?t.$store.state.app.siteInfo.iconfig.email[0]:""))])]),a("div",[t._v("官方微信"),a("span",{staticClass:"value"},[t._v(t._s(t.$store.state.app.siteInfo.iconfig?t.$store.state.app.siteInfo.iconfig.wxid:""))])])]),a("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[a("div",{staticClass:"nav-list"},[a("router-link",{attrs:{to:"/agreement/隐私条款"}},[t._v("\n                        隐私条款\n                    ")]),a("router-link",{attrs:{to:"/post/help"}},[t._v("\n                        常见问题\n                    ")]),a("router-link",{attrs:{to:"/post/standard"}},[t._v("\n                        费率标准\n                    ")]),a("router-link",{attrs:{to:"/post/about"}},[t._v("\n                        关于我们\n                    ")]),a("router-link",{attrs:{to:"/post/about"}},[t._v("\n                        申请商家\n                    ")])],1)])],1),a("el-row",{staticClass:"footer-bottom",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",[t._v("\n                "+t._s(t.$store.state.app.siteInfo.copyright)+"\n                 "),t.$store.state.app.siteInfo.icp?a("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))]):t._e()])])],1)])}),[],!1,null,"4c9f66d1",null);e.a=i.exports}}]);