(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3505bf04"],{2212:function(t,e,a){},3316:function(t,e,a){"use strict";a.r(e),a("96cf");var n=a("c964"),i=a("ca4c"),r=a("f3c6"),s=(a("c975"),a("a434"),a("b0c0"),a("d3b7"),{name:"File",props:{item:{},value:[],token:"",cloud_id:0,eid:0},data:function(){return{}},created:function(){""==this.item.value&&(this.item.value=new Array),""==this.value&&(this.value=new Array)},beforeMount:function(){},methods:{handleView:function(){},handleSuccessBatch:function(t,e,a){"oss"==this.item.extra.driver?(e.url=this.item.extra.data.host+"/"+this.item.extra.data.key,this.value.push({name:e.name,url:e.url}),this.item.value=a):200==t.code?(this.value.push({name:e.name,path:t.data.path,url:t.data.url}),this.item.value=a):this.$Notice.warning({title:t.msg}),this.$emit("input",this.value),this.$emit("on-success",this.value)},handleRemoveBatch:function(t){var e=this.value;this.item.value.splice(e.indexOf(t),1),this.value.splice(e.indexOf(t),1)},handleBeforeUpload:function(t){var e=this;if("oss"==e.item.extra.driver)return new Promise(function(){var a=Object(n.a)(regeneratorRuntime.mark((function a(n,i){var r;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.util.request({url:"/v1/upload_oss/index/sign",method:"get",header:{CloudId:e.cloud_id,Eid:e.eid}});case 2:200==(r=a.sent).code?(e.item.extra.action=r.data.params.host,r.data.params.key=r.data.params.key+t.name,e.item.extra.data=r.data.params,n()):e.$Notice.warning({title:r.msg});case 4:case"end":return a.stop()}}),a)})));return function(t,e){return a.apply(this,arguments)}}())},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件"+t.name+"的格式不正确, 请重新选择。"})},handleMaxSize:function(t){this.$Notice.warning({title:"文件大小不正确",desc:"文件"+t.name+"太大了, 不支持超过1M。"})}},watch:{}}),o=a("0c7c"),c=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Upload",{ref:"upload_"+t.item.name,attrs:{"show-upload-list":!0,headers:{Authorization:t.token},"default-file-list":t.item.value,format:t.item.extra.format,"max-size":t.item.extra.maxSize,"on-success":t.handleSuccessBatch,"on-remove":t.handleRemoveBatch,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,data:t.item.extra.data?t.item.extra.data:"",type:"drag",action:t.item.extra.action}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"42"}}),a("p",[t._v("点击或者拖动文件到此处上传")])],1)])],1)}),[],!1,null,null,null).exports,u={components:{IaHead:i.a,IaFoot:r.a,File:c},watch:{$route:function(){}},data:function(){return{item:{name:"upload_app",value:[],extra:{driver:"",action:this.util.baseUrl()+"/v1/core/index/upload",format:["ipa","apk"],maxSize:51200}},ret:[]}},created:function(){},methods:{success:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,e.util.request({url:"/v1/itest/app/add",method:"post",data:t[0]});case 3:200==(n=a.sent).code?e.util.navigateTo({url:n.data.route}):e.$Message.error(n.msg);case 5:case"end":return a.stop()}}),a)})))()}}},l=Object(o.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("IaHead"),a("div",{staticClass:"body"},[t._m(0),a("div",{staticClass:"container"},[a("File",{attrs:{token:t.util.getStorageSync("token"),item:t.item},on:{"on-success":t.success},model:{value:t.ret,callback:function(e){t.ret=e},expression:"ret"}})],1)]),a("IaFoot")],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-banner"},[a("h1",{staticClass:"title"},[t._v("上传")]),a("p",{staticClass:"info"},[t._v(" 只能上传ipa和apk文件 ")])])}],!1,null,"47a12398",null);e.default=l.exports},"6f7b":function(t,e,a){},a434:function(t,e,a){"use strict";var n=a("23e7"),i=a("23cb"),r=a("a691"),s=a("50c4"),o=a("7b0b"),c=a("65f0"),u=a("8418"),l=a("1dde"),d=a("ae40"),m=l("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,h=Math.min;n({target:"Array",proto:!0,forced:!m||!f},{splice:function(t,e){var a,n,l,d,m,f,p=o(this),g=s(p.length),w=i(t,g),x=arguments.length;if(0===x?a=n=0:n=1===x?(a=0,g-w):(a=x-2,h(v(r(e),0),g-w)),9007199254740991<g+a-n)throw TypeError("Maximum allowed length exceeded");for(l=c(p,n),d=0;d<n;d++)(m=w+d)in p&&u(l,d,p[m]);if(a<(l.length=n)){for(d=w;d<g-n;d++)f=d+a,(m=d+n)in p?p[f]=p[m]:delete p[f];for(d=g;g-n+a<d;d--)delete p[d-1]}else if(n<a)for(d=g-n;w<d;d--)f=d+a-1,(m=d+n-1)in p?p[f]=p[m]:delete p[f];for(d=0;d<a;d++)p[d+w]=arguments[d+2];return p.length=g-n+a,l}})},a6e2:function(t,e,a){"use strict";var n=a("2212");a.n(n).a},a755:function(t,e,a){"use strict";var n=a("6f7b");a.n(n).a},b0c0:function(t,e,a){var n=a("83ab"),i=a("9bf2").f,r=Function.prototype,s=r.toString,o=/^\s*function ([^ (]*)/;!n||"name"in r||i(r,"name",{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})},c975:function(t,e,a){"use strict";var n=a("23e7"),i=a("4d64").indexOf,r=a("a640"),s=a("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,u=r("indexOf"),l=s("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(t,e){return c?o.apply(this,arguments)||0:i(this,t,1<arguments.length?e:void 0)}})},ca4c:function(t,e,a){"use strict";a("96cf");var n=a("c964"),i={name:"ia_head",props:{hasContainerProp:{default:!0}},data:function(){return{hasContainer:!0,theme:"light",active:"home",mainNavDrawer:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.$store.state.app.mainNav.length},mounted:function(){},computed:{},methods:{swicthActive:function(t){this.active=t},loadData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(a=e.sent).code?t.$store.commit("app/setMainNav",a.data.dataList):t.$Message.error(a.msg);case 4:case"end":return e.stop()}}),e)})))()},logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){"200"==(t=t.data).code?window.location.reload():alert(t.msg)})).catch((function(t){}))}},watch:{}},r=(a("a6e2"),a("0c7c")),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Affix",[a("Menu",{staticClass:"main-nav",attrs:{mode:"horizontal",theme:t.theme,"active-name":t.active}},[a("div",{class:{container:t.hasContainer}},[a("div",{staticClass:"layout flex"},[a("div",{staticClass:"menu flex"},[a("div",{staticClass:"layout-logo m-r-xs"},[a("div",[a("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}})]),t.$store.state.app.siteInfo.logoTitle?t._e():a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.$store.state.app.siteInfo.title))])]),a("div",{staticClass:"slogn"})]),a("div",{staticClass:"nav-list m-l"},[a("MenuItem",{attrs:{to:"/",name:"home"},nativeOn:{click:function(e){return t.swicthActive("home")}}},[t._v(" 首页 ")]),a("MenuItem",{attrs:{to:"/itest/app/add",name:"add"},nativeOn:{click:function(e){return t.swicthActive("add")}}},[t._v(" 上传应用 ")]),a("MenuItem",{attrs:{to:"/itest/app/my",name:"my"},nativeOn:{click:function(e){return t.swicthActive("my")}}},[t._v(" 我的应用 ")]),a("MenuItem",{attrs:{to:"/itest/app/udid",name:"udid"},nativeOn:{click:function(e){return t.swicthActive("udid")}}},[a("Badge",{staticStyle:{display:"inline"},attrs:{dot:""}},[t._v(" 获取UDID ")])],1),t._l(t.$store.state.app.mainNav,(function(e){return a("MenuItem",{key:e.id,attrs:{to:"/"+e.name,name:e.name},nativeOn:{click:function(a){return t.swicthActive(e.name)}}},[t._v(" "+t._s(e.title)+" ")])}))],2),a("Icon",{staticClass:"menu-toggle",attrs:{type:t.mainNavDrawer?"md-close":"md-menu",size:"26"},on:{click:function(e){t.mainNavDrawer=!t.mainNavDrawer}}})],1),a("div",{staticClass:"login"},[t.util.getStorageSync("token")?[a("Submenu",{attrs:{name:"99"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-person"}}),t._v(" "+t._s(t.$store.state.user.userInfo.nickname)+" ")],1),a("MenuItem",{attrs:{name:"99-1",to:"/user/center"}},[t._v("个人中心")]),a("MenuItem",{attrs:{name:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)]:[a("Button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary",ghost:"",to:"/user/login"}},[t._v("登录")])]],2)])]),a("Drawer",{staticClass:"main-nav-drawer",attrs:{width:220,placement:"left",closabl:!0,draggable:!0,scrollable:!0,title:t.$store.state.app.siteInfo.title,closable:!1},model:{value:t.mainNavDrawer,callback:function(e){t.mainNavDrawer=e},expression:"mainNavDrawer"}},[a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[t.util.getStorageSync("token")?[a("Avatar",{attrs:{src:t.$store.state.user.userInfo.avatar,icon:"ios-person",size:"large"}})]:[a("Button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary",ghost:"",to:"/user/login"}},[t._v("登录")])]],2),a("Menu",{attrs:{theme:t.theme}},[a("MenuItem",{attrs:{to:"/",name:"home"},nativeOn:{click:function(e){return t.swicthActive("home")}}},[t._v(" 首页 ")]),a("MenuItem",{attrs:{to:"/itest/app/add",name:"add"},nativeOn:{click:function(e){return t.swicthActive("add")}}},[t._v(" 上传应用 ")]),a("MenuItem",{attrs:{to:"/itest/app/my",name:"my"},nativeOn:{click:function(e){return t.swicthActive("my")}}},[t._v(" 我的应用 ")]),a("MenuItem",{attrs:{to:"/itest/app/udid",name:"udid"},nativeOn:{click:function(e){return t.swicthActive("udid")}}},[t._v(" 获取UDID ")]),t._l(t.$store.state.app.mainNav,(function(e){return a("MenuItem",{key:e.id,attrs:{to:"/"+e.name,name:e.name},nativeOn:{click:function(a){return t.swicthActive(e.name)}}},[t._v(" "+t._s(e.title)+" ")])}))],2)],1)],1)],1)}),[],!1,null,"2474608d",null);e.a=s.exports},f3c6:function(t,e,a){"use strict";var n={name:"ia_foot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},i=(a("a755"),a("0c7c")),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("i-col",{attrs:{xs:24,sm:14,md:14}},[t._v(" "+t._s(t.$store.state.app.siteInfo.copyright)+" ")]),a("i-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[a("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))])])],1)],1)])}),[],!1,null,"4e3f2414",null);e.a=r.exports}}]);