(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_otc-ad-lists~pages-coin_otc-order-my~pages-home"],{"0200":function(t,a,e){"use strict";var n=e("5125"),i=e.n(n);i.a},"0edc":function(t,a,e){"use strict";e.r(a);var n=e("3799"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"0f3e":function(t,a,e){"use strict";var n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.list.length>0?e("v-uni-view",{staticClass:"xy-tabs"},[e("v-uni-scroll-view",{attrs:{"scroll-x":"true","scroll-with-animation":!0,"scroll-left":t.tabsScrollLeft},on:{scroll:function(a){arguments[0]=a=t.$handleEvent(a),t.scroll.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tab",attrs:{id:"tab_list"}},t._l(t.list,(function(a,n){return e("v-uni-view",{key:n,class:["tab__item",{"tab__item--active":(t.showActive||0==n)&&t.currentIndex===n}],style:{color:t.currentIndex===n?""+t.itemColor:""},attrs:{id:"tab_item"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.select(a,n)}}},[e("v-uni-view",{staticClass:"tab__item-title"},[t._t("title",null,{title:a.title})],2),t.showTitleSlot?t._e():e("v-uni-view",{staticClass:"tab__item-title"},[t._v(t._s(a.title))])],1)})),1),e("v-uni-view",{staticClass:"tab__line",style:{background:t.lineColor,width:t.lineStyle.width,transform:t.lineStyle.transform,transitionDuration:t.lineStyle.transitionDuration}})],1)],1):t._e()},r=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}))},"250b":function(t,a,e){"use strict";(function(t){e("a9e3"),e("ac1f"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={props:{value:[Number,String],list:{type:[Array,Object],default:function(){return[]}},showActive:{type:Boolean,default:!0},itemColor:String,lineColor:String,lineAnimated:{type:Boolean,default:!0}},data:function(){return{currentIndex:0,lineStyle:{},scrollLeft:0,tabsScrollLeft:0,duration:.3}},computed:{showTitleSlot:function(){return this.$scopedSlots.title}},watch:{list:function(){this.setTabList()},value:function(){this.setTabList()}},mounted:function(){this.currentIndex=this.value,this.setTabList(),this.lineAnimated||(this.duration=0),t.log(this.$scopedSlots)},methods:{select:function(t,a){this.$emit("input",a),this.$emit("tab-click",a)},setTabList:function(){var t=this;this.$nextTick((function(){t.list.length>0&&(t.setLine(),t.scrollIntoView())}))},setLine:function(){var t=this,a=0,e=0;this.getElementData("#tab_item",(function(n){var i=n[t.currentIndex];a=i.width/2,e=i.width/2-n[0].left+i.left,t.lineStyle={width:"".concat(a,"px"),transform:"translateX(".concat(e,"px) translateX(-50%)"),transitionDuration:"".concat(t.duration,"s")}}))},scrollIntoView:function(){var t=this,a=0;this.getElementData("#tab_list",(function(e){var n=e[0];t.getElementData("#tab_item",(function(e){var i=e[t.currentIndex];a=i.width/2-n.left+i.left-n.width/2-t.scrollLeft,t.tabsScrollLeft=t.scrollLeft+a}))}))},getElementData:function(t,a){uni.createSelectorQuery().in(this).selectAll(t).boundingClientRect().exec((function(t){a(t[0])}))},scroll:function(t){this.scrollLeft=t.detail.scrollLeft}}};a.default=n}).call(this,e("5a52")["default"])},3037:function(t,a,e){"use strict";e.r(a);var n=e("5259"),i=e("0edc");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("f62c");var o,l=e("f0c5"),c=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"cb2ad2a0",null,!1,n["a"],o);a["default"]=c.exports},3799:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"xy-tag",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,a){return a?"xy-"+t+"-outline":"xy-"+t},getClassName:function(t,a){var e=a?"xy-tag-outline ":"";return"square"!=t&&("circle"==t?e+=a?"xy-tag-outline-fillet":"xy-tag-fillet":"circleLeft"==t?e+="xy-tag-fillet-left":"circleRight"==t&&(e+="xy-tag-fillet-right")),e}}};a.default=n},5125:function(t,a,e){var n=e("aaab");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("48c99172",n,!0,{sourceMap:!1,shadowMode:!1})},5259:function(t,a,e){"use strict";var n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.visible?e("v-uni-view",{staticClass:"xy-tag",class:[t.size?"xy-tag-"+t.size:"xy-tag",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},r=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}))},9668:function(t,a,e){var n=e("ee0d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("5348ab44",n,!0,{sourceMap:!1,shadowMode:!1})},a839:function(t,a,e){"use strict";e.r(a);var n=e("0f3e"),i=e("f5b9");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("0200");var o,l=e("f0c5"),c=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"b8299588",null,!1,n["a"],o);a["default"]=c.exports},aaab:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.xy-tabs[data-v-b8299588]{position:relative;background:#fff}.xy-tabs[data-v-b8299588] uni-scroll-view::-webkit-scrollbar,\n.xy-tabs[data-v-b8299588] .uni-scroll-view::-webkit-scrollbar{display:none}.xy-tabs .tab[data-v-b8299588]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;font-size:16px;padding-bottom:0;white-space:nowrap}.xy-tabs .tab__item[data-v-b8299588]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;line-height:38px;color:#333}.xy-tabs .tab__item--active[data-v-b8299588]{color:#0cbf92}.xy-tabs .tab__item-title[data-v-b8299588]{font-weight:400;margin:0 10px}.xy-tabs .tab__line[data-v-b8299588]{display:block;height:3px;position:absolute;bottom:0;left:0;z-index:1;border-radius:1px;position:relative;background:#0cbf92}',""]),t.exports=a},ee0d:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* tag start*/.xy-tag[data-v-cb2ad2a0]{padding:8px 13px;font-size:14px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-tag-medium[data-v-cb2ad2a0]{padding:4px 4px;font-size:12px;border-radius:3px;\n  /* display: inline-block;\n  vertical-align: middle; */line-height:14px}.xy-tag-small[data-v-cb2ad2a0]{padding:3px 4px;font-size:12px;border-radius:3px;\n  /* display: inline-block;\n  vertical-align: middle; */line-height:12px}.xy-tag-outline[data-v-cb2ad2a0]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-tag-outline[data-v-cb2ad2a0]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:4px;border:2px solid #0cbf92}.xy-tag-fillet[data-v-cb2ad2a0]{border-radius:25px}.xy-white.xy-tag-fillet[data-v-cb2ad2a0]::after{border-radius:40px}.xy-tag-outline-fillet[data-v-cb2ad2a0]::after{border-radius:40px}.xy-tag-fillet-left[data-v-cb2ad2a0]{border-radius:25px 0 0 25px}.xy-tag-fillet-right[data-v-cb2ad2a0]{border-radius:0 25px 25px 0}.xy-tag-fillet-left.xy-tag-outline[data-v-cb2ad2a0]::after{border-radius:50px 0 0 50px}.xy-tag-fillet-right.xy-tag-outline[data-v-cb2ad2a0]::after{border-radius:0 50px 50px 0}\n/* tag end*/\n/* color start*/.xy-primary[data-v-cb2ad2a0]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-cb2ad2a0]{color:#0cbf92;background:none}.xy-primary-outline[data-v-cb2ad2a0]::after{border:1px solid #0cbf92}.xy-light-primary[data-v-cb2ad2a0]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-cb2ad2a0]{background:#0cbf92;color:#fff}.xy-info[data-v-cb2ad2a0]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-cb2ad2a0]{color:#5b60ff;background:none}.xy-info-outline[data-v-cb2ad2a0]::after{border:1px solid #5b60ff}.xy-success[data-v-cb2ad2a0]{background:#19be6b;color:#fff}.xy-success-outline[data-v-cb2ad2a0]{color:#19be6b;background:none}.xy-success-outline[data-v-cb2ad2a0]::after{border:1px solid #19be6b}.xy-error[data-v-cb2ad2a0]{background:#dd524d;color:#fff}.xy-error-outline[data-v-cb2ad2a0]{color:#dd524d;background:none}.xy-error-outline[data-v-cb2ad2a0]::after{border:1px solid #dd524d}.xy-warning[data-v-cb2ad2a0]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-cb2ad2a0]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-cb2ad2a0]::after{border:1px solid #f0ad4e}.xy-white[data-v-cb2ad2a0]{background:#fff;color:#333}.xy-white-outline[data-v-cb2ad2a0]{color:#fff;background:none}.xy-white-outline[data-v-cb2ad2a0]::after{border:1px solid #fff}.xy-black[data-v-cb2ad2a0]{background:#000;color:#fff}.xy-black-outline[data-v-cb2ad2a0]{color:#333;background:none}.xy-black-outline[data-v-cb2ad2a0]::after{border:1px solid #333}.xy-translucent[data-v-cb2ad2a0]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-cb2ad2a0]{background:#ededed}.xy-phcolor-gray[data-v-cb2ad2a0]{background:#ccc}.xy-divider-gray[data-v-cb2ad2a0]{background:#eaeef1}.xy-btn-gray[data-v-cb2ad2a0]{background:#ededed;color:#999}.xy-hover-gray[data-v-cb2ad2a0]{background:#f7f7f9}.xy-bg-gray[data-v-cb2ad2a0]{background:#fafafa}.xy-light-blue[data-v-cb2ad2a0]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-cb2ad2a0]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-cb2ad2a0]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-cb2ad2a0]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-cb2ad2a0]{color:#999;background:none}.xy-gray-outline[data-v-cb2ad2a0]::after{border:1px solid #ccc}\n/* color end*/',""]),t.exports=a},f5b9:function(t,a,e){"use strict";e.r(a);var n=e("250b"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},f62c:function(t,a,e){"use strict";var n=e("9668"),i=e.n(n);i.a}}]);