(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_otc-ad-order~pages-coin_otc-order-info~pages-coin_otc-paytype-add~pages-coin_otc-paytype-~5f1e22f0"],{"0ea0":function(t,e,a){"use strict";a.r(e);var n=a("7626"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"13f9":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */\r\n/* tag start*/.xy-button[data-v-9e603a5c]{padding:15px 13px;font-size:14px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-button.block[data-v-9e603a5c]{display:block}.xy-button-large[data-v-9e603a5c]{padding:18px 10px;font-size:14px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-medium[data-v-9e603a5c]{padding:10px 10px;font-size:13px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-small[data-v-9e603a5c]{padding:6px 4px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:12px}.xy-button-outline[data-v-9e603a5c]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-button-outline[data-v-9e603a5c]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:4px;border:2px solid #0cbf92}.xy-button-fillet[data-v-9e603a5c]{border-radius:25px}.xy-white.xy-button-fillet[data-v-9e603a5c]::after{border-radius:40px}.xy-button-outline-fillet[data-v-9e603a5c]::after{border-radius:40px}.xy-button-fillet-left[data-v-9e603a5c]{border-radius:25px 0 0 25px}.xy-button-fillet-right[data-v-9e603a5c]{border-radius:0 25px 25px 0}.xy-button-fillet-left.xy-button-outline[data-v-9e603a5c]::after{border-radius:50px 0 0 50px}.xy-button-fillet-right.xy-button-outline[data-v-9e603a5c]::after{border-radius:0 50px 50px 0}\r\n/* tag end*/\r\n/* color start*/.xy-primary[data-v-9e603a5c]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-9e603a5c]{color:#0cbf92;background:none}.xy-primary-outline[data-v-9e603a5c]::after{border:1px solid #0cbf92}.xy-light-primary[data-v-9e603a5c]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-9e603a5c]{background:#0cbf92;color:#fff}.xy-info[data-v-9e603a5c]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-9e603a5c]{color:#5b60ff;background:none}.xy-info-outline[data-v-9e603a5c]::after{border:1px solid #5b60ff}.xy-success[data-v-9e603a5c]{background:#19be6b;color:#fff}.xy-success-outline[data-v-9e603a5c]{color:#19be6b;background:none}.xy-success-outline[data-v-9e603a5c]::after{border:1px solid #19be6b}.xy-error[data-v-9e603a5c]{background:#dd524d;color:#fff}.xy-error-outline[data-v-9e603a5c]{color:#dd524d;background:none}.xy-error-outline[data-v-9e603a5c]::after{border:1px solid #dd524d}.xy-warning[data-v-9e603a5c]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-9e603a5c]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-9e603a5c]::after{border:1px solid #f0ad4e}.xy-white[data-v-9e603a5c]{background:#fff;color:#333}.xy-white-outline[data-v-9e603a5c]{color:#fff;background:none}.xy-white-outline[data-v-9e603a5c]::after{border:1px solid #fff}.xy-black[data-v-9e603a5c]{background:#000;color:#fff}.xy-black-outline[data-v-9e603a5c]{color:#333;background:none}.xy-black-outline[data-v-9e603a5c]::after{border:1px solid #333}.xy-translucent[data-v-9e603a5c]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-9e603a5c]{background:#ededed}.xy-phcolor-gray[data-v-9e603a5c]{background:#ccc}.xy-divider-gray[data-v-9e603a5c]{background:#eaeef1}.xy-btn-gray[data-v-9e603a5c]{background:#ededed;color:#999}.xy-hover-gray[data-v-9e603a5c]{background:#f7f7f9}.xy-bg-gray[data-v-9e603a5c]{background:#fafafa}.xy-light-blue[data-v-9e603a5c]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-9e603a5c]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-9e603a5c]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-9e603a5c]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-9e603a5c]{color:#999;background:none}.xy-gray-outline[data-v-9e603a5c]::after{border:1px solid #ccc}\r\n/* color end*/',""]),t.exports=e},"1dcf":function(t,e,a){"use strict";a.r(e);var n=a("ddb8"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"3f07":function(t,e,a){"use strict";var n=a("4b15"),r=a.n(n);r.a},"4b15":function(t,e,a){var n=a("c769");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("2df1fb38",n,!0,{sourceMap:!1,shadowMode:!1})},7626:function(t,e,a){"use strict";(function(t){var n=a("ee27");a("c975"),a("baa5"),a("a434"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("c964")),i={name:"XyUploadImage",props:{driver:"",signUrl:"",action:"",value:"",limit:{type:[Number,String],default:1},header:{type:Object,default:{}},icon:{type:String,default:"xyicon xyicon-plus"},label:{type:String,default:""}},data:function(){return{name:"file",list:[],data:{}}},created:function(){this.limit>1?this.list=this.value:this.value&&(this.list[0]={url:this.value})},computed:{previewUrls:function(){for(var t=[],e=0;e<this.list.length;e++)t.push(this.list[e].url);return t}},methods:{preview:function(t){uni.previewImage({current:t,urls:this.previewUrls,indicator:"default",loop:!0})},deleteItem:function(t){this.list.splice(this.list.indexOf(t),1),this.limit>1?this.$emit("input",this.list):this.list[0]?this.$emit("input",this.list[0].url):this.$emit("input","")},upload:function(){var e=this;uni.chooseImage({count:this.limit,sizeType:["compressed"],success:function(){var a=(0,r.default)(regeneratorRuntime.mark((function a(n){var r,i,o,l,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=n.tempFiles,i=0;case 2:if(!(i<r.length)){a.next=14;break}return o="",l=r[i].name.lastIndexOf("."),o=r[i].name.substr(l),a.next=8,e.util.uploadFile({driver:e.driver,filePath:r[i].path,fileExt:o});case 8:c=a.sent,t.log("xy-upload-image",c),200==c.code?(e.limit>1?e.list.push(c.data):e.list=[c.data],e.limit>1?e.$emit("input",e.list):e.list[0]&&e.$emit("input",e.list[0].url)):uni.showToast({title:c.msg,duration:1500});case 11:i++,a.next=2;break;case 14:case"end":return a.stop()}}),a)})));function n(t){return a.apply(this,arguments)}return n}()})}}};e.default=i}).call(this,a("5a52")["default"])},9967:function(t,e,a){"use strict";a.r(e);var n=a("c457"),r=a("0ea0");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("3f07");var o,l=a("f0c5"),c=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,"f29ffc46",null,!1,n["a"],o);e["default"]=c.exports},baa5:function(t,e,a){var n=a("23e7"),r=a("e58c");n({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},c253:function(t,e,a){var n=a("13f9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("18e07943",n,!0,{sourceMap:!1,shadowMode:!1})},c457:function(t,e,a){"use strict";var n,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"upload-list"},[t._l(t.list,(function(e,n){return a("v-uni-view",{key:n,staticClass:"item image"},[a("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preview(n)}}}),a("v-uni-view",{staticClass:"delete",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.deleteItem(e)}}},[a("v-uni-text",{staticClass:"xyicon xyicon-close"})],1)],1)})),a("v-uni-view",{staticClass:"item upload-btn flex",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"inner"},[a("v-uni-view",{class:t.icon}),a("v-uni-view",{staticClass:"label"},[t._v(t._s(t.label))])],1)],1)],2)],1)},i=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}))},c769:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.upload-list[data-v-f29ffc46]{display:-webkit-box;display:-webkit-flex;display:flex}.upload-list .item[data-v-f29ffc46]{position:relative;width:80px;height:80px;margin-right:10px;border:2px dashed #e4e7ed}.upload-list .item uni-image[data-v-f29ffc46]{max-width:100%;max-height:100%}.upload-list .item .delete[data-v-f29ffc46]{position:absolute;right:-12px;top:-12px}.upload-list .item .delete .xyicon[data-v-f29ffc46]{display:inline-block;padding:5px;font-size:12px;background:#303133;color:#fff;border-radius:50%;opacity:.8;-webkit-transform:scale(.7);transform:scale(.7)}.upload-list .upload-btn[data-v-f29ffc46]{text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;cursor:pointer}.upload-list .upload-btn .inner .xyicon[data-v-f29ffc46]{margin:auto;width:40px;height:40px;font-size:40px;color:#999}.upload-list .upload-btn .inner .label[data-v-f29ffc46]{font-size:12px;color:#999;width:60px;margin:auto}',""]),t.exports=e},cf13:function(t,e,a){"use strict";var n,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.visible?a("v-uni-view",{staticClass:"xy-button",class:[t.full?"block":"",t.size?"xy-button-"+t.size:"xy-button",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}))},d59a:function(t,e,a){"use strict";a.r(e);var n=a("cf13"),r=a("1dcf");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("ee67");var o,l=a("f0c5"),c=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,"9e603a5c",null,!1,n["a"],o);e["default"]=c.exports},ddb8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"xy-button",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},full:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"xy-"+t+"-outline":"xy-"+t},getClassName:function(t,e){var a=e?"xy-button-outline ":"";return"square"!=t&&("circle"==t?a+=e?"xy-button-outline-fillet":"xy-button-fillet":"circleLeft"==t?a+="xy-button-fillet-left":"circleRight"==t&&(a+="xy-button-fillet-right")),a}}};e.default=n},ee67:function(t,e,a){"use strict";var n=a("c253"),r=a.n(n);r.a}}]);