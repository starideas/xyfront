(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0e93b4"],{"8d3e":function(t,a,e){"use strict";e.r(a),e("d3b7"),e("ddb0"),e("96cf");var n=e("1da1"),r={data:function(){return{activeTab:"0",tabList:[{value:"ing",title:"进行中",values:"0,1,2,-2"},{value:"done",title:"已结束",values:"-1,3"}],dataList:[],dataList2:[],dataPage:[{total:10,limit:10,page:1},{total:10,limit:10,page:1}]}},created:function(){this.loadData()},methods:{handleClick:function(t,a){this.loadData()},pageChange:function(t){var a=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.dataPage[a.activeTab].page=t,a.loadData();case 2:case"end":return e.stop()}}),e)})))()},loadData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.util.request({url:"/v1/coin_otc/order/my",data:{state:t.tabList[t.activeTab].values,page:t.dataPage[t.activeTab].page},method:"get"});case 2:if(200!=(e=a.sent).code){a.next=14;break}a.t0=t.activeTab,a.next="0"===a.t0?7:"1"===a.t0?9:11;break;case 7:return t.dataList=e.data.dataList,a.abrupt("break",11);case 9:return t.dataList2=e.data.dataList,a.abrupt("break",11);case 11:t.dataPage[t.activeTab]=e.data.dataPage,a.next=15;break;case 14:t.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 15:case"end":return a.stop()}}),a)})))()}}},o=e("2877"),s=Object(o.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap"},[e("xy-header"),e("div",{staticClass:"main"},[e("xy-subnav",{attrs:{title:"我的订单"}}),e("div",{staticClass:"container p-t"},[e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeTab,callback:function(a){t.activeTab=a},expression:"activeTab"}},[e("el-tab-pane",{attrs:{label:"进行中",name:"0"}},[e("el-table",{staticClass:"m-t-xs",staticStyle:{width:"100%"},attrs:{data:t.dataList}},[e("el-table-column",{attrs:{prop:"id",label:"编号/时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.id))]),e("div",{staticClass:"font-sm"},[t._v(t._s(t._f("formatTime")(a.row.createTime)))])]}}])}),e("el-table-column",{attrs:{prop:"type",label:"类型",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{directives:[{name:"show",rawName:"v-show",value:1==a.row.type,expression:"scope.row.type == 1"}],staticStyle:{color:"#09C69D"}},[t._v("购买")]),e("span",{directives:[{name:"show",rawName:"v-show",value:2==a.row.type,expression:"scope.row.type == 2"}],staticStyle:{color:"#FF4C4C"}},[t._v("出售")])]}}])}),e("el-table-column",{attrs:{prop:"type",label:"币种",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.coinInfo.symbol))])]}}])}),e("el-table-column",{attrs:{prop:"price",label:"价格"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"price"},[t._v(t._s(a.row.price))]),e("span",{staticClass:"price m-l-sm"},[t._v("CNY")])]}}])}),e("el-table-column",{attrs:{prop:"amount",label:"数量"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.amount))])]}}])}),e("el-table-column",{attrs:{prop:"totalPrice",label:"总额"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.totalPrice)+" CNY")])]}}])}),e("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{color:"#F8A059"}},[t._v(t._s(a.row.stateFormat.title))])]}}])}),e("el-table-column",{attrs:{prop:"action",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.adId?e("el-button",{attrs:{size:"small",type:"info"},on:{click:function(e){return t.util.navigateTo({url:"/otc/order/"+a.row.id})}}},[t._v("查看")]):t._e()]}}])})],1),e("el-pagination",{staticClass:"text-center m-t-md",attrs:{background:"",layout:"prev, pager, next","page-size":t.dataPage[t.activeTab].limit,"current-page":t.dataPage[t.activeTab].page,total:t.dataPage[t.activeTab].total},on:{"current-change":t.pageChange,"update:pageSize":function(a){return t.$set(t.dataPage[t.activeTab],"limit",a)},"update:page-size":function(a){return t.$set(t.dataPage[t.activeTab],"limit",a)},"update:currentPage":function(a){return t.$set(t.dataPage[t.activeTab],"page",a)},"update:current-page":function(a){return t.$set(t.dataPage[t.activeTab],"page",a)}}})],1),e("el-tab-pane",{attrs:{label:"已完成",name:"1"}},[e("el-table",{staticClass:"m-t-xs",staticStyle:{width:"100%"},attrs:{data:t.dataList2}},[e("el-table-column",{attrs:{prop:"id",label:"编号/时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.id))]),e("div",{staticClass:"font-sm"},[t._v(t._s(t._f("formatTime")(a.row.createTime)))])]}}])}),e("el-table-column",{attrs:{prop:"type",label:"类型",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{directives:[{name:"show",rawName:"v-show",value:1==a.row.type,expression:"scope.row.type == 1"}],staticStyle:{color:"#09C69D"}},[t._v("购买")]),e("span",{directives:[{name:"show",rawName:"v-show",value:2==a.row.type,expression:"scope.row.type == 2"}],staticStyle:{color:"#FF4C4C"}},[t._v("出售")])]}}])}),e("el-table-column",{attrs:{prop:"type",label:"币种",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.coinInfo.symbol))])]}}])}),e("el-table-column",{attrs:{prop:"price",label:"价格"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"price"},[t._v(t._s(a.row.price))]),e("span",{staticClass:"price m-l-sm"},[t._v("CNY")])]}}])}),e("el-table-column",{attrs:{prop:"amount",label:"数量"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.amount))])]}}])}),e("el-table-column",{attrs:{prop:"totalPrice",label:"总额"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.totalPrice)+" CNY")])]}}])}),e("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{color:"color:rgba(0,0,0,0.3)"}},[t._v(t._s(a.row.stateFormat.title))])]}}])}),e("el-table-column",{attrs:{prop:"action",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.adId?e("el-button",{attrs:{size:"small",type:"info"},on:{click:function(e){return t.util.navigateTo({url:"/otc/order/"+a.row.id})}}},[t._v("查看")]):t._e()]}}])})],1),e("el-pagination",{staticClass:"text-center m-t-md",attrs:{background:"",layout:"prev, pager, next","page-size":t.dataPage[t.activeTab].limit,"current-page":t.dataPage[t.activeTab].page,total:t.dataPage[t.activeTab].total},on:{"current-change":t.pageChange,"update:pageSize":function(a){return t.$set(t.dataPage[t.activeTab],"limit",a)},"update:page-size":function(a){return t.$set(t.dataPage[t.activeTab],"limit",a)},"update:currentPage":function(a){return t.$set(t.dataPage[t.activeTab],"page",a)},"update:current-page":function(a){return t.$set(t.dataPage[t.activeTab],"page",a)}}})],1)],1)],1)],1),e("xy-footer")],1)}),[],!1,null,"155d32af",null);a.default=s.exports}}]);