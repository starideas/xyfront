(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-user-avatar"],{1228:function(t,i,e){"use strict";(function(t){var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var s=a(e("1da1")),n=a(e("5530")),r=e("2f62"),o={computed:(0,n.default)({},(0,r.mapState)(["app","user"])),data:function(){return{urls:[],avatar:""}},onLoad:function(t){this.urls.push(this.app.userList[this.app.currentUser].userInfo.avatar)},methods:{cutImage:function(i){t("log",i," at pages/core/user/avatar.vue:30"),this.$set(this.urls,i.index,i.path)},chooseImage:function(t){this.$refs.avatar.fChooseImg(t,{selWidth:"300rpx",selHeight:"300rpx",expWidth:"260rpx",expHeight:"260rpx"})},submit:function(){var t=this;return(0,s.default)(regeneratorRuntime.mark((function i(){var e,a,s,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e="png",i.next=3,t.util.uploadFile({driver:t.$store.state.app.uploadDriver,filePath:t.urls[0],fileExt:e});case 3:if(a=i.sent,200!=a.code){i.next=12;break}return t.avatar=a.data.url,i.next=8,t.util.request({url:"/v1/core/user/avatar",data:{avatar:t.avatar},method:"put"});case 8:s=i.sent,200==s.code?(n=t.app.userList[t.app.currentUser].userInfo,n.avatar=t.avatar,t.$store.commit("app/setUserList",{key:"userInfo",value:n}),t.util.showToast({title:s.msg,icon:"success",duration:1e3}),uni.navigateBack()):t.util.showToast({title:s.msg,icon:"loading",duration:2e3}),i.next=13;break;case 12:t.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 13:case"end":return i.stop()}}),i)})))()}}};i.default=o}).call(this,e("0de9")["log"])},"392e":function(t,i,e){"use strict";e.r(i);var a=e("9044"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},"62c2":function(t,i,e){"use strict";var a=e("eda2"),s=e.n(a);s.a},6763:function(t,i,e){"use strict";e.r(i);var a=e("bd59"),s=e("b487");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("62c2");var r,o=e("f0c5"),h=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"7d001b36",null,!1,a["a"],r);i["default"]=h.exports},"8a59":function(t,i,e){var a=e("74e8");a("Uint8",(function(t){return function(i,e,a){return t(this,i,e,a)}}),!0)},"8f79":function(t,i,e){"use strict";e.r(i);var a=e("decb"),s=e("392e");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("b922");var r,o=e("f0c5"),h=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"06217155",null,!1,a["a"],r);i["default"]=h.exports},9044:function(t,i,e){"use strict";var a=e("4ea4");e("c975"),e("a15b"),e("ace4"),e("d3b7"),e("acd8"),e("e25e"),e("ac1f"),e("3ca3"),e("466d"),e("1276"),e("498a"),e("5cc6"),e("8a59"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("ddb0"),e("2b3d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var s=a(e("1da1")),n=a(e("b85c")),r=50,o={name:"xy-avatar",data:function(){return{cvsStyleHeight:"0px",styleDisplay:"none",styleTop:"-10000px",prvTop:"-10000px",imgStyle:{},selStyle:{},showOper:!0,imgSrc:{imgSrc:""},btnWidth:"19%",btnDsp:"flex"}},watch:{avatarSrc:function(){this.imgSrc.imgSrc=this.avatarSrc}},props:{avatarSrc:"",avatarStyle:"",selWidth:"",selHeight:"",expWidth:"",expHeight:"",minScale:"",maxScale:"",canScale:"",canRotate:"",lockWidth:"",lockHeight:"",stretch:"",lock:"",noTab:"",inner:"",quality:"",index:""},created:function(){var t=this;this.ctxCanvas=uni.createCanvasContext("avatar-canvas",this),this.ctxCanvasOper=uni.createCanvasContext("oper-canvas",this),this.ctxCanvasPrv=uni.createCanvasContext("prv-canvas",this),this.qlty=parseInt(this.quality)||.9,this.imgSrc.imgSrc=this.avatarSrc,this.letRotate="false"===this.canRotate||"true"===this.inner?0:1,this.letScale="false"===this.canScale?0:1,this.isin="true"===this.inner?1:0,this.indx=this.index||void 0,this.mnScale=this.minScale||.3,this.mxScale=this.maxScale||4,this.noBar="true"===this.noTab?1:0,this.stc=this.stretch,this.lck=this.lock,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),this.noBar?(this.moreHeight=0,this.fWindowResize()):uni.showTabBar({complete:function(i){t.moreHeight="showTabBar:ok"===i.errMsg?50:0,t.fWindowResize()}})},methods:{fWindowResize:function(){var t=uni.getSystemInfoSync();this.platform=t.platform,this.pixelRatio=t.pixelRatio,this.windowWidth=t.windowWidth,this.drawTop=t.windowTop,this.windowHeight=t.windowHeight+t.windowBottom,this.cvsStyleHeight=this.windowHeight-r+"px",this.pxRatio=this.windowWidth/750;var i=this.avatarStyle;if(i&&!0!==i&&(i=i.trim())){i=i.split(";");var e,a={},s=(0,n.default)(i);try{for(s.s();!(e=s.n()).done;){var o=e.value;if(o){if(o=o.trim().split(":"),o[1].indexOf("rpx")>=0){var h=o[1].trim().split(" ");for(var l in h)h[l]&&h[l].indexOf("rpx")>=0&&(h[l]=parseFloat(h[l])*this.pxRatio+"px");o[1]=h.join(" ")}a[o[0].trim()]=o[1].trim()}}}catch(c){s.e(c)}finally{s.f()}this.imgStyle=a}this.expWidth&&(this.exportWidth=this.expWidth.indexOf("rpx")>=0?parseInt(this.expWidth)*this.pxRatio:parseInt(this.expWidth)),this.expHeight&&(this.exportHeight=this.expHeight.indexOf("rpx")>=0?parseInt(this.expHeight)*this.pxRatio:parseInt(this.expHeight)),"flex"===this.styleDisplay&&this.fDrawInit(!0),this.fHideImg()},fSelect:function(){var t=this;this.fSelecting||(this.fSelecting=!0,setTimeout((function(){t.fSelecting=!1}),500),uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){uni.showLoading({mask:!0});var e=t.imgPath=i.tempFilePaths[0];uni.getImageInfo({src:e,success:function(i){if(t.imgWidth=i.width,t.imgHeight=i.height,t.path=e,!t.hasSel){var a=t.selStyle||{};if(!t.selWidth||!t.selHeight)return void uni.showModal({title:"裁剪框的宽或高没有设置",showCancel:!1});var s=t.selWidth.indexOf("rpx")>=0?parseInt(t.selWidth)*t.pxRatio:parseInt(t.selWidth),n=t.selHeight.indexOf("rpx")>=0?parseInt(t.selHeight)*t.pxRatio:parseInt(t.selHeight);a.width=s+"px",a.height=n+"px",a.top=(t.windowHeight-n-r)/2+"px",a.left=(t.windowWidth-s)/2+"px",t.selStyle=a}t.noBar?t.fDrawInit(!0):uni.hideTabBar({complete:function(){t.fDrawInit(!0)}})},fail:function(){uni.showToast({title:"error3",duration:2e3})},complete:function(){uni.hideLoading()}})}}))},fUpload:function(){var t=this;if(!this.fUploading){this.fUploading=!0,setTimeout((function(){t.fUploading=!1}),1e3);var i=this.selStyle,e=parseInt(i.left),a=parseInt(i.top),s=parseInt(i.width),n=parseInt(i.height),r=this.exportWidth||s,o=this.exportHeight||n;e*=this.pixelRatio,a*=this.pixelRatio,r=s,o=n,uni.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:e,y:a,width:s,height:n,destWidth:r,destHeight:o,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){if(t.exportWidth&&t.exportHeight){var e=t.ctxCanvas;r=t.exportWidth,o=t.exportHeight,e.drawImage(i,0,0,r,o),e.draw(!1,(function(){uni.canvasToTempFilePath({x:0,y:0,width:r,height:o,destWidth:r,destHeight:o,canvasId:"avatar-canvas",fileType:"png",quality:t.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn})}))},fail:function(){uni.showToast({title:"error0",duration:2e3})}})}))}else t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn})}))},fail:function(t){uni.showToast({title:"error1",duration:2e3})},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar()}},this)}},fPrvUpload:function(){var t=this;if(!this.fPrvUploading){this.fPrvUploading=!0,setTimeout((function(){t.fPrvUploading=!1}),1e3);var i=this.selStyle,e=(parseInt(i.width),parseInt(i.height),this.prvX),a=this.prvY,s=this.prvWidth,n=this.prvHeight,r=this.exportWidth||s,o=this.exportHeight||n;e*=this.pixelRatio,a*=this.pixelRatio,r=s,o=n,uni.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:e,y:a,width:s,height:n,destWidth:r,destHeight:o,canvasId:"prv-canvas",fileType:"png",quality:this.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){if(t.exportWidth&&t.exportHeight){var e=t.ctxCanvas;r=t.exportWidth,o=t.exportHeight,e.drawImage(i,0,0,r,o),e.draw(!1,(function(){uni.canvasToTempFilePath({x:0,y:0,width:r,height:o,destWidth:r,destHeight:o,canvasId:"avatar-canvas",fileType:"png",quality:t.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn})}))},fail:function(){uni.showToast({title:"error0",duration:2e3})}})}))}else t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn})}))},fail:function(){uni.showToast({title:"error_prv",duration:2e3})},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar()}},this)}},fDrawInit:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.windowWidth,a=this.windowHeight,s=this.imgWidth,n=this.imgHeight,o=s/n,h=e-40,l=a-r-80,c=(this.pixelRatio,parseInt(this.selStyle.width)),d=parseInt(this.selStyle.height);switch(this.fixWidth=0,this.fixHeight=0,this.lckWidth=0,this.lckHeight=0,this.stc){case"x":this.fixWidth=1;break;case"y":this.fixHeight=1;break;case"long":o>1?this.fixWidth=1:this.fixHeight=1;break;case"short":o>1?this.fixHeight=1:this.fixWidth=1;break;case"longSel":c>d?this.fixWidth=1:this.fixHeight=1;break;case"shortSel":c>d?this.fixHeight=1:this.fixWidth=1;break}switch(this.lck){case"x":this.lckWidth=1;break;case"y":this.lckHeight=1;break;case"long":o>1?this.lckWidth=1:this.lckHeight=1;break;case"short":o>1?this.lckHeight=1:this.lckWidth=1;break;case"longSel":c>d?this.lckWidth=1:this.lckHeight=1;break;case"shortSel":c>d?this.lckHeight=1:this.lckWidth=1;break}this.fixWidth?(h=c,l=h/o):this.fixHeight?(l=d,h=l*o):o<1?n<l?(h=s,l=n):(l=l,h=l*o):s<h?(h=s,l=n):(h=h,l=h/o),this.isin&&(this.scaleWidth=0,this.scaleHeight=0,h<c&&(h=c,l=h/o,this.lckHeight=0),l<d&&(l=d,h=l*o,this.lckWidth=0)),this.scaleSize=1,this.rotateDeg=0,this.posWidth=(e-h)/2,this.posHeight=(a-l-r)/2,this.useWidth=h,this.useHeight=l;var p=this.selStyle,u=parseInt(p.left),f=parseInt(p.top),v=parseInt(p.width),x=parseInt(p.height),g=(this.canvas,this.canvasOper,this.ctxCanvas),w=this.ctxCanvasOper;w.setLineWidth(3),w.setStrokeStyle("grey"),w.setGlobalAlpha(.4),w.setFillStyle("black"),w.strokeRect(u,f,v,x),w.fillRect(0,0,this.windowWidth,f),w.fillRect(0,f,u,x),w.fillRect(0,f+x,this.windowWidth,this.windowHeight-x-f-r),w.fillRect(u+v,f,this.windowWidth-v-u,x),w.setStrokeStyle("red"),w.moveTo(u+20,f),w.lineTo(u,f),w.lineTo(u,f+20),w.moveTo(u+v-20,f),w.lineTo(u+v,f),w.lineTo(u+v,f+20),w.moveTo(u+20,f+x),w.lineTo(u,f+x),w.lineTo(u,f+x-20),w.moveTo(u+v-20,f+x),w.lineTo(u+v,f+x),w.lineTo(u+v,f+x-20),w.stroke(),w.draw(!1,(function(){i&&(t.styleDisplay="flex",t.styleTop=t.drawTop+"px",g.setFillStyle("black"),t.fDrawImage())})),this.$emit("avtinit")},fDrawImage:function(){var t=Date.now();if(!(t-this.drawTm<20)){this.drawTm=t;var i=this.ctxCanvas;i.fillRect(0,0,this.windowWidth,this.windowHeight-r),i.translate(this.posWidth+this.useWidth/2,this.posHeight+this.useHeight/2),i.scale(this.scaleSize,this.scaleSize),i.rotate(this.rotateDeg*Math.PI/180),i.drawImage(this.imgPath,-this.useWidth/2,-this.useHeight/2,this.useWidth,this.useHeight),i.draw(!1)}},fHideImg:function(){this.prvImg="",this.prvTop="-10000px",this.showOper=!0,this.prvImgData=null,this.target=null},fClose:function(){this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),this.noBar||uni.showTabBar()},fPreview:function(){var t=this;if(!this.fPreviewing){this.fPreviewing=!0,setTimeout((function(){t.fPreviewing=!1}),1e3);var i=this.selStyle,e=parseInt(i.left),a=parseInt(i.top),s=parseInt(i.width),n=parseInt(i.height);e*=this.pixelRatio,a*=this.pixelRatio,uni.showLoading({mask:!0}),uni.canvasToTempFilePath({x:e,y:a,width:s,height:n,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(i){t.prvImgTmp=i=i.tempFilePath;var e=t.ctxCanvasPrv,a=t.windowWidth,s=parseInt(t.cvsStyleHeight),n=parseInt(t.selStyle.width),r=parseInt(t.selStyle.height),o=a-40,h=s-80,l=o/n,c=r*l;c<h?(n=o,r=c):(l=h/r,n*=l,r=h),e.setFillStyle("black"),e.fillRect(0,0,a,s),t.prvX=a=(a-n)/2,t.prvY=s=(s-r)/2,t.prvWidth=n,t.prvHeight=r,e.drawImage(i,a,s,n,r),e.draw(!1),t.btop(i).then((function(i){t.showOper=!1,t.prvTop=t.drawTop+"px"}))},fail:function(){uni.showToast({title:"error2",duration:2e3})},complete:function(){uni.hideLoading()}},this)}},fChooseImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(i){var a=i.selWidth,s=i.selHeight,n=i.expWidth,o=i.expHeight,h=i.quality,l=i.canRotate,c=i.canScale,d=i.minScale,p=i.maxScale,u=i.stretch,f=i.inner,v=i.lock;n&&(this.exportWidth=n.indexOf("rpx")>=0?parseInt(n)*this.pxRatio:parseInt(n)),o&&(this.exportHeight=o.indexOf("rpx")>=0?parseInt(o)*this.pxRatio:parseInt(o)),this.letRotate="false"===l?0:1,this.letScale="false"===c?0:1,this.qlty=parseInt(h)||.9,this.mnScale=d||.3,this.mxScale=p||4,this.stc=u,this.isin="true"===f?1:0,this.lck=v,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),a&&s&&(a=a.indexOf("rpx")>=0?parseInt(a)*this.pxRatio:parseInt(a),s=s.indexOf("rpx")>=0?parseInt(s)*this.pxRatio:parseInt(s),this.selStyle.width=a+"px",this.selStyle.height=s+"px",this.selStyle.top=(this.windowHeight-s-r)/2+"px",this.selStyle.left=(this.windowWidth-a)/2+"px",this.hasSel=!0)}this.rtn=e,this.indx=t,this.fSelect()},fRotate:function(){this.rotateDeg+=90-this.rotateDeg%90,this.fDrawImage()},fStart:function(t){var i=t.touches,e=i[0],a=i[1];if(this.touch0=e,this.touch1=a,a){var s=a.x-e.x,n=a.y-e.y;this.fgDistance=Math.sqrt(s*s+n*n)}},fMove:function(t){var i=t.touches,e=i[0],a=i[1];if(a){var s=a.x-e.x,n=a.y-e.y,r=Math.sqrt(s*s+n*n),o=.005*(r-this.fgDistance),h=this.scaleSize+o;do{if(!this.letScale)break;if(h<this.mnScale)break;if(h>this.mxScale)break;if(this.isin){var l=this.useWidth*h,c=this.useHeight*h,d=this.posWidth+this.useWidth/2,p=this.posHeight+this.useHeight/2,u=d-l/2,f=p-c/2,v=u+l,x=f+c,g=parseInt(this.selStyle.left),w=parseInt(this.selStyle.top),b=parseInt(this.selStyle.width),y=parseInt(this.selStyle.height);if(g<u||g+b>v||w<f||w+y>x)break;this.scaleWidth=(this.useWidth-l)/2,this.scaleHeight=(this.useHeight-c)/2}this.scaleSize=h}while(0);this.fgDistance=r,a.x!==e.x&&this.letRotate&&(s=(this.touch1.y-this.touch0.y)/(this.touch1.x-this.touch0.x),n=(a.y-e.y)/(a.x-e.x),this.rotateDeg+=180*Math.atan((n-s)/(1+s*n))/Math.PI,this.touch0=e,this.touch1=a),this.fDrawImage()}else if(this.touch0){var m=e.x-this.touch0.x,k=e.y-this.touch0.y,S=this.posWidth+m,I=this.posHeight+k;if(this.isin){var W=this.useWidth*this.scaleSize,H=this.useHeight*this.scaleSize,T=S+this.useWidth/2,R=I+this.useHeight/2,C=T-W/2,D=R-H/2,P=C+W,M=D+H,$=parseInt(this.selStyle.left),z=parseInt(this.selStyle.top),O=parseInt(this.selStyle.width),E=parseInt(this.selStyle.height);!this.lckWidth&&Math.abs(m)<100&&($>=C&&$+O<=P?this.posWidth=S:$<C?this.posWidth=$-this.scaleWidth:$+O>P&&(this.posWidth=$-(W-O)-this.scaleWidth)),!this.lckHeight&&Math.abs(k)<100&&(z>=D&&z+E<=M?this.posHeight=I:z<D?this.posHeight=z-this.scaleHeight:z+E>M&&(this.posHeight=z-(H-E)-this.scaleHeight))}else Math.abs(m)<100&&!this.lckWidth&&(this.posWidth=S),Math.abs(k)<100&&!this.lckHeight&&(this.posHeight=I);this.touch0=e,this.fDrawImage()}},fEnd:function(t){var i=t.touches,e=i&&i[0];i&&i[1];e?this.touch0=e:(this.touch0=null,this.touch1=null)},fGetImgData:function(){var t=this;return new Promise((function(i,e){var a=t.prvX,s=t.prvY,n=t.prvWidth,r=t.prvHeight;a*=t.pixelRatio,s*=t.pixelRatio,n*=t.pixelRatio,r*=t.pixelRatio,uni.canvasGetImageData({canvasId:"prv-canvas",x:a,y:s,width:n,height:r,success:function(t){i(t.data)},fail:function(t){e(t)}},t)}))},fColorChange:function(t){var i=this;return(0,s.default)(regeneratorRuntime.mark((function e(){var a,s,n,r,o,h,l,c,d,p,u,f,v,x,g,w,b,y,m,k,S,I,W,H,T,R,C;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=Date.now(),!(a-i.prvTm<100)){e.next=3;break}return e.abrupt("return");case 3:if(i.prvTm=a,uni.showLoading({mask:!0}),i.prvImgData){e.next=11;break}return e.next=8,i.fGetImgData().catch((function(t){uni.showToast({title:"error_read",duration:2e3})}));case 8:if(i.prvImgData=e.sent){e.next=10;break}return e.abrupt("return");case 10:i.target=new Uint8ClampedArray(i.prvImgData.length);case 11:if(s=i.prvImgData,n=i.target,r=t.detail.value,0===r)n=s;else for(r=(r+100)/200,r<.005&&(r=0),r>.995&&(r=1),S=s.length-1;S>=0;S-=4)o=s[S-3]/255,h=s[S-2]/255,l=s[S-1]/255,w=Math.max(o,h,l),g=Math.min(o,h,l),f=w-g,w===g?d=0:w===o&&h>=l?d=(h-l)/f*60:w===o&&h<l?d=(h-l)/f*60+360:w===h?d=(l-o)/f*60+120:w===l&&(d=(o-h)/f*60+240),u=(w+g)/2,0===u||w===g?p=0:0<u&&u<=.5?p=f/(2*u):u>.5&&(p=f/(2-2*u)),s[S]&&(c=s[S]),r<.5?p=p*r/.5:r>.5&&(p=2*p+2*r-p*r/.5-1),0===p?o=h=l=Math.round(255*u):(u<.5?x=u*(1+p):u>=.5&&(x=u+p-u*p),v=2*u-x,b=d/360,y=b+1/3,m=b,k=b-1/3,I=function(t){return t<0?t+1:t>1?t-1:t},W=function(t){return t<1/6?v+6*(x-v)*t:t>=1/6&&t<.5?x:t>=.5&&t<2/3?v+6*(x-v)*(2/3-t):v},o=y=Math.round(255*W(I(y))),h=m=Math.round(255*W(I(m))),l=k=Math.round(255*W(I(k)))),c&&(n[S]=c),n[S-3]=o,n[S-2]=h,n[S-1]=l;H=i.prvX,T=i.prvY,R=i.prvWidth,C=i.prvHeight,i.ctxCanvasPrv.setFillStyle("black"),i.ctxCanvasPrv.fillRect(H,T,R,C),i.ctxCanvasPrv.draw(!0),H*=i.pixelRatio,T*=i.pixelRatio,R*=i.pixelRatio,C*=i.pixelRatio,uni.canvasPutImageData({canvasId:"prv-canvas",x:H,y:T,width:R,height:C,data:n,fail:function(){uni.showToast({title:"error_put",duration:2e3})},complete:function(){uni.hideLoading()}},i);case 22:case"end":return e.stop()}}),e)})))()},btop:function(t){return new Promise((function(i,e){var a=t.split(","),s=a[0].match(/:(.*?);/)[1],n=atob(a[1]),r=n.length,o=new Uint8Array(r);while(r--)o[r]=n.charCodeAt(r);return i((window.URL||window.webkitURL).createObjectURL(new Blob([o],{type:s})))}))}}};i.default=o},b487:function(t,i,e){"use strict";e.r(i);var a=e("1228"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},b73a:function(t,i,e){var a=e("dfa2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("e3dc1e72",a,!0,{sourceMap:!1,shadowMode:!1})},b85c:function(t,i,e){"use strict";e("a4d3"),e("e01a"),e("d28b"),e("d3b7"),e("3ca3"),e("ddb0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=n;var a=s(e("06c5"));function s(t){return t&&t.__esModule?t:{default:t}}function n(t,i){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=(0,a.default)(t))||i&&t&&"number"===typeof t.length){e&&(t=e);var s=0,n=function(){};return{s:n,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,h=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return o=t.done,t},e:function(t){h=!0,r=t},f:function(){try{o||null==e["return"]||e["return"]()}finally{if(h)throw r}}}}},b922:function(t,i,e){"use strict";var a=e("b73a"),s=e.n(a);s.a},bd59:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var a={xyAvatar:e("8f79").default},s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"cutBox"},[e("v-uni-image",{staticClass:"avatar",attrs:{src:t.urls[0]},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chooseImage(0)}}}),e("xy-avatar",{ref:"avatar",on:{upload:function(i){arguments[0]=i=t.$handleEvent(i),t.cutImage.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"action"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},n=[]},decb:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-image",{staticClass:"my-avatar",style:[t.imgStyle],attrs:{src:t.imgSrc.imgSrc},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fSelect.apply(void 0,arguments)}}}),e("v-uni-canvas",{staticClass:"my-canvas",style:{top:t.styleTop,height:t.cvsStyleHeight},attrs:{"canvas-id":"avatar-canvas",id:"avatar-canvas","disable-scroll":"false"}}),e("v-uni-canvas",{staticClass:"oper-canvas",style:{top:t.styleTop,height:t.cvsStyleHeight},attrs:{"canvas-id":"oper-canvas",id:"oper-canvas","disable-scroll":"false"},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.fStart.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.fMove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.fEnd.apply(void 0,arguments)}}}),e("v-uni-canvas",{staticClass:"prv-canvas",style:{height:t.cvsStyleHeight,top:t.prvTop},attrs:{"canvas-id":"prv-canvas",id:"prv-canvas","disable-scroll":"false"},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.fHideImg.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"oper-wrapper",style:{display:t.styleDisplay}},[e("v-uni-view",{staticClass:"oper"},[t.showOper?e("v-uni-view",{staticClass:"btn-wrapper"},[e("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fSelect.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("重选")])],1),e("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fClose.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("关闭")])],1),e("v-uni-view",{style:{width:t.btnWidth,display:t.btnDsp},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fRotate.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("旋转")])],1),e("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fPreview.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("预览")])],1),e("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fUpload.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("上传")])],1)],1):e("v-uni-view",{staticClass:"clr-wrapper"},[e("v-uni-slider",{staticClass:"my-slider",attrs:{"block-size":"25",value:"0",min:"-100",max:"100",activeColor:"red",backgroundColor:"green","block-color":"grey","show-value":!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.fColorChange.apply(void 0,arguments)}}}),e("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fPrvUpload.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("上传")])],1)],1)],1)],1)],1)},n=[]},dfa2:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".my-canvas[data-v-06217155]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;background:#000;left:0;z-index:100000;width:100%}.my-avatar[data-v-06217155]{width:%?150?%;height:%?150?%;border-radius:100%}.oper-canvas[data-v-06217155]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;left:0;z-index:100001;width:100%}.prv-canvas[data-v-06217155]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;background:#000;left:0;z-index:200000;width:100%}.oper-wrapper[data-v-06217155]{height:50px;position:fixed!important;box-sizing:border-box;border:1px solid #f1f1f1;background:#fff;width:100%;left:0;bottom:0;z-index:100009;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.oper[data-v-06217155]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?10?% %?20?%;width:100%;height:100%;box-sizing:border-box;-webkit-align-self:center;align-self:center}.btn-wrapper[data-v-06217155]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n\n\nheight:50px;\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn-wrapper uni-view[data-v-06217155]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:16px;color:#333;border:1px solid #f1f1f1;border-radius:6%}.hover[data-v-06217155]{background:#f1f1f1;border-radius:6%}.clr-wrapper[data-v-06217155]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.clr-wrapper uni-view[data-v-06217155]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:16px;color:#333;border:1px solid #f1f1f1;border-radius:6%}.my-slider[data-v-06217155]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}",""]),t.exports=i},ed5a:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-7d001b36]{background:#f8f8f8}.cutBox[data-v-7d001b36]{padding-top:%?60?%;text-align:center;background-color:#fff;border:1px solid #f8f8f8}.cutBox .avatar[data-v-7d001b36]{width:%?500?%;height:%?500?%}.action[data-v-7d001b36]{padding:20px}.action uni-button[type="primary"][data-v-7d001b36]{background-color:#e23435}body.?%PAGE?%[data-v-7d001b36]{background:#f8f8f8}',""]),t.exports=i},eda2:function(t,i,e){var a=e("ed5a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("71797285",a,!0,{sourceMap:!1,shadowMode:!1})}}]);