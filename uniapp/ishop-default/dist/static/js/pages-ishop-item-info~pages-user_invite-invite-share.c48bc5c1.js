(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ishop-item-info~pages-user_invite-invite-share"],{"0837":function(t,e,i){"use strict";var n=i("ee27");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,a=n(i("ec3b")),r={name:"xy-qrcode",props:{cid:{type:String,default:"xy-qrcode-canvas"},size:{type:Number,default:200},unit:{type:String,default:"upx"},show:{type:Boolean,default:!0},val:{type:String,default:""},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#000000"},pdground:{type:String,default:"#000000"},icon:{type:String,default:""},iconSize:{type:Number,default:40},lv:{type:Number,default:3},onval:{type:Boolean,default:!1},loadMake:{type:Boolean,default:!1},usingComponents:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},loadingText:{type:String,default:"二维码生成中"}},data:function(){return{result:""}},methods:{_makeCode:function(){var t=this;this._empty(this.val)?uni.showToast({title:"二维码内容不能为空",icon:"none",duration:2e3}):o=new a.default({context:t,canvasId:t.cid,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText,text:t.val,size:t.cpSize,background:t.background,foreground:t.foreground,pdground:t.pdground,correctLevel:t.lv,image:t.icon,imageSize:t.iconSize,cbResult:function(e){t._result(e)}})},_clearCode:function(){this._result(""),o.clear()},_saveCode:function(){var t=this;""!=this.result&&uni.saveImageToPhotosAlbum({filePath:t.result,success:function(){uni.showToast({title:"二维码保存成功",icon:"success",duration:2e3})}})},_result:function(t){this.result=t,this.$emit("result",t)},_empty:function(t){var e=typeof t,i=!1;return"number"==e&&""==String(t)?i=!0:"undefined"==e?i=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(i=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(i=!0):"function"==e&&(i=!1),i}},watch:{size:function(t,e){var i=this;t==e||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout((function(){i._makeCode()}),100))},val:function(t,e){var i=this;this.onval&&(t==e||this._empty(t)||setTimeout((function(){i._makeCode()}),0))}},computed:{cpSize:function(){return"upx"==this.unit?uni.upx2px(this.size):this.size}},mounted:function(){var t=this;this.loadMake&&(this._empty(this.val)||setTimeout((function(){t._makeCode()}),0))}};e.default=r},"173d":function(t,e,i){"use strict";var n=i("ee27");i("cb29"),i("d3b7"),i("4d63"),i("ac1f"),i("25f0"),i("466d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("f3f3"));i("96cf");var a=n(i("c964")),r={data:function(){return{width:100,height:100,paintingData:{views:[]},index:0,imageList:[],tempFileList:[],isPainting:!1,ctx:null,cache:{},qrcodeVal:"",qrcodeUrl:""}},props:{postersData:{type:Object,default:function(){return{views:[]}}}},watch:{},mounted:function(){uni.removeStorageSync("CACHE_KEYS"),this.cache=uni.getStorageSync("CACHE_KEYS")||{},this.ctx=uni.createCanvasContext("canvasdrawer",this),this.createPosters(this.postersData)},methods:{qrR:function(t){this.qrcodeUrl=t},createPosters:function(t){if(t||(t=this.postersData),t.width&&t.height&&(t.views=t.views||[],uni.removeStorageSync("CACHE_KEYS"),this.paintingData=t,this.ctx&&this.ctx.clearActions(),!this.isPainting&&t.width&&t.height)){this.isPainting=!0;try{this.readyPigment()}catch(e){this.$emit("error")}}},readyPigment:function(){var t=this,e=this.paintingData,i=e.width,n=e.height,o=e.views,a=e.background,r=e.radius,s=void 0===r?0:r;this.width=i,this.height=n;var u=setInterval((function(){t.ctx&&(clearInterval(u),t.ctx.clearActions(),t.ctx.closePath(),t.ctx.beginPath(),t.drawRect({background:a,top:0,left:0,radius:s,width:i,height:n}),t.getImageList(o),t.downLoadImages(0))}),100)},getImageList:function(t){for(var e=[],i=0;i<t.length;i++)"image"===t[i].type&&e.push(t[i].url);this.imageList=e},downLoadImages:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var n,o,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n=e.imageList,o=e.tempFileList,!(t<n.length)){i.next=10;break}return console.log(n[t]),i.next=6,e.getImageInfo(n[t]);case 6:a=i.sent,a.url?(o.push(a),e.downLoadImages(t+1)):console.log(a),i.next=11;break;case 10:e.startPainting();case 11:case"end":return i.stop()}}),i)})))()},tailorImageDraw:function(t,e){},startPainting:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n,a,r,s,u,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(console.log("开始画图"),i=t.tempFileList,n=t.paintingData.views,a=0,r=0;a<n.length;a++)"image"===n[a].type?(s=i[r],u=n[a],c={},u.tailor&&(u=t.tailorImageDraw(u,s)),c=(0,o.default)({},u,{url:s.localPath}),t.drawImage(c),r++):"text"===n[a].type?(t.ctx.measureText,t.drawText(n[a])):"rect"===n[a].type?t.drawRect(n[a]):"round"===n[a].type?t.drawRound(n[a]):"qrcode"===n[a].type&&(t.qrcodeVal=n[a].value,l=(0,o.default)({},n[a],{url:t.qrcodeUrl}),t.drawImage(l));t.ctx.draw(!0,(function(){uni.setStorageSync("CACHE_KEYS",t.cache),t.saveImageToLocal()}));case 4:case"end":return e.stop()}}),e)})))()},_drawRadiusRect:function(t){var e=t.top,i=void 0===e?0:e,n=t.left,o=void 0===n?0:n,a=t.width,r=void 0===a?0:a,s=t.height,u=void 0===s?0:s,c=t.radius,l=void 0===c?0:c,h=o,d=i,f=r,g=u,p=l;this.ctx.beginPath(),this.ctx.moveTo(h+p,d),this.ctx.lineTo(h+f-p,d),this.ctx.arc(h+f-p,d+p,p,2*Math.PI*.75,2*Math.PI*1),this.ctx.lineTo(h+f,d+g-p),this.ctx.arc(h+f-p,d+g-p,p,0,2*Math.PI*.25),this.ctx.lineTo(h+p,d+g),this.ctx.arc(h+p,d+g-p,p,2*Math.PI*.25,2*Math.PI*.5),this.ctx.lineTo(h,d+p),this.ctx.arc(h+p,d+p,p,2*Math.PI*.5,2*Math.PI*.75)},drawImage:function(t){t.type,t.background;var e=t.top,i=void 0===e?0:e,n=t.left,o=void 0===n?0:n,a=t.width,r=void 0===a?0:a,s=t.height,u=void 0===s?0:s,c=t.radius,l=void 0===c?0:c,h=t.url,d=void 0===h?"":h,f=t.sx,g=void 0===f?0:f,p=t.sy,v=void 0===p?0:p,m=t.ex,b=void 0===m?0:m,w=t.ey,x=void 0===w?0:w;this.ctx.save(),l&&(this.ctx.beginPath(),this._drawRadiusRect(t),this.ctx.fill(),this.ctx.clip()),"tailor"in t?this.ctx.drawImage(d,g,v,b,x,o,i,r,u):this.ctx.drawImage(d,o,i,r,u),this.ctx.restore()},drawText:function(t){var e=this,i=t.MaxLineNumber,n=void 0===i?2:i,a=t.breakWord,r=void 0!==a&&a,s=t.color,u=void 0===s?"black":s,c=t.content,l=void 0===c?"":c,h=t.fontSize,d=void 0===h?16:h,f=t.top,g=void 0===f?0:f,p=t.left,v=void 0===p?0:p,m=t.lineHeight,b=void 0===m?20:m,w=t.textAlign,x=void 0===w?"left":w,y=t.width,T=t.bolder,k=void 0!==T&&T,P=t.textDecoration,C=void 0===P?"none":P;k&&(g-=.3);var L=function(){e.ctx.closePath(),e.ctx.beginPath(),e.ctx.setTextBaseline("top"),e.ctx.setFillStyle(u),e.ctx.setFontSize(d),e.ctx.setTextAlign(x)};if(L(),r){for(var A="",E=g,S=1,_=0,I=0;I<l.length;I++)if(A+=[l[I]],_+=l[I].match(/[^\x00-\xff]/gi)?2:1,(this.ctx.measureText&&this.ctx.measureText(A).width||_*uni.upx2px(d))>y){if(S===n&&I!==l.length){A=A.substring(0,A.length-1)+"...",this.ctx.fillText(A,v,E),this.drawTextLine(v,E,C,u,d,A),A="";break}this.ctx.fillText(A,v,E),this.drawTextLine(v,E,C,u,d,A),A="",E+=b,S++}this.ctx.fillText(A,v,E),this.drawTextLine(v,E,C,u,d,A)}else this.ctx.fillText(l,v,g),this.drawTextLine(v,g,C,u,d,l);k&&this.drawText((0,o.default)({},t,{left:v-.3,top:g,bolder:!1,textDecoration:"none"}))},drawTextLine:function(t,e,i,n,o,a){"underline"===i?this.drawRect({background:n,top:e+1.2*o,left:t-1,width:this.ctx.measureText(a).width+2,height:1}):"line-through"===i&&this.drawRect({background:n,top:e+.6*o,left:t-1,width:this.ctx.measureText(a).width+2,height:1})},drawRect:function(t){var e=t.background,i=t.top,n=void 0===i?0:i,o=t.left,a=void 0===o?0:o,r=t.width,s=void 0===r?0:r,u=t.height,c=void 0===u?0:u;this.ctx.save(),this.ctx.setFillStyle(e),t.radius?(this._drawRadiusRect(t),this.ctx.fill()):(this.ctx.setFillStyle(e),this.ctx.fillRect(a,n,s,c)),this.ctx.restore()},getImageInfo:function(t){var e=this;return new Promise((function(i,n){if(e.cache[t])i(e.cache[t]);else{var o=new RegExp(/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/);if(o.test(t))uni.getImageInfo({src:t,fail:function(t){n(new Error("getImageInfo fail"))},complete:function(e){if(console.log(e),"getImageInfo:ok"===e.errMsg){var n={url:t,originWidth:e.width,originHeight:e.height,localPath:e.path};i(n)}else i(new Error("getImageInfo fail"))}});else{var a={url:t,originWidth:0,originHeight:0,localPath:t};i(a)}}}))},saveImageToLocal:function(){var t=this,e=this.width,i=this.height;uni.canvasToTempFilePath({x:0,y:0,width:e,height:i,canvasId:"canvasdrawer",success:function(n){"canvasToTempFilePath:ok"===n.errMsg&&(t.isPainting=!1,t.imageList=[],t.tempFileList=[],t.$emit("success",{width:e,height:i,path:n.tempFilePath}))}},this)}}};e.default=r},"1b50":function(t,e,i){"use strict";i.r(e);var n=i("3413"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},3413:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"XyShare",data:function(){return{transform:"translateY(50vh)",timer:0,backgroundColor:"rgba(0,0,0,0)",show:!1,config:{},data:{},nativeShare:!1}},props:{contentHeight:{type:Number,default:0},hasTabbar:{type:Boolean,default:!1},shareList:{type:Array,default:function(){return[{provider:"weixin",scene:"WXSceneSession",icon:"weixin",color:"#76AC52",title:"微信好友"},{provider:"weixin",scene:"WXSenceTimeline",icon:"wxpyq",color:"#E65F59",title:"朋友圈"},{provider:"qq",scene:"",icon:"qq",color:"#4295D5",title:"QQ好友"},{provider:"qq",scene:"",icon:"qqzone",color:"#F1B845",title:"QQ空间"},{provider:"local",icon:"photo",color:"#4295D5",title:"保存相册"},{provider:"copy",icon:"link",color:"#58A55C",title:"复制链接"},{provider:"system",icon:"more-o",color:"#5569E7",title:"更多"}]}}},created:function(){var t=uni.upx2px(this.contentHeight)+"px";this.config={height:t,transform:"translateY(".concat(t,")"),backgroundColor:"rgba(0,0,0,.4)"},this.transform=this.config.transform},methods:{sendWithSystem:function(){var t="";switch(this.data.type){case 0:t="web";break;case 1:t="text";break;case 2:t="image";break}plus.share.sendWithSystem({type:t,title:this.data.title,content:this.data.summary,href:this.data.href,thumbs:[this.data.imageUrl],pictures:[this.data.imageUrl]},this.data.success,this.data.fail)},togglePopup:function(t){var e=this;if(t&&(this.data=t,console.log(this.data)),1!=this.timer){if(this.timer=1,setTimeout((function(){e.timer=0}),500),this.show)return this.transform=this.config.transform,this.backgroundColor="rgba(0,0,0,0)",void setTimeout((function(){e.show=!1,e.hasTabbar&&uni.showTabBar()}),200);this.show=!0,this.nativeShare=!0,this.hasTabbar?uni.hideTabBar({success:function(){setTimeout((function(){e.backgroundColor=e.config.backgroundColor,e.transform="translateY(0px)"}),10)}}):setTimeout((function(){e.backgroundColor=e.config.backgroundColor,e.transform="translateY(0px)"}),10)}},stopPrevent:function(){},shareToFriend:function(t){switch(t.provider){case"local":console.log("保存图片到相册"),uni.saveImageToPhotosAlbum({filePath:this.data.imageUrl,success:function(){uni.showToast({title:"保存成功",icon:"success",duration:1e3})}});break;case"copy":break;case"system":return this.sendWithSystem(),!0;default:break}}}};e.default=n},4008:function(t,e,i){"use strict";var n=i("8a9d"),o=i.n(n);o.a},"407b":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".xy-qrcode[data-v-87711838]{position:relative}.xy-qrcode-canvas[data-v-87711838]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""]),t.exports=e},"4b94":function(t,e,i){var n=i("c837");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("eb400ad0",n,!0,{sourceMap:!1,shadowMode:!1})},"542d":function(t,e,i){"use strict";var n=i("23e7"),o=i("d039"),a=i("408a"),r=1..toPrecision,s=o((function(){return"1"!==r.call(1,void 0)}))||!o((function(){r.call({})}));n({target:"Number",proto:!0,forced:s},{toPrecision:function(t){return void 0===t?r.call(a(this)):r.call(a(this),t)}})},"5d18":function(t,e,i){"use strict";i.r(e);var n=i("173d"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"6ad9":function(t,e,i){"use strict";var n={xyQrcode:i("da17").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"xy-poster"},[i("xy-qrcode",{ref:"qrcode",staticClass:"hidden",attrs:{val:t.qrcodeVal,size:200,unit:"px",background:"#ffffff",foreground:"#000000",iconSize:40,lv:3,onval:!0,loadMake:!0},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.qrR.apply(void 0,arguments)}}}),i("v-uni-canvas",{staticClass:"posters-layer",style:{width:t.width+"px",height:t.height+"px"},attrs:{"canvas-id":"canvasdrawer"}})],1)},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"6ce4":function(t,e,i){"use strict";var n=i("4b94"),o=i.n(n);o.a},7526:function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"xy-qrcode"},[i("v-uni-canvas",{staticClass:"xy-qrcode-canvas",style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{"canvas-id":t.cid}}),i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{src:t.result}})],1)},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"7d4a":function(t,e,i){"use strict";i.r(e);var n=i("0837"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"8a9d":function(t,e,i){var n=i("8cca");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("8ea5610a",n,!0,{sourceMap:!1,shadowMode:!1})},"8cca":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".posters-layer[data-v-7cfe5858]{position:fixed;top:%?-5000?%;left:%?-5000?%}",""]),t.exports=e},"9c5c":function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"mask",style:{backgroundColor:t.backgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[1!=t.data.type?i("v-uni-view",{staticClass:"image"},[i("v-uni-image",{style:{width:t.data.imageWidth,height:t.data.imageHeight},attrs:{src:t.data.imageUrl,mode:"scaleToFill"}})],1):t._e(),t.nativeShare?i("v-uni-view",{staticClass:"mask-content safe-bottom",style:[{height:"auto",transform:t.transform}],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"view-content"},[i("v-uni-view",{staticClass:"share-header"},[t._v("分享到")]),i("v-uni-view",{staticClass:"share-list"},[1!=t.data.type?i("v-uni-view",{staticClass:"summary"},[t._v("长按上方图片保存到相册")]):i("v-uni-view",{staticClass:"summary"},[t._v("点击复制文案")])],1)],1),i("v-uni-view",{staticClass:"bottom b-t",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup.apply(void 0,arguments)}}},[t._v("取消")])],1):t._e()],1):t._e()},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"9cb8":function(t,e,i){"use strict";i.r(e);var n=i("6ad9"),o=i("5d18");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("4008");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"7cfe5858",null,!1,n["a"],r);e["default"]=u.exports},"9ecd":function(t,e,i){"use strict";i.r(e);var n=i("9c5c"),o=i("1b50");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("6ce4");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"924dcb86",null,!1,n["a"],r);e["default"]=u.exports},c837:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.mask[data-v-924dcb86]{position:fixed;left:0;top:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:998;-webkit-transition:.3s;transition:.3s}.mask .image[data-v-924dcb86]{position:absolute;top:20px;box-shadow:0 0 10px rgba(0,0,0,.1)}.mask .bottom[data-v-924dcb86]{position:absolute;left:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?90?%;background:#fff;z-index:9;font-size:%?30?%;color:#303133}.mask-content[data-v-924dcb86]{width:100%;height:auto;-webkit-transition:.3s;transition:.3s;background:#fff}.mask-content.has-bottom[data-v-924dcb86]{padding-bottom:%?90?%}.mask-content .view-content[data-v-924dcb86]{height:100%}.share-header[data-v-924dcb86]{height:%?50?%;font-size:%?30?%;color:font-color-dark;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:%?10?%}.share-header[data-v-924dcb86]:before, .share-header[data-v-924dcb86]:after{content:"";width:%?240?%;heighg:0;border-top:1px solid #e4e7ed;-webkit-transform:scaleY(.5);transform:scaleY(.5);margin-right:%?30?%}.share-header[data-v-924dcb86]:after{margin-left:%?30?%;margin-right:0}.share-list[data-v-924dcb86]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:60px;-webkit-box-pack:left;-webkit-justify-content:left;justify-content:left}.share-list .summary[data-v-924dcb86]{width:100%;padding:0 30px;text-align:center}.share-list .summary uni-textarea[data-v-924dcb86]{padding:5px;min-height:60px;border:1px solid #f1f1f1;margin-bottom:10px}.share-list .share-item[data-v-924dcb86]{min-width:25%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?150?%;background:none;line-height:1;margin:0}.share-list .share-item .icon[data-v-924dcb86]{font-size:%?70?%;width:%?70?%;height:%?70?%;margin-bottom:%?26?%}.share-list .share-item .title[data-v-924dcb86]{font-size:%?28?%;color:#606266}',""]),t.exports=e},c937:function(t,e,i){"use strict";var n=i("d715"),o=i.n(n);o.a},cb29:function(t,e,i){var n=i("23e7"),o=i("81d5"),a=i("44d2");n({target:"Array",proto:!0},{fill:o}),a("fill")},d715:function(t,e,i){var n=i("407b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("45070bb8",n,!0,{sourceMap:!1,shadowMode:!1})},da17:function(t,e,i){"use strict";i.r(e);var n=i("7526"),o=i("7d4a");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("c937");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"87711838",null,!1,n["a"],r);e["default"]=u.exports},ec3b:function(t,e,i){"use strict";i("cb29"),i("a9e3"),i("b680"),i("542d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={};(function(){function t(t){var e,i,n;return t<128?[t]:t<2048?(e=192+(t>>6),i=128+(63&t),[e,i]):(e=224+(t>>12),i=128+(t>>6&63),n=128+(63&t),[e,i,n])}function e(e){for(var i=[],n=0;n<e.length;n++)for(var o=e.charCodeAt(n),a=t(o),r=0;r<a.length;r++)i.push(a[r]);return i}function i(t,i){this.typeNumber=-1,this.errorCorrectLevel=i,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=e(t),this.make()}i.prototype={constructor:i,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var i=-1;i<=7;i++)if(!(t+i<=-1||this.moduleCount<=t+i))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+i][e+n]=0<=i&&i<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==i||6==i)||2<=i&&i<=4&&2<=n&&n<=4)},createQrcode:function(){for(var t=0,e=0,i=null,n=0;n<8;n++){this.makeImpl(n);var o=r.getLostPoint(this);(0==n||t>o)&&(t=o,e=n,i=this.modules)}this.modules=i,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=r.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var i=0;i<t.length;i++){var n=t[e],o=t[i];if(null==this.modules[n][o])for(var a=-2;a<=2;a++)for(var s=-2;s<=2;s++)this.modules[n+a][o+s]=-2==a||2==a||-2==s||2==s||0==a&&0==s}},setupTypeNumber:function(t){for(var e=r.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var n=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=n,this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=n}},setupTypeInfo:function(t,e){for(var i=o[this.errorCorrectLevel]<<3|e,n=r.getBCHTypeInfo(i),a=0;a<15;a++){var s=!t&&1==(n>>a&1);a<6?this.modules[a][8]=s:a<8?this.modules[a+1][8]=s:this.modules[this.moduleCount-15+a][8]=s;s=!t&&1==(n>>a&1);a<8?this.modules[8][this.moduleCount-a-1]=s:a<9?this.modules[8][15-a-1+1]=s:this.modules[8][15-a-1]=s}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new h,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var n=0,o=this.utf8bytes.length;n<o;n++)t.put(this.utf8bytes[n],8);t.length+4<=8*this.totalDataCount&&t.put(0,4);while(t.length%8!=0)t.putBit(!1);while(1){if(t.length>=8*this.totalDataCount)break;if(t.put(i.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(i.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,i=0,n=0,o=this.rsBlock.length/3,a=new Array,s=0;s<o;s++)for(var u=this.rsBlock[3*s+0],l=this.rsBlock[3*s+1],h=this.rsBlock[3*s+2],d=0;d<u;d++)a.push([h,l]);for(var f=new Array(a.length),g=new Array(a.length),p=0;p<a.length;p++){var v=a[p][0],m=a[p][1]-v;i=Math.max(i,v),n=Math.max(n,m),f[p]=new Array(v);for(s=0;s<f[p].length;s++)f[p][s]=255&t.buffer[s+e];e+=v;var b=r.getErrorCorrectPolynomial(m),w=new c(f[p],b.getLength()-1),x=w.mod(b);g[p]=new Array(b.getLength()-1);for(s=0;s<g[p].length;s++){var y=s+x.getLength()-g[p].length;g[p][s]=y>=0?x.get(y):0}}var T=new Array(this.totalDataCount),k=0;for(s=0;s<i;s++)for(p=0;p<a.length;p++)s<f[p].length&&(T[k++]=f[p][s]);for(s=0;s<n;s++)for(p=0;p<a.length;p++)s<g[p].length&&(T[k++]=g[p][s]);return T},mapData:function(t,e){for(var i=-1,n=this.moduleCount-1,o=7,a=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var u=0;u<2;u++)if(null==this.modules[n][s-u]){var c=!1;a<t.length&&(c=1==(t[a]>>>o&1));var l=r.getMask(e,n,s-u);l&&(c=!c),this.modules[n][s-u]=c,o--,-1==o&&(a++,o=7)}if(n+=i,n<0||this.moduleCount<=n){n-=i,i=-i;break}}}}},i.PAD0=236,i.PAD1=17;for(var o=[1,0,3,2],a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},r={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(r.getBCHDigit(e)-r.getBCHDigit(r.G15)>=0)e^=r.G15<<r.getBCHDigit(e)-r.getBCHDigit(r.G15);return(t<<10|e)^r.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(r.getBCHDigit(e)-r.getBCHDigit(r.G18)>=0)e^=r.G18<<r.getBCHDigit(e)-r.getBCHDigit(r.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return r.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,i){switch(t){case a.PATTERN000:return(e+i)%2==0;case a.PATTERN001:return e%2==0;case a.PATTERN010:return i%3==0;case a.PATTERN011:return(e+i)%3==0;case a.PATTERN100:return(Math.floor(e/2)+Math.floor(i/3))%2==0;case a.PATTERN101:return e*i%2+e*i%3==0;case a.PATTERN110:return(e*i%2+e*i%3)%2==0;case a.PATTERN111:return(e*i%3+(e+i)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new c([1],0),i=0;i<t;i++)e=e.multiply(new c([1,s.gexp(i)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),i=0,n=0,o=0;o<e;o++)for(var a=0,r=t.modules[o][0],s=0;s<e;s++){var u=t.modules[o][s];if(s<e-6&&u&&!t.modules[o][s+1]&&t.modules[o][s+2]&&t.modules[o][s+3]&&t.modules[o][s+4]&&!t.modules[o][s+5]&&t.modules[o][s+6]&&(s<e-10?t.modules[o][s+7]&&t.modules[o][s+8]&&t.modules[o][s+9]&&t.modules[o][s+10]&&(i+=40):s>3&&t.modules[o][s-1]&&t.modules[o][s-2]&&t.modules[o][s-3]&&t.modules[o][s-4]&&(i+=40)),o<e-1&&s<e-1){var c=0;u&&c++,t.modules[o+1][s]&&c++,t.modules[o][s+1]&&c++,t.modules[o+1][s+1]&&c++,0!=c&&4!=c||(i+=3)}r^u?a++:(r=u,a>=5&&(i+=3+a-5),a=1),u&&n++}for(s=0;s<e;s++)for(a=0,r=t.modules[0][s],o=0;o<e;o++){u=t.modules[o][s];o<e-6&&u&&!t.modules[o+1][s]&&t.modules[o+2][s]&&t.modules[o+3][s]&&t.modules[o+4][s]&&!t.modules[o+5][s]&&t.modules[o+6][s]&&(o<e-10?t.modules[o+7][s]&&t.modules[o+8][s]&&t.modules[o+9][s]&&t.modules[o+10][s]&&(i+=40):o>3&&t.modules[o-1][s]&&t.modules[o-2][s]&&t.modules[o-3][s]&&t.modules[o-4][s]&&(i+=40)),r^u?a++:(r=u,a>=5&&(i+=3+a-5),a=1)}var l=Math.abs(100*n/e/e-50)/5;return i+=10*l,i}},s={glog:function(t){if(t<1)throw new Error("glog("+t+")");return s.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return s.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},u=0;u<8;u++)s.EXP_TABLE[u]=1<<u;for(u=8;u<256;u++)s.EXP_TABLE[u]=s.EXP_TABLE[u-4]^s.EXP_TABLE[u-5]^s.EXP_TABLE[u-6]^s.EXP_TABLE[u-8];for(u=0;u<255;u++)s.LOG_TABLE[s.EXP_TABLE[u]]=u;function c(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var i=0;while(i<t.length&&0==t[i])i++;this.num=new Array(t.length-i+e);for(var n=0;n<t.length-i;n++)this.num[n]=t[n+i]}c.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var n=0;n<t.getLength();n++)e[i+n]^=s.gexp(s.glog(this.get(i))+s.glog(t.get(n)));return new c(e,0)},mod:function(t){var e=this.getLength(),i=t.getLength();if(e-i<0)return this;for(var n=new Array(e),o=0;o<e;o++)n[o]=this.get(o);while(n.length>=i){var a=s.glog(n[0])-s.glog(t.get(0));for(o=0;o<t.getLength();o++)n[o]^=s.gexp(s.glog(t.get(o))+a);while(0==n[0])n.shift()}return new c(n,0)}};var l=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function h(){this.buffer=new Array,this.length=0}i.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=l[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var i=e.length/3,n=0,o=0;o<i;o++){var a=e[3*o+0],r=e[3*o+2];n+=r*a}var s=t>9?2:1;if(this.utf8bytes.length+s<n||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=n;break}}},h.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var i=0;i<e;i++)this.putBit(t>>>e-i-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var d=[];n=function(t){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:t.canvasId,context:t.context,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText},"string"===typeof t&&(t={text:t}),t)for(var e in t)this.options[e]=t[e];for(var n=null,o=(e=0,d.length);e<o;e++)if(d[e].text==this.options.text&&d[e].text.correctLevel==this.options.correctLevel){n=d[e].obj;break}e==o&&(n=new i(this.options.text,this.options.correctLevel),d.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:n}));var a=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground},r=function(t){t.showLoading&&uni.showLoading({title:t.loadingText,mask:!0});for(var e=uni.createCanvasContext(t.canvasId,t.context),i=n.getModuleCount(),o=t.size,r=t.imageSize,u=(o/i).toPrecision(4),c=(o/i).toPrecision(4),l=0;l<i;l++)for(var h=0;h<i;h++){var d=Math.ceil((h+1)*u)-Math.floor(h*u),f=Math.ceil((l+1)*u)-Math.floor(l*u),g=a({row:l,col:h,count:i,options:t});e.setFillStyle(n.modules[l][h]?g:t.background),e.fillRect(Math.round(h*u),Math.round(l*c),d,f)}if(t.image){var p=function(e,i,n,o,a,r,s,u,c){e.setLineWidth(s),e.setFillStyle(t.background),e.setStrokeStyle(t.background),e.beginPath(),e.moveTo(i+r,n),e.arcTo(i+o,n,i+o,n+r,r),e.arcTo(i+o,n+a,i+o-r,n+a,r),e.arcTo(i,n+a,i,n+a-r,r),e.arcTo(i,n,i+r,n,r),e.closePath(),u&&e.fill(),c&&e.stroke()},v=Number(((o-r)/2).toFixed(2)),m=Number(((o-r)/2).toFixed(2));p(e,v,m,r,r,2,6,!0,!0),e.drawImage(t.image,v,m,r,r)}setTimeout((function(){e.draw(!0,(function(){setTimeout((function(){uni.canvasToTempFilePath({width:t.width,height:t.height,destWidth:t.width,destHeight:t.height,canvasId:t.canvasId,quality:Number(1),success:function(e){t.cbResult&&(s(e.tempFilePath)?s(e.apFilePath)?t.cbResult(e.tempFilePath):t.cbResult(e.apFilePath):t.cbResult(e.tempFilePath))},fail:function(e){t.cbResult&&t.cbResult(e)},complete:function(){uni.hideLoading()}},t.context)}),t.text.length+100)}))}),t.usingComponents?0:150)};r(this.options);var s=function(t){var e=typeof t,i=!1;return"number"==e&&""==String(t)?i=!0:"undefined"==e?i=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(i=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(i=!0):"function"==e&&(i=!1),i}},n.prototype.clear=function(t){var e=uni.createCanvasContext(this.options.canvasId,this.options.context);e.clearRect(0,0,this.options.size,this.options.size),e.draw(!1,(function(){t&&t()}))}})();var o=n;e.default=o}}]);