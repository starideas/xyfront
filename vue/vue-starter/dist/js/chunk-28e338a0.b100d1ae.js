(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28e338a0"],{5911:function(e,t,n){"use strict";var a=n("7db4"),r=n.n(a);r.a},"7db4":function(e,t,n){},bea2:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xy-builder-comp xy-builder-wrap-col"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"col-box"},[n("el-row",{attrs:{gutter:25}},[n("el-col",{staticClass:"left",attrs:{xs:24,sm:24,md:6,lg:4}},[n("el-tree",{staticClass:"m-b-md",attrs:{data:e.colData.dataList,"node-key":"id","default-expand-all":"","highlight-current":"",draggable:"","expand-on-click-node":!0},on:{"node-contextmenu":e.handleContextmenu,"node-drop":e.handleDrop},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node,r=t.data;return n("div",{staticClass:"custom-tree-node flex flex-1 flex-alignCenter"},[n("div",{staticClass:"flex-1 ts-14 tw5 flex flex-alignCenter",on:{click:function(t){return e.editPre(a,r)}}},[e._v(" "+e._s(r.title)+" ")]),n("div",{staticClass:"actions ts-13",staticStyle:{display:"none"}},[n("el-link",{staticClass:"m-r-xs",attrs:{type:"text"},on:{click:function(){return e.append(a,r)}}},[e._v(" 添加子项 ")]),n("el-link",{attrs:{type:"danger"},on:{click:function(){return e.remove(a,r)}}},[e._v(" 删除 ")])],1)])}}])}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.menuVisible,expression:"menuVisible"}],staticClass:"menu",attrs:{id:"contextmenu"}},[n("div",{staticClass:"contextmenu__item",on:{click:function(){return e.append(e.cnode,e.cdata)}}},[e._v("添加子项")]),n("div",{staticClass:"contextmenu__item",on:{click:function(){return e.remove(e.cnode,e.cdata)}}},[e._v("删除")])])],1),n("el-col",{staticClass:"right",attrs:{xs:24,sm:24,md:18,lg:20}},[n("XyBuilderForm",{ref:"rightForm",attrs:{api:e.currentEditApi,show:!0,header:e.header},on:{close:function(t){return e.closeModel(t)}}})],1)],1)],1)])},r=[],i=(n("c740"),n("4160"),n("a434"),n("b0c0"),n("d3b7"),n("159b"),n("5530")),o=n("b85c"),s=(n("96cf"),n("1da1")),c=n("4328"),u=n.n(c),d=n("6df9"),l={components:{"xy-title":d["a"]},name:"XyBuilderCol",props:{api:"",header:{type:Object,default:function(){return{cloudId:0,eid:0}}},pitem:{type:Object,default:function(){return{}}},show:!1,predata:""},data:function(){return{ready:!1,loading:!1,menuVisible:!1,cnode:null,cdata:null,colData:{dataList:[]},currentEditApi:""}},watch:{show:function(e){this.stackData={},1==e&&this.loadData()}},beforeCreate:function(){this.$options.components.XyBuilderList=function(){return Promise.resolve().then(n.bind(null,"114b"))},this.$options.components.XyBuilderForm=function(){return Promise.resolve().then(n.bind(null,"4d99"))},this.$options.components.XyBuilderInfo=function(){return n.e("chunk-b045c552").then(n.bind(null,"5d93"))},this.$options.components.XyBuilderTab=function(){return n.e("chunk-2d0b32fa").then(n.bind(null,"26ff"))}},created:function(){this.predata?this.readyProcess(this.predata):this.loadData()},methods:{closeModel:function(){},handleContextmenu:function(e,t,n,a){this.cnode=n,this.cdata=t,this.menuVisible=!1,this.menuVisible=!0,event.preventDefault();var r=document.querySelector(".menu");this.styleMenu(r)},foo:function(){this.menuVisible=!1,document.removeEventListener("click",this.foo)},styleMenu:function(e){event.clientX>1800?e.style.left=event.clientX-100+"px":e.style.left=event.clientX-200+"px",document.addEventListener("click",this.foo),event.clientY>700?e.style.top=event.clientY-300+"px":e.style.top=event.clientY-150+"px"},handleDrop:function(e,t,n,a){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,o,s,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r.colData.rightButtonList.forEach((function(e){"edit"==e.name&&(i=e)})),o="",s=0,a.t0=n,a.next="inner"===a.t0?8:"before"===a.t0?10:"after"===a.t0?13:16;break;case 8:return o=t.data.uniqeId,a.abrupt("break",16);case 10:return o=t.data.puniqeId,s=t.data.sortnum-1,a.abrupt("break",16);case 13:return o=t.data.puniqeId,s=t.data.sortnum+1,a.abrupt("break",16);case 16:return a.next=18,r.util.request({url:i.pageData.api+"/"+e.data.id,method:"put",data:{puniqeId:o,sortnum:s},header:{CloudId:r.header.cloudId,Eid:r.header.eid}});case 18:c=a.sent,"200"==c.code?r.util.showToast({title:c.msg,icon:"success",duration:1e3}):r.util.showToast({title:c.msg,icon:"error",duration:3e3});case 20:case"end":return a.stop()}}),a)})))()},editPre:function(e,t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n.$refs.rightForm.getCount()>1?n.$confirm("您有修改内容未保存，确认离开当前页面吗？","提示",{confirmButtonText:"确认离开",cancelButtonText:"留在页面",confirmButtonClass:"el-button--danger",closeOnClickModal:!1,type:"error"}).then(Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n.edit(e,t);case 1:case"end":return a.stop()}}),a)})))).catch((function(){})):n.edit(e,t);case 1:case"end":return a.stop()}}),a)})))()},edit:function(e,t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.$refs.rightForm.getCount(),n.cnode=null,n.cdata=null,n.menuVisible=!1,a=n,n.colData.rightButtonList.forEach((function(e){if("edit"==e.name){var n=e,r="",i=new Object;if(n.pageData.apiSuffix){var s,c=n.pageData.apiSuffix,d=Object(o["a"])(c);try{for(d.s();!(s=d.n()).done;){var l=s.value;r=r+"/"+t[l]}}catch(g){d.e(g)}finally{d.f()}}else r="/"+t.id;if(n.pageData.querySuffix){var f,p=n.pageData.querySuffix,h=Object(o["a"])(p);try{for(h.s();!(f=h.n()).done;){var m=f.value;1==m[2]?i[m[0]]=m[1]:i[m[0]]=t[m[1]]}}catch(g){h.e(g)}finally{h.f()}}if(""!=u.a.stringify(i)?a.currentEditApi=n.pageData.api+r+"?"+u.a.stringify(i):a.currentEditApi=n.pageData.api+r,!a.currentEditApi)return!1}}));case 6:case"end":return e.stop()}}),e)})))()},append:function(e,t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a="",n.colData.rightButtonList.forEach((function(e){"addChild"==e.name&&(a=e.pageData.api)})),a){e.next=5;break}return e.abrupt("return",!1);case 5:n.$prompt("请输入标题","创建“"+t.title+"”的子项",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){var i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=r.value,e.next=3,n.util.request({url:a,method:"post",data:{bookId:t.bookId,puniqeId:t.uniqeId,title:i},header:{CloudId:n.header.cloudId,Eid:n.header.eid}});case 3:o=e.sent,"200"==o.code?(n.util.showToast({title:o.msg,icon:"success",duration:1e3}),t.children||n.$set(t,"children",[]),t.children.push(o.data.info)):n.util.showToast({title:o.msg,icon:"error",duration:3e3});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){n.$message({type:"info",message:"取消输入"})}));case 6:case"end":return e.stop()}}),e)})))()},remove:function(e,t){var n=this,a=this,r="";if(this.colData.rightButtonList.forEach((function(e){"delete"==e.name&&(r=e)})),!r.pageData.api)return!1;var i="",c=new Object;if(r.pageData.apiSuffix){var d,l=r.pageData.apiSuffix,f=Object(o["a"])(l);try{for(f.s();!(d=f.n()).done;){var p=d.value;i=i+"/"+t[p]}}catch(b){f.e(b)}finally{f.f()}}else i="/"+t.id;if(r.pageData.querySuffix){var h,m=r.pageData.querySuffix,g=Object(o["a"])(m);try{for(g.s();!(h=g.n()).done;){var v=h.value;1==v[2]?c[v[0]]=v[1]:c[v[0]]=t[v[1]]}}catch(b){g.e(b)}finally{g.f()}}this.$confirm(r.pageData.content,r.pageData.title,{confirmButtonText:r.pageData.okText,cancelButtonText:r.pageData.cancelText,dangerouslyUseHTMLString:!0,closeOnClickModal:!1,type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function o(){var s,d,l,f,p,h;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return s=r.pageData.api+i,""!=u.a.stringify(c)&&(s=s+"?"+u.a.stringify(c)),o.next=4,a.util.request({url:s,method:r.pageData.formMethod,header:a.header});case 4:d=o.sent,"200"==d.code?(l=e.parent,f=l.data.children||l.data,p=f.findIndex((function(e){return e.id===t.id})),f.splice(p,1),a.util.showToast({title:d.msg,icon:"success",duration:1e3}),n.$store.state.app.uiAudio&&(h=new Audio,h.src="https://cdn.jsdelivr.net/gh/starideas/xyfront/audio/delete.mp3",h.play())):a.util.showToast({title:d.msg,icon:"loading",duration:3e3});case 6:case"end":return o.stop()}}),o)})))).catch((function(){if(n.$store.state.app.uiAudio){var e=new Audio;e.src=Object({NODE_ENV:"production",VUE_APP_BASE_DOMAIN:"https://jiangruyi.com",VUE_APP_I18N_FALLBACK_LOCALE:"zh",VUE_APP_I18N_LOCALE:"zh",VUE_APP_IS_DEMO:"false",BASE_URL:"https://cdn.jsdelivr.net/gh/starideas/xyfront/vue/vue-starter/dist/"}).VUE_APP_AUDIO_CLOSE,e.play()}}))},readyProcess:function(e){var t=this.util.builderutil.readyList({listData:e},this.$store.state.app.apiInfo);this.colData=Object(i["a"])({},t.listData),this.ready=!0},loadData:function(){var e=arguments,t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.length>0&&void 0!==e[0]?e[0]:"",""!=a&&(t.api=a),t.loading=!0,!t.api){n.next=8;break}return n.next=6,t.util.request({url:t.api,method:"get",header:{CloudId:null===(r=t.header)||void 0===r?void 0:r.cloudId,Eid:null===(i=t.header)||void 0===i?void 0:i.eid}});case 6:o=n.sent,"200"==o.code?(t.readyProcess(o.data.listData),t.loading=!1):t.util.showToast({title:o.msg,icon:"loading",duration:3e3});case 8:t.loading=!1;case 9:case"end":return n.stop()}}),n)})))()}}},f=l,p=(n("5911"),n("2877")),h=Object(p["a"])(f,a,r,!1,null,"03ece61d",null);t["default"]=h.exports}}]);