(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_cert-level-level2"],{"01e1":function(t,e,a){"use strict";a.r(e);var r=a("f178"),i=a("ed6b");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);var o,l=a("f0c5"),u=Object(l["a"])(i["default"],r["b"],r["c"],!1,null,"26061aa8",null,!1,r["a"],o);e["default"]=u.exports},3196:function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.visible?a("v-uni-view",{staticClass:"xy-button",class:[t.full?"block":"",t.size?"xy-button-"+t.size:"xy-button",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},n=[]},"331b":function(t,e,a){"use strict";a.r(e);var r=a("3196"),i=a("ad76");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("b92a");var o,l=a("f0c5"),u=Object(l["a"])(i["default"],r["b"],r["c"],!1,null,"39215740",null,!1,r["a"],o);e["default"]=u.exports},"4f63":function(t,e,a){"use strict";var r=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=r(a("1da1")),n=r(a("ade3")),o={props:{certData:{type:Object,default:function(){return{}}}},data:function(){return{loading:!1,form:{certPhoto:"",certPhotoInverse:"",certPhotoHand:""},item:{extra:{limit:1,maxSize:500,driver:"upload_oss",background:"#ffffff"}},rule:(0,n.default)({certPhoto:[{required:!0,message:"请上传证件正面照片",trigger:"blur"}],certPhotoInverse:[{required:!0,message:"请上传证件反面照片",trigger:"blur"}]},"certPhotoInverse",[{required:!0,message:"请上传手持证件照片",trigger:"blur"}])}},created:function(){this.certData.certPhoto&&(this.form.certPhoto=this.certData.certPhoto,this.form.certPhotoInverse=this.certData.certPhotoInverse,this.form.certPhotoHand=this.certData.certPhotoHand)},methods:{handleSubmit:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.form.certPhoto||t.util.showToast({title:"请上传证件正面照片",icon:"loading",duration:3e3}),t.form.certPhotoInverse||t.util.showToast({title:"请上传证件反面照片",icon:"loading",duration:3e3}),t.form.certPhotoInverse||t.util.showToast({title:"请上传手持证件照片",icon:"loading",duration:3e3}),t.loading=!0,a=t,setTimeout((function(){a.loading=!1}),5e3),e.next=8,t.util.request({url:"/v1/user_cert/level/level2",data:t.form,method:t.certData.certPhoto?"put":"post"});case 8:r=e.sent,"200"==r.code?(t.util.showToast({title:r.msg,icon:"success",duration:2e3}),t.$emit("success")):t.util.showToast({title:r.msg,icon:"loading",duration:3e3}),t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()}}};e.default=o},"5ab6":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.upload-list[data-v-41e51b48]{display:-webkit-box;display:-webkit-flex;display:flex}.upload-list .item[data-v-41e51b48]{position:relative;width:80px;height:80px;margin-right:10px;border:2px dashed #e4e7ed}.upload-list .item uni-image[data-v-41e51b48]{max-width:100%;max-height:100%}.upload-list .item .delete[data-v-41e51b48]{position:absolute;right:-12px;top:-12px}.upload-list .item .delete .xyicon[data-v-41e51b48]{display:inline-block;padding:5px;font-size:12px;background:#303133;color:#fff;border-radius:50%;opacity:.8;-webkit-transform:scale(.7);transform:scale(.7)}.upload-list .upload-btn[data-v-41e51b48]{text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;cursor:pointer}.upload-list .upload-btn .inner .xyicon[data-v-41e51b48]{margin:auto;width:40px;height:40px;font-size:40px;color:#999}.upload-list .upload-btn .inner .label[data-v-41e51b48]{font-size:12px;color:#999;width:60px;margin:auto}',""]),t.exports=e},"5caf":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"xy-button",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},full:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"xy-"+t+"-outline":"xy-"+t},getClassName:function(t,e){var a=e?"xy-button-outline ":"";return"square"!=t&&("circle"==t?a+=e?"xy-button-outline-fillet":"xy-button-fillet":"circleLeft"==t?a+="xy-button-fillet-left":"circleRight"==t&&(a+="xy-button-fillet-right")),a}}};e.default=r},"794e":function(t,e,a){"use strict";a.r(e);var r=a("dd56"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},"7d3f":function(t,e,a){var r=a("e83d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("3ed44b97",r,!0,{sourceMap:!1,shadowMode:!1})},ad76:function(t,e,a){"use strict";a.r(e);var r=a("5caf"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},b92a:function(t,e,a){"use strict";var r=a("7d3f"),i=a.n(r);i.a},baa5:function(t,e,a){var r=a("23e7"),i=a("e58c");r({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},ce4a:function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"upload-list"},[t._l(t.list,(function(e,r){return a("v-uni-view",{key:r,staticClass:"item image"},[a("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preview(r)}}}),a("v-uni-view",{staticClass:"delete",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.deleteItem(e)}}},[a("v-uni-text",{staticClass:"xyicon xyicon-close"})],1)],1)})),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!(1==t.limit&&t.value),expression:"!(limit == 1 && value)"}],staticClass:"item upload-btn flex",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fileupload.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"inner"},[a("v-uni-view",{class:t.icon}),a("v-uni-view",{staticClass:"label"},[t._v(t._s(t.label))])],1)],1)],2)],1)},n=[]},d596:function(t,e,a){"use strict";var r=a("e137"),i=a.n(r);i.a},dab7:function(t,e,a){"use strict";a.r(e);var r=a("ce4a"),i=a("794e");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("d596");var o,l=a("f0c5"),u=Object(l["a"])(i["default"],r["b"],r["c"],!1,null,"41e51b48",null,!1,r["a"],o);e["default"]=u.exports},dd56:function(t,e,a){"use strict";(function(t){var r=a("4ea4");a("c975"),a("baa5"),a("a434"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=r(a("1da1")),n={name:"XyUploadImage",props:{driver:"",signUrl:"",action:"",value:"",limit:{type:[Number],default:1},header:{type:Object,default:{}},icon:{type:String,default:"xyicon xyicon-plus"},label:{type:String,default:""}},data:function(){return{name:"file",list:[],data:{}}},created:function(){this.limit>1?this.list=this.value:this.value&&(this.list[0]={url:this.value})},computed:{previewUrls:function(){for(var t=[],e=0;e<this.list.length;e++)t.push(this.list[e].url);return t}},methods:{fileupload:function(){var e=this;uni.chooseImage({count:this.limit,sizeType:["compressed"],success:function(){var a=(0,i.default)(regeneratorRuntime.mark((function a(r){var i,n,o,l,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=r.tempFiles,n=0;case 2:if(!(n<i.length)){a.next=14;break}return o="",l=i[n].name.lastIndexOf("."),o=i[n].name.substr(l),a.next=8,e.util.uploadFile({driver:e.driver,filePath:i[n].path,fileExt:o});case 8:u=a.sent,t.log("xy-upload-image",u),200==u.code?(e.limit>1?e.list.push(u.data):e.list=[u.data],e.limit>1?e.$emit("input",e.list):e.list[0]&&e.$emit("input",e.list[0].url)):uni.showToast({title:u.msg,duration:1500});case 11:n++,a.next=2;break;case 14:case"end":return a.stop()}}),a)})));function r(t){return a.apply(this,arguments)}return r}()})},preview:function(t){uni.previewImage({current:t,urls:this.previewUrls,indicator:"default",loop:!0})},deleteItem:function(t){this.list.splice(this.list.indexOf(t),1),this.limit>1?this.$emit("input",this.list):this.list[0]?this.$emit("input",this.list[0].url):this.$emit("input","")}}};e.default=n}).call(this,a("5a52")["default"])},e137:function(t,e,a){var r=a("5ab6");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("7240215a",r,!0,{sourceMap:!1,shadowMode:!1})},e83d:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */\r\n/* tag start*/.xy-button[data-v-39215740]{padding:15px 13px;font-size:14px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-button.block[data-v-39215740]{display:block}.xy-button-large[data-v-39215740]{padding:18px 10px;font-size:14px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-medium[data-v-39215740]{padding:10px 10px;font-size:13px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-small[data-v-39215740]{padding:6px 4px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:12px}.xy-button-outline[data-v-39215740]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-button-outline[data-v-39215740]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:4px;border:2px solid #0cbf92}.xy-button-fillet[data-v-39215740]{border-radius:25px}.xy-white.xy-button-fillet[data-v-39215740]::after{border-radius:40px}.xy-button-outline-fillet[data-v-39215740]::after{border-radius:40px}.xy-button-fillet-left[data-v-39215740]{border-radius:25px 0 0 25px}.xy-button-fillet-right[data-v-39215740]{border-radius:0 25px 25px 0}.xy-button-fillet-left.xy-button-outline[data-v-39215740]::after{border-radius:50px 0 0 50px}.xy-button-fillet-right.xy-button-outline[data-v-39215740]::after{border-radius:0 50px 50px 0}\r\n/* tag end*/\r\n/* color start*/.xy-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-39215740]{color:#0cbf92;background:none}.xy-primary-outline[data-v-39215740]::after{border:1px solid #0cbf92}.xy-light-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-info[data-v-39215740]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-39215740]{color:#5b60ff;background:none}.xy-info-outline[data-v-39215740]::after{border:1px solid #5b60ff}.xy-success[data-v-39215740]{background:#19be6b;color:#fff}.xy-success-outline[data-v-39215740]{color:#19be6b;background:none}.xy-success-outline[data-v-39215740]::after{border:1px solid #19be6b}.xy-error[data-v-39215740]{background:#dd524d;color:#fff}.xy-error-outline[data-v-39215740]{color:#dd524d;background:none}.xy-error-outline[data-v-39215740]::after{border:1px solid #dd524d}.xy-warning[data-v-39215740]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-39215740]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-39215740]::after{border:1px solid #f0ad4e}.xy-white[data-v-39215740]{background:#fff;color:#333}.xy-white-outline[data-v-39215740]{color:#fff;background:none}.xy-white-outline[data-v-39215740]::after{border:1px solid #fff}.xy-black[data-v-39215740]{background:#000;color:#fff}.xy-black-outline[data-v-39215740]{color:#333;background:none}.xy-black-outline[data-v-39215740]::after{border:1px solid #333}.xy-translucent[data-v-39215740]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-39215740]{background:#ededed}.xy-phcolor-gray[data-v-39215740]{background:#ccc}.xy-divider-gray[data-v-39215740]{background:#eaeef1}.xy-btn-gray[data-v-39215740]{background:#ededed;color:#999}.xy-hover-gray[data-v-39215740]{background:#f7f7f9}.xy-bg-gray[data-v-39215740]{background:#fafafa}.xy-light-blue[data-v-39215740]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-39215740]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-39215740]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-39215740]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-39215740]{color:#999;background:none}.xy-gray-outline[data-v-39215740]::after{border:1px solid #ccc}\r\n/* color end*/',""]),t.exports=e},ed6b:function(t,e,a){"use strict";a.r(e);var r=a("4f63"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},f178:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var r={xyUploadImage:a("dab7").default,xyButton:a("331b").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"safe-form p-l-0 p-r-0"},[a("v-uni-view",{staticClass:"item flex flex-alignCenter"},[a("v-uni-view",{},[a("v-uni-view",{staticClass:"title m-b-xs"},[t._v("证件正面")]),a("v-uni-view",{staticClass:"content"},[a("xy-upload-image",{attrs:{limit:"1",driver:t.item.extra.driver,action:t.item.extra.action,header:{Authorization:t.util.getToken()},icon:t.item.extra.icon?t.item.extra.icon:"xyicon xyicon-plus",label:t.item.extra.label?t.item.extra.label:""},model:{value:t.form.certPhoto,callback:function(e){t.$set(t.form,"certPhoto",e)},expression:"form.certPhoto"}})],1)],1),a("v-uni-view",{staticClass:"text-gray"},[t._v("* 证件需在有效期内；"),a("br"),t._v("* 照片文字清晰可见；"),a("br"),t._v("* 图片格式支持jpg、png格式。")])],1),a("v-uni-view",{staticClass:"item flex flex-alignCenter"},[a("v-uni-view",{},[a("v-uni-view",{staticClass:"title m-b-xs"},[t._v("证件反面")]),a("v-uni-view",{staticClass:"content"},[a("xy-upload-image",{attrs:{limit:"1",driver:t.item.extra.driver,action:t.item.extra.action,header:{Authorization:t.util.getToken()},icon:t.item.extra.icon?t.item.extra.icon:"xyicon xyicon-plus",label:t.item.extra.label?t.item.extra.label:""},model:{value:t.form.certPhotoInverse,callback:function(e){t.$set(t.form,"certPhotoInverse",e)},expression:"form.certPhotoInverse"}})],1)],1),a("v-uni-view",{staticClass:"text-gray"},[t._v("* 证件需在有效期内；"),a("br"),t._v("* 照片文字清晰可见；"),a("br"),t._v("* 图片格式支持jpg、png格式。")])],1),a("v-uni-view",{staticClass:"item flex flex-alignCenter"},[a("v-uni-view",{},[a("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手持证件照片")]),a("v-uni-view",{staticClass:"content"},[a("xy-upload-image",{attrs:{limit:"1",driver:t.item.extra.driver,action:t.item.extra.action,header:{Authorization:t.util.getToken()},icon:t.item.extra.icon?t.item.extra.icon:"xyicon xyicon-plus",label:t.item.extra.label?t.item.extra.label:""},model:{value:t.form.certPhotoHand,callback:function(e){t.$set(t.form,"certPhotoHand",e)},expression:"form.certPhotoHand"}})],1)],1),a("v-uni-view",{staticClass:"text-gray ts-12"},[t._v("* 请您上传一张手持“本人证件正面”和“个人签字”的照片，个人签字的内容需要包含“OTC”和当前日期，请确保照片的内容清晰可见。"),a("br"),t._v("* 人像清晰 * 证件号码清晰 * 手写文字清晰 * 手写文字包含当前信息")])],1),a("xy-button",{staticClass:"m-t-lg",attrs:{full:!0,type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v("提交")])],1)},n=[]}}]);