(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0090a901"],{"1c64":function(t,a,e){"use strict";function s(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}e.r(a),e("b0c0"),e("96cf");var i,n=e("1da1"),r={name:"listsCase",data:function(){return{dataList:[]}},props:{list:{type:Array,default:function(){return[]}}},created:function(){this.dataList=this.list},watch:{list:function(){this.dataList=this.list}},methods:{}},o=(e("aee1"),e("2877")),d=(s(i={watch:{$route:function(){this.name=this.$route.params.name;for(var t=0;t<this.$store.state.app.mainNav.length;t++)this.$store.state.app.mainNav[t].name==this.name&&(this.mainNavIndex=t,this.$store.state.app.mainNavData[t]||this.loadlists())}},components:{"lists-case":Object(o.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"case-list flex flex-wrap"},t._l(t.dataList,(function(a,s){return e("div",{key:s,staticClass:"item"},[e("div",[e("img",{attrs:{src:a.cover,alt:a.title}})]),e("div",{staticClass:"p-a bg-white"},[e("div",{staticClass:"title ts-16"},[t._v(t._s(a.title))]),e("div",{staticClass:"info flex space-between text-gray ts-12"},[e("div",[t._v(t._s(a.userInfo.nickname))]),e("div",[t._v(t._s(a.viewCount)+"次浏览")])]),e("div",{staticClass:"subtitle text-gray ts-12"},[t._v(t._s(a.subtitle))])])])})),0)])}),[],!1,null,"78002d42",null).exports},data:function(){return{name:0,mainNavIndex:0,dataList:[]}}},"watch",{"$store.state.app.mainNavData":function(){this.$store.state.app.mainNavData[this.$store.state.app.mainNav[this.mainNavIndex].id]?this.dataList=this.$store.state.app.mainNavData[this.$store.state.app.mainNav[this.mainNavIndex].id].dataList:this.dataList=[]}}),s(i,"created",(function(){this.name=this.$route.params.name;for(var t=0;t<this.$store.state.app.mainNav.length;t++)this.$store.state.app.mainNav[t].name==this.name&&(this.mainNavIndex=t,this.$store.state.app.mainNavData[t]||this.loadlists())})),s(i,"methods",{loadlists:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(0!=t.$store.state.app.mainNav[t.mainNavIndex].cateType)return a.abrupt("return");a.next=2;break;case 2:return a.next=4,t.util.request({url:"/v1/icms/post/lists/"+t.$store.state.app.mainNav[t.mainNavIndex].id,data:{},method:"get"});case 4:200==(e=a.sent).code?(t.dataList=e.data.dataList,t.$store.commit("app/setMainNavData",{cateId:t.$store.state.app.mainNav[t.mainNavIndex].id,dataList:e.data.dataList,pageData:e.data.dataPage})):t.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 6:case"end":return a.stop()}}),a)})))()}}),i),c=Object(o.a)(d,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap"},[e("xy-header"),e("div",{staticClass:"main"},["iframe"==t.$store.state.app.mainNav[t.mainNavIndex].listsTpl?e("div",{staticStyle:{position:"absolute",top:"60px",bottom:"0",left:"0",right:"0"}},[e("iframe",{staticStyle:{border:"0",width:"100%",height:"100%"},attrs:{src:t.$store.state.app.mainNav[t.mainNavIndex].url}})]):t._e(),e("div",{staticClass:"container p-t"},[e("div",{staticClass:"sub-header text-center m-t-md m-b-md"},[e("div",{staticClass:"ts-26 tw5 m-b"},[t._v(t._s(t.$store.state.app.mainNav[t.mainNavIndex].bannerName))]),e("div",{staticClass:"text-gray"},[t._v(t._s(t.$store.state.app.mainNav[t.mainNavIndex].subtitle))])]),"page"==t.$store.state.app.mainNav[t.mainNavIndex].listsTpl?[e("el-card",{attrs:{shadow:"none"}},[e("div",{domProps:{innerHTML:t._s(t.$store.state.app.mainNav[t.mainNavIndex].content)}})])]:"case"==t.$store.state.app.mainNav[t.mainNavIndex].listsTpl?e("div",[e("lists-case",{attrs:{list:t.dataList}})],1):t._e()],2)]),e("xy-footer")],1)}),[],!1,null,"6a4cdc26",null);a.default=c.exports},"713a":function(t,a,e){},aee1:function(t,a,e){"use strict";var s=e("713a");e.n(s).a}}]);