(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ijs-reserve-info"],{"0bf1":function(t,e,i){var n=i("c0aa");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("2cf50182",n,!0,{sourceMap:!1,shadowMode:!1})},"2edd":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var r=n(i("1da1")),a={data:function(){return{id:0,info:{},qrcode:""}},onLoad:function(t){this.id=t.id,this.qrcode=this.util.baseUrl()+"/v1/core/index/qrcode.png?text=reserveId="+this.id,this.loadData()},methods:{prew:function(t){uni.previewImage({urls:[t]})},loadData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中"}),e.next=3,t.util.request({url:"/v1/ijs/reserve/info/"+t.id,method:"get"});case 3:i=e.sent,200==i.code?t.info=i.data.info:uni.showToast({icon:"loading",title:i.msg}),uni.hideLoading();case 6:case"end":return e.stop()}}),e)})))()}}};e.default=a},"327e":function(t,e,i){"use strict";var n=i("0bf1"),r=i.n(n);r.a},a817:function(t,e,i){"use strict";i.r(e);var n=i("2edd"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},c0aa:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */[data-v-12a1f991]:root{--primary-color:#5692f6;--info-color:#2db7f5;--success-color:#19be6b;--warning-color:#f0ad4e;--error-color:#dd524d;--text-default-color:#333;--text-inverse:#fff;--text-gray-color:#a0a0a0;--text-gray-placeholder-color:#b3b2b2;--text-gray-disable-color:#d1d1d1}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */uni-page-body[data-v-12a1f991]{padding:20px 15px;background-color:#efeff4}.list[data-v-12a1f991]{margin-bottom:20px;overflow:hidden;border-radius:7px}[data-v-12a1f991] .xy-list-item:first-child .content .title .left span{color:#333;font-size:18px}[data-v-12a1f991] .xy-list-item:not(:first-child) .content .title .left span{color:#333;font-size:18px}[data-v-12a1f991] .xy-list-item:not(:first-child) .right .current{color:#777;font-size:18px}.list[data-v-12a1f991] .xy-list-item:last-child .content .title .left span{color:#333;font-size:14px}.list[data-v-12a1f991] .xy-list-item:last-child .right .current{color:#777;font-size:14px}.main[data-v-12a1f991] .xy-list-item:last-child .content .title .left span{color:#333;font-size:18px!important}.main[data-v-12a1f991] .xy-list-item:last-child .right .current{color:#777;font-size:18px}body.?%PAGE?%[data-v-12a1f991]{background-color:#efeff4}',""]),t.exports=e},c40a:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={xyNotice:i("349a").default,xyListItem:i("60cc").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("xy-notice",{staticClass:"m-b",attrs:{type:"warning"}},[t._v("清明期间墓区管控区域内禁止私家车进入，请按预约时间提前半小时到城东体育馆换乘祭扫专用车，祭扫专用车按每个预约时段起始时间准点发车。请携带身份证并戴好口罩。墓区严禁明火，禁止携带黄纸、银锭和香烛等易燃祭祀物品。")]),i("v-uni-view",{staticClass:"list"},[i("xy-list-item",{attrs:{type:"link",more:"",title:"预约信息"}}),i("v-uni-view",{staticClass:"bg-white hidden",staticStyle:{"text-align":"center"}},[i("v-uni-image",{attrs:{src:t.qrcode,mode:"aspectFit"}})],1),i("xy-list-item",{attrs:{type:"link",more:"",title:"预约号码",current:t.info.id}}),i("xy-list-item",{attrs:{type:"link",more:"",title:"预约时间",current:t.info.date+" "+t.info.range}}),i("xy-list-item",{attrs:{type:"link",more:"",title:"墓园名称",current:t.info.cemeteryInfo.name}}),i("xy-list-item",{attrs:{type:"link",more:"",title:"故人姓名",current:t.info.memberInfo.name}}),i("xy-list-item",{attrs:{type:"link",more:"",title:"故人位置",current:t.info.memberInfo.position}}),i("xy-list-item",{attrs:{type:"link",more:"",title:"使用方法",current:"入场请向工作人员出示详情页"}})],1),i("v-uni-view",{staticClass:"list main"},[i("xy-list-item",{attrs:{type:"link",more:"",title:"主预约人"}}),i("xy-list-item",{attrs:{type:"link",more:"",title:"姓名",current:t.info.name}}),i("xy-list-item",{attrs:{type:"link",more:"",title:"身份证",current:t.info.idno}}),i("xy-list-item",{staticClass:"hidden",attrs:{type:"link",more:"",title:"健康码"}},[i("template",{slot:"current"},[i("v-uni-image",{staticStyle:{margin:"10px",width:"50px",height:"60px"},attrs:{src:t.info.healthyCode,mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.prew(t.info.healthyCode)}}})],1)],2),i("xy-list-item",{attrs:{type:"link",more:"",title:"手机号码",current:t.info.phone}})],1),i("v-uni-view",{staticClass:"part-list"},t._l(t.info.partList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"list"},[i("xy-list-item",{attrs:{type:"link",more:"",title:"同行者"+(n+1)}}),i("xy-list-item",{attrs:{type:"link",more:"",title:"姓名",current:e.name}}),i("xy-list-item",{attrs:{type:"link",more:"",title:"身份证",current:e.idno}}),i("xy-list-item",{staticClass:"hidden",attrs:{type:"link",more:"",title:"健康码"}},[i("template",{slot:"current"},[i("v-uni-image",{staticStyle:{margin:"10px",width:"50px",height:"60px"},attrs:{src:e.healthyCode,mode:"aspectFit"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.prew(e.healthyCode)}}})],1)],2),i("xy-list-item",{attrs:{type:"link",more:"",title:"手机号码",current:e.phone}})],1)})),1)],1)},a=[]},e35c:function(t,e,i){"use strict";i.r(e);var n=i("c40a"),r=i("a817");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("327e");var o,s=i("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"12a1f991",null,!1,n["a"],o);e["default"]=l.exports}}]);