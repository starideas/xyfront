!function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],f=0,d=[];f<s.length;f++)r=s[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(l&&l(t);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{"chunk-000b2f74":1,"chunk-270a2b9f":1,"chunk-5a48996d":1,"chunk-b7ba11e6":1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-000b2f74":"891ce66a","chunk-270a2b9f":"891ce66a","chunk-2d0c9b0b":"31d6cfe0","chunk-2d0e4e42":"31d6cfe0","chunk-2d217526":"31d6cfe0","chunk-5a48996d":"891ce66a","chunk-b7ba11e6":"d30fa621"}[e]+".css",a=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=(l=i[c]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){var l;if((u=(l=f[c]).getAttribute("data-href"))===o||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=a,document.getElementsByTagName("head")[0].appendChild(d)})).then((function(){r[e]=0})));var n,o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=s.p+"js/"+({}[n=e]||n)+"."+{"chunk-000b2f74":"816409c9","chunk-270a2b9f":"7e9c9639","chunk-2d0c9b0b":"3d8cabc9","chunk-2d0e4e42":"0f552e56","chunk-2d217526":"0beeed09","chunk-5a48996d":"71571fa0","chunk-b7ba11e6":"d0b7b0fb"}[n]+".js";var f=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/starideas/xyfront@latest/vue/otc-default/dist/",s.oe=function(e){throw e};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var l=u;i.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},2500:function(e,t,n){var o={"./zh.json":"b579"};function r(e){var t=a(e);return n(t)}function a(e){if(n.o(o,e))return o[e];var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return Object.keys(o)},r.resolve=a,(e.exports=r).id="2500"},"2ee8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n("d724"),n("3085"),n("a251"),n("ef72");var o,r,a,i=n("8bbf"),s=n.n(i),c=(n("748c"),n("cfb7")),u={name:"app",created:(a=Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((!this.$store.state.app.createTime||this.$store.state.app.createTime<1582465098)&&(this.util.removeStorageSync("vuex"),window.location.reload()),this.$store.state.app.siteInfo.id||this.getSiteInfo(),this.$store.state.user.token&&0==this.$store.state.user.userInfo.id)return e.next=6,this.getUserInfo();e.next=6;break;case 6:if(1800<Date.parse(new Date)/1e3-this.$store.state.app.updateTime)return e.next=9,this.getSiteInfo();e.next=12;break;case 9:return e.next=11,this.getUserInfo();case 11:this.$store.commit("app/setData",{key:"updateTime",value:Date.parse(new Date)/1e3});case 12:document.querySelector("meta[name=apple-mobile-web-app-title]").content=this.$store.state.app.siteInfo.title;case 13:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)}),methods:{getSiteInfo:(r=Object(c.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.util.request({url:"/v1/cloud/index/info",method:"get"});case 2:"200"==(t=e.sent).code?this.$store.commit("app/setSiteInfo",t.data.siteInfo):this.$Message.error(t.msg);case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),getUserInfo:(o=Object(c.a)(regeneratorRuntime.mark((function e(){var t,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.util.request({url:"/v1/core/user/info",method:"get"});case 2:if("200"==(t=e.sent).code){for(o in n=this.$store.state.user.userInfo,t.data.userInfo)""!=t.data.userInfo[o]&&(n[o]=t.data.userInfo[o]);this.$store.commit("user/setUserInfo",n)}else this.$Message.error(t.msg);case 4:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})}},f=(n("7c55"),n("31a4")),l=Object(f.a)(u,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:{"all-gray":"aidao"==this.$store.state.app.siteInfo.exTheme},attrs:{id:"app"}},[t("router-view")],1)}),[],!1,null,null,null).exports,d=n("6389"),p=n.n(d),h=[{name:"/user/login",path:"/user/login",meta:{title:"用户登录"},component:function(){return n.e("chunk-5a48996d").then(n.bind(null,"cbba"))}},{name:"/user/register",path:"/user/register",meta:{title:"用户注册"},component:function(){return n.e("chunk-000b2f74").then(n.bind(null,"b31e"))}}],m=[{name:"/icms/post/lists",path:"/*",meta:{title:"文档列表"},component:function(){return n.e("chunk-270a2b9f").then(n.bind(null,"1c64"))}},{name:"/icms/post/info",path:"/:cate_name/:id",meta:{title:"文档详情"},component:function(){return n.e("chunk-2d0c9b0b").then(n.bind(null,"59e6"))}},{name:"/icms/post/my",path:"/icms/post/my",meta:{title:"我的文档"},component:function(){return n.e("chunk-2d217526").then(n.bind(null,"c5db"))}}],g=[{name:"/iotc/market",path:"/iotc/market",meta:{title:"交易市场"},component:function(){return n.e("chunk-2d0e4e42").then(n.bind(null,"91c7"))}}],v=[{path:"/",name:"home",meta:{title:"首页"},component:function(){return n.e("chunk-b7ba11e6").then(n.bind(null,"eea6"))}}],b=v=(v=(v=v.concat(h)).concat(m)).concat(g),w=n("5880"),y=n.n(w),k={namespaced:!0,state:{configCore:{title:"XYStarter",logo:"/logo.png",logoTitle:"/logo.png",slogan:"",description:"",support:"技术支持｜XYCloud",copyright:"Copyright © 2018-2019 jry All Rights Reserved",icp:"苏ICP备18067203号",exTheme:"",iconfig:{},appDownurl:""},siteInfo:{id:0,title:"XYStarter",logo:"/logo.png",logoTitle:"/logo.png",slogan:"",description:"",support:"技术支持｜XYCloud",copyright:"Copyright © 2018-2019 jry All Rights Reserved",icp:"苏ICP备18067203号",exTheme:"",iconfig:{},appDownurl:""},createTime:Date.parse(new Date)/1e3,updateTime:Date.parse(new Date)/1e3,mainNav:[]},getters:{},mutations:{setData:function(e,t){e[t.key]=t.value},setConfigCore:function(e,t){e.configCore=t},setSiteInfo:function(e,t){e.siteInfo=t},setMainNav:function(e,t){e.mainNav=t}},actions:{setConfigCore:function(e,t){(0,e.commit)("setConfigCore",t)},setSiteInfo:function(e,t){(0,e.commit)("setSiteInfo",t)}}},x=n("c276"),S={namespaced:!0,state:{token:"",userInfo:{id:0,nickname:"",avatar:"/logo.png",role:[]}},getters:{},mutations:{setData:function(e,t){e[t.key]=t.value},setToken:function(e,t){e.token=t,localStorage.setItem("token",t)},setUserInfo:function(e,t){e.userInfo=t}},actions:{setData:function(e,t){e[t.key]=t.value},setToken:function(e,t){(0,e.commit)("setToken",t)},setUserInfo:function(e,t){(0,e.commit)("setUserInfo",t)}}},I=n("cc64");s.a.use(y.a);var M=new y.a.Store({state:{},plugins:[Object(I.a)({storage:window.localStorage})],mutations:{},actions:{},modules:{app:k,user:S}});s.a.use(p.a);var T=new p.a({routes:b,base:"/",mode:"history"});T.beforeEach((function(e,t,n){var o="";M.state.app.siteInfo.slogan&&(o="_"+M.state.app.siteInfo.slogan),x.a.title(e.meta.title,M.state.app.siteInfo.title+o),n()})),T.afterEach((function(e,t,n){window.scrollTo(0,0)}));var j,O,A=T,$=(n("8a65"),n("1ad5"),n("85b3")),C=new(n.n($).a)({locale:"zh",fallbackLocale:"zh",messages:(j=n("2500"),O={},j.keys().forEach((function(e){var t=e.match(/([A-Za-z0-9-_]+)\./i);if(t&&1<t.length){var n=t[1];O[n]=j(e)}})),O)}),E=(n("0712"),n("2d54")),P=n.n(E);P.a.defaults.headers.common.CloudId="0",P.a.defaults.headers.common.Authorization=M.state.user.token;var D="application/json";P.a.defaults.headers.post["Content-Type"]=D,P.a.defaults.headers.put["Content-Type"]=D,P.a.defaults.transformRequest=function(e){return JSON.stringify(e)};var _={baseURL:x.a.baseUrl(),timeout:6e4,withCredentials:!1},R=P.a.create(_);R.interceptors.request.use((function(e){var t=M.state.user.token;return t&&(e.headers.Authorization=t),e}),(function(e){return Promise.reject(e)})),R.interceptors.response.use((function(e){if(401==e.data.code&&(M.commit("setToken",""),x.a.showModal({title:"提示",content:e.data.msg,success:function(){}})),200!=e.data.code&&e.data.alert){switch(e.data.alert){case"toast":x.a.showToast({icon:"loading",title:e.data.msg});break;case"modal":x.a.showModal({title:"提示",content:e.data.msg,success:function(){}})}return!1}return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=R,window.axios=R,Object.defineProperties(e.prototype,{axios:{get:function(){return R}},$axios:{get:function(){return R}}})},s.a.use(Plugin),Plugin;var U=n("90e4"),L=n.n(U);n("12b7"),s.a.use(L.a);var N=n("756c");Object(N.a)("/service-worker.js",{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){},offline:function(){},error:function(){}});var V=n("efea");n("5f72"),n("a5e4"),s.a.prototype.util=x.a,s.a.config.productionTip=!1,s.a.use(V.a),s.a.use(VueAMap),VueAMap.initAMapApiLoader({key:"124df699d03419df04cd005d139dbf57",plugin:["AMap.Autocomplete","AMap.PlaceSearch","AMap.Scale","AMap.OverView","AMap.ToolBar","AMap.MapType","AMap.Geolocation","AMap.Geocoder","AMap.PolyEditor","AMap.CircleEditor"],v:"1.4.4"});var q=new Object;q.VUE_APP_IS_DEMO="false",q.VUE_APP_BASE_URL="https://otc.demo.jiangruyi.com/api/",s.a.prototype.env=q,s.a.filter("formatTime",(function(e,t){return x.a.formatDate(e,t)}));var z=new s.a({router:A,store:M,i18n:C,render:function(e){return e(l)}}).$mount("#app");t.default=z},5880:function(e,t){e.exports=Vuex},"5f72":function(e,t){e.exports=Element},6389:function(e,t){e.exports=VueRouter},"7c55":function(e,t,n){"use strict";var o=n("2ee8");n.n(o).a},"85b3":function(e,t){e.exports=VueI18n},"8bbf":function(e,t){e.exports=Vue},b579:function(e){e.exports=JSON.parse('{"message":"hello i18n !!"}')},c276:function(e,t,n){"use strict";var o=n("56d7"),r=(n("e25d"),n("a2f0"),n("a4ed"),n("2a1a")),a=(n("8a65"),{runEnv:function(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)&&"wxwork"!=e.match(/wxwork/i)?"weixin-h5":"wxwork"==e.match(/wxwork/i)?"wework-h5":""},request:function(e){var t=e.method,n=void 0===t?"get":t,o=e.url,r=e.data,a=void 0===r?{}:r,i=e.header,s=void 0===i?{}:i,c=(e.dataType,e.success,e.fail,e.complete,{});return"get"==n&&(c=a),new Promise((function(e,t){axios({method:n,url:o,data:a,params:c,headers:s}).then((function(t){e(t.data)})).catch((function(e){var n=new Object;n.code=10,n.msg=e.message,t(n)}))}))},formatDate:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm",n="";if("object"==Object(r.a)(e))n=e;else{if("number"!=typeof e)return e;n=new Date(1e3*e)}/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));var o={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds()};for(var i in o)if(new RegExp("(".concat(i,")")).test(t)){var s=o[i]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?s:a.padLeftZero(s))}return t},padLeftZero:function(e){return("00"+e).substr(e.length)},setStorageSync:function(e,t){return localStorage.setItem(e,t)},getStorageSync:function(e){return localStorage.getItem(e)},removeStorageSync:function(e){return localStorage.removeItem(e)},clearStorageSync:function(){return localStorage.clear()},navigateTo:function(e){var t=e.url;o.default.$router.push(t)},redirectTo:function(e){var t=e.url;o.default.$router.push(t)},reLaunch:function(){var e=window.location.href.split("#");location.href=e[0]},switchTab:function(e){var t=e.url;o.default.$router.push(t)},showToast:function(e){var t=e.title,n=e.icon,r=void 0===n?"loading":n;if(e.duration,o.default.$message)o.default.$message({message:t,type:r});else switch(r){case"loading":o.default.$Message.error(t);break;case"success":o.default.$Message.success(t);break;case"info":o.default.$Message.info(t)}},showModal:function(e){var t=e.title,n=e.content,r=void 0===n?"":n,a=e.success,i=void 0===a?function(){}:a;e.fail,e.complete,o.default.$Modal.confirm({title:t,content:r,onOk:function(){var e={confirm:!0};i(e)},onCancel:function(){var e={cancel:!0};i(e)}})}}),i=a;i.title=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";e=e?e+"_"+t:t,window.document.title=e},i.baseDomain=function(){return window.location.protocol+"//"+window.location.host},i.baseUrl=function(){return window.location.protocol+"//"+window.location.host+"/api/"},t.a=i}});