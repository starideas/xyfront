(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ijs-reserve-add-info"],{"05b7":function(t,e,i){"use strict";i.r(e);var n=i("0bb3"),a=i("c9cb");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("948f");var o,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"91e8f632",null,!1,n["a"],o);e["default"]=r.exports},"0bb3":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"upload-list"},[t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item image"},[i("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preview(n)}}}),i("v-uni-view",{staticClass:"delete",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteItem(e)}}},[i("v-uni-text",{staticClass:"xyicon xyicon-close"})],1)],1)})),i("v-uni-view",{staticClass:"item upload-btn flex",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"inner"},[i("v-uni-view",{class:t.icon}),i("v-uni-view",{staticClass:"label"},[t._v(t._s(t.label))])],1)],1)],2)],1)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},"13e7":function(t,e,i){"use strict";var n={xyUploadImage:i("05b7").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"label"},[t._v("主预约人姓名")]),i("v-uni-view",{staticClass:"input-group"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"label"},[t._v("主预约人身份证")]),i("v-uni-view",{staticClass:"input-group"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入身份证"},model:{value:t.idno,callback:function(e){t.idno=e},expression:"idno"}})],1)],1),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"label"},[t._v("主预约人手机号码")]),i("v-uni-view",{staticClass:"input-group"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入手机号码"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"label"},[t._v("主预约人健康码")]),i("v-uni-view",{},[i("xy-upload-image",{attrs:{limit:t.upload.limit,driver:t.upload.driver,action:t.upload.action,header:t.upload.header,icon:t.upload.icon,label:"上传健康码(截图)"},model:{value:t.healthyCode,callback:function(e){t.healthyCode=e},expression:"healthyCode"}})],1)],1),i("v-uni-view",{staticClass:"part-list"},[t._l(t.partList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"part-item"},[i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"label flex",staticStyle:{"justify-content":"space-between"}},[i("v-uni-view",[t._v("同行人"+t._s(n+1)+"姓名")]),i("v-uni-view",{staticClass:"del",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.delPart(e)}}},[t._v("删除")])],1),i("v-uni-view",{staticClass:"input-group"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名"},model:{value:e.name,callback:function(i){t.$set(e,"name",i)},expression:"item.name"}})],1)],1),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"label"},[t._v("同行人"+t._s(n+1)+"身份证")]),i("v-uni-view",{staticClass:"input-group"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入身份证"},model:{value:e.idno,callback:function(i){t.$set(e,"idno",i)},expression:"item.idno"}})],1)],1),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"label"},[t._v("同行人"+t._s(n+1)+"手机号码")]),i("v-uni-view",{staticClass:"input-group"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入手机号码"},model:{value:e.phone,callback:function(i){t.$set(e,"phone",i)},expression:"item.phone"}})],1)],1),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"label"},[t._v("同行人"+t._s(n+1)+"健康码")]),i("v-uni-view",{},[i("xy-upload-image",{attrs:{limit:t.upload.limit,driver:t.upload.driver,action:t.upload.action,header:t.upload.header,icon:t.upload.icon,label:"上传健康码(截图)"},model:{value:e.healthyCode,callback:function(i){t.$set(e,"healthyCode",i)},expression:"item.healthyCode"}})],1)],1)],1)})),i("v-uni-view",{staticClass:"add-part m-t-md",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addPart.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"xyicon xyicon-plus1"}),i("v-uni-text",{staticClass:"title"},[t._v("添加同行人员")])],1)],2),i("v-uni-view",{staticClass:"notice"},[t._v("请仔细核对再提交，预约成功后信息无法修改。因此务必确认信息无误后再点击“完成预约”提交。")]),i("v-uni-view",{staticClass:"submit"},[i("v-uni-button",{staticClass:"submit-btn",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("完成预约")])],1)],1)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},"2dd7":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.upload-list[data-v-91e8f632]{display:-webkit-box;display:-webkit-flex;display:flex}.upload-list .item[data-v-91e8f632]{position:relative;width:80px;height:80px;margin-right:10px;border:2px dashed #e4e7ed}.upload-list .item uni-image[data-v-91e8f632]{max-width:100%;max-height:100%}.upload-list .item .delete[data-v-91e8f632]{position:absolute;right:-12px;top:-12px}.upload-list .item .delete .xyicon[data-v-91e8f632]{display:inline-block;padding:5px;font-size:12px;background:#303133;color:#fff;border-radius:50%;opacity:.8;-webkit-transform:scale(.7);transform:scale(.7)}.upload-list .upload-btn[data-v-91e8f632]{text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;cursor:pointer}.upload-list .upload-btn .inner .xyicon[data-v-91e8f632]{margin:auto;width:40px;height:40px;font-size:40px;color:#999}.upload-list .upload-btn .inner .label[data-v-91e8f632]{font-size:12px;color:#999;width:60px;margin:auto}',""]),t.exports=e},3851:function(t,e,i){var n=i("da58");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6322b108",n,!0,{sourceMap:!1,shadowMode:!1})},"3b8a":function(t,e,i){var n=i("2dd7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("558dd50e",n,!0,{sourceMap:!1,shadowMode:!1})},"5c6e":function(t,e,i){"use strict";(function(t){var n=i("ee27");i("c975"),i("baa5"),i("a434"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("c964")),s={name:"XyUploadImage",props:{driver:"",signUrl:"",action:"",value:"",limit:{type:Number,default:1},header:{type:Object,default:{}},icon:{type:String,default:"xyicon xyicon-plus"},label:{type:String,default:""}},data:function(){return{name:"file",list:[],data:{}}},created:function(){this.limit>1?this.list=this.value:this.value&&(this.list[0]={url:this.value})},computed:{previewUrls:function(){for(var t=[],e=0;e<this.list.length;e++)t.push(this.list[e].url);return t}},methods:{preview:function(t){uni.previewImage({current:t,urls:this.previewUrls,indicator:"default",loop:!0})},deleteItem:function(t){this.list.splice(this.list.indexOf(t),1),this.limit>1?this.$emit("input",this.list):this.list[0]?this.$emit("input",this.list[0].url):this.$emit("input","")},upload:function(){var e=this;uni.chooseImage({count:this.limit,sizeType:["compressed"],success:function(){var i=(0,a.default)(regeneratorRuntime.mark((function i(n){var a,s,o,l,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a=n.tempFiles,s=0;case 2:if(!(s<a.length)){i.next=14;break}return o="",l=a[s].name.lastIndexOf("."),o=a[s].name.substr(l),i.next=8,e.util.uploadFile({driver:"upload_oss",filePath:a[s].path,fileExt:o});case 8:r=i.sent,t.log("xy-upload-image",r),200==r.code?(e.limit>1?e.list.push(r.data):e.list=[r.data],e.limit>1?e.$emit("input",e.list):e.list[0]&&e.$emit("input",e.list[0].url)):uni.showToast({title:r.msg,duration:1500});case 11:s++,i.next=2;break;case 14:case"end":return i.stop()}}),i)})));function n(t){return i.apply(this,arguments)}return n}()})}}};e.default=s}).call(this,i("5a52")["default"])},"7fb9":function(t,e,i){"use strict";var n=i("3851"),a=i.n(n);a.a},"948f":function(t,e,i){"use strict";var n=i("3b8a"),a=i.n(n);a.a},baa5:function(t,e,i){var n=i("23e7"),a=i("e58c");n({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},c9cb:function(t,e,i){"use strict";i.r(e);var n=i("5c6e"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},cfb8:function(t,e,i){"use strict";i.r(e);var n=i("fd72"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},da58:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-25358602]{padding:20px 15px;background-color:#efeff4}[data-v-25358602] .upload-list .item{width:100px;height:100px}.add-part[data-v-25358602]{text-align:center}.add-part .xyicon[data-v-25358602]{color:#999;font-size:18px;margin-right:3px}.add-part .title[data-v-25358602]{height:14px;font-size:18px;font-weight:600;color:#999;line-height:22px}.submit-btn[data-v-25358602]{margin-top:20px;height:50px;line-height:50px;background:#00479d;border-radius:7px;color:#fff;font-size:18px}.notice[data-v-25358602]{margin-top:30px;font-size:13px;font-family:PingFang SC;font-weight:400;color:#999;line-height:22px}body.?%PAGE?%[data-v-25358602]{background-color:#efeff4}',""]),t.exports=e},e9bc:function(t,e,i){"use strict";i.r(e);var n=i("13e7"),a=i("cfb8");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("7fb9");var o,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"25358602",null,!1,n["a"],o);e["default"]=r.exports},fd72:function(t,e,i){"use strict";var n=i("ee27");i("c975"),i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("c964")),s={data:function(){return{partList:[],upload:{driver:"",limit:1,action:this.util.baseUrl()+"v1/core/index/upload",header:{Authorization:this.$store.state.user.token},icon:"xyicon xyicon-photograph"}}},onLoad:function(){this.partList=this.$store.state.app.reserveInfo.partList},computed:{name:{get:function(){return this.$store.state.app.reserveInfo.name},set:function(t){this.$store.commit("app/setReserveInfo",{key:"name",value:t})}},phone:{get:function(){return this.$store.state.app.reserveInfo.phone},set:function(t){this.$store.commit("app/setReserveInfo",{key:"phone",value:t})}},idno:{get:function(){return this.$store.state.app.reserveInfo.idno},set:function(t){this.$store.commit("app/setReserveInfo",{key:"idno",value:t})}},healthyCode:{get:function(){return this.$store.state.app.reserveInfo.healthyCode},set:function(t){this.$store.commit("app/setReserveInfo",{key:"healthyCode",value:t})}}},methods:{submit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("app/setReserveInfo",{key:"partList",value:t.partList}),e.next=3,t.util.request({url:"/v1/ijs/reserve/add",method:"post",data:t.$store.state.app.reserveInfo});case 3:i=e.sent,200==i.code?uni.showModal({title:"预约成功",content:"清明期间墓区管控区域内禁止私家车进入，请按预约时间提前半小时到城东体育馆换乘祭扫专用车，祭扫专用车按每个预约时段起始时间准点发车。请携带身份证并戴好口罩。墓区严禁明火，禁止携带黄纸、银锭和香烛等易燃祭祀物品。",success:function(t){t.confirm?uni.navigateTo({url:"/pages/ijs/reserve/my"}):t.cancel&&uni.navigateTo({url:"/pages/ijs/reserve/my"})}}):uni.showToast({icon:"loading",title:i.msg});case 5:case"end":return e.stop()}}),e)})))()},delPart:function(t){this.partList.splice(this.partList.indexOf(t),1)},addPart:function(){if(this.partList.length>=2)uni.showToast({icon:"loading",title:"最多添加两人同行"});else{var t={name:"",idno:"",phone:"",healthyCode:""};this.partList.push(t)}}}};e.default=s}}]);