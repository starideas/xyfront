(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-user-nickname"],{"0f52":function(t,e,i){"use strict";i.r(e);var n=i("3cb9"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1a85":function(t,e,i){var n=i("f35a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7b054166",n,!0,{sourceMap:!1,shadowMode:!1})},"2da0":function(t,e,i){"use strict";i.r(e);var n=i("d3d9"),a=i("0f52");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var s,l=i("f0c5"),c=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"1b8b016f",null,!1,n["a"],s);e["default"]=c.exports},"3cb9":function(t,e,i){"use strict";(function(t){i("ac1f"),i("466d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"XyImage",props:{src:{type:String,default:""},mode:{type:String,default:""},"lazy-load":{type:Boolean,default:!1},"fade-show":{type:Boolean,default:!0},webp:{type:Boolean,default:!1},"show-menu-by-longpress":{type:Boolean,default:!1},placeholder:{type:String,default:""},complete:{type:Function,default:null}},watch:{src:function(t,e){t&&this.convert(t)}},data:function(){return{native:this.placeholder}},created:function(){this.convert(this.src)},methods:{convert:function(e){var i=this;if(e.match(/(http:|https:)/)){var n=this.util.imageCache(e,(function(t){i.native=t,i.complete&&i.complete(t)}));t.log(e+"->"+n),this.native=n}else this.native=e},load:function(){this.$emit("load")},error:function(){this.$emit("error")}}};e.default=n}).call(this,i("5a52")["default"])},"6b22":function(t,e,i){"use strict";i.r(e);var n=i("8ae4"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},7795:function(t,e,i){"use strict";i.r(e);var n=i("ec30"),a=i("6b22");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var s,l=i("f0c5"),c=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"258d4ccc",null,!1,n["a"],s);e["default"]=c.exports},"8ae4":function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("c964")),o=n(i("f3f3")),s=i("2f62"),l={computed:(0,o.default)({},(0,s.mapState)(["app","user"])),data:function(){return{nickname:""}},onLoad:function(t){this.nickname=this.user.userInfo.nickname},methods:{syncData:function(t){this.nickname=t.detail.value},submit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/core/user/nickname",data:{nickname:t.nickname},method:"put"});case 2:i=e.sent,200==i.code?(n=t.user.userInfo,n.nickname=t.nickname,t.$store.commit("setUserInfo",n),t.util.showToast({title:i.msg,icon:"success",duration:1e3}),uni.navigateBack()):t.util.showToast({title:i.msg,icon:"loading",duration:2e3});case 4:case"end":return e.stop()}}),e)})))()}}};e.default=l},a570:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"xyListItem",props:{value:{type:[String,Number],default:""},selectType:{type:String,default:""},checked:{type:Boolean,default:!1},uid:{type:Number,default:0},needLogin:{type:Boolean,default:!1},url:{type:String,default:""},loginUrl:{type:String,default:"/pages/core/user/login"},type:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:""},image:{type:String,default:""},imageSharp:{type:String,default:""},title:{type:String,default:""},titleFs:{type:String,default:"14px"},contentStyle:{type:String,default:""},info:{type:String,default:""},current:{type:String,default:""},more:{type:String,default:""},titleRight:{type:String,default:""},infoRight:{type:String,default:""}},data:function(){return{}},created:function(){},methods:{handleClick:function(){this.url?this.needLogin&&!this.uid?uni.navigateTo({url:this.loginUrl}):uni.navigateTo({url:this.url}):this.$emit("click")}}};e.default=n},d3d9:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-image",{staticClass:"xy-image",attrs:{src:t.native,mode:t.mode,"lazy-load":this.$props["lazy-load"],"fade-show":this.$props["fade-show"],"show-menu-by-longpress":this.$props["show-menu-by-longpress"],webp:t.webp},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.load.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)}}})},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},d7c7:function(t,e,i){"use strict";i.r(e);var n=i("a570"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e0ac:function(t,e,i){"use strict";var n={xyImage:i("2da0").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-label",{staticClass:"xy-list-item b-b",class:"t-"+t.type,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},["checkbox"==t.selectType?i("v-uni-view",{staticClass:"check"},[i("v-uni-checkbox",{attrs:{value:t.value,checked:t.checked}})],1):t._e(),t.icon||t.image?i("v-uni-view",{staticClass:"left"},[t._t("image",[i("v-uni-view",[i("v-uni-text",{staticClass:"icon text-gray",class:t.icon,style:{color:t.iconColor}})],1),t.image?i("v-uni-view",[i("xy-image",{staticClass:"image",class:t.imageSharp,attrs:{src:t.image,mode:"scaleToFill"}})],1):t._e(),t._t("tag",[i("v-uni-view",{staticClass:"tag"})])])],2):t._e(),i("v-uni-view",{staticClass:"content",style:t.contentStyle},[i("v-uni-view",{staticClass:"title"},[t._t("title",[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{style:{"font-size":t.titleFs}},[t._v(t._s(t.title))])],1),i("v-uni-view",{staticClass:"right"},[t._t("titleRight",[i("v-uni-text",[t._v(t._s(t.titleRight))])])],2)])],2),i("v-uni-view",{staticClass:"info"},[t._t("info",[t.info?i("v-uni-view",{staticClass:"left p-t-xs"},[i("v-uni-text",[t._v(t._s(t.info))])],1):t._e(),t.infoRight?i("v-uni-view",{staticClass:"right p-t-xs"},[t._t("infoRight",[i("v-uni-text",[t._v(t._s(t.infoRight))])])],2):t._e()])],2)],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"current"},[t._t("current",[i("v-uni-text",[t._v(t._s(t.current))])])],2),t.more?i("v-uni-view",{staticClass:"more"},[t._t("more",[i("v-uni-text",{class:t.more})])],2):t._e()],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},ec30:function(t,e,i){"use strict";var n={xyListItem:i("ed2c").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"wrap"},[i("xy-list-item",{attrs:{type:"input",more:"xyicon xyicon-right",title:"昵称"}},[i("template",{slot:"title"},[i("v-uni-input",{staticStyle:{color:"#666"},attrs:{type:"text",placeholder:t.user.userInfo.nickname,value:t.nickname},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.syncData.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.syncData.apply(void 0,arguments)}}})],1)],2),i("v-uni-view",{staticClass:"m-t p-l-sm p-r-sm"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},ed2c:function(t,e,i){"use strict";i.r(e);var n=i("e0ac"),a=i("d7c7");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("f719");var s,l=i("f0c5"),c=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"8a603026",null,!1,n["a"],s);e["default"]=c.exports},f35a:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.xy-list-item[data-v-8a603026]{position:relative;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;min-height:42px;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 8px}.xy-list-item .check[data-v-8a603026] uni-checkbox .uni-checkbox-input{color:#2d8cf0!important;border-radius:20px!important}.xy-list-item .check[data-v-8a603026] uni-checkbox .uni-checkbox-input:hover, .xy-list-item .check[data-v-8a603026] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked{border-color:#2d8cf0}.xy-list-item .check-noborder[data-v-8a603026] uni-checkbox .uni-checkbox-input{border:0!important}.xy-list-item .left[data-v-8a603026]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;line-height:1;padding-right:5px}.xy-list-item .left .icon[data-v-8a603026]{font-size:18px;margin-right:5px}.xy-list-item .left .image[data-v-8a603026]{width:100px;height:72px}.xy-list-item .left .image.round[data-v-8a603026]{width:72px;height:72px;border-radius:50%}.xy-list-item .content[data-v-8a603026]{height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-align-self:center;align-self:center}.xy-list-item .content .title[data-v-8a603026]{padding:8px 0;font-size:15px;color:#262b3a;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.xy-list-item .content .title .right[data-v-8a603026]{font-size:12px;-webkit-transform:scale(.9);transform:scale(.9);color:#909399}.xy-list-item .content .info[data-v-8a603026]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.xy-list-item .content .info .left[data-v-8a603026]{font-size:14px;color:#909399}.xy-list-item .content .info .right[data-v-8a603026]{font-size:12px;color:#909399}.xy-list-item .right[data-v-8a603026]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%}.xy-list-item .right .current[data-v-8a603026]{font-size:12px;color:#909399}.xy-list-item .right .more[data-v-8a603026]{margin-right:-5px;font-size:18px;color:#909399}.xy-list-item.t-link .content .title .left uni-text[data-v-8a603026]{font-size:15px!important;font-weight:400!important;color:#303133!important}.xy-list-item.t-media[data-v-8a603026]{padding:8px}.xy-list-item.t-media .content .title[data-v-8a603026]{padding:0}.xy-list-item.t-button .content[data-v-8a603026]{width:auto}.xy-list-item.t-button .content .info[data-v-8a603026]{display:none}.xy-list-item.t-input .content .title .left[data-v-8a603026]{min-width:40px}.xy-list-item.t-input .content .title .right[data-v-8a603026]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:15px;-webkit-transform:scale(1);transform:scale(1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;width:100px}',""]),t.exports=e},f719:function(t,e,i){"use strict";var n=i("1a85"),a=i.n(n);a.a}}]);