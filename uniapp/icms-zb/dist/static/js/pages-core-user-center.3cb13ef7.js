(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-user-center"],{"02b9":function(e,t,n){"use strict";n.r(t);var i=n("03bc"),r=n("9021");for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);var o,u=n("f0c5"),a=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"6304bceb",null,!1,i["a"],o);t["default"]=a.exports},"03bc":function(e,t,n){"use strict";var i={xyListItem:n("ed2c").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"wrap"},[n("xy-list-item",{staticClass:"p-t p-b m-t-0 m-b-sm",attrs:{type:"media",image:e.user.userInfo.avatar,imageSharp:"round",title:e.user.userInfo.nickname?e.user.userInfo.nickname:"未登录",titleFs:"17px",contentStyle:"margin-left: 10px;padding-top: 10px;",more:"xyicon xyicon-right",needLogin:!0,uid:e.user.userInfo.id,url:"/pages/core/settings/lists"}},[n("template",{slot:"info"},[e.user.userInfo.id?n("v-uni-view",{staticClass:"text-gray p-t-sm p-b-0"},[e._v(e._s(e.user.userInfo.email?e.user.userInfo.email.identifier:"邮箱未绑定"))]):n("v-uni-view",[n("v-uni-view",{staticClass:"font-md",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo("/pages/core/user/login")}}},[e._v("登录/注册")])],1)],1)],2),n("v-uni-view",[n("v-uni-view",{staticClass:"nav-list"},[n("xy-list-item",{attrs:{type:"link",needLogin:!0,uid:e.user.userInfo.id,url:"/pages/icms/post/my",more:"xyicon xyicon-right",title:"我发布的"}}),n("xy-list-item",{attrs:{type:"link",needLogin:!0,uid:e.user.userInfo.id,url:"/pages/icms/project/my",more:"xyicon xyicon-right",title:"我报名的"}}),n("xy-list-item",{attrs:{type:"link",needLogin:!0,uid:e.user.userInfo.id,url:"/pages/user_address/address/my",more:"xyicon xyicon-right",title:"收货地址"}}),n("xy-list-item",{attrs:{type:"link",needLogin:!0,uid:e.user.userInfo.id,url:"/pages/user_invite/invite/share",more:"xyicon xyicon-right",title:"邀请好友赢大礼"}}),n("xy-list-item",{attrs:{type:"link",uid:e.user.userInfo.id,url:"/pages/core/settings/about",more:"xyicon xyicon-right",title:"关于"+e.app.siteInfo.title}})],1),n("xy-list-item",{directives:[{name:"show",rawName:"v-show",value:e.user.userInfo.id,expression:"user.userInfo.id"}],staticClass:"m-t",attrs:{type:"button",title:"退出登录"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.logout.apply(void 0,arguments)}}})],1)],1)},s=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}))},"32cf":function(e,t,n){"use strict";var i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=i(n("c964")),s=i(n("f3f3")),o=n("2f62"),u=i(n("ed2c")),a=i(n("3037")),c={components:{xyListItem:u.default,xyTag:a.default},data:function(){return{}},onShow:function(){this.getUserInfo("/v1/core/user/info")},computed:(0,s.default)({},(0,o.mapState)(["app","user"])),onPullDownRefresh:function(){this.getUserInfo("/v1/core/user/info"),uni.stopPullDownRefresh()},methods:{getUserInfo:function(e){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var i,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.user.token||0!=t.user.userInfo.id){n.next=5;break}return n.next=3,t.util.request({url:e,method:"get"});case 3:if(i=n.sent,"200"==i.code){for(s in r=t.user.userInfo,i.data.userInfo)""!=i.data.userInfo[s]&&(r[s]=i.data.userInfo[s]);t.$store.commit("setUserInfo",r)}else t.util.showToast({title:i.msg,icon:"loading",duration:3e3});case 5:case"end":return n.stop()}}),n)})))()},navTo:function(e){uni.navigateTo({url:e})},logout:function(){var e=this;uni.showModal({content:"确定要退出登录么",success:function(t){t.confirm&&setTimeout((0,r.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/core/user/logout",method:"delete"});case 2:n=t.sent,200==n.code?(e.$store.commit("setToken",""),e.$store.commit("setUserInfo",""),e.util.showToast({title:n.msg,icon:"success",duration:1e3})):e.util.showToast({title:n.msg,icon:"loading",duration:2e3});case 4:case"end":return t.stop()}}),t)}))),200)}})}}};t.default=c},9021:function(e,t,n){"use strict";n.r(t);var i=n("32cf"),r=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=r.a}}]);