(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_invite-invite-share"],{"0df6":function(t,e,i){"use strict";var n=i("e081"),r=i.n(n);r.a},"0e15":function(t,e,i){"use strict";i.r(e);var n=i("3b84"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"1ebe":function(t,e,i){var n=i("bfb7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("2180dd1d",n,!0,{sourceMap:!1,shadowMode:!1})},"1f3d":function(t,e,i){"use strict";i.r(e);var n=i("a634"),r=i("defe");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("0df6");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"4bec5b6a",null,!1,n["a"],o);e["default"]=c.exports},"232a":function(t,e,i){"use strict";i("4160"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(e){t.children.forEach((function(t,i){t.width=e}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){e.width=parseInt((i[0].width-1)/e.column)+"px",t(e.width)}))}}};e.default=n},"3b84":function(t,e,i){"use strict";(function(t){var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var r=n(i("c964")),a=n(i("f3f3")),o=i("2f62"),s={components:{},data:function(){return{dataList:[{balance:0}],info:{title:"",inviteCode:"加载中..."},qrcode:this.util.baseDomain(),postersData:{},posterImg:{path:""}}},computed:(0,a.default)({},(0,o.mapState)(["app","user"])),onLoad:function(e){this.loadData(),t("log",this.qrcode," at pages/user_invite/invite/share.vue:136")},onShow:function(){this.info.title},methods:{qrR:function(e){t("log",e," at pages/user_invite/invite/share.vue:146")},navTo:function(t){uni.navigateTo({url:t})},loadData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/user_score/score/my",method:"get"});case 2:return i=e.sent,200==i.code&&(t.dataList=i.data.dataList),e.next=6,t.util.request({url:"/v1/user_invite/invite/code",method:"get"});case 6:n=e.sent,200==n.code&&(t.info=n.data.info,t.qrcode=t.util.baseDomain()+"?inviteCode="+t.info.inviteCode);case 8:case"end":return e.stop()}}),e)})))()},share:function(){this.util.showToast({title:"海报生成中...",icon:"loading",duration:1e4}),this.initPostersConfig(),this.$refs.poster.createPosters(this.postersData)},realShare:function(){this.$refs.share.togglePopup({systemShare:!0,type:2,title:this.info.title,summary:this.info.title,imageUrl:this.posterImg.path,imageWidth:"600rpx",imageHeight:"881rpx",href:this.qrcode,success:function(e){t("log","success:"+JSON.stringify(e)," at pages/user_invite/invite/share.vue:191")},fail:function(e){t("log","fail:"+JSON.stringify(e)," at pages/user_invite/invite/share.vue:194")}})},initPostersConfig:function(){var t={clear:!0,width:750,height:1181,background:"#ffffff",views:[{type:"image",width:750,height:1181,top:0,left:0,url:"/static/share.png"},{type:"text",width:400,height:50,left:20,top:680,fontSize:30,lineHeight:40,bolder:!0,breakWord:!0,content:"        ",MaxLineNumber:2},{type:"text",width:400,height:50,left:20,top:690,fontSize:24,lineHeight:40,bolder:!0,breakWord:!0,content:"",color:"#ffffff",MaxLineNumber:2},{type:"text",width:400,left:320,top:1050,fontSize:28,bolder:!0,breakWord:!0,content:this.info.inviteCode,color:"#ffffff",MaxLineNumber:1},{type:"image",width:140,height:140,top:1020,left:470,url:this.$store.state.app.siteInfo.qrcodeApi+this.qrcode},{type:"image",width:90,height:90,top:1050,left:70,radius:50,url:this.util.imageCache(this.user.userInfo.avatar)}]};this.postersData=t},onSuccessCreatePosters:function(e){t("log",e," at pages/user_invite/invite/share.vue:275"),uni.hideToast(),this.posterImg=e,this.realShare()},onPostersError:function(e){t("log",e," at pages/user_invite/invite/share.vue:281")}}};e.default=s}).call(this,i("0de9")["log"])},"5b9b":function(t,e,i){"use strict";var n,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-grid-wrap"},[i("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":t.showBorder},style:{"border-left-color":t.borderColor},attrs:{id:t.elId}},[t._t("default")],2)],1)},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},7e3:function(t,e,i){"use strict";var n=i("1ebe"),r=i.n(n);r.a},"7daf":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.uni-grid-wrap[data-v-3627e284]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%}.uni-grid[data-v-3627e284]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-grid--border[data-v-3627e284]{position:relative;z-index:1;border-left:1px #c8c7cc solid}',""]),t.exports=e},8432:function(t,e,i){"use strict";i("4160"),i("a434"),i("a9e3"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(e,i){e===t&&t.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=n},8944:function(t,e,i){"use strict";var n=i("f6eb"),r=i.n(n);r.a},a57d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.uni-grid-item[data-v-4bec5b6a]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.uni-grid-item__box[data-v-4bec5b6a]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-grid-item--border[data-v-4bec5b6a]{position:relative;z-index:0;border-bottom:1px #c8c7cc solid;border-right:1px #c8c7cc solid}.uni-grid-item--border-top[data-v-4bec5b6a]{position:relative;height:100%;border-top:1px #c8c7cc solid;z-index:0}.uni-highlight[data-v-4bec5b6a]:active{background-color:#f1f1f1}',""]),t.exports=e},a634:function(t,e,i){"use strict";var n,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},ac58:function(t,e,i){"use strict";i.r(e);var n=i("232a"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},b793:function(t,e,i){"use strict";var n={uniGrid:i("c6d2").default,uniGridItem:i("1f3d").default,xyShare:i("278d").default,xyPoster:i("8a79").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"banner m-b"},[i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"title"},[t._v("当前积分")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.dataList[0].balance))])],1)],1),i("uni-grid",{staticClass:"grid",attrs:{column:2,showBorder:!1}},[i("uni-grid-item",{nativeOn:{click:function(e){return t.share(e)}}},[i("v-uni-view",{staticClass:"inner"},[i("v-uni-view",{staticClass:"xyicon xyicon-qrcode text-primary"}),i("v-uni-view",{staticClass:"title"},[t._v("分享海报")])],1)],1),i("uni-grid-item",{nativeOn:{click:function(e){return t.navTo("/pages/user_invite/invite/my")}}},[i("v-uni-view",{staticClass:"inner"},[i("v-uni-view",{staticClass:"xyicon xyicon-level text-primary"}),i("v-uni-view",{staticClass:"title"},[t._v("推广人统计")])],1)],1),i("uni-grid-item",{nativeOn:{click:function(e){return t.navTo("/pages/user_score/score_log/my?typeId=2")}}},[i("v-uni-view",{staticClass:"inner"},[i("v-uni-view",{staticClass:"xyicon xyicon-statistics1 text-primary"}),i("v-uni-view",{staticClass:"title"},[t._v("积分记录")])],1)],1),i("uni-grid-item",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.app.siteInfo.versionFuncsAll.indexOf("scoreshop")>=0,expression:"$store.state.app.siteInfo.versionFuncsAll.indexOf('scoreshop') >= 0"}],nativeOn:{click:function(e){return t.navTo("/pages/scoreshop/item/lists")}}},[i("v-uni-view",{staticClass:"inner"},[i("v-uni-view",{staticClass:"xyicon xyicon-store text-primary"}),i("v-uni-view",{staticClass:"title"},[t._v("积分商城")])],1)],1)],1),i("v-uni-view",{staticClass:"code"},[t._v("邀请码："+t._s(t.info.inviteCode))]),i("xy-share",{ref:"share",attrs:{contentHeight:1181}}),i("xy-poster",{ref:"poster",attrs:{postersData:t.postersData},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.onSuccessCreatePosters.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.onPostersError.apply(void 0,arguments)}}})],1)},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},bfb7:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.banner[data-v-7a4aea04]{background-color:#e23435;height:150px;color:#fff}.banner .card[data-v-7a4aea04]{padding:30px;text-align:center}.banner .card .num[data-v-7a4aea04]{margin-top:10px;font-size:35px}.grid[data-v-7a4aea04]{padding:10px;box-sizing:border-box}.grid .uni-grid-item:nth-child(even) .inner[data-v-7a4aea04]{margin-left:15px}.grid .inner[data-v-7a4aea04]{background-color:#fff;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:10px;border-radius:10px}.grid .inner .xyicon[data-v-7a4aea04]{font-size:30px}.grid .inner .title[data-v-7a4aea04]{padding-top:12px}.code[data-v-7a4aea04]{text-align:center;color:#333}',""]),t.exports=e},c6d2:function(t,e,i){"use strict";i.r(e);var n=i("5b9b"),r=i("ac58");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("8944");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"3627e284",null,!1,n["a"],o);e["default"]=c.exports},ddc9:function(t,e,i){"use strict";i.r(e);var n=i("b793"),r=i("0e15");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("7000");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"7a4aea04",null,!1,n["a"],o);e["default"]=c.exports},defe:function(t,e,i){"use strict";i.r(e);var n=i("8432"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},e081:function(t,e,i){var n=i("a57d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("71a3a832",n,!0,{sourceMap:!1,shadowMode:!1})},f6eb:function(t,e,i){var n=i("7daf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("0cba020f",n,!0,{sourceMap:!1,shadowMode:!1})}}]);