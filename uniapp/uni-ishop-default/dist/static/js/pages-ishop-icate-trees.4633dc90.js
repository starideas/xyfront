(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ishop-icate-trees"],{"029ad":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={xyImage:n("aa77").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-scroll-view",{staticClass:"left-aside",attrs:{"scroll-y":!0}},t._l(t.flist,(function(e,i){return n("v-uni-view",{key:e.id,staticClass:"f-item b-b",class:{active:e.id===t.currentId},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tabtap(i,e)}}},[t._v(t._s(e.title))])})),1),n("v-uni-scroll-view",{staticClass:"right-aside",attrs:{"scroll-with-animation":!0,"scroll-y":!0,"scroll-top":t.tabScrollTop},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.asideScroll.apply(void 0,arguments)}}},t._l(t.slist,(function(e){return n("v-uni-view",{key:e.id,staticClass:"s-list",attrs:{id:"main-"+e.id}},[n("v-uni-text",{staticClass:"s-item"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"t-list"},t._l(e.children,(function(e){return n("v-uni-view",{key:e.id,staticClass:"t-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navToList(e.id)}}},[n("xy-image",{attrs:{src:e.cover}}),n("v-uni-text",[t._v(t._s(e.title))])],1)})),1)],1)})),1)],1)},o=[]},3064:function(t,e,n){var i=n("b7d5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("38bb3f9b",i,!0,{sourceMap:!1,shadowMode:!1})},"320d8":function(t,e,n){var i=n("a306");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("16ff2611",i,!0,{sourceMap:!1,shadowMode:!1})},4484:function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("99af"),n("4de4"),n("c740"),n("4160"),n("26e9"),n("ac1f"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),o={data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:1,flist:[],slist:[],tlist:[]}},onLoad:function(){this.loadData()},onPullDownRefresh:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadData();case 2:uni.stopPullDownRefresh(),setTimeout((function(){uni.stopPullDownRefresh()}),5e3);case 4:case"end":return e.stop()}}),e)})))()},onShareAppMessage:function(e){return"button"===e.from&&t("log",e.target," at pages/ishop/icate/trees.vue:46"),{title:this.$store.state.app.siteInfo.title,path:"/pages/ishop/icate/trees"}},methods:{loadData:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/ishop/icate/trees",method:"get"});case 2:n=e.sent,200==n.code&&(t.flist=n.data.dataList,t.currentId=n.data.dataList[0]["id"],t.flist.forEach((function(e){e.children&&e.children.forEach((function(e){e.children&&(t.slist=t.slist.concat(e.children))}))})));case 4:case"end":return e.stop()}}),e)})))()},tabtap:function(t,e){var n=this;this.sizeCalcState||this.calcSize(),this.currentId=e.id,this.flist[t].children&&this.flist[t].children.forEach((function(t){var e=n.slist.findIndex((function(e){return e.pid===t.id}));if(e>0)return n.tabScrollTop=n.slist[e].top,!0}))},asideScroll:function(t){var e=this;this.sizeCalcState||this.calcSize();var n=t.detail.scrollTop,i=this.slist.filter((function(t){return t.top<=n})).reverse();i.length>0&&this.flist.forEach((function(t){t.children&&t.children.forEach((function(n){n.id==i[0].pid&&(e.currentId=t.id)}))}))},calcSize:function(){var t=0;this.slist.forEach((function(e){var n=uni.createSelectorQuery().select("#main-"+e.id);n.fields({size:!0},(function(n){e.top=t,t+=n.height,e.bottom=t})).exec()})),this.sizeCalcState=!0},navToList:function(t){uni.navigateTo({url:"/pages/ishop/item/lists?icateId=".concat(t)})}}};e.default=o}).call(this,n("0de9")["log"])},"69a8":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-image",{staticClass:"xy-image",attrs:{src:t.native,mode:t.mode,"lazy-load":this.$props["lazy-load"],"fade-show":this.$props["fade-show"],"show-menu-by-longpress":this.$props["show-menu-by-longpress"],webp:t.webp},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.load.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)}}})},o=[]},a306:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-43734e9e],\nuni-page[data-v-43734e9e],\n.content[data-v-43734e9e]{height:100%;background-color:#f8f8f8;padding-bottom:0}.content[data-v-43734e9e]{display:-webkit-box;display:-webkit-flex;display:flex}.left-aside[data-v-43734e9e]{-webkit-flex-shrink:0;flex-shrink:0;width:100px;height:100%;background-color:#fff}.f-item[data-v-43734e9e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:50px;font-size:13px;color:#606266;position:relative}.f-item.active[data-v-43734e9e]{color:#e23435;background:#f8f8f8}.f-item.active[data-v-43734e9e]:before{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:25px;width:%?8?%;background-color:#e23435;border-radius:0 4px 4px 0;opacity:.8}.right-aside[data-v-43734e9e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;padding-left:%?20?%}.s-item[data-v-43734e9e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:35px;padding-top:4px;font-size:12px;color:#303133}.t-list[data-v-43734e9e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;width:100%;background:#fff;padding-top:%?12?%}.t-list[data-v-43734e9e]:after{content:"";-webkit-box-flex:99;-webkit-flex:99;flex:99;height:0}.t-item[data-v-43734e9e]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:33%;font-size:12px;color:#666;padding-bottom:10px}.t-item uni-image[data-v-43734e9e]{width:%?140?%;height:%?140?%}body.?%PAGE?%[data-v-43734e9e]{background-color:#f8f8f8}',""]),t.exports=e},aa77:function(t,e,n){"use strict";n.r(e);var i=n("69a8"),a=n("f796");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("ab10");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"7cb704fd",null,!1,i["a"],r);e["default"]=c.exports},ab10:function(t,e,n){"use strict";var i=n("3064"),a=n.n(i);a.a},b7d5:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*修复小程序中图片宽高错误*/.xy-image[data-v-7cb704fd]{\n}",""]),t.exports=e},bd95:function(t,e,n){"use strict";n.r(e);var i=n("029ad"),a=n("c27d");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("f1c5");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"43734e9e",null,!1,i["a"],r);e["default"]=c.exports},c27d:function(t,e,n){"use strict";n.r(e);var i=n("4484"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},dec0:function(t,e,n){"use strict";(function(t){n("ac1f"),n("466d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"XyImage",props:{src:{type:String,default:""},mode:{type:String,default:""},"lazy-load":{type:Boolean,default:!1},"fade-show":{type:Boolean,default:!0},webp:{type:Boolean,default:!1},"show-menu-by-longpress":{type:Boolean,default:!1},placeholder:{type:String,default:""},complete:{type:Function,default:null}},watch:{src:function(t,e){t&&this.convert(t)}},data:function(){return{native:this.placeholder}},created:function(){this.convert(this.src)},methods:{convert:function(e){var n=this;if(e.match(/(http:|https:)/)){var i=this.util.imageCache(e,(function(t){n.native=t,n.complete&&n.complete(t)}));t("log",e+"->"+i," at node_modules/xyui/flex-ui/src/xy-image/xy-image.vue:72"),this.native=i}else this.native=e},load:function(){this.$emit("load")},error:function(){this.$emit("error")}}};e.default=i}).call(this,n("0de9")["log"])},f1c5:function(t,e,n){"use strict";var i=n("320d8"),a=n.n(i);a.a},f796:function(t,e,n){"use strict";n.r(e);var i=n("dec0"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);