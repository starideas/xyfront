(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f984666"],{"036e":function(t,a,e){},"0700":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-card",{staticClass:"box-card",staticStyle:{"min-height":"300px"},attrs:{shadow:"never"}},[e("div",{staticClass:"clearfix ts-18",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("热门")])]),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"case-list",staticStyle:{"min-height":"300px"},attrs:{"element-loading-text":"拼命加载中"}},t._l(t.dataListHot,(function(a,s){return e("div",{key:s,staticClass:"item p-b-xs border-bottom_1px"},[e("div",{staticClass:"bg-white"},[e("div",{staticClass:"title ts-14",on:{click:function(e){return t.util.navigateTo({url:"/ask/"+a.id})}}},[t._v(t._s(a.title))]),e("div",{staticClass:"info flex space-between text-gray ts-12"},[e("div",[t._v(t._s(a.userInfo.nickname))]),e("div",[t._v(t._s(a.viewCount)+"次浏览")])]),e("div",{staticClass:"subtitle text-gray ts-12"},[t._v(t._s(a.subtitle))])])])})),0)])],1)},i=[],n=e("1da1"),r=(e("96cf"),{name:"hotAsk",data:function(){return{loading:!1,dataListNew:[],dataListHot:[]}},props:{cateId:0},created:function(){this.loadHot()},watch:{cateId:function(t){this.loadHot()}},methods:{loadHot:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.cateId){a.next=2;break}return a.abrupt("return");case 2:return t.loading=!0,a.next=5,t.util.request({url:"/v1/icms/post/lists/"+t.cateId,data:{siteRec:"hot"},method:"get"});case 5:e=a.sent,200==e.code?t.dataListHot=e.data.dataList:t.util.showToast({title:e.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return a.stop()}}),a)})))()}}}),l=r,o=(e("6127"),e("2877")),c=Object(o["a"])(l,s,i,!1,null,"e49b0ff8",null);a["a"]=c.exports},"1c64":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap"},[e("xy-header"),e("div",{staticClass:"main"},["iframe"==t.$store.state.app.mainNav[t.$store.state.app.currentNav].listsTpl?e("div",{staticStyle:{position:"absolute",top:"50px",bottom:"0",left:"0",right:"0"}},[e("iframe",{staticStyle:{border:"0",width:"100%",height:"100%"},attrs:{src:t.$store.state.app.mainNav[t.$store.state.app.currentNav].url}})]):t._e(),e("div",{staticClass:"container p-t"},[t.$store.state.app.mainNav[t.$store.state.app.currentNav].bannerName?e("div",{staticClass:"sub-header text-center m-t-md m-b-md"},[e("div",{staticClass:"ts-26 tw5 m-b"},[t._v(t._s(t.$store.state.app.mainNav[t.$store.state.app.currentNav].bannerName))]),e("div",{staticClass:"text-gray ts-22 tw3"},[t._v(t._s(t.$store.state.app.mainNav[t.$store.state.app.currentNav].subtitle))])]):t._e(),"page"==t.$store.state.app.mainNav[t.$store.state.app.currentNav].listsTpl?[e("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{shadow:"none","element-loading-text":"拼命加载中"}},[e("div",{directives:[{name:"viewer",rawName:"v-viewer",value:{movable:!0},expression:"{movable: true}"}],staticClass:"ts-16",domProps:{innerHTML:t._s(t.content)}})])]:"case"==t.$store.state.app.mainNav[t.$store.state.app.currentNav].listsTpl?e("div",[e("lists-case",{attrs:{loading:t.loading,list:t.dataList}})],1):"ask"==t.$store.state.app.mainNav[t.$store.state.app.currentNav].listsTpl?e("div",[e("lists-ask",{attrs:{loading:t.loading,list:t.dataList,cateId:t.$store.state.app.mainNav[t.$store.state.app.currentNav].id},on:{"refresh-ist":t.loadlists}})],1):t._e()],2)]),e("xy-footer")],1)},i=[],n=e("1da1"),r=(e("96cf"),e("ac1f"),e("5319"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"case-list"},[e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"flex flex-wrap",staticStyle:{"min-height":"300px"},attrs:{type:"flex",justify:"center",align:"middle","element-loading-text":"拼命加载中"}},t._l(t.dataList,(function(a,s){return e("el-col",{key:s,staticClass:"item",attrs:{xs:24,sm:12,md:8,lg:8}},[e("div",{staticClass:"image"},[e("img",{attrs:{src:a.cover,alt:a.title}})]),e("div",{staticClass:"p-a bg-white"},[e("div",{staticClass:"title ts-16"},[t._v(t._s(a.title))]),e("div",{staticClass:"info flex space-between text-gray ts-12"},[e("div",[t._v(t._s(a.userInfo.nickname))]),e("div",[t._v(t._s(a.viewCount)+"次浏览")])]),e("div",{staticClass:"subtitle text-gray ts-12"},[t._v(t._s(a.subtitle))])])])})),1)],1)])}),l=[],o={name:"listsCase",data:function(){return{dataList:[]}},props:{loading:!1,list:{type:Array,default:function(){return[]}}},created:function(){this.dataList=this.list},watch:{list:function(){this.dataList=this.list}},methods:{}},c=o,d=(e("d95c"),e("2877")),u=Object(d["a"])(c,r,l,!1,null,"dc1c848a",null),v=u.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-row",{staticClass:"flex flex-wrap",attrs:{type:"flex",gutter:20}},[e("el-col",{staticClass:"m-b-sm",attrs:{xs:24,lg:17}},[e("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[e("div",{staticClass:"clearfix ts-18",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("最新")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(a){t.item.pageData.show=!0}}},[t._v("发布帖子")])],1),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"case-list",staticStyle:{"min-height":"300px"},attrs:{"element-loading-text":"拼命加载中"}},t._l(t.dataList,(function(a,s){return e("div",{key:s,staticClass:"item flex flex-alignCenter border-bottom_1px"},[e("div",{staticClass:"m-r text-center bg-indo"},[e("el-alert",{staticClass:"p-a-xs",attrs:{closable:!1,type:"info"}},[e("div",{staticClass:"ts-14"},[t._v(t._s(a.commentCount))]),e("div",{staticClass:"text-gray ts-12"},[t._v("回复")])])],1),e("div",{staticClass:"m-r text-center text-gray"},[e("div",{staticClass:"ts-18"},[t._v(t._s(a.viewCount))]),e("div",{staticClass:" ts-12"},[t._v("浏览")])]),e("div",{staticClass:"bg-white flex-1"},[e("div",{staticClass:"title ts-16",on:{click:function(e){return t.util.navigateTo({url:"/ask/"+a.id})}}},[t._v(t._s(a.title))]),e("div",{staticClass:"info flex space-between text-gray ts-12"},[e("div",[t._v(t._s(a.userInfo.nickname))]),e("div",[t._v("发布于"+t._s(t._f("formatTime")(a.postTime)))])]),e("div",{staticClass:"subtitle text-gray ts-12"},[t._v(t._s(a.subtitle))])])])})),0)])],1),e("el-col",{staticClass:"m-b-sm",attrs:{xs:24,lg:7}},[e("hot-ask",{attrs:{cateId:t.cateId}})],1)],1),e("el-dialog",{staticClass:"ts-16",attrs:{title:"发布帖子",visible:t.item.pageData.show,width:"70%"},on:{"update:visible":function(a){return t.$set(t.item.pageData,"show",a)}}},[e("XyBuilderForm",{attrs:{api:"/v1/icms/post/add?cateId="+t.cateId,show:t.item.pageData.show,pitem:t.item},on:{close:function(a){return t.closeModel(t.item,a)}}})],1)],1)},m=[],f=(e("d3b7"),e("3ca3"),e("ddb0"),e("0700")),g={name:"listsAsk",components:{"hot-ask":f["a"]},data:function(){return{item:{pageData:{show:!1}},dataList:[]}},props:{loading:!1,cateId:0,list:{type:Array,default:function(){return[]}}},beforeCreate:function(){this.$options.components.XyBuilderForm=function(){return e.e("chunk-522e1ef8").then(e.bind(null,"866e"))}},created:function(){this.dataList=this.list},watch:{list:function(t){this.dataList=t}},methods:{closeModel:function(t,a){this.item.pageData.show=!1,a&&this.$emit("refresh-ist")}}},h=g,x=(e("fa83"),Object(d["a"])(h,p,m,!1,null,"647e0382",null)),b=x.exports,w={watch:{$route:function(t,a){this.loadlists()}},components:{"lists-case":v,"lists-ask":b},data:function(){return{loading:!1,dataList:[]}},created:function(){this.loadlists()},computed:{content:function(){return this.$store.state.app.mainNav[this.$store.state.app.currentNav].content.replace(/\<img/gi,'<img style="max-width:100%;height:auto" ')}},methods:{loadlists:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(0==t.$store.state.app.mainNav[t.$store.state.app.currentNav].cateType){a.next=2;break}return a.abrupt("return");case 2:return t.dataList=[],t.loading=!0,a.next=6,t.util.request({url:"/v1/icms/post/lists/"+t.$store.state.app.mainNav[t.$store.state.app.currentNav].id,data:{},method:"get"});case 6:e=a.sent,200==e.code?t.dataList=e.data.dataList:t.util.showToast({title:e.msg,icon:"loading",duration:3e3}),t.loading=!1;case 9:case"end":return a.stop()}}),a)})))()}}},_=w,C=Object(d["a"])(_,s,i,!1,null,"3b800202",null);a["default"]=C.exports},6127:function(t,a,e){"use strict";e("c839")},c839:function(t,a,e){},d95c:function(t,a,e){"use strict";e("f651")},f651:function(t,a,e){},fa83:function(t,a,e){"use strict";e("036e")}}]);