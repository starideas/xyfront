(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-house-decorate-brand_detail"],{"110c":function(t,e,r){"use strict";r.r(e);var n=r("d232"),a=r("a7da");for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);var o,s=r("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"179a4cde",null,!1,n["a"],o);e["default"]=l.exports},"12b9":function(t,e,r){"use strict";(function(t){var n=r("4ea4");r("ac1f"),r("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var a=n(r("1da1")),i=n(r("2840")),o=(r("2f62"),{components:{jyfParser:i.default},data:function(){return{id:0,info:{extra:{from_title:""}}}},onLoad:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.id=t.id;case 1:case"end":return r.stop()}}),r)})))()},onShow:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loadData();case 1:case"end":return e.stop()}}),e)})))()},computed:{},onShareAppMessage:function(e){return"button"===e.from&&t("log",e.target," at pages/house/decorate/brand_detail.vue:61"),{title:"万象九悦业主社群",path:"/pages/house/decorate/brand_detail?id="+this.id}},methods:{loadData:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/house_decorate/brand/info/"+t.id,method:"get"});case 2:r=e.sent,200==r.code&&(r.data.info.content=r.data.info.content.replace(/\<img/gi,'<img style="max-width:100%;height:auto" '),t.info=r.data.info);case 4:case"end":return e.stop()}}),e)})))()}}});e.default=o}).call(this,r("0de9")["log"])},"1c99":function(t,e,r){"use strict";r.r(e);var n=r("dcd3"),a=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},"258d":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[t.nodes.length?t._e():t._t("default"),r("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[r("div",{attrs:{id:"rtf"+t.uid}})])],2)},i=[]},2840:function(t,e,r){"use strict";r.r(e);var n=r("258d"),a=r("1c99");for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);r("5082");var o,s=r("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"a3cd6254",null,!1,n["a"],o);e["default"]=l.exports},"2a66":function(t,e,r){var n=r("ec3f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("4f06").default;a("5fff7cca",n,!0,{sourceMap:!1,shadowMode:!1})},3688:function(t,e,r){"use strict";var n=r("b292"),a=r.n(n);a.a},"47a6":function(t,e,r){"use strict";r.r(e);var n=r("9391"),a=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},5082:function(t,e,r){"use strict";var n=r("2a66"),a=r.n(n);a.a},"606e":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.visible?r("v-uni-button",{staticClass:"xy-button",class:[t.full?"block":"",t.size?"xy-button-"+t.size:"xy-button",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],attrs:{"open-type":t.openType},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getUserInfo.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[]},"65da":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */\r\n/* tag start*/.xy-button[data-v-677ff718]{padding:15px 13px;font-size:14px;-webkit-border-radius:3px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-button.block[data-v-677ff718]{display:block}.xy-button-large[data-v-677ff718]{padding:18px 10px;font-size:14px;-webkit-border-radius:3px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-medium[data-v-677ff718]{padding:10px 10px;font-size:13px;-webkit-border-radius:3px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-small[data-v-677ff718]{padding:6px 4px;font-size:12px;-webkit-border-radius:3px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:12px}.xy-button-outline[data-v-677ff718]{position:relative;background:none;color:#2d8cf0;font-weight:400}.xy-button-outline[data-v-677ff718]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;-webkit-border-radius:4px;border-radius:4px;border:2px solid #2d8cf0}.xy-button-fillet[data-v-677ff718]{-webkit-border-radius:25px;border-radius:25px}.xy-white.xy-button-fillet[data-v-677ff718]::after{-webkit-border-radius:40px;border-radius:40px}.xy-button-outline-fillet[data-v-677ff718]::after{-webkit-border-radius:40px;border-radius:40px}.xy-button-fillet-left[data-v-677ff718]{-webkit-border-radius:25px 0 0 25px;border-radius:25px 0 0 25px}.xy-button-fillet-right[data-v-677ff718]{-webkit-border-radius:0 25px 25px 0;border-radius:0 25px 25px 0}.xy-button-fillet-left.xy-button-outline[data-v-677ff718]::after{-webkit-border-radius:50px 0 0 50px;border-radius:50px 0 0 50px}.xy-button-fillet-right.xy-button-outline[data-v-677ff718]::after{-webkit-border-radius:0 50px 50px 0;border-radius:0 50px 50px 0}\r\n/* tag end*/\r\n/* color start*/.xy-primary[data-v-677ff718]{background:#2d8cf0;color:#fff}.xy-primary-outline[data-v-677ff718]{color:#2d8cf0;background:none}.xy-primary-outline[data-v-677ff718]::after{border:1px solid #2d8cf0}.xy-light-primary[data-v-677ff718]{background:#5cadff;color:#fff}.xy-dark-primary[data-v-677ff718]{background:#2b85e4;color:#fff}.xy-info[data-v-677ff718]{background:#2db7f5;color:#fff}.xy-info-outline[data-v-677ff718]{color:#2db7f5;background:none}.xy-info-outline[data-v-677ff718]::after{border:1px solid #2db7f5}.xy-success[data-v-677ff718]{background:#19be6b;color:#fff}.xy-success-outline[data-v-677ff718]{color:#19be6b;background:none}.xy-success-outline[data-v-677ff718]::after{border:1px solid #19be6b}.xy-error[data-v-677ff718]{background:#dd524d;color:#fff}.xy-error-outline[data-v-677ff718]{color:#dd524d;background:none}.xy-error-outline[data-v-677ff718]::after{border:1px solid #dd524d}.xy-warning[data-v-677ff718]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-677ff718]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-677ff718]::after{border:1px solid #f0ad4e}.xy-white[data-v-677ff718]{background:#fff;color:#333}.xy-white-outline[data-v-677ff718]{color:#fff;background:none}.xy-white-outline[data-v-677ff718]::after{border:1px solid #fff}.xy-black[data-v-677ff718]{background:#000;color:#fff}.xy-black-outline[data-v-677ff718]{color:#333;background:none}.xy-black-outline[data-v-677ff718]::after{border:1px solid #333}.xy-translucent[data-v-677ff718]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-677ff718]{background:#ededed}.xy-phcolor-gray[data-v-677ff718]{background:#ccc}.xy-divider-gray[data-v-677ff718]{background:#eaeef1}.xy-btn-gray[data-v-677ff718]{background:#ededed;color:#999}.xy-hover-gray[data-v-677ff718]{background:#f7f7f9}.xy-bg-gray[data-v-677ff718]{background:#fafafa}.xy-light-blue[data-v-677ff718]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-677ff718]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-677ff718]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-677ff718]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-677ff718]{color:#999;background:none}.xy-gray-outline[data-v-677ff718]::after{border:1px solid #ccc}\r\n/* color end*/',""]),t.exports=e},"6cd6":function(t,e,r){"use strict";r("d3b7"),r("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"xy-copy",props:{content:{type:String,default:""}},methods:{handleClick:function(){var t=this.content;t="string"===typeof t?t:t.toString(),document.queryCommandSupported("copy")||uni.showToast({title:"浏览器不支持",icon:"none",duration:3e3});var e=document.createElement("textarea");e.value=t,e.readOnly="readOnly",document.body.appendChild(e),e.select(),e.setSelectionRange(0,t.length);var r=document.execCommand("copy");r?uni.showToast({title:"复制成功",icon:"none"}):uni.showToast({title:"复制失败，请检查h5中调用该方法的方式，是不是用户点击的方式调用的，如果不是请改为用户点击的方式触发该方法，因为h5中安全性，不能js直接调用！",icon:"none",duration:3e3}),e.remove()}}};e.default=n},9391:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"xy-button",props:{openType:{type:String,default:""},type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},full:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{getUserInfo:function(t){this.$emit("getuserinfo",t)},handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"xy-"+t+"-outline":"xy-"+t},getClassName:function(t,e){var r=e?"xy-button-outline ":"";return"square"!=t&&("circle"==t?r+=e?"xy-button-outline-fillet":"xy-button-fillet":"circleLeft"==t?r+="xy-button-fillet-left":"circleRight"==t&&(r+="xy-button-fillet-right")),r}}};e.default=n},a173:function(t,e,r){r("ac1f"),r("1276");var n={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:a(" , ,\t,\r,\n,\f"),boolAttrs:a("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:a("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:a("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:a("a,colgroup,fieldset,legend"),selfClosingTags:a("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:a("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function a(t){for(var e=Object.create(null),r=t.split(","),n=r.length;n--;)e[r[n]]=!0;return e}t.exports=n},a7da:function(t,e,r){"use strict";r.r(e);var n=r("6cd6"),a=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},b0d0:function(t,e,r){"use strict";r.r(e);var n=r("606e"),a=r("47a6");for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);r("3688");var o,s=r("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"677ff718",null,!1,n["a"],o);e["default"]=l.exports},b292:function(t,e,r){var n=r("65da");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("4f06").default;a("1e7457c4",n,!0,{sourceMap:!1,shadowMode:!1})},b85c:function(t,e,r){"use strict";r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var n=a(r("06c5"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=(0,n.default)(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return s=t.done,t},e:function(t){l=!0,o=t},f:function(){try{s||null==r["return"]||r["return"]()}finally{if(l)throw o}}}}},c790:function(t,e,r){"use strict";r.r(e);var n=r("d083"),a=r("dd07");for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);var o,s=r("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"5149ec0e",null,!1,n["a"],o);e["default"]=l.exports},d083:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var n={xyCopy:r("110c").default,xyButton:r("b0d0").default},a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"article bg-white p-a-sm"},[r("v-uni-view",{staticClass:"title ts-22 m-b-sm"},[t._v(t._s(t.info.title))]),t.info.wxid?r("v-uni-view",[r("v-uni-view",{staticClass:"flex space-center m-t"},[r("v-uni-view",{staticClass:"p-b"},[r("xy-copy",{attrs:{content:t.info.wxid}},[r("xy-button",{attrs:{type:"success",size:"default"}},[r("v-uni-text",{staticClass:"xyicon xyicon-weixin"}),t._v("点击这里复制该商家微信号")],1)],1)],1)],1)],1):t._e(),r("v-uni-view",{staticClass:"content"},[r("jyf-parser",{ref:"article",attrs:{html:t.info.content}})],1),r("v-uni-view",{staticClass:"bg-danger text-white ts-14 tw6 text-center m-b p-a-sm"},[t._v("因为群二维码会过期，如果未及时更新，您可以在页面顶部复制微信号直接加商家微信。")]),r("v-uni-view",{staticClass:"text-error p-a-sm ts-16 tw6 m-b-md"},[t._v("群主仅收集群内业主提供的商业群二维码，请大家选择品牌合作时仍需做好信息甄别。\n            如发现信息有误，可以提交群主立即修改。")])],1)},i=[]},d232:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},i=[]},dcd3:function(t,e,r){"use strict";var n=r("4ea4");r("99af"),r("caad"),r("c975"),r("acd8"),r("e25e"),r("ac1f"),r("2532"),r("466d"),r("5319"),r("841c"),r("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,i=n(r("b85c")),o=uni.getSystemInfoSync(),s=o.windowWidth,l=(o.platform,r("a173")),d={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,r=this.length;e<r;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var r,n=e.split("://")[0],a=n.length;r=e[a];a++){if("/"==r&&"/"!=e[a-1]&&"/"!=e[a+1])break;n+=Math.random()>.5?r.toUpperCase():r}return n+=e.substr(a),this[t]=n}if(this[t]=e,e.includes("data:image")){var i=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!i)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),a&&(this.search=function(e){return a(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var r=this;if(t){var n=document.createElement("div");e?this.rtf?this.rtf.appendChild(n):this.rtf=n:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=n),n.innerHTML=this._handleHtml(t,e);for(var a,o=this.rtf.getElementsByTagName("style"),d=0;a=o[d++];)a.innerHTML=a.innerHTML.replace(/body/g,"#rtf"+this._uid),a.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,n=0;e=t[n++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),r._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var c=this,u=this.rtf.getElementsByTagName("title");u.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:u[0].innerText});var f=function(t){var e=t.getAttribute("src");r.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(r.domain.includes("://")?r.domain.split("://")[0]:"")+":"+e:t.src=r.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=r.domain+"/"+e))};this.imgList.length=0;for(var p,h=this.rtf.getElementsByTagName("img"),b=0,v=0;p=h[b];b++)parseInt(p.style.width||p.getAttribute("width"))>s&&(p.style.height="auto"),f(p),p.hasAttribute("ignore")||"A"==p.parentElement.nodeName||(p.i=v++,c.imgList.push(p.getAttribute("original-src")||p.src||p.getAttribute("data-src")),p.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},c.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:c.imgList})}),p.onerror=function(){l.errorImg&&(c.imgList[this.i]=this.src=l.errorImg),c.$emit("error",{source:"img",target:this})},c.lazyLoad&&this._observer&&p.src&&0!=p.i&&(p.setAttribute("data-src",p.src),p.removeAttribute("src"),this._observer.observe(p));var g,y=this.rtf.getElementsByTagName("a"),x=(0,i.default)(y);try{for(x.s();!(g=x.n()).done;){var m=g.value;m.onclick=function(t){t.stopPropagation();var e=!0,r=this.getAttribute("href");if(c.$emit("linkpress",{href:r,ignore:function(){return e=!1}}),e&&r)if("#"==r[0])c.useAnchor&&c.navigateTo({id:r.substr(1)});else{if(0==r.indexOf("http")||0==r.indexOf("//"))return!0;uni.navigateTo({url:r})}return!1}}}catch(M){x.e(M)}finally{x.f()}var w=this.rtf.getElementsByTagName("video");c.videoContexts=w;for(var k,_=0;k=w[_++];)f(k),k.style.maxWidth="100%",k.onerror=function(){c.$emit("error",{source:"video",target:this})},k.onplay=function(){if(c.autopause)for(var t,e=0;t=c.videoContexts[e++];)t!=this&&t.pause()};var C,T,A=this.rtf.getElementsByTagName("audio"),S=(0,i.default)(A);try{for(S.s();!(C=S.n()).done;){var B=C.value;f(B),B.onerror=function(){c.$emit("error",{source:"audio",target:this})}}}catch(M){S.e(M)}finally{S.f()}if(this.autoscroll){var O,E=this.rtf.getElementsByTagName("table"),I=(0,i.default)(E);try{for(I.s();!(O=I.n()).done;){var L=O.value,$=document.createElement("div");$.style.overflow="scroll",L.parentNode.replaceChild($,L),$.appendChild(L)}}catch(M){I.e(M)}finally{I.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){r.nodes=[1],r.$emit("load")})),setTimeout((function(){return r.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){r.rect=r.rtf.getBoundingClientRect(),r.rect.height==T&&(r.$emit("ready",r.rect),clearInterval(r._timer)),T=r.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var r=" ",n=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(r,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(r,".").concat(t.id):"")).boundingClientRect();this._in?n.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():n.selectViewport().scrollOffset(),n.exec((function(r){if(!r[0])return t.fail&&t.fail("Label not found");var n=r[1].scrollTop+r[0].top-(r[2]?r[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=n:uni.pageScrollTo({scrollTop:n,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var r="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var n in l.userAgentStyles)r+="".concat(n,"{").concat(l.userAgentStyles[n],"}");for(n in this.tagStyle)r+="".concat(n,"{").concat(this.tagStyle[n],"}");r+="</style>",t=r+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"}))),t}}};e.default=d},dd07:function(t,e,r){"use strict";r.r(e);var n=r("12b9"),a=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},ec3f:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-a3cd6254{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-a3cd6254{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e}}]);