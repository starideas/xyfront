(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-51bb940f"],{"11dc":function(t,e,a){"use strict";var n=a("3f0c");a.n(n).a},"3f0c":function(t,e,a){},"417c":function(t,e,a){},"5c03":function(t,e,a){"use strict";a("96cf");var n,s=a("1da1"),i=(a("c5f6"),{name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:(n=Object(s.a)(regeneratorRuntime.mark((function t(){var e,a,n,s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0<this.timeLeft)return t.abrupt("return");t.next=2;break;case 2:if(this.account||this.noNeedAccount){t.next=5;break}return this.util.showToast({title:"请输入"+this.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return this.timeLeft=this.time,this.label="剩余"+this.timeLeft+"s",e=setInterval((function(){s.timeLeft--,s.timeLeft<=0?(s.label="发送验证码",s.timeLeft=0,clearInterval(e)):s.label="剩余"+s.timeLeft+"s"}),1e3),a={},a="手机号"==this.type?{mobile:this.account,title:this.title}:{email:this.account,title:this.title},t.next=12,this.util.request({url:this.url,data:a,method:"post"});case 12:"200"==(n=t.sent).code?(this.util.showToast({title:n.msg,icon:"success",duration:1e3}),this.$emit("verifysuccess",n.data)):this.util.showToast({title:n.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}}),r=a("2877"),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send-verify p-l-xs p-r-xs"},[a("el-button",{attrs:{type:"text"},on:{click:t.sendVerify}},[t._v(t._s(t.label))])],1)}),[],!1,null,"0372c606",null);e.a=o.exports},aa77:function(t,e,a){function n(t,e,a){var n={},i=r((function(){return!!o[t]()||"​"!="​"[t]()})),l=n[t]=i?e(f):o[t];a&&(n[a]=l),s(s.P+s.F*i,"String",n)}var s=a("5ca1"),i=a("be13"),r=a("79e5"),o=a("fdef"),l="["+o+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),f=n.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=n},b86c:function(t,e,a){"use strict";var n=a("417c");a.n(n).a},c5f6:function(t,e,a){"use strict";function n(t){var e=l(t,!1);if("string"==typeof e&&2<e.length){var a,n,s,i=(e=w?e.trim():m(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+e}for(var r,o=e.slice(2),c=0,u=o.length;c<u;c++)if((r=o.charCodeAt(c))<48||s<r)return NaN;return parseInt(o,n)}}return+e}var s=a("7726"),i=a("69a8"),r=a("2d95"),o=a("5dbc"),l=a("6a99"),c=a("79e5"),u=a("9093").f,f=a("11e9").f,d=a("86cc").f,m=a("aa77").trim,p="Number",h=s[p],v=h,g=h.prototype,y=r(a("2aeb")(g))==p,w="trim"in String.prototype;if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof h&&(y?c((function(){g.valueOf.call(a)})):r(a)!=p)?o(new v(n(e)),a,h):n(e)};for(var b,x=a("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;x.length>C;C++)i(v,b=x[C])&&!i(h,b)&&d(h,b,f(v,b));(h.prototype=g).constructor=h,a("2aba")(s,p,h)}},ca4c:function(t,e,a){"use strict";a("96cf");var n,s=a("1da1"),i={name:"IaHead",props:{hasContainerProp:{default:!0},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,0==this.$store.state.app.mainNav.length&&this.loadData(),600<Date.parse(new Date)/1e3-this.$store.state.app.updateTime&&(this.loadData(),this.$store.commit("app/setData",{key:"updateTime",value:Date.parse(new Date)/1e3}))},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(t>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(t){this.$router.push(t)},mainMenuSelect:function(t){this.active=t,this.$store.commit("app/setData",{key:"currentNav",value:t})},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(n=Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){var e=t.data;"200"==e.code||alert(e.msg)})).catch((function(t){}))}},watch:{}},r=(a("b86c"),a("2877")),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-nav-fixed main-nav-dark",class:t.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[a("div",{staticClass:"fix-top"}),a("div",{staticClass:"main-nav"},[a("div",{staticClass:"main-nav-inner",class:{container:t.hasContainer}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"layout-logo",on:{click:function(e){return t.navTo("/")}}},[t.$store.state.app.siteInfo.logoTitle?a("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}}):t._e(),t.$store.state.app.siteInfo.logoTitle?t._e():a("span",{staticClass:"title text-primary tw7"},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"\n                    ")]),a("span",{staticClass:"slogn"}),a("i",{staticClass:"hidden-sm-and-up",class:t.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:t.chanView}})]),a("div",{staticClass:"nav-right flex",class:t.menuview},[a("el-menu",{staticClass:"main-menu",attrs:{"default-active":t.active,mode:"horizontal"},on:{select:t.mainMenuSelect}},[a("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/")}}},[t._v("\n                            首页\n                        ")]),t._l(t.$store.state.app.mainNav,(function(e){return[0==e.isHide?a("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(a){return t.navTo("/"+e.name)}}},[t._v("\n                                "+t._s(e.title)+"\n                            ")]):t._e()]}))],2),a("div",{staticClass:"flex flex-alignCenter"},[a("div",{staticClass:"m-r-lg"},[a("el-input",{attrs:{size:"medium",placeholder:"请输入搜索关键词","suffix-icon":"el-icon-search"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t.util.getStorageSync("token")?a("el-menu",{attrs:{mode:"horizontal"}},[a("el-submenu",{attrs:{index:"99"}},[a("template",{slot:"title"},[a("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:t.$store.state.user.userInfo.avatar}}),t._v("\n                                    "+t._s(t.$store.state.user.userInfo.nickname)+"\n                                ")],1),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/user/center")}}},[t._v("个人中心")]),a("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)],1):[a("el-menu",{attrs:{mode:"horizontal"}},[a("el-menu-item",[a("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/login")}}},[t._v("登录")]),a("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/register")}}},[t._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"66d2813b",null);e.a=o.exports},d551:function(t,e,a){"use strict";a.r(e),a("96cf");var n,s=a("1da1"),i=a("ca4c"),r=a("f3c6"),o=a("5c03"),l=a("c276"),c={components:{IaHead:i.a,IaFoot:r.a,XySendVerify:o.a},data:function(){return{loading:!1,form:{email:"",newPassword:"",verify:"",token:""},rule:{email:[{required:!0,message:"请填写邮箱",trigger:"blur"}],password:[{required:!0,message:"请填写新密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){this.$route.query.account&&(this.form.email=this.$route.query.account)},methods:{getVerifyToken:function(t){this.form.token=t},handleSubmit:(n=Object(s.a)(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e=this,setTimeout((function(){e.loading=!1}),5e3),t.next=5,l.a.request({url:"/v1/reg_email/user/restPassword",data:this.form,method:"post"});case 5:"200"==(a=t.sent).code?(this.util.showToast({title:a.msg,icon:"success",duration:2e3}),this.$router.push("/")):this.util.showToast({title:a.msg,icon:"loading",duration:3e3}),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},u=a("2877"),f=Object(u.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap",attrs:{id:"wrap"}},[a("IaHead"),a("div",{staticClass:"main"},[a("div",{staticClass:"container",staticStyle:{"padding-top":"10%"}},[a("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[a("div",{staticClass:"title"},[t._v("\n                        邮箱重置密码\n                    ")]),a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[a("el-form-item",{attrs:{prop:"email"}},[a("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"邮箱"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("el-form-item",{attrs:{prop:"verify"}},[a("el-input",{attrs:{size:"large",type:"text",prefix:"ios-lock-outline",placeholder:"验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}},[a("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",account:t.form.email,title:"重置密码"},on:{verifysuccess:t.getVerifyToken},slot:"append"})],1)],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"新密码"},model:{value:t.form.newPassword,callback:function(e){t.$set(t.form,"newPassword",e)},expression:"form.newPassword"}})],1),a("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:t.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("form")}}},[t._v("\n                            立即重置\n                        ")])],1)],1)],1)],1)]),a("IaFoot")],1)}),[],!1,null,"b227b8a6",null);e.default=f.exports},f3c6:function(t,e,a){"use strict";var n={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},s=(a("11dc"),a("2877")),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"foot-info"},[a("div",{staticClass:"container"},[a("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[a("div",{staticClass:"line1"},[t._v("官方邮箱 "),a("span",{staticClass:"value"},[t._v("ijry@qq.com")])]),a("div",[t._v("官方微信"),a("span",{staticClass:"value"},[t._v("--")])])]),a("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[a("div",{staticClass:"nav-list"},[a("router-link",{attrs:{to:"/agreement/用户协议"}},[t._v("\n                            用户协议\n                        ")]),a("router-link",{attrs:{to:"/agreement/隐私条款"}},[t._v("\n                            隐私条款\n                        ")]),a("router-link",{attrs:{to:"/post/help"}},[t._v("\n                            常见问题\n                        ")]),a("router-link",{attrs:{to:"/post/about"}},[t._v("\n                            关于我们\n                        ")])],1)])],1)],1)]),a("div",{staticClass:"footer-bottom"},[a("div",{staticClass:"container"},[a("el-row",{staticClass:"inner",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",[t._v("\n                    "+t._s(t.$store.state.app.siteInfo.copyright)+"\n                    "),t.$store.state.app.siteInfo.icp?a("a",{staticClass:"m-l",attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))]):t._e()])])],1)])])}),[],!1,null,"25519170",null);e.a=i.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);