(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15f0287a"],{"05e8":function(t,e,n){},"071a":function(t,e,n){"use strict";var i=n("1ab5"),a=n.n(i);a.a},"1ab5":function(t,e,n){},"1f38":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var i=function(){return"undefined"!==typeof window?window:t},a=function(){var t=i();return t&&t.tinymce?t.tinymce:null}}).call(this,n("c8ba"))},2420:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xy-editor-tinymce"},[t.loadedScript?n("tinymce-vue",{ref:"tinymce",attrs:{"api-key":t.item.extra.tinymce.key||"y1buzf80o0qtt4lt3pfj0yh98ilgq4ts6mf3nwjpqky9ea49","tinymce-script-src":"https://cdn.jsdelivr.net/npm/tinymce@5.5.1/tinymce.min.js",init:t.init},on:{onInit:t.onReady},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}):t._e(),n("el-dialog",{attrs:{title:"相册",visible:t.imageAlbumShow,width:"1000px"},on:{"update:visible":function(e){t.imageAlbumShow=e}}},[n("span",[t._v("相册功能开发中，敬请期待。。。")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.imageAlbumShow=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.imageAlbumShow=!1}}},[t._v("确 定")])],1)]),t.newyearShow?n("iframe",{staticClass:"fireworks",attrs:{src:"https://uniweb.jiangruyi.com/gh/starideas/xyfront/libs/newyear/index.html?title="+(t.item.extra&&t.item.extra.newyearTitle?t.item.extra.newyearTitle:"新年快乐"),frameborder:"0"}}):t._e(),n("i",{directives:[{name:"show",rawName:"v-show",value:t.newyearShow,expression:"newyearShow"}],staticClass:"xyicon xyicon-close",staticStyle:{"font-size":"50px"},on:{click:t.newyearHide}})],1)},a=[],o=(n("4160"),n("c975"),n("b0c0"),n("d3b7"),n("159b"),n("ade3")),r=(n("96cf"),n("1da1")),s=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],l=function(t){return-1!==s.indexOf(t)},c=function(t,e,n){Object.keys(e).filter(l).forEach((function(i){var a=e[i];"function"===typeof a&&("onInit"===i?a(t,n):n.on(i.substring(2),(function(t){return a(t,n)})))}))},u=function(t,e){var n,i=t.$props.modelEvents?t.$props.modelEvents:null,a=Array.isArray(i)?i.join(" "):i;t.$watch("value",(function(t,i){e&&"string"===typeof t&&t!==n&&t!==i&&(e.setContent(t),n=t)})),e.on(a||"change keyup undo redo",(function(){n=e.getContent(),t.$emit("input",n)}))},d=function(t,e,n){var i=e.$props.value?e.$props.value:"",a=e.$props.initialValue?e.$props.initialValue:"";n.setContent(i||a),e.$listeners.input&&u(e,n),c(t,e.$listeners,n)},m=0,p=function(t){var e=Date.now(),n=Math.floor(1e9*Math.random());return m++,t+"_"+n+m+String(e)},h=function(t){return null!==t&&"textarea"===t.tagName.toLowerCase()},f=function(t){return"undefined"===typeof t||""===t?[]:Array.isArray(t)?t:t.split(" ")},g=function(t,e){return f(t).concat(f(e))},y=function(t,e,n,i){var a=e.createElement("script");a.type="application/javascript",a.id=t,a.addEventListener("load",i),a.src=n,e.head&&e.head.appendChild(a)},v=function(){return{listeners:[],scriptId:p("tiny-script"),scriptLoaded:!1}},b=function(t,e,n,i){t.scriptLoaded?i():(t.listeners.push(i),e.getElementById(t.scriptId)||y(t.scriptId,e,n,(function(){t.listeners.forEach((function(t){return t()})),t.scriptLoaded=!0})))},w=n("1f38"),x={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean},_=function(){return _=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},_.apply(this,arguments)},k=v(),C=function(t,e,n){return t(n||"div",{attrs:{id:e}})},S=function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})},$=function(t){return function(){var e=_({},t.$props.init,{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:g(t.$props.init&&t.$props.init.plugins,t.$props.plugins),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return d(n,t,e)})),t.$props.init&&"function"===typeof t.$props.init.setup&&t.$props.init.setup(e)}});h(t.element)&&(t.element.style.visibility=""),Object(w["a"])().init(e)}},j={props:x,created:function(){this.elementId=this.$props.id||p("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(w["a"])())$(this)();else if(this.element&&this.element.ownerDocument){var t=this.element.ownerDocument,e=this.$props.cloudChannel?this.$props.cloudChannel:"5",n=this.$props.apiKey?this.$props.apiKey:"no-api-key";b(k,t,"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+e+"/tinymce.min.js",$(this))}},beforeDestroy:function(){null!==Object(w["a"])()&&Object(w["a"])().remove(this.editor)},render:function(t){return this.inlineEditor?C(t,this.elementId,this.$props.tagName):S(t,this.elementId)}},I=j,R={name:"XyEditorTinymce",components:{"tinymce-vue":I},props:{item:{},value:{type:[String],default:""},header:{type:Object,default:function(){return{cloudId:0,eid:0,token:""}}}},data:function(){var t=this;return{loadedScript:!1,audio:new Audio,audio1:new Audio,pluginPrefix:"https://uniweb.jiangruyi.com/gh/starideas/xyfront",content:"",init:{setup:function(t){var e;t.on("PostRender ",(function(){var n=t.getContainer();e=document.querySelector("body > .tox.tox-tinymce-aux"),n.parentNode.appendChild(e)}))},openImageAlbum:function(e){t.imageAlbumShow=!0},openNewyear:function(e){t.audio.loop="loop",t.audio.src="https://uniweb.jiangruyi.com/gh/starideas/xyfront/audio/幸福时光.mp3",t.audio.play(),t.audio1.loop="loop",t.audio1.src="https://uniweb.jiangruyi.com/gh/starideas/xyfront/audio/441.wav",t.audio1.play(),t.newyearShow=!0},external_plugins:{},menubar:this.item.extra.tinymce.hasOwnProperty("menubar")?this.item.extra.tinymce.menubar:"file edit view insert format tools table",toolbar_mode:this.item.extra.tinymce.toolbar_mode?this.item.extra.tinymce.toolbar_mode:"wrap",toolbar_sticky:!1,toolbar_location:"top",draggable_modal:!0,init_instance_callback:function(t){},default_link_target:"_blank",paste_data_images:!0,automatic_uploads:!0,file_picker_types:"file image media",file_picker_callback:this.filePickerCallback,images_upload_handler:this.imagesUploadHandler,language_url:this.item.extra.tinymce.language_url?this.item.extra.tinymce.language_url:"https://cdn.jsdelivr.net/gh/starideas/xyfront/libs/tinymce/langs/zh_CN.js",language:this.item.extra.tinymce.language?this.item.extra.tinymce.language:"zh_CN",skin_url:this.item.extra.tinymce.skin,theme:this.item.extra.tinymce.theme?this.item.extra.tinymce.theme:"silver",branding:!1,plugins:this.item.extra.tinymce.plugins?this.item.extra.tinymce.plugins:"editor135 axupimgs imagealbum newyear bdmap media link lists image imagetools code table wordcount fullscreen emoticons print codesample",toolbar:this.item.extra.tinymce.toolbar?this.item.extra.tinymce.toolbar:"formatselect fontselect fontsizeselect | link image axupimgs media bdmap blockquote codesample | bold italic underline strikethrough | forecolor backcolor bullist numlist | code fullscreen | editor135 newyear",audio_template_callback:function(t){return'<audio controls>\n<source src="'+t.source+'"'+(t.sourcemime?' type="'+t.sourcemime+'"':"")+" />\n"+(t.altsource?'<source src="'+t.altsource+'"'+(t.altsourcemime?' type="'+t.altsourcemime+'"':"")+" />\n":"")+"</audio>"},video_template_callback:function(t){return'<video width="'+t.width+'" height="'+t.height+'"'+(t.poster?' poster="'+t.poster+'"':"")+' controls="controls">\n<source src="'+t.source+'"'+(t.sourcemime?' type="'+t.sourcemime+'"':"")+" />\n"+(t.altsource?'<source src="'+t.altsource+'"'+(t.altsourcemime?' type="'+t.altsourcemime+'"':"")+" />\n":"")+"</video>"},media_url_resolver:this.mediaUrlResolver,media_alt_source:!1,media_dimensions:!1,media_live_embeds:!0,media_poster:!1,height:this.item.extra.tinymce.height?this.item.extra.tinymce.height:600,convert_urls:!1,font_formats:"\n                    微软雅黑=微软雅黑;\n                    宋体=宋体;\n                    黑体=黑体;\n                    仿宋=仿宋;\n                    楷体=楷体;\n                    隶书=隶书;\n                    幼圆=幼圆;\n                    Andale Mono=andale mono,times;\n                    Arial=arial, helvetica,\n                    sans-serif;\n                    Arial Black=arial black, avant garde;\n                    Book Antiqua=book antiqua,palatino;\n                    Comic Sans MS=comic sans ms,sans-serif;\n                    Courier New=courier new,courier;\n                    Georgia=georgia,palatino;\n                    Helvetica=helvetica;\n                    Impact=impact,chicago;\n                    Symbol=symbol;\n                    Tahoma=tahoma,arial,helvetica,sans-serif;\n                    Terminal=terminal,monaco;\n                    Times New Roman=times new roman,times;\n                    Trebuchet MS=trebuchet ms,geneva;\n                    Verdana=verdana,geneva;\n                    Webdings=webdings;\n                    Wingdings=wingdings,zapf dingbats"},editor:null,imageAlbumShow:!1,newyearShow:!1}},created:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.content=this.value,this.init.external_plugins=Object(o["a"])({bdmap:this.pluginPrefix+"/libs/tinymce/plugins/bdmap/plugin.js",editor135:this.pluginPrefix+"/libs/tinymce/plugins/editor135/plugin.js",newyear:this.pluginPrefix+"/libs/tinymce/plugins/newyear/plugin.js",axupimgs:this.pluginPrefix+"/libs/tinymce/plugins/axupimgs/plugin.js"},"newyear",this.pluginPrefix+"/libs/tinymce/plugins/newyear/plugin.js"),t.next=4,this.loadScript();case 4:this.loadedScript=!0;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{newyearHide:function(){this.audio.pause(),this.audio1.pause(),this.newyearShow=!1},confirm:function(t){var e=this;Array.isArray(t)&&t.length>0&&t.forEach((function(t,n){e.editor.execCommand("selectAll"),e.editor.selection.getRng().collapse(!1),e.editor.focus();var i='<div><img src="'+t+'"/></div>';e.editor.insertContent(i)}))},onReady:function(t){this.editor=t.target},loadScript:function(){var t=this;return new Promise((function(e,n){t.VueScript2.load("https://cdn.jsdelivr.net/npm/tinymce@5.5.1/tinymce.min.js").then((function(){e()}))}))},mediaUrlResolver:function(t,e){if(-1!==t.url.indexOf(".html")){var n='<iframe src="'+t.url+'" width="600" height="400" ></iframe>';e({html:n})}else e({html:""})},filePickerCallback:function(t,e,n){var i=this,a=document.createElement("input");a.setAttribute("type","file"),a.onchange=Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.files[0],e.next=3,i.util.uploadFile({driver:i.item.extra.driver||"default",signUrl:i.item.extra.signUrl||"",url:i.item.extra.action,header:i.header,file:n});case 3:a=e.sent,a.data&&t(a.data.url,{text:n.name,alt:n.name});case 6:case"end":return e.stop()}}),e,this)}))),a.click()},imagesUploadHandler:function(t,e,n){var i=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i.util.uploadFile({driver:i.item.extra.driver||"default",signUrl:i.item.extra.signUrl||"",url:i.item.extra.action,header:i.header,blobInfo:t});case 2:a=n.sent,a.data&&e(a.data.url);case 4:case"end":return n.stop()}}),n)})))()}},watch:{content:function(t){this.item.extra.disabled?this.$message({message:"只读模式",type:"warning"}):this.$emit("input",t)}}},A=R,O=(n("a05c"),n("2877")),P=Object(O["a"])(A,i,a,!1,null,"02ea80f0",null);e["a"]=P.exports},"7e25":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showReplyForm?n("el-card",{staticClass:"box-card m-b-sm",attrs:{shadow:"never"}},[t.util.getStorageSync("token")?n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"user flex space-between"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"m-r-sm"},[n("el-avatar",{attrs:{shape:"square",icon:"el-icon-user-solid",src:t.$store.state.user.userInfo.avatar}})],1),n("div",{staticClass:"bg-white"},[n("div",{staticClass:"title tw5 ts-14"},[t._v(t._s(t.$store.state.user.userInfo.nickname))]),n("div",{staticClass:"info flex space-between text-gray ts-13",staticStyle:{"margin-top":"2px"}},[n("div",[t._v(t._s(t.$store.state.user.userInfo.slogan?t.$store.state.user.userInfo.slogan:"这家伙很懒很懒很懒"))])])])]),n("div",{staticClass:"ts-12 text-gray"},[t._v("写回复")])])]):t._e(),t.util.getStorageSync("token")?n("div",{staticClass:"comment-form"},[n("XyBuilderEditorTinymce",{attrs:{item:t.item},model:{value:t.comment.content,callback:function(e){t.$set(t.comment,"content",e)},expression:"comment.content"}}),n("el-button",{staticClass:"m-t-sm",staticStyle:{width:"80px"},attrs:{type:"primary",size:"medium"},on:{click:t.reply}},[t._v(" 提交 ")])],1):t._e(),t.util.getStorageSync("token")?t._e():n("el-alert",{attrs:{title:"请登录后回复",type:"error","show-icon":""}})],1):t._e(),n("el-card",{directives:[{name:"show",rawName:"v-show",value:t.dataList.length>0,expression:"dataList.length > 0"}],staticClass:"box-card",attrs:{shadow:"never"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.title)+"列表")])]),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"case-list",staticStyle:{"min-height":"70px"},attrs:{"element-loading-text":"数据加载中"}},t._l(t.dataList,(function(e,i){return n("div",{key:i,staticClass:"item p-b-xs border-bottom_1px"},[n("div",{staticClass:"user flex space-between"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"m-r-sm"},[n("el-avatar",{attrs:{icon:"el-icon-user-solid",src:e.userInfo.avatar}})],1),n("div",{staticClass:"bg-white"},[n("div",{staticClass:"title tw5 ts-14"},[t._v(t._s(e.userInfo.nickname))]),n("div",{staticClass:"info flex space-between text-gray ts-13",staticStyle:{"margin-top":"2px"}},[n("div",[t._v(t._s(e.userInfo.slogan?e.userInfo.slogan:"这家伙很懒很懒很懒"))])])])]),n("div",{staticClass:"ts-12 text-gray"},[t._v(t._s(t._f("formatTime")(e.createTime)))])]),n("div",{staticClass:"content ts-14 m-t-sm"},[n("div",{domProps:{innerHTML:t._s(e.content)}})]),n("div",{staticClass:"actions m-t flex flex-alignCenter"},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.actionClick(i,"comment",1)}}},[t._v(" "+t._s(e.actionStates[1]?"已":"")+"赞同 ")]),n("div",{staticClass:"m-l",on:{click:function(n){return t.doreply(e.id)}}},[n("i",{staticClass:"xyicon xyicon-reply ts-14",staticStyle:{"margin-right":"3px"}}),n("el-link",[t._v(" 回复 ")])],1),n("div",{staticClass:"m-l",on:{click:function(e){return t.actionClick(i,"comment",2)}}},[n("i",{staticClass:"xyicon xyicon-heart ts-14",staticStyle:{"margin-right":"3px"}}),n("el-link",[t._v(" "+t._s(e.actionStates[2]?"已":"")+"收藏 ")])],1)],1)])})),0)])],1)},a=[],o=(n("a9e3"),n("96cf"),n("1da1")),r=n("2420"),s={components:{XyBuilderEditorTinymce:r["a"]},name:"commentLists",props:{showReplyForm:{type:Boolean,default:!1},title:{type:String,default:"评论"},dataId:{type:[Number,String],default:0},dataModel:{type:String,default:""},urlPrefix:{type:String,default:""}},data:function(){return{loading:!1,dataList:[],item:{extra:{tinymce:{height:300,toolbar:"formatselect fontsizeselect | link image media blockquote codesample | bold italic underline strikethrough | forecolor backcolor bullist numlist | code fullscreen | newyear"}}},comment:{anonymous:0,pid:0,dataId:0,dataModel:"icms_post",content:"",images:[],url:""}}},created:function(){this.comment.dataId=this.dataId,this.loadData()},watch:{dataId:function(t){this.comment.dataId=this.dataId,this.loadData()},dataModel:function(t){this.loadData()}},methods:{doreply:function(t){this.comment.pid=t,this.showReplyForm=!0},reply:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.comment.url=t.urlPrefix+"/"+t.comment.dataId,t.comment.content){e.next=5;break}return t.util.showToast({title:"请填写回复",icon:"error",duration:2e3}),e.abrupt("return",!1);case 5:return e.next=7,t.util.request({url:"/v1/comment/comment/add",method:"post",data:t.comment,header:{}});case 7:n=e.sent,200==n.code?(t.util.showToast({title:"提交成功",icon:"none",duration:2e3}),t.$emit("update:showReplyForm",!1),n.data.comment.userInfo=t.$store.state.user.userInfo,t.dataList.push(n.data.comment)):t.util.showToast({title:n.msg,icon:"none",duration:2e3});case 9:case"end":return e.stop()}}),e)})))()},actionClick:function(t,e,n){var i=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,i.util.request({url:"/v1/action/action/set",data:{dataId:i.dataList[t].id,dataModel:e,actionType:n},method:"post"});case 2:o=a.sent,200==o.code?(i.$set(i.dataList[t].actionStates,n,o.data.currentValue),i.util.showToast({title:o.msg,icon:"success",duration:2e3})):i.util.showToast({title:o.msg,icon:"loading",duration:3e3});case 4:case"end":return a.stop()}}),a)})))()},loadData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.dataId&&t.dataModel){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,e.next=5,t.util.request({url:"/v1/comment/comment/lists",data:{dataId:t.dataId,dataModel:t.dataModel},method:"get"});case 5:n=e.sent,200==n.code?(t.dataList=n.data.dataList,0==t.dataList.length&&t.$emit("update:showReplyForm",!0)):t.util.showToast({title:n.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}},l=s,c=(n("071a"),n("2877")),u=Object(c["a"])(l,i,a,!1,null,"32dc00fa",null);e["a"]=u.exports},a05c:function(t,e,n){"use strict";var i=n("05e8"),a=n.n(i);a.a}}]);