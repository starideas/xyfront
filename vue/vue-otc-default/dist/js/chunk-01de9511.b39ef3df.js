(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-01de9511"],{"02e2":function(e,t,a){"use strict";var i=a("8d49");a.n(i).a},"160b":function(e,t,a){"use strict";a("a9e3"),a("96cf");var i=a("1da1"),r={name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var a,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.timeLeft>0)){t.next=2;break}return t.abrupt("return");case 2:if(e.account||e.noNeedAccount){t.next=5;break}return e.util.showToast({title:"请输入"+e.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return e.timeLeft=e.time,e.label="剩余"+e.timeLeft+"s",a=setInterval((function(){e.timeLeft--,e.timeLeft<=0?(e.label="发送验证码",e.timeLeft=0,clearInterval(a)):e.label="剩余"+e.timeLeft+"s"}),1e3),i={},i="手机号"==e.type?{mobile:e.account,title:e.title}:{email:e.account,title:e.title},t.next=12,e.util.request({url:e.url,data:i,method:"post"});case 12:"200"==(r=t.sent).code?(e.util.showToast({title:r.msg,icon:"success",duration:1e3}),e.$emit("verifysuccess",r.data)):e.util.showToast({title:r.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t)})))()}}},n=a("2877"),s=Object(n.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"send-verify p-l-xs p-r-xs"},[t("el-button",{attrs:{type:"text"},on:{click:this.sendVerify}},[this._v(this._s(this.label))])],1)}),[],!1,null,"683cebec",null);t.a=s.exports},6119:function(e,t,a){"use strict";a.r(t),a("96cf");var i=a("1da1"),r=a("c43b"),n={data:function(){return{dataList:[]}},created:function(){this.loadData()},methods:{loadData:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/coin_otc/order/my",data:{state:"0,1,2,-2,-1,3",page:1},method:"get"});case 2:200==(a=t.sent).code?e.dataList=a.data.dataList:e.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()}}},s=a("2877"),o=Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"order-recent"},[a("el-table",{staticClass:"m-t-xs",staticStyle:{width:"100%"},attrs:{data:e.dataList}},[a("el-table-column",{attrs:{prop:"id",label:"编号/时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.row.id))]),a("div",{staticClass:"font-sm"},[e._v(e._s(e._f("formatTime")(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{directives:[{name:"show",rawName:"v-show",value:1==t.row.type,expression:"scope.row.type == 1"}],staticStyle:{color:"#09C69D"}},[e._v("购买")]),a("span",{directives:[{name:"show",rawName:"v-show",value:2==t.row.type,expression:"scope.row.type == 2"}],staticStyle:{color:"#FF4C4C"}},[e._v("出售")])]}}])}),a("el-table-column",{attrs:{prop:"type",label:"币种",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.coinInfo.symbol))])]}}])}),a("el-table-column",{attrs:{prop:"price",label:"价格"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"price"},[e._v(e._s(t.row.price))]),a("span",{staticClass:"price m-l-sm"},[e._v("CNY")])]}}])}),a("el-table-column",{attrs:{prop:"amount",label:"数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.amount))])]}}])}),a("el-table-column",{attrs:{prop:"totalPrice",label:"总额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.totalPrice)+" CNY")])]}}])}),a("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{color:"#F8A059"}},[e._v(e._s(t.row.stateFormat.title))])]}}])}),a("el-table-column",{attrs:{prop:"action",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.adId?a("el-button",{attrs:{size:"small",type:"info"},on:{click:function(a){return e.util.navigateTo({url:"/otc/order/"+t.row.id})}}},[e._v("查看")]):e._e()]}}])})],1)],1)}),[],!1,null,"72fc89e0",null).exports,l={components:{"xy-safety-verify":r.a,"recent-order":o},data:function(){var e=this;return{verifyData:"",id:0,info:{coinInfo:{symbol:""},otcUser:{tradeCount:0,kycInfo:{realName:""}},userInfo:{avatar:""}},buyForm:{money:"",amount:""},rules:{money:[{required:!0,message:"请输入金额",trigger:"blur"},{validator:function(t,a,i){a<=0&&i(new Error("请输入正确的金额")),a-e.otcUserInfo.todayLeft>0&&i(new Error("今日限额最多"+e.otcUserInfo.todayLeft)),a-e.info.maxMoney>0&&i(new Error("本次金额最多"+e.info.maxMoney)),a-e.info.minMoney<0&&i(new Error("本次金额最少"+e.info.minMoney)),i()},trigger:"blur"}],amount:[{required:!0,message:"请输入数量",trigger:"blur"},{validator:function(t,a,i){a<=0&&i(new Error("请输入正确的数量")),a-e.info.leftAmount>0&&i(new Error(a+"本次数量最多"+e.info.leftAmount)),1==e.info.type&&a-e.coinBalance.balance>0&&i(new Error("最多出售"+e.coinBalance.balance)),i()},trigger:"blur"}]},alipay:"",wxpay:"",bank:"",otcUserInfo:{kycInfo:{},paytypeList:[]},coinBalance:{}}},created:function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.id=this.$route.params.id,e.next=3,this.loadData(this.id);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),watch:{},methods:{trade:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0==e.otcUserInfo.paytypeList.length&&e.util.showToast({title:"请先完善收款方式",icon:"none",duration:1e3}),e.otcUserInfo.kycInfo||e.util.showToast({title:"请先进行KYC实名认证",icon:"none",duration:1e3}),r="",2==e.info.type?(a=1,r="buyForm"):(e.alipay||e.wxpay||e.bank||e.util.showToast({title:"请选择收款方式",icon:"loading",duration:3e3}),a=2,r="sellForm"),e.$refs[r].validate(function(){var t=Object(i.a)(regeneratorRuntime.mark((function t(i){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i){t.next=16;break}return t.next=3,e.util.request({url:"/v1/coin_otc/order/add/"+e.id,data:{adId:e.id,coinId:e.info.coinId,type:a,amount:e.buyForm.amount,totalPrice:e.buyForm.money,alipay:e.alipay,wxpay:e.wxpay,bank:e.bank,_verify:e.verifyData},method:"post"});case 3:if(200!=(r=t.sent).code){t.next=8;break}e.util.navigateTo({url:"/coin_otc/order/info/"+r.data.orderId}),t.next=14;break;case 8:if(401003!=r.code){t.next=13;break}return e.$refs.sv.open(r.data.verifyList),t.abrupt("return");case 13:e.util.showToast({title:r.msg,icon:"loading",duration:3e3});case 14:t.next=18;break;case 16:return t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return t.stop()}}),t)})))()},inputMoney:function(){this.buyForm.money=math.round(math.bignumber(this.buyForm.money),2),this.buyForm.amount=math.round(math.bignumber(this.buyForm.money)/math.bignumber(this.info.price),this.info.coinInfo.decimals)},inputAmount:function(){this.buyForm.amount=math.round(math.bignumber(this.buyForm.amount),this.info.coinInfo.decimals),this.buyForm.money=math.round(math.bignumber(this.buyForm.amount)*math.bignumber(this.info.price),2)},setAllAmount:function(e){this.buyForm.amount=e,this.inputAmount()},loadBalance:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/coin/balance/info/"+e.info.coinId,method:"get"});case 2:200==(a=t.sent).code?e.coinBalance=a.data.info:e.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()},loadData:function(e){var t=this;return Object(i.a)(regeneratorRuntime.mark((function a(){var i,r;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.util.request({url:"/v1/coin_otc/ad/info/"+e,data:{},method:"get"});case 2:return 200==(i=a.sent).code?t.info=i.data.info:t.util.showToast({title:i.msg,icon:"loading",duration:3e3}),a.next=6,t.util.request({url:"/v1/coin_otc/user/my",data:{},method:"get"});case 6:if(200!=(r=a.sent).code){a.next=13;break}return t.otcUserInfo=r.data.info,a.next=11,t.loadBalance();case 11:a.next=14;break;case 13:t.util.showToast({title:r.msg,icon:"loading",duration:3e3});case 14:case"end":return a.stop()}}),a)})))()}}},c=(a("02e2"),Object(s.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("script2",{attrs:{src:"https://cdn.jsdelivr.net/npm/mathjs@6.2.5/dist/math.min.js"}}),a("xy-header"),a("div",{staticClass:"main p-t"},[a("div",{staticClass:"container"},[a("el-row",{attrs:{type:"flex",gutter:18}},[a("el-col",{attrs:{span:16}},[a("el-steps",{staticClass:"m-b",attrs:{active:1,simple:""}},[a("el-step",{attrs:{title:"待下单"}}),a("el-step",{attrs:{title:"待支付"}}),a("el-step",{attrs:{title:"待放币"}}),a("el-step",{attrs:{title:"交易完成"}})],1),a("el-card",{staticClass:"ad-info",attrs:{shadow:"never"}},[a("div",{staticClass:"flex flex-alignCenter"},[a("el-avatar",{attrs:{size:"medium",src:e.info.userInfo.avatar}}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.info.userInfo.nickname))]),a("el-tag",{staticClass:"m-l-sm",attrs:{size:"mini"}},[e._v("KYC1")]),a("span",{staticClass:"m-l-md"},[e._v("交易 "),a("span",[e._v(e._s(e.info.otcUser.tradeCount))])]),a("span",{staticClass:"m-l"},[e._v("好评率 "),a("span",[e._v(e._s(e.info.otcUser.goodRate)+" %")])])],1),a("el-divider"),a("div",{staticClass:"flex",staticStyle:{"justify-content":"space-between"}},[a("div",[a("div",[e._v("单价")]),a("div",[e._v(e._s(e.info.price))])]),a("div",[a("div",[e._v("数量")]),a("div",[e._v(e._s(e.info.leftAmount)+" "+e._s(e.info.coinName))])]),a("div",[a("div",[e._v("单笔限额")]),a("div",[e._v(e._s(e.info.minMoney)+" - "+e._s(e.info.maxMoney)+" CNY")])]),a("div",[a("div",[e._v("收款方式")]),a("div",[a("i",{directives:[{name:"show",rawName:"v-show",value:e.info.alipay,expression:"info.alipay"}],staticClass:"xyicon xyicon-alipay m-r-xs",staticStyle:{color:"#4C88FE"}}),a("i",{directives:[{name:"show",rawName:"v-show",value:e.info.wxpay,expression:"info.wxpay"}],staticClass:"xyicon xyicon-wxpay m-r-xs",staticStyle:{color:"#00C901"}}),a("i",{directives:[{name:"show",rawName:"v-show",value:e.info.bank,expression:"info.bank"}],staticClass:"xyicon xyicon-card",staticStyle:{color:"#F7BA2A"}})])])])],1),a("el-card",{staticClass:"m-t trade-info",attrs:{shadow:"never"}},[a("div",{staticClass:"text-right font-sm m-b-sm"},[a("span",{staticClass:"m-r"},[e._v("当前剩余 "+e._s(e.coinBalance.balance)+" "+e._s(e.info.coinInfo.symbol))]),a("span",[e._v("当前可用交易额度 "+e._s(e._f("toThousands")(e.otcUserInfo.todayLeft))+"CNY")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.info.type,expression:"info.type == 2"}]},[a("el-form",{ref:"buyForm",attrs:{model:e.buyForm,rules:e.rules}},[a("div",{staticClass:"flex",staticStyle:{"align-items":"center"}},[a("el-form-item",{attrs:{label:"",prop:"money"}},[a("el-input",{attrs:{placeholder:"输入想要购买的金额"},on:{input:e.inputMoney},model:{value:e.buyForm.money,callback:function(t){e.$set(e.buyForm,"money",t)},expression:"buyForm.money"}},[a("div",{staticClass:"text-default p-r-sm",staticStyle:{"font-weight":"500","line-height":"40px"},attrs:{slot:"suffix"},slot:"suffix"},[e._v("CNY")])])],1),a("i",{staticClass:"m-l m-b m-r font-xl xyicon xyicon-exchange text-primary"}),a("el-form-item",{attrs:{label:"",prop:"amount"}},[a("el-input",{attrs:{placeholder:"输入想要购买的数量"},on:{input:e.inputAmount},model:{value:e.buyForm.amount,callback:function(t){e.$set(e.buyForm,"amount",t)},expression:"buyForm.amount"}},[a("div",{staticClass:"text-default p-r-sm",staticStyle:{"font-weight":"500","line-height":"40px"},attrs:{slot:"suffix"},slot:"suffix"},[e._v(" "+e._s(e.info.coinInfo.symbol)+" "),a("el-divider",{attrs:{direction:"vertical"}}),a("span",{staticClass:"text-primary",on:{click:function(t){return e.setAllAmount(e.info.leftAmount)}}},[e._v("全部")])],1)])],1)],1),a("el-button",{staticClass:"full m-t",attrs:{size:"medium",type:"primary"},on:{click:function(t){return e.trade()}}},[e._v("购买")])],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.info.type,expression:"info.type == 1"}]},[a("el-form",{ref:"sellForm",attrs:{model:e.buyForm,rules:e.rules}},[a("div",{staticClass:"flex",staticStyle:{"align-items":"center"}},[a("el-form-item",{attrs:{label:"",prop:"amount"}},[a("el-input",{attrs:{placeholder:"输入想要出售的数量"},on:{input:e.inputAmount},model:{value:e.buyForm.amount,callback:function(t){e.$set(e.buyForm,"amount",t)},expression:"buyForm.amount"}},[a("div",{staticClass:"text-default p-r-sm",staticStyle:{"font-weight":"500","line-height":"40px"},attrs:{slot:"suffix"},slot:"suffix"},[e._v(" "+e._s(e.info.coinInfo.symbol)+" "),a("el-divider",{attrs:{direction:"vertical"}}),a("span",{staticClass:"text-primary",on:{click:function(t){return e.setAllAmount(e.coinBalance.balance)}}},[e._v("全部")])],1)])],1),a("i",{staticClass:"m-l m-r font-xl xyicon xyicon-exchange text-primary"}),a("el-form-item",{attrs:{label:"",prop:"money"}},[a("el-input",{attrs:{placeholder:"输入想要出售的金额"},on:{input:e.inputMoney},model:{value:e.buyForm.money,callback:function(t){e.$set(e.buyForm,"money",t)},expression:"buyForm.money"}},[a("div",{staticClass:"text-default p-r-sm",staticStyle:{"font-weight":"500","line-height":"40px"},attrs:{slot:"suffix"},slot:"suffix"},[e._v("CNY")])])],1)],1),a("div",{staticClass:"text-gray ts-13"},[e._v("收款方式:")]),a("div",{staticClass:"m-t-sm"},[a("div",{staticClass:"m-b-sm flex flex-alignCenter"},[a("span",{staticClass:"m-r",staticStyle:{width:"70px"}},[e._v("支付宝")]),a("el-select",{staticClass:"flex-1",model:{value:e.alipay,callback:function(t){e.alipay=t},expression:"alipay"}},[e._l(e.otcUserInfo.paytypeList,(function(t,i){return[1==t.paytype?a("el-option",{key:i,attrs:{value:t.id,label:t.name+"-"+t.account}}):e._e()]}))],2)],1),a("div",{staticClass:"m-b-sm flex flex-alignCenter"},[a("span",{staticClass:"m-r",staticStyle:{width:"70px"}},[e._v("微信支付")]),a("el-select",{staticClass:"flex-1",model:{value:e.wxpay,callback:function(t){e.wxpay=t},expression:"wxpay"}},[e._l(e.otcUserInfo.paytypeList,(function(t,i){return[2==t.paytype?a("el-option",{key:i,attrs:{value:t.id,label:t.name+"-"+t.account}}):e._e()]}))],2)],1),a("div",{staticClass:"flex flex-alignCenter"},[a("span",{staticClass:"m-r",staticStyle:{width:"70px"}},[e._v("银行卡")]),a("el-select",{staticClass:"flex-1",model:{value:e.bank,callback:function(t){e.bank=t},expression:"bank"}},[e._l(e.otcUserInfo.paytypeList,(function(t,i){return[3==t.paytype?a("el-option",{key:i,attrs:{value:t.id,label:t.name+"-"+t.account}}):e._e()]}))],2)],1)]),a("el-button",{staticClass:"full m-t",attrs:{size:"medium",type:"success"},on:{click:function(t){return e.trade()}}},[e._v("出售")])],1)],1)])],1),a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"user-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-avatar",{attrs:{size:"medium",src:e.info.userInfo.avatar}}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.info.userInfo.nickname))])],1),a("div",{staticClass:"ts-14"},[a("div",[e._v("联系电话："+e._s(e.info.userInfo.mobile?e.info.userInfo.mobile.identifier:""))]),a("div",[e._v("姓名："+e._s(e.info.otcUser.kycInfo.realName))]),a("div",[e._v("身份证: "+e._s(e.info.otcUser.kycInfo.certNo))])])]),a("el-card",{staticClass:"m-t memo-info",attrs:{shadow:"never"}},[a("div",[e._v("备注：")]),a("div",[e._v(e._s(e.info.memo?e.info.memo:"沒有留言"))])])],1)],1),a("div",{staticClass:"m-t m-b-sm flex space-between"},[e._m(0),a("div",[a("span",{staticClass:"text-info ts-14",on:{click:function(t){return e.util.navigateTo({url:"/otc/order/my"})}}},[e._v("交易记录")])])]),a("recent-order")],1)]),a("xy-footer"),a("xy-safety-verify",{ref:"sv",on:{"verify-request":e.trade},model:{value:e.verifyData,callback:function(t){e.verifyData=t},expression:"verifyData"}})],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",{staticClass:"ts-20 tw6 m-r-sm"},[this._v("交易记录")]),t("span",{staticClass:"ts-13 text-gray"},[this._v("(最近10笔交易记录)")])])}],!1,null,"f6992458",null));t.default=c.exports},"8d49":function(e,t,a){},c43b:function(e,t,a){"use strict";a("96cf");var i=a("1da1"),r={name:"xySafetyVerify",components:{XySendVerify:a("160b").a},props:{value:{type:[String,Object],default:""}},data:function(){return{dialogVisible:!1,verifyList:[],loading:!1,form:{paypwd:"",password:"",emailVerify:"",emailToken:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{}}},created:function(){},methods:{getVerifyToken:function(e){this.form.emailToken=e.token},getMobileVerifyToken:function(e){this.form.mobileToken=e.token},open:function(e){this.verifyList=e,this.getRule(),this.dialogVisible=!0},eclose:function(){this.$emit("cancel")},close:function(){this.dialogVisible=!1},handleSubmit:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading=!0,a=e,setTimeout((function(){a.loading=!1}),5e3),e.$emit("input",e.form),e.$emit("verify-request"),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},getRule:function(){for(var e in this.verifyList)switch(this.verifyList[e]){case"email":this.rule.email=[{required:!0,message:"请填写邮箱验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"mobile":this.rule.mobile=[{required:!0,message:"请填写手机验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"gauth":this.rule.gauth=[{required:!0,message:"请填写谷歌验证码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"paypwd":this.rule.paypwd=[{required:!0,message:"请填写支付密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"password":this.rule.password=[{required:!0,message:"请填写登录密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}]}}}},n=a("2877"),s=Object(n.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"append-to-body":"",title:"安全验证",visible:e.dialogVisible,width:"450px"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.eclose}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[e.verifyList.indexOf("email")>=0?a("el-form-item",{attrs:{label:"邮箱验证码",prop:"emailVerify"}},[a("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:e.form.emailVerify,callback:function(t){e.$set(e.form,"emailVerify",t)},expression:"form.emailVerify"}},[a("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:e.getVerifyToken},slot:"append"})],1)],1):e._e(),e.verifyList.indexOf("mobile")>=0?a("el-form-item",{attrs:{label:"手机验证码",prop:"mobileVerify"}},[a("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:e.form.mobileVerify,callback:function(t){e.$set(e.form,"mobileVerify",t)},expression:"form.mobileVerify"}},[a("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:e.getMobileVerifyToken},slot:"append"})],1)],1):e._e(),e.verifyList.indexOf("gauth")>=0?a("el-form-item",{attrs:{label:"谷歌验证码",prop:"gauth"}},[a("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:e.form.gauth,callback:function(t){e.$set(e.form,"gauth",t)},expression:"form.gauth"}})],1):e._e(),e.verifyList.indexOf("paypwd")>=0?a("el-form-item",{attrs:{label:"支付密码",prop:"paypwd"}},[a("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入6-18位支付密码"},model:{value:e.form.paypwd,callback:function(t){e.$set(e.form,"paypwd",t)},expression:"form.paypwd"}})],1):e._e(),e.verifyList.indexOf("password")>=0?a("el-form-item",{attrs:{label:"登录密码",prop:"password"}},[a("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),a("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(" 确认 ")])],1)],1)}),[],!1,null,"665ad79b",null);t.a=s.exports}}]);