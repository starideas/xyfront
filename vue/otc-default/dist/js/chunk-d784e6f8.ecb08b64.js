(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d784e6f8"],{4265:function(t,e,a){"use strict";var s=a("58ec");a.n(s).a},"4d95":function(t,e,a){"use strict";var s=a("6a2a");a.n(s).a},"58ec":function(t,e,a){},"6a2a":function(t,e,a){},"6edf":function(t,e,a){"use strict";a.r(e),a("96cf");var s,n=a("1da1"),i=a("ca4c"),o=a("f3c6"),r=a("b769"),l={components:{IaHead:i.a,IaFoot:o.a,subnav:r.a},data:function(){return{tab:"ing",dataList:[],dataList2:[]}},created:function(){this.loadData()},methods:{handleClick:function(){switch(this.tab){case"ing":this.loadData("0,1");break;case"done":this.loadData("-1,2")}},loadData:(s=Object(n.a)(regeneratorRuntime.mark((function t(){var e,a,s=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=0<s.length&&void 0!==s[0]?s[0]:"0,1",t.next=3,this.util.request({url:"/v1/coin_otc/ad/my",data:{state:e},method:"get"});case 3:200==(a=t.sent).code?"0,1"==e?this.dataList=a.data.dataList:"-1,2"==e&&(this.dataList2=a.data.dataList):this.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 5:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})}},c=a("2877"),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("IaHead"),a("div",{staticClass:"main"},[a("subnav",{attrs:{title:"广告管理"}}),a("div",{staticClass:"container p-t"},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("el-tab-pane",{attrs:{label:"进行中",name:"ing"}},[a("el-table",{staticClass:"m-t-xs",staticStyle:{width:"100%"},attrs:{data:t.dataList}},[a("el-table-column",{attrs:{prop:"id",label:"编号/时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.id))]),a("div",{staticClass:"font-sm"},[t._v(t._s(t._f("formatTime")(e.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.row.type,expression:"scope.row.type == 1"}]},[t._v("购买")]),a("span",{directives:[{name:"show",rawName:"v-show",value:2==e.row.type,expression:"scope.row.type == 2"}]},[t._v("出售")])]}}])}),a("el-table-column",{attrs:{prop:"type",label:"币种",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.coinInfo.symbol))])]}}])}),a("el-table-column",{attrs:{prop:"price",label:"价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"price"},[t._v(t._s(e.row.price))]),a("span",{staticClass:"price m-l-sm"},[t._v("CNY")])]}}])}),a("el-table-column",{attrs:{prop:"amount",label:"已成交/预计成交"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.tradeAmount))]),t._v("\n                                /\n                                "),a("span",{staticClass:"m-l-sm"},[t._v(t._s(e.row.amount))])]}}])}),a("el-table-column",{attrs:{prop:"paytype",label:"付款方式"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("i",{directives:[{name:"show",rawName:"v-show",value:t.row.alipay,expression:"scope.row.alipay"}],staticClass:"xyicon xyicon-alipay m-r-xs",staticStyle:{color:"#4C88FE"}}),a("i",{directives:[{name:"show",rawName:"v-show",value:t.row.wxpay,expression:"scope.row.wxpay"}],staticClass:"xyicon xyicon-wxpay m-r-xs",staticStyle:{color:"#00C901"}}),a("i",{directives:[{name:"show",rawName:"v-show",value:t.row.bank,expression:"scope.row.bank"}],staticClass:"xyicon xyicon-card",staticStyle:{color:"#F7BA2A"}})]}}])}),a("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.stateFormat.title))])]}}])}),a("el-table-column",{attrs:{prop:"action",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"default"}},[t._v("下架")])]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"已完成",name:"done"}},[a("el-table",{staticClass:"m-t-xs",staticStyle:{width:"100%"},attrs:{data:t.dataList2}},[a("el-table-column",{attrs:{prop:"id",label:"编号/时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.id))]),a("div",{staticClass:"font-sm"},[t._v(t._s(t._f("formatTime")(e.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.row.type,expression:"scope.row.type == 1"}]},[t._v("购买")]),a("span",{directives:[{name:"show",rawName:"v-show",value:2==e.row.type,expression:"scope.row.type == 2"}]},[t._v("出售")])]}}])}),a("el-table-column",{attrs:{prop:"type",label:"币种",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.coinInfo.symbol))])]}}])}),a("el-table-column",{attrs:{prop:"price",label:"价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"price"},[t._v(t._s(e.row.price))]),a("span",{staticClass:"price m-l-sm"},[t._v("CNY")])]}}])}),a("el-table-column",{attrs:{prop:"amount",label:"已成交/预计成交"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.tradeAmount))]),t._v("\n                                /\n                                "),a("span",{staticClass:"m-l-sm"},[t._v(t._s(e.row.amount))])]}}])}),a("el-table-column",{attrs:{prop:"paytype",label:"付款方式"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("i",{directives:[{name:"show",rawName:"v-show",value:t.row.alipay,expression:"scope.row.alipay"}],staticClass:"xyicon xyicon-alipay m-r-xs",staticStyle:{color:"#4C88FE"}}),a("i",{directives:[{name:"show",rawName:"v-show",value:t.row.wxpay,expression:"scope.row.wxpay"}],staticClass:"xyicon xyicon-wxpay m-r-xs",staticStyle:{color:"#00C901"}}),a("i",{directives:[{name:"show",rawName:"v-show",value:t.row.bank,expression:"scope.row.bank"}],staticClass:"xyicon xyicon-card",staticStyle:{color:"#F7BA2A"}})]}}])}),a("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.stateFormat.title))])]}}])}),a("el-table-column",{attrs:{prop:"action",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(t){}}])})],1)],1)],1)],1)],1),a("IaFoot")],1)}),[],!1,null,"732373e9",null);e.default=u.exports},8054:function(t,e,a){},b769:function(t,e,a){"use strict";var s={name:"subnav",props:{hasContainerProp:{default:!0},title:{type:String,default:""},navList:{type:Array,default:function(){return[]}},value:{type:String,default:""}},data:function(){return{}},created:function(){},computed:{},methods:{menuSelect:function(t){this.$emit("input",t),this.$emit("change",t)}},watch:{}},n=(a("e6e9"),a("2877")),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"subnav-wrap"}},[a("div",{staticClass:"subnav bg-white"},[a("div",{staticClass:"container"},[a("div",{staticClass:"subnav-inner flex"},[t.title?a("div",{staticClass:"layout-logo"},[a("span",{staticClass:"title"},[t._v("\n                        "+t._s(t.title)+"\n                    ")])]):t._e(),a("div",{staticClass:"nav-right flex"},[a("el-menu",{staticClass:"sub-menu",attrs:{"default-active":t.value,mode:"horizontal"},on:{select:t.menuSelect}},t._l(t.navList,(function(e){return a("el-menu-item",{key:e.index,class:t.value==e.index?"active":"",attrs:{index:e.index}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])})),1),a("div",{staticClass:"flex"})],1)])])])])}),[],!1,null,"76614b60",null);e.a=i.exports},ca4c:function(t,e,a){"use strict";a("96cf");var s,n=a("1da1"),i={name:"IaHead",props:{hasContainerProp:{default:!1},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,this.$store.state.app.mainNav.length},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(t>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(t){this.$router.push(t)},mainMenuSelect:function(t){this.active=t},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(s=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){var e=t.data;"200"==e.code?window.location.reload():alert(e.msg)})).catch((function(t){}))}},watch:{}},o=(a("4d95"),a("2877")),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-nav-fixed main-nav-dark",class:t.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[a("div",{staticClass:"fix-top"}),a("div",{staticClass:"main-nav"},[a("div",{class:{container:t.hasContainer}},[a("div",{staticClass:"main-nav-inner flex"},[a("div",{staticClass:"layout-logo",on:{click:function(e){return t.navTo("/")}}},[t.$store.state.app.siteInfo.logoTitle?a("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}}):t._e(),t.$store.state.app.siteInfo.logoTitle?t._e():a("span",{staticClass:"title"},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"\n                    ")]),a("span",{staticClass:"slogn"}),a("i",{class:t.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:t.chanView}})]),a("div",{staticClass:"nav-right flex",class:t.menuview},[a("el-menu",{staticClass:"main-menu",attrs:{"default-active":t.active,mode:"horizontal"},on:{select:t.mainMenuSelect}},[a("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/")}}},[t._v("\n                            一键买卖\n                        ")]),a("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/otc/market")}}},[t._v("\n                            交易市场\n                        ")]),t._l(t.$store.state.app.mainNav,(function(e){return a("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(a){return t.navTo("/"+e.name)}}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])}))],2),a("div",{staticClass:"flex"},[t.util.getStorageSync("token")?a("el-menu",{attrs:{mode:"horizontal"}},[a("el-submenu",{attrs:{index:"99"}},[a("template",{slot:"title"},[a("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:t.$store.state.user.userInfo.avatar}}),t._v("\n                                    "+t._s(t.$store.state.user.userInfo.nickname)+"\n                                ")],1),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/user/center")}}},[t._v("个人中心")]),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/coin/my")}}},[t._v("我的资产")]),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/otc/order/my")}}},[t._v("我的订单")]),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/otc/ad/my")}}},[t._v("广告管理")]),a("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)],1):[a("el-menu",{attrs:{mode:"horizontal"}},[a("el-menu-item",[a("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/login")}}},[t._v("登录")]),a("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/register")}}},[t._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"75ed756f",null);e.a=r.exports},e6e9:function(t,e,a){"use strict";var s=a("8054");a.n(s).a},f3c6:function(t,e,a){"use strict";var s={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},n=(a("4265"),a("2877")),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("el-row",{staticClass:"foot-info",attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[a("div",{staticClass:"line1"},[t._v("官方邮箱 "),a("span",{staticClass:"value"},[t._v(t._s(t.$store.state.app.siteInfo.iconfig?t.$store.state.app.siteInfo.iconfig.email[0]:""))])]),a("div",[t._v("官方微信"),a("span",{staticClass:"value"},[t._v(t._s(t.$store.state.app.siteInfo.iconfig?t.$store.state.app.siteInfo.iconfig.wxid:""))])])]),a("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[a("div",{staticClass:"nav-list"},[a("router-link",{attrs:{to:"/agreement/隐私条款"}},[t._v("\n                        隐私条款\n                    ")]),a("router-link",{attrs:{to:"/post/help"}},[t._v("\n                        常见问题\n                    ")]),a("router-link",{attrs:{to:"/post/standard"}},[t._v("\n                        费率标准\n                    ")]),a("router-link",{attrs:{to:"/post/about"}},[t._v("\n                        关于我们\n                    ")]),a("router-link",{attrs:{to:"/post/about"}},[t._v("\n                        申请商家\n                    ")])],1)])],1),a("el-row",{staticClass:"footer-bottom",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",[t._v("\n                "+t._s(t.$store.state.app.siteInfo.copyright)+"\n                 "),t.$store.state.app.siteInfo.icp?a("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))]):t._e()])])],1)])}),[],!1,null,"4c9f66d1",null);e.a=i.exports}}]);