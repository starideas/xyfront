(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_cert-level-level2"],{"08ab":function(t,e,i){"use strict";i.r(e);var a=i("a7e0"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"0a46":function(t,e,i){"use strict";var a=i("7430"),n=i.n(a);n.a},"1bec":function(t,e,i){"use strict";i.r(e);var a=i("913e"),n=i("a07d");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("cf22");var o,l=i("f0c5"),u=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"41e51b48",null,!1,a["a"],o);e["default"]=u.exports},"21cc":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.upload-list[data-v-41e51b48]{display:-webkit-box;display:-webkit-flex;display:flex}.upload-list .item[data-v-41e51b48]{position:relative;width:80px;height:80px;margin-right:10px;border:2px dashed #e4e7ed}.upload-list .item uni-image[data-v-41e51b48]{max-width:100%;max-height:100%}.upload-list .item .delete[data-v-41e51b48]{position:absolute;right:-12px;top:-12px}.upload-list .item .delete .xyicon[data-v-41e51b48]{display:inline-block;padding:5px;font-size:12px;background:#303133;color:#fff;-webkit-border-radius:50%;border-radius:50%;opacity:.8;-webkit-transform:scale(.7);transform:scale(.7)}.upload-list .upload-btn[data-v-41e51b48]{text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;cursor:pointer}.upload-list .upload-btn .inner .xyicon[data-v-41e51b48]{margin:auto;width:40px;height:40px;font-size:40px;color:#999}.upload-list .upload-btn .inner .label[data-v-41e51b48]{font-size:12px;color:#999;width:60px;margin:auto}',""]),t.exports=e},3254:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={xyUploadImage:i("1bec").default,xyButton:i("a75b").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"safe-form p-l-0 p-r-0"},[i("v-uni-view",{staticClass:"item flex flex-alignCenter"},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("证件正面")]),i("v-uni-view",{staticClass:"content"},[i("xy-upload-image",{attrs:{limit:"1",driver:t.item.extra.driver,action:t.item.extra.action,header:{Authorization:t.util.getToken()},icon:t.item.extra.icon?t.item.extra.icon:"xyicon xyicon-plus",label:t.item.extra.label?t.item.extra.label:""},model:{value:t.form.certPhoto,callback:function(e){t.$set(t.form,"certPhoto",e)},expression:"form.certPhoto"}})],1)],1),i("v-uni-view",{staticClass:"text-gray"},[t._v("* 证件需在有效期内；"),i("br"),t._v("* 照片文字清晰可见；"),i("br"),t._v("* 图片格式支持jpg、png格式。")])],1),i("v-uni-view",{staticClass:"item flex flex-alignCenter"},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("证件反面")]),i("v-uni-view",{staticClass:"content"},[i("xy-upload-image",{attrs:{limit:"1",driver:t.item.extra.driver,action:t.item.extra.action,header:{Authorization:t.util.getToken()},icon:t.item.extra.icon?t.item.extra.icon:"xyicon xyicon-plus",label:t.item.extra.label?t.item.extra.label:""},model:{value:t.form.certPhotoInverse,callback:function(e){t.$set(t.form,"certPhotoInverse",e)},expression:"form.certPhotoInverse"}})],1)],1),i("v-uni-view",{staticClass:"text-gray"},[t._v("* 证件需在有效期内；"),i("br"),t._v("* 照片文字清晰可见；"),i("br"),t._v("* 图片格式支持jpg、png格式。")])],1),i("v-uni-view",{staticClass:"item flex flex-alignCenter"},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手持证件照片")]),i("v-uni-view",{staticClass:"content"},[i("xy-upload-image",{attrs:{limit:"1",driver:t.item.extra.driver,action:t.item.extra.action,header:{Authorization:t.util.getToken()},icon:t.item.extra.icon?t.item.extra.icon:"xyicon xyicon-plus",label:t.item.extra.label?t.item.extra.label:""},model:{value:t.form.certPhotoHand,callback:function(e){t.$set(t.form,"certPhotoHand",e)},expression:"form.certPhotoHand"}})],1)],1),i("v-uni-view",{staticClass:"text-gray ts-12"},[t._v("* 请您上传一张手持“本人证件正面”和“个人签字”的照片，个人签字的内容需要包含“OTC”和当前日期，请确保照片的内容清晰可见。"),i("br"),t._v("* 人像清晰 * 证件号码清晰 * 手写文字清晰 * 手写文字包含当前信息")])],1),i("xy-button",{staticClass:"m-t-lg",attrs:{full:!0,type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v("提交")])],1)},r=[]},"443e":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),r=a(i("ade3")),o={props:{certData:{type:Object,default:function(){return{}}}},data:function(){return{loading:!1,form:{certPhoto:"",certPhotoInverse:"",certPhotoHand:""},item:{extra:{limit:1,maxSize:500,driver:"upload_oss",background:"#ffffff"}},rule:(0,r.default)({certPhoto:[{required:!0,message:"请上传证件正面照片",trigger:"blur"}],certPhotoInverse:[{required:!0,message:"请上传证件反面照片",trigger:"blur"}]},"certPhotoInverse",[{required:!0,message:"请上传手持证件照片",trigger:"blur"}])}},created:function(){this.certData.certPhoto&&(this.form.certPhoto=this.certData.certPhoto,this.form.certPhotoInverse=this.certData.certPhotoInverse,this.form.certPhotoHand=this.certData.certPhotoHand)},methods:{handleSubmit:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.form.certPhoto||t.util.showToast({title:"请上传证件正面照片",icon:"loading",duration:3e3}),t.form.certPhotoInverse||t.util.showToast({title:"请上传证件反面照片",icon:"loading",duration:3e3}),t.form.certPhotoInverse||t.util.showToast({title:"请上传手持证件照片",icon:"loading",duration:3e3}),t.loading=!0,i=t,setTimeout((function(){i.loading=!1}),5e3),e.next=8,t.util.request({url:"/v1/user_cert/level/level2",data:t.form,method:t.certData.certPhoto?"put":"post"});case 8:a=e.sent,"200"==a.code?(t.util.showToast({title:a.msg,icon:"success",duration:2e3}),t.$emit("success")):t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()}}};e.default=o},5365:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible?i("v-uni-view",{staticClass:"xy-button",class:[t.full?"block":"",t.size?"xy-button-"+t.size:"xy-button",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},r=[]},"681f":function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("c975"),i("baa5"),i("a434"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),r={name:"XyUploadImage",props:{driver:"",signUrl:"",action:"",value:"",limit:{type:[Number],default:1},header:{type:Object,default:{}},icon:{type:String,default:"xyicon xyicon-plus"},label:{type:String,default:""}},data:function(){return{name:"file",list:[],data:{}}},created:function(){this.limit>1?this.list=this.value:this.value&&(this.list[0]={url:this.value})},computed:{previewUrls:function(){for(var t=[],e=0;e<this.list.length;e++)t.push(this.list[e].url);return t}},methods:{fileupload:function(){var e=this;uni.chooseImage({count:this.limit,sizeType:["compressed"],success:function(){var i=(0,n.default)(regeneratorRuntime.mark((function i(a){var n,r,o,l,u;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:n=a.tempFiles,r=0;case 2:if(!(r<n.length)){i.next=14;break}return o="",l=n[r].name.lastIndexOf("."),o=n[r].name.substr(l),i.next=8,e.util.uploadFile({driver:e.driver,filePath:n[r].path,fileExt:o});case 8:u=i.sent,t("log","xy-upload-image",u," at node_modules/xyui/flex-ui/src/xy-upload-image/xy-upload-image.vue:145"),200==u.code?(e.limit>1?e.list.push(u.data):e.list=[u.data],e.limit>1?e.$emit("input",e.list):e.list[0]&&e.$emit("input",e.list[0].url)):uni.showToast({title:u.msg,duration:1500});case 11:r++,i.next=2;break;case 14:case"end":return i.stop()}}),i)})));function a(t){return i.apply(this,arguments)}return a}()})},preview:function(t){uni.previewImage({current:t,urls:this.previewUrls,indicator:"default",loop:!0})},deleteItem:function(t){this.list.splice(this.list.indexOf(t),1),this.limit>1?this.$emit("input",this.list):this.list[0]?this.$emit("input",this.list[0].url):this.$emit("input","")}}};e.default=r}).call(this,i("0de9")["log"])},7430:function(t,e,i){var a=i("900e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1a7e8855",a,!0,{sourceMap:!1,shadowMode:!1})},"848d":function(t,e,i){"use strict";i.r(e);var a=i("3254"),n=i("cbbe");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);var o,l=i("f0c5"),u=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"26061aa8",null,!1,a["a"],o);e["default"]=u.exports},"900e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* tag start*/.xy-button[data-v-39215740]{padding:15px 13px;font-size:14px;-webkit-border-radius:3px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-button.block[data-v-39215740]{display:block}.xy-button-large[data-v-39215740]{padding:18px 10px;font-size:14px;-webkit-border-radius:3px;border-radius:3px;\n  /* display: inline-block;\n  vertical-align: middle; */line-height:14px}.xy-button-medium[data-v-39215740]{padding:10px 10px;font-size:13px;-webkit-border-radius:3px;border-radius:3px;\n  /* display: inline-block;\n  vertical-align: middle; */line-height:14px}.xy-button-small[data-v-39215740]{padding:6px 4px;font-size:12px;-webkit-border-radius:3px;border-radius:3px;\n  /* display: inline-block;\n  vertical-align: middle; */line-height:12px}.xy-button-outline[data-v-39215740]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-button-outline[data-v-39215740]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;-webkit-border-radius:4px;border-radius:4px;border:2px solid #0cbf92}.xy-button-fillet[data-v-39215740]{-webkit-border-radius:25px;border-radius:25px}.xy-white.xy-button-fillet[data-v-39215740]::after{-webkit-border-radius:40px;border-radius:40px}.xy-button-outline-fillet[data-v-39215740]::after{-webkit-border-radius:40px;border-radius:40px}.xy-button-fillet-left[data-v-39215740]{-webkit-border-radius:25px 0 0 25px;border-radius:25px 0 0 25px}.xy-button-fillet-right[data-v-39215740]{-webkit-border-radius:0 25px 25px 0;border-radius:0 25px 25px 0}.xy-button-fillet-left.xy-button-outline[data-v-39215740]::after{-webkit-border-radius:50px 0 0 50px;border-radius:50px 0 0 50px}.xy-button-fillet-right.xy-button-outline[data-v-39215740]::after{-webkit-border-radius:0 50px 50px 0;border-radius:0 50px 50px 0}\n/* tag end*/\n/* color start*/.xy-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-39215740]{color:#0cbf92;background:none}.xy-primary-outline[data-v-39215740]::after{border:1px solid #0cbf92}.xy-light-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-info[data-v-39215740]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-39215740]{color:#5b60ff;background:none}.xy-info-outline[data-v-39215740]::after{border:1px solid #5b60ff}.xy-success[data-v-39215740]{background:#19be6b;color:#fff}.xy-success-outline[data-v-39215740]{color:#19be6b;background:none}.xy-success-outline[data-v-39215740]::after{border:1px solid #19be6b}.xy-error[data-v-39215740]{background:#dd524d;color:#fff}.xy-error-outline[data-v-39215740]{color:#dd524d;background:none}.xy-error-outline[data-v-39215740]::after{border:1px solid #dd524d}.xy-warning[data-v-39215740]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-39215740]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-39215740]::after{border:1px solid #f0ad4e}.xy-white[data-v-39215740]{background:#fff;color:#333}.xy-white-outline[data-v-39215740]{color:#fff;background:none}.xy-white-outline[data-v-39215740]::after{border:1px solid #fff}.xy-black[data-v-39215740]{background:#000;color:#fff}.xy-black-outline[data-v-39215740]{color:#333;background:none}.xy-black-outline[data-v-39215740]::after{border:1px solid #333}.xy-translucent[data-v-39215740]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-39215740]{background:#ededed}.xy-phcolor-gray[data-v-39215740]{background:#ccc}.xy-divider-gray[data-v-39215740]{background:#eaeef1}.xy-btn-gray[data-v-39215740]{background:#ededed;color:#999}.xy-hover-gray[data-v-39215740]{background:#f7f7f9}.xy-bg-gray[data-v-39215740]{background:#fafafa}.xy-light-blue[data-v-39215740]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-39215740]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-39215740]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-39215740]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-39215740]{color:#999;background:none}.xy-gray-outline[data-v-39215740]::after{border:1px solid #ccc}\n/* color end*/',""]),t.exports=e},"913e":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"upload-list"},[t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item image"},[i("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preview(a)}}}),i("v-uni-view",{staticClass:"delete",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteItem(e)}}},[i("v-uni-text",{staticClass:"xyicon xyicon-close"})],1)],1)})),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!(1==t.limit&&t.value),expression:"!(limit == 1 && value)"}],staticClass:"item upload-btn flex",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fileupload.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"inner"},[i("v-uni-view",{class:t.icon}),i("v-uni-view",{staticClass:"label"},[t._v(t._s(t.label))])],1)],1)],2)],1)},r=[]},a07d:function(t,e,i){"use strict";i.r(e);var a=i("681f"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},a75b:function(t,e,i){"use strict";i.r(e);var a=i("5365"),n=i("08ab");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("0a46");var o,l=i("f0c5"),u=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"39215740",null,!1,a["a"],o);e["default"]=u.exports},a7e0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"xy-button",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},full:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"xy-"+t+"-outline":"xy-"+t},getClassName:function(t,e){var i=e?"xy-button-outline ":"";return"square"!=t&&("circle"==t?i+=e?"xy-button-outline-fillet":"xy-button-fillet":"circleLeft"==t?i+="xy-button-fillet-left":"circleRight"==t&&(i+="xy-button-fillet-right")),i}}};e.default=a},baa5:function(t,e,i){var a=i("23e7"),n=i("e58c");a({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},cbbe:function(t,e,i){"use strict";i.r(e);var a=i("443e"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},cf22:function(t,e,i){"use strict";var a=i("fe5f"),n=i.n(a);n.a},fe5f:function(t,e,i){var a=i("21cc");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("db1251de",a,!0,{sourceMap:!1,shadowMode:!1})}}]);