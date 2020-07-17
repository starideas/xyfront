(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1ba65110"],{4570:function(e,t,r){"use strict";r.r(t),r("96cf");var a=r("1da1"),i=r("5c03");Vue.component("qrcode",VueQrcode);var s={components:{XySendVerify:i.a},data:function(){return{verityList:[],loading:!1,gauthSecret:"加载中...",gauthQrcode:"",form:{verify:"",password:"",emailVerify:"",emailToken:"",mobileVerify:"",mobileToken:""},rule:{verify:[{required:!0,message:"请填写谷歌验证码",trigger:"blur"},{type:"string",min:6,message:"验证码为6位",trigger:"blur"}]}}},created:function(){this.loadData()},mounted:function(){},methods:{copySuccess:function(){alert("拷贝成功")},getVerifyToken:function(e){this.form.emailToken=e.token},getMobileVerifyToken:function(e){this.form.mobileToken=e.token},loadData:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/gauth/user/change",method:"get"});case 2:"200"==(r=t.sent).code?(e.verityList=r.data.dataList,e.gauthSecret=r.data.gauthSecret,e.gauthQrcode=r.data.gauthQrcode):e.util.showToast({title:r.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()},handleSubmit:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,r=e,setTimeout((function(){r.loading=!1}),5e3),t.next=5,e.util.request({url:"/v1/gauth/user/change",data:e.form,method:"put"});case 5:"200"==(a=t.sent).code?(e.util.showToast({title:a.msg,icon:"success",duration:2e3}),e.util.navigateBack()):e.util.showToast({title:a.msg,icon:"loading",duration:3e3}),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}}},o=(r("eb03"),r("2877")),n=Object(o.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap",attrs:{id:"wrap"}},[r("xy-header"),r("div",{staticClass:"main"},[r("div",{staticClass:"container p-t"},[r("el-breadcrumb",{staticClass:"m-b-lg",attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/user/center"}}},[e._v("个人设置")]),r("el-breadcrumb-item",[e._v("换绑谷歌验证码")])],1),r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-col",{attrs:{xs:22,sm:20,md:16,lg:14}},[r("div",{staticClass:"top-tip"},[e._v("谷歌验证器是一款动态口令工具，工作原理类似短信动态验证。绑定后每30s生成一个动态验证码，验证码可用于登录、提现、修改安全设置等操作的安全验证。")]),r("div",{staticStyle:{height:"500px"}},[r("el-steps",{attrs:{direction:"vertical",space1:"60",active:0}},[r("el-step",{attrs:{status:"process",title:"下载谷歌验证"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("div",{staticClass:"des"},[e._v("iOS用户登录App Store搜索“Authenticator”下载安卓用户登录应用商店或使用手机浏览器搜索“谷歌验证器”下载")]),r("div",{staticStyle:{"margin-bottom":"60px"}},[r("img",{staticStyle:{"margin-right":"60px"},attrs:{src:"https://cdn.jsdelivr.net/gh/starideas/xyfront/image/appstore.png",alt:"appstore"}}),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/starideas/xyfront/image/googleplay.png",alt:"googleplay"}})])])]),r("el-step",{attrs:{status:"process",title:"在谷歌验证器中添加密钥并备份"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("div",{staticClass:"des"},[e._v("打开谷歌验证器，扫描下方二维码或手动输入下述密钥添加验证令牌。")]),r("div",{staticClass:"gauth flex"},[r("div",{staticClass:"qr"},[r("vue-lazy-component",{attrs:{timeout:5e3}},[r("qrcode",{attrs:{value:e.gauthQrcode,options:{width:118}}})],1)],1),r("div",[r("div",{staticClass:"key"},[e._v("Key："+e._s(e.gauthSecret))]),r("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.gauthSecret,expression:"gauthSecret",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"copy"},[r("i",{staticClass:"el-icon-copy-document"}),e._v(" 复制秘钥 ")])])])])]),r("el-step",{attrs:{status:"process",title:"输入谷歌验证器中6位验证码",description:""}})],1)],1),r("el-row",{staticClass:"m-t",staticStyle:{"margin-left":"30px"},attrs:{type:"flex",justify:"start",align:"middle"}},[r("el-col",{staticClass:"login-box bg-white1 p-a-0",attrs:{xs:22,sm:22,md:18,lg:18}},[r("div",{staticClass:"m-b"},[e._v(" 谷歌验证码 ")]),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[r("el-form-item",{attrs:{prop:"verify"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}})],1),0<=e.verityList.indexOf("email")?r("el-form-item",{attrs:{prop:"emailVerify"}},[r("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:e.form.emailVerify,callback:function(t){e.$set(e.form,"emailVerify",t)},expression:"form.emailVerify"}},[r("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"换绑谷歌验证"},on:{verifysuccess:e.getVerifyToken},slot:"append"})],1)],1):e._e(),0<=e.verityList.indexOf("mobile")?r("el-form-item",{attrs:{prop:"mobileVerify"}},[r("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:e.form.mobileVerify,callback:function(t){e.$set(e.form,"mobileVerify",t)},expression:"form.mobileVerify"}},[r("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"换绑谷歌验证"},on:{verifysuccess:e.getMobileVerifyToken},slot:"append"})],1)],1):e._e(),0<=e.verityList.indexOf("password")?r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),r("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(" 绑定 ")])],1)],1)],1)],1)],1)],1)]),r("xy-footer")],1)}),[],!1,null,"2541a3ec",null);t.default=n.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){function a(e){return function(t){var r=String(i(t));return 1&e&&(r=r.replace(o,"")),2&e&&(r=r.replace(n,"")),r}}var i=r("1d80"),s="["+r("5899")+"]",o=RegExp("^"+s+s+"*"),n=RegExp(s+s+"*$");e.exports={start:a(1),end:a(2),trim:a(3)}},"5c03":function(e,t,r){"use strict";r("a9e3"),r("96cf");var a=r("1da1"),i={name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var r,a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0<e.timeLeft)return t.abrupt("return");t.next=2;break;case 2:if(e.account||e.noNeedAccount){t.next=5;break}return e.util.showToast({title:"请输入"+e.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return e.timeLeft=e.time,e.label="剩余"+e.timeLeft+"s",r=setInterval((function(){e.timeLeft--,e.timeLeft<=0?(e.label="发送验证码",e.timeLeft=0,clearInterval(r)):e.label="剩余"+e.timeLeft+"s"}),1e3),a={},a="手机号"==e.type?{mobile:e.account,title:e.title}:{email:e.account,title:e.title},t.next=12,e.util.request({url:e.url,data:a,method:"post"});case 12:"200"==(i=t.sent).code?(e.util.showToast({title:i.msg,icon:"success",duration:1e3}),e.$emit("verifysuccess",i.data)):e.util.showToast({title:i.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t)})))()}}},s=r("2877"),o=Object(s.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"send-verify p-l-xs p-r-xs"},[r("el-button",{attrs:{type:"text"},on:{click:e.sendVerify}},[e._v(e._s(e.label))])],1)}),[],!1,null,"0372c606",null);t.a=o.exports},a9e3:function(e,t,r){"use strict";function a(e){var t,r,a,i,s,o,n,c,l=f(e,!1);if("string"==typeof l&&2<l.length)if(43===(t=(l=y(l)).charCodeAt(0))||45===t){if(88===(r=l.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+l}for(o=(s=l.slice(2)).length,n=0;n<o;n++)if((c=s.charCodeAt(n))<48||i<c)return NaN;return parseInt(s,a)}return+l}var i=r("83ab"),s=r("da84"),o=r("94ca"),n=r("6eeb"),c=r("5135"),l=r("c6b6"),u=r("7156"),f=r("c04e"),d=r("d039"),p=r("7c73"),m=r("241c").f,g=r("06cf").f,v=r("9bf2").f,y=r("58a8").trim,b="Number",h=s[b],x=h.prototype,w=l(p(x))==b;if(o(b,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var k,S=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof S&&(w?d((function(){x.valueOf.call(r)})):l(r)!=b)?u(new h(a(t)),r,S):a(t)},_=i?m(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;_.length>N;N++)c(h,k=_[N])&&!c(S,k)&&v(S,k,g(h,k));(S.prototype=x).constructor=S,n(s,b,S)}},b373:function(e,t,r){},eb03:function(e,t,r){"use strict";var a=r("b373");r.n(a).a}}]);