(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ijs-reserve-add"],{"0390":function(e,t,n){"use strict";var i=n("ee27");n("caad"),n("2532"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=i(n("c964")),s={data:function(){return{agreeed:!1}},computed:{cemeteryId:{get:function(){return this.$store.state.app.reserveInfo.cemeteryId},set:function(e){this.$store.commit("app/setReserveInfo",{key:"cemeteryId",value:e})}},memName:{get:function(){return this.$store.state.app.reserveInfo.memName},set:function(e){this.$store.commit("app/setReserveInfo",{key:"memName",value:e})}},memPos:{get:function(){return this.$store.state.app.reserveInfo.memPos},set:function(e){this.$store.commit("app/setReserveInfo",{key:"memPos",value:e})}}},methods:{checkChange:function(e){var t=e.detail.value;t.includes("agreeed")?this.agreeed=!0:this.agreeed=!1},next:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/ijs/member/query",method:"get",data:{cemeteryId:e.$store.state.app.reserveInfo.cemeteryId,name:e.$store.state.app.reserveInfo.memName,position:e.$store.state.app.reserveInfo.memPos}});case 2:n=t.sent,200==n.code?(e.$store.commit("app/setReserveInfo",{key:"memId",value:n.data.info.id}),uni.navigateTo({url:"/pages/ijs/reserve/add-time"})):uni.showToast({icon:"loading",title:n.msg});case 4:case"end":return t.stop()}}),t)})))()}}};t.default=s},"18b9":function(e,t,n){"use strict";n.r(t);var i=n("0390"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},"1d16":function(e,t,n){var i=n("5645");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("c0632bf4",i,!0,{sourceMap:!1,shadowMode:!1})},"382f":function(e,t,n){"use strict";var i=n("893a"),a=n.n(i);a.a},4978:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-picker",{staticClass:"xy-picker",attrs:{"range-key":e.labelName,mode:"selector",value:e.index,range:e.options},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"label flex"},[n("v-uni-view",[e._v(e._s(e.options[this.index][this.labelName]))]),n("v-uni-view",{staticClass:"xyicon xyicon-down"})],1)],1)},s=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}))},5645:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.xy-picker .label[data-v-66fd3948]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.select[data-v-66fd3948]{width:100%;height:30px}',""]),e.exports=t},"679d":function(e,t,n){"use strict";n.r(t);var i=n("c048"),a=n("18b9");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("382f");var r,u=n("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"7b5ba656",null,!1,i["a"],r);t["default"]=o.exports},"6f98":function(e,t,n){"use strict";var i=n("1d16"),a=n.n(i);a.a},7247:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-7b5ba656]{padding:20px 15px}.notice[data-v-7b5ba656]{font-size:12px;font-family:PingFang SC;font-weight:400;color:#999;line-height:22px}.submit[data-v-7b5ba656]{margin-top:50px}.submit[data-v-7b5ba656] .uni-checkbox-input{width:16px;height:16px}.submit-btn[data-v-7b5ba656]{margin-top:10px;height:50px;line-height:50px;background:#00479d;border-radius:7px;color:#fff;font-size:18px}',""]),e.exports=t},"893a":function(e,t,n){var i=n("7247");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("7d018a15",i,!0,{sourceMap:!1,shadowMode:!1})},"8ef9":function(e,t,n){"use strict";n.r(t);var i=n("f935"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},c048:function(e,t,n){"use strict";var i={xyPicker:n("c963").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",[n("v-uni-view",{staticClass:"form-item"},[n("v-uni-view",{staticClass:"label"},[n("v-uni-text",{staticClass:"text-error"},[e._v("*")]),e._v("墓园")],1),n("v-uni-view",{staticClass:"input-group"},[n("xy-picker",{attrs:{labelName:"name",valueName:"id",options:e.$store.state.app.cemeteryList},model:{value:e.cemeteryId,callback:function(t){e.cemeteryId=t},expression:"cemeteryId"}})],1)],1),n("v-uni-view",{staticClass:"form-item"},[n("v-uni-view",{staticClass:"label"},[n("v-uni-text",{staticClass:"text-error"},[e._v("*")]),e._v("故者姓名")],1),n("v-uni-view",{staticClass:"input-group"},[n("v-uni-input",{attrs:{type:"text",placeholder:"谢水木"},model:{value:e.memName,callback:function(t){e.memName=t},expression:"memName"}})],1)],1),n("v-uni-view",{staticClass:"form-item"},[n("v-uni-view",{staticClass:"label"},[n("v-uni-text",{staticClass:"text-error"},[e._v("*")]),e._v("墓穴位置")],1),n("v-uni-view",{staticClass:"input-group"},[n("v-uni-input",{attrs:{type:"text",placeholder:"个性一区12排15号"},model:{value:e.memPos,callback:function(t){e.memPos=t},expression:"memPos"}})],1),n("v-uni-view",{staticClass:"notice"},[e._v("示例：xxxxx区xx排（台）xx号（请根据墓穴证详细信息填写，xx排（台）xx号请填写阿拉伯数字）")])],1),n("v-uni-view",{staticClass:"notice"},[e._v("注："),n("v-uni-view",[e._v("1.每个墓位仅可预约一次，限3人。")]),n("v-uni-view",[e._v("2.同年有两位亲人入葬，请输入男性葬者姓名进行预约。")]),n("v-uni-view",[e._v("3.预约成功人员一律到市城东体育馆集中上车。6点钟时段预约成功人员在6点整点发车，依次类推。预约成功人员需提前半小时进入城东体育馆指定待检区，逾时需由工作人员作统一安排。")]),n("v-uni-view",[e._v("4.如有疑问请拨打咨询电话：望秦山墓区：88906156，香炉峰墓区：88363944。咨询时间为工作日：08:00-11:00；14:00-16:00。")])],1),n("v-uni-view",{staticClass:"submit"},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkChange.apply(void 0,arguments)}}},[n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"agreeed",checked:!1}}),e._v("我已经阅读并同意以上注意事项。")],1)],1),n("v-uni-button",{staticClass:"submit-btn",attrs:{type:"default",disabled:!e.agreeed},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.next.apply(void 0,arguments)}}},[e._v("确认")])],1)],1)],1)},s=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}))},c963:function(e,t,n){"use strict";n.r(t);var i=n("4978"),a=n("8ef9");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("6f98");var r,u=n("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"66fd3948",null,!1,i["a"],r);t["default"]=o.exports},f935:function(e,t,n){"use strict";n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"XyPicker",props:{value:{type:[Number,String],default:""},options:{type:Array,default:[]},labelName:{type:String,default:"title"},valueName:{type:String,default:"value"}},data:function(){return{index:0}},created:function(){for(var e=0;e<this.options.length;e++)this.options[e][this.valueName]==this.value&&(this.index=e)},methods:{bindPickerChange:function(e){this.index=e.target.value,this.$emit("input",this.options[this.index][this.valueName])}}};t.default=i}}]);