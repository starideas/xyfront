(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e75a2472"],{"0ed2":function(t,e,i){},"11dc":function(t,e,i){"use strict";var s=i("3f0c");i.n(s).a},"3f0c":function(t,e,i){},"661d":function(t,e,i){"use strict";var s=i("b567");i.n(s).a},8433:function(t,e,i){},ae4f:function(t,e,i){"use strict";var s=i("8433");i.n(s).a},b567:function(t,e,i){},ca4c:function(t,e,i){"use strict";i("96cf");var s,n=i("1da1"),a={name:"IaHead",props:{hasContainerProp:{default:!0},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,0==this.$store.state.app.mainNav.length&&this.loadData(),600<Date.parse(new Date)/1e3-this.$store.state.app.updateTime&&(this.loadData(),this.$store.commit("app/setData",{key:"updateTime",value:Date.parse(new Date)/1e3}))},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(t>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(t){this.$router.push(t)},mainMenuSelect:function(t){this.active=t,this.$store.commit("app/setData",{key:"currentNav",value:t})},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(s=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){var e=t.data;"200"==e.code||alert(e.msg)})).catch((function(t){}))}},watch:{}},r=(i("ae4f"),i("2877")),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-nav-fixed main-nav-dark",class:t.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[i("div",{staticClass:"fix-top"}),i("div",{staticClass:"main-nav"},[i("div",{staticClass:"main-nav-inner",class:{container:t.hasContainer}},[i("div",{staticClass:"flex"},[i("div",{staticClass:"layout-logo",on:{click:function(e){return t.navTo("/")}}},[t.$store.state.app.siteInfo.logoTitle?i("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}}):t._e(),t.$store.state.app.siteInfo.logoTitle?t._e():i("span",{staticClass:"title text-primary tw7"},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"\n                    ")]),i("span",{staticClass:"slogn"}),i("i",{staticClass:"hidden-sm-and-up",class:t.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:t.chanView}})]),i("div",{staticClass:"nav-right flex",class:t.menuview},[i("el-menu",{staticClass:"main-menu",attrs:{"default-active":t.active,mode:"horizontal"},on:{select:t.mainMenuSelect}},[i("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/")}}},[t._v("\n                            首页\n                        ")]),t._l(t.$store.state.app.mainNav,(function(e){return[0==e.isHide?i("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(i){return t.navTo("/"+e.name)}}},[t._v("\n                                "+t._s(e.title)+"\n                            ")]):t._e()]}))],2),i("div",{staticClass:"flex flex-alignCenter"},[i("div",{staticClass:"m-r-lg"},[i("el-input",{attrs:{size:"medium",placeholder:"请输入搜索关键词","suffix-icon":"el-icon-search"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t.util.getStorageSync("token")?i("el-menu",{attrs:{mode:"horizontal"}},[i("el-submenu",{attrs:{index:"99"}},[i("template",{slot:"title"},[i("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:t.$store.state.user.userInfo.avatar}}),t._v("\n                                    "+t._s(t.$store.state.user.userInfo.nickname)+"\n                                ")],1),i("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/user/center")}}},[t._v("个人中心")]),i("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)],1):[i("el-menu",{attrs:{mode:"horizontal"}},[i("el-menu-item",[i("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/login")}}},[t._v("登录")]),i("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/register")}}},[t._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"d3fb1238",null);e.a=o.exports},e6a0:function(t,e,i){"use strict";var s=i("0ed2");i.n(s).a},eea6:function(t,e,i){"use strict";i.r(e);var s=i("ca4c"),n=i("f3c6"),a={name:"XyBuilderPage",components:{},props:{data:""},data:function(){return{}},created:function(){},beforeMount:function(){},mounted:function(){},activated:function(){},deativated:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},computed:{},watch:{},methods:{}},r=(i("e6a0"),i("2877")),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-wrapper"},[t._l(t.data,(function(e,s){return["banner"==e.type?i("div",{key:s},[i("div",{staticClass:"banner-instalce",style:{background:e.background,backgroundSize:"100% 100%"}},[i("div",{staticClass:"container flex space-between flex-alignCenter",style:{height:e.height}},[i("div",{staticClass:"tc-w"},[i("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[i("el-col",{attrs:{sm:24,md:18,xl:14}},[i("div",{staticClass:"m-b title ts-36"},[t._v(t._s(e.title))]),e.subtitle?i("div",{staticClass:"m-b subtitle"},[t._v(t._s(e.subtitle))]):t._e(),e.description?i("div",{staticClass:"m-b-md ts-14 description"},[t._v(t._s(e.description))]):t._e(),e.actions?i("div",{},t._l(e.actions,(function(e,s){return i("el-button",{key:s,attrs:{size:e.size,plain:e.plain,round:e.round,type:e.type},on:{click:function(i){return t.util.navigateTo({url:e.url})}}},[t._v("\n                                        "+t._s(e.label)+"\n                                    ")])})),1):t._e()]),i("el-col",{attrs:{sm:24,md:6,xl:10}})],1)],1),i("div")])])]):"slider"==e.type?i("div",{key:s},[i("el-carousel",{attrs:{height:e.height,interval:5e3,arrow:"always"}},[i("el-carousel-item")],1)],1):"session1"==e.type?i("div",{key:s},[i("div",{staticClass:"bg-white"},[i("div",{staticClass:"container"},[i("el-row",{staticStyle:{padding:"50px"},attrs:{type:"flex",justify:"center",align:"middle"}},[i("el-col",{staticStyle:{"text-align":"center","font-size":"20px","margin-bottom":"80px"},attrs:{span:16}},[i("div",{staticStyle:{width:"550px"}},[i("h3",[t._v(t._s(e.title))]),i("p",{staticStyle:{"font-size":"16px"}},[t._v("\n                                    "+t._s(e.description)+"\n                                ")])])]),i("el-col",{attrs:{span:8}},[i("img",{staticStyle:{height:"200px"},attrs:{src:e.image}})])],1)],1)])]):"session2"==e.type?i("div",{key:s},[i("div",{staticClass:"session2 flex flex-column flex-center flex-alignCenter",style:{height:e.height,background:e.background}},[i("div",{staticClass:"container"},[e.title?i("div",{staticClass:"text-center m-b tw5 ts-32"},[t._v(t._s(e.title))]):t._e(),e.description?i("div",{staticClass:"text-center m-b-lg"},[t._v(t._s(e.description))]):t._e(),e.list?i("div",{staticClass:"list flex space-around"},t._l(e.list,(function(s,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"text-center m-b"},[i("img",{attrs:{src:e.image?e.image:"https://i.loli.net/2020/07/08/1HlwfyUQ5zjr4Tg.png"}})]),i("div",{staticClass:"title text-center ts-16 tw6 m-b-sm"},[t._v(t._s(s.title))]),i("div",{staticClass:"title text-center ts-14"},[t._v(t._s(s.description))])])})),0):t._e()])])]):"session3"==e.type?i("div",{key:s},[i("div",{staticClass:"session3 flex flex-column flex-center flex-alignCenter",style:{height:e.height,background:e.background}},[i("div",{staticClass:"container",class:e.background?"tc-w":""},[e.title?i("div",{staticClass:"text-center m-b tw5 ts-32"},[t._v(t._s(e.title))]):t._e(),e.description?i("div",{staticClass:"text-center m-b-lg"},[t._v(t._s(e.description))]):t._e(),e.list?i("div",{staticClass:"list flex space-around flex-wrap"},t._l(e.list,(function(s,n){return i("div",{key:n,staticClass:"item m-b-lg"},[i("div",{staticClass:"text-center m-b"},[i("img",{attrs:{src:e.image?e.image:"https://i.loli.net/2020/07/08/1HlwfyUQ5zjr4Tg.png"}})]),i("div",{staticClass:"title text-center ts-16 tw6 m-b-sm"},[t._v(t._s(s.title))]),i("div",{staticClass:"title text-center ts-12"},[t._v(t._s(s.description))])])})),0):t._e()])])]):t._e()]}))],2)}),[],!1,null,"2cff3356",null).exports,l={components:{IaHead:s.a,IaFoot:n.a,XyBuilderPage:o},data:function(){return{homeJson:[{type:"banner",background:"#2b85e4 url() no-repeat",height:"650px",contentImgs:[],title:"UniAdmin渐进式模块化开源后台",subTitle:"",description:"UniAdmin是一套渐进式模块化开源后台，采用前后端分离技术，数据交互采用json格式，功能低耦合高内聚；核心模块支持系统设置、权限管理、用户管理、菜单管理、API管理等功能，模块市场；同时我们将打造一套兼容性的API标准，从ThinkPHP5.1+Vue2开始，逐步覆盖spring-boot、eggjs等多语言框架。",actions:[{url:"https://gitee.com/jry/uniadmin",type:"warning",label:"立即下载",size:"medium",plain:!1,round:!0},{url:"https://github.com/ijry/uniadmin",type:"info",label:"Github",size:"medium",plain:!1,round:!0},{url:"https://gitee.com/jry/uniadmin",type:"success",label:"码云",size:"medium",plain:!1,round:!0}]},{type:"session2",height:"560px",title:"为什么选择我们",description:"成千上万的个人和企业都选择了UniAdmin",list:[{image:"",title:"开源免费",description:"无需授权即可商业使用，代码开源免费。"},{image:"",title:"开发快捷",description:"基于自主研发的模块化技术、第二代前后端分离Builder可以非常便捷的开发出您的应用。"},{image:"",title:"生态良好",description:"立足PHP、全面兼容java/.net/nodejs等其他语言，社区小伙伴都非常热心的互相帮助。"}]},{type:"session3",height:"750px",background:"url(https://web.starideas.net//theme/icms-web/core/public/img/bg27.jpg)",title:"优秀特性",description:"利用下面的优秀特性加速您的开发",list:[{image:"",title:"模块化",description:"模块作为一个最小功能包，可以被创建、导出、分发、安装。"},{image:"",title:"Builder构建",description:"基于自主研发的第二代(vue+cloud)Builder页面构建技术可以非常快速高效的构建后台页面，支持list、form、info、tab、stack、excel等。"},{image:"",title:"跨语言兼容",description:"将来迁移语言非常方便，php、java、python、node、.net等都可以支持，前端更是不限制语言，多个语言支持通过统一的API标准兼容"},{image:"",title:"权限管理",description:"基于完善的自建权限控制管理、无限父子级权限分组、可自由分配子级权限、一个管理员可同时属于多个组别"},{image:"",title:"全API开发",description:"前后台全部基于API分离式开发，后台也可以基于API开发客户端，同时拥有双路由机制，也支持前后端不分离传统式开发。"},{image:"",title:"多平台支持",description:"pc端采用vue等方式实现，手机端采用uni-app技术， 达到一次开发全面覆盖iOS、安卓、微信小程序、支 付宝小程序、百度小程序、头条小程序、H5等平台。"}]},{type:"session2",height:"360px",list:[{image:"",description:"UniAdmin帮助我们节省了大量开发成本，项目顺利上线！"},{image:"",description:"UniAdmin的API接口文档后台填写，自动生成前端开发用的文档功能真的解放了生产力很好用。"},{image:"",description:"UniAdmin的动态页面Builder技术很好用，只要一个人就能完成后台所有工作！"}]}]}},created:function(){},methods:{}},c=(i("661d"),Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap",attrs:{id:"wrap"}},[e("IaHead",{attrs:{transparent:!0}}),e("div",{staticClass:"main"},[e("XyBuilderPage",{attrs:{data:this.homeJson}})],1),e("IaFoot")],1)}),[],!1,null,"5792ae8f",null));e.default=c.exports},f3c6:function(t,e,i){"use strict";var s={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},n=(i("11dc"),i("2877")),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"foot-info"},[i("div",{staticClass:"container"},[i("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[i("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[i("div",{staticClass:"line1"},[t._v("官方邮箱 "),i("span",{staticClass:"value"},[t._v("ijry@qq.com")])]),i("div",[t._v("官方微信"),i("span",{staticClass:"value"},[t._v("--")])])]),i("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[i("div",{staticClass:"nav-list"},[i("router-link",{attrs:{to:"/agreement/用户协议"}},[t._v("\n                            用户协议\n                        ")]),i("router-link",{attrs:{to:"/agreement/隐私条款"}},[t._v("\n                            隐私条款\n                        ")]),i("router-link",{attrs:{to:"/post/help"}},[t._v("\n                            常见问题\n                        ")]),i("router-link",{attrs:{to:"/post/about"}},[t._v("\n                            关于我们\n                        ")])],1)])],1)],1)]),i("div",{staticClass:"footer-bottom"},[i("div",{staticClass:"container"},[i("el-row",{staticClass:"inner",attrs:{type:"flex",justify:"center",align:"middle"}},[i("div",[t._v("\n                    "+t._s(t.$store.state.app.siteInfo.copyright)+"\n                    "),t.$store.state.app.siteInfo.icp?i("a",{staticClass:"m-l",attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))]):t._e()])])],1)])])}),[],!1,null,"25519170",null);e.a=a.exports}}]);