(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home~pages-ishop-item-info~pages-ishop-order_return-info"],{"0589":function(t,n,a){"use strict";var e={uniTransition:a("755b").default},o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.showPopup?a("v-uni-view",{staticClass:"uni-popup",class:[t.popupstyle],on:{touchmove:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=t.$handleEvent(n),t.clear.apply(void 0,arguments)}}},[t.maskShow?a("uni-transition",{attrs:{"mode-class":["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onTap.apply(void 0,arguments)}}}):t._e(),a("uni-transition",{attrs:{"mode-class":t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},i=[];a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}))},"088b":function(t,n,a){"use strict";var e,o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.isShow?a("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[t.ani.in],style:"transform:"+t.transform+";"+t.stylesObject,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.change.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[];a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}))},"0e47":function(t,n,a){"use strict";var e=a("ee27");a("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(a("755b")),i=e(a("f80a")),r={name:"UniPopup",components:{uniTransition:o.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},provide:function(){return{popup:this}},mixins:[i.default],watch:{type:{handler:function(t){this[this.config[t]]()},immediate:!0},maskClick:function(t){this.mkclick=t}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){new Promise((function(n){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0,t.$nextTick((function(){n()}))}),50)})).then((function(n){clearTimeout(t.msgtimer),t.msgtimer=setTimeout((function(){t.customOpen&&t.customOpen()}),100),t.$emit("change",{show:!0,type:t.type})}))}))},close:function(t){var n=this;this.showTrans=!1,this.$nextTick((function(){n.$emit("change",{show:!1,type:n.type}),clearTimeout(n.timer),n.customOpen&&n.customClose(),n.timer=setTimeout((function(){n.showPopup=!1}),300)}))},onTap:function(){this.mkclick&&this.close()},top:function(){this.popupstyle="top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0}},bottom:function(){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0}},center:function(){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"}}}};n.default=r},"14e6":function(t,n,a){"use strict";a.r(n);var e=a("5f0e"),o=a("2b32");for(var i in o)"default"!==i&&function(t){a.d(n,t,(function(){return o[t]}))}(i);var r,s=a("f0c5"),c=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"2875f8fa",null,!1,e["a"],r);n["default"]=c.exports},"23ee":function(t,n,a){"use strict";var e=a("a3c6"),o=a.n(e);o.a},"2b32":function(t,n,a){"use strict";a.r(n);var e=a("2cb6"),o=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=o.a},"2cb6":function(t,n,a){"use strict";(function(t){a("ac1f"),a("466d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"XyImage",props:{src:{type:String,default:""},mode:{type:String,default:""},"lazy-load":{type:Boolean,default:!1},"fade-show":{type:Boolean,default:!0},webp:{type:Boolean,default:!1},"show-menu-by-longpress":{type:Boolean,default:!1},placeholder:{type:String,default:""},complete:{type:Function,default:null}},watch:{src:function(t,n){t&&this.convert(t)}},data:function(){return{native:this.placeholder}},created:function(){this.convert(this.src)},methods:{convert:function(n){var a=this;if(n.match(/(http:|https:)/)){var e=this.util.imageCache(n,(function(t){a.native=t,a.complete&&a.complete(t)}));t.log(n+"->"+e),this.native=e}else this.native=n},load:function(){this.$emit("load")},error:function(){this.$emit("error")}}};n.default=e}).call(this,a("5a52")["default"])},"3eb9":function(t,n,a){var e=a("c42f");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("56f0cb1c",e,!0,{sourceMap:!1,shadowMode:!1})},"4f25":function(t,n,a){"use strict";var e=a("ee27");a("4160"),a("a9e3"),a("ac1f"),a("5319"),a("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(a("f3f3")),i={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,o.default)({},this.styles,{"transition-duration":this.duration/1e3+"s"}),n="";for(var a in t){var e=this.toLine(a);n+=e+":"+t[a]+";"}return n}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var n in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===n?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[n]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var n=this,a=this.getTranfrom(t);for(var e in this.transform="",a)"opacity"===e?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(a[e]," ");this.timer=setTimeout((function(){t||(n.isShow=!1),n.$emit("change",{detail:n.isShow})}),this.duration)},getTranfrom:function(t){var n={transform:""};return this.modeClass.forEach((function(a){switch(a){case"fade":n.opacity=t?1:0;break;case"slide-top":n.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":n.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":n.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":n.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":n.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":n.transform+="scale(".concat(t?1:1.2,") ");break}})),n},_modeClassArr:function(t){var n=this.modeClass;if("string"!==typeof n){var a="";return n.forEach((function(n){a+=n+"-"+t+","})),a.substr(0,a.length-1)}return n+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};n.default=i},"5f0e":function(t,n,a){"use strict";var e,o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-image",{staticClass:"xy-image",attrs:{src:t.native,mode:t.mode,"lazy-load":this.$props["lazy-load"],"fade-show":this.$props["fade-show"],"show-menu-by-longpress":this.$props["show-menu-by-longpress"],webp:t.webp},on:{load:function(n){arguments[0]=n=t.$handleEvent(n),t.load.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.error.apply(void 0,arguments)}}})},i=[];a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}))},"755b":function(t,n,a){"use strict";a.r(n);var e=a("088b"),o=a("84ec");for(var i in o)"default"!==i&&function(t){a.d(n,t,(function(){return o[t]}))}(i);a("23ee");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"b87204dc",null,!1,e["a"],r);n["default"]=c.exports},"82f7":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,".uni-transition[data-v-b87204dc]{-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-b87204dc]{opacity:0}.fade-active[data-v-b87204dc]{opacity:1}.slide-top-in[data-v-b87204dc]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-b87204dc]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-b87204dc]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-b87204dc]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-b87204dc]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-b87204dc]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-b87204dc]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-b87204dc]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-b87204dc]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-b87204dc]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-b87204dc]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""]),t.exports=n},"84ec":function(t,n,a){"use strict";a.r(n);var e=a("4f25"),o=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=o.a},9355:function(t,n,a){"use strict";a.r(n);var e=a("0589"),o=a("b508");for(var i in o)"default"!==i&&function(t){a.d(n,t,(function(){return o[t]}))}(i);a("b529");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"537791d4",null,!1,e["a"],r);n["default"]=c.exports},a3c6:function(t,n,a){var e=a("82f7");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("01872def",e,!0,{sourceMap:!1,shadowMode:!1})},b508:function(t,n,a){"use strict";a.r(n);var e=a("0e47"),o=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=o.a},b529:function(t,n,a){"use strict";var e=a("3eb9"),o=a.n(e);o.a},c42f:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.uni-popup[data-v-537791d4]{position:fixed;z-index:99}.uni-popup__mask[data-v-537791d4]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-537791d4]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-mask[data-v-537791d4]{opacity:1}.uni-bottom-mask[data-v-537791d4]{opacity:1}.uni-center-mask[data-v-537791d4]{opacity:1}.uni-popup__wrapper[data-v-537791d4]{display:block;position:absolute}.top[data-v-537791d4]{top:var(--window-top)}.bottom[data-v-537791d4]{bottom:0}.uni-popup__wrapper-box[data-v-537791d4]{display:block;position:relative;\n  /* iphonex 等安全区设置，底部安全区适配 */padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.content-ani[data-v-537791d4]{-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-content[data-v-537791d4]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-537791d4]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-537791d4]{-webkit-transform:scale(1);transform:scale(1);opacity:1}',""]),t.exports=n},d566:function(t,n,a){"use strict";var e=a("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,i=e(a("fc11")),r=(o={created:function(){"message"===this.type&&(this.maskShow=!1,this.children=null)}},(0,i.default)(o,"created",(function(){"message"===this.type&&(this.maskShow=!1,this.childrenMsg=null)})),(0,i.default)(o,"methods",{customOpen:function(){this.childrenMsg&&this.childrenMsg.open()},customClose:function(){this.childrenMsg&&this.childrenMsg.close()}}),o);n.default=r},f80a:function(t,n,a){"use strict";var e=a("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(a("d566")),i={top:"top",bottom:"bottom",center:"center",message:"top",dialog:"center",share:"bottom"},r={data:function(){return{config:i}},mixins:[o.default]};n.default=r}}]);