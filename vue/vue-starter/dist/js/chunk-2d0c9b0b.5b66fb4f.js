(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c9b0b"],{"59e6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("xy-header"),a("div",{staticClass:"main p-t"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"container",attrs:{"element-loading-text":"拼命加载中"}},[a("el-card",{staticStyle:{"min-height":"400px"},attrs:{shadow:"none"}},[a("h1",{staticClass:"title text-center"},[t._v(t._s(t.info.title))]),a("div",{domProps:{innerHTML:t._s(t.info.content)}})])],1)]),a("xy-footer")],1)},i=[],o=(a("96cf"),a("1da1")),s={data:function(){return{id:0,info:{},loading:!1}},mounted:function(){this.id=this.$route.params.id,this.loadData()},watch:{$route:function(t,e){this.id=this.$route.params.id,this.loadData()}},methods:{loadData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.util.request({url:"/v1/icms/post/info/"+t.id,data:{},method:"get"});case 3:a=e.sent,200==a.code?t.info=a.data.info:t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()}}},r=s,d=a("2877"),c=Object(d["a"])(r,n,i,!1,null,"41ce74ae",null);e["default"]=c.exports}}]);