(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ce40ac28"],{"056e":function(t,e,s){"use strict";var i=s("7954");s.n(i).a},"0dec":function(t,e,s){t.exports=s("f292")},4265:function(t,e,s){"use strict";var i=s("58ec");s.n(i).a},"4d95":function(t,e,s){"use strict";var i=s("6a2a");s.n(i).a},"58ec":function(t,e,s){},"5c03":function(t,e,s){"use strict";s("96cf");var i,n=s("1da1"),a=(s("c5f6"),{name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:(i=Object(n.a)(regeneratorRuntime.mark((function t(){var e,s,i,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0<this.timeLeft)return t.abrupt("return");t.next=2;break;case 2:if(this.account||this.noNeedAccount){t.next=5;break}return this.util.showToast({title:"请输入"+this.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return this.timeLeft=this.time,this.label="剩余"+this.timeLeft+"s",e=setInterval((function(){n.timeLeft--,n.timeLeft<=0?(n.label="发送验证码",n.timeLeft=0,clearInterval(e)):n.label="剩余"+n.timeLeft+"s"}),1e3),s={},s="手机号"==this.type?{mobile:this.account,title:this.title}:{email:this.account,title:this.title},t.next=12,this.util.request({url:this.url,data:s,method:"post"});case 12:"200"==(i=t.sent).code?(this.util.showToast({title:i.msg,icon:"success",duration:1e3}),this.$emit("verifysuccess",i.data)):this.util.showToast({title:i.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})}}),r=s("2877"),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"send-verify p-l-xs p-r-xs"},[s("el-button",{attrs:{type:"text"},on:{click:t.sendVerify}},[t._v(t._s(t.label))])],1)}),[],!1,null,"0372c606",null);e.a=o.exports},"6a2a":function(t,e,s){},"6f6d":function(t,e,s){"use strict";s("96cf");var i,n=s("1da1"),a={name:"xySafetyVerify",components:{XySendVerify:s("5c03").a},props:{value:{type:[String,Object],default:""}},data:function(){return{dialogVisible:!1,verifyList:[],loading:!1,form:{paypwd:"",password:"",emailVerify:"",emailToken:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{}}},created:function(){},methods:{getVerifyToken:function(t){this.form.emailToken=t.token},getMobileVerifyToken:function(t){this.form.mobileToken=t.token},open:function(t){this.verifyList=t,this.getRule(),this.dialogVisible=!0},eclose:function(){this.$emit("cancel")},close:function(){this.dialogVisible=!1},handleSubmit:(i=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=!0,e=this,setTimeout((function(){e.loading=!1}),5e3),this.$emit("input",this.form),this.$emit("verify-request"),this.loading=!1;case 6:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)}),getRule:function(){for(var t in this.verifyList)switch(this.verifyList[t]){case"email":this.rule.email=[{required:!0,message:"请填写邮箱验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"mobile":this.rule.mobile=[{required:!0,message:"请填写手机验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"gauth":this.rule.gauth=[{required:!0,message:"请填写谷歌验证码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"paypwd":this.rule.paypwd=[{required:!0,message:"请填写支付密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"password":this.rule.password=[{required:!0,message:"请填写登录密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}]}}}},r=s("2877"),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{attrs:{"append-to-body":"",title:"安全验证",visible:t.dialogVisible,width:"450px"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.eclose}},[s("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[0<=t.verifyList.indexOf("email")?s("el-form-item",{attrs:{label:"邮箱验证码",prop:"emailVerify"}},[s("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:t.form.emailVerify,callback:function(e){t.$set(t.form,"emailVerify",e)},expression:"form.emailVerify"}},[s("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:t.getVerifyToken},slot:"append"})],1)],1):t._e(),0<=t.verifyList.indexOf("mobile")?s("el-form-item",{attrs:{label:"手机验证码",prop:"mobileVerify"}},[s("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:t.form.mobileVerify,callback:function(e){t.$set(t.form,"mobileVerify",e)},expression:"form.mobileVerify"}},[s("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:t.getMobileVerifyToken},slot:"append"})],1)],1):t._e(),0<=t.verifyList.indexOf("gauth")?s("el-form-item",{attrs:{label:"谷歌验证码",prop:"gauth"}},[s("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:t.form.gauth,callback:function(e){t.$set(t.form,"gauth",e)},expression:"form.gauth"}})],1):t._e(),0<=t.verifyList.indexOf("paypwd")?s("el-form-item",{attrs:{label:"支付密码",prop:"paypwd"}},[s("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入6-18位支付密码"},model:{value:t.form.paypwd,callback:function(e){t.$set(t.form,"paypwd",e)},expression:"form.paypwd"}})],1):t._e(),0<=t.verifyList.indexOf("password")?s("el-form-item",{attrs:{label:"登录密码",prop:"password"}},[s("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1):t._e(),s("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:t.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("form")}}},[t._v("\n            确认\n        ")])],1)],1)}),[],!1,null,"46eee942",null);e.a=o.exports},7954:function(t,e,s){},"9cf9":function(t,e,s){"use strict";s.r(e),s("96cf");var i,n,a,r,o=s("1da1"),l=s("ca4c"),c=s("f3c6"),u=s("0dec"),d=s.n(u),f=s("6f6d"),m={components:{IaHead:l.a,IaFoot:c.a,CountDown:d.a,XySafetyVerify:f.a},props:{data:{default:!0}},data:function(){return{id:0,paytype:1,info:{adInfo:{userInfo:{avatar:""},otcUser:{tradeCount:0}},stateFormat:{title:"",color:""},coinInfo:{symbol:""}},verifyData:""}},created:(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.id=this.$route.params.id,t.next=3,this.loadData(this.id);case 3:this.info.adInfo.alipay?this.paytype=1:this.info.adInfo.wxpay?this.paytype=2:this.info.adInfo.bank&&(this.paytype=3);case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),methods:{endCd:function(){this.loadData(this.id)},handleSubmit:(a=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.verifyData&&(data._verify=this.verifyData),this.$refs.sv.close(),this.verifyData="";case 3:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)}),paid:(n=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$confirm("点击“确定”后视您承诺已成功汇款；若商家没有收到款项提出申诉，则24小时内客服就会自动介入处理；若您在24小时内没有配合处理，则判定您败诉，资金损失由您承担。","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){})).catch((function(){}));case 1:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),loadData:(i=Object(o.a)(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/coin_otc/order/info/"+e,data:{},method:"get"});case 2:200==(s=t.sent).code?this.info=s.data.info:this.util.showToast({title:s.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})}},p=(s("056e"),s("2877")),v=Object(p.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("IaHead"),s("div",{staticClass:"main"},[s("div",{staticClass:"container m-t"},[s("el-row",{attrs:{type:"flex",gutter:18}},[s("el-col",{attrs:{span:16}},[s("el-card",{staticClass:"ad-info",attrs:{shadow:"never"}},[s("div",{staticClass:"flex",staticStyle:{"justify-content":"space-between"}},[s("div",{staticClass:"font-default"},[t._v("订单ID: "+t._s(t.info.id))]),s("div",{staticClass:"font-default",class:"text-"+t.info.stateFormat.color},[t._v(t._s(t.info.stateFormat.title))])]),s("el-divider"),s("div",{staticClass:"flex",staticStyle:{"justify-content":"space-between"}},[s("div",[s("div",{staticClass:"m-b-sm font-xl font-bold"},[t._v("向 "+t._s(t.info.adInfo.userInfo.nickname)+" 买入"+t._s(t.info.amount)+" "+t._s(t.info.coinInfo.symbol))]),s("div",{staticClass:"m-b-sm"},[s("span",{staticClass:"text-gray font-sm"},[t._v("交易金额：")]),s("span",{staticClass:"text-error font-md"},[t._v("\n                                        "+t._s(t.info.totalPrice)+"\n                                        "),s("span",{staticClass:"font-sm"},[t._v("CNY")])])]),s("div",[s("span",{staticClass:"text-gray font-sm"},[t._v("币种价格：")]),s("span",{staticClass:"font-md"},[t._v("\n                                        "+t._s(t.info.price)+"\n                                        "),s("span",{staticClass:"font-sm"},[t._v("CNY/"+t._s(t.info.coinInfo.symbol))])])])])]),s("el-divider"),s("div",{staticClass:"flex",staticStyle:{"min-height":"400px","justify-content":"center","align-items":"center"}},[3==t.info.state?s("div",[t._v("\n                                交易成功\n                            ")]):t._e(),-2==t.info.state?s("div",[t._v("\n                                订单申诉中，如有疑问请联系客服。\n                            ")]):t._e(),-1==t.info.state?s("div",[t._v("\n                                订单已取消，如有疑问请联系客服。\n                            ")]):t._e(),0==t.info.state?s("div",[s("div",{staticClass:"m-b text-center"},[t._v("\n                                    倒计时\n                                    "),s("count-down",{attrs:{startTime:"1593955118",endTime:t.info.expireTime,tipText:"距离订单开始还有",tipTextEnd:"距离订单关闭还剩",endText:"订单已超时",dayTxt:"天",hourTxt:"小时",minutesTxt:"分钟",secondsTxt:"秒"},on:{end_callback:[function(e){return t.countDownE_cb()},t.endCd]}})],1),s("div",{staticClass:"font-sm text-center"},[t._v("等待商家接单，超时自动取消订单")])]):t._e(),1==t.info.type?s("div",[1==t.info.state||2==t.info.state?s("div",[s("el-radio-group",{staticClass:"m-b",model:{value:t.paytype,callback:function(e){t.paytype=e},expression:"paytype"}},[t.info.adInfo.alipay?s("el-radio",{attrs:{label:1}},[t._v("支付宝")]):t._e(),t.info.adInfo.wxpay?s("el-radio",{attrs:{label:2}},[t._v("微信")]):t._e(),t.info.adInfo.bank?s("el-radio",{attrs:{label:3}},[t._v("银行卡")]):t._e()],1),s("div",{staticClass:"pay-info m-t m-b"},[1==t.paytype?[s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[t._v("收款方户名")]),s("span",{staticClass:"value"},[t._v(t._s(t.info.adInfo.alipay.name))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[t._v("收款方收款码")]),s("span",{directives:[{name:"viewer",rawName:"v-viewer",value:{movable:!0},expression:"{movable: true}"}],staticClass:"value"},[s("img",{attrs:{src:t.info.adInfo.alipay.qr}})])])]:t._e(),2==t.paytype?[s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[t._v("收款方户名")]),s("span",{staticClass:"value"},[t._v(t._s(t.info.adInfo.wxpay.name))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[t._v("收款方收款码")]),s("span",{directives:[{name:"viewer",rawName:"v-viewer",value:{movable:!1},expression:"{movable: false}"}],staticClass:"value"},[s("img",{attrs:{src:t.info.adInfo.alipay.qr}})])])]:t._e(),3==t.paytype?[s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[t._v("收款方户名")]),s("span",{staticClass:"value"},[t._v(t._s(t.info.adInfo.bank.name))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[t._v("收款方开户支行")]),s("span",{staticClass:"value"},[t._v(t._s(t.info.adInfo.bank.bank))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[t._v("收款方账户")]),s("span",{staticClass:"value"},[t._v(t._s(t.info.adInfo.bank.account))])])]:t._e(),s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[t._v("备注内容")]),s("span",{staticClass:"value text-error"},[t._v(t._s(t.info.code)+" (请务必填写)")])])],2),1==t.info.state?s("div",[s("div",{staticClass:"font-sm font-bold",staticStyle:{"line-height":"1.8"}},[t._v("\n                                            转账请以"),s("span",{staticClass:"text-error"},[t._v("上方显示的收款方式为准")]),t._v("，切勿依赖过往转账记录。\n                                            如执意转非当前订单内的收款方式，造成损失"),s("span",{staticClass:"text-error"},[t._v("风险自担")]),t._v("！\n                                            为了您的资金安全，请使用您本人的"),s("span",{staticClass:"text-error"},[t._v("银行账号")]),t._v("进行转账。使用任何非本人账户的支付方式操作，卖家有权进行退款处理。\n                                            选择支付宝转银行卡延时到账等方式造成2小时内未收到账，卖家有权延迟放币或取消订单！\n                                        ")]),s("div",{staticClass:"text-center m-b"},[s("count-down",{attrs:{startTime:"1593955118",endTime:t.info.expireTime,tipText:"距离订单开始还有",tipTextEnd:"距离订单关闭还剩",endText:"订单已超时",dayTxt:"天",hourTxt:"小时",minutesTxt:"分钟",secondsTxt:"秒"},on:{end_callback:[function(e){return t.countDownE_cb()},t.endCd]},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("剩\n                                                    还剩"),s("span",{staticClass:"text-error font-bold"},[t._v(t._s(e.minutes)+"分"+t._s(e.seconds)+"秒")]),t._v("，订单付款将超时。\n                                                ")]}}],null,!1,1852921001)})],1),s("div",{staticClass:"m-b font-md font-bold"},[t._v("\n                                            待支付，请向"+t._s(t.info.adInfo.userInfo.nickname)+"支付"+t._s(t.info.totalPrice)+"CNY，请附上汇款备注。\n                                        ")]),s("div",[s("el-button",{attrs:{type:"default"}},[t._v("取消订单")]),s("el-button",{attrs:{type:"danger"},on:{click:t.paid}},[t._v("我已付款")])],1)]):t._e(),2==t.info.state?s("div",[s("el-divider"),s("div",{staticClass:"m-b font-md font-bold"},[t._v("\n                                            我已付款给商家\n                                        ")]),s("el-divider"),s("div",{staticClass:"m-b font-md font-bold"},[t._v("\n                                            请耐心等待商家确认收款。\n                                        ")]),s("div",[s("el-button",{attrs:{type:"default"}},[t._v("取消订单")]),s("el-button",{attrs:{type:"danger"},on:{click:t.shensu}},[t._v("申诉")])],1)],1):t._e()],1):t._e()]):t._e(),2==t.info.type?s("div",[1==t.info.state||2==t.info.state?s("div",[s("div",{staticClass:"pay-info"}),1==t.info.state?s("div",[s("div",{staticClass:"text-center m-b"},[s("count-down",{attrs:{startTime:"1593955118",endTime:t.info.expireTime,tipText:"距离订单开始还有",tipTextEnd:"距离订单关闭还剩",endText:"订单已超时",dayTxt:"天",hourTxt:"小时",minutesTxt:"分钟",secondsTxt:"秒"},on:{end_callback:[function(e){return t.countDownE_cb()},t.endCd]},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("剩\n                                                    还剩"),s("span",{staticClass:"text-error font-bold"},[t._v(t._s(e.minutes)+"分"+t._s(e.seconds)+"秒")]),t._v("，订单付款将超时。\n                                                ")]}}],null,!1,1852921001)})],1),s("div",{staticClass:"m-b font-md font-bold"},[t._v("\n                                            待支付，等待商家向您支付"+t._s(t.info.totalPrice)+"CNY，请及时查收并核对。\n                                        ")]),s("div")]):t._e(),2==t.info.state?s("div",[s("el-divider"),s("div",{staticClass:"m-b font-md font-bold"},[t._v("\n                                            商家已确认向您打款，请立即查收并核对\n                                        ")]),s("el-divider"),s("div",{staticClass:"m-b font-md font-bold"},[t._v("\n                                            请核对收款无误后点击确认收款。\n                                        ")]),s("div",[s("el-button",{attrs:{type:"recived"}},[t._v("确认收款")]),s("el-button",{attrs:{type:"danger"},on:{click:t.shensu}},[t._v("申诉")])],1)],1):t._e()]):t._e()]):t._e()])],1),s("el-card",{staticClass:"m-t memo-info",attrs:{shadow:"never"}},[s("div",[t._v("备注：")])])],1),s("el-col",{attrs:{span:8}},[s("el-card",{staticClass:"user-card m-b",attrs:{shadow:"never"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("el-avatar",{attrs:{size:"medium",src:t.info.adInfo.userInfo.avatar}}),s("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.info.adInfo.userInfo.nickname))])],1),s("div",[s("div",[t._v("联系电话：18888888888")]),s("div",[t._v("成交量："+t._s(t.info.adInfo.otcUser.tradeCount))]),s("div",[t._v("好评率: "+t._s(t.info.adInfo.otcUser.goodRate)+"%")])])]),s("el-card",{attrs:{shadow:"never"}},[s("el-steps",{staticClass:"m-b",staticStyle:{height:"220px"},attrs:{direction:"vertical",active:t.info.state}},[s("el-step",{attrs:{title:"待下单"}}),s("el-step",{attrs:{title:"待支付"}}),s("el-step",{attrs:{title:"待放币"}}),s("el-step",{attrs:{title:"交易完成"}})],1)],1)],1)],1)],1)]),s("XySafetyVerify",{ref:"sv",on:{"verify-request":t.handleSubmit},model:{value:t.verifyData,callback:function(e){t.verifyData=e},expression:"verifyData"}}),s("IaFoot")],1)}),[],!1,null,"4d38bc16",null);e.default=v.exports},aa77:function(t,e,s){function i(t,e,s){var i={},a=r((function(){return!!o[t]()||"​"!="​"[t]()})),l=i[t]=a?e(d):o[t];s&&(i[s]=l),n(n.P+n.F*a,"String",i)}var n=s("5ca1"),a=s("be13"),r=s("79e5"),o=s("fdef"),l="["+o+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),d=i.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=i},c5f6:function(t,e,s){"use strict";function i(t){var e=l(t,!1);if("string"==typeof e&&2<e.length){var s,i,n,a=(e=g?e.trim():m(e,3)).charCodeAt(0);if(43===a||45===a){if(88===(s=e.charCodeAt(2))||120===s)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+e}for(var r,o=e.slice(2),c=0,u=o.length;c<u;c++)if((r=o.charCodeAt(c))<48||n<r)return NaN;return parseInt(o,i)}}return+e}var n=s("7726"),a=s("69a8"),r=s("2d95"),o=s("5dbc"),l=s("6a99"),c=s("79e5"),u=s("9093").f,d=s("11e9").f,f=s("86cc").f,m=s("aa77").trim,p="Number",v=n[p],h=v,_=v.prototype,y=r(s("2aeb")(_))==p,g="trim"in String.prototype;if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof v&&(y?c((function(){_.valueOf.call(s)})):r(s)!=p)?o(new h(i(e)),s,v):i(e)};for(var b,x=s("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;x.length>T;T++)a(h,b=x[T])&&!a(v,b)&&f(v,b,d(h,b));(v.prototype=_).constructor=v,s("2aba")(n,p,v)}},ca4c:function(t,e,s){"use strict";s("96cf");var i,n=s("1da1"),a={name:"IaHead",props:{hasContainerProp:{default:!1},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,this.$store.state.app.mainNav.length},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(t>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(t){this.$router.push(t)},mainMenuSelect:function(t){this.active=t},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(i=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){var e=t.data;"200"==e.code?window.location.reload():alert(e.msg)})).catch((function(t){}))}},watch:{}},r=(s("4d95"),s("2877")),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-nav-fixed main-nav-dark",class:t.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[s("div",{staticClass:"fix-top"}),s("div",{staticClass:"main-nav"},[s("div",{class:{container:t.hasContainer}},[s("div",{staticClass:"main-nav-inner flex"},[s("div",{staticClass:"layout-logo",on:{click:function(e){return t.navTo("/")}}},[t.$store.state.app.siteInfo.logoTitle?s("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}}):t._e(),t.$store.state.app.siteInfo.logoTitle?t._e():s("span",{staticClass:"title"},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"\n                    ")]),s("span",{staticClass:"slogn"}),s("i",{class:t.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:t.chanView}})]),s("div",{staticClass:"nav-right flex",class:t.menuview},[s("el-menu",{staticClass:"main-menu",attrs:{"default-active":t.active,mode:"horizontal"},on:{select:t.mainMenuSelect}},[s("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/")}}},[t._v("\n                            一键买卖\n                        ")]),s("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/otc/market")}}},[t._v("\n                            交易市场\n                        ")]),t._l(t.$store.state.app.mainNav,(function(e){return s("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(s){return t.navTo("/"+e.name)}}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])}))],2),s("div",{staticClass:"flex"},[t.util.getStorageSync("token")?s("el-menu",{attrs:{mode:"horizontal"}},[s("el-submenu",{attrs:{index:"99"}},[s("template",{slot:"title"},[s("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:t.$store.state.user.userInfo.avatar}}),t._v("\n                                    "+t._s(t.$store.state.user.userInfo.nickname)+"\n                                ")],1),s("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/user/center")}}},[t._v("个人中心")]),s("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/coin/my")}}},[t._v("我的资产")]),s("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/otc/order/my")}}},[t._v("我的订单")]),s("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/otc/ad/my")}}},[t._v("广告管理")]),s("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)],1):[s("el-menu",{attrs:{mode:"horizontal"}},[s("el-menu-item",[s("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/login")}}},[t._v("登录")]),s("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/register")}}},[t._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"75ed756f",null);e.a=o.exports},f292:function(t,e,s){"use strict";s.r(e),s("6b54"),s("c5f6");var i={replace:!0,data:function(){return{tipShow:!0,msTime:{show:!1,day:"",hour:"",minutes:"",seconds:""},star:"",end:"",current:""}},watch:{currentTime:function(){this.gogogo()}},props:{tipText:{type:String,default:"距离开始"},tipTextEnd:{type:String,default:"距离结束"},id:{type:String,default:"1"},currentTime:{type:Number},startTime:{type:Number},endTime:{type:Number},endText:{type:String,default:"已结束"},dayTxt:{type:String,default:":"},hourTxt:{type:String,default:":"},minutesTxt:{type:String,default:":"},secondsTxt:{type:String,default:":"},secondsFixed:{type:Boolean,default:!1}},mounted:function(){this.gogogo()},methods:{gogogo:function(){var t=this;10==this.startTime.toString().length?this.star=1e3*this.startTime:this.star=this.startTime,10==this.endTime.toString().length?this.end=1e3*this.endTime:this.end=this.endTime,this.currentTime?10==this.currentTime.toString().length?this.current=1e3*this.currentTime:this.current=this.currentTime:this.current=(new Date).getTime(),this.end<this.current?(this.msTime.show=!1,this.end_message()):this.current<this.star?(this.$set(this,"tipShow",!0),setTimeout((function(){t.runTime(t.star,t.current,t.start_message)}),1)):(this.end>this.current&&this.star<this.current||this.star==this.current)&&(this.$set(this,"tipShow",!1),this.msTime.show=!0,this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1))},runTime:function(t,e,s,i){var n,a,r=this,o=this.msTime,l=t-e;0<l?(this.msTime.show=!0,o.day=Math.floor(l/864e5),l-=864e5*o.day,o.hour=Math.floor(l/36e5),l-=36e5*o.hour,o.minutes=Math.floor(l/6e4),l-=6e4*o.minutes,o.seconds=Math.floor(l/1e3).toFixed(0),l-=1e3*o.seconds,o.hour<10&&(o.hour="0"+o.hour),o.minutes<10&&(o.minutes="0"+o.minutes),o.seconds<10&&(o.seconds="0"+o.seconds),n=Date.now(),a=Date.now(),setTimeout((function(){i?r.runTime(r.end,e+=1e3,s,!0):r.runTime(r.star,e+=1e3,s)}),1e3-(a-n))):s()},start_message:function(){var t=this;this.$set(this,"tipShow",!1),this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1)},end_message:function(){this.msTime.show=!1,this.currentTime<=0||this.$emit("end_callback",this.msTime.show)}}},n=s("2877"),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.msTime.show?s("p",[0<t.msTime.day?s("span",[s("span",[t._v(t._s(t.msTime.day))]),s("i",[t._v(t._s(t.dayTxt))])]):t._e(),s("span",[t._v(t._s(t.msTime.hour))]),s("i",[t._v(t._s(t.hourTxt))]),s("span",[t._v(t._s(t.msTime.minutes))]),s("i",[t._v(t._s(t.minutesTxt))]),s("span",[t._v(t._s(t.msTime.seconds))]),s("i",[t._v(t._s(t.secondsTxt))])]):t._e()])}),[],!1,null,null,null);e.default=a.exports},f3c6:function(t,e,s){"use strict";var i={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},n=(s("4265"),s("2877")),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("el-row",{staticClass:"foot-info",attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[s("div",{staticClass:"line1"},[t._v("官方邮箱 "),s("span",{staticClass:"value"},[t._v(t._s(t.$store.state.app.siteInfo.iconfig?t.$store.state.app.siteInfo.iconfig.email[0]:""))])]),s("div",[t._v("官方微信"),s("span",{staticClass:"value"},[t._v(t._s(t.$store.state.app.siteInfo.iconfig?t.$store.state.app.siteInfo.iconfig.wxid:""))])])]),s("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[s("div",{staticClass:"nav-list"},[s("router-link",{attrs:{to:"/agreement/隐私条款"}},[t._v("\n                        隐私条款\n                    ")]),s("router-link",{attrs:{to:"/post/help"}},[t._v("\n                        常见问题\n                    ")]),s("router-link",{attrs:{to:"/post/standard"}},[t._v("\n                        费率标准\n                    ")]),s("router-link",{attrs:{to:"/post/about"}},[t._v("\n                        关于我们\n                    ")]),s("router-link",{attrs:{to:"/post/about"}},[t._v("\n                        申请商家\n                    ")])],1)])],1),s("el-row",{staticClass:"footer-bottom",attrs:{type:"flex",justify:"center",align:"middle"}},[s("div",[t._v("\n                "+t._s(t.$store.state.app.siteInfo.copyright)+"\n                 "),t.$store.state.app.siteInfo.icp?s("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))]):t._e()])])],1)])}),[],!1,null,"4c9f66d1",null);e.a=a.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);