(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6c0ead4"],{"0700":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-card",{staticClass:"box-card",staticStyle:{"min-height":"300px"},attrs:{shadow:"never"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("热门")])]),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"case-list",attrs:{"element-loading-text":"拼命加载中"}},t._l(t.dataListHot,(function(a,s){return e("div",{key:s,staticClass:"item p-b-xs border-bottom_1px"},[e("div",{staticClass:"bg-white"},[e("div",{staticClass:"title ts-14",on:{click:function(e){return t.util.navigateTo({url:"/ask/"+a.id})}}},[t._v(t._s(a.title))]),e("div",{staticClass:"info flex space-between text-gray ts-12"},[e("div",[t._v(t._s(a.userInfo.nickname))]),e("div",[t._v(t._s(a.viewCount)+"次浏览")])]),e("div",{staticClass:"subtitle text-gray ts-12"},[t._v(t._s(a.subtitle))])])])})),0)])],1)},i=[],n=(e("96cf"),e("1da1")),r={name:"hotAsk",data:function(){return{loading:!1,dataListNew:[],dataListHot:[]}},props:{cateId:0},created:function(){this.loadHot()},watch:{cateId:function(t){this.loadHot()}},methods:{loadHot:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.cateId){a.next=2;break}return a.abrupt("return");case 2:return t.loading=!0,a.next=5,t.util.request({url:"/v1/icms/post/lists/"+t.cateId,data:{siteRec:"hot"},method:"get"});case 5:e=a.sent,200==e.code?t.dataListHot=e.data.dataList:t.util.showToast({title:e.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return a.stop()}}),a)})))()}}},o=r,l=(e("999a"),e("2877")),c=Object(l["a"])(o,s,i,!1,null,"02b18709",null);a["a"]=c.exports},"1c64":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap"},[e("xy-header"),e("div",{staticClass:"main"},["iframe"==t.$store.state.app.mainNav[t.$store.state.app.currentNav].listsTpl?e("div",{staticStyle:{position:"absolute",top:"50px",bottom:"0",left:"0",right:"0"}},[e("iframe",{staticStyle:{border:"0",width:"100%",height:"100%"},attrs:{src:t.$store.state.app.mainNav[t.$store.state.app.currentNav].url}})]):t._e(),e("div",{staticClass:"container p-t"},[t.$store.state.app.mainNav[t.$store.state.app.currentNav].bannerName?e("div",{staticClass:"sub-header text-center m-t-md m-b-md"},[e("div",{staticClass:"ts-26 tw5 m-b"},[t._v(t._s(t.$store.state.app.mainNav[t.$store.state.app.currentNav].bannerName))]),e("div",{staticClass:"text-gray"},[t._v(t._s(t.$store.state.app.mainNav[t.$store.state.app.currentNav].subtitle))])]):t._e(),"page"==t.$store.state.app.mainNav[t.$store.state.app.currentNav].listsTpl?[e("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{shadow:"none","element-loading-text":"拼命加载中"}},[e("div",{domProps:{innerHTML:t._s(t.$store.state.app.mainNav[t.$store.state.app.currentNav].content)}})])]:"case"==t.$store.state.app.mainNav[t.$store.state.app.currentNav].listsTpl?e("div",[e("lists-case",{attrs:{loading:t.loading,list:t.dataList}})],1):"ask"==t.$store.state.app.mainNav[t.$store.state.app.currentNav].listsTpl?e("div",[e("lists-ask",{attrs:{loading:t.loading,list:t.dataList,cateId:t.$store.state.app.mainNav[t.$store.state.app.currentNav].id},on:{"refresh-ist":t.loadlists}})],1):t._e()],2)]),e("xy-footer")],1)},i=[],n=(e("96cf"),e("1da1")),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"case-list flex flex-wrap"},t._l(t.dataList,(function(a,s){return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],key:s,staticClass:"item",attrs:{"element-loading-text":"拼命加载中"}},[e("div",[e("img",{attrs:{src:a.cover,alt:a.title}})]),e("div",{staticClass:"p-a bg-white"},[e("div",{staticClass:"title ts-16"},[t._v(t._s(a.title))]),e("div",{staticClass:"info flex space-between text-gray ts-12"},[e("div",[t._v(t._s(a.userInfo.nickname))]),e("div",[t._v(t._s(a.viewCount)+"次浏览")])]),e("div",{staticClass:"subtitle text-gray ts-12"},[t._v(t._s(a.subtitle))])])])})),0)])},o=[],l={name:"listsCase",data:function(){return{dataList:[]}},props:{loading:!1,list:{type:Array,default:function(){return[]}}},created:function(){this.dataList=this.list},watch:{list:function(){this.dataList=this.list}},methods:{}},c=l,d=(e("281c"),e("2877")),u=Object(d["a"])(c,r,o,!1,null,"bc389e4c",null),p=u.exports,v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-row",{attrs:{type:"flex",gutter:20}},[e("el-col",{attrs:{xs:24,lg:17}},[e("el-card",{staticClass:"box-card",staticStyle:{"min-height":"400px"},attrs:{shadow:"never"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("最新")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(a){t.item.pageData.show=!0}}},[t._v("发布帖子")])],1),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"case-list",attrs:{"element-loading-text":"拼命加载中"}},t._l(t.dataList,(function(a,s){return e("div",{key:s,staticClass:"item flex flex-alignCenter border-bottom_1px"},[e("div",{staticClass:"m-r text-center bg-indo"},[e("el-alert",{staticClass:"p-a-xs",attrs:{closable:!1,type:"info"}},[e("div",{staticClass:"ts-14"},[t._v(t._s(a.commentCount))]),e("div",{staticClass:"text-gray ts-12"},[t._v("回复")])])],1),e("div",{staticClass:"m-r text-center text-gray"},[e("div",[t._v(t._s(a.viewCount))]),e("div",{staticClass:" ts-12"},[t._v("浏览")])]),e("div",{staticClass:"bg-white flex-1"},[e("div",{staticClass:"title ts-16",on:{click:function(e){return t.util.navigateTo({url:"/ask/"+a.id})}}},[t._v(t._s(a.title))]),e("div",{staticClass:"info flex space-between text-gray ts-12"},[e("div",[t._v(t._s(a.userInfo.nickname))]),e("div",[t._v("发布于"+t._s(t._f("formatTime")(a.postTime)))])]),e("div",{staticClass:"subtitle text-gray ts-12"},[t._v(t._s(a.subtitle))])])])})),0)])],1),e("el-col",{attrs:{xs:24,lg:7}},[e("hot-ask",{attrs:{cateId:t.cateId}})],1)],1),e("el-dialog",{attrs:{title:"发布帖子",visible:t.item.pageData.show,width:"70%"},on:{"update:visible":function(a){return t.$set(t.item.pageData,"show",a)}}},[e("XyBuilderForm",{attrs:{api:"/v1/icms/post/add?cateId="+t.cateId,show:t.item.pageData.show,pitem:t.item},on:{close:function(a){return t.closeModel(t.item,a)}}})],1)],1)},m=[],h=(e("d3b7"),e("0700")),f={name:"listsAsk",components:{"hot-ask":h["a"]},data:function(){return{item:{pageData:{show:!1}},dataList:[]}},props:{loading:!1,cateId:0,list:{type:Array,default:function(){return[]}}},beforeCreate:function(){this.$options.components.XyBuilderForm=function(){return e.e("chunk-c3c997be").then(e.bind(null,"4d99"))}},created:function(){this.dataList=this.list},watch:{list:function(t){this.dataList=t}},methods:{closeModel:function(t,a){this.item.pageData.show=!1,a&&this.$emit("refresh-ist")}}},g=f,x=(e("d160"),Object(d["a"])(g,v,m,!1,null,"7a2c17fd",null)),_=x.exports,b={watch:{$route:function(t,a){this.dataList=[],this.mainNavIndex=-1,this.$store.state.app.mainNavData[this.$store.state.app.currentNav]?this.dataList=this.$store.state.app.mainNavData[this.$store.state.app.currentNav].dataList:this.loadlists()},"$store.state.app.mainNavData":function(){this.$store.state.app.mainNavData[this.$store.state.app.currentNav]?this.dataList=this.$store.state.app.mainNavData[this.$store.state.app.currentNav].dataList:this.dataList=[]}},components:{"lists-case":p,"lists-ask":_},data:function(){return{loading:!1,dataList:[]}},created:function(){this.loadlists()},methods:{loadlists:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(0==t.$store.state.app.mainNav[t.$store.state.app.currentNav].cateType){a.next=2;break}return a.abrupt("return");case 2:return t.loading=!0,a.next=5,t.util.request({url:"/v1/icms/post/lists/"+t.$store.state.app.mainNav[t.$store.state.app.currentNav].id,data:{},method:"get"});case 5:e=a.sent,200==e.code?(t.dataList=e.data.dataList,t.$store.commit("app/setMainNavData",{key:t.$store.state.app.currentNav,cateId:t.$store.state.app.mainNav[t.$store.state.app.currentNav].id,dataList:e.data.dataList,pageData:e.data.dataPage})):t.util.showToast({title:e.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return a.stop()}}),a)})))()}}},w=b,N=Object(d["a"])(w,s,i,!1,null,"0dd90660",null);a["default"]=N.exports},"281c":function(t,a,e){"use strict";var s=e("c2d6"),i=e.n(s);i.a},8133:function(t,a,e){},"999a":function(t,a,e){"use strict";var s=e("8133"),i=e.n(s);i.a},b967:function(t,a,e){},c2d6:function(t,a,e){},d160:function(t,a,e){"use strict";var s=e("b967"),i=e.n(s);i.a}}]);